@extends('layouts.siswa')

@section('title', 'Profil Akun')
@section('subtitle', 'Kelola informasi akun Anda.')

@section('content')
<div class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden max-w-2xl">
    
    <div class="p-6 border-b border-gray-100 dark:border-gray-700 flex items-center gap-4">
        <div class="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold">
            {{ substr(Auth::user()->name, 0, 1) }}
        </div>
        <div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ Auth::user()->name }}</h3>
            <p class="text-gray-500">{{ Auth::user()->email }}</p>
        </div>
    </div>

    <form action="{{ route('siswa.profil.update') }}" method="POST" class="p-6">
        @csrf
        @method('PUT')
        
        <div class="space-y-6">
            <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nama Akun</label>
                <input type="text" name="name" value="{{ old('name', Auth::user()->name) }}" class="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                @error('name') <p class="mt-1 text-sm text-red-500">{{ $message }}</p> @enderror
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                <input type="email" name="email" value="{{ old('email', Auth::user()->email) }}" class="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                @error('email') <p class="mt-1 text-sm text-red-500">{{ $message }}</p> @enderror
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">No. Handphone (Akun)</label>
                <input type="text" name="no_hp" value="{{ old('no_hp', Auth::user()->no_hp) }}" class="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                @error('no_hp') <p class="mt-1 text-sm text-red-500">{{ $message }}</p> @enderror
            </div>
            
            <p class="text-sm text-gray-500 mt-2"><i class="bi bi-info-circle"></i> Catatan: Perubahan nama dan no. HP di sini tidak akan otomatis mengubah isian di menu Biodata.</p>
        </div>

        <div class="mt-8">
            <button type="submit" class="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Simpan Perubahan
            </button>
        </div>
    </form>
</div>
@endsection
