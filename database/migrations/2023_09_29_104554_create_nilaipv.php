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
        Schema::create('nilaipv', function (Blueprint $table) {
            $table->id('nilaipv_id');
            $table->integer('wisata_id')->constrained();
            $table->decimal('pv_fasilitas');
            $table->decimal ('pv_pelayanan');
            $table->decimal('pv_ramahkeluarga');
            $table->decimal('pv_akomodasi');
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
        Schema::dropIfExists('nilaipv');
    }
};
