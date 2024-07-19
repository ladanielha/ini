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
        Schema::create('datamakanan', function (Blueprint $table) {
            $table->id('makanan_id');
            $table->string('store_id');
            $table->string('namamakanan');
            $table->string('jenismakanan');
            $table->string('alamat');
            $table->integer('harga');
            $table->string('desc');
            $table->string('gambar');
            $table->string('kota');     
            $table->string('sertifikat');
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
        Schema::dropIfExists('datamakanan');
    }
};
