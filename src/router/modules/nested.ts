import layout from '@/layout/index.vue'

export default {
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
}
