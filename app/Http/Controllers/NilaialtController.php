<?php

namespace App\Http\Controllers;

use App\Models\Nilaialt;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NilaialtController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //get all nilaialt
        $datanilai = Nilaialt::select(

            'nilaialt_id',
            'nilaialt.wisata_id',
            'rate_fasilitas',
            'rate_pelayanan',
            'rate_ramahkeluarga',
            'rate_akomodasi',
            'datawisata.namatempat'
        )
        ->join('datawisata', 'nilaialt.wisata_id', '=', 'datawisata.wisata_id')
        ->get();
        
        //return view
        return Inertia::render('Admin/Nilaialt/index',[ 
            'nilaialts'=> $datanilai]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
       
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
       
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Nilaialt  $nilaialt
     * @return \Illuminate\Http\Response
     */
    public function show(Nilaialt $nilaialt)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
    * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request)
    {
        //dd($request);
        $datanilai = Nilaialt::select(

            'nilaialt_id',
            'nilaialt.wisata_id',
            'rate_fasilitas',
            'rate_pelayanan',
            'rate_ramahkeluarga',
            'rate_akomodasi',
            'datawisata.namatempat'
        )
        ->join('datawisata', 'nilaialt.wisata_id', '=', 'datawisata.wisata_id')
        ->get();
        return Inertia::render('Admin/Nilaialt/edit',[ 
            'nilaialt'=> $datanilai->find($request->nilaialt_id)]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Nilaialt  $nilaialt
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        //dd($request);
        //validasi 
        
       $request->validate([
        'nilaialt_id'=>['required', ],
        'rate_fasilitas'=>  'required' ,
        'rate_pelayanan'=> 'required'  ,
        'rate_ramahkeluarga'=> 'required'  ,
        'rate_akomodasi'=> 'required'
        ]);
        
        //update nialialt ke db
        Nilaialt::where('nilaialt_id', $request->get('nilaialt_id'))->update([
            'rate_fasilitas'=> $request->get('rate_fasilitas'),
            'rate_pelayanan'=> $request->get('rate_pelayanan'),
            'rate_ramahkeluarga'=> $request->get('rate_ramahkeluarga'),
            'rate_akomodasi'=> $request->get('rate_akomodasi')
        ]);
      
        //redirect
        return redirect()->route('admin.nilaialt')->with('message', 'Nilai Berhasil Diupdate!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Nilaialt  $nilaialt
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        //deleta nilaialt
        $nilaialt = Nilaialt::find($request->nilaialt_id);
        Nilaialt::destroy($nilaialt->nilaialt_id);
        return redirect()->route('admin.nilaialt')->with('message', 'Kriteria Berhasil Dihapus!');

    }
}
