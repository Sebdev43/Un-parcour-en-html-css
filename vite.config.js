import { defineConfig } from 'vite'
import viteCompression from 'vite-plugin-compression'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    viteCompression(),  // Compression des fichiers
    visualizer()        // Analyse des bundles
  ],
  build: {
    terserOptions: {
      compress: {
        drop_console: true, // Supprime les consoles.log en production
      },
    },
    cssCodeSplit: true,   // Séparation des fichiers CSS
    sourcemap: false,     // Génération des sourcemaps
  }
})
