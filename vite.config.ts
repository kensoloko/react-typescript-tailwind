import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// Vite configuration (https://vitejs.dev/config/)
export default defineConfig({
  // Configure plugins
  plugins: [
    // Enable React with SWC compiler for faster builds
    react(),
    // Add Tailwind CSS support
    tailwindcss()
  ],
  // Development server configuration
  server: {
    // Set development server port
    port: 3000,
    // Automatically open browser when server starts
    open: true,
  },
  // Path resolution configuration
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
