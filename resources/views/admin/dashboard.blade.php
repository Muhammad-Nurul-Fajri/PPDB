@extends('layouts.admin')

@section('title', 'Dashboard Admin')

@section('content')
<div class="space-y-6">
    
    <!-- Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <div class="flex items-center justify-between mb-4">
                <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider">Total Pendaftar</h3>
                <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <i class="bi bi-people-fill text-xl"></i>
                </div>
            </div>
            <p class="text-3xl font-bold text-gray-900 dark:text-white">{{ $totalPendaftar }}</p>
        </div>

        <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <div class="flex items-center justify-between mb-4">
                <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider">Perlu Verifikasi</h3>
                <div class="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                    <i class="bi bi-hourglass-split text-xl"></i>
                </div>
            </div>
            <p class="text-3xl font-bold text-gray-900 dark:text-white">{{ $menungguVerifikasi }}</p>
        </div>

        <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <div class="flex items-center justify-between mb-4">
                <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider">Berkas Lengkap</h3>
                <div class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <i class="bi bi-folder-check text-xl"></i>
                </div>
            </div>
            <p class="text-3xl font-bold text-gray-900 dark:text-white">{{ $berkasLengkap }}</p>
        </div>

        <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <div class="flex items-center justify-between mb-4">
                <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider">Lulus Seleksi</h3>
                <div class="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                    <i class="bi bi-award-fill text-xl"></i>
                </div>
            </div>
            <p class="text-3xl font-bold text-gray-900 dark:text-white">{{ $lulus }}</p>
        </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <!-- Pendaftar Terbaru -->
        <div class="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <div class="px-6 py-5 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Pendaftar Terbaru</h3>
                <a href="{{ route('admin.pendaftar.index') }}" class="text-sm text-blue-600 hover:underline">Lihat Semua</a>
            </div>
            <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-gray-50 dark:bg-gray-900 text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider">
                            <th class="px-6 py-3 font-medium">No. Daftar</th>
                            <th class="px-6 py-3 font-medium">Nama Siswa</th>
                            <th class="px-6 py-3 font-medium">Gelombang</th>
                            <th class="px-6 py-3 font-medium">Status</th>
                            <th class="px-6 py-3 font-medium">Aksi</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100 dark:divide-gray-700 text-sm">
                        @forelse($recentPendaftar as $p)
                            <tr class="hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
                                <td class="px-6 py-4 font-medium text-gray-900 dark:text-gray-200">{{ $p->no_pendaftaran }}</td>
                                <td class="px-6 py-4 text-gray-700 dark:text-gray-300">{{ $p->biodataSiswa->nama_lengkap ?? $p->user->name }}</td>
                                <td class="px-6 py-4 text-gray-500">{{ $p->gelombang->nama_gelombang ?? '-' }}</td>
                                <td class="px-6 py-4">
                                    <span class="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800">
                                        {{ $p->statusLabel() }}
                                    </span>
                                </td>
                                <td class="px-6 py-4">
                                    <a href="{{ route('admin.pendaftar.show', $p->id) }}" class="text-blue-600 hover:text-blue-800 p-1">
                                        <i class="bi bi-eye"></i> Detail
                                    </a>
                                </td>
                            </tr>
                        @empty
                            <tr>
                                <td colspan="5" class="px-6 py-8 text-center text-gray-500">Belum ada data pendaftar.</td>
                            </tr>
                        @endforelse
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Info Gelombang Aktif -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <div class="px-6 py-5 border-b border-gray-100 dark:border-gray-700">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Status Gelombang</h3>
            </div>
            <div class="p-6">
                <div class="space-y-6">
                    @forelse($gelombangStats as $g)
                        <div>
                            <div class="flex justify-between items-center mb-2">
                                <span class="font-medium text-gray-900 dark:text-white">{{ $g->nama_gelombang }}</span>
                                <span class="text-xs {{ $g->status == 'active' ? 'text-green-600 bg-green-100' : 'text-gray-500 bg-gray-100' }} px-2 py-1 rounded">
                                    {{ $g->status == 'active' ? 'Aktif' : 'Tutup' }}
                                </span>
                            </div>
                            <div class="flex justify-between text-sm text-gray-500 mb-1">
                                <span>Pendaftar: {{ $g->pendaftaran_count }}</span>
                                <span>Kuota: {{ $g->kuota }}</span>
                            </div>
                            @php $percent = $g->kuota > 0 ? min(100, ($g->pendaftaran_count / $g->kuota) * 100) : 0; @endphp
                            <div class="w-full bg-gray-200 rounded-full h-2">
                                <div class="bg-blue-600 h-2 rounded-full" style="width: {{ $percent }}%"></div>
                            </div>
                        </div>
                    @empty
                        <p class="text-center text-gray-500 py-4">Belum ada data gelombang pada tahun ajaran aktif.</p>
                    @endforelse
                </div>
            </div>
        </div>
        
    </div>
</div>
@endsection