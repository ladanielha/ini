<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('menudbs', function (Blueprint $table) {
            $table->id('menu_id');
            $table->unsignedBigInteger('store_id');
            $table->foreign('store_id')->references( columns:'store_id')->on( table: 'restorandbs');
            $table->string('namamakanan');
            $table->string('jenismakanan');
            $table->integer('stok');
            $table->integer('harga');
            $table->string('desc');
            $table->string('gambar');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('menudbs');
    }
};
