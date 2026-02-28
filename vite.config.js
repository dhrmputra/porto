import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
    plugins: [laravel({
        input: ['resources/css/app.css', 'resources/js/app.jsx'],
        refresh: true,
    }), tailwindcss(), cloudflare()],
    server: {
        watch: {
            ignored: ['**/storage/framework/views/**'],
        },
    },
});