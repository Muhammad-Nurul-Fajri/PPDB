<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('verifikasi_berkas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('berkas_id')->constrained('berkas')->cascadeOnDelete();
            $table->foreignId('admin_id')->constrained('users')->cascadeOnDelete();
            $table->enum('status', ['menunggu', 'diterima', 'ditolak', 'perlu_perbaikan'])->default('menunggu');
            $table->text('catatan')->nullable();
            $table->dateTime('tanggal_verifikasi')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('verifikasi_berkas');
    }
};
