import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'
import layout from '@/layout/index.vue'
import { useHeaderTagStore, useAuthStore } from '@/store'

type Modules = Record<string, RouteRecordRaw | RouteRecordRaw[]>

const modules: Modules = import.meta.glob('./modules/*.ts', {
  eager: true,
  import: 'default',
})

const routers = Object.values(modules).reduce<RouteRecordRaw[]>((result, item) => {
  if (!item) return result
  if (Array.isArray(item)) {
    result.push(...item)
    return result
  } else {
    result.push(item)
    return result
  }
}, [])

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
        meta: { title: '首页', icon: 'ic:baseline-home' },
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: { title: '登录', hideInMenu: true, noAffix: true },
  },
  {
    path: '/',
    component: layout,
    children: [
      {
        path: '/map',
        name: 'Map',
        component: () => import('@/views/map/index.vue'),
        meta: { title: '简易地图', icon: 'ic:baseline-map' },
      },
    ],
  },
  ...routers,
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

router.beforeEach((to, from, next) => {
  //如果跳转的页面无需登录，则直接跳转
  if (to.meta.requiresAuth === false) {
    return next()
  }
  const authStore = useAuthStore()

  //已登录
  if (authStore.isLogin) {
    if (to.path === '/login') {
      return next('/')
    }
    return next()
  }

  //未登录
  if (to.path === '/login') {
    return next()
  }

  next({ path: '/login' })
})

export default router
