<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>SIPENSA - Sistem Informasi Penerimaan Siswa Baru</title>

    <!-- Bootstrap 5 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" rel="stylesheet">

    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .hero {
            min-height: 90vh;
            background: linear-gradient(135deg, #0d6efd 0%, #0b3d91 100%);
            color: white;
            display: flex;
            align-items: center;
        }

        .hero-card {
            background: rgba(255,255,255,0.12);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.2);
            border-radius: 1rem;
        }

        .feature-card {
            border: none;
            border-radius: 1rem;
            transition: transform .2s ease, box-shadow .2s ease;
        }

        .feature-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 1rem 2rem rgba(0,0,0,.1);
        }

        .section-title {
            font-weight: 700;
            margin-bottom: 1rem;
        }

        footer {
            background: #0b3d91;
            color: rgba(255,255,255,.85);
        }
    </style>
</head>
<body>

<!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-dark bg-primary sticky-top shadow-sm">
    <div class="container">
        <a class="navbar-brand fw-bold" href="/">
            <i class="bi bi-mortarboard-fill me-2"></i>SIPENSA
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item"><a class="nav-link active" href="#home">Beranda</a></li>
                <li class="nav-item"><a class="nav-link" href="#tentang">Tentang</a></li>
                <li class="nav-item"><a class="nav-link" href="#jadwal">Jadwal</a></li>
                <li class="nav-item"><a class="nav-link" href="#persyaratan">Persyaratan</a></li>
                <li class="nav-item ms-lg-2">
                    <a class="btn btn-light text-primary fw-semibold" href="{{ route('login') }}">Login</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

<!-- Hero Section -->
<section id="home" class="hero">
    <div class="container">
        <div class="row align-items-center g-5">
            <div class="col-lg-6">
                <span class="badge bg-light text-primary mb-3 px-3 py-2">PPDB Tahun Ajaran 2026/2027</span>
                <h1 class="display-4 fw-bold mb-4">
                    Sistem Informasi Penerimaan Siswa Baru
                </h1>
                <p class="lead mb-4">
                    Daftar sekolah secara online dengan proses yang cepat, mudah, dan transparan.
                    Unggah berkas, pantau status verifikasi, dan lihat hasil seleksi langsung dari dashboard Anda.
                </p>

                <div class="d-flex flex-wrap gap-3">
                    <a href="{{ route('register') }}" class="btn btn-light btn-lg text-primary fw-semibold px-4">
                        <i class="bi bi-person-plus-fill me-2"></i>Daftar Sekarang
                    </a>
                    <a href="#jadwal" class="btn btn-outline-light btn-lg px-4">
                        <i class="bi bi-calendar-event me-2"></i>Lihat Jadwal
                    </a>
                </div>
            </div>

            <div class="col-lg-6">
                <div class="hero-card p-4 p-lg-5 shadow-lg">
                    <div class="row g-4 text-center">
                        <div class="col-6">
                            <div class="bg-white text-dark rounded-4 p-4 h-100">
                                <i class="bi bi-file-earmark-text display-5 text-primary"></i>
                                <h3 class="fw-bold mt-2 mb-1">100%</h3>
                                <p class="text-muted mb-0">Pendaftaran Online</p>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="bg-white text-dark rounded-4 p-4 h-100">
                                <i class="bi bi-shield-check display-5 text-success"></i>
                                <h3 class="fw-bold mt-2 mb-1">24/7</h3>
                                <p class="text-muted mb-0">Akses Sistem</p>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="bg-white text-dark rounded-4 p-4 h-100">
                                <i class="bi bi-cloud-arrow-up display-5 text-info"></i>
                                <h3 class="fw-bold mt-2 mb-1">4</h3>
                                <p class="text-muted mb-0">Jenis Berkas</p>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="bg-white text-dark rounded-4 p-4 h-100">
                                <i class="bi bi-bar-chart display-5 text-warning"></i>
                                <h3 class="fw-bold mt-2 mb-1">Real-time</h3>
                                <p class="text-muted mb-0">Status Seleksi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Features -->
<section id="tentang" class="py-5">
    <div class="container">
        <div class="text-center mb-5">
            <h2 class="section-title">Mengapa Memilih SIPENSA?</h2>
            <p class="text-muted">Fitur utama yang memudahkan proses PPDB dari awal hingga pengumuman.</p>
        </div>

        <div class="row g-4">
            <div class="col-md-4">
                <div class="card feature-card h-100 shadow-sm">
                    <div class="card-body p-4 text-center">
                        <i class="bi bi-pencil-square display-4 text-primary"></i>
                        <h5 class="mt-3 fw-bold">Pendaftaran Online</h5>
                        <p class="text-muted mb-0">Isi formulir pendaftaran kapan saja tanpa perlu datang ke sekolah.</p>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card feature-card h-100 shadow-sm">
                    <div class="card-body p-4 text-center">
                        <i class="bi bi-cloud-upload display-4 text-success"></i>
                        <h5 class="mt-3 fw-bold">Upload Berkas</h5>
                        <p class="text-muted mb-0">Unggah KK, Akta Kelahiran, Rapor, dan Pas Foto langsung dari perangkat Anda.</p>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card feature-card h-100 shadow-sm">
                    <div class="card-body p-4 text-center">
                        <i class="bi bi-check2-circle display-4 text-warning"></i>
                        <h5 class="mt-3 fw-bold">Status Real-time</h5>
                        <p class="text-muted mb-0">Pantau proses verifikasi berkas dan hasil seleksi secara langsung.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Jadwal -->
<section id="jadwal" class="py-5 bg-light">
    <div class="container">
        <div class="text-center mb-5">
            <h2 class="section-title">Jadwal PPDB</h2>
            <p class="text-muted">Contoh jadwal penerimaan siswa baru tahun ajaran 2026/2027.</p>
        </div>

        <div class="row justify-content-center">
            <div class="col-lg-8">
                <div class="card shadow-sm border-0">
                    <div class="card-body p-0">
                        <div class="table-responsive">
                            <table class="table table-hover align-middle mb-0">
                                <thead class="table-primary">
                                    <tr>
                                        <th>Kegiatan</th>
                                        <th>Tanggal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Pendaftaran Online</td>
                                        <td>1 – 30 Juni 2026</td>
                                    </tr>
                                    <tr>
                                        <td>Verifikasi Berkas</td>
                                        <td>2 – 5 Juli 2026</td>
                                    </tr>
                                    <tr>
                                        <td>Seleksi</td>
                                        <td>6 – 8 Juli 2026</td>
                                    </tr>
                                    <tr>
                                        <td>Pengumuman Hasil</td>
                                        <td>10 Juli 2026</td>
                                    </tr>
                                    <tr>
                                        <td>Daftar Ulang</td>
                                        <td>11 – 15 Juli 2026</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Persyaratan -->
<section id="persyaratan" class="py-5">
    <div class="container">
        <div class="row align-items-center g-5">
            <div class="col-lg-6">
                <h2 class="section-title">Persyaratan Pendaftaran</h2>
                <p class="text-muted">Siapkan dokumen berikut sebelum melakukan pendaftaran online.</p>

                <div class="d-grid gap-3 mt-4">
                    <div class="d-flex align-items-center p-3 border rounded-3">
                        <i class="bi bi-file-earmark-text text-primary fs-3 me-3"></i>
                        <div>
                            <div class="fw-semibold">Kartu Keluarga (KK)</div>
                            <small class="text-muted">Format PDF/JPG, maksimal 2 MB</small>
                        </div>
                    </div>

                    <div class="d-flex align-items-center p-3 border rounded-3">
                        <i class="bi bi-file-earmark-person text-success fs-3 me-3"></i>
                        <div>
                            <div class="fw-semibold">Akta Kelahiran</div>
                            <small class="text-muted">Format PDF/JPG, maksimal 2 MB</small>
                        </div>
                    </div>

                    <div class="d-flex align-items-center p-3 border rounded-3">
                        <i class="bi bi-journal-text text-warning fs-3 me-3"></i>
                        <div>
                            <div class="fw-semibold">Rapor Semester Terakhir</div>
                            <small class="text-muted">Format PDF, maksimal 5 MB</small>
                        </div>
                    </div>

                    <div class="d-flex align-items-center p-3 border rounded-3">
                        <i class="bi bi-camera text-danger fs-3 me-3"></i>
                        <div>
                            <div class="fw-semibold">Pas Foto 3x4</div>
                            <small class="text-muted">Format JPG/PNG, maksimal 1 MB</small>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-6">
                <div class="card border-0 shadow-lg rounded-4 overflow-hidden">
                    <div class="card-body p-5 text-center">
                        <i class="bi bi-clipboard-check display-1 text-primary"></i>
                        <h3 class="fw-bold mt-4">Siap Mendaftar?</h3>
                        <p class="text-muted mb-4">
                            Pastikan semua dokumen telah disiapkan agar proses verifikasi berjalan lebih cepat.
                        </p>
                        <a href="{{ route('register') }}" class="btn btn-primary btn-lg px-5">
                            Mulai Pendaftaran
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Footer -->
<footer class="py-4">
    <div class="container">
        <div class="row align-items-center gy-3">
            <div class="col-md-6">
                <h5 class="fw-bold mb-1">SIPENSA</h5>
                <p class="mb-0 small">Sistem Informasi Penerimaan Siswa Baru berbasis Laravel 13.</p>
            </div>
            <div class="col-md-6 text-md-end">
                <small>&copy; {{ date('Y') }} SIPENSA. All rights reserved.</small>
            </div>
        </div>
    </div>
</footer>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>