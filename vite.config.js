import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    middlewareMode: false,
    // Fallback a index.html para rutas no encontradas (SPA)
    errorOverlay: true,
  },
  appType: 'spa',
})
