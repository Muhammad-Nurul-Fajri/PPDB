@extends('layouts.admin')

@section('title', 'Tahun Ajaran & Gelombang')

@section('content')
<!-- Bagian Tahun Ajaran -->
<div class="mb-8">
    <div class="flex items-center justify-between mb-6">
        <h2 class="text-xl font-bold text-gray-800 dark:text-gray-200"><i class="bi bi-calendar3 mr-2"></i> Manajemen Tahun Ajaran</h2>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Form Tambah Tahun Ajaran -->
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

        <!-- Daftar Tahun Ajaran -->
        <div class="lg:col-span-2">
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden h-full">
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
</div>

<hr class="my-10 border-gray-200 dark:border-gray-700">

<!-- Bagian Gelombang -->
<div>
    <div class="flex items-center justify-between mb-6">
        <h2 class="text-xl font-bold text-gray-800 dark:text-gray-200"><i class="bi bi-layers mr-2"></i> Manajemen Gelombang</h2>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <!-- Form Tambah Gelombang -->
        <div class="lg:col-span-1 space-y-6">
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-700">
                    <h3 class="text-lg font-bold text-gray-900 dark:text-white">Tambah Gelombang</h3>
                </div>
                <form action="{{ route('admin.gelombang.store') }}" method="POST" class="p-6">
                    @csrf
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Tahun Ajaran <span class="text-red-500">*</span></label>
                            <select name="tahun_ajaran_id" required class="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2.5 focus:ring-blue-500">
                                <option value="">-- Pilih Tahun Ajaran --</option>
                                @foreach($tahunAjaranList as $ta)
                                    <option value="{{ $ta->id }}">{{ $ta->tahun_ajaran }} {{ $ta->is_active ? '(Aktif)' : '' }}</option>
                                @endforeach
                            </select>
                            @error('tahun_ajaran_id') <p class="mt-1 text-sm text-red-500">{{ $message }}</p> @enderror
                        </div>

                        <div>
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nama Gelombang <span class="text-red-500">*</span></label>
                            <input type="text" name="nama_gelombang" required class="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2.5 focus:ring-blue-500" placeholder="Contoh: Gelombang 1">
                            @error('nama_gelombang') <p class="mt-1 text-sm text-red-500">{{ $message }}</p> @enderror
                        </div>
                        
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Tgl Mulai <span class="text-red-500">*</span></label>
                                <input type="date" name="tanggal_mulai" required class="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2.5 focus:ring-blue-500">
                                @error('tanggal_mulai') <p class="mt-1 text-sm text-red-500">{{ $message }}</p> @enderror
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Tgl Selesai <span class="text-red-500">*</span></label>
                                <input type="date" name="tanggal_selesai" required class="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2.5 focus:ring-blue-500">
                                @error('tanggal_selesai') <p class="mt-1 text-sm text-red-500">{{ $message }}</p> @enderror
                            </div>
                        </div>

                        <div>
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Kuota <span class="text-red-500">*</span></label>
                            <input type="number" name="kuota" required min="1" class="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2.5 focus:ring-blue-500" placeholder="Contoh: 100">
                            @error('kuota') <p class="mt-1 text-sm text-red-500">{{ $message }}</p> @enderror
                        </div>

                        <div>
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Status <span class="text-red-500">*</span></label>
                            <select name="status" required class="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2.5 focus:ring-blue-500">
                                <option value="active">Aktif</option>
                                <option value="inactive">Tidak Aktif</option>
                            </select>
                            @error('status') <p class="mt-1 text-sm text-red-500">{{ $message }}</p> @enderror
                        </div>

                        <div class="pt-2">
                            <button type="submit" class="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                                Simpan Gelombang
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <!-- Daftar Gelombang -->
        <div class="lg:col-span-2">
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden h-full">
                <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-700">
                    <h3 class="text-lg font-bold text-gray-900 dark:text-white">Daftar Gelombang</h3>
                </div>
                
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="bg-gray-50 dark:bg-gray-900/50 text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider border-b border-gray-200 dark:border-gray-700">
                                <th class="px-6 py-3 font-medium">Gelombang & TA</th>
                                <th class="px-6 py-3 font-medium">Tanggal</th>
                                <th class="px-6 py-3 font-medium text-center">Kuota & Pendaftar</th>
                                <th class="px-6 py-3 font-medium text-center">Status</th>
                                <th class="px-6 py-3 font-medium text-center">Aksi</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-100 dark:divide-gray-700 text-sm">
                            @forelse($gelombang as $g)
                                <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                    <td class="px-6 py-4">
                                        <div class="font-medium text-gray-900 dark:text-gray-200">{{ $g->nama_gelombang }}</div>
                                        <div class="text-xs text-gray-500">{{ $g->tahunAjaran->tahun_ajaran }}</div>
                                    </td>
                                    <td class="px-6 py-4 text-gray-700 dark:text-gray-300 text-xs">
                                        <div>Mulai: {{ \Carbon\Carbon::parse($g->tanggal_mulai)->format('d/m/Y') }}</div>
                                        <div>Selesai: {{ \Carbon\Carbon::parse($g->tanggal_selesai)->format('d/m/Y') }}</div>
                                    </td>
                                    <td class="px-6 py-4 text-center">
                                        <div class="font-medium text-gray-900 dark:text-white">{{ $g->pendaftaran_count }} / {{ $g->kuota }}</div>
                                        @php $percent = $g->kuota > 0 ? min(100, ($g->pendaftaran_count / $g->kuota) * 100) : 0; @endphp
                                        <div class="w-full bg-gray-200 rounded-full h-1.5 mt-1 mx-auto max-w-[4rem]">
                                            <div class="bg-blue-600 h-1.5 rounded-full" style="width: {{ $percent }}%"></div>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 text-center">
                                        @if($g->status == 'active')
                                            <span class="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800 border border-green-200">Aktif</span>
                                        @else
                                            <span class="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800">Tidak Aktif</span>
                                        @endif
                                    </td>
                                    <td class="px-6 py-4 text-center flex justify-center gap-2">
                                        <button x-data @click="$dispatch('open-modal', 'edit-{{ $g->id }}')" class="bg-blue-50 text-blue-600 hover:bg-blue-100 px-2 py-1 rounded text-xs border border-blue-200 transition-colors" title="Edit">
                                            <i class="bi bi-pencil"></i>
                                        </button>
                                        
                                        <form action="{{ route('admin.gelombang.delete', $g->id) }}" method="POST" onsubmit="return confirm('Yakin ingin menghapus gelombang ini?')">
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
                                    <td colspan="5" class="px-6 py-8 text-center text-gray-500">
                                        Belum ada data gelombang.
                                    </td>
                                </tr>
                            @endforelse
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Edit Modals Gelombang -->
@foreach($gelombang as $g)
    <div x-data="{ show: false }" 
         x-show="show" 
         @open-modal.window="if ($event.detail === 'edit-{{ $g->id }}') show = true"
         @keydown.escape.window="show = false"
         class="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 sm:px-0"
         style="display: none;">
        
        <div x-show="show" class="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" @click="show = false"></div>

        <div x-show="show" class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full relative z-10">
            <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-gray-50 dark:bg-gray-900">
                <h3 class="text-lg font-bold text-gray-900 dark:text-white">Edit Gelombang</h3>
                <button @click="show = false" class="text-gray-400 hover:text-gray-500 focus:outline-none">
                    <i class="bi bi-x-lg text-xl"></i>
                </button>
            </div>
            
            <form action="{{ route('admin.gelombang.update', $g->id) }}" method="POST">
                @csrf
                @method('PUT')
                <div class="p-6 space-y-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Tahun Ajaran <span class="text-red-500">*</span></label>
                        <select name="tahun_ajaran_id" required class="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2.5 focus:ring-blue-500">
                            <option value="">-- Pilih Tahun Ajaran --</option>
                            @foreach($tahunAjaranList as $ta)
                                <option value="{{ $ta->id }}" {{ $g->tahun_ajaran_id == $ta->id ? 'selected' : '' }}>{{ $ta->tahun_ajaran }} {{ $ta->is_active ? '(Aktif)' : '' }}</option>
                            @endforeach
                        </select>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nama Gelombang <span class="text-red-500">*</span></label>
                        <input type="text" name="nama_gelombang" value="{{ $g->nama_gelombang }}" required class="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2.5 focus:ring-blue-500">
                    </div>
                    
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Tgl Mulai <span class="text-red-500">*</span></label>
                            <input type="date" name="tanggal_mulai" value="{{ $g->tanggal_mulai }}" required class="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2.5 focus:ring-blue-500">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Tgl Selesai <span class="text-red-500">*</span></label>
                            <input type="date" name="tanggal_selesai" value="{{ $g->tanggal_selesai }}" required class="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2.5 focus:ring-blue-500">
                        </div>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Kuota <span class="text-red-500">*</span></label>
                        <input type="number" name="kuota" value="{{ $g->kuota }}" required min="1" class="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2.5 focus:ring-blue-500">
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Status <span class="text-red-500">*</span></label>
                        <select name="status" required class="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2.5 focus:ring-blue-500">
                            <option value="active" {{ $g->status == 'active' ? 'selected' : '' }}>Aktif</option>
                            <option value="inactive" {{ $g->status == 'inactive' ? 'selected' : '' }}>Tidak Aktif</option>
                        </select>
                    </div>
                </div>
                
                <div class="px-6 py-4 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 flex justify-end gap-3">
                    <button type="button" @click="show = false" class="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors font-medium">
                        Batal
                    </button>
                    <button type="submit" class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                        Simpan Perubahan
                    </button>
                </div>
            </form>
        </div>
    </div>
@endforeach

@endsection
