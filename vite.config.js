import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Al ser un repositorio tipo username.github.io, la base debe ser '/'
  base: '/', 
})
