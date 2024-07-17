<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    use HasFactory;

    protected $fillable = ['order_transaction_id', 'name', 'amount', 'price'];

    /**
     * Get the order transaction that owns the item.
     */
    public function orderTransaction()
    {
        return $this->belongsTo(OrderTransaction::class, 'order_transaction_id', 'id');
    }
}
