<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ config('app.name', 'SIPENSA') }} - Sistem Penerimaan Siswa Baru</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    
    <!-- Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">

    <!-- Scripts -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="font-sans antialiased text-gray-900 bg-white" style="font-family: 'Poppins', sans-serif;">
    
    <!-- Navbar -->
    <nav class="bg-white/80 backdrop-blur-md fixed w-full z-50 border-b border-gray-100 transition-all duration-300" id="navbar">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-20 items-center">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/30">
                        <i class="bi bi-mortarboard-fill text-white text-xl"></i>
                    </div>
                    <span class="font-bold text-2xl tracking-tight text-gray-900">SIPENSA</span>
                </div>
                
                <div class="hidden md:flex items-center space-x-8">
                    <a href="#beranda" class="text-gray-600 hover:text-blue-600 font-medium transition-colors">Beranda</a>
                    <a href="#informasi" class="text-gray-600 hover:text-blue-600 font-medium transition-colors">Informasi</a>
                    <a href="#alur" class="text-gray-600 hover:text-blue-600 font-medium transition-colors">Alur Pendaftaran</a>
                    <a href="#kontak" class="text-gray-600 hover:text-blue-600 font-medium transition-colors">Kontak</a>
                    
                    <div class="flex items-center space-x-4 pl-4 border-l border-gray-200">
                        @auth
                            @if(Auth::user()->isAdmin())
                                <a href="{{ route('admin.dashboard') }}" class="text-blue-600 font-semibold hover:text-blue-700">Dashboard</a>
                            @else
                                <a href="{{ route('siswa.dashboard') }}" class="text-blue-600 font-semibold hover:text-blue-700">Dashboard</a>
                            @endif
                        @else
                            <a href="{{ route('login') }}" class="text-gray-700 font-semibold hover:text-blue-600">Masuk</a>
                            <a href="{{ route('register') }}" class="bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-md shadow-blue-500/30 transform hover:-translate-y-0.5">Daftar Sekarang</a>
                        @endauth
                    </div>
                </div>

                <!-- Mobile menu button -->
                <div class="md:hidden flex items-center">
                    <button class="text-gray-500 hover:text-gray-900 focus:outline-none p-2">
                        <i class="bi bi-list text-3xl"></i>
                    </button>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="beranda" class="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
        <!-- Decorative shapes -->
        <div class="absolute top-20 right-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div class="absolute top-40 right-40 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div class="absolute -bottom-8 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div class="text-center lg:text-left">
                    <span class="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6 tracking-wide uppercase border border-blue-200">
                        Penerimaan Peserta Didik Baru
                    </span>
                    <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                        Langkah Awal Menuju <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Masa Depan</span> Gemilang
                    </h1>
                    <p class="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                        Bergabunglah bersama kami. Kami menyediakan sistem pendaftaran yang mudah, transparan, dan terintegrasi untuk calon siswa baru.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <a href="{{ route('register') }}" class="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/30 transform hover:-translate-y-1 flex items-center justify-center gap-2">
                            Mulai Mendaftar
                            <i class="bi bi-arrow-right"></i>
                        </a>
                        <a href="#alur" class="bg-white text-gray-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 border border-gray-200 transition-all flex items-center justify-center gap-2">
                            <i class="bi bi-play-circle text-blue-600"></i>
                            Lihat Panduan
                        </a>
                    </div>
                    
                    <div class="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-500">
                        <div class="flex items-center gap-2">
                            <i class="bi bi-check-circle-fill text-green-500 text-lg"></i>
                            <span class="font-medium">Cepat & Mudah</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <i class="bi bi-check-circle-fill text-green-500 text-lg"></i>
                            <span class="font-medium">100% Online</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <i class="bi bi-check-circle-fill text-green-500 text-lg"></i>
                            <span class="font-medium">Aman</span>
                        </div>
                    </div>
                </div>
                
                <div class="relative hidden lg:block">
                    <div class="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                        <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" alt="Students" class="w-full h-auto object-cover" />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                    
                    <!-- Floating Card -->
                    <div class="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 animate-bounce" style="animation-duration: 3s;">
                        <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                            <i class="bi bi-person-check-fill text-green-600 text-xl"></i>
                        </div>
                        <div>
                            <p class="text-xs text-gray-500 font-semibold uppercase tracking-wider">Pendaftar Aktif</p>
                            <p class="text-2xl font-bold text-gray-900">1,250+</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Info Section -->
    <section id="informasi" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Mengapa Memilih Kami?</h2>
                <div class="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div class="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                    <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                        <i class="bi bi-laptop text-blue-600 text-3xl group-hover:text-white"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3">Sistem Modern</h3>
                    <p class="text-gray-600">Pendaftaran dilakukan sepenuhnya secara online dengan sistem yang modern, cepat, dan mudah diakses dari mana saja.</p>
                </div>
                
                <div class="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                    <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                        <i class="bi bi-shield-check text-blue-600 text-3xl group-hover:text-white"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3">Transparan & Aman</h3>
                    <p class="text-gray-600">Seluruh proses seleksi dilakukan secara transparan. Data pendaftar dijamin keamanannya menggunakan enkripsi standar industri.</p>
                </div>
                
                <div class="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                    <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                        <i class="bi bi-headset text-blue-600 text-3xl group-hover:text-white"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3">Dukungan Penuh</h3>
                    <p class="text-gray-600">Tim panitia PPDB kami siap membantu jika Anda mengalami kesulitan atau memiliki pertanyaan seputar pendaftaran.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Alur Section -->
    <section id="alur" class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Alur Pendaftaran</h2>
                <div class="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
                <p class="text-gray-600 max-w-2xl mx-auto">Proses pendaftaran dirancang semudah mungkin. Ikuti langkah-langkah di bawah ini untuk menjadi bagian dari sekolah kami.</p>
            </div>
            
            <div class="relative">
                <!-- Line connector -->
                <div class="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
                
                <div class="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                    
                    <div class="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center relative group">
                        <div class="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold border-4 border-white shadow-md">1</div>
                        <div class="mt-4 w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <i class="bi bi-person-plus text-2xl text-blue-600"></i>
                        </div>
                        <h4 class="font-bold text-lg mb-2">Buat Akun</h4>
                        <p class="text-sm text-gray-500">Mendaftar dengan email aktif dan buat password untuk login ke sistem.</p>
                    </div>
                    
                    <div class="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center relative group">
                        <div class="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold border-4 border-white shadow-md">2</div>
                        <div class="mt-4 w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <i class="bi bi-file-earmark-person text-2xl text-blue-600"></i>
                        </div>
                        <h4 class="font-bold text-lg mb-2">Lengkapi Biodata</h4>
                        <p class="text-sm text-gray-500">Isi form biodata diri, data orang tua, dan asal sekolah dengan data yang valid.</p>
                    </div>
                    
                    <div class="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center relative group">
                        <div class="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold border-4 border-white shadow-md">3</div>
                        <div class="mt-4 w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <i class="bi bi-cloud-arrow-up text-2xl text-blue-600"></i>
                        </div>
                        <h4 class="font-bold text-lg mb-2">Upload Berkas</h4>
                        <p class="text-sm text-gray-500">Unggah dokumen persyaratan (KK, Akta, Nilai Rapor) untuk diverifikasi.</p>
                    </div>
                    
                    <div class="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center relative group">
                        <div class="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold border-4 border-white shadow-md">4</div>
                        <div class="mt-4 w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <i class="bi bi-award text-2xl text-blue-600"></i>
                        </div>
                        <h4 class="font-bold text-lg mb-2">Hasil Seleksi</h4>
                        <p class="text-sm text-gray-500">Cek status pengumuman hasil seleksi dan unduh bukti diterima.</p>
                    </div>
                    
                </div>
            </div>
            
            <div class="text-center mt-12">
                <a href="{{ route('register') }}" class="inline-flex items-center justify-center bg-gray-900 text-white px-8 py-3 rounded-full font-bold hover:bg-black transition-colors shadow-lg">
                    Daftar Sekarang <i class="bi bi-arrow-right ml-2"></i>
                </a>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer id="kontak" class="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                
                <div>
                    <div class="flex items-center gap-3 mb-6">
                        <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                            <i class="bi bi-mortarboard-fill text-white text-xl"></i>
                        </div>
                        <span class="font-bold text-2xl text-white tracking-tight">SIPENSA</span>
                    </div>
                    <p class="text-gray-400 mb-6 leading-relaxed">
                        Sistem Informasi Penerimaan Siswa Baru yang dirancang untuk memberikan kemudahan, kecepatan, dan transparansi dalam proses seleksi.
                    </p>
                    <div class="flex space-x-4">
                        <a href="#" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all">
                            <i class="bi bi-facebook"></i>
                        </a>
                        <a href="#" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-400 hover:text-white transition-all">
                            <i class="bi bi-twitter-x"></i>
                        </a>
                        <a href="#" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-pink-600 hover:text-white transition-all">
                            <i class="bi bi-instagram"></i>
                        </a>
                    </div>
                </div>
                
                <div>
                    <h3 class="text-lg font-bold text-white mb-6 uppercase tracking-wider">Tautan Berguna</h3>
                    <ul class="space-y-3 text-gray-400">
                        <li><a href="#beranda" class="hover:text-blue-400 transition-colors flex items-center gap-2"><i class="bi bi-chevron-right text-xs"></i> Beranda</a></li>
                        <li><a href="#informasi" class="hover:text-blue-400 transition-colors flex items-center gap-2"><i class="bi bi-chevron-right text-xs"></i> Informasi</a></li>
                        <li><a href="#alur" class="hover:text-blue-400 transition-colors flex items-center gap-2"><i class="bi bi-chevron-right text-xs"></i> Alur Pendaftaran</a></li>
                        <li><a href="{{ route('login') }}" class="hover:text-blue-400 transition-colors flex items-center gap-2"><i class="bi bi-chevron-right text-xs"></i> Login Peserta</a></li>
                    </ul>
                </div>
                
                <div>
                    <h3 class="text-lg font-bold text-white mb-6 uppercase tracking-wider">Hubungi Kami</h3>
                    <ul class="space-y-4 text-gray-400">
                        <li class="flex items-start gap-3">
                            <i class="bi bi-geo-alt-fill text-blue-500 mt-1"></i>
                            <span>Jl. Pendidikan No. 123<br>Kota Nusantara, Indonesia 12345</span>
                        </li>
                        <li class="flex items-center gap-3">
                            <i class="bi bi-telephone-fill text-blue-500"></i>
                            <span>+62 812 3456 7890</span>
                        </li>
                        <li class="flex items-center gap-3">
                            <i class="bi bi-envelope-fill text-blue-500"></i>
                            <span>info@sipensa.sch.id</span>
                        </li>
                    </ul>
                </div>
                
            </div>
            
            <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                <p>&copy; {{ date('Y') }} SIPENSA. Hak Cipta Dilindungi.</p>
                <div class="flex space-x-4 mt-4 md:mt-0">
                    <a href="#" class="hover:text-gray-300">Syarat & Ketentuan</a>
                    <a href="#" class="hover:text-gray-300">Kebijakan Privasi</a>
                </div>
            </div>
        </div>
    </footer>

    <style>
        html { scroll-behavior: smooth; }
        
        /* Navbar Scrolled State */
        .scrolled {
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            background-color: rgba(255, 255, 255, 0.95);
        }
        
        /* Simple Animation Utilities */
        .animate-blob {
            animation: blob 7s infinite;
        }
        .animation-delay-2000 {
            animation-delay: 2s;
        }
        .animation-delay-4000 {
            animation-delay: 4s;
        }
        @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
        }
    </style>

    <script>
        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 10) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    </script>
    <x-watermark />
</body>
</html>