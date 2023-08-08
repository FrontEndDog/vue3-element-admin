import { LoginResponse } from '@/api/auth.d'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  //token
  const token = ref(localStorage.getItem('token') || '')

  //用于刷新token的token
  const refreshToken = ref(localStorage.getItem('refreshToken') || '')

  //token过期时间
  const tokenExpiresTime = ref(parseInt(localStorage.getItem('tokenExpiresTime') || '0'))

  //是否登录过期 -60秒是防止临近过期前去请求
  const isExpires = computed(
    () => !tokenExpiresTime.value || tokenExpiresTime.value <= new Date().getTime() - 60 * 1000,
  )

  //是否已登录
  const isLogin = computed(() => !!token.value && !isExpires.value)

  //登录成功后调用，将数据存入localStorage
  const loginSuccess = (data?: LoginResponse) => {
    if (!data) return
    token.value = data?.token
    refreshToken.value = data?.refreshToken
    tokenExpiresTime.value = data?.tokenExpiresTime
    Object.entries(data).forEach(([key, value]) => {
      localStorage.setItem(key, value as string)
    })
  }

  return { loginSuccess, isLogin }
})
