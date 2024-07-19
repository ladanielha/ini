<?php

namespace App\Http\Controllers;

use App\Http\Resources\PlacesCollection;
use App\Models\Places;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Inertia\Inertia;
class WisataFrontController extends Controller
{
    //
    public function wisatakota($request)
    {
        //dd($request);
        $kota = $request;
        $places =  new PlacesCollection(Places::where('namakota', $request)->paginate(9));
        return Inertia::render('Client/Wisata', [
            'places' => $places,
            'kota' => $kota
        ]);
    }
    public function formrekowisatasaw()
    {
        //get kriteria untuk tampil di form 
        return Inertia::render('Client/Rekwisatasaw');
    }

    
    public function wisataSAW(Request $request)
    {
      
        // Validate request inputs
        $request->validate([
            'fasilitas' => ['required' ],
            'pelayanan' => ['required' ],
            'ramahkeluarga' => ['required' ],
            'akomodasi' => ['required' ],
        ]);

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
            'nilaiwisatasaw.rate_fasilitas',
            'nilaiwisatasaw.rate_pelayanan',
            'nilaiwisatasaw.rate_ramahkeluarga',
            'nilaiwisatasaw.rate_akomodasi'
        )
        ->join('nilaiwisatasaw', 'datawisata.wisata_id', '=', 'nilaiwisatasaw.wisata_id')
        ->get();

        if (count($wisatadata) == 0)
        abort(404);

         // Calculate normalisasi bobot
         $rateTotal = $request->fasilitas + 
         $request->pelayanan + 
         $request->ramahkeluarga + 
         $request->akomodasi;

        $weights = [
        'fasilitas' => $request->fasilitas/$rateTotal,
        'pelayanan' => $request->pelayanan/$rateTotal,
        'ramahkeluarga' => $request->ramahkeluarga/$rateTotal,
        'akomodasi' => $request->akomodasi/ $rateTotal,
        ];
        
        // Calculate normalized data for nilai min dan max
        $normalizedData = [];
        foreach ($wisatadata as $wisata) {
            $normalizedData[] = [
                'C1' => $wisata->rate_fasilitas / max(Arr::pluck($wisatadata, 'rate_fasilitas')),
                'C2' => $wisata->rate_pelayanan / max(Arr::pluck($wisatadata, 'rate_pelayanan')),
                'C3' => min(Arr::pluck($wisatadata, 'rate_ramahkeluarga')) / $wisata->rate_ramahkeluarga, // Adjusted for cost
                'C4' => $wisata->rate_akomodasi / max(Arr::pluck($wisatadata, 'rate_akomodasi')),
            ];
        }

         // Calculate scores
         foreach ($wisatadata as $index => $wisata) {
            $wisatadata[$index]->skor = (
                $weights['fasilitas'] * $normalizedData[$index]['C1'] +
                $weights['pelayanan'] * $normalizedData[$index]['C2'] +
                $weights['ramahkeluarga'] * $normalizedData[$index]['C3'] +
                $weights['akomodasi'] * $normalizedData[$index]['C4']
            );
            
        }

        // Sort data in descending order by score
        $rekomen = $wisatadata->sortByDesc('skor')->take(6);
        return Inertia::render('Client/Hrekomendasi', [
            'places' => $rekomen
        ]);

    }
}
