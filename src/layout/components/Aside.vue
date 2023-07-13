<template>
  <el-menu class="h-full" :default-active="route.path" router unique-opened>
    <el-scrollbar>
      <el-menu-item index="/login">
        <Icon icon="mdi-light:home"></Icon> <template #title>登录 </template>
      </el-menu-item>
      <el-menu-item index="/home"> <Icon icon="mdi-light:home"></Icon> <template #title>首页 </template> </el-menu-item>
    </el-scrollbar>
  </el-menu>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
