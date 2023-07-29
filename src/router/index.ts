import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'
import layout from '@/layout/index.vue'
import { useHeaderTagStore } from '@/store/modules/headerTag'

type Modules = Record<string, { default: RouteRecordRaw | RouteRecordRaw[] }>

const modules: Modules = import.meta.glob('./modules/*.ts', {
  eager: true,
})

const routers = Object.values(modules).reduce<RouteRecordRaw[]>((result, item) => {
  if (!item.default) return result
  if (Array.isArray(item.default)) {
    result.push(...item.default)
    return result
  } else {
    result.push(item.default)
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
