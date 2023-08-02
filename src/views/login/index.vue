<template>
  <div class="flex h-full items-center justify-center bg-gradient-to-br from-white to-blue-300 pb-[20vh]">
    <div class="w-96 rounded-2xl bg-white px-5 pb-5 pt-8">
      <el-form size="large">
        <el-form-item>
          <div class="mx-auto text-center text-xl font-bold text-blue-500">vue3-element-admin</div>
        </el-form-item>
        <el-form-item>
          <el-input v-model="loginForm.account" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="loginForm.password" placeholder="密码" password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="mx-auto" type="primary" @click="sendMock"> 登录 </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRequest } from 'vue-hooks-plus'
import api from '@/api'
defineOptions({
  name: 'Login',
})

const loginForm = reactive({
  account: '',
  password: '',
})

const sendMock = () => {
  const { data } = useRequest(() => api.auth.login(loginForm))
  console.log(data)
}
</script>
