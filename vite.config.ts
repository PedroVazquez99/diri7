import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(() => {
  return {
    base: '/diri7/', // Ajusta la base según la variable
    build: {
      outDir: 'docs',
    },
    plugins: [react()],
  }
})