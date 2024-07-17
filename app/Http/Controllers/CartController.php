<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;



class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //get all Cart
        $datacart = Cart::select(
            'cart.cart_id',
            'cart.user_id',
            'users.id as user_id',
            'users.name as user_name',
            'cart.resto_id',
            'restorandbs.store_id as resto_store_id',
            'restorandbs.namarestoran as resto_name',
            'cart.menu_id',
            'menudbs.menu_id as menu_menu_id',
            'menudbs.namamakanan as menu_name',
            
            'cart.harga',
            'cart.total_harga',
            'cart.kuantitas'
        )
            ->join('users', 'cart.user_id', '=', 'users.id')
            ->join('restorandbs', 'cart.resto_id', '=', 'restorandbs.store_id')
            ->join('menudbs', 'cart.menu_id', '=', 'menudbs.menu_id')
            ->get();
        
        return Inertia::render('Admin/Cart/index',[ 
            'cart'=> $datacart]);
    }

    public function detail(Request $request)
    {  
        if(auth("sanctum")->check()){
            //get user id login 
        $userid = User::getUserId();
            //get all Cart
        $datacart = Cart::select(
            'cart.cart_id',
            'cart.user_id',
            'users.id as user_id',
            'users.name as user_name',
            'cart.resto_id',
            'restorandbs.store_id as resto_store_id',
            'restorandbs.namarestoran as resto_name',
            'cart.menu_id',
            'menudbs.menu_id as menu_menu_id',
            'menudbs.namamakanan as menu_name',
            'menudbs.gambar as menu_gambar',
            'cart.harga',
            'cart.total_harga',
            'cart.kuantitas'
        )
            ->join('users', 'cart.user_id', '=', 'users.id')
            ->join('restorandbs', 'cart.resto_id', '=', 'restorandbs.store_id')
            ->join('menudbs', 'cart.menu_id', '=', 'menudbs.menu_id')
            ->where('users.id', '=', $userid)
            ->get();
        return Inertia::render('Client/Buyer/Mycart',[ 
            'cart'=> $datacart]);

        }
        else  {
            return response()->json([
                'status' =>401,
                'messages' => 'Login to view Cart',
            ]);

        }
        
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
       
         //create wisata
          $cart = new Cart([
            'user_id'=>$request->input('user_id'),
            'resto_id'=>$request->input('resto_id'),
            'menu_id'=>$request->input( 'menu_id'),
            'harga'=>$request->input('harga'),
            'total_harga'=>$request->input('total_harga'),
            'kuantitas'=>$request->input('quantity'),
         ]);
    
         $cart->save();
         //dd($cart);
        return redirect()->route('mycart')->with('message', 'Data Berhasil Disimpan!');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $cart = Cart::find($request->cart_id);
        $cart->delete();
        return redirect()->route('mycart')->with('message','Produk berhasil di hapus');
    }
}
