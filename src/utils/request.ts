import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { MockResponse } from 'mock/utils'
import api from '@/api'
import { ElMessage } from 'element-plus'

const axiosInstance = axios.create({
  baseURL: '/api',
  timeout: 10000,
})

axiosInstance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

axiosInstance.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
  (error) => {
    return Promise.reject(error)
  },
)

const request = async <T = unknown, D = unknown>(url: string, options?: AxiosRequestConfig<D>) => {
  const { data } = await axiosInstance<unknown, AxiosResponse<MockResponse<T>, D>, D>({
    url,
    ...options,
  })

  if (data.code !== 0) {
    data.msg && ElMessage.error(data.msg)
    return Promise.reject(data)
  }

  return data.data
}

export { axiosInstance, request, api }
