@extends('layouts.siswa')

@section('title', 'Bukti Pendaftaran')
@section('subtitle', 'Unduh bukti pendaftaran sebagai tanda bukti yang sah.')

@section('content')
<div class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden max-w-2xl mx-auto text-center p-8">
    
    <div class="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <i class="bi bi-printer text-4xl text-blue-600"></i>
    </div>

    <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Cetak Bukti Pendaftaran</h2>
    
    @if(!$pendaftaran || in_array($pendaftaran->status, ['draf', 'menunggu']))
        <p class="text-gray-500 mb-8">
            Bukti pendaftaran baru bisa diunduh setelah berkas Anda diverifikasi dan dinyatakan lengkap oleh panitia. Saat ini status pendaftaran Anda adalah 
            <span class="font-bold {{ $pendaftaran && $pendaftaran->status == 'draf' ? 'text-yellow-600' : 'text-blue-600' }}">
                {{ $pendaftaran ? $pendaftaran->statusLabel() : 'Belum Ada' }}
            </span>.
        </p>
        
        <button disabled class="bg-gray-300 text-gray-500 px-6 py-3 rounded-lg font-medium cursor-not-allowed flex items-center gap-2 mx-auto">
            <i class="bi bi-lock-fill"></i> Download PDF
        </button>
    @else
        <p class="text-gray-500 mb-8">
            Berkas Anda telah diverifikasi dan dinyatakan lengkap. Silakan unduh bukti pendaftaran untuk dibawa saat proses daftar ulang jika diterima.
        </p>
        
        <a href="{{ route('siswa.bukti-pendaftaran.download') }}" class="inline-flex bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors items-center gap-2 shadow-lg shadow-blue-500/30">
            <i class="bi bi-download"></i> Download PDF Bukti Pendaftaran
        </a>
    @endif

</div>
@endsection
