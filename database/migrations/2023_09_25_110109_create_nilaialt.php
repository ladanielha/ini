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
        Schema::create('nilaialt', function (Blueprint $table) { 
            $table->id('nilaialt_id');
            $table->unsignedBigInteger('wisata_id');
            $table->foreign('wisata_id')->references( columns:'wisata_id')->on( table: 'datawisata');
            $table->decimal('rate_fasilitas');
            $table->decimal('rate_pelayanan');
            $table->decimal('rate_ramahkeluarga');
            $table->decimal('rate_akomodasi');
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
        Schema::dropIfExists('nilaialt');
    }
};
