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
        Schema::create('nilaimakananahp', function (Blueprint $table) {
            $table->id('nilaialt_id');
            $table->unsignedBigInteger('makanan_id');
            $table->foreign('makanan_id')->references(columns: 'makanan_id')->on(table: 'datamakanan');
            $table->decimal('rate_harga');
            $table->decimal('rate_kualitas');
            $table->decimal('rate_gizi');
            $table->decimal('rate_porsi');
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
        Schema::dropIfExists('nilaimakanancirebon');
    }
};
