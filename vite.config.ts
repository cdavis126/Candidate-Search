import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  envDir: "./env",
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5173,
    strictPort: true,
    hmr: {
      clientPort: 443, // Ensures WebSocket connection works on Render
    },
    allowedHosts: ["candidate-search-2lzo.onrender.com"], //  Allow Render domain
  },
  preview: {
    host: "0.0.0.0",
    port: 5173,
    strictPort: true,
    allowedHosts: ["candidate-search-2lzo.onrender.com"], //  Allow Render domain
  },
});