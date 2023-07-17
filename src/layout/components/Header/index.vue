<template>
  <el-breadcrumb separator="/" class="flex h-12 items-center">
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

const breadcrumbList = computed(() => {
  return route.matched.filter((item) => item.meta.title)
})

const showHome = computed(() => {
  return breadcrumbList.value.length === 0 || breadcrumbList.value[0].path !== '/home'
})
</script>
