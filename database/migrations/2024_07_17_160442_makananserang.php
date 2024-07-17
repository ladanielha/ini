<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('makananserang', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('gambar')->nullable();
            $table->string('nama');
            $table->string('bahan_utama');
            $table->integer('harga');
            $table->string('desc', 500)->nullable();
            $table->integer('sumber_protein')->nullable();
            $table->integer('penyajian')->nullable();
            $table->integer('harga_m')->nullable();
            $table->integer('porsi')->nullable();
            $table->string('nama_resto');
            $table->string('alamat');
            $table->string('sertifikat');
            $table->string('link', 500);
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
        Schema::dropIfExists('makananserang');
    }
};
