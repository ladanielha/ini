<?php

namespace App\Http\Controllers;

use App\Models\Menudb;
use Inertia\Inertia;
use App\Models\restorandb;
use Illuminate\Http\Request;

class RestorandbController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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

    public function detail($id)
    {
        $menu = Menudb::select(
            'menu_id',
            'store_id',
            'makanan_id',
            'namamakanan',
            'jenismakanan',
            'stok',
            'harga',
            'desc',
            'gambar',
        )
        ->where('store_id', $id)
        ->get();
        $resto = restorandb::find($id);
        //dd($resto);
        return Inertia::render('Client/Buyer/Menu', [
            'menu' =>$menu,
            'restoran'=>$resto
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\restorandb  $restorandb
     * @return \Illuminate\Http\Response
     */
    public function show(restorandb $restorandb)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\restorandb  $restorandb
     * @return \Illuminate\Http\Response
     */
    public function edit(restorandb $restorandb)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\restorandb  $restorandb
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, restorandb $restorandb)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\restorandb  $restorandb
     * @return \Illuminate\Http\Response
     */
    public function destroy(restorandb $restorandb)
    {
        //
    }
}
