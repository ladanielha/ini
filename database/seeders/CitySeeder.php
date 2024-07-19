<?php

namespace Database\Seeders;

use App\Models\Kota;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;

class CitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(): void
    {
        DB::table('kota')->insert([
            [
                'kota_id' => 1,
                'namakota' => 'Cirebon',
                'gambar' => 'https://media.istockphoto.com/id/970988684/photo/cirebon-train-station.jpg?s=170667a&w=0&k=20&c=5j5-NAGjSIrDOLDHlsYCXZ-4KJ9W4rgYj9ZbMv4ULIw='
            ],
            [
                'kota_id' => 2,
                'namakota' => 'Serang',
                'gambar' => 'https://asset.kompas.com/crops/v1pAMzDSsn4oN71_ppIUChSANAI=/0x0:1080x720/780x390/data/photo/2021/12/15/61b96f894199b.jpg'
            ],
            [
                'kota_id' => 3,
                'namakota' => 'Palembang',
                'gambar' => 'https://t4.ftcdn.net/jpg/02/99/09/05/360_F_299090527_n2chCeSRhq9BJMRoHUZxFDRmZmWJKNwy.jpg'
            ],
            [
                'kota_id' => 4,
                'namakota' => 'Cilegon',
                'gambar' => 'https://thumb.viva.id/vivabanten/1265x711/2023/01/28/63d51589ceb3d-kota-cilegon_banten.jpg'
            ],
            [
                'kota_id' => 5,
                'namakota' => 'Semarang',
                'gambar' => 'https://www.shutterstock.com/shutterstock/videos/1069132789/thumb/7.jpg?ip=x480'
            ],
            [
                'kota_id' => 6,
                'namakota' => 'Padang',
                'gambar' => 'https://i.pinimg.com/originals/f6/08/96/f608963629b77d9695017b3de60d2bac.jpg'
            ]
        ]);
    }

}
