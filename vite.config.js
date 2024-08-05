import { defineConfig } from 'vite'
import viteCompression from 'vite-plugin-compression'
import { visualizer } from 'rollup-plugin-visualizer'
import mime from 'mime-types'

export default defineConfig({
  plugins: [
    viteCompression(),  // Compression des fichiers
    visualizer(),       // Analyse des bundles
    {
      name: 'configure-mime',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url.endsWith('.css')) {
            res.setHeader('Content-Type', mime.lookup('css'));
          }
          next();
        });
      },
    },
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
