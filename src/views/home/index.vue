<template>
  <div>
    <div>首页</div>
    <el-input v-model="value"></el-input>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
defineOptions({
  name: 'Home',
})
const value = ref()
</script>
