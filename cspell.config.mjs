// @ts-check
import { defineConfig } from 'cspell'

export default defineConfig({
  version: '0.2',
  language: 'en',
  words: [
    'vueuse',
  ],
  ignorePaths: [
    'node_modules/**',
    'public/**',
  ],
  files: [
    'src/**/*.{vue,ts,tsx,css}',
  ],
})
