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
        Schema::create('restorandbs', function (Blueprint $table) {
            $table->id('store_id');
            $table->string('namarestoran');
            // $table->string('menu_id');
            $table->string('gambarrestoran');
            $table->integer('jambuka');
            $table->integer('jamtutup');
            $table->string('alamat');
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
        Schema::dropIfExists('restorandbs');
    }
};
