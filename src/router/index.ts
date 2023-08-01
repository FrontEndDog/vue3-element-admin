import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'
import layout from '@/layout/index.vue'
import { useHeaderTagStore } from '@/store/modules/headerTag'

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

export default router
