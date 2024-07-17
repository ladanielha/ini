<?php

namespace App\Http\Controllers;

use App\Models\OrderTransaction;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class OrderHistoryController extends Controller
{
    public function orderHistory()
    {
        $data = OrderTransaction::join('users', 'order_transactions.name', '=', 'users.name')
            ->select('order_transactions.*')
            ->get();

        return response()->json(['orderHistory' => $data]);
    }
}
