<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;

class Places extends Model
{
    use HasFactory;

    protected $table = 'datawisata';


    protected $fillable = [
        'wisata_id',
        'namatempat', 
        'jeniswisata',
        'alamat', 
        'harga', 
        'jambuka', 
        'jamtutup',
        'desc' ,
        'gambar' ,
        'namakota',
        'link'
    ];

    protected $primaryKey = 'wisata_id';
    
    protected $casts = [
        'created_at' => 'datetime',
    ];

    /*public static function booted()
    {
      static::creating(function (Model $model) {
        $model->slug = 'WIS' . str_pad(static::max('id') + 1, 4, 0, STR_PAD_LEFT);
      });
    }*/
    protected function gambar(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => url('uploads/'.$value),
        );
    }
}
