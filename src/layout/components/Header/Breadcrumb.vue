<template>
  <el-breadcrumb separator="/" class="flex items-center border-b border-neutral-200 px-4">
    <transition-group
      name="list"
      enter-active-class="list-enter-active animate__animated animate__fadeInDown"
      leave-active-class="list-leave-active animate__animated animate__fadeOutDown"
      move-class="list-move"
    >
      <el-breadcrumb-item v-if="showHome" key="/home" to="/home">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="breadcrumb in breadcrumbList" :key="breadcrumb.path" :to="breadcrumb.path">
        {{ breadcrumb.meta.title }}
      </el-breadcrumb-item>
    </transition-group>
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
@import 'animate.css';

.el-breadcrumb {
  height: $header-breadcrumb-height;
}

.list-enter-active {
  animation-duration: 0.3s;
  animation-delay: 0.3s;
}

.list-leave-active {
  animation-duration: 0.3s;
}
</style>
