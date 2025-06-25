import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/BezzBrain-WebSite/',
  plugins: [vue()],
  build: {
    rollupOptions: {
      external: ['img/sfondo.png', 'img/about.png']
    }
  }
})

