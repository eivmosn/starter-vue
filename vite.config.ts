import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import VueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [
    VueJsx(),
    UnoCSS(),
  ],
  resolve: {
    alias: {
      src: '/src',
    },
  },
})
