<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Makanan extends Model
{
    use HasFactory;

    protected $table = 'datamakanan';


    protected $fillable = [
        'makanan_id',
        'store_id',
        'namamakanan',
        'jenismakanan',
        'kota_id',
        'harga',
        'desc',
        'gambar',
        'sertifikat',
        'resto',
        'alamat',
        'link',
        'store_id'
    ];

    protected $primaryKey = 'makanan_id';

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
            get: fn ($value) => url('uploads/' . $value),
        );
    }

    public function city(): BelongsTo
    {
        return $this->belongsTo(Kota::class);
    }
}
