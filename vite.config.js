import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
//
// IMPORTANT: if you deploy to https://<username>.github.io/<repo-name>/
// (a normal GitHub Pages "project site"), `base` must be "/<repo-name>/".
// If you deploy to a custom domain, or to https://<username>.github.io/
// directly (a "user/organization site" repo literally named
// <username>.github.io), set base back to "/".
export default defineConfig({
  plugins: [react()],
  base: '/photo-portfolio/',
})
