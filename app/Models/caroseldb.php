<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;


class caroseldb extends Model
{
    use HasFactory;
    protected $table = 'thumbnail';

    protected $fillable = [
        'namagambar',
        'gambar',
    ];

    protected $primaryKey = 'nail_id';
    
    protected $casts = [
        'created_at' => 'datetime',
    ];

    protected function gambar(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => url('uploads/Thumbnail/'.$value),
        );
    }
}
