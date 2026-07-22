@extends('layouts.admin')

@section('title', 'Data Pendaftar')

@section('content')
<div class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
    
    <div class="p-6 border-b border-gray-100 dark:border-gray-700">
        <form action="{{ route('admin.pendaftar.index') }}" method="GET" class="flex flex-col md:flex-row gap-4">
            <div class="flex-1">
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <i class="bi bi-search text-gray-400"></i>
                    </div>
                    <input type="text" name="search" value="{{ request('search') }}" placeholder="Cari No. Daftar atau Nama..." class="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900 focus:ring-blue-500 focus:border-blue-500">
                </div>
            </div>
            
            <div class="w-full md:w-48">
                <select name="gelombang_id" class="w-full border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-3 bg-white dark:bg-gray-900 focus:ring-blue-500">
                    <option value="">Semua Gelombang</option>
                    @foreach($gelombangList as $g)
                        <option value="{{ $g->id }}" {{ request('gelombang_id') == $g->id ? 'selected' : '' }}>{{ $g->nama_gelombang }}</option>
                    @endforeach
                </select>
            </div>
            
            <div class="w-full md:w-48">
                <select name="status" class="w-full border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-3 bg-white dark:bg-gray-900 focus:ring-blue-500">
                    <option value="">Semua Status</option>
                    <option value="draf" {{ request('status') == 'draf' ? 'selected' : '' }}>Draf</option>
                    <option value="menunggu" {{ request('status') == 'menunggu' ? 'selected' : '' }}>Menunggu Verifikasi</option>
                    <option value="berkas_lengkap" {{ request('status') == 'berkas_lengkap' ? 'selected' : '' }}>Berkas Lengkap</option>
                    <option value="lulus" {{ request('status') == 'lulus' ? 'selected' : '' }}>Lulus</option>
                    <option value="tidak_lulus" {{ request('status') == 'tidak_lulus' ? 'selected' : '' }}>Tidak Lulus</option>
                </select>
            </div>
            
            <button type="submit" class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Filter
            </button>
            @if(request()->anyFilled(['search', 'gelombang_id', 'status']))
                <a href="{{ route('admin.pendaftar.index') }}" class="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 text-center transition-colors">Reset</a>
            @endif
        </form>
    </div>

    <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
            <thead>
                <tr class="bg-gray-50 dark:bg-gray-900/50 text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider border-b border-gray-200 dark:border-gray-700">
                    <th class="px-6 py-4 font-medium">No. Daftar</th>
                    <th class="px-6 py-4 font-medium">Nama Lengkap</th>
                    <th class="px-6 py-4 font-medium">Gelombang</th>
                    <th class="px-6 py-4 font-medium">Kelengkapan</th>
                    <th class="px-6 py-4 font-medium">Status</th>
                    <th class="px-6 py-4 font-medium text-center">Aksi</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 dark:divide-gray-700 text-sm">
                @forelse($pendaftar as $p)
                    <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td class="px-6 py-4 font-medium text-gray-900 dark:text-gray-200">{{ $p->no_pendaftaran }}</td>
                        <td class="px-6 py-4 text-gray-700 dark:text-gray-300">
                            {{ $p->biodataSiswa->nama_lengkap ?? $p->user->name }}
                            <div class="text-xs text-gray-500 mt-1">{{ $p->user->email }}</div>
                        </td>
                        <td class="px-6 py-4 text-gray-600 dark:text-gray-400">{{ $p->gelombang->nama_gelombang ?? '-' }}</td>
                        <td class="px-6 py-4">
                            <div class="w-full bg-gray-200 rounded-full h-2 mb-1">
                                <div class="bg-blue-600 h-2 rounded-full" style="width: {{ $p->hitungProgress() }}%"></div>
                            </div>
                            <span class="text-xs text-gray-500">{{ $p->hitungProgress() }}%</span>
                        </td>
                        <td class="px-6 py-4">
                            @php
                                $statusColors = [
                                    'draf' => 'bg-gray-100 text-gray-800',
                                    'menunggu' => 'bg-yellow-100 text-yellow-800',
                                    'verifikasi' => 'bg-blue-100 text-blue-800',
                                    'perlu_perbaikan' => 'bg-red-100 text-red-800',
                                    'berkas_lengkap' => 'bg-green-100 text-green-800',
                                    'lulus' => 'bg-emerald-100 text-emerald-800 border border-emerald-200',
                                    'tidak_lulus' => 'bg-rose-100 text-rose-800',
                                ];
                                $color = $statusColors[$p->status] ?? 'bg-gray-100 text-gray-800';
                            @endphp
                            <span class="px-2.5 py-1 text-xs rounded-full font-medium {{ $color }}">
                                {{ $p->statusLabel() }}
                            </span>
                        </td>
                        <td class="px-6 py-4 text-center">
                            <a href="{{ route('admin.pendaftar.show', $p->id) }}" class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors" title="Lihat Detail">
                                <i class="bi bi-eye"></i>
                            </a>
                        </td>
                    </tr>
                @empty
                    <tr>
                        <td colspan="6" class="px-6 py-12 text-center text-gray-500">
                            <i class="bi bi-inbox text-4xl mb-3 block text-gray-300"></i>
                            Tidak ada data pendaftar yang ditemukan.
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
@endsection
