import process from 'node:process'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const {
    VITE_API_PREFIX,
    VITE_API_BASE_URL,
  } = loadEnv(mode, process.cwd())

  return {
    plugins: [
      Vue(),
      VueJsx(),
      UnoCSS(),
    ],
    test: {
      include: ['test/**/*.test.ts'],
      environment: 'jsdom',
    },
    server: {
      proxy: {
        [VITE_API_PREFIX]: VITE_API_BASE_URL,
      },
    },
  }
})
