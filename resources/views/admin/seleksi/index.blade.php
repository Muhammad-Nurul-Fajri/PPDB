@extends('layouts.admin')

@section('title', 'Penentuan Hasil Seleksi')

@section('content')
<div class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
    
    <div class="p-6 border-b border-gray-100 dark:border-gray-700">
        <form action="{{ route('admin.seleksi.index') }}" method="GET" class="flex flex-col md:flex-row gap-4">
            <div class="flex-1">
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <i class="bi bi-search text-gray-400"></i>
                    </div>
                    <input type="text" name="search" value="{{ request('search') }}" placeholder="Cari No. Daftar atau Nama..." class="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900 focus:ring-blue-500 focus:border-blue-500">
                </div>
            </div>
            <div class="w-full md:w-48">
                <select name="status" class="w-full border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-3 bg-white dark:bg-gray-900 focus:ring-blue-500">
                    <option value="">Semua Status</option>
                    <option value="berkas_lengkap" {{ request('status') == 'berkas_lengkap' ? 'selected' : '' }}>Belum Diseleksi</option>
                    <option value="lulus" {{ request('status') == 'lulus' ? 'selected' : '' }}>Lulus</option>
                    <option value="tidak_lulus" {{ request('status') == 'tidak_lulus' ? 'selected' : '' }}>Tidak Lulus</option>
                </select>
            </div>
            <button type="submit" class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Cari
            </button>
            @if(request()->anyFilled(['search', 'status']))
                <a href="{{ route('admin.seleksi.index') }}" class="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 text-center transition-colors">Reset</a>
            @endif
        </form>
    </div>

    <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
            <thead>
                <tr class="bg-gray-50 dark:bg-gray-900/50 text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider border-b border-gray-200 dark:border-gray-700">
                    <th class="px-6 py-4 font-medium">Pendaftar</th>
                    <th class="px-6 py-4 font-medium">Asal Sekolah</th>
                    <th class="px-6 py-4 font-medium">Nilai Rapor</th>
                    <th class="px-6 py-4 font-medium">Status Seleksi</th>
                    <th class="px-6 py-4 font-medium text-center">Aksi</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 dark:divide-gray-700 text-sm">
                @forelse($pendaftar as $p)
                    <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td class="px-6 py-4">
                            <div class="font-medium text-gray-900 dark:text-gray-200">{{ $p->biodataSiswa->nama_lengkap ?? $p->user->name }}</div>
                            <div class="text-xs text-gray-500">{{ $p->no_pendaftaran }} | {{ $p->gelombang->nama_gelombang ?? '-' }}</div>
                        </td>
                        <td class="px-6 py-4 text-gray-700 dark:text-gray-300">
                            {{ $p->asalSekolah->nama_sekolah ?? '-' }}
                        </td>
                        <td class="px-6 py-4 text-gray-900 font-bold dark:text-white">
                            {{ $p->asalSekolah->rata_rata_nilai ?? '-' }}
                        </td>
                        <td class="px-6 py-4">
                            @if($p->status == 'berkas_lengkap')
                                <span class="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800">Belum Ditentukan</span>
                            @elseif($p->status == 'lulus')
                                <span class="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800 border border-green-200">Lulus</span>
                            @elseif($p->status == 'tidak_lulus')
                                <span class="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">Tidak Lulus</span>
                            @endif
                            
                            @if($p->seleksi && $p->seleksi->nilai)
                                <div class="mt-1 text-xs text-gray-500">Nilai Akhir: {{ $p->seleksi->nilai }}</div>
                            @endif
                        </td>
                        <td class="px-6 py-4 text-center">
                            <button x-data @click="$dispatch('open-modal', 'seleksi-{{ $p->id }}')" class="bg-purple-600 text-white px-4 py-1.5 rounded-lg text-sm hover:bg-purple-700 transition-colors">
                                Input Hasil
                            </button>
                        </td>
                    </tr>
                @empty
                    <tr>
                        <td colspan="5" class="px-6 py-12 text-center text-gray-500">
                            <i class="bi bi-award text-4xl mb-3 block text-gray-300"></i>
                            Tidak ada data pendaftar yang siap diseleksi saat ini (berkas lengkap).
                        </td>
                    </tr>
                @endforelse
            </tbody>
        </table>
    </div>
    
    @if($pendaftar->hasPages())
        <div class="px-6 py-4 border-t border-gray-100 dark:border-gray-700">
            {{ $pendaftar->withQueryString()->links() }}
        </div>
    @endif
</div>

<!-- Modals for Seleksi -->
@foreach($pendaftar as $p)
    <div x-data="{ show: false }" 
         x-show="show" 
         @open-modal.window="if ($event.detail === 'seleksi-{{ $p->id }}') show = true"
         @keydown.escape.window="show = false"
         class="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 sm:px-0"
         style="display: none;">
        
        <div x-show="show" class="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" @click="show = false"></div>

        <div x-show="show" class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
            <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-gray-50 dark:bg-gray-900">
                <h3 class="text-lg font-bold text-gray-900 dark:text-white">Hasil Seleksi: {{ $p->biodataSiswa->nama_lengkap ?? $p->user->name }}</h3>
                <button @click="show = false" class="text-gray-400 hover:text-gray-500 focus:outline-none">
                    <i class="bi bi-x-lg text-xl"></i>
                </button>
            </div>
            
            <form action="{{ route('admin.seleksi.update', $p->id) }}" method="POST">
                @csrf
                <div class="p-6 space-y-4">
                    
                    <div class="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 text-sm border border-gray-200 dark:border-gray-700">
                        <div class="flex justify-between mb-1"><span class="text-gray-500">Nilai Rapor Rata-rata</span> <span class="font-bold text-gray-900 dark:text-white">{{ $p->asalSekolah->rata_rata_nilai ?? '-' }}</span></div>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Keputusan Akhir <span class="text-red-500">*</span></label>
                        <select name="status" required class="w-full border border-gray-300 dark:border-gray-600 rounded-lg py-2.5 px-3 bg-white dark:bg-gray-900 focus:ring-blue-500">
                            <option value="">-- Pilih Keputusan --</option>
                            <option value="lulus" {{ $p->status == 'lulus' ? 'selected' : '' }}>Lulus</option>
                            <option value="tidak_lulus" {{ $p->status == 'tidak_lulus' ? 'selected' : '' }}>Tidak Lulus</option>
                        </select>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nilai Akhir / Tes (Opsional)</label>
                        <input type="number" step="0.01" name="nilai" value="{{ $p->seleksi->nilai ?? '' }}" class="w-full border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-3 bg-white dark:bg-gray-900 focus:ring-blue-500" placeholder="Contoh: 88.5">
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Keterangan / Catatan (Opsional)</label>
                        <textarea name="keterangan" rows="3" class="w-full border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-3 bg-white dark:bg-gray-900 focus:ring-blue-500">{{ $p->seleksi->keterangan ?? '' }}</textarea>
                    </div>

                </div>
                
                <div class="px-6 py-4 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 flex justify-end gap-3">
                    <button type="button" @click="show = false" class="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors font-medium">
                        Batal
                    </button>
                    <button type="submit" class="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors font-medium shadow-md">
                        Simpan Keputusan
                    </button>
                </div>
            </form>
        </div>
    </div>
@endforeach
@endsection
