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
        Schema::create('berkas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('pendaftaran_id')->constrained('pendaftaran')->cascadeOnDelete();
            $table->enum('jenis_berkas', ['ktp_kk', 'akta', 'ijazah', 'surat_keterangan_sekolah', 'ktp_orangtua']);
            $table->string('nama_file');
            $table->string('path_file');
            $table->enum('status', ['menunggu', 'diterima', 'perlu_perbaikan'])->default('menunggu');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('berkas');
    }
};
