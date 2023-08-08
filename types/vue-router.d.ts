import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    title?: string //标题
    icon?: string //图标
    requiresAuth?: boolean //是否需要登录
    hideInMenu?: boolean //在侧边栏中是否隐藏
    noAffix?: boolean //是否不显示在标签页中
  }
  interface RouteRecordRaw {}
}
