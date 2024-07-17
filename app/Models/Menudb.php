<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
class Menudb extends Model
{
    use HasFactory;
    protected $table = 'menudbs';


    protected $fillable = [
        'menu_id',
        'store_id',
        'makanan_id',
        'namamakanan',
        'jenismakanan',
        'stok',
        'harga',
        'desc',
        'gambar',
    ];

    protected $primaryKey = 'menu_id';

    protected $casts = [
        'created_at' => 'datetime',
    ];

    protected function gambar(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => url('uploads/' . $value),
        );

    }
    
    public function store_id()
    {
        return $this->belongsTo(RestoranDb::class, 'store_id', 'store_id');
    }
}
