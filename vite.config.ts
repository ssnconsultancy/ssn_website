import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // Make sure to import 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 1. Set the base path for GitHub Pages deployment
  // This ensures that all asset paths in the built HTML are prefixed correctly.
  base: '/ssn_website/',

  // 2. Set the root directory of your Vite project to the 'client' folder
  // This is where your index.html and src folder are located.
  root: 'client',

  build: {
    // 3. Set the output directory for the build
    // This will create a 'dist' folder at the project's root level (ssn_website/dist)
    // which you will then configure GitHub Pages to serve.
    outDir: '../dist',
    // Optional: If you want to ensure the dist directory is empty before each build
    emptyOutDir: true,
  },
  // If you have aliases, ensure they are resolved correctly from the new root.
  // For example, if you had an alias like '@': path.resolve(__dirname, 'src'),
  // and your vite.config.ts is at the project root, and 'src' is 'client/src',
  // it would become:
  resolve: {
    alias: {
      // This alias assumes 'src' is directly under the 'client' folder.
      '@': path.resolve(__dirname, 'client/src'),
      // Add other aliases if needed, e.g., for components:
      // '@/components': path.resolve(__dirname, 'client/src/components'),
    }
  }
})
