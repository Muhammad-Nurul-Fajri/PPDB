@extends('layouts.admin')

@section('title', 'Detail Pendaftar: ' . $pendaftaran->no_pendaftaran)

@section('content')
<div class="mb-4">
    <a href="{{ url()->previous() }}" class="text-blue-600 hover:underline flex items-center gap-2">
        <i class="bi bi-arrow-left"></i> Kembali
    </a>
</div>

<div class="grid grid-cols-1 xl:grid-cols-3 gap-6">
    
    <!-- Kolom Kiri: Profil Singkat -->
    <div class="xl:col-span-1 space-y-6">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
            <div class="p-6 text-center border-b border-gray-100 dark:border-gray-700">
                <div class="w-24 h-24 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-3xl font-bold mb-4 shadow-sm">
                    {{ substr($pendaftaran->biodataSiswa->nama_lengkap ?? $pendaftaran->user->name, 0, 1) }}
                </div>
                <h2 class="text-xl font-bold text-gray-900 dark:text-white">{{ $pendaftaran->biodataSiswa->nama_lengkap ?? $pendaftaran->user->name }}</h2>
                <p class="text-gray-500">{{ $pendaftaran->no_pendaftaran }}</p>
                <div class="mt-4">
                    <span class="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium">
                        Status: {{ $pendaftaran->statusLabel() }}
                    </span>
                </div>
            </div>
            <div class="p-6 space-y-4 text-sm">
                <div class="flex justify-between border-b border-gray-100 dark:border-gray-700 pb-2">
                    <span class="text-gray-500">Gelombang</span>
                    <span class="font-medium text-gray-900 dark:text-white">{{ $pendaftaran->gelombang->nama_gelombang ?? '-' }}</span>
                </div>
                <div class="flex justify-between border-b border-gray-100 dark:border-gray-700 pb-2">
                    <span class="text-gray-500">Tgl Daftar</span>
                    <span class="font-medium text-gray-900 dark:text-white">{{ $pendaftaran->created_at->format('d M Y') }}</span>
                </div>
                <div class="flex justify-between border-b border-gray-100 dark:border-gray-700 pb-2">
                    <span class="text-gray-500">Email</span>
                    <span class="font-medium text-gray-900 dark:text-white">{{ $pendaftaran->user->email }}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-gray-500">No. HP</span>
                    <span class="font-medium text-gray-900 dark:text-white">{{ $pendaftaran->user->no_hp ?? '-' }}</span>
                </div>
            </div>
        </div>
        
        <!-- Hasil Seleksi Card if exists -->
        @if($pendaftaran->seleksi)
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden p-6">
            <h3 class="text-lg font-bold mb-4 text-gray-900 dark:text-white border-b border-gray-100 pb-2">Hasil Seleksi</h3>
            <div class="space-y-3 text-sm">
                <div class="flex justify-between">
                    <span class="text-gray-500">Status</span>
                    <span class="font-bold {{ $pendaftaran->seleksi->status == 'lulus' ? 'text-green-600' : 'text-red-600' }}">
                        {{ strtoupper(str_replace('_', ' ', $pendaftaran->seleksi->status)) }}
                    </span>
                </div>
                <div class="flex justify-between">
                    <span class="text-gray-500">Nilai</span>
                    <span class="font-medium text-gray-900">{{ $pendaftaran->seleksi->nilai ?? '-' }}</span>
                </div>
                <div>
                    <span class="text-gray-500 block mb-1">Catatan:</span>
                    <p class="text-gray-900 bg-gray-50 p-2 rounded border border-gray-100">{{ $pendaftaran->seleksi->keterangan ?? '-' }}</p>
                </div>
            </div>
        </div>
        @endif
    </div>

    <!-- Kolom Kanan: Tab Data -->
    <div class="xl:col-span-2">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden" x-data="{ tab: 'biodata' }">
            
            <!-- Tabs -->
            <div class="flex border-b border-gray-200 dark:border-gray-700 overflow-x-auto">
                <button @click="tab = 'biodata'" :class="tab === 'biodata' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'" class="px-6 py-4 border-b-2 font-medium text-sm whitespace-nowrap transition-colors">
                    Biodata
                </button>
                <button @click="tab = 'ortu'" :class="tab === 'ortu' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'" class="px-6 py-4 border-b-2 font-medium text-sm whitespace-nowrap transition-colors">
                    Data Orang Tua
                </button>
                <button @click="tab = 'sekolah'" :class="tab === 'sekolah' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'" class="px-6 py-4 border-b-2 font-medium text-sm whitespace-nowrap transition-colors">
                    Asal Sekolah
                </button>
                <button @click="tab = 'berkas'" :class="tab === 'berkas' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'" class="px-6 py-4 border-b-2 font-medium text-sm whitespace-nowrap transition-colors">
                    Berkas <span class="ml-1 bg-gray-200 text-gray-700 py-0.5 px-2 rounded-full text-xs">{{ $pendaftaran->berkas->count() }}</span>
                </button>
            </div>

            <div class="p-6">
                <!-- Tab: Biodata -->
                <div x-show="tab === 'biodata'" class="space-y-4">
                    @if($pendaftaran->biodataSiswa)
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-sm">
                            <div><span class="block text-gray-500 mb-1">NIK</span><span class="font-medium text-gray-900">{{ $pendaftaran->biodataSiswa->nik ?? '-' }}</span></div>
                            <div><span class="block text-gray-500 mb-1">NISN</span><span class="font-medium text-gray-900">{{ $pendaftaran->biodataSiswa->nisn ?? '-' }}</span></div>
                            <div><span class="block text-gray-500 mb-1">Nama Lengkap</span><span class="font-medium text-gray-900">{{ $pendaftaran->biodataSiswa->nama_lengkap }}</span></div>
                            <div><span class="block text-gray-500 mb-1">Jenis Kelamin</span><span class="font-medium text-gray-900">{{ $pendaftaran->biodataSiswa->jenis_kelamin == 'L' ? 'Laki-Laki' : 'Perempuan' }}</span></div>
                            <div><span class="block text-gray-500 mb-1">Tempat, Tanggal Lahir</span><span class="font-medium text-gray-900">{{ $pendaftaran->biodataSiswa->tempat_lahir }}, {{ \Carbon\Carbon::parse($pendaftaran->biodataSiswa->tanggal_lahir)->format('d M Y') }}</span></div>
                            <div><span class="block text-gray-500 mb-1">Agama</span><span class="font-medium text-gray-900">{{ $pendaftaran->biodataSiswa->agama }}</span></div>
                            <div class="md:col-span-2"><span class="block text-gray-500 mb-1">Alamat</span><span class="font-medium text-gray-900">{{ $pendaftaran->biodataSiswa->alamat }}, {{ $pendaftaran->biodataSiswa->desa }}, {{ $pendaftaran->biodataSiswa->kecamatan }}, {{ $pendaftaran->biodataSiswa->kota_kabupaten }}, {{ $pendaftaran->biodataSiswa->provinsi }} - {{ $pendaftaran->biodataSiswa->kode_pos }}</span></div>
                        </div>
                    @else
                        <p class="text-gray-500 italic">Belum mengisi biodata.</p>
                    @endif
                </div>

                <!-- Tab: Orang Tua -->
                <div x-show="tab === 'ortu'" style="display: none;">
                    @if($pendaftaran->dataOrangTua)
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <!-- Ayah -->
                            <div class="space-y-4 text-sm border-r border-gray-100 pr-4">
                                <h4 class="font-bold text-blue-600 border-b border-gray-100 pb-2 mb-4">Data Ayah</h4>
                                <div><span class="block text-gray-500 mb-1">Nama</span><span class="font-medium text-gray-900">{{ $pendaftaran->dataOrangTua->nama_ayah }}</span></div>
                                <div><span class="block text-gray-500 mb-1">NIK</span><span class="font-medium text-gray-900">{{ $pendaftaran->dataOrangTua->nik_ayah }}</span></div>
                                <div><span class="block text-gray-500 mb-1">Pekerjaan</span><span class="font-medium text-gray-900">{{ $pendaftaran->dataOrangTua->pekerjaan_ayah }}</span></div>
                                <div><span class="block text-gray-500 mb-1">Penghasilan</span><span class="font-medium text-gray-900">Rp {{ number_format($pendaftaran->dataOrangTua->penghasilan_ayah, 0, ',', '.') }}</span></div>
                                <div><span class="block text-gray-500 mb-1">No. HP</span><span class="font-medium text-gray-900">{{ $pendaftaran->dataOrangTua->no_hp_ayah }}</span></div>
                            </div>
                            <!-- Ibu -->
                            <div class="space-y-4 text-sm">
                                <h4 class="font-bold text-pink-600 border-b border-gray-100 pb-2 mb-4">Data Ibu</h4>
                                <div><span class="block text-gray-500 mb-1">Nama</span><span class="font-medium text-gray-900">{{ $pendaftaran->dataOrangTua->nama_ibu }}</span></div>
                                <div><span class="block text-gray-500 mb-1">NIK</span><span class="font-medium text-gray-900">{{ $pendaftaran->dataOrangTua->nik_ibu }}</span></div>
                                <div><span class="block text-gray-500 mb-1">Pekerjaan</span><span class="font-medium text-gray-900">{{ $pendaftaran->dataOrangTua->pekerjaan_ibu }}</span></div>
                                <div><span class="block text-gray-500 mb-1">Penghasilan</span><span class="font-medium text-gray-900">Rp {{ number_format($pendaftaran->dataOrangTua->penghasilan_ibu, 0, ',', '.') }}</span></div>
                                <div><span class="block text-gray-500 mb-1">No. HP</span><span class="font-medium text-gray-900">{{ $pendaftaran->dataOrangTua->no_hp_ibu }}</span></div>
                            </div>
                        </div>
                    @else
                        <p class="text-gray-500 italic">Belum mengisi data orang tua.</p>
                    @endif
                </div>

                <!-- Tab: Asal Sekolah -->
                <div x-show="tab === 'sekolah'" style="display: none;" class="space-y-4">
                    @if($pendaftaran->asalSekolah)
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-sm">
                            <div><span class="block text-gray-500 mb-1">Nama Sekolah</span><span class="font-medium text-gray-900">{{ $pendaftaran->asalSekolah->nama_sekolah }}</span></div>
                            <div><span class="block text-gray-500 mb-1">NPSN</span><span class="font-medium text-gray-900">{{ $pendaftaran->asalSekolah->npsn ?? '-' }}</span></div>
                            <div><span class="block text-gray-500 mb-1">Tahun Lulus</span><span class="font-medium text-gray-900">{{ $pendaftaran->asalSekolah->tahun_lulus }}</span></div>
                            <div><span class="block text-gray-500 mb-1">Rata-rata Nilai</span><span class="font-medium text-gray-900">{{ $pendaftaran->asalSekolah->rata_rata_nilai ?? '-' }}</span></div>
                            <div class="md:col-span-2"><span class="block text-gray-500 mb-1">Alamat Sekolah</span><span class="font-medium text-gray-900">{{ $pendaftaran->asalSekolah->alamat }}</span></div>
                        </div>
                    @else
                        <p class="text-gray-500 italic">Belum mengisi asal sekolah.</p>
                    @endif
                </div>

                <!-- Tab: Berkas -->
                <div x-show="tab === 'berkas'" style="display: none;">
                    @if($pendaftaran->berkas->count() > 0)
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            @foreach($pendaftaran->berkas as $berkas)
                                <div class="border border-gray-200 dark:border-gray-700 rounded-xl p-4 flex flex-col items-center justify-center text-center group hover:border-blue-500 transition-colors bg-gray-50 dark:bg-gray-800">
                                    @php
                                        $ext = pathinfo($berkas->path_file, PATHINFO_EXTENSION);
                                        $icon = $ext == 'pdf' ? 'bi-file-earmark-pdf text-red-500' : 'bi-file-earmark-image text-blue-500';
                                    @endphp
                                    <i class="bi {{ $icon }} text-4xl mb-3"></i>
                                    <h5 class="font-medium text-sm text-gray-900 dark:text-white uppercase mb-1">{{ str_replace('_', ' ', $berkas->jenis_berkas) }}</h5>
                                    
                                    <div class="mt-2 mb-3">
                                        <span class="px-2 py-1 text-xs rounded-full 
                                            {{ $berkas->status == 'diterima' ? 'bg-green-100 text-green-800' : 
                                               ($berkas->status == 'ditolak' || $berkas->status == 'perlu_perbaikan' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800') }}">
                                            {{ ucwords(str_replace('_', ' ', $berkas->status)) }}
                                        </span>
                                    </div>
                                    
                                    <a href="{{ Storage::url($berkas->path_file) }}" target="_blank" class="text-sm text-blue-600 hover:underline inline-flex items-center gap-1">
                                        <i class="bi bi-box-arrow-up-right"></i> Lihat Berkas
                                    </a>
                                </div>
                            @endforeach
                        </div>
                    @else
                        <p class="text-gray-500 italic">Belum mengunggah berkas.</p>
                    @endif
                </div>
            </div>
        </div>
    </div>

</div>
@endsection
