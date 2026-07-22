<?php

namespace App\Http\Controllers;

use App\Models\AsalSekolah;
use App\Models\Berkas;
use App\Models\BiodataSiswa;
use App\Models\DataOrangTua;
use App\Models\Pendaftaran;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\View\View;

class SiswaDashboardController extends Controller
{
    /**
     * Get the current user's pendaftaran.
     */
    private function getPendaftaran()
    {
        return Pendaftaran::with([
            'biodataSiswa',
            'dataOrangTua',
            'asalSekolah',
            'berkas',
            'seleksi',
            'gelombang.tahunAjaran',
        ])->where('user_id', Auth::id())->first();
    }

    /**
     * Show the siswa dashboard.
     */
    public function index(): View
    {
        $pendaftaran = $this->getPendaftaran();

        return view('siswa.dashboard', compact('pendaftaran'));
    }

    /**
     * Show the biodata form.
     */
    public function biodata(): View
    {
        $pendaftaran = $this->getPendaftaran();
        $biodata = $pendaftaran?->biodataSiswa;

        return view('siswa.biodata', compact('pendaftaran', 'biodata'));
    }

    /**
     * Store/update biodata siswa.
     */
    public function storeBiodata(Request $request): RedirectResponse
    {
        $pendaftaran = $this->getPendaftaran();

        if (!$pendaftaran) {
            return back()->with('error', 'Pendaftaran tidak ditemukan.');
        }

        $validated = $request->validate([
            'nisn' => 'nullable|string|max:20',
            'nik' => 'nullable|string|max:20',
            'nama_lengkap' => 'required|string|max:255',
            'jenis_kelamin' => 'required|in:L,P',
            'tempat_lahir' => 'required|string|max:255',
            'tanggal_lahir' => 'required|date',
            'no_hp' => 'required|string|max:20',
            'agama' => 'required|string|max:50',
            'alamat' => 'required|string',
            'provinsi' => 'required|string|max:255',
            'kota_kabupaten' => 'required|string|max:255',
            'kecamatan' => 'required|string|max:255',
            'desa' => 'required|string|max:255',
            'kode_pos' => 'required|string|max:10',
        ]);

        BiodataSiswa::updateOrCreate(
            ['pendaftaran_id' => $pendaftaran->id],
            $validated
        );

        return back()->with('success', 'Biodata berhasil disimpan.');
    }

    /**
     * Show data orang tua form.
     */
    public function dataOrangTua(): View
    {
        $pendaftaran = $this->getPendaftaran();
        $dataOrangTua = $pendaftaran?->dataOrangTua;

        return view('siswa.orangtua', compact('pendaftaran', 'dataOrangTua'));
    }

    /**
     * Store/update data orang tua.
     */
    public function storeDataOrangTua(Request $request): RedirectResponse
    {
        $pendaftaran = $this->getPendaftaran();

        if (!$pendaftaran) {
            return back()->with('error', 'Pendaftaran tidak ditemukan.');
        }

        $validated = $request->validate([
            'nama_ayah' => 'required|string|max:255',
            'nik_ayah' => 'required|string|max:20',
            'pekerjaan_ayah' => 'required|string|max:255',
            'penghasilan_ayah' => 'required|numeric|min:0',
            'no_hp_ayah' => 'required|string|max:20',
            'nama_ibu' => 'required|string|max:255',
            'nik_ibu' => 'required|string|max:20',
            'pekerjaan_ibu' => 'required|string|max:255',
            'penghasilan_ibu' => 'required|numeric|min:0',
            'no_hp_ibu' => 'required|string|max:20',
            'alamat' => 'required|string',
        ]);

        DataOrangTua::updateOrCreate(
            ['pendaftaran_id' => $pendaftaran->id],
            $validated
        );

        return back()->with('success', 'Data orang tua berhasil disimpan.');
    }

    /**
     * Show asal sekolah form.
     */
    public function asalSekolah(): View
    {
        $pendaftaran = $this->getPendaftaran();
        $asalSekolah = $pendaftaran?->asalSekolah;

        return view('siswa.asal-sekolah', compact('pendaftaran', 'asalSekolah'));
    }

    /**
     * Store/update asal sekolah.
     */
    public function storeAsalSekolah(Request $request): RedirectResponse
    {
        $pendaftaran = $this->getPendaftaran();

        if (!$pendaftaran) {
            return back()->with('error', 'Pendaftaran tidak ditemukan.');
        }

        $validated = $request->validate([
            'nama_sekolah' => 'required|string|max:255',
            'npsn' => 'nullable|string|max:20',
            'alamat' => 'required|string',
            'tahun_lulus' => 'required|integer|min:2000|max:' . (date('Y') + 1),
            'rata_rata_nilai' => 'nullable|numeric|min:0|max:100',
        ]);

        AsalSekolah::updateOrCreate(
            ['pendaftaran_id' => $pendaftaran->id],
            $validated
        );

        return back()->with('success', 'Data asal sekolah berhasil disimpan.');
    }

    /**
     * Show upload berkas page.
     */
    public function uploadBerkas(): View
    {
        $pendaftaran = $this->getPendaftaran();
        $berkas = $pendaftaran?->berkas ?? collect();
        $jenisBerkasWajib = ['ktp_kk', 'akta', 'ijazah', 'surat_keterangan_sekolah', 'ktp_orangtua'];

        return view('siswa.upload-berkas', compact('pendaftaran', 'berkas', 'jenisBerkasWajib'));
    }

    /**
     * Store a new berkas upload.
     */
    public function storeBerkas(Request $request): RedirectResponse
    {
        $pendaftaran = $this->getPendaftaran();

        if (!$pendaftaran) {
            return back()->with('error', 'Pendaftaran tidak ditemukan.');
        }

        $request->validate([
            'jenis_berkas' => 'required|in:ktp_kk,akta,ijazah,surat_keterangan_sekolah,ktp_orangtua',
            'file' => 'required|file|mimes:pdf,jpg,jpeg,png|max:2048',
        ]);

        // Delete old file if exists
        /** @var \App\Models\Berkas $existingBerkas */
        $existingBerkas = $pendaftaran->berkas()
            ->where('jenis_berkas', $request->jenis_berkas)
            ->first();

        if ($existingBerkas) {
            Storage::disk('public')->delete($existingBerkas->path_file);
            $existingBerkas->delete();
        }

        // Store new file
        $file = $request->file('file');
        $fileName = $request->jenis_berkas . '_' . $pendaftaran->no_pendaftaran . '_' . time() . '.' . $file->getClientOriginalExtension();
        $path = $file->storeAs('berkas/' . $pendaftaran->no_pendaftaran, $fileName, 'public');

        Berkas::create([
            'pendaftaran_id' => $pendaftaran->id,
            'jenis_berkas' => $request->jenis_berkas,
            'nama_file' => $file->getClientOriginalName(),
            'path_file' => $path,
            'status' => 'menunggu',
        ]);

        return back()->with('success', 'Berkas berhasil diupload.');
    }

    /**
     * Delete a berkas.
     */
    public function deleteBerkas(Berkas $berkas): RedirectResponse
    {
        $pendaftaran = $this->getPendaftaran();

        if (!$pendaftaran || $berkas->pendaftaran_id !== $pendaftaran->id) {
            return back()->with('error', 'Tidak memiliki akses.');
        }

        Storage::disk('public')->delete($berkas->path_file);
        $berkas->delete();

        return back()->with('success', 'Berkas berhasil dihapus.');
    }

    /**
     * Submit pendaftaran (change status from draft to menunggu).
     */
    public function submitPendaftaran(): RedirectResponse
    {
        $pendaftaran = $this->getPendaftaran();

        if (!$pendaftaran) {
            return back()->with('error', 'Pendaftaran tidak ditemukan.');
        }

        if ($pendaftaran->status !== 'draf') {
            return back()->with('error', 'Pendaftaran sudah disubmit sebelumnya.');
        }

        // Check completeness
        if (!$pendaftaran->biodataSiswa || !$pendaftaran->dataOrangTua || !$pendaftaran->asalSekolah) {
            return back()->with('error', 'Harap lengkapi semua data terlebih dahulu.');
        }

        if ($pendaftaran->berkas()->count() === 0) {
            return back()->with('error', 'Harap upload minimal satu berkas.');
        }

        $pendaftaran->update(['status' => 'menunggu']);

        return back()->with('success', 'Pendaftaran berhasil disubmit. Tunggu proses verifikasi oleh admin.');
    }

    /**
     * Show bukti pendaftaran page.
     */
    public function buktiPendaftaran(): View
    {
        $pendaftaran = $this->getPendaftaran();

        return view('siswa.bukti-pendaftaran', compact('pendaftaran'));
    }

    /**
     * Download bukti pendaftaran PDF.
     */
    public function downloadBuktiPendaftaran()
    {
        $pendaftaran = $this->getPendaftaran();

        if (!$pendaftaran) {
            return back()->with('error', 'Pendaftaran tidak ditemukan.');
        }

        $pdf = \Barryvdh\DomPDF\Facade\Pdf::loadView('pdf.bukti-pendaftaran', compact('pendaftaran'));

        return $pdf->download('bukti_pendaftaran_' . $pendaftaran->no_pendaftaran . '.pdf');
    }

    /**
     * Show pengumuman/selection results page.
     */
    public function pengumuman(): View
    {
        $pendaftaran = $this->getPendaftaran();

        return view('siswa.pengumuman', compact('pendaftaran'));
    }

    /**
     * Show profil page.
     */
    public function profil(): View
    {
        return view('siswa.profil');
    }

    /**
     * Update profil.
     */
    public function updateProfil(Request $request): RedirectResponse
    {
        $user = Auth::user();

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $user->id,
            'no_hp' => 'nullable|string|max:20',
        ]);

        $user->update($validated);

        return back()->with('success', 'Profil berhasil diperbarui.');
    }
}
