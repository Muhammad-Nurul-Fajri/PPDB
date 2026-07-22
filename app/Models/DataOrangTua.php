<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class DataOrangTua extends Model
{
    use HasFactory;

    protected $table = 'data_orang_tua';

    protected $fillable = [
        'pendaftaran_id',
        'nama_ayah',
        'nik_ayah',
        'pekerjaan_ayah',
        'penghasilan_ayah',
        'no_hp_ayah',
        'nama_ibu',
        'nik_ibu',
        'pekerjaan_ibu',
        'penghasilan_ibu',
        'no_hp_ibu',
        'alamat',
    ];

    protected function casts(): array
    {
        return [
            'penghasilan_ayah' => 'double',
            'penghasilan_ibu' => 'double',
        ];
    }

    /**
     * Get the pendaftaran that owns this data orang tua.
     */
    public function pendaftaran(): BelongsTo
    {
        return $this->belongsTo(Pendaftaran::class);
    }
}
