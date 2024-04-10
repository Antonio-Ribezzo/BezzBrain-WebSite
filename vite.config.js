import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      // Includi la configurazione per copiare il file robots.txt
      output: {
        // Percorso di input del file robots.txt
        input: resolve(__dirname, 'robots.txt'),
        // Percorso di output della cartella dist
        output: {
          dir: 'dist',
          // Nome del file di output
          assetFileNames: '[name][extname]'
        }
      },
      // Mantieni le eventuali configurazioni esistenti
      external: ['img/sfondo.png', 'img/about.png']
    }
  }
})

