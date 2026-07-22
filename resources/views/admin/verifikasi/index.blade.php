@extends('layouts.admin')

@section('title', 'Verifikasi Berkas')

@section('content')
<div class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
    
    <div class="p-6 border-b border-gray-100 dark:border-gray-700">
        <form action="{{ route('admin.verifikasi.index') }}" method="GET" class="flex flex-col md:flex-row gap-4">
            <div class="flex-1">
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <i class="bi bi-search text-gray-400"></i>
                    </div>
                    <input type="text" name="search" value="{{ request('search') }}" placeholder="Cari No. Daftar atau Nama..." class="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900 focus:ring-blue-500 focus:border-blue-500">
                </div>
            </div>
            <button type="submit" class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Cari
            </button>
            @if(request('search'))
                <a href="{{ route('admin.verifikasi.index') }}" class="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 text-center transition-colors">Reset</a>
            @endif
        </form>
    </div>

    <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
            <thead>
                <tr class="bg-gray-50 dark:bg-gray-900/50 text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider border-b border-gray-200 dark:border-gray-700">
                    <th class="px-6 py-4 font-medium">Pendaftar</th>
                    <th class="px-6 py-4 font-medium">Status Pendaftaran</th>
                    <th class="px-6 py-4 font-medium">Berkas Perlu Verifikasi</th>
                    <th class="px-6 py-4 font-medium text-center">Aksi</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 dark:divide-gray-700 text-sm">
                @forelse($pendaftar as $p)
                    <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td class="px-6 py-4">
                            <div class="font-medium text-gray-900 dark:text-gray-200">{{ $p->biodataSiswa->nama_lengkap ?? $p->user->name }}</div>
                            <div class="text-xs text-gray-500">{{ $p->no_pendaftaran }}</div>
                        </td>
                        <td class="px-6 py-4">
                            <span class="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">
                                {{ $p->statusLabel() }}
                            </span>
                        </td>
                        <td class="px-6 py-4">
                            @php
                                $berkasMenunggu = $p->berkas->where('status', 'menunggu');
                            @endphp
                            
                            @if($berkasMenunggu->count() > 0)
                                <div class="flex flex-wrap gap-1">
                                    @foreach($berkasMenunggu as $b)
                                        <span class="px-2 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded text-xs uppercase">
                                            {{ str_replace('_', ' ', $b->jenis_berkas) }}
                                        </span>
                                    @endforeach
                                </div>
                            @else
                                <span class="text-gray-500 italic text-xs">Semua berkas sudah diproses</span>
                            @endif
                        </td>
                        <td class="px-6 py-4 text-center">
                            <button x-data @click="$dispatch('open-modal', 'verifikasi-{{ $p->id }}')" class="bg-blue-600 text-white px-4 py-1.5 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                                Verifikasi
                            </button>
                        </td>
                    </tr>
                @empty
                    <tr>
                        <td colspan="4" class="px-6 py-12 text-center text-gray-500">
                            <i class="bi bi-shield-check text-4xl mb-3 block text-gray-300"></i>
                            Tidak ada berkas yang perlu diverifikasi saat ini.
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

<!-- Modals for Verifikasi -->
@foreach($pendaftar as $p)
    <div x-data="{ show: false }" 
         x-show="show" 
         @open-modal.window="if ($event.detail === 'verifikasi-{{ $p->id }}') show = true"
         @keydown.escape.window="show = false"
         class="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 sm:px-0"
         style="display: none;">
        
        <div x-show="show" class="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" @click="show = false"></div>

        <div x-show="show" class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl transform transition-all sm:max-w-4xl sm:w-full max-h-[90vh] flex flex-col">
            <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-gray-50 dark:bg-gray-900">
                <h3 class="text-lg font-bold text-gray-900 dark:text-white">Verifikasi Berkas: {{ $p->biodataSiswa->nama_lengkap ?? $p->user->name }}</h3>
                <button @click="show = false" class="text-gray-400 hover:text-gray-500 focus:outline-none">
                    <i class="bi bi-x-lg text-xl"></i>
                </button>
            </div>
            
            <div class="p-6 overflow-y-auto flex-1">
                @if($p->berkas->count() == 0)
                    <div class="text-center py-8 text-gray-500">Pendaftar belum mengunggah berkas apapun.</div>
                @else
                    <div class="space-y-8">
                        @foreach($p->berkas as $berkas)
                            <div class="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden flex flex-col md:flex-row">
                                <!-- Berkas Preview/Info -->
                                <div class="bg-gray-50 dark:bg-gray-900 p-4 md:w-1/3 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center text-center">
                                    @php
                                        $ext = pathinfo($berkas->path_file, PATHINFO_EXTENSION);
                                        $icon = $ext == 'pdf' ? 'bi-file-earmark-pdf text-red-500' : 'bi-file-earmark-image text-blue-500';
                                    @endphp
                                    <i class="bi {{ $icon }} text-5xl mb-3"></i>
                                    <h5 class="font-bold text-gray-900 dark:text-white uppercase mb-1">{{ str_replace('_', ' ', $berkas->jenis_berkas) }}</h5>
                                    
                                    <div class="mt-2 mb-4">
                                        <span class="px-2 py-1 text-xs rounded-full 
                                            {{ $berkas->status == 'diterima' ? 'bg-green-100 text-green-800' : 
                                               ($berkas->status == 'ditolak' || $berkas->status == 'perlu_perbaikan' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800') }}">
                                            Status saat ini: {{ ucwords(str_replace('_', ' ', $berkas->status)) }}
                                        </span>
                                    </div>
                                    
                                    <a href="{{ Storage::url($berkas->path_file) }}" target="_blank" class="text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors inline-flex items-center gap-2">
                                        <i class="bi bi-box-arrow-up-right"></i> Buka Berkas
                                    </a>
                                </div>
                                
                                <!-- Form Verifikasi -->
                                <div class="p-6 md:w-2/3 bg-white dark:bg-gray-800">
                                    <form action="{{ route('admin.verifikasi.update', $berkas->id) }}" method="POST">
                                        @csrf
                                        
                                        <div class="mb-4">
                                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Tindakan Verifikasi</label>
                                            <div class="flex gap-4">
                                                <label class="flex items-center">
                                                    <input type="radio" name="status" value="diterima" class="text-blue-600 focus:ring-blue-500 h-4 w-4 border-gray-300" {{ $berkas->status == 'diterima' ? 'checked' : '' }} required>
                                                    <span class="ml-2 text-sm text-gray-900 dark:text-gray-300">Terima Dokumen</span>
                                                </label>
                                                <label class="flex items-center">
                                                    <input type="radio" name="status" value="perlu_perbaikan" class="text-red-600 focus:ring-red-500 h-4 w-4 border-gray-300" {{ $berkas->status == 'perlu_perbaikan' || $berkas->status == 'ditolak' ? 'checked' : '' }}>
                                                    <span class="ml-2 text-sm text-gray-900 dark:text-gray-300">Perlu Perbaikan (Tolak)</span>
                                                </label>
                                            </div>
                                        </div>
                                        
                                        <div class="mb-4">
                                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Catatan (Opsional, wajib jika perlu perbaikan)</label>
                                            <textarea name="catatan" rows="2" class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 focus:ring-blue-500 focus:border-blue-500 text-sm">{{ $berkas->verifikasi->catatan ?? '' }}</textarea>
                                        </div>
                                        
                                        <div class="flex justify-end">
                                            <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                                                Simpan Verifikasi Berkas Ini
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        @endforeach
                    </div>
                @endif
            </div>
            
            <div class="px-6 py-4 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 flex justify-end">
                <button type="button" @click="show = false" class="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors font-medium">
                    Tutup
                </button>
            </div>
        </div>
    </div>
@endforeach
@endsection
