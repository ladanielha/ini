<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Menudb;

class MenudbController extends Controller
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

    public function detail($id)
    {
        $menus = Menudb::select(
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

        //$menus = Menudb::find($id);
        return Inertia::render('Client/Buyer/Menudetail', [
            'menu' =>$menus
        ]);
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
     * @param  \App\Models\Menudb  $menudb
     * @return \Illuminate\Http\Response
     */
    public function show(Menudb $menudb)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Menudb  $menudb
     * @return \Illuminate\Http\Response
     */
    public function edit(Menudb $menudb)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Menudb  $menudb
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Menudb $menudb)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Menudb  $menudb
     * @return \Illuminate\Http\Response
     */
    public function destroy(Menudb $menudb)
    {
        //
    }
}
