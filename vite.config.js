import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import githubPages from 'vite-plugin-github-pages'; 

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), githubPages()],
  base: '/my-vite-react-app/', // Adjust based on your deployment needs 
})
