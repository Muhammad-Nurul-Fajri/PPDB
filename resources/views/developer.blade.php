<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="scroll-smooth">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Muhammad Nurul Fajri — Software Engineer & Full Stack Web Developer</title>
    
    <!-- Primary Meta Tags -->
    <meta name="title" content="Muhammad Nurul Fajri — Software Engineer & Full Stack Web Developer">
    <meta name="description" content="Senior Software Engineer & Full Stack Web Developer specializing in React, Laravel, UI/UX Design, and scalable web applications. Inspired by Apple, Vercel, and Linear.">
    <meta name="keywords" content="Muhammad Nurul Fajri, Software Engineer, Full Stack Developer, React Developer, Laravel Developer, UI/UX Designer, Portfolio">
    <meta name="author" content="Muhammad Nurul Fajri">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="{{ url()->current() }}">
    <meta property="og:title" content="Muhammad Nurul Fajri — Software Engineer & Full Stack Web Developer">
    <meta property="og:description" content="Passionate Software Engineer building scalable, efficient, and user-friendly digital products using modern web technologies.">
    <meta property="og:image" content="{{ asset('images/fajri.jpg') }}">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:title" content="Muhammad Nurul Fajri — Software Engineer & Full Stack Web Developer">
    <meta property="twitter:description" content="Passionate Software Engineer building scalable, efficient, and user-friendly digital products using modern web technologies.">
    <meta property="twitter:image" content="{{ asset('images/fajri.jpg') }}">

    <!-- Inter Font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    
    <!-- Inline Script for Theme Prevention -->
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
<body class="bg-white dark:bg-[#09090B] text-slate-900 dark:text-zinc-100 font-sans antialiased selection:bg-blue-600 selection:text-white transition-colors duration-300">
    <div id="react-developer-page">
        <!-- Initial Skeleton Fallback Loader -->
        <div class="min-h-screen flex flex-col items-center justify-center bg-[#09090B] text-white">
            <div class="w-10 h-10 rounded-full border-2 border-blue-600/30 border-t-blue-600 animate-spin"></div>
            <p className="mt-4 text-xs tracking-widest text-zinc-500 font-mono uppercase">Loading Application...</p>
        </div>
    </div>
    <x-watermark />
</body>
</html>
