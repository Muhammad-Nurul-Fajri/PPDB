import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css', 
                'resources/js/app.js'
            ],
            refresh: true,
        }),
        react(),
    ],
    build: {
        chunkSizeWarningLimit: 1000,
        rollupOptions: {
            output: {
                manualChunks: {
                    'vendor-react': ['react', 'react-dom'],
                    'vendor-framer': ['framer-motion'],
                    'vendor-icons': ['lucide-react'],
                }
            }
        }
    }
});
