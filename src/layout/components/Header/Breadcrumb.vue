<template>
  <el-breadcrumb separator="/" class="flex items-center border-b border-neutral-200 px-4">
    <el-breadcrumb-item v-if="showHome" to="/home">首页</el-breadcrumb-item>
    <el-breadcrumb-item v-for="breadcrumb in breadcrumbList" :key="breadcrumb.path" :to="breadcrumb.path">
      {{ breadcrumb.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

//面包屑列表
const breadcrumbList = computed(() => {
  return route.matched.filter((item) => item.meta.title)
})

//是否展示首页面包屑
const showHome = computed(() => {
  return breadcrumbList.value.length === 0 || breadcrumbList.value[0].path !== '/home'
})
</script>

<style lang="scss" scoped>
.el-breadcrumb {
  height: $header-breadcrumb-height;
}
</style>
