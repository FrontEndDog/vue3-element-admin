<template>
  <el-container class="h-full">
    <el-aside>
      <Aside></Aside>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import Aside from './components/Aside.vue'
</script>

<style lang="scss" scoped>
.el-aside {
  --el-aside-width: #{$aside-width};
}
</style>
