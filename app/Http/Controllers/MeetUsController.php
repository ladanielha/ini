<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class MeetUsController extends Controller
{
    public function meetus()
    {
        return Inertia::render('Client/Meetus');
    }
}
