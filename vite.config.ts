import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Vercel / local: `/` · GitHub Pages workflow sets GITHUB_PAGES=true → `/portfolio/`
const base = process.env.GITHUB_PAGES === 'true' ? '/portfolio/' : '/'

export default defineConfig({
  base,
  plugins: [
    react(),
    tailwindcss(),
  ],
})
