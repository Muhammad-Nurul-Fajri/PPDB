<?php

namespace Database\Seeders;

use App\Models\Gelombang;
use App\Models\TahunAjaran;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create admin user
        User::updateOrCreate(
            ['email' => 'admin@sipensa.com'],
            [
                'name' => 'Administrator',
                'password' => Hash::make('password'),
                'role' => 'admin',
                'email_verified_at' => now(),
            ]
        );

        // Create sample tahun ajaran
        $tahunAjaran = TahunAjaran::updateOrCreate(
            ['tahun_ajaran' => '2026/2027'],
            ['is_active' => true]
        );

        // Create sample gelombang
        Gelombang::updateOrCreate(
            [
                'tahun_ajaran_id' => $tahunAjaran->id,
                'nama_gelombang' => 'Gelombang 1',
            ],
            [
                'tanggal_mulai' => '2026-07-01',
                'tanggal_selesai' => '2026-08-31',
                'kuota' => 100,
                'status' => 'active',
            ]
        );

        Gelombang::updateOrCreate(
            [
                'tahun_ajaran_id' => $tahunAjaran->id,
                'nama_gelombang' => 'Gelombang 2',
            ],
            [
                'tanggal_mulai' => '2026-09-01',
                'tanggal_selesai' => '2026-10-31',
                'kuota' => 50,
                'status' => 'inactive',
            ]
        );
    }
}
