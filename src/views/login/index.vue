<template>
  <div class="flex h-full items-center justify-center bg-gradient-to-br from-white to-blue-300 pb-[20vh]">
    <div class="w-96 rounded-2xl bg-white px-5 pb-5 pt-8">
      <el-form ref="loginFromRef" size="large" :rules="rules" :model="loginModel">
        <el-form-item>
          <div class="mx-auto text-center text-xl font-bold text-blue-500">vue3-element-admin</div>
        </el-form-item>
        <el-form-item prop="account">
          <el-input v-model="loginModel.account" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginModel.password" placeholder="密码" password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="mx-auto" type="primary" @click="sendMock"> 登录 </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRequest } from 'vue-hooks-plus'
import api from '@/api'

defineOptions({
  name: 'Login',
})

const rules = {
  account: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
  password: [{ required: true, message: '密码不能为空', trigger: 'blur' }],
}

const loginModel = reactive({
  account: '',
  password: '',
})

const { data, runAsync: handelLogin } = useRequest(() => api.auth.login(loginModel), { manual: true })

const loginFromRef = ref()
const sendMock = async () => {
  await handelLogin()
  // await loginFromRef.value
  console.log(data)
}
</script>
