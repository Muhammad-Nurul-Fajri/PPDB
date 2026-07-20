{{-- @extends('layouts.app')

@section('title', 'Biodata Siswa')

@section('content') --}}

<div class="container-fluid py-4">

    <!-- Header -->
    <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
            <h3 class="fw-bold mb-1">
                <i class="bi bi-person-vcard-fill text-primary"></i>
                Biodata Calon Siswa
            </h3>
            <small class="text-muted">
                Lengkapi biodata dengan benar sesuai dokumen resmi.
            </small>
        </div>

        <a href="{{ route('dashboard') }}" class="btn btn-outline-secondary">
            <i class="bi bi-arrow-left"></i>
            Kembali
        </a>
    </div>

    <form action="" method="POST">

        <div class="card shadow-sm border-0">

            <div class="card-header bg-primary text-white">
                <h5 class="mb-0">
                    Data Pribadi
                </h5>
            </div>

            <div class="card-body">

                <div class="row">

                    <div class="col-md-6 mb-3">
                        <label class="form-label">Nomor Pendaftaran</label>

                        <input type="text"
                               class="form-control"
                               value="{{ $pendaftaran->no_pendaftaran ?? 'PPDB20260001' }}"
                               readonly>
                    </div>

                    <div class="col-md-6 mb-3">

                        <label class="form-label">NISN</label>

                        <input
                            type="text"
                            name="nisn"
                            class="form-control @error('nisn') is-invalid @enderror"
                            value="{{ old('nisn',$biodata->nisn ?? '') }}"
                            placeholder="Masukkan NISN">

                        @error('nisn')
                        <div class="invalid-feedback">
                            {{ $message }}
                        </div>
                        @enderror

                    </div>

                    <div class="col-md-6 mb-3">

                        <label class="form-label">NIK</label>

                        <input
                            type="text"
                            name="nik"
                            class="form-control @error('nik') is-invalid @enderror"
                            value="{{ old('nik',$biodata->nik ?? '') }}"
                            placeholder="Masukkan NIK">

                        @error('nik')
                        <div class="invalid-feedback">
                            {{ $message }}
                        </div>
                        @enderror

                    </div>

                    <div class="col-md-6 mb-3">

                        <label class="form-label">Nama Lengkap</label>

                        <input
                            type="text"
                            name="nama_lengkap"
                            class="form-control @error('nama_lengkap') is-invalid @enderror"
                            value="{{ old('nama_lengkap',$biodata->nama_lengkap ?? Auth::user()->name) }}">

                    </div>

                    <div class="col-md-6 mb-3">

                        <label class="form-label">Tempat Lahir</label>

                        <input
                            type="text"
                            name="tempat_lahir"
                            class="form-control"
                            value="{{ old('tempat_lahir',$biodata->tempat_lahir ?? '') }}">

                    </div>

                    <div class="col-md-6 mb-3">

                        <label class="form-label">Tanggal Lahir</label>

                        <input
                            type="date"
                            name="tanggal_lahir"
                            class="form-control"
                            value="{{ old('tanggal_lahir',$biodata->tanggal_lahir ?? '') }}">

                    </div>

                    <div class="col-md-6 mb-3">

                        <label class="form-label">Jenis Kelamin</label>

                        <select
                            name="jenis_kelamin"
                            class="form-select">

                            <option value="">-- Pilih --</option>

                            <option value="L"
                                {{ old('jenis_kelamin',$biodata->jenis_kelamin ?? '')=='L' ? 'selected':'' }}>
                                Laki-Laki
                            </option>

                            <option value="P"
                                {{ old('jenis_kelamin',$biodata->jenis_kelamin ?? '')=='P' ? 'selected':'' }}>
                                Perempuan
                            </option>

                        </select>

                    </div>

                    <div class="col-md-6 mb-3">

                        <label class="form-label">Agama</label>

                        <select
                            name="agama"
                            class="form-select">

                            <option>Islam</option>
                            <option>Kristen</option>
                            <option>Katolik</option>
                            <option>Hindu</option>
                            <option>Buddha</option>
                            <option>Konghucu</option>

                        </select>

                    </div>

                    <div class="col-md-6 mb-3">

                        <label class="form-label">No HP</label>

                        <input
                            type="text"
                            name="no_hp"
                            class="form-control"
                            value="{{ old('no_hp',$biodata->no_hp ?? '') }}">

                    </div>

                    <div class="col-md-12 mb-3">

                        <label class="form-label">Alamat Lengkap</label>

                        <textarea
                            name="alamat"
                            rows="3"
                            class="form-control">{{ old('alamat',$biodata->alamat ?? '') }}</textarea>

                    </div>

                    <div class="col-md-3 mb-3">

                        <label class="form-label">Desa/Kelurahan</label>

                        <input
                            type="text"
                            name="desa"
                            class="form-control"
                            value="{{ old('desa',$biodata->desa ?? '') }}">

                    </div>

                    <div class="col-md-3 mb-3">

                        <label class="form-label">Kecamatan</label>

                        <input
                            type="text"
                            name="kecamatan"
                            class="form-control"
                            value="{{ old('kecamatan',$biodata->kecamatan ?? '') }}">

                    </div>

                    <div class="col-md-3 mb-3">

                        <label class="form-label">Kabupaten/Kota</label>

                        <input
                            type="text"
                            name="kabupaten"
                            class="form-control"
                            value="{{ old('kabupaten',$biodata->kabupaten ?? '') }}">

                    </div>

                    <div class="col-md-3 mb-3">

                        <label class="form-label">Provinsi</label>

                        <input
                            type="text"
                            name="provinsi"
                            class="form-control"
                            value="{{ old('provinsi',$biodata->provinsi ?? '') }}">

                    </div>

                    <div class="col-md-3 mb-3">

                        <label class="form-label">Kode Pos</label>

                        <input
                            type="text"
                            name="kode_pos"
                            class="form-control"
                            value="{{ old('kode_pos',$biodata->kode_pos ?? '') }}">

                    </div>

                </div>

            </div>

            <div class="card-footer bg-light">

                <div class="d-flex justify-content-end">

                    <button class="btn btn-primary px-4">

                        <i class="bi bi-save"></i>

                        Simpan Biodata

                    </button>

                </div>

            </div>

        </div>

    </form>

</div>

{{-- @endsection --}}