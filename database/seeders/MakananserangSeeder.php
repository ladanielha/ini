<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MakananserangSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('makananserang')->insert([
            [
                'id' => 4,
                'gambar' => 'gambar/Jmo7XA2e4qnVFnDNjRuuflR8wBglQV-metacGVjYWsgYmFuZGVuZy5qcGc=-.jpg',
                'nama' => 'Pecak Bandeng',
                'bahan_utama' => 'Ikan Bandeng',
                'harga' => 30000,
                'desc' => 'Salah satu makanan khas Banten yang mungkin akan sangat digemari para pecinta pedas adalah pecak bandeng. Ikan bandeng yang diolah dengan bumbu pedas ini dijamin bikin nagih.',
                'sumber_protein' => 3,
                'penyajian' => 4,
                'harga_m' => 3,
                'porsi' => 5,
                'nama_resto' => 'Saung Dolet',
                'alamat' => 'Jl. KH.Sochari No.7, Sumurpecung, Kec. Serang, Kota Serang, Banten 42118',
                'sertifikat' => 'ID36110000075001120',
                'link' => 'https://maps.app.goo.gl/nNc1DhDrZWGxoYzMA',
                'created_at' => Carbon::parse('2023-09-25 16:59:06'),
                'updated_at' => Carbon::parse('2023-10-08 01:49:14')
            ],
            [
                'id' => 5,
                'gambar' => 'gambar/2agZqRY8rcTYfUPOkJzeDwpyA4IgVs-metaQW5nZXVuLUxhZGEuanBn-.jpg',
                'nama' => 'Angeun Lada',
                'bahan_utama' => 'Daging Sapi',
                'harga' => 20000,
                'desc' => 'Terbuat dari daging sapi yang diberi bumbu khas',
                'sumber_protein' => 3,
                'penyajian' => 4,
                'harga_m' => 2,
                'porsi' => 3,
                'nama_resto' => 'RM. Angeun Lada',
                'alamat' => 'Jl. Ciruas - Petir No.32, Sindangsari, Kec. Petir, Kabupaten Serang, Banten 42172',
                'sertifikat' => 'ID36110007301760723',
                'link' => 'https://maps.app.goo.gl/Dm1sn2Q3vdqpxnoK6',
                'created_at' => Carbon::parse('2023-09-25 17:03:19'),
                'updated_at' => Carbon::parse('2023-10-08 01:10:49')
            ],
            // ... Add more records as needed
        ]);
    }
}
