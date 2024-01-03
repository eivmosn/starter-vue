import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import Jsx from '@vitejs/plugin-vue-jsx'
import { presetUno, transformerVariantGroup } from 'unocss'
import eivmosn from './src/eivmosn'

export default defineConfig({
  plugins: [
    Vue(),
    Jsx(),
    Unocss({
      presets: [
        eivmosn(),
        presetUno(),
      ],
      transformers: [
        transformerVariantGroup(),
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
