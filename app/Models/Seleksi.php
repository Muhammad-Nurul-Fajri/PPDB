<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Seleksi extends Model
{
    use HasFactory;

    protected $table = 'seleksi';

    protected $fillable = [
        'pendaftaran_id',
        'admin_id',
        'status',
        'nilai',
        'keterangan',
        'tanggal_seleksi',
    ];

    protected function casts(): array
    {
        return [
            'nilai' => 'double',
            'tanggal_seleksi' => 'datetime',
        ];
    }

    /**
     * Get the pendaftaran for this seleksi.
     */
    public function pendaftaran(): BelongsTo
    {
        return $this->belongsTo(Pendaftaran::class);
    }

    /**
     * Get the admin who performed this seleksi.
     */
    public function admin(): BelongsTo
    {
        return $this->belongsTo(User::class, 'admin_id');
    }

    /**
     * Get status label.
     */
    public function statusLabel(): string
    {
        return match ($this->status) {
            'menunggu' => 'Menunggu',
            'lulus' => 'Lulus',
            'tidak_lulus' => 'Tidak Lulus',
            default => $this->status,
        };
    }

    /**
     * Get status color.
     */
    public function statusColor(): string
    {
        return match ($this->status) {
            'menunggu' => 'yellow',
            'lulus' => 'green',
            'tidak_lulus' => 'red',
            default => 'gray',
        };
    }
}
