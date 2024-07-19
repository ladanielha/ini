<?php

namespace App\Http\Controllers;

use App\Models\Makanan;
use App\Models\Nilaimakanansaw;
use App\Models\Nilaimakananahp;

use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use App\Models\Places;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\MakananCollection;


class MakananFrontController extends Controller
{
    public function makanankota($request)
    {
        //dd($request);
        $kota = $request;
        $foods = Makanan::where('namakota', $request)->paginate(100);
        $food =  new MakananCollection(Makanan::where('namakota', $request)->paginate(9));
        return Inertia::render('Client/Makanan', [
            'foods' => $foods,
            'kota' => $kota
        ]);
    }

    public function formrekomakanan()
    {
        //get kriteria untuk tampil di form 
        return Inertia::render('Client/Rekmakanan');
    }
   
    public function hitungbobot(Request $request)
    {
        //validasi nilai bobot yg dimasukan
        $inputFields = [];
        $inputFields = [
            'harga_kualitas'   => $this->convertCompareValue($request->harga_kualitas),
            'harga_gizi'       => $this->convertCompareValue($request->harga_gizi),
            'harga_porsi'   => $this->convertCompareValue($request->harga_porsi),
            'kualitas_gizi'       => $this->convertCompareValue($request->kualitas_gizi),
            'kualitas_porsi'   => $this->convertCompareValue($request->kualitas_porsi),
            'gizi_porsi'       => $this->convertCompareValue($request->gizi_porsi),
        ];
       // dd($inputFields);

        $harga_kualitas = $inputFields['harga_kualitas'];
        $harga_gizi = $inputFields['harga_gizi'];
        $harga_porsi = $inputFields['harga_porsi'];
        $kualitas_gizi = $inputFields['kualitas_gizi'];
        $kualitas_porsi = $inputFields['kualitas_porsi'];
        $gizi_porsi = $inputFields['gizi_porsi'];

        //step 1 : definisikan array pada matrix dari input user
        $matriks = [
            [1, $harga_kualitas, $harga_gizi, $harga_porsi],
            [1 / $harga_kualitas, 1,  $kualitas_gizi, $kualitas_porsi],
            [1 / $harga_gizi, 1 / $kualitas_gizi, 1, $gizi_porsi],
            [1 / $harga_porsi, 1 / $kualitas_porsi, 1 / $gizi_porsi, 1]

        ];
        //dd($matriks);
        //step 2: panggil function normalisasi nilai matrix 
        $normalizedMatrix = $this->normalizeMatrixByColumnSum($matriks);
        //step 3: panggil function hitung nilai pv
        $normalizedCriteriaPriorities = $this->calculateCriteriaPriorities($matriks);

        //Step Verifikasi Nilai Bobot
        // step 4 cari nilai lambda
        //mengalikan matrix awal dengan nilai priority / hasil rata rata dari matrix normal
        $multiplied = $this->multiplyMatrix($matriks, $normalizedCriteriaPriorities);
        $inilamdamax = array_sum($multiplied);
        // step 5 cari Consistency Index (CI)
        // nilai 4 berdasarkan jumlah kriteria
        $ci = ($inilamdamax - 4) / (4 - 1);
        // step 6 cari Consistency Ratio (CR)
        // nilai 0.9 didapat dari IR dengan menggunakan 4 kriteria maka nilai ir = 0.9
        $cr = $ci / 0.9;

            $makanandata = Makanan::select(
                'datamakanan.makanan_id',
                'store_id',
                'namamakanan',
                'jenismakanan',
                'namakota',
                'harga',
                'desc',
                'gambar',
                'sertifikat',
                'nilaimakananahp.rate_harga',
                'nilaimakananahp.rate_kualitas',
                'nilaimakananahp.rate_gizi',
                'nilaimakananahp.rate_porsi'
            )
                ->join('nilaimakananahp', 'datamakanan.makanan_id', '=', 'nilaimakananahp.makanan_id')
                ->get();

            if (count($makanandata) == 0)
                abort(404);

            // hitung nilai setiap data dengan nilai bobot
            foreach ($makanandata as $record) {
                $record->score = (
                    $record->rate_harga * $normalizedCriteriaPriorities[0] +
                    $record->rate_kualitas * $normalizedCriteriaPriorities[1] +
                    $record->rate_gizi * $normalizedCriteriaPriorities[2] +
                    $record->rate_porsi * $normalizedCriteriaPriorities[3]
                );
            }
            // sorting berdasarkan score
            $makanandata = $makanandata->sortByDesc('score');
            //simpan data ke session untuk di tujukan ke hasilrekomendasi 
            session(['hasilrekomendasi' => $makanandata]);

            return redirect()->route('hasilrekomendasimahp')->with('message', 'Hasil Rekomendasi');
        
                
    }

    private function calculateCriteriaPriorities($inimatrixku)
    {
        $criteriaCount = count($inimatrixku);

        // step 1: normalisais matrix
        $normalizedMatrix = $this->normalizeMatrixByColumnSum($inimatrixku);

        // step 2: Cari nilai rata rata (criteria priorities)
        $criteriaPriorities = [];
        for ($i = 0; $i < $criteriaCount; $i++) {
            $rowSum = array_sum($normalizedMatrix[$i]);
            $criteriaPriorities[] = $rowSum / $criteriaCount;
        }

        // step 3: normalisasi nilai dengan dibagi jumlah banyaknya kriteria
        $sumCriteriaPriorities = array_sum($criteriaPriorities);
        $normalizedCriteriaPriorities = array_map(function ($value) use ($sumCriteriaPriorities) {
            return $value / $sumCriteriaPriorities;
        }, $criteriaPriorities);

        
        return $normalizedCriteriaPriorities;
    }
    
    private function normalizeMatrixByColumnSum($inimatrixku)
    {

        $rowCount = count($inimatrixku);
        $colCount = count($inimatrixku[0]);
        // 1: Hitung sum dari setip kolom matrix  contone: 3+1+1/2+1/4 = 4,75
        $columnSums = array_fill(0, $colCount, 0);

        for ($col = 0; $col < $colCount; $col++) {
            for ($row = 0; $row < $rowCount; $row++) {
                $columnSums[$col] += $inimatrixku[$row][$col];
            }
        }
        
        // 2: hitung normalisasi matrix berdasrkan sum  kolom
        $normalizedMatrix = [];

        for ($col = 0; $col < $colCount; $col++) {
            for ($row = 0; $row < $rowCount; $row++) {
                if ($columnSums[$col] != 0) {
                    $normalizedMatrix[$row][$col] = $inimatrixku[$row][$col] / $columnSums[$col];
                } else {
                    echo"perhitungan error";
                    abort (404);
                }
            }
        }

        return ($normalizedMatrix);
        
    }

    private function multiplyMatrix($inimatrixku, $normalizedCriteriaPriorities)
    {
        $result = [];
        $rowCount = count($inimatrixku);
        $colCount = count($inimatrixku[0]);

        if ($colCount !== count($normalizedCriteriaPriorities)) {
            // Matrix and normalizedCriteriaPriorities dimensions are not compatible for multiplication
            return null;
        }

        for ($i = 0; $i < $rowCount; $i++) {
            $rowSum = 0;
            for ($j = 0; $j < $colCount; $j++) {
                $rowSum += $inimatrixku[$i][$j] * $normalizedCriteriaPriorities[$j];
            }
            $result[] = $rowSum;
        }

        return $result;
    }

   /*  function hitungAlt($normalizedMatrix, $criteriaPriorities)
    {
        $alternativeCount = count($normalizedMatrix);
        $criteriaCount = count($criteriaPriorities);

        $alternativePriorities = [];

        for ($i = 0; $i < $alternativeCount; $i++) {
            $rowSum = 0;

            for ($j = 0; $j < $criteriaCount; $j++) {
                $rowSum += $normalizedMatrix[$i][$j] * $criteriaPriorities[$j];
            }

            $alternativePriorities[] = $rowSum;
        }

        return $alternativePriorities;
    } */

    private function convertCompareValue($inMatrix)
    {
            switch($inMatrix){
                case -4:
                    return 5;
                case -3:
                    return 4;
                case -2:
                    return 3;
                case -1:
                    return 2;
                case 1:
                    return 0.5;
                case 2:
                    return 0.33;
                case 3:
                    return 0.25;
                case 4:
                    return 0.2;
                default:
                    return 1;
                    
            }
    }


    public function hasilrekomendasi(Request $request)
    {
         //get data rekomendasi dari session 
         $rekomendasi = session('hasilrekomendasi');
         $currentPage = $request->query('page', 1);
         $perPage = 8;
         $paginatedData = $rekomendasi->forPage($currentPage, $perPage);
         return Inertia::render('Client/Hrekomendasimahp', [
             'places' => $paginatedData
         ]);
    }

    public function formrekomakanansaw()
    {
        //get kriteria untuk tampil di form 
        return Inertia::render('Client/Rekmakanansaw');
    }
    
    public function SAW(Request $request)
    {
     
        // Validate request inputs
        $request->validate([
            'sumber_protein' => ['required' ],
            'penyajian' => ['required' ],
            'harga_m' => ['required' ],
            'porsi' => ['required' ],
        ]);
    
        // Get all food items
        //$makanan = Makanan::all();
        $foods = Makanan::select(
            'datamakanan.makanan_id',
            'store_id',
            'namamakanan',
            'jenismakanan',
            'namakota',
            'harga',
            'desc',
            'gambar',
            'sertifikat',
            'nilaimakanansaw.rate_harga',
            'nilaimakanansaw.rate_kualitas',
            'nilaimakanansaw.rate_gizi',
            'nilaimakanansaw.rate_porsi'
        )
            ->join('nilaimakanansaw', 'datamakanan.makanan_id', '=', 'nilaimakanansaw.makanan_id')
            ->get();
        // Check if there are no food items
        if ($foods->isEmpty()) {
            abort(404, 'No food items found.');
        }
    
        // Calculate normalisasi bobot
        $rateTotal = $request->sumber_protein + 
                     $request->penyajian + 
                     $request->harga_m + 
                     $request->porsi;

        $weights = [
            'sumber_protein' => $request->sumber_protein/$rateTotal,
            'penyajian' => $request->penyajian/$rateTotal,
            'harga_m' => $request->harga_m/$rateTotal,
            'porsi' => $request->porsi/ $rateTotal,
        ];
        //dd($foods);
    
        // Calculate normalized data for nilai min dan max
        $normalizedData = [];
        foreach ($foods as $food) {
            $normalizedData[] = [
                'C1' => $food->rate_kualitas / max(Arr::pluck($foods, 'rate_kualitas')),
                'C2' => $food->rate_gizi / max(Arr::pluck($foods, 'rate_gizi')),
                'C3' => min(Arr::pluck($foods, 'rate_harga')) / $food->rate_harga, // Adjusted for cost
                'C4' => $food->rate_porsi / max(Arr::pluck($foods, 'rate_porsi')),
            ];
        }
        //dd($normalizedData);
    
        // Calculate scores
        foreach ($foods as $index => $food) {
            $foods[$index]->skor = (
                $weights['sumber_protein'] * $normalizedData[$index]['C1'] +
                $weights['penyajian'] * $normalizedData[$index]['C2'] +
                $weights['harga_m'] * $normalizedData[$index]['C3'] +
                $weights['porsi'] * $normalizedData[$index]['C4']
            );
            //dd($foods);
        }
        
    
        // Sort data in descending order by score
        $rekomen = $foods->sortByDesc('skor')->take(6);
        //dd($rekomen);
        // Return the view with the recommendations and request data
        return Inertia::render('Client/Hrekomendasimahp', [
            'places' => $rekomen
        ]);
    }
    
}
