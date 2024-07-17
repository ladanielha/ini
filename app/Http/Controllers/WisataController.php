<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Http\Resources\PlacesCollection;
use App\Models\Nilaialt;
use App\Models\Places;
use Inertia\Inertia;



class WisataController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $places = new PlacesCollection(Places::paginate(50));
        return Inertia::render('Admin/Wisata/index',[ 
            'places'=> $places]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Admin/Wisata/kreate');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

     public function store(Request $request)
     {
 
        //set validation
        $request->validate([
         'namatempat' => 'required', 
         'jeniswisata' => 'required',
         'alamat' => 'required', 
         'harga' => 'required', 
         'jambuka' => 'required', 
         'jamtutup' => 'required',
         'desc'  => 'required',
         'gambar' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
         'link' => 'required',
         ]);

         if ($request->hasFile('gambar')) {
            $gambar = $request->file('gambar');
            $gambarName = time() . '.' . $gambar->getClientOriginalExtension();
            $gambar->move(public_path('uploads'), $gambarName);
        }
 
         //create wisata
         $places = new Places([
            'namatempat' => $request->input('namatempat'),
            'jeniswisata' => $request->input('jeniswisata'),
            'alamat' => $request->input('alamat'),
            'harga' => $request->input('harga'),
            'jambuka' => $request->input('jambuka'),
            'jamtutup' => $request->input('jamtutup'),
            'desc' => $request->input('desc'),
            'gambar' => $gambarName, // Store the image path in the database
            'link' => $request->input('link'),
            'namakota' => "Cirebon",
        ]);
    
        $places->save();

         Nilaialt::create([
             'wisata_id' => $places->wisata_id, 
             'rate_fasilitas'=> "0.25",
             'rate_pelayanan'=> "0.25",
             'rate_ramahkeluarga'=> "0.25",
             'rate_akomodasi'=> "0.25",
             
         ]);
 
         //redirect
         return redirect()->route('admin.wisata')->with('message', 'Data Berhasil Disimpan!');        
     }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
/*     public function detail($id)
    {
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
            'Nilaialt.rate_fasilitas',
            'Nilaialt.rate_pelayanan',
            'Nilaialt.rate_ramahkeluarga',
            'Nilaialt.rate_akomodasi'
        )
            ->join('Nilaialt', 'datawisata.wisata_id', '=', 'Nilaialt.wisata_id')
            ->where('datawisata.wisata_id', $id)
            ->first();
        //$place = Places::find($id);
        return Inertia::render('Client/Wisatadetail', [
            'places' => $wisatadata
        ]);
    } */

    public function detail($id)
    {

        $place = Places::find($id);
        return Inertia::render('Client/Wisatadetail', [
            'places' =>$place
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Places $places, Request $request)
    {
        //dd($request);
        return Inertia::render('Admin/Wisata/edit',[ 
            'places'=> $places->find($request->wisata_id)]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {

        $datawisata = Places::find($request->wisata_id);

        $request->validate([
            'namatempat' => 'required',
            'jeniswisata' => 'required',
            'alamat' => 'required',
            'harga' => 'required',
            'jambuka' => 'required',
            'jamtutup' => 'required',
            'desc' => 'required',
            'gambar' => 'image|mimes:jpeg,png,jpg,gif|max:2048', // Adjust the validation rules
            'link' => 'required',
        ]);
    
        if ($request->hasFile('gambar')) {
            $gambar = $request->file('gambar');
            $gambarName = time() . '.' . $gambar->getClientOriginalExtension();
            $gambar->move(public_path('uploads'), $gambarName);
    
            // Remove the old image if it exists
            if ($datawisata->gambar) {
                $oldImagePath = public_path('uploads') . '/' . $datawisata->gambar;
                if (file_exists($oldImagePath)) {
                    unlink($oldImagePath);
                }
            }
        } else {
            // jika tidak ada image maka tutup 
           $url = $datawisata->gambar;
           $imageName = pathinfo($url, PATHINFO_BASENAME);
           $gambarName =$imageName;
        }

        // Update wisata ke database
        Places::where('wisata_id', $request->wisata_id)->update([
            'namatempat' => $request->namatempat,
            'jeniswisata' => $request->jeniswisata,
            'alamat' => $request->alamat,
            'harga' => $request->harga,
            'jambuka' => $request->jambuka,
            'jamtutup' => $request->jamtutup,
            'desc' => $request->desc,
            'gambar' => $gambarName, // Store the updated image path in the database
            'link' => $request->link,
        ]);
    
        // Redirect
        return redirect()->route('admin.wisata')->with('message', 'Data Berhasil Diperbarui!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $places = Places::find($request->wisata_id);
        $places->delete();
        return redirect()->route('admin.wisata')->with('message', 'Data Berhasil Dihapus!');
    }
}
