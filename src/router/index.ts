import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      meta: {
        auth: true,
      },
      component: () => import('../pages/index.vue'),
    },
  ],
})

export { router }
