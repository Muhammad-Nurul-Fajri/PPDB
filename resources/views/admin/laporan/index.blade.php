@extends('layouts.admin')

@section('title', 'Laporan Pendaftaran')

@section('content')
<div class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden mb-6">
    <div class="p-6">
        <form action="{{ route('admin.laporan.index') }}" method="GET" class="flex flex-col md:flex-row gap-4 items-end">
            <div class="flex-1 w-full">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Filter Gelombang</label>
                <select name="gelombang_id" class="w-full border border-gray-300 dark:border-gray-600 rounded-lg py-2.5 px-3 bg-white dark:bg-gray-900 focus:ring-blue-500">
                    <option value="">Semua Gelombang</option>
                    @foreach($gelombangList as $g)
                        <option value="{{ $g->id }}" {{ request('gelombang_id') == $g->id ? 'selected' : '' }}>{{ $g->nama_gelombang }} ({{ $g->tahunAjaran->tahun_ajaran }})</option>
                    @endforeach
                </select>
            </div>
            
            <div class="flex-1 w-full">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Status Seleksi</label>
                <select name="status" class="w-full border border-gray-300 dark:border-gray-600 rounded-lg py-2.5 px-3 bg-white dark:bg-gray-900 focus:ring-blue-500">
                    <option value="">Semua Status</option>
                    <option value="lulus" {{ request('status') == 'lulus' ? 'selected' : '' }}>Lulus</option>
                    <option value="tidak_lulus" {{ request('status') == 'tidak_lulus' ? 'selected' : '' }}>Tidak Lulus</option>
                </select>
            </div>
            
            <div class="flex gap-2">
                <button type="submit" class="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                    <i class="bi bi-filter"></i> Terapkan
                </button>
                @if(request()->anyFilled(['gelombang_id', 'status']))
                    <a href="{{ route('admin.laporan.index') }}" class="bg-gray-200 text-gray-700 px-4 py-2.5 rounded-lg hover:bg-gray-300 transition-colors">Reset</a>
                @endif
            </div>
        </form>
    </div>
</div>

<div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
    <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
        <p class="text-sm text-gray-500 uppercase tracking-wider mb-1">Total Pendaftar</p>
        <h4 class="text-3xl font-bold text-gray-900 dark:text-white">{{ $stats['total'] }}</h4>
    </div>
    <div class="bg-green-50 border-green-200 p-6 rounded-2xl shadow-sm border">
        <p class="text-sm text-green-700 uppercase tracking-wider mb-1">Lulus</p>
        <h4 class="text-3xl font-bold text-green-800">{{ $stats['lulus'] }}</h4>
    </div>
    <div class="bg-red-50 border-red-200 p-6 rounded-2xl shadow-sm border">
        <p class="text-sm text-red-700 uppercase tracking-wider mb-1">Tidak Lulus</p>
        <h4 class="text-3xl font-bold text-red-800">{{ $stats['tidak_lulus'] }}</h4>
    </div>
    <div class="bg-yellow-50 border-yellow-200 p-6 rounded-2xl shadow-sm border">
        <p class="text-sm text-yellow-700 uppercase tracking-wider mb-1">Menunggu</p>
        <h4 class="text-3xl font-bold text-yellow-800">{{ $stats['menunggu'] }}</h4>
    </div>
</div>

<div class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
    <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-gray-50 dark:bg-gray-900/50">
        <h3 class="text-lg font-bold text-gray-900 dark:text-white">Data Laporan</h3>
        <button onclick="window.print()" class="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-black transition-colors text-sm flex items-center gap-2">
            <i class="bi bi-printer"></i> Cetak Laporan
        </button>
    </div>
    
    <div class="overflow-x-auto print-area">
        <table class="w-full text-left border-collapse">
            <thead>
                <tr class="bg-white dark:bg-gray-900 border-b-2 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 text-sm">
                    <th class="px-6 py-3 font-bold">No. Daftar</th>
                    <th class="px-6 py-3 font-bold">Nama Lengkap</th>
                    <th class="px-6 py-3 font-bold">Asal Sekolah</th>
                    <th class="px-6 py-3 font-bold">Gelombang</th>
                    <th class="px-6 py-3 font-bold text-center">Status</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 dark:divide-gray-700 text-sm">
                @forelse($pendaftar as $p)
                    <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                        <td class="px-6 py-3">{{ $p->no_pendaftaran }}</td>
                        <td class="px-6 py-3 font-medium">{{ $p->biodataSiswa->nama_lengkap ?? $p->user->name }}</td>
                        <td class="px-6 py-3">{{ $p->asalSekolah->nama_sekolah ?? '-' }}</td>
                        <td class="px-6 py-3">{{ $p->gelombang->nama_gelombang ?? '-' }}</td>
                        <td class="px-6 py-3 text-center font-bold {{ $p->status == 'lulus' ? 'text-green-600' : ($p->status == 'tidak_lulus' ? 'text-red-600' : 'text-yellow-600') }}">
                            {{ strtoupper(str_replace('_', ' ', $p->status)) }}
                        </td>
                    </tr>
                @empty
                    <tr>
                        <td colspan="5" class="px-6 py-12 text-center text-gray-500">
                            Tidak ada data untuk laporan ini.
                        </td>
                    </tr>
                @endforelse
            </tbody>
        </table>
    </div>
</div>

<style>
    @media print {
        body * {
            visibility: hidden;
        }
        .print-area, .print-area * {
            visibility: visible;
        }
        .print-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
        }
    }
</style>
@endsection
