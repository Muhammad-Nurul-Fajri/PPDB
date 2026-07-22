@extends('layouts.siswa')

@section('title', 'Biodata Calon Siswa')
@section('subtitle', 'Lengkapi biodata diri Anda dengan benar dan sesuai dokumen resmi.')

@section('content')
<div class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
    
    <div class="px-6 py-5 border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            <i class="bi bi-person-vcard text-blue-600"></i> Data Pribadi
        </h3>
    </div>

    <form action="{{ route('siswa.biodata.store') }}" method="POST" class="p-6">
        @csrf
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div class="col-span-1 md:col-span-2">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nomor Pendaftaran</label>
                <input type="text" value="{{ $pendaftaran->no_pendaftaran ?? '-' }}" readonly class="w-full bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2.5 text-gray-500 cursor-not-allowed">
            </div>

            <div>
                <label for="nisn" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">NISN</label>
                <input type="text" name="nisn" id="nisn" value="{{ old('nisn', $biodata->nisn ?? '') }}" class="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                @error('nisn') <p class="mt-1 text-sm text-red-500">{{ $message }}</p> @enderror
            </div>

            <div>
                <label for="nik" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">NIK</label>
                <input type="text" name="nik" id="nik" value="{{ old('nik', $biodata->nik ?? '') }}" class="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                @error('nik') <p class="mt-1 text-sm text-red-500">{{ $message }}</p> @enderror
            </div>

            <div>
                <label for="nama_lengkap" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nama Lengkap</label>
                <input type="text" name="nama_lengkap" id="nama_lengkap" value="{{ old('nama_lengkap', $biodata->nama_lengkap ?? Auth::user()->name) }}" class="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                @error('nama_lengkap') <p class="mt-1 text-sm text-red-500">{{ $message }}</p> @enderror
            </div>

            <div>
                <label for="jenis_kelamin" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Jenis Kelamin</label>
                <select name="jenis_kelamin" id="jenis_kelamin" class="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                    <option value="">-- Pilih --</option>
                    <option value="L" {{ old('jenis_kelamin', $biodata->jenis_kelamin ?? '') == 'L' ? 'selected' : '' }}>Laki-Laki</option>
                    <option value="P" {{ old('jenis_kelamin', $biodata->jenis_kelamin ?? '') == 'P' ? 'selected' : '' }}>Perempuan</option>
                </select>
                @error('jenis_kelamin') <p class="mt-1 text-sm text-red-500">{{ $message }}</p> @enderror
            </div>

            <div>
                <label for="tempat_lahir" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Tempat Lahir</label>
                <input type="text" name="tempat_lahir" id="tempat_lahir" value="{{ old('tempat_lahir', $biodata->tempat_lahir ?? '') }}" class="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                @error('tempat_lahir') <p class="mt-1 text-sm text-red-500">{{ $message }}</p> @enderror
            </div>

            <div>
                <label for="tanggal_lahir" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Tanggal Lahir</label>
                <input type="date" name="tanggal_lahir" id="tanggal_lahir" value="{{ old('tanggal_lahir', optional($biodata->tanggal_lahir ?? null)->format('Y-m-d') ?? '') }}" class="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                @error('tanggal_lahir') <p class="mt-1 text-sm text-red-500">{{ $message }}</p> @enderror
            </div>

            <div>
                <label for="agama" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Agama</label>
                <select name="agama" id="agama" class="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                    <option value="">-- Pilih --</option>
                    @foreach(['Islam', 'Kristen', 'Katolik', 'Hindu', 'Buddha', 'Konghucu'] as $agama)
                        <option value="{{ $agama }}" {{ old('agama', $biodata->agama ?? '') == $agama ? 'selected' : '' }}>{{ $agama }}</option>
                    @endforeach
                </select>
                @error('agama') <p class="mt-1 text-sm text-red-500">{{ $message }}</p> @enderror
            </div>

            <div>
                <label for="no_hp" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">No. Handphone</label>
                <input type="text" name="no_hp" id="no_hp" value="{{ old('no_hp', $biodata->no_hp ?? Auth::user()->no_hp) }}" class="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                @error('no_hp') <p class="mt-1 text-sm text-red-500">{{ $message }}</p> @enderror
            </div>

            <div class="col-span-1 md:col-span-2">
                <label for="alamat" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Alamat Lengkap</label>
                <textarea name="alamat" id="alamat" rows="3" class="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">{{ old('alamat', $biodata->alamat ?? '') }}</textarea>
                @error('alamat') <p class="mt-1 text-sm text-red-500">{{ $message }}</p> @enderror
            </div>

            <div>
                <label for="desa" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Desa/Kelurahan</label>
                <input type="text" name="desa" id="desa" value="{{ old('desa', $biodata->desa ?? '') }}" class="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                @error('desa') <p class="mt-1 text-sm text-red-500">{{ $message }}</p> @enderror
            </div>

            <div>
                <label for="kecamatan" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Kecamatan</label>
                <input type="text" name="kecamatan" id="kecamatan" value="{{ old('kecamatan', $biodata->kecamatan ?? '') }}" class="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                @error('kecamatan') <p class="mt-1 text-sm text-red-500">{{ $message }}</p> @enderror
            </div>

            <div>
                <label for="kota_kabupaten" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Kabupaten/Kota</label>
                <input type="text" name="kota_kabupaten" id="kota_kabupaten" value="{{ old('kota_kabupaten', $biodata->kota_kabupaten ?? '') }}" class="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                @error('kota_kabupaten') <p class="mt-1 text-sm text-red-500">{{ $message }}</p> @enderror
            </div>

            <div>
                <label for="provinsi" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Provinsi</label>
                <input type="text" name="provinsi" id="provinsi" value="{{ old('provinsi', $biodata->provinsi ?? '') }}" class="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                @error('provinsi') <p class="mt-1 text-sm text-red-500">{{ $message }}</p> @enderror
            </div>
            
            <div>
                <label for="kode_pos" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Kode Pos</label>
                <input type="text" name="kode_pos" id="kode_pos" value="{{ old('kode_pos', $biodata->kode_pos ?? '') }}" class="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                @error('kode_pos') <p class="mt-1 text-sm text-red-500">{{ $message }}</p> @enderror
            </div>

        </div>

        <div class="mt-8 flex justify-end">
            <button type="submit" class="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
                <i class="bi bi-save"></i> Simpan Biodata
            </button>
        </div>

    </form>
</div>
@endsection