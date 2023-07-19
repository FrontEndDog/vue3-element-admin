<template>
  <el-container class="h-full">
    <el-aside><Aside></Aside></el-aside>
    <el-container>
      <el-header><Header></Header></el-header>
      <el-main><Main></Main></el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import Aside from './components/Aside/index.vue'
import Header from './components/Header/index.vue'
import Main from './components/Main/index.vue'
</script>

<style lang="scss" scoped>
.el-aside {
  --el-aside-width: #{$aside-width};
}

.el-header {
  --el-header-height: #{$header-height};
  --el-header-padding: 0;
}

.el-main {
  --el-main-padding: 0;
}
</style>
