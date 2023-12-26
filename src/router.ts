import { createRouter, createWebHistory } from 'vue-router/auto'

const router =  createRouter({
    history: createWebHistory(),
})

router.beforeEach((to, from, next)=> {
    console.log(to);
    next()
})

export default router