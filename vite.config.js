import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves the site from https://behaviourlens.github.io/cs491-project-website/.
  // If the repository is renamed or a custom domain is used, update this value.
  base: '/cs491-project-website/',
})
