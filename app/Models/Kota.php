<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Kota extends Model
{
    use HasFactory;
    protected $table = 'kota';

    protected $fillable = [
        'namakota',
        'gambar',
    ];

    protected $casts = [
        'created_at' => 'datetime',
    ];

    // protected function gambar(): Attribute
    // {
    //     return Attribute::make(
    //         get: fn ($value) => url('uploads/'.$value),
    //     );
    // }
    public function places(): BelongsToMany
    {
        return $this->belongsToMany(Places::class);
    }

}
