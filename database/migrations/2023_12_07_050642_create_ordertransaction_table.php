<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrderTransactionTable extends Migration
{
    public function up()
    {
        Schema::create('order_transactions', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('phone_number');
            $table->text('message')->nullable();
            $table->decimal('total_price', 10, 2);
            $table->timestamps();
        });

        Schema::create('order_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('order_transaction_id')->constrained('order_transactions');
            $table->string('name');
            $table->integer('amount');
            $table->decimal('price', 10, 2);
            // Add references to menu_id and store_id
            $table->unsignedBigInteger('menu_id');
            $table->unsignedBigInteger('store_id');
            $table->foreign('menu_id')->references('menu_id')->on('menudbs');
            $table->foreign('store_id')->references('store_id')->on('restorandbs');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('order_items');
        Schema::dropIfExists('order_transactions');
    }
}
