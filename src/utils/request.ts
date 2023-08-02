import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { Success, Error } from 'mock/utils'

import api from '@/api'
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
  const response = await axiosInstance<unknown, AxiosResponse<Success<T> | Error<T>, D>, D>({
    url,
    ...options,
  })

  return response.data.data
}
export { axiosInstance, request, api }
