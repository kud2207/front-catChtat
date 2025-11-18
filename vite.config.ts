// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),        // ← ajoutez cette ligne
    tailwindcss(),
  ],

  // Proxy pour le développement local (optionnel mais recommandé)
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },


  preview: {
    host: '0.0.0.0',
    port: parseInt(process.env.PORT || '4173'),
    allowedHosts: [
      '.onrender.com',          // ← permet tous les sous-domaines Render
    ],
  },
});