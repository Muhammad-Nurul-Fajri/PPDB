<?php

use App\Http\Controllers\AdminDashboardController;
use App\Http\Controllers\LandingController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SiswaDashboardController;
use Illuminate\Support\Facades\Route;

// Public Routes
Route::get('/', [LandingController::class, 'index'])->name('home');

// Siswa Routes
Route::middleware(['auth', 'verified', 'role:siswa'])->prefix('siswa')->name('siswa.')->group(function () {
    Route::get('/dashboard', [SiswaDashboardController::class, 'index'])->name('dashboard');
    
    Route::get('/biodata', [SiswaDashboardController::class, 'biodata'])->name('biodata');
    Route::post('/biodata', [SiswaDashboardController::class, 'storeBiodata'])->name('biodata.store');
    
    Route::get('/orangtua', [SiswaDashboardController::class, 'dataOrangTua'])->name('orangtua');
    Route::post('/orangtua', [SiswaDashboardController::class, 'storeDataOrangTua'])->name('orangtua.store');
    
    Route::get('/asal-sekolah', [SiswaDashboardController::class, 'asalSekolah'])->name('asal-sekolah');
    Route::post('/asal-sekolah', [SiswaDashboardController::class, 'storeAsalSekolah'])->name('asal-sekolah.store');
    
    Route::get('/upload-berkas', [SiswaDashboardController::class, 'uploadBerkas'])->name('upload-berkas');
    Route::post('/upload-berkas', [SiswaDashboardController::class, 'storeBerkas'])->name('upload-berkas.store');
    Route::delete('/upload-berkas/{berkas}', [SiswaDashboardController::class, 'deleteBerkas'])->name('upload-berkas.delete');
    
    Route::post('/submit-pendaftaran', [SiswaDashboardController::class, 'submitPendaftaran'])->name('submit');
    
    Route::get('/bukti-pendaftaran', [SiswaDashboardController::class, 'buktiPendaftaran'])->name('bukti-pendaftaran');
    Route::get('/bukti-pendaftaran/download', [SiswaDashboardController::class, 'downloadBuktiPendaftaran'])->name('bukti-pendaftaran.download');
    
    Route::get('/pengumuman', [SiswaDashboardController::class, 'pengumuman'])->name('pengumuman');
    
    Route::get('/profil', [SiswaDashboardController::class, 'profil'])->name('profil');
    Route::put('/profil', [SiswaDashboardController::class, 'updateProfil'])->name('profil.update');
});

// Admin Routes
Route::middleware(['auth', 'verified', 'role:admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/dashboard', [AdminDashboardController::class, 'index'])->name('dashboard');
    
    Route::get('/pendaftar', [AdminDashboardController::class, 'pendaftar'])->name('pendaftar.index');
    Route::get('/pendaftar/{pendaftaran}', [AdminDashboardController::class, 'showPendaftar'])->name('pendaftar.show');
    
    Route::get('/verifikasi', [AdminDashboardController::class, 'verifikasi'])->name('verifikasi.index');
    Route::post('/verifikasi/{berkas}', [AdminDashboardController::class, 'updateVerifikasi'])->name('verifikasi.update');
    
    Route::get('/seleksi', [AdminDashboardController::class, 'seleksi'])->name('seleksi.index');
    Route::post('/seleksi/{pendaftaran}', [AdminDashboardController::class, 'updateSeleksi'])->name('seleksi.update');
    
    Route::get('/periode', [AdminDashboardController::class, 'periode'])->name('periode.index');
    Route::post('/tahun-ajaran', [AdminDashboardController::class, 'storeTahunAjaran'])->name('tahun-ajaran.store');
    Route::put('/tahun-ajaran/{tahunAjaran}', [AdminDashboardController::class, 'updateTahunAjaran'])->name('tahun-ajaran.update');
    Route::delete('/tahun-ajaran/{tahunAjaran}', [AdminDashboardController::class, 'deleteTahunAjaran'])->name('tahun-ajaran.delete');
    
    // Route::get('/gelombang', [AdminDashboardController::class, 'gelombang'])->name('gelombang.index'); // combined to periode
    Route::post('/gelombang', [AdminDashboardController::class, 'storeGelombang'])->name('gelombang.store');
    Route::put('/gelombang/{gelombang}', [AdminDashboardController::class, 'updateGelombang'])->name('gelombang.update');
    Route::delete('/gelombang/{gelombang}', [AdminDashboardController::class, 'deleteGelombang'])->name('gelombang.delete');
    
    Route::get('/laporan', [AdminDashboardController::class, 'laporan'])->name('laporan.index');
});

// Generic Profile Routes (if needed, but Siswa has its own. Maybe keep for admin if admin uses it)
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
