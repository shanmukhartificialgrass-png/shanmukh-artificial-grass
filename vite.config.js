import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Enable minification for better performance (using default esbuild)
    minify: 'esbuild',
    // Enable source maps for debugging (optional)
    sourcemap: false,
    // Optimize chunk size
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'icons': ['lucide-react'],
          'email': ['@emailjs/browser']
        }
      }
    }
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'lucide-react', '@emailjs/browser']
  }
})
