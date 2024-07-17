<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
class Hsitory extends Model
{
    use HasFactory;
    protected $table = 'history';

    protected $fillable = [
        'user_id',
        'store_id',
        'menu_id',
        'kuantitas',
        'harga_total',
        'tanggal_transaksi',
        'status_pembayaran',
    ];

    protected $primaryKey = 'transaksi_id';
    
    protected function gambar(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => url('uploads/' . $value),
        );

    }

}
