<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Bukti Pendaftaran - {{ $pendaftaran->no_pendaftaran }}</title>
    <style>
        body {
            font-family: 'Helvetica', 'Arial', sans-serif;
            font-size: 14px;
            line-height: 1.5;
            color: #333;
        }
        .header {
            text-align: center;
            border-bottom: 2px solid #000;
            padding-bottom: 10px;
            margin-bottom: 20px;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
            text-transform: uppercase;
        }
        .header p {
            margin: 5px 0 0 0;
            font-size: 12px;
        }
        .title {
            text-align: center;
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 20px;
            text-decoration: underline;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }
        table.border th, table.border td {
            border: 1px solid #000;
            padding: 8px;
        }
        .info-table td {
            padding: 5px 0;
            vertical-align: top;
        }
        .info-table td:first-child {
            width: 30%;
            font-weight: bold;
        }
        .info-table td:nth-child(2) {
            width: 5%;
        }
        .footer {
            margin-top: 50px;
            width: 100%;
        }
        .footer-table td {
            width: 50%;
            text-align: center;
        }
        .ttd-box {
            height: 80px;
        }
        .pdf-watermark {
            position: fixed;
            top: 45%;
            left: -10%;
            width: 120%;
            text-align: center;
            transform: rotate(-30deg);
            transform-origin: 50% 50%;
            opacity: 0.12;
            font-size: 20px;
            font-weight: bold;
            color: #000000;
            z-index: -1000;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        .pdf-watermark-footer {
            position: fixed;
            bottom: 0px;
            right: 0px;
            font-size: 8px;
            color: #777777;
            opacity: 0.6;
        }
    </style>
</head>
<body>
    
    <div class="pdf-watermark-footer">
        Muhammad Nurul Fajri | Owltility | Star Fence Developer
    </div>

    <div class="header">
        <h1>PANITIA PENERIMAAN SISWA BARU</h1>
        <h1>{{ config('app.name', 'SIPENSA') }}</h1>
        <p>Jl. Pendidikan No. 123, Kota Nusantara, Indonesia 12345 | Telp: 081234567890 | Email: info@sipensa.sch.id</p>
    </div>

    <div class="title">
        TANDA BUKTI PENDAFTARAN
    </div>

    <table class="info-table">
        <tr>
            <td>No. Pendaftaran</td>
            <td>:</td>
            <td><strong>{{ $pendaftaran->no_pendaftaran }}</strong></td>
        </tr>
        <tr>
            <td>Tanggal Daftar</td>
            <td>:</td>
            <td>{{ $pendaftaran->created_at->format('d F Y') }}</td>
        </tr>
        <tr>
            <td>Gelombang</td>
            <td>:</td>
            <td>{{ $pendaftaran->gelombang->nama_gelombang ?? '-' }} ({{ $pendaftaran->gelombang->tahunAjaran->tahun_ajaran ?? '-' }})</td>
        </tr>
    </table>

    <h3 style="margin-top: 20px; border-bottom: 1px solid #ccc; padding-bottom: 5px;">A. Biodata Calon Siswa</h3>
    <table class="info-table">
        <tr>
            <td>Nama Lengkap</td>
            <td>:</td>
            <td>{{ $pendaftaran->biodataSiswa->nama_lengkap ?? $pendaftaran->user->name }}</td>
        </tr>
        <tr>
            <td>NISN</td>
            <td>:</td>
            <td>{{ $pendaftaran->biodataSiswa->nisn ?? '-' }}</td>
        </tr>
        <tr>
            <td>NIK</td>
            <td>:</td>
            <td>{{ $pendaftaran->biodataSiswa->nik ?? '-' }}</td>
        </tr>
        <tr>
            <td>Jenis Kelamin</td>
            <td>:</td>
            <td>{{ ($pendaftaran->biodataSiswa->jenis_kelamin ?? '') == 'L' ? 'Laki-Laki' : 'Perempuan' }}</td>
        </tr>
        <tr>
            <td>Tempat, Tgl Lahir</td>
            <td>:</td>
            <td>{{ $pendaftaran->biodataSiswa->tempat_lahir ?? '-' }}, {{ $pendaftaran->biodataSiswa->tanggal_lahir ? \Carbon\Carbon::parse($pendaftaran->biodataSiswa->tanggal_lahir)->format('d F Y') : '-' }}</td>
        </tr>
        <tr>
            <td>Agama</td>
            <td>:</td>
            <td>{{ $pendaftaran->biodataSiswa->agama ?? '-' }}</td>
        </tr>
        <tr>
            <td>Alamat Lengkap</td>
            <td>:</td>
            <td>
                {{ $pendaftaran->biodataSiswa->alamat ?? '-' }}<br>
                Desa: {{ $pendaftaran->biodataSiswa->desa ?? '-' }}, Kec: {{ $pendaftaran->biodataSiswa->kecamatan ?? '-' }}<br>
                Kab/Kota: {{ $pendaftaran->biodataSiswa->kota_kabupaten ?? '-' }}, Prov: {{ $pendaftaran->biodataSiswa->provinsi ?? '-' }}
            </td>
        </tr>
    </table>

    <h3 style="margin-top: 20px; border-bottom: 1px solid #ccc; padding-bottom: 5px;">B. Data Orang Tua</h3>
    <table class="info-table">
        <tr>
            <td>Nama Ayah</td>
            <td>:</td>
            <td>{{ $pendaftaran->dataOrangTua->nama_ayah ?? '-' }}</td>
        </tr>
        <tr>
            <td>No. HP Ayah</td>
            <td>:</td>
            <td>{{ $pendaftaran->dataOrangTua->no_hp_ayah ?? '-' }}</td>
        </tr>
        <tr>
            <td>Nama Ibu</td>
            <td>:</td>
            <td>{{ $pendaftaran->dataOrangTua->nama_ibu ?? '-' }}</td>
        </tr>
        <tr>
            <td>No. HP Ibu</td>
            <td>:</td>
            <td>{{ $pendaftaran->dataOrangTua->no_hp_ibu ?? '-' }}</td>
        </tr>
    </table>

    <h3 style="margin-top: 20px; border-bottom: 1px solid #ccc; padding-bottom: 5px;">C. Asal Sekolah</h3>
    <table class="info-table">
        <tr>
            <td>Nama Sekolah</td>
            <td>:</td>
            <td>{{ $pendaftaran->asalSekolah->nama_sekolah ?? '-' }}</td>
        </tr>
        <tr>
            <td>Tahun Lulus</td>
            <td>:</td>
            <td>{{ $pendaftaran->asalSekolah->tahun_lulus ?? '-' }}</td>
        </tr>
    </table>

    <div style="margin-top: 30px; border: 1px solid #000; padding: 10px;">
        <strong>Catatan Penting:</strong>
        <ol style="margin-bottom: 0;">
            <li>Bukti pendaftaran ini harap dicetak dan dibawa saat daftar ulang.</li>
            <li>Calon siswa wajib membawa dokumen asli (KK, Akta Kelahiran, Ijazah/SKL) untuk pencocokan data.</li>
            <li>Apabila ditemukan pemalsuan data, maka kelulusan dapat dibatalkan.</li>
        </ol>
    </div>

    <div class="footer">
        <table class="footer-table">
            <tr>
                <td></td>
                <td>
                    Nusantara, {{ date('d F Y') }}<br>
                    Panitia PPDB,
                    <div class="ttd-box"></div>
                    (_______________________)
                </td>
            </tr>
        </table>
    </div>

</body>
</html>
