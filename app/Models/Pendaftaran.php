<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Pendaftaran extends Model
{
    use HasFactory;

    protected $table = 'pendaftaran';

    protected $fillable = [
        'user_id',
        'gelombang_id',
        'no_pendaftaran',
        'tanggal_daftar',
        'status',
    ];

    protected function casts(): array
    {
        return [
            'tanggal_daftar' => 'date',
        ];
    }

    /**
     * Boot the model.
     */
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($pendaftaran) {
            if (empty($pendaftaran->no_pendaftaran)) {
                $pendaftaran->no_pendaftaran = self::generateNoPendaftaran();
            }
            if (empty($pendaftaran->tanggal_daftar)) {
                $pendaftaran->tanggal_daftar = now();
            }
        });
    }

    /**
     * Generate a unique registration number.
     */
    public static function generateNoPendaftaran(): string
    {
        $year = date('Y');
        $lastRecord = self::where('no_pendaftaran', 'like', "PPDB{$year}%")
            ->orderBy('no_pendaftaran', 'desc')
            ->first();

        if ($lastRecord) {
            $lastNumber = (int) substr($lastRecord->no_pendaftaran, -4);
            $newNumber = $lastNumber + 1;
        } else {
            $newNumber = 1;
        }

        return 'PPDB' . $year . str_pad($newNumber, 4, '0', STR_PAD_LEFT);
    }

    /**
     * Get the user that owns this pendaftaran.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the gelombang for this pendaftaran.
     */
    public function gelombang(): BelongsTo
    {
        return $this->belongsTo(Gelombang::class);
    }

    /**
     * Get the biodata siswa for this pendaftaran.
     */
    public function biodataSiswa(): HasOne
    {
        return $this->hasOne(BiodataSiswa::class);
    }

    /**
     * Get the data orang tua for this pendaftaran.
     */
    public function dataOrangTua(): HasOne
    {
        return $this->hasOne(DataOrangTua::class);
    }

    /**
     * Get the asal sekolah for this pendaftaran.
     */
    public function asalSekolah(): HasOne
    {
        return $this->hasOne(AsalSekolah::class);
    }

    /**
     * Get all berkas for this pendaftaran.
     */
    public function berkas(): HasMany
    {
        return $this->hasMany(Berkas::class);
    }

    /**
     * Get the seleksi for this pendaftaran.
     */
    public function seleksi(): HasOne
    {
        return $this->hasOne(Seleksi::class);
    }

    /**
     * Calculate registration progress percentage.
     */
    public function hitungProgress(): int
    {
        $steps = 0;
        $total = 5;

        // 1. Akun terdaftar (always true at this point)
        $steps++;

        // 2. Biodata lengkap
        if ($this->biodataSiswa) {
            $steps++;
        }

        // 3. Data Orang Tua lengkap
        if ($this->dataOrangTua) {
            $steps++;
        }

        // 4. Asal Sekolah lengkap
        if ($this->asalSekolah) {
            $steps++;
        }

        // 5. Berkas di-upload (minimal 1)
        if ($this->berkas()->count() > 0) {
            $steps++;
        }

        return (int) round(($steps / $total) * 100);
    }

    /**
     * Get human-readable status label.
     */
    public function statusLabel(): string
    {
        return match ($this->status) {
            'draf' => 'Draf',
            'menunggu' => 'Menunggu Verifikasi',
            'verifikasi' => 'Sedang Diverifikasi',
            'perlu_perbaikan' => 'Perlu Perbaikan',
            'berkas_lengkap' => 'Berkas Lengkap',
            'lulus' => 'Lulus Seleksi',
            'tidak_lulus' => 'Tidak Lulus',
            default => $this->status,
        };
    }

    /**
     * Get status color class for badges.
     */
    public function statusColor(): string
    {
        return match ($this->status) {
            'draf' => 'gray',
            'menunggu' => 'yellow',
            'verifikasi' => 'blue',
            'perlu_perbaikan' => 'orange',
            'berkas_lengkap' => 'green',
            'lulus' => 'emerald',
            'tidak_lulus' => 'red',
            default => 'gray',
        };
    }
}
