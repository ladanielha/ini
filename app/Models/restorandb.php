<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class restorandb extends Model
{
    use HasFactory;
    protected $table = 'restorandbs';


    protected $fillable = [
        'store_id',
        'menu_id',
        'namarestoran',
        'gambarrestoran',
        'jambuka',
        'jamtutup',
        'alamat',
        'kota',
        'link',
    ];

    protected $primaryKey = 'store_id';

    protected $casts = [
        'created_at' => 'datetime',
    ];

    protected function gambarrestoran(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => url('uploads/' . $value),
        );
    }

    public function menu_id()
    {
        return $this->hasMany(MenuDb::class, 'store_id', 'store_id');
    }

}
