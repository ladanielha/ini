<?php

namespace App\Http\Controllers;

use App\Models\OrderTransaction;
use App\Models\OrderItem;
use Inertia\Inertia;



class TransactionsController extends Controller
{
    public function transactions()
    {
        $data = OrderTransaction::get();

        $transactionjson= response()->json(['transactions' => $data]);
        return Inertia::render('Admin/Cart/index',[ 
            'cart'=> $data,
            'transactionjson'=>$transactionjson
        ]);
    }
}
