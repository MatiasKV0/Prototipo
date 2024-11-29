
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: 'https://matiaskv0.github.io/Prototipo/', 
  build: {
    outDir: 'dist'
  }
})
