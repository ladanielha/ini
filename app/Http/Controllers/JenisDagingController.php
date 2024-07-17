<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class JenisDagingController extends Controller
{
    public function meetus()
    {
        return Inertia::render('Client/JenisDaging');
    }
}
