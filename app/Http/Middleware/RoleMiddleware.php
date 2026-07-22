<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RoleMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     * @param  string  $role
     */
    public function handle(Request $request, Closure $next, string $role): Response
    {
        if (!$request->user() || $request->user()->role !== $role) {
            if ($request->user()) {
                // Redirect to the appropriate dashboard based on role
                return match ($request->user()->role) {
                    'admin' => redirect()->route('admin.dashboard'),
                    'siswa' => redirect()->route('siswa.dashboard'),
                    default => redirect()->route('login'),
                };
            }

            return redirect()->route('login');
        }

        return $next($request);
    }
}
