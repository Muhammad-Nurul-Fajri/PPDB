<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class VerifikasiBerkas extends Model
{
    use HasFactory;

    protected $table = 'verifikasi_berkas';

    protected $fillable = [
        'berkas_id',
        'admin_id',
        'status',
        'catatan',
        'tanggal_verifikasi',
    ];

    protected function casts(): array
    {
        return [
            'tanggal_verifikasi' => 'datetime',
        ];
    }

    /**
     * Get the berkas that this verification belongs to.
     */
    public function berkas(): BelongsTo
    {
        return $this->belongsTo(Berkas::class);
    }

    /**
     * Get the admin who performed this verification.
     */
    public function admin(): BelongsTo
    {
        return $this->belongsTo(User::class, 'admin_id');
    }
}
