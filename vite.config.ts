import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    Vue(),
    VueJsx(),
    UnoCSS(),
  ],
  test: {
    include: ['test/**/*.test.ts'],
    environment: 'jsdom',
  },
})
