<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Pendaftaran;
use App\Models\Gelombang;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class RegistrantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $gelombang = Gelombang::first();

        if (!$gelombang) {
            $this->command->error('No Gelombang found. Please run AdminSeeder first.');
            return;
        }

        $this->command->info('Creating 150 registrants...');

        $password = Hash::make('password');

        for ($i = 1; $i <= 150; $i++) {
            $user = User::create([
                'name' => 'Siswa ' . $i,
                'email' => 'siswa' . $i . '@example.com',
                'password' => $password,
                'role' => 'siswa',
                'email_verified_at' => now(),
            ]);

            Pendaftaran::create([
                'user_id' => $user->id,
                'gelombang_id' => $gelombang->id,
                'status' => 'menunggu',
            ]);
        }

        $this->command->info('150 registrants created successfully.');
    }
}
