import { createRouter, createWebHashHistory } from 'vue-router'
import layout from '@/layout/index.vue'

export const routes = [
  {
    path: '/',
    redirect: '/home',
    component: layout,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login/index.vue'),
      },
    ],
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
