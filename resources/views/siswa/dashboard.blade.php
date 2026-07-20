<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard Siswa | SIPENSA</title>

    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- Bootstrap Icon -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" rel="stylesheet">

    <!-- Google Font -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <style>
        * {
            font-family: 'Poppins', sans-serif;
        }

        body {
            background: #f4f6f9;
        }

        .sidebar {
            width: 260px;
            height: 100vh;
            position: fixed;
            background: #0d6efd;
            color: white;
        }

        .sidebar .logo {
            padding: 25px;
            font-size: 22px;
            font-weight: bold;
            text-align: center;
            border-bottom: 1px solid rgba(255, 255, 255, .2);
        }

        .sidebar a {
            display: block;
            padding: 15px 25px;
            color: white;
            text-decoration: none;
            transition: .3s;
        }

        .sidebar a:hover {
            background: rgba(255, 255, 255, .15);
            padding-left: 35px;
        }

        .content {
            margin-left: 260px;
        }

        .topbar {
            background: white;
            padding: 18px 30px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, .05);
        }

        .card-dashboard {
            border: none;
            border-radius: 15px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, .08);
        }

        .icon-box {
            width: 60px;
            height: 60px;
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 28px;
        }

        .timeline {
            border-left: 3px solid #0d6efd;
            margin-left: 15px;
            padding-left: 20px;
        }

        .timeline-item {
            margin-bottom: 20px;
            position: relative;
        }

        .timeline-item::before {
            content: "";
            width: 15px;
            height: 15px;
            background: #0d6efd;
            border-radius: 50%;
            position: absolute;
            left: -29px;
            top: 5px;
        }

        .table td {
            vertical-align: middle;
        }
    </style>

</head>

<body>

    <!-- Sidebar -->

    <div class="sidebar">

        <div class="logo">
            SIPENSA
        </div>

        <a href="#"><i class="bi bi-house"></i> Dashboard</a>

        <a href="#"><i class="bi bi-person"></i> Biodata</a>

        <a href="#"><i class="bi bi-people"></i> Data Orang Tua</a>

        <a href="#"><i class="bi bi-building"></i> Asal Sekolah</a>

        <a href="#"><i class="bi bi-folder2-open"></i> Upload Berkas</a>

        <a href="#"><i class="bi bi-printer"></i> Bukti Pendaftaran</a>

        <a href="#"><i class="bi bi-megaphone"></i> Pengumuman</a>

        <a href="#"><i class="bi bi-person-circle"></i> Profil</a>

        <a href="#"><i class="bi bi-box-arrow-right"></i> Logout</a>

    </div>

    <div class="content">

        <!-- Navbar -->

        <div class="topbar d-flex justify-content-between">

            <div>

                <h4 class="mb-0">
                    Dashboard Calon Siswa
                </h4>

                <small class="text-muted">
                    Selamat datang di Sistem PPDB
                </small>

            </div>

            <div>

                <strong>{{ Auth::user()->name }}</strong>

            </div>

        </div>

        <div class="container-fluid mt-4">

            <div class="row">

                <div class="col-md-3">

                    <div class="card card-dashboard">
                        <div class="card-body d-flex">

                            <div class="icon-box bg-primary me-3">
                                <i class="bi bi-credit-card"></i>
                            </div>

                            <div>

                                <small>Nomor Pendaftaran</small>

                                <h5>PPDB20260001</h5>

                            </div>

                        </div>
                    </div>

                </div>

                <div class="col-md-3">

                    <div class="card card-dashboard">

                        <div class="card-body d-flex">

                            <div class="icon-box bg-success me-3">

                                <i class="bi bi-folder-check"></i>

                            </div>

                            <div>

                                <small>Status Berkas</small>

                                <h5 class="text-success">
                                    Lengkap
                                </h5>

                            </div>

                        </div>

                    </div>

                </div>

                <div class="col-md-3">

                    <div class="card card-dashboard">

                        <div class="card-body d-flex">

                            <div class="icon-box bg-warning me-3">

                                <i class="bi bi-search"></i>

                            </div>

                            <div>

                                <small>Verifikasi</small>

                                <h5 class="text-warning">
                                    Menunggu
                                </h5>

                            </div>

                        </div>

                    </div>

                </div>

                <div class="col-md-3">

                    <div class="card card-dashboard">

                        <div class="card-body d-flex">

                            <div class="icon-box bg-danger me-3">

                                <i class="bi bi-award"></i>

                            </div>

                            <div>

                                <small>Status Seleksi</small>

                                <h5 class="text-primary">
                                    Menunggu
                                </h5>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <!-- Progress -->

            <div class="row mt-4">

                <div class="col-lg-8">

                    <div class="card card-dashboard">

                        <div class="card-header">

                            <h5>Progress Pendaftaran</h5>

                        </div>

                        <div class="card-body">

                            <div class="progress" style="height:25px">

                                <div class="progress-bar progress-bar-striped progress-bar-animated" style="width:70%">

                                    70%

                                </div>

                            </div>

                            <div class="mt-3">

                                <p>✔ Registrasi Akun</p>

                                <p>✔ Biodata</p>

                                <p>✔ Upload Berkas</p>

                                <p>⏳ Menunggu Verifikasi</p>

                                <p>⌛ Seleksi</p>

                            </div>

                        </div>

                    </div>

                </div>

                <div class="col-lg-4">

                    <div class="card card-dashboard">

                        <div class="card-header">

                            <h5>Status Berkas</h5>

                        </div>

                        <table class="table">

                            <tr>

                                <td>Kartu Keluarga</td>

                                <td><span class="badge bg-success">Lengkap</span></td>

                            </tr>

                            <tr>

                                <td>Akta Kelahiran</td>

                                <td><span class="badge bg-success">Lengkap</span></td>

                            </tr>

                            <tr>

                                <td>Rapor</td>

                                <td><span class="badge bg-success">Lengkap</span></td>

                            </tr>

                            <tr>

                                <td>Pas Foto</td>

                                <td><span class="badge bg-warning">Menunggu</span></td>

                            </tr>

                        </table>

                    </div>

                </div>

            </div>

            <!-- Biodata -->

            <div class="row mt-4">

                <div class="col-lg-6">

                    <div class="card card-dashboard">

                        <div class="card-header">

                            <h5>Biodata Siswa</h5>

                        </div>

                        <div class="card-body">

                            <table class="table">

                                <tr>

                                    <td>Nama</td>

                                    <td>: {{ Auth::user()->name }}</td>

                                </tr>

                                <tr>

                                    <td>NISN</td>

                                    <td>: 1234567890</td>

                                </tr>

                                <tr>

                                    <td>Jenis Kelamin</td>

                                    <td>: Laki-laki</td>

                                </tr>

                                <tr>

                                    <td>Asal Sekolah</td>

                                    <td>: SMP Negeri 1 Padang</td>

                                </tr>

                                <tr>

                                    <td>No HP</td>

                                    <td>: 08123456789</td>

                                </tr>

                            </table>

                        </div>

                    </div>

                </div>

                <div class="col-lg-6">

                    <div class="card card-dashboard">

                        <div class="card-header">

                            <h5>Timeline Aktivitas</h5>

                        </div>

                        <div class="card-body">

                            <div class="timeline">

                                <div class="timeline-item">

                                    <strong>Registrasi Akun</strong>

                                    <br>

                                    <small>17 Juli 2026</small>

                                </div>

                                <div class="timeline-item">

                                    <strong>Melengkapi Biodata</strong>

                                </div>

                                <div class="timeline-item">

                                    <strong>Upload Berkas</strong>

                                </div>

                                <div class="timeline-item">

                                    <strong>Menunggu Verifikasi Admin</strong>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <!-- Pengumuman -->

            <div class="row mt-4">

                <div class="col-lg-12">

                    <div class="alert alert-info">

                        <h5>

                            <i class="bi bi-megaphone"></i>

                            Pengumuman

                        </h5>

                        Belum ada pengumuman hasil seleksi.

                    </div>

                </div>

            </div>

            <!-- Quick Action -->

            <div class="row">

                <div class="col-lg-12">

                    <div class="card card-dashboard">

                        <div class="card-body text-center">

                            <a href="#" class="btn btn-primary">

                                <i class="bi bi-pencil-square"></i>

                                Lengkapi Biodata

                            </a>

                            <a href="#" class="btn btn-success">

                                <i class="bi bi-upload"></i>

                                Upload Berkas

                            </a>

                            <a href="#" class="btn btn-warning">

                                <i class="bi bi-printer"></i>

                                Cetak Bukti

                            </a>

                            <a href="#" class="btn btn-secondary">

                                <i class="bi bi-person"></i>

                                Profil

                            </a>

                        </div>

                    </div>

                </div>

            </div>

            <footer class="text-center mt-5 mb-3 text-muted">

                © 2026 SIPENSA | Sistem Informasi Penerimaan Siswa Baru

            </footer>

        </div>

    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

</body>

</html>
