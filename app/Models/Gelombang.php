<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Gelombang extends Model
{
    use HasFactory;

    protected $table = 'gelombang';

    protected $fillable = [
        'tahun_ajaran_id',
        'nama_gelombang',
        'tanggal_mulai',
        'tanggal_selesai',
        'kuota',
        'status',
    ];

    protected function casts(): array
    {
        return [
            'tanggal_mulai' => 'date',
            'tanggal_selesai' => 'date',
            'kuota' => 'integer',
        ];
    }

    /**
     * Get the tahun ajaran that owns this gelombang.
     */
    public function tahunAjaran(): BelongsTo
    {
        return $this->belongsTo(TahunAjaran::class);
    }

    /**
     * Get all pendaftaran for this gelombang.
     */
    public function pendaftaran(): HasMany
    {
        return $this->hasMany(Pendaftaran::class);
    }

    /**
     * Scope to get active gelombang.
     */
    public function scopeActive($query)
    {
        return $query->where('status', 'active');
    }

    /**
     * Check if registration is currently open.
     */
    public function isOpen(): bool
    {
        $now = now()->toDateString();
        return $this->status === 'active'
            && $this->tanggal_mulai <= $now
            && $this->tanggal_selesai >= $now;
    }

    /**
     * Get remaining quota.
     */
    public function sisaKuota(): int
    {
        return max(0, $this->kuota - $this->pendaftaran()->count());
    }
}
