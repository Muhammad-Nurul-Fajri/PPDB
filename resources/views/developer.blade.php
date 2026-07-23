<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="scroll-smooth">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Muhammad Nurul Fajri | Full Stack Web Developer & Software Engineer</title>
    
    <!-- Primary Meta Tags -->
    <meta name="title" content="Muhammad Nurul Fajri | Full Stack Web Developer & Software Engineer">
    <meta name="description" content="Portfolio of Muhammad Nurul Fajri, a Senior Software Engineer & Full Stack Developer specializing in React, Laravel, UI/UX Design, and modern web applications.">
    <meta name="keywords" content="Muhammad Nurul Fajri, Software Engineer, Full Stack Developer, React Developer, Laravel Developer, UI/UX Designer, Portfolio">
    <meta name="author" content="Muhammad Nurul Fajri">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="{{ url()->current() }}">
    <meta property="og:title" content="Muhammad Nurul Fajri | Full Stack Web Developer & Software Engineer">
    <meta property="og:description" content="Passionate Software Engineer building scalable, efficient, and user-friendly digital products using modern web technologies.">
    <meta property="og:image" content="{{ asset('images/fajri.jpg') }}">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:title" content="Muhammad Nurul Fajri | Full Stack Web Developer & Software Engineer">
    <meta property="twitter:description" content="Passionate Software Engineer building scalable, efficient, and user-friendly digital products using modern web technologies.">
    <meta property="twitter:image" content="{{ asset('images/fajri.jpg') }}">

    <!-- Fonts: Plus Jakarta Sans & Outfit -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    
    <!-- Inline Script for Dark Mode Theme Prevention -->
    <script>
        (function() {
            const savedTheme = localStorage.getItem('developer-theme');
            if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        })();
    </script>

    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans antialiased selection:bg-indigo-500 selection:text-white transition-colors duration-300">
    <div id="react-developer-page">
        <!-- Initial Skeleton / Fallback Loader -->
        <div class="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white">
            <div class="relative w-20 h-20">
                <div class="absolute inset-0 rounded-full border-4 border-indigo-500/20 border-t-indigo-500 animate-spin"></div>
                <div class="absolute inset-2 rounded-full border-4 border-purple-500/20 border-t-purple-500 animate-spin animation-delay-200"></div>
            </div>
            <p class="mt-6 text-sm tracking-widest text-slate-400 font-medium uppercase animate-pulse">Loading Experience...</p>
        </div>
    </div>
    <x-watermark />
</body>
</html>
