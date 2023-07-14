<template>
  <el-menu class="h-full" :default-active="route.path" router unique-opened>
    <div class="logo flex items-center justify-center bg-zinc-800 text-base font-bold text-white">
      <img class="mr-2 h-6 w-6" :src="logo" />
      vue3-element-admin
    </div>

    <el-scrollbar class="aside-scrollbar">
      <el-menu-item index="/login">
        <div class="menu-item flex h-10 w-full items-center">
          <Icon class="mr-1 text-2xl" icon="mdi-light:home"></Icon>
          <div>登录</div>
        </div>
      </el-menu-item>

      <el-menu-item index="/home">
        <div class="menu-item flex h-10 w-full items-center">
          <Icon class="mr-1 text-2xl" icon="mdi-light:home"></Icon>
          <div>首页</div>
        </div>
      </el-menu-item>
    </el-scrollbar>
  </el-menu>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import logo from '@/assets/vue.svg'
console.log(logo)

const route = useRoute()
</script>

<style lang="scss">
.logo {
  height: #{$header-height};
}

.aside-scrollbar {
  height: calc(100vh - #{$header-height});
}

.el-menu {
  --el-menu-bg-color: theme(colors.zinc.700); // 菜单背景色
  --el-menu-hover-bg-color: theme(colors.black / 20%); // 选项hover时的背景色
  --el-menu-text-color: theme(colors.white / 80%); /* 选项文字颜色 */
  --el-menu-active-color: theme(colors.blue.400); // 选项选中是文字颜色
  --el-menu-item-height: 48px; // 选项的高度
}
</style>
