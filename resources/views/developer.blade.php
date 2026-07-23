<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <!-- Primary Meta Tags -->
    <title>Muhammad Nurul Fajri - Full Stack Software Engineer & UI/UX Designer</title>
    <meta name="title" content="Muhammad Nurul Fajri - Full Stack Software Engineer & UI/UX Designer">
    <meta name="description" content="Portfolio of Muhammad Nurul Fajri - Software Engineer specializing in Full Stack Web Development (React, Laravel), UI/UX Design, and digital product craftsmanship.">
    <meta name="keywords" content="Muhammad Nurul Fajri, Software Engineer, Full Stack Developer, React Developer, Laravel Developer, UI/UX Designer, Star Fence Developer, Portfolio">
    <meta name="author" content="Muhammad Nurul Fajri">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="{{ url('/developer') }}">
    <meta property="og:title" content="Muhammad Nurul Fajri - Full Stack Software Engineer">
    <meta property="og:description" content="Crafting scalable, elegant, and user-centered digital web applications with modern web technologies.">
    <meta property="og:image" content="{{ asset('images/fajri.jpg') }}">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="{{ url('/developer') }}">
    <meta property="twitter:title" content="Muhammad Nurul Fajri - Software Engineer">
    <meta property="twitter:description" content="Full Stack Web Developer & UI/UX Designer passionate about engineering high-quality web applications.">
    <meta property="twitter:image" content="{{ asset('images/fajri.jpg') }}">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Fira+Code:wght@400;500;600&display=swap" rel="stylesheet">
    
    <!-- Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">

    <!-- Structured Data (JSON-LD) for SEO -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Muhammad Nurul Fajri",
      "url": "{{ url('/developer') }}",
      "image": "{{ asset('images/fajri.jpg') }}",
      "sameAs": [
        "https://linkedin.com/in/muhammad-nurul-fajri",
        "https://github.com/Muhammad-Nurul-Fajri",
        "https://instagram.com/fajri_mnf"
      ],
      "jobTitle": "Software Engineer & Full Stack Developer",
      "worksFor": {
        "@type": "Organization",
        "name": "Star Fence Developer"
      },
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "UIN Imam Bonjol Padang"
      },
      "knowsAbout": ["Full Stack Development", "React.js", "Laravel", "UI/UX Design", "MySQL", "JavaScript", "Tailwind CSS"]
    }
    </script>

    <!-- Scripts and CSS -->
    @vite(['resources/css/app.css', 'resources/js/app.js', 'resources/js/react/app.jsx'])
</head>
<body class="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans antialiased selection:bg-sky-500 selection:text-white">
    <!-- React Root Mount -->
    <div id="react-developer-app"></div>
    <x-watermark />
</body>
</html>
