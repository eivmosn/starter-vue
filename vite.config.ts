import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    VueRouter(),
    Vue(),
    UnoCSS(),
  ],
  test: {
    include: ['test/**/*.test.ts'],
    environment: 'jsdom',
  },
})
