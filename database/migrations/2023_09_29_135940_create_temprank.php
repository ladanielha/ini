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
        Schema::create('temprank', function (Blueprint $table) {
            $table->id('rank_id');
            $table->integer('nilaialt_id');
            $table->integer('wisata_id')->constrained();
            $table->decimal('rate_fasilitas');
            $table->decimal ('rate_pelayanan');
            $table->decimal('rate_ramahkeluarga');
            $table->decimal('rate_akomodasi');
            $table->decimal('score');
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
        Schema::dropIfExists('temprank');
    }
};
