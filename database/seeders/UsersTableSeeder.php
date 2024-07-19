<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            [
                'id' => 1,
                'name' => 'Sembako',
                'email' => 'sembako@gmail.com',
                'email_verified_at' => null,
                'password' => '$2y$10$uqTtulicJVMeS/rvrqsEX.mPPMZpcon0sPXyNFDgD8nQZCC01.vLu', // 'password' => 'yourpassword'
                'role' => 'Admin',
                'remember_token' => null,
                'created_at' => '2023-10-24 23:48:22',
                'updated_at' => '2023-10-24 23:48:22',
            ],
            [
                'id' => 2,
                'name' => 'Store1',
                'email' => 'store1@gmail.com',
                'email_verified_at' => null,
                'password' => '$2y$10$Fq/YtzQhcqMISZ44i17wTeMUMNMgAHyni5u12H0UxvO9bvzCu/g/G',
                'role' => 'Store',
                'remember_token' => null,
                'created_at' => '2023-10-24 23:49:43',
                'updated_at' => '2023-10-24 23:49:43',
            ],
            [
                'id' => 3,
                'name' => 'fred',
                'email' => 'frederickchang75@gmail.com',
                'email_verified_at' => null,
                'password' => '$2y$10$E3pWDaimdy/ABLAnGSFHFOTbPQw/kpLef.5FQZ4MXZURj4NnSkudC',
                'role' => 'User',
                'remember_token' => null,
                'created_at' => '2023-10-25 00:02:42',
                'updated_at' => '2023-10-25 00:02:42',
            ],
            [
                'id' => 4,
                'name' => 'dd',
                'email' => 'dd@gmail.com',
                'email_verified_at' => null,
                'password' => '$2y$10$xzpCtPMjfThQav.eZyIBJOFASlvGZv8yi.zkPe6T2AWdvQZe7Wow6',
                'role' => 'Store',
                'remember_token' => null,
                'created_at' => '2023-10-25 22:35:55',
                'updated_at' => '2023-10-25 22:35:55',
            ],
            [
                'id' => 5,
                'name' => 'gogo',
                'email' => 'gogo@gmail.com',
                'email_verified_at' => null,
                'password' => '$2y$10$i5jK33V/clwPfQzxD1HVnu3vuFgneS2h2jxN9usiVtonbQgbaI64G',
                'role' => 'Store',
                'remember_token' => null,
                'created_at' => '2023-10-25 22:44:11',
                'updated_at' => '2023-10-25 22:44:11',
            ],
            [
                'id' => 6,
                'name' => 'Frd',
                'email' => 'fed@gmail.com',
                'email_verified_at' => null,
                'password' => '$2y$10$1DjcICFQzD7eo3p7ovPo9eUodmtknsNH7SMniVnlRonp.QBxhSuFC',
                'role' => 'User',
                'remember_token' => null,
                'created_at' => '2023-11-03 00:37:13',
                'updated_at' => '2023-11-03 00:37:13',
            ],
            [
                'id' => 7,
                'name' => 'admin',
                'email' => 'laurentiusdaniel0@gmail.com',
                'email_verified_at' => null,
                'password' => '$2y$10$Ys7mTOcRaTnpfa2h0LJSPOdTnicET9u1Sr3Tjx1gznMEoQEuPn0ci',
                'role' => 'User',
                'remember_token' => null,
                'created_at' => '2024-01-02 04:21:13',
                'updated_at' => '2024-01-02 04:21:13',
            ],
            [
                'id' => 8,
                'name' => 'admin',
                'email' => 'admin@gmail.com',
                'email_verified_at' => null,
                'password' => '$2y$10$PrbuLuVCUcDA/MRdAa.jX.r3JWfLp8jHi2BQLkghNcqO37rOH25F6',
                'role' => 'Admin',
                'remember_token' => null,
                'created_at' => '2024-01-05 19:42:26',
                'updated_at' => '2024-01-05 19:42:26',
            ],
            [
                'id' => 9,
                'name' => 'user1',
                'email' => 'user@gmail.com',
                'email_verified_at' => null,
                'password' => '$2y$10$Uu7HRH9qS175AYt1bi3hd.s7RLBXJHJRTMFQOhI4IEtqieO5OeMrG',
                'role' => 'User',
                'remember_token' => null,
                'created_at' => '2024-01-07 17:31:19',
                'updated_at' => '2024-01-07 17:31:19',
            ],
        ]);

    }
}
