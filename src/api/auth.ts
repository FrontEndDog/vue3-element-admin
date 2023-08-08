import { request } from '@/utils/request'
import { LoginParam, LoginResponse } from './auth.d'

export async function login(data: LoginParam) {
  return request<LoginResponse, LoginParam>('/login', {
    data,
    method: 'post',
  })
}
