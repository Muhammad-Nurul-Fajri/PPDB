@extends('layouts.siswa')

@section('title', 'Asal Sekolah')
@section('subtitle', 'Informasi sekolah asal calon siswa.')

@section('content')
<div class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden max-w-3xl">
    
    <form action="{{ route('siswa.asal-sekolah.store') }}" method="POST" class="p-6">
        @csrf
        
        <div class="grid grid-cols-1 gap-6">
            <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nama Sekolah Asal</label>
                <input type="text" name="nama_sekolah" value="{{ old('nama_sekolah', $asalSekolah->nama_sekolah ?? '') }}" class="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" placeholder="Contoh: SMPN 1 Jakarta">
                @error('nama_sekolah') <p class="mt-1 text-sm text-red-500">{{ $message }}</p> @enderror
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">NPSN Sekolah</label>
                <input type="text" name="npsn" value="{{ old('npsn', $asalSekolah->npsn ?? '') }}" class="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                @error('npsn') <p class="mt-1 text-sm text-red-500">{{ $message }}</p> @enderror
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Tahun Lulus</label>
                <input type="number" name="tahun_lulus" value="{{ old('tahun_lulus', $asalSekolah->tahun_lulus ?? date('Y')) }}" class="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                @error('tahun_lulus') <p class="mt-1 text-sm text-red-500">{{ $message }}</p> @enderror
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Rata-rata Nilai Rapor</label>
                <input type="number" step="0.01" name="rata_rata_nilai" value="{{ old('rata_rata_nilai', $asalSekolah->rata_rata_nilai ?? '') }}" class="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" placeholder="Contoh: 85.50">
                @error('rata_rata_nilai') <p class="mt-1 text-sm text-red-500">{{ $message }}</p> @enderror
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Alamat Sekolah</label>
                <textarea name="alamat" rows="3" class="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">{{ old('alamat', $asalSekolah->alamat ?? '') }}</textarea>
                @error('alamat') <p class="mt-1 text-sm text-red-500">{{ $message }}</p> @enderror
            </div>
        </div>

        <div class="mt-8 flex justify-end">
            <button type="submit" class="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
                <i class="bi bi-save"></i> Simpan Asal Sekolah
            </button>
        </div>

    </form>
</div>
@endsection
