import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'
import layout from '@/layout/index.vue'
import { useHeaderTagStore } from '@/store/modules/headerTag'

const modules: Record<string, { default: RouteRecordRaw }> = import.meta.glob('./modules/*.ts', { eager: true })
const routers = Object.values(modules).map((item) => item.default)

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
  ...routers,
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: { title: '登录', hidden: true },
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
