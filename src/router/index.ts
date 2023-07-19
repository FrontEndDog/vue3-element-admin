import { createRouter, createWebHashHistory, RouterView } from 'vue-router'
import layout from '@/layout/index.vue'
import { h } from 'vue'
import { useHeaderTagStore } from '@/store/modules/headerTag'
//空布局
const emptyLayout = () => Promise.resolve(h(RouterView))

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
        meta: { title: '首页', affix: true },
      },
    ],
  },
  {
    path: '/',
    component: layout,
    children: [
      {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login/index.vue'),
        meta: { title: '登录' },
      },
    ],
  },

  {
    path: '/nested',
    component: layout,
    meta: { title: '路由嵌套' },
    redirect: '/nested/menu1',
    children: [
      {
        path: '/nested/menu1',
        component: emptyLayout,
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
            component: emptyLayout,
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
