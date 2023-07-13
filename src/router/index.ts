import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/home', component: () => import('@/views/home/index.vue') },
  { path: '/login', component: () => import('@/views/login/index.vue') },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
