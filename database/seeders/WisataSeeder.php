<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class WisataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *  
     * @return void
     */
    public function run()
    {
        DB::table('datawisata')->insert([
            [
                'wisata_id' => 1,
                'namatempat' => 'Kampung Sabin',
                'jeniswisata' => 'Wisata Budaya',
                'alamat' => 'Kawasan Kota Baru Keandra, Jl. Nyi Ageng Serang, Sindangjawa, Kec. Dukupuntang, Kabupaten Cirebon',
                'harga' => 30000,
                'jambuka' => 10,
                'jamtutup' => 20,
                'desc' => 'Selain pesona alamnya, Kampung Sabin juga kaya akan budaya dan tradisi lokal. Penduduk setempat seringkali menjalankan kehidupan pedesaan tradisional, yang memungkinkan pengunjung untuk merasakan atmosfer kehidupan pedesaan yang tenang dan sederhana.',
                'gambar' => '1697092680.jpg',
                'link' => 'https://cdn.idntimes.com/content-images/post/20211021/241314129-966385807271079-3296120524309551568-n-a4804988daad6f1c818150b825e9bce9_600x400.jpg',
                'kota_id' => 1,
                'created_at' => '2023-09-26 12:52:46',
                'updated_at' => '2023-10-13 14:22:09',
            ],
            [
                'wisata_id' => 5,
                'namatempat' => 'Kawasan Batik Trusmi',
                'jeniswisata' => 'Wisata Budaya',
                'alamat' => 'Jl. Syekh Datul Kahfi, Weru Kidul, Kec. Weru, Kabupaten Cirebon, Jawa Barat 45154',
                'harga' => 5000,
                'jambuka' => 7,
                'jamtutup' => 21,
                'desc' => 'Objek wisata ini merupakan pusat industri batik yang ada di daerah Weru, Cirebon. Selain menjadi sentra industri batik, Kampung Batik Trusmi ini juga menjadi tempat wisata kuliner. Setidaknya ada lebih dari 3000 tenaga kerja yang mengrajin batik.',
                'gambar' => '1697095278.jpg',
                'link' => 'https://www.google.com/maps/place/Kawasan+Batik+Trusmi/@-6.7173771,108.4125007,12.31z/data=!4m6!3m5!1s0x2e6ee19c9e516c47:0x965ae37c3931ba44!8m2!3d-6.7055012!4d108.5075497!16s%2Fg%2F11scz2842q?entry=ttu',
                'kota_id' => 1,
                'created_at' => '2023-09-26 23:51:43',
                'updated_at' => '2023-10-22 09:38:44',
            ],
        ]);
    }
}
