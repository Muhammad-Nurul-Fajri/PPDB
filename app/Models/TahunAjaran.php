<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class TahunAjaran extends Model
{
    use HasFactory;

    protected $table = 'tahun_ajaran';

    protected $fillable = [
        'tahun_ajaran',
        'is_active',
    ];

    protected function casts(): array
    {
        return [
            'is_active' => 'boolean',
        ];
    }

    /**
     * Get all gelombang for this tahun ajaran.
     */
    public function gelombang(): HasMany
    {
        return $this->hasMany(Gelombang::class);
    }

    /**
     * Scope to get the active tahun ajaran.
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }
}
