import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.', // default, jangan public
  publicDir: 'public', // default, tidak usah diubah
})
