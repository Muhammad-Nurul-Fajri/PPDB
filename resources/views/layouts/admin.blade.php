<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>@yield('title') | Admin SIPENSA</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">

    <!-- Scripts -->
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.js', 'resources/js/react/app.jsx'])
</head>
<body class="font-sans antialiased bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100" style="font-family: 'Poppins', sans-serif;" x-data="{ sidebarOpen: false }">

    <div class="flex h-screen overflow-hidden">

        <!-- Sidebar -->
        <aside 
            :class="sidebarOpen ? 'translate-x-0' : '-translate-x-full'"
            class="fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 text-gray-300 transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 overflow-y-auto flex flex-col"
        >
            <div class="flex items-center justify-center h-20 border-b border-gray-800 px-6">
                <span class="text-2xl font-bold text-white tracking-wider">SIPENSA <span class="text-blue-500 text-sm align-top">ADMIN</span></span>
            </div>

            <nav class="flex-1 px-4 py-6 space-y-2">
                <x-sidebar-link href="{{ route('admin.dashboard') }}" :active="request()->routeIs('admin.dashboard')" icon="bi-speedometer2" variant="dark">
                    Dashboard
                </x-sidebar-link>
                
                <div class="pt-4 pb-2">
                    <p class="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Data Utama
                    </p>
                </div>

                <x-sidebar-link href="{{ route('admin.pendaftar.index') }}" :active="request()->routeIs('admin.pendaftar.*')" icon="bi-people" variant="dark">
                    Data Pendaftar
                </x-sidebar-link>

                <x-sidebar-link href="{{ route('admin.verifikasi.index') }}" :active="request()->routeIs('admin.verifikasi.*')" icon="bi-shield-check" variant="dark">
                    Verifikasi Berkas
                </x-sidebar-link>

                <x-sidebar-link href="{{ route('admin.seleksi.index') }}" :active="request()->routeIs('admin.seleksi.*')" icon="bi-award" variant="dark">
                    Hasil Seleksi
                </x-sidebar-link>

                <div class="pt-4 pb-2">
                    <p class="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Master Data
                    </p>
                </div>

                <x-sidebar-link href="{{ route('admin.periode.index') }}" :active="request()->routeIs('admin.periode.*')" icon="bi-calendar-range" variant="dark">
                    Tahun Ajaran & Gelombang
                </x-sidebar-link>

                <div class="pt-4 pb-2">
                    <p class="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Lainnya
                    </p>
                </div>

                <x-sidebar-link href="{{ route('admin.laporan.index') }}" :active="request()->routeIs('admin.laporan.*')" icon="bi-file-earmark-bar-graph" variant="dark">
                    Laporan
                </x-sidebar-link>

                <div class="border-t border-gray-800 my-4 pt-4"></div>

                <form method="POST" action="{{ route('logout') }}">
                    @csrf
                    <button type="submit" class="w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg hover:bg-gray-800 hover:text-white transition-colors">
                        <i class="bi bi-box-arrow-right text-lg mr-3"></i>
                        Logout
                    </button>
                </form>
            </nav>
        </aside>

        <!-- Main Content -->
        <div class="flex-1 flex flex-col overflow-hidden">
            
            <!-- Topbar -->
            <header class="h-20 bg-white dark:bg-gray-800 shadow-sm flex items-center justify-between px-6 z-10 border-b border-gray-200 dark:border-gray-700">
                <div class="flex items-center">
                    <button @click="sidebarOpen = !sidebarOpen" class="text-gray-500 focus:outline-none lg:hidden mr-4">
                        <i class="bi bi-list text-2xl"></i>
                    </button>
                    
                    <div>
                        <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 leading-tight">
                            @yield('title', 'Admin Dashboard')
                        </h2>
                    </div>
                </div>

                <div class="flex items-center">
                    <span class="text-gray-700 dark:text-gray-300 font-medium">{{ Auth::user()->name }}</span>
                    <div class="ml-3 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold shadow-md">
                        {{ substr(Auth::user()->name, 0, 1) }}
                    </div>
                </div>
            </header>

            <!-- Page Content -->
            <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 dark:bg-gray-900 p-6">
                
                @if (session('success'))
                    <div class="mb-6 bg-green-50 border-l-4 border-green-500 p-4 rounded shadow-sm dark:bg-gray-800" role="alert">
                        <div class="flex">
                            <div class="flex-shrink-0">
                                <i class="bi bi-check-circle-fill text-green-500"></i>
                            </div>
                            <div class="ml-3">
                                <p class="text-sm text-green-700 dark:text-green-400">{{ session('success') }}</p>
                            </div>
                        </div>
                    </div>
                @endif

                @if (session('error'))
                    <div class="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded shadow-sm dark:bg-gray-800" role="alert">
                        <div class="flex">
                            <div class="flex-shrink-0">
                                <i class="bi bi-exclamation-triangle-fill text-red-500"></i>
                            </div>
                            <div class="ml-3">
                                <p class="text-sm text-red-700 dark:text-red-400">{{ session('error') }}</p>
                            </div>
                        </div>
                    </div>
                @endif

                @yield('content')

            </main>
        </div>

        <!-- Overlay -->
        <div 
            x-show="sidebarOpen" 
            @click="sidebarOpen = false"
            class="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden transition-opacity"
        ></div>
    </div>

    @stack('scripts')
    <x-watermark />
</body>
</html>
