import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves this as a project site at /follow/, so production assets
// need that base. Vercel serves from the domain root, so it needs '/'.
// The dev server keeps the root base.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? (process.env.VERCEL ? '/' : '/follow/') : '/',
  plugins: [react()],
  server: {
    host: true,
  },
}))
