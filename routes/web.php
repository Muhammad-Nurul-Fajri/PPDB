<?php

use Illuminate\Support\Facades\Route;

Route::get('/Landing_controller', [App\Http\Controllers\Landing_controller::class, 'index']);
Route::get('/Pengumuman_controller', [App\Http\Controllers\Pengumuman_controller::class, 'index']);
Route::get('/Login_controller', [App\Http\Controllers\Login_controller::class, 'index']);
Route::get('/Registrasi_controller', [App\Http\Controllers\Registrasi_controller::class, 'index']);
Route::get('/');
Route::get('/');
