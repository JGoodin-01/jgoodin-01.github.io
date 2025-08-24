import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Replace 'my-portfolio' with your repo name
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
})
