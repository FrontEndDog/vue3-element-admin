import { createRouter, createWebHashHistory } from 'vue-router'
import layout from '@/layout/index.vue'

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () => layout,
    children: [
      { path: '/home', component: () => import('@/views/home/index.vue') },
      { path: '/login', component: () => import('@/views/login/index.vue') },
    ],
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
