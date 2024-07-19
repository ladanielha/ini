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
        Schema::create('datawisata', function (Blueprint $table) {
            $table->id('wisata_id');
            $table->string('namatempat');
            $table->string('jeniswisata');
            $table->string('alamat');
            $table->integer('harga');
            $table->integer('jambuka');
            $table->integer('jamtutup');
            $table->string('desc');
            $table->string('gambar');
            $table->string('kota');
            $table->string('link');
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
        Schema::dropIfExists('destinations');
    }
};
