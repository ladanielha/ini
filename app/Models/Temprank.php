<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Temprank extends Model
{
    use HasFactory;
    protected $table = 'temprank';

    protected $fillable = [
        'nilaialt_id',
        'wisata_id',
        'rate_fasilitas',
        'rate_pelayanan',
        'rate_ramahkeluarga',
        'rate_akomodasi',
        'score'
    ];

    
    protected $casts = [
        'created_at' => 'datetime',
    ];
}
