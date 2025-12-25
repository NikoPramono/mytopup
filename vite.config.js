import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // biar bisa diakses dari luar (Ngrok)
    port: 5173,
    strictPort: true,
    // izinkan host Ngrok dan localhost
    allowedHosts: [
      '0b2a3f2b3dfc.ngrok-free.app', // ganti sesuai host Ngrok mu
      'localhost',
      '127.0.0.1'
    ]
  }
})
