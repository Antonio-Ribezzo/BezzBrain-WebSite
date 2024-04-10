import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import copy from 'vite-plugin-copy';

export default defineConfig({
  plugins: [
    vue(),
    copy({
      targets: [
        // Copia il file robots.txt nella cartella dist durante il build
        { src: 'robots.txt', dest: 'dist' }
      ]
    })
  ],
  build: {
    rollupOptions: {
      external: ['img/sfondo.png', 'img/about.png']
    }
  }
});
