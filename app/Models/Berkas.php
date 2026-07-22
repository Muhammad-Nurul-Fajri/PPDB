<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Berkas extends Model
{
    use HasFactory;

    protected $table = 'berkas';

    protected $fillable = [
        'pendaftaran_id',
        'jenis_berkas',
        'nama_file',
        'path_file',
        'status',
    ];

    /**
     * Get the pendaftaran that owns this berkas.
     */
    public function pendaftaran(): BelongsTo
    {
        return $this->belongsTo(Pendaftaran::class);
    }

    /**
     * Get the verification for this berkas.
     */
    public function verifikasi(): HasOne
    {
        return $this->hasOne(VerifikasiBerkas::class);
    }

    /**
     * Get human-readable label for jenis_berkas.
     */
    public function jenisLabel(): string
    {
        return match ($this->jenis_berkas) {
            'ktp_kk' => 'Kartu Keluarga',
            'akta' => 'Akta Kelahiran',
            'ijazah' => 'Ijazah / SKL',
            'surat_keterangan_sekolah' => 'Surat Keterangan Sekolah',
            'ktp_orangtua' => 'KTP Orang Tua',
            default => $this->jenis_berkas,
        };
    }

    /**
     * Get status color for badges.
     */
    public function statusColor(): string
    {
        return match ($this->status) {
            'menunggu' => 'yellow',
            'diterima' => 'green',
            'perlu_perbaikan' => 'red',
            default => 'gray',
        };
    }

    /**
     * Get status label.
     */
    public function statusLabel(): string
    {
        return match ($this->status) {
            'menunggu' => 'Menunggu',
            'diterima' => 'Diterima',
            'perlu_perbaikan' => 'Perlu Perbaikan',
            default => $this->status,
        };
    }
}
