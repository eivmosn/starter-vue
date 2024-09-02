import type { App as VueApp } from 'vue'
import { createApp as createVueApp } from 'vue'
import App from './App'
import { i18n } from './locales'

import 'uno.css'
import './themes'

function createApp() {
  return new Promise<VueApp<Element>>((resolve) => {
    const app = createVueApp(App)
    resolve(app)
  })
}

createApp()
  .then((app) => {
    return new Promise<VueApp<Element>>((resolve) => {
      app.use(i18n)
      resolve(app)
    })
  })
  .then((app) => {
    app.mount('#app')
  })
