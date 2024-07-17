<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Nilaialt extends Model
{
    use HasFactory;
    protected $table = 'nilaialt';

    protected $fillable = [
        'wisata_id', 
        'rate_fasilitas',
        'rate_pelayanan',
        'rate_ramahkeluarga',
        'rate_akomodasi'
    ];

    protected $primaryKey = 'nilaialt_id';
    
    protected $casts = [
        'created_at' => 'datetime',
    ];

}
