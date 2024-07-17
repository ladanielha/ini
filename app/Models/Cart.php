<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
class Cart extends Model
{
    use HasFactory;
    protected $table = 'cart';

    protected $fillable = [
        'user_id',
        'resto_id',
        'menu_id',
        'harga',
        'total_harga',
        'kuantitas',
    ];

    protected $primaryKey = 'cart_id';
    
    protected function gambar(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => url('uploads/' . $value),
        );

    }

}
