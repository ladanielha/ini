<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Nilaipv extends Model
{
    use HasFactory;
    protected $table = 'nilaipv';

    protected $fillable = [
        'nilaipv_id',
        'wisata_id', 
        'pv_fasilitas',
        'pv_pelayanan',
        'pv_ramahkeluarga',
        'pv_akomodasi'
    ];

    protected $primaryKey = 'nialialt_id';
    
    protected $casts = [
        'created_at' => 'datetime',
    ];
}
