<?php

namespace App\Http\Controllers;

use App\Http\Resources\KotaCollection;
use App\Http\Resources\MakananCollection;
use App\Http\Resources\PlacesCollection;
use App\Models\caroseldb;
use App\Models\Kota;
use App\Models\Makanan;
use App\Models\Nilaipv;
use App\Models\Nilaialt;
use Illuminate\Http\Request;
use App\Models\Places;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;


class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $makanan = new MakananCollection(Makanan::paginate(300));
        $places = new PlacesCollection(Places::orderBy('wisata_id', 'desc')->paginate(3));
        $kotas = new KotaCollection(Kota::orderBy('kota_id', 'desc')->paginate(6));
        $caroseldb = Caroseldb::all();
        return Inertia::render('Client/Home',[ 
            'places'=> $places,
            'city' => $kotas,
            'carosel' => $caroseldb,
            'makanan' => $makanan
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function wisata()
    {
        $places = new PlacesCollection(Places::paginate(9));
        return Inertia::render('Client/Wisata',[ 
            'places'=> $places]);
    }

    public function formrekowisata()
    {
        //get kriteria untuk tampil di form 
        return Inertia::render('Client/Rekomendasi');
    }

    public function hitungbobot(Request $request)
    {
        //tanpung nilai input       
          $inputFields = [];
          $inputFields = [
            'fasilitas_pelayanan'   => $this->convertCompareValue($request->fasilitas_pelayanan), 
            'fasilitas_ramah'       => $this->convertCompareValue($request->fasilitas_ramah), 
            'fasilitas_akomodasi'   => $this->convertCompareValue($request->fasilitas_akomodasi) ,
            'pelayanan_ramah'       => $this->convertCompareValue($request->pelayanan_ramah), 
            'pelayanan_akomodasi'   => $this->convertCompareValue($request->pelayanan_akomodasi), 
            'ramah_akomodasi'       => $this->convertCompareValue($request->ramah_akomodasi), 
          ];

            $fasilitas_pelayanan = $inputFields['fasilitas_pelayanan'];
            $fasilitas_ramah = $inputFields['fasilitas_ramah'];
            $fasilitas_akomodasi = $inputFields['fasilitas_akomodasi'];
            $pelayanan_ramah = $inputFields['pelayanan_ramah'];
            $pelayanan_akomodasi = $inputFields['pelayanan_akomodasi'];
            $ramah_akomodasi = $inputFields['ramah_akomodasi'];

        //step 1 : definisikan array matrix dari input
        $inimatrixku = [
            
             [ 1  , $fasilitas_pelayanan  , $fasilitas_ramah  , $fasilitas_akomodasi],
            [ 1/$fasilitas_pelayanan ,1 ,  $pelayanan_ramah  , $pelayanan_akomodasi],
            [ 1/$fasilitas_ramah ,1/$pelayanan_ramah ,1  , $ramah_akomodasi],
            [ 1/$fasilitas_akomodasi , 1/$pelayanan_akomodasi, 1/$ramah_akomodasi, 1] 
            
        ];
        //dd($inimatrixku);
        //step 2: panggil function normalisasi nilai matrix 
        $normalizedMatrix = $this->normalizeMatrixByColumnSum($inimatrixku);
        //step 3: panggil function hitung nilai pv
        $normalizedCriteriaPriorities = $this->calculateCriteriaPriorities($inimatrixku);
       
        //Step Verifikasi Nilai Bobot
        // step 4 cari nilai lambda
        //mengalikan matrix awal dengan nilai priority / hasil rata rata dari matrix norm
        $multiplied=$this->multiplyMatrix($inimatrixku,$normalizedCriteriaPriorities);
        $inilamdamax = array_sum($multiplied);
        // step 5 cari Consistency Index (CI) (cek konsistensi)
        // nilai 4 di dapat dari jumlah banyaknya kriteria 
        $ci = ($inilamdamax - 4) / (4 - 1);
        // step 6 cari cr Consistency Ratio (CR)
        // nilai 0.9 didapat dari IR dengan menggunakan 4 kriteria maka nilai ir = 0.9
        $cr = $ci/0.9;
        //dd($cr);
                          
             $wisatadata = Places::select(
                'datawisata.wisata_id',
                'namatempat',
                'jeniswisata',
                'alamat',
                'harga',
                'jambuka',
                'jamtutup',
                'desc',
                'gambar',
                'link',
                'nilaialt.rate_fasilitas',
                'nilaialt.rate_pelayanan',
                'nilaialt.rate_ramahkeluarga',
                'nilaialt.rate_akomodasi'
            )
            ->join('nilaialt', 'datawisata.wisata_id', '=', 'nilaialt.wisata_id')
            ->get();
            //dd($normalizedMatrix,$normalizedCriteriaPriorities,$multiplied,$inilamdamax,$ci,$cr,$wisata_alt);
            if (count($wisatadata) == 0)
            abort(404);
                        
            // hitung nilai tiap data dengan nilai bobot
            foreach ($wisatadata as $record) {
                $record->score = (
                    $record->rate_fasilitas * $normalizedCriteriaPriorities[0] +
                    $record->rate_pelayanan * $normalizedCriteriaPriorities[1] +
                    $record->rate_ramahkeluarga * $normalizedCriteriaPriorities[2] +
                    $record->rate_akomodasi * $normalizedCriteriaPriorities[3]
                );
            }
            // sorting berdasarkan nilai 
            $wisatadata = $wisatadata->sortByDesc('score')->take(6); 
            //simpan data ke dalam session untuk di tujukan ke hasilrekomendasi 
            //dd($wisatadata);
            session(['hasilrekomendasi' => $wisatadata]);

            return redirect()->route('hasilrekomendasiwahp')->with('message', 'Hasil Rekomendasi');           
        
                
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
        //dd($rekomendasi);
        return Inertia::render('Client/Hrekomendasi',[ 
            'places'=> $rekomendasi
        ]);
    }

    public function SAW(Request $request)
    {
        //dd($request);
        // Validate request inputs
        $request->validate([
            'sumber_protein' => ['required' ],
            'penyajian' => ['required' ],
            'harga_m' => ['required' ],
            'porsi' => ['required' ],
        ]);
    
        // Get all food items
        //$makanan = Makanan::all();
        $wisatadata = Places::select(
            'datawisata.wisata_id',
            'namatempat',
            'jeniswisata',
            'alamat',
            'harga',
            'jambuka',
            'jamtutup',
            'desc',
            'gambar',
            'link',
            'nilaialt.rate_fasilitas',
            'nilaialt.rate_pelayanan',
            'nilaialt.rate_ramahkeluarga',
            'nilaialt.rate_akomodasi'
        )
        ->join('nilaialt', 'datawisata.wisata_id', '=', 'nilaialt.wisata_id')
        ->get();
        
        // Check if there are no food items
        if ($wisatadata->isEmpty()) {
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
        foreach ($wisatadata as $food) {
            $normalizedData[] = [
                'C1' => $food->rate_kualitas / max(Arr::pluck($wisatadata, 'rate_kualitas')),
                'C2' => $food->rate_gizi / max(Arr::pluck($wisatadata, 'rate_gizi')),
                'C3' => min(Arr::pluck($wisatadata, 'rate_harga')) / $food->rate_harga, // Adjusted for cost
                'C4' => $food->rate_porsi / max(Arr::pluck($wisatadata, 'rate_porsi')),
            ];
        }
        //dd($normalizedData);
    
        // Calculate scores
        foreach ($wisatadata as $index => $food) {
            $wisatadata[$index]->skor = (
                $weights['sumber_protein'] * $normalizedData[$index]['C1'] +
                $weights['penyajian'] * $normalizedData[$index]['C2'] +
                $weights['harga_m'] * $normalizedData[$index]['C3'] +
                $weights['porsi'] * $normalizedData[$index]['C4']
            );
            //dd($foods);
        }
        
    
        // Sort data in descending order by score
        $rekomen = $wisatadata->sortByDesc('skor')->take(6);
        //dd($rekomen);
        // Return the view with the recommendations and request data
        return Inertia::render('Client/Hrekomendasimahp', [
            'places' => $rekomen
        ]);
    }

              

}
