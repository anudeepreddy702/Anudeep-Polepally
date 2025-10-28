import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  root: '.', // Should point to where index.html is
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})