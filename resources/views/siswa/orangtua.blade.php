@extends('layouts.siswa')

@section('title', 'Data Orang Tua')
@section('subtitle', 'Lengkapi data ayah dan ibu kandung/wali.')

@section('content')
<div class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
    
    <form action="{{ route('siswa.orangtua.store') }}" method="POST" class="p-6">
        @csrf
        
        <!-- Data Ayah -->
        <div class="mb-8">
            <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2 border-b border-gray-100 dark:border-gray-700 pb-2">
                <i class="bi bi-person-workspace text-blue-600"></i> Data Ayah
            </h4>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nama Ayah</label>
                    <input type="text" name="nama_ayah" value="{{ old('nama_ayah', $dataOrangTua->nama_ayah ?? '') }}" class="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                    @error('nama_ayah') <p class="mt-1 text-sm text-red-500">{{ $message }}</p> @enderror
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">NIK Ayah</label>
                    <input type="text" name="nik_ayah" value="{{ old('nik_ayah', $dataOrangTua->nik_ayah ?? '') }}" class="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                    @error('nik_ayah') <p class="mt-1 text-sm text-red-500">{{ $message }}</p> @enderror
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Pekerjaan</label>
                    <input type="text" name="pekerjaan_ayah" value="{{ old('pekerjaan_ayah', $dataOrangTua->pekerjaan_ayah ?? '') }}" class="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                    @error('pekerjaan_ayah') <p class="mt-1 text-sm text-red-500">{{ $message }}</p> @enderror
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Penghasilan (Rp)</label>
                    <input type="number" name="penghasilan_ayah" value="{{ old('penghasilan_ayah', $dataOrangTua->penghasilan_ayah ?? '') }}" class="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                    @error('penghasilan_ayah') <p class="mt-1 text-sm text-red-500">{{ $message }}</p> @enderror
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">No. HP Ayah</label>
                    <input type="text" name="no_hp_ayah" value="{{ old('no_hp_ayah', $dataOrangTua->no_hp_ayah ?? '') }}" class="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                    @error('no_hp_ayah') <p class="mt-1 text-sm text-red-500">{{ $message }}</p> @enderror
                </div>
            </div>
        </div>

        <!-- Data Ibu -->
        <div class="mb-8">
            <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2 border-b border-gray-100 dark:border-gray-700 pb-2">
                <i class="bi bi-person-heart text-pink-600"></i> Data Ibu
            </h4>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nama Ibu</label>
                    <input type="text" name="nama_ibu" value="{{ old('nama_ibu', $dataOrangTua->nama_ibu ?? '') }}" class="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                    @error('nama_ibu') <p class="mt-1 text-sm text-red-500">{{ $message }}</p> @enderror
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">NIK Ibu</label>
                    <input type="text" name="nik_ibu" value="{{ old('nik_ibu', $dataOrangTua->nik_ibu ?? '') }}" class="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                    @error('nik_ibu') <p class="mt-1 text-sm text-red-500">{{ $message }}</p> @enderror
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Pekerjaan</label>
                    <input type="text" name="pekerjaan_ibu" value="{{ old('pekerjaan_ibu', $dataOrangTua->pekerjaan_ibu ?? '') }}" class="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                    @error('pekerjaan_ibu') <p class="mt-1 text-sm text-red-500">{{ $message }}</p> @enderror
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Penghasilan (Rp)</label>
                    <input type="number" name="penghasilan_ibu" value="{{ old('penghasilan_ibu', $dataOrangTua->penghasilan_ibu ?? '') }}" class="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                    @error('penghasilan_ibu') <p class="mt-1 text-sm text-red-500">{{ $message }}</p> @enderror
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">No. HP Ibu</label>
                    <input type="text" name="no_hp_ibu" value="{{ old('no_hp_ibu', $dataOrangTua->no_hp_ibu ?? '') }}" class="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                    @error('no_hp_ibu') <p class="mt-1 text-sm text-red-500">{{ $message }}</p> @enderror
                </div>
            </div>
        </div>

        <div class="mb-6">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Alamat Orang Tua</label>
            <textarea name="alamat" rows="3" class="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">{{ old('alamat', $dataOrangTua->alamat ?? '') }}</textarea>
            @error('alamat') <p class="mt-1 text-sm text-red-500">{{ $message }}</p> @enderror
        </div>

        <div class="flex justify-end">
            <button type="submit" class="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
                <i class="bi bi-save"></i> Simpan Data Orang Tua
            </button>
        </div>

    </form>
</div>
@endsection
