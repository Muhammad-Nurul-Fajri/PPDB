@extends('layouts.admin')

@section('title', 'Tahun Ajaran')

@section('content')
<div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
    
    <div class="lg:col-span-1 space-y-6">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
            <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-700">
                <h3 class="text-lg font-bold text-gray-900 dark:text-white">Tambah Tahun Ajaran</h3>
            </div>
            <form action="{{ route('admin.tahun-ajaran.store') }}" method="POST" class="p-6">
                @csrf
                <div class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Tahun Ajaran</label>
                        <input type="text" name="tahun_ajaran" required class="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" placeholder="Contoh: 2026/2027">
                        @error('tahun_ajaran') <p class="mt-1 text-sm text-red-500">{{ $message }}</p> @enderror
                    </div>
                    <div>
                        <label class="flex items-center">
                            <input type="checkbox" name="is_active" value="1" class="text-blue-600 focus:ring-blue-500 h-4 w-4 border-gray-300 rounded">
                            <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">Set sebagai Aktif</span>
                        </label>
                    </div>
                    <div class="pt-2">
                        <button type="submit" class="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                            Simpan Data
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>

    <div class="lg:col-span-2">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
            <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-700">
                <h3 class="text-lg font-bold text-gray-900 dark:text-white">Daftar Tahun Ajaran</h3>
            </div>
            
            <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-gray-50 dark:bg-gray-900/50 text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider border-b border-gray-200 dark:border-gray-700">
                            <th class="px-6 py-3 font-medium">Tahun Ajaran</th>
                            <th class="px-6 py-3 font-medium text-center">Jml Gelombang</th>
                            <th class="px-6 py-3 font-medium text-center">Status</th>
                            <th class="px-6 py-3 font-medium text-center">Aksi</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100 dark:divide-gray-700 text-sm">
                        @forelse($tahunAjaran as $ta)
                            <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                <td class="px-6 py-4 font-medium text-gray-900 dark:text-gray-200">
                                    {{ $ta->tahun_ajaran }}
                                </td>
                                <td class="px-6 py-4 text-center text-gray-700 dark:text-gray-300">
                                    {{ $ta->gelombang_count }}
                                </td>
                                <td class="px-6 py-4 text-center">
                                    @if($ta->is_active)
                                        <span class="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800 border border-green-200">Aktif</span>
                                    @else
                                        <span class="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800">Tidak Aktif</span>
                                    @endif
                                </td>
                                <td class="px-6 py-4 text-center flex justify-center gap-2">
                                    <!-- Set Active Form -->
                                    @if(!$ta->is_active)
                                        <form action="{{ route('admin.tahun-ajaran.update', $ta->id) }}" method="POST">
                                            @csrf
                                            @method('PUT')
                                            <input type="hidden" name="tahun_ajaran" value="{{ $ta->tahun_ajaran }}">
                                            <input type="hidden" name="is_active" value="1">
                                            <button type="submit" class="bg-green-50 text-green-600 hover:bg-green-100 px-2 py-1 rounded text-xs border border-green-200 transition-colors" title="Set Aktif">
                                                <i class="bi bi-check2-circle"></i> Set Aktif
                                            </button>
                                        </form>
                                    @endif
                                    
                                    <!-- Delete Form -->
                                    <form action="{{ route('admin.tahun-ajaran.delete', $ta->id) }}" method="POST" onsubmit="return confirm('Yakin ingin menghapus tahun ajaran ini? Semua data terkait (Gelombang, Pendaftaran) akan ikut terhapus!')">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit" class="bg-red-50 text-red-600 hover:bg-red-100 px-2 py-1 rounded text-xs border border-red-200 transition-colors" title="Hapus">
                                            <i class="bi bi-trash"></i>
                                        </button>
                                    </form>
                                </td>
                            </tr>
                        @empty
                            <tr>
                                <td colspan="4" class="px-6 py-8 text-center text-gray-500">
                                    Belum ada data tahun ajaran.
                                </td>
                            </tr>
                        @endforelse
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
@endsection
