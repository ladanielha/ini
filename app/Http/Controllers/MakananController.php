<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Http\Resources\MakananCollection;
use App\Models\Nilaialt;
use App\Models\Makanan;
use App\Models\restorandb;
use Inertia\Inertia;



class MakananController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $makanan = new MakananCollection(Makanan::paginate(300));
       
        return Inertia::render('Admin/Makanan/index', [
            'makanan' => $makanan,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $restoran = restorandb::select('namarestoran', 'store_id')->get();
        return Inertia::render('Admin/Makanan/kreate' ,[
            'restoran' =>$restoran
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function store(Request $request)
    {
        //dd($request);
        //set validation
        $request->validate([
            'namamakanan' => 'required',
            'jenismakanan' => 'required',
            'harga' => 'required',
            'desc'  => 'required',
            'gambar' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
            'resto' => 'required',
            'sertifikat' => 'required',
        ]);

        if ($request->hasFile('gambar')) {
            $gambar = $request->file('gambar');
            $gambarName = time() . '.' . $gambar->getClientOriginalExtension();
            $gambar->move(public_path('uploads'), $gambarName);
        }

        //create makanan
        $places = new Makanan([
            'namamakanan' => $request->input('namamakanan'),
            'jenismakanan' => $request->input('jenismakanan'),
            'namakota' => $request->input('namakota'),
            'harga' => $request->input('harga'),
            'desc' => $request->input('desc'),
            'gambar' => $gambarName, // Store the image path in the database
            'resto' => $request->input('resto'),
            'sertifikat' => $request->input('sertifikat'),
            'alamat' => $request->input('resto'),
            'link' => $request->input('resto'),
            'store_id' => $request->input('store_id') || 0
        ]);
  
        
        $places->save();

        // Nilaialt::create([
        //     'makanan_id' => $places->makanan_id,
        //     'rate_harga' => "0.25",
        //     'rate_kualitas' => "0.25",
        //     'rate_gizi' => "0.25",
        //     'rate_porsi' => "0.25",

        // ]);

        //redirect
        return redirect()->route('admin.makanan')->with('message', 'Data Berhasil Disimpan!');
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function detail($id)
    {
        $food = Makanan::find($id);
        
      
        return Inertia::render('Client/Makanandetail', [
            'foods' => $food
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Makanan $places, Request $request)
    {
        //dd($request);
        return Inertia::render('Admin/Makanan/edit', [
            'places' => $places->find($request->makanan_id)
        ]);
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

        $dataplaces = Makanan::find($request->makanan_id);
        $request->validate([
            'namamakanan' => 'required',
            'jenismakanan' => 'required',
            'harga' => 'required',
            'desc'  => 'required',
            'gambar' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
            'resto' => 'required',
        ]);
        if ($request->hasFile('gambar')) {
            $gambar = $request->file('gambar');
            $gambarName = time() . '.' . $gambar->getClientOriginalExtension();
            $gambar->move(public_path('uploads'), $gambarName);
        
            // Remove the old image if it exists
            if ($dataplaces->gambar) {
                $oldImagePath = public_path('uploads') . '/' . $dataplaces->gambar;
                if (file_exists($oldImagePath)) {
                    unlink($oldImagePath);
                }
            }
        } else {
            // If no new image is uploaded, keep the existing image path
           $url = $dataplaces->gambar;
           $imageName = pathinfo($url, PATHINFO_BASENAME);
           $gambarName =$imageName;
        }
        //update post
        Makanan::where('makanan_id', $request->makanan_id)->update([
            'namamakanan'     => $request->namamakanan,
            'jenismakanan'     => $request->jenismakanan,
            'harga'   => $request->harga,
            'desc'   => $request->desc,
            'gambar'   =>$gambarName,
            'resto'   => $request->resto,
        ]);

        //redirect
        return redirect()->route('admin.makanan')->with('message', 'Data Berhasil Diupdate!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $places = Makanan::find($request->makanan_id);
        $places->delete();
        return redirect()->route('admin.makanan')->with('message', 'Data Berhasil Dihapus!');
    }
}
