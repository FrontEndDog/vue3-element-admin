import { createRouter, createWebHashHistory } from 'vue-router'
import layout from '@/layout/index.vue'
import { useHeaderTagStore } from '@/store/modules/headerTag'

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
        meta: { title: '首页', icon: 'ic:baseline-home', affix: true },
      },
    ],
  },

  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: { title: '登录', hidden: true },
  },

  {
    path: '/nested',
    component: layout,
    meta: { title: '路由嵌套', icon: 'ic:baseline-sort' },
    redirect: '/nested/menu1',
    children: [
      {
        path: '/nested/menu1',
        meta: { title: '菜单1' },
        redirect: '/nested/menu1/menu1-1',
        children: [
          {
            path: '/nested/menu1/menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1.vue'),
            meta: { title: '菜单1-1' },
          },
          {
            path: '/nested/menu1/menu1-2',
            meta: { title: '菜单1-2' },
            redirect: '/nested/menu1/menu1-2/menu1-2-1',
            children: [
              {
                path: '/nested/menu1/menu1-2/menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1.vue'),
                meta: { title: '菜单1-2-1' },
              },
              {
                path: '/nested/menu1/menu1-2/menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2.vue'),
                meta: { title: '菜单1-2-2' },
              },
            ],
          },
          {
            path: '/nested/menu1/menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3.vue'),
            meta: { title: '菜单1-3' },
          },
        ],
      },
      {
        path: '/nested/menu2',
        component: () => import('@/views/nested/menu2.vue'),
        meta: { title: '菜单2' },
      },
    ],
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const headerTagStore = useHeaderTagStore()
  headerTagStore.add(to)
  next()
})

export default router
