import type { App as VueApp } from 'vue'
import { createApp as createVueApp } from 'vue'
import App from './App'

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
      resolve(app)
    })
  })
  .then((app) => {
    app.mount('#app')
  })
