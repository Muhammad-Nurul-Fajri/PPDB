@extends('layouts.siswa')

@section('title', 'Pengumuman Hasil Seleksi')
@section('subtitle', 'Cek hasil seleksi penerimaan siswa baru.')

@section('content')
<div class="max-w-3xl mx-auto">
    
    @if(!$pendaftaran || !in_array($pendaftaran->status, ['lulus', 'tidak_lulus']))
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden text-center p-12">
            <div class="w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <i class="bi bi-hourglass-split text-4xl text-gray-400"></i>
            </div>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Pengumuman Belum Tersedia</h2>
            <p class="text-gray-500">
                Proses seleksi masih berlangsung atau belum dimulai. Silakan cek kembali halaman ini secara berkala.
            </p>
        </div>
    @else
        @php
            $isLulus = $pendaftaran->status === 'lulus';
            $bgClass = $isLulus ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200';
            $iconClass = $isLulus ? 'bi-check-circle-fill text-green-500' : 'bi-x-circle-fill text-red-500';
            $titleColor = $isLulus ? 'text-green-800' : 'text-red-800';
        @endphp
        
        <div class="{{ $bgClass }} rounded-3xl shadow-sm border p-8 md:p-12 text-center relative overflow-hidden">
            <!-- Decorative shapes -->
            <div class="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-20 rounded-full"></div>
            <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-white opacity-20 rounded-full"></div>
            
            <div class="relative z-10">
                <i class="bi {{ $iconClass }} text-6xl mb-6 inline-block"></i>
                
                <h2 class="text-3xl font-extrabold {{ $titleColor }} mb-2">
                    @if($isLulus)
                        SELAMAT! ANDA LULUS
                    @else
                        MOHON MAAF, ANDA TIDAK LULUS
                    @endif
                </h2>
                
                <p class="text-lg {{ $titleColor }} opacity-80 mb-8">
                    Berdasarkan hasil evaluasi dan seleksi panitia PPDB, menyatakan bahwa:
                </p>
                
                <div class="bg-white rounded-xl p-6 shadow-sm mb-8 text-left max-w-md mx-auto border border-gray-100">
                    <div class="grid grid-cols-3 gap-2 text-sm mb-2">
                        <span class="text-gray-500">No. Pendaftaran</span>
                        <span class="col-span-2 font-semibold text-gray-900">{{ $pendaftaran->no_pendaftaran }}</span>
                    </div>
                    <div class="grid grid-cols-3 gap-2 text-sm mb-2">
                        <span class="text-gray-500">Nama Lengkap</span>
                        <span class="col-span-2 font-semibold text-gray-900">{{ $pendaftaran->biodataSiswa->nama_lengkap ?? Auth::user()->name }}</span>
                    </div>
                    <div class="grid grid-cols-3 gap-2 text-sm">
                        <span class="text-gray-500">Asal Sekolah</span>
                        <span class="col-span-2 font-semibold text-gray-900">{{ $pendaftaran->asalSekolah->nama_sekolah ?? '-' }}</span>
                    </div>
                </div>

                @if($isLulus)
                    <div class="inline-block bg-white p-4 rounded-xl border border-green-200">
                        <h4 class="font-bold text-gray-900 mb-2 text-sm uppercase">Langkah Selanjutnya:</h4>
                        <ul class="text-sm text-gray-600 text-left list-decimal pl-4 space-y-1">
                            <li>Cetak bukti pendaftaran.</li>
                            <li>Lakukan daftar ulang di sekolah pada tanggal yang ditentukan.</li>
                            <li>Bawa berkas fisik (fotokopi KK, Akta, Ijazah/SKL).</li>
                        </ul>
                    </div>
                @else
                    <p class="text-sm {{ $titleColor }} opacity-80">
                        Tetap semangat dan jangan putus asa. Kesuksesan bisa diraih di mana saja.
                    </p>
                @endif
                
                @if($pendaftaran->seleksi && $pendaftaran->seleksi->keterangan)
                    <div class="mt-6 pt-6 border-t border-black/10">
                        <p class="text-sm {{ $titleColor }} opacity-80"><strong>Catatan Panitia:</strong><br>{{ $pendaftaran->seleksi->keterangan }}</p>
                    </div>
                @endif
            </div>
        </div>
    @endif

</div>
@endsection
