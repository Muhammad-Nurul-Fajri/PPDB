@extends('layouts.siswa')

@section('title', 'Upload Berkas')
@section('subtitle', 'Unggah dokumen persyaratan yang dibutuhkan.')

@section('content')
<div class="space-y-6">
    
    <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden p-6">
        <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Informasi Berkas</h4>
        <ul class="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 space-y-2">
            <li>Format file yang diizinkan: PDF, JPG, JPEG, PNG.</li>
            <li>Ukuran maksimal setiap file adalah 2 MB.</li>
            <li>Pastikan dokumen yang diunggah dapat dibaca dengan jelas.</li>
            <li>Jika status berkas "Perlu Perbaikan", silakan hapus berkas lama dan unggah ulang berkas yang benar.</li>
        </ul>
    </div>

    <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        <div class="px-6 py-5 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Daftar Berkas</h3>
        </div>
        
        <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
                <thead>
                    <tr class="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 text-sm">
                        <th class="px-6 py-3 font-medium">Jenis Berkas</th>
                        <th class="px-6 py-3 font-medium">Status</th>
                        <th class="px-6 py-3 font-medium">Aksi</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-100 dark:divide-gray-700">
                    @foreach($jenisBerkasWajib as $jenis)
                        @php
                            $uploaded = $berkas->firstWhere('jenis_berkas', $jenis);
                            $label = ucwords(str_replace('_', ' ', $jenis));
                            if ($jenis == 'ktp_kk') $label = 'KTP / KK';
                        @endphp
                        <tr>
                            <td class="px-6 py-4">
                                <span class="font-medium text-gray-900 dark:text-white">{{ $label }}</span>
                                <span class="text-xs text-red-500 ml-1">*Wajib</span>
                                @if($uploaded)
                                    <div class="mt-1 text-xs text-gray-500 flex items-center gap-1">
                                        <i class="bi bi-file-earmark-check text-green-500"></i>
                                        <a href="{{ Storage::url($uploaded->path_file) }}" target="_blank" class="text-blue-600 hover:underline">Lihat File</a>
                                    </div>
                                    @if($uploaded->verifikasi && $uploaded->verifikasi->catatan)
                                        <div class="mt-2 text-xs bg-red-50 dark:bg-red-900/30 text-red-600 p-2 rounded">
                                            <strong>Catatan Verifikator:</strong> {{ $uploaded->verifikasi->catatan }}
                                        </div>
                                    @endif
                                @endif
                            </td>
                            <td class="px-6 py-4">
                                @if($uploaded)
                                    @php
                                        $badgeClass = match($uploaded->status) {
                                            'menunggu' => 'bg-yellow-100 text-yellow-800',
                                            'diterima' => 'bg-green-100 text-green-800',
                                            'perlu_perbaikan' => 'bg-red-100 text-red-800',
                                            default => 'bg-gray-100 text-gray-800'
                                        };
                                        $statusText = match($uploaded->status) {
                                            'menunggu' => 'Menunggu Verifikasi',
                                            'diterima' => 'Diterima',
                                            'perlu_perbaikan' => 'Perlu Perbaikan',
                                            default => $uploaded->status
                                        };
                                    @endphp
                                    <span class="px-2.5 py-1 rounded-full text-xs font-medium {{ $badgeClass }}">
                                        {{ $statusText }}
                                    </span>
                                @else
                                    <span class="px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                                        Belum Diunggah
                                    </span>
                                @endif
                            </td>
                            <td class="px-6 py-4">
                                @if($pendaftaran && !in_array($pendaftaran->status, ['berkas_lengkap', 'lulus', 'tidak_lulus']))
                                    @if(!$uploaded || $uploaded->status == 'perlu_perbaikan' || $uploaded->status == 'menunggu')
                                        <form action="{{ route('siswa.upload-berkas.store') }}" method="POST" enctype="multipart/form-data" class="flex items-center gap-2">
                                            @csrf
                                            <input type="hidden" name="jenis_berkas" value="{{ $jenis }}">
                                            
                                            <label class="cursor-pointer bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 px-3 py-1.5 rounded-lg text-sm transition-colors flex items-center gap-2">
                                                <i class="bi bi-cloud-upload"></i> Pilih File
                                                <input type="file" name="file" class="hidden" accept=".pdf,.jpg,.jpeg,.png" onchange="this.form.submit()">
                                            </label>
                                        </form>
                                    @endif
                                    
                                    @if($uploaded && ($uploaded->status == 'menunggu' || $uploaded->status == 'perlu_perbaikan'))
                                        <form action="{{ route('siswa.upload-berkas.delete', $uploaded->id) }}" method="POST" class="mt-2">
                                            @csrf
                                            @method('DELETE')
                                            <button type="submit" class="text-xs text-red-600 hover:text-red-800 flex items-center gap-1" onclick="return confirm('Hapus berkas ini?')">
                                                <i class="bi bi-trash"></i> Hapus
                                                </button>
                                        </form>
                                    @endif
                                @endif
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
</div>
@endsection
