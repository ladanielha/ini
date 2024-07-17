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
        Schema::create('nilaimakanansaw', function (Blueprint $table) {
            $table->id('nilaialt_id');
            $table->unsignedBigInteger('makanan_id');
            $table->foreign('makanan_id')->references(columns: 'makanan_id')->on(table: 'datamakanan');
            $table->integer('rate_harga')->nullable();
            $table->integer('rate_kualitas')->nullable();
            $table->integer('rate_gizi')->nullable();
            $table->integer('rate_porsi')->nullable();
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
        Schema::dropIfExists('nilaimakananserang');
    }
};
