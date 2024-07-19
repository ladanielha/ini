<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PlacesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('table_wisata')->insert([
            'namatempat' => fake()->title(10),
            'alamat' => fake()->address(10),
            'desc' => fake()->paragraph(2,true),
        ]);
    }
}
