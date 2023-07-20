<template>
  <div>
    <div class="text-3xl font-bold underline">登录</div>
    <el-input v-model="value"></el-input>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
defineOptions({
  name: 'Login',
})
const value = ref()
</script>
