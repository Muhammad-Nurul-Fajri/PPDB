<?php

namespace App\Http\Controllers;

use App\Models\Berkas;
use App\Models\Gelombang;
use App\Models\Pendaftaran;
use App\Models\Seleksi;
use App\Models\TahunAjaran;
use App\Models\VerifikasiBerkas;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;

class AdminDashboardController extends Controller
{
    /**
     * Show the admin dashboard.
     */
    public function index(): View
    {
        $totalPendaftar = Pendaftaran::count();
        $menungguVerifikasi = Pendaftaran::where('status', 'menunggu')->count();
        $berkasLengkap = Pendaftaran::where('status', 'berkas_lengkap')->count();
        $lulus = Pendaftaran::where('status', 'lulus')->count();
        $tidakLulus = Pendaftaran::where('status', 'tidak_lulus')->count();

        $recentPendaftar = Pendaftaran::with(['user', 'biodataSiswa', 'gelombang'])
            ->latest()
            ->take(10)
            ->get();

        // Stats per gelombang
        $gelombangStats = Gelombang::withCount('pendaftaran')
            ->whereHas('tahunAjaran', fn($q) => $q->active())
            ->get();

        return view('admin.dashboard', compact(
            'totalPendaftar',
            'menungguVerifikasi',
            'berkasLengkap',
            'lulus',
            'tidakLulus',
            'recentPendaftar',
            'gelombangStats'
        ));
    }

    /**
     * Show list of all pendaftar.
     */
    public function pendaftar(Request $request): View
    {
        $query = Pendaftaran::with(['user', 'biodataSiswa', 'gelombang', 'berkas', 'seleksi']);

        // Search
        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('no_pendaftaran', 'like', "%{$search}%")
                    ->orWhereHas('user', fn($q) => $q->where('name', 'like', "%{$search}%"))
                    ->orWhereHas('biodataSiswa', fn($q) => $q->where('nama_lengkap', 'like', "%{$search}%"));
            });
        }

        // Filter by status
        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }

        // Filter by gelombang
        if ($request->filled('gelombang_id')) {
            $query->where('gelombang_id', $request->gelombang_id);
        }

        $pendaftar = $query->latest()->paginate(15);
        $gelombangList = Gelombang::whereHas('tahunAjaran', fn($q) => $q->active())->get();

        return view('admin.pendaftar.index', compact('pendaftar', 'gelombangList'));
    }

    /**
     * Show detail of a specific pendaftar.
     */
    public function showPendaftar(Pendaftaran $pendaftaran): View
    {
        $pendaftaran->load([
            'user',
            'biodataSiswa',
            'dataOrangTua',
            'asalSekolah',
            'berkas.verifikasi',
            'seleksi',
            'gelombang.tahunAjaran',
        ]);

        return view('admin.pendaftar.show', compact('pendaftaran'));
    }

    /**
     * Show verification list.
     */
    public function verifikasi(Request $request): View
    {
        $query = Pendaftaran::with(['user', 'biodataSiswa', 'berkas.verifikasi', 'gelombang'])
            ->whereIn('status', ['menunggu', 'verifikasi', 'perlu_perbaikan']);

        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('no_pendaftaran', 'like', "%{$search}%")
                    ->orWhereHas('user', fn($q) => $q->where('name', 'like', "%{$search}%"));
            });
        }

        $pendaftar = $query->latest()->paginate(15);

        return view('admin.verifikasi.index', compact('pendaftar'));
    }

    /**
     * Update berkas verification status.
     */
    public function updateVerifikasi(Request $request, Berkas $berkas): RedirectResponse
    {
        $request->validate([
            'status' => 'required|in:diterima,ditolak,perlu_perbaikan',
            'catatan' => 'nullable|string|max:500',
        ]);

        // Create or update verifikasi record
        VerifikasiBerkas::updateOrCreate(
            ['berkas_id' => $berkas->id],
            [
                'admin_id' => Auth::id(),
                'status' => $request->status,
                'catatan' => $request->catatan,
                'tanggal_verifikasi' => now(),
            ]
        );

        // Update berkas status
        $berkas->update([
            'status' => $request->status === 'ditolak' ? 'perlu_perbaikan' : $request->status,
        ]);

        // Check if all berkas for this pendaftaran are verified
        $pendaftaran = $berkas->pendaftaran;
        $allBerkas = $pendaftaran->berkas;
        $allDiterima = $allBerkas->every(fn($b) => $b->status === 'diterima');
        $anyPerluPerbaikan = $allBerkas->contains(fn($b) => $b->status === 'perlu_perbaikan');

        if ($allDiterima && $allBerkas->count() > 0) {
            $pendaftaran->update(['status' => 'berkas_lengkap']);
        } elseif ($anyPerluPerbaikan) {
            $pendaftaran->update(['status' => 'perlu_perbaikan']);
        } else {
            $pendaftaran->update(['status' => 'verifikasi']);
        }

        return back()->with('success', 'Status verifikasi berkas berhasil diperbarui.');
    }

    /**
     * Show seleksi list.
     */
    public function seleksi(Request $request): View
    {
        $query = Pendaftaran::with(['user', 'biodataSiswa', 'seleksi', 'gelombang', 'asalSekolah'])
            ->whereIn('status', ['berkas_lengkap', 'lulus', 'tidak_lulus']);

        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('no_pendaftaran', 'like', "%{$search}%")
                    ->orWhereHas('user', fn($q) => $q->where('name', 'like', "%{$search}%"));
            });
        }

        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }

        $pendaftar = $query->latest()->paginate(15);

        return view('admin.seleksi.index', compact('pendaftar'));
    }

    /**
     * Update seleksi result.
     */
    public function updateSeleksi(Request $request, Pendaftaran $pendaftaran): RedirectResponse
    {
        $request->validate([
            'status' => 'required|in:lulus,tidak_lulus',
            'nilai' => 'nullable|numeric|min:0|max:100',
            'keterangan' => 'nullable|string|max:500',
        ]);

        Seleksi::updateOrCreate(
            ['pendaftaran_id' => $pendaftaran->id],
            [
                'admin_id' => Auth::id(),
                'status' => $request->status === 'lulus' ? 'lulus' : 'tidak_lulus',
                'nilai' => $request->nilai,
                'keterangan' => $request->keterangan,
                'tanggal_seleksi' => now(),
            ]
        );

        $pendaftaran->update(['status' => $request->status]);

        return back()->with('success', 'Hasil seleksi berhasil disimpan.');
    }

    /**
     * Show tahun ajaran management.
     */
    public function tahunAjaran(): View
    {
        $tahunAjaran = TahunAjaran::withCount('gelombang')->latest()->get();

        return view('admin.tahun-ajaran.index', compact('tahunAjaran'));
    }

    /**
     * Store tahun ajaran.
     */
    public function storeTahunAjaran(Request $request): RedirectResponse
    {
        $request->validate([
            'tahun_ajaran' => 'required|string|max:20|unique:tahun_ajaran,tahun_ajaran',
            'is_active' => 'sometimes|boolean',
        ]);

        // Deactivate all if new one is active
        if ($request->boolean('is_active')) {
            TahunAjaran::query()->update(['is_active' => false]);
        }

        TahunAjaran::create([
            'tahun_ajaran' => $request->tahun_ajaran,
            'is_active' => $request->boolean('is_active'),
        ]);

        return back()->with('success', 'Tahun ajaran berhasil ditambahkan.');
    }

    /**
     * Update tahun ajaran.
     */
    public function updateTahunAjaran(Request $request, TahunAjaran $tahunAjaran): RedirectResponse
    {
        $request->validate([
            'tahun_ajaran' => 'required|string|max:20|unique:tahun_ajaran,tahun_ajaran,' . $tahunAjaran->id,
            'is_active' => 'sometimes|boolean',
        ]);

        if ($request->boolean('is_active')) {
            TahunAjaran::where('id', '!=', $tahunAjaran->id)->update(['is_active' => false]);
        }

        $tahunAjaran->update([
            'tahun_ajaran' => $request->tahun_ajaran,
            'is_active' => $request->boolean('is_active'),
        ]);

        return back()->with('success', 'Tahun ajaran berhasil diperbarui.');
    }

    /**
     * Delete tahun ajaran.
     */
    public function deleteTahunAjaran(TahunAjaran $tahunAjaran): RedirectResponse
    {
        $tahunAjaran->delete();

        return back()->with('success', 'Tahun ajaran berhasil dihapus.');
    }

    /**
     * Show gelombang management.
     */
    public function gelombang(): View
    {
        $gelombang = Gelombang::with('tahunAjaran')->withCount('pendaftaran')->latest()->get();
        $tahunAjaranList = TahunAjaran::latest()->get();

        return view('admin.gelombang.index', compact('gelombang', 'tahunAjaranList'));
    }

    /**
     * Store gelombang.
     */
    public function storeGelombang(Request $request): RedirectResponse
    {
        $request->validate([
            'tahun_ajaran_id' => 'required|exists:tahun_ajaran,id',
            'nama_gelombang' => 'required|string|max:255',
            'tanggal_mulai' => 'required|date',
            'tanggal_selesai' => 'required|date|after_or_equal:tanggal_mulai',
            'kuota' => 'required|integer|min:1',
            'status' => 'required|in:active,inactive',
        ]);

        Gelombang::create($request->only([
            'tahun_ajaran_id',
            'nama_gelombang',
            'tanggal_mulai',
            'tanggal_selesai',
            'kuota',
            'status',
        ]));

        return back()->with('success', 'Gelombang berhasil ditambahkan.');
    }

    /**
     * Update gelombang.
     */
    public function updateGelombang(Request $request, Gelombang $gelombang): RedirectResponse
    {
        $request->validate([
            'tahun_ajaran_id' => 'required|exists:tahun_ajaran,id',
            'nama_gelombang' => 'required|string|max:255',
            'tanggal_mulai' => 'required|date',
            'tanggal_selesai' => 'required|date|after_or_equal:tanggal_mulai',
            'kuota' => 'required|integer|min:1',
            'status' => 'required|in:active,inactive',
        ]);

        $gelombang->update($request->only([
            'tahun_ajaran_id',
            'nama_gelombang',
            'tanggal_mulai',
            'tanggal_selesai',
            'kuota',
            'status',
        ]));

        return back()->with('success', 'Gelombang berhasil diperbarui.');
    }

    /**
     * Delete gelombang.
     */
    public function deleteGelombang(Gelombang $gelombang): RedirectResponse
    {
        $gelombang->delete();

        return back()->with('success', 'Gelombang berhasil dihapus.');
    }

    /**
     * Show laporan page.
     */
    public function laporan(Request $request): View
    {
        $query = Pendaftaran::with(['user', 'biodataSiswa', 'gelombang', 'seleksi', 'asalSekolah']);

        if ($request->filled('gelombang_id')) {
            $query->where('gelombang_id', $request->gelombang_id);
        }

        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }

        $pendaftar = $query->latest()->get();
        $gelombangList = Gelombang::whereHas('tahunAjaran', fn($q) => $q->active())->get();

        // Statistics
        $stats = [
            'total' => $pendaftar->count(),
            'lulus' => $pendaftar->where('status', 'lulus')->count(),
            'tidak_lulus' => $pendaftar->where('status', 'tidak_lulus')->count(),
            'menunggu' => $pendaftar->whereNotIn('status', ['lulus', 'tidak_lulus'])->count(),
        ];

        return view('admin.laporan.index', compact('pendaftar', 'gelombangList', 'stats'));
    }
}
