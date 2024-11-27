
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: 'https://matiasnv0.github.io/prototipo', 
  build: {
    outDir: 'dist'
  }
})
