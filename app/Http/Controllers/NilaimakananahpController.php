<?php

namespace App\Http\Controllers;

use App\Models\nilaimakananahp;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NilaimakananahpController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //get all nilaialt
        $datanilai = nilaimakananahp::select(
            'nilaialt_id',
            'nilaimakananahp.makanan_id',
            'rate_harga',
            'rate_kualitas',
            'rate_gizi',
            'rate_porsi',
            'datamakanancirebon.namamakanan'
        )
        ->join('datamakanancirebon', 'nilaimakananahp.makanan_id', '=', 'datamakanancirebon.makanan_id')
        ->get();
        
        //return view
        return Inertia::render('Admin/Nilaimakananahp/index',[ 
            'nilaialts'=> $datanilai]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\nilaimakananahp  $nilaimakananahp
     * @return \Illuminate\Http\Response
     */
    public function show(nilaimakananahp $nilaimakananahp)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\nilaimakananahp  $nilaimakananahp
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request)
    {
        //dd($request);
        $datanilai = nilaimakananahp::select(
            'nilaialt_id',
            'nilaimakananahp.makanan_id',
            'rate_harga',
            'rate_kualitas',
            'rate_gizi',
            'rate_porsi',
            'datamakanancirebon.namamakanan'
        )
        ->join('datamakanancirebon', 'nilaimakananahp.makanan_id', '=', 'datamakanancirebon.makanan_id')
        ->get();
        return Inertia::render('Admin/Nilaimakananahp/edit',[ 
            'nilaialt'=> $datanilai->find($request->nilaialt_id)]);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\nilaimakananahp  $nilaimakananahp
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        //dd($request->get("nilaialt_id"));
        //validasi 
        $request->validate([
            'nilaialt_id'=>['required', ],
            'rate_harga'=>  ['required', ],
            'rate_kualitas'=> ['required', ],
            'rate_gizi'=> ['required', ],
            'rate_porsi'=> ['required', ],
        ]);//dd($request);

        //update nialialt ke db
        nilaimakananahp::where('makanan_id', $request->get("nilaialt_id"))->update([
            'rate_harga' => $request->get("rate_harga"),
            'rate_kualitas' => $request->get("rate_kualitas"),
            'rate_gizi' => $request->get("rate_gizi"),
            'rate_porsi' => $request->get("rate_porsi")
        ]);

        
        //redirect
        return redirect()->route('admin.nilaimakananahp')->with('message', 'Nilai Makanan Berhasil Diupdate!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\nilaimakananahp  $nilaimakananahp
     * @return \Illuminate\Http\Response
     */
    public function destroy(nilaimakananahp $nilaimakananahp)
    {
        
    }
}
