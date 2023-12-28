import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import Jsx from '@vitejs/plugin-vue-jsx'
import VueRouter from 'unplugin-vue-router/vite'

export default defineConfig({
    plugins: [
        Vue(),
        Jsx(),
        Unocss()
    ],
})