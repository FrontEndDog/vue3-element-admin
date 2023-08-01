import { request } from '@/utils/request'
import { loginParam, loginResponse } from './auth.d'

export async function login(data: loginParam) {
  return request<loginResponse, loginParam>('/login', {
    data,
    method: 'post',
  })
}
