@extends('layouts.siswa')

@section('title', 'Dashboard Calon Siswa')
@section('subtitle', 'Selamat datang di Sistem Penerimaan Siswa Baru')

@section('content')
<div class="space-y-6">
    <!-- Status Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        
        <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 flex items-center">
            <div class="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mr-4">
                <i class="bi bi-credit-card text-blue-600 dark:text-blue-400 text-2xl"></i>
            </div>
            <div>
                <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Nomor Pendaftaran</p>
                <h4 class="text-xl font-bold text-gray-900 dark:text-white">{{ $pendaftaran->no_pendaftaran ?? '-' }}</h4>
            </div>
        </div>

        <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 flex items-center">
            <div class="w-14 h-14 rounded-2xl bg-green-100 dark:bg-green-900/50 flex items-center justify-center mr-4">
                <i class="bi bi-folder-check text-green-600 dark:text-green-400 text-2xl"></i>
            </div>
            <div>
                <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Status Berkas</p>
                <h4 class="text-xl font-bold text-green-600 dark:text-green-400">{{ $pendaftaran ? $pendaftaran->statusLabel() : '-' }}</h4>
            </div>
        </div>

        <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 flex items-center">
            <div class="w-14 h-14 rounded-2xl bg-yellow-100 dark:bg-yellow-900/50 flex items-center justify-center mr-4">
                <i class="bi bi-search text-yellow-600 dark:text-yellow-400 text-2xl"></i>
            </div>
            <div>
                <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Verifikasi</p>
                @php
                    $isVerified = $pendaftaran && in_array($pendaftaran->status, ['berkas_lengkap', 'lulus', 'tidak_lulus']);
                    $verifText = $isVerified ? 'Selesai' : 'Menunggu';
                    $verifColor = $isVerified ? 'text-green-600 dark:text-green-400' : 'text-yellow-600 dark:text-yellow-400';
                @endphp
                <h4 class="text-xl font-bold {{ $verifColor }}">{{ $verifText }}</h4>
            </div>
        </div>

        <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 flex items-center">
            <div class="w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mr-4">
                <i class="bi bi-award text-purple-600 dark:text-purple-400 text-2xl"></i>
            </div>
            <div>
                <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Status Seleksi</p>
                @php
                    $seleksiText = $pendaftaran && $pendaftaran->seleksi ? $pendaftaran->seleksi->statusLabel() : 'Menunggu';
                    $seleksiColor = 'text-purple-600 dark:text-purple-400';
                    if ($seleksiText === 'Lulus') $seleksiColor = 'text-green-600 dark:text-green-400';
                    if ($seleksiText === 'Tidak Lulus') $seleksiColor = 'text-red-600 dark:text-red-400';
                @endphp
                <h4 class="text-xl font-bold {{ $seleksiColor }}">{{ $seleksiText }}</h4>
            </div>
        </div>

    </div>

    @if($pendaftaran && $pendaftaran->status === 'draf')
        <div class="bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-500 p-4 rounded-r-lg">
            <div class="flex">
                <div class="flex-shrink-0">
                    <i class="bi bi-exclamation-triangle text-yellow-500 text-xl"></i>
                </div>
                <div class="ml-3">
                    <h3 class="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                        Pendaftaran Anda masih berstatus Draf.
                    </h3>
                    <div class="mt-2 text-sm text-yellow-700 dark:text-yellow-300">
                        <p>Silakan lengkapi semua data (Biodata, Data Orang Tua, Asal Sekolah, dan Upload Berkas) lalu klik tombol Submit di bawah.</p>
                    </div>
                    <div class="mt-4">
                        <form action="{{ route('siswa.submit') }}" method="POST">
                            @csrf
                            <button type="submit" class="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                                Submit Pendaftaran Sekarang
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    @endif

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <!-- Progress Container (React Island) -->
        <div class="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <div class="px-6 py-5 border-b border-gray-100 dark:border-gray-700">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Progress Pendaftaran</h3>
            </div>
            <div class="p-6">
                @php
                    $progress = $pendaftaran ? $pendaftaran->hitungProgress() : 0;
                @endphp
                
                <div class="mb-2 flex justify-between items-center">
                    <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Kelengkapan Data</span>
                    <span class="text-sm font-bold text-blue-600 dark:text-blue-400">{{ $progress }}%</span>
                </div>
                <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-8">
                    <div class="bg-blue-600 h-2.5 rounded-full transition-all duration-1000" style="width: {{ $progress }}%"></div>
                </div>

                <div class="space-y-4">
                    <div class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                            <i class="bi bi-check text-green-600 text-xl"></i>
                        </div>
                        <span class="text-gray-700 dark:text-gray-300 font-medium">Registrasi Akun</span>
                    </div>
                    
                    <div class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded-full {{ $pendaftaran && $pendaftaran->biodataSiswa ? 'bg-green-100' : 'bg-gray-100 dark:bg-gray-700' }} flex items-center justify-center">
                            <i class="bi {{ $pendaftaran && $pendaftaran->biodataSiswa ? 'bi-check text-green-600' : 'bi-dash text-gray-400' }} text-xl"></i>
                        </div>
                        <span class="text-gray-700 dark:text-gray-300 font-medium">Lengkapi Biodata</span>
                    </div>

                    <div class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded-full {{ $pendaftaran && $pendaftaran->dataOrangTua ? 'bg-green-100' : 'bg-gray-100 dark:bg-gray-700' }} flex items-center justify-center">
                            <i class="bi {{ $pendaftaran && $pendaftaran->dataOrangTua ? 'bi-check text-green-600' : 'bi-dash text-gray-400' }} text-xl"></i>
                        </div>
                        <span class="text-gray-700 dark:text-gray-300 font-medium">Lengkapi Data Orang Tua</span>
                    </div>

                    <div class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded-full {{ $pendaftaran && $pendaftaran->asalSekolah ? 'bg-green-100' : 'bg-gray-100 dark:bg-gray-700' }} flex items-center justify-center">
                            <i class="bi {{ $pendaftaran && $pendaftaran->asalSekolah ? 'bi-check text-green-600' : 'bi-dash text-gray-400' }} text-xl"></i>
                        </div>
                        <span class="text-gray-700 dark:text-gray-300 font-medium">Lengkapi Asal Sekolah</span>
                    </div>

                    <div class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded-full {{ $pendaftaran && $pendaftaran->berkas->count() > 0 ? 'bg-green-100' : 'bg-gray-100 dark:bg-gray-700' }} flex items-center justify-center">
                            <i class="bi {{ $pendaftaran && $pendaftaran->berkas->count() > 0 ? 'bi-check text-green-600' : 'bi-dash text-gray-400' }} text-xl"></i>
                        </div>
                        <span class="text-gray-700 dark:text-gray-300 font-medium">Upload Berkas</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Quick Actions -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <div class="px-6 py-5 border-b border-gray-100 dark:border-gray-700">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Aksi Cepat</h3>
            </div>
            <div class="p-6 grid grid-cols-1 gap-4">
                <a href="{{ route('siswa.biodata') }}" class="flex items-center justify-center gap-2 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 px-4 py-3 rounded-xl font-medium hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors">
                    <i class="bi bi-pencil-square"></i> Lengkapi Biodata
                </a>
                <a href="{{ route('siswa.upload-berkas') }}" class="flex items-center justify-center gap-2 bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-4 py-3 rounded-xl font-medium hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors">
                    <i class="bi bi-upload"></i> Upload Berkas
                </a>
                <a href="{{ route('siswa.bukti-pendaftaran.download') }}" class="flex items-center justify-center gap-2 bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 px-4 py-3 rounded-xl font-medium hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors {{ !$pendaftaran || in_array($pendaftaran->status, ['draf', 'menunggu']) ? 'opacity-50 cursor-not-allowed pointer-events-none' : '' }}">
                    <i class="bi bi-printer"></i> Cetak Bukti
                </a>
            </div>
        </div>

    </div>
</div>
@endsection
