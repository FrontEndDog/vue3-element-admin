<template>
  <el-menu class="h-full" :default-active="route.path" router>
    <div class="logo flex items-center justify-center bg-neutral-700 text-base font-bold text-white">
      <img class="mr-2 h-6 w-6" :src="logo" />
      vue3-element-admin
    </div>

    <el-scrollbar class="aside-scrollbar">
      <SubMenu v-for="(routeItem, index) in router.options.routes" :key="index" :route-item="routeItem"></SubMenu>
    </el-scrollbar>
  </el-menu>
</template>
<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import logo from '@/assets/vue.svg'
import SubMenu from './SubMenu.vue'
const route = useRoute()
const router = useRouter()
</script>

<style lang="scss">
.logo {
  height: $aside-logo-height;
}

.aside-scrollbar {
  height: calc(100vh - $aside-logo-height);
}

.el-menu {
  --el-menu-bg-color: theme(colors.neutral.700); // 菜单背景色
  --el-menu-hover-bg-color: theme(colors.black / 20%); // 选项hover时的背景色
  --el-menu-text-color: theme(colors.white / 80%); /* 选项文字颜色 */
  --el-menu-active-color: theme(colors.blue.500); // 选项选中是文字颜色
  --el-menu-item-height: 48px; // 一个菜单的高度
}

.el-sub-menu .el-menu {
  --el-menu-bg-color: theme(colors.neutral.800); // 子菜单背景色
}
</style>
