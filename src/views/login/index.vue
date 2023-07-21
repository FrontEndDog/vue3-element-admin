<template>
  <div class="flex h-full items-center justify-center bg-gradient-to-b from-white to-blue-300 pb-[20vh]">
    <div class="w-96 rounded-2xl bg-white px-5 pb-5 pt-8">
      <el-form size="large">
        <el-form-item>
          <div class="mx-auto text-center text-xl font-bold text-blue-500">vue3-element-admin</div>
        </el-form-item>
        <el-form-item>
          <el-input v-model="account" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="password" placeholder="密码" password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="mx-auto" type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineOptions({
  name: 'Login',
})
const account = ref('')
const password = ref('')
</script>
