<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class BiodataSiswa extends Model
{
    use HasFactory;

    protected $table = 'biodata_siswa';

    protected $fillable = [
        'pendaftaran_id',
        'nisn',
        'nik',
        'nama_lengkap',
        'jenis_kelamin',
        'tempat_lahir',
        'tanggal_lahir',
        'no_hp',
        'agama',
        'alamat',
        'provinsi',
        'kota_kabupaten',
        'kecamatan',
        'desa',
        'kode_pos',
    ];

    protected function casts(): array
    {
        return [
            'tanggal_lahir' => 'date',
        ];
    }

    /**
     * Get the pendaftaran that owns this biodata.
     */
    public function pendaftaran(): BelongsTo
    {
        return $this->belongsTo(Pendaftaran::class);
    }
}
