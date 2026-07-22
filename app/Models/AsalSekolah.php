<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class AsalSekolah extends Model
{
    use HasFactory;

    protected $table = 'asal_sekolah';

    protected $fillable = [
        'pendaftaran_id',
        'nama_sekolah',
        'npsn',
        'alamat',
        'tahun_lulus',
        'rata_rata_nilai',
    ];

    protected function casts(): array
    {
        return [
            'tahun_lulus' => 'integer',
            'rata_rata_nilai' => 'double',
        ];
    }

    /**
     * Get the pendaftaran that owns this asal sekolah.
     */
    public function pendaftaran(): BelongsTo
    {
        return $this->belongsTo(Pendaftaran::class);
    }
}
