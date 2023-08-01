import { MockMethod } from '@vue-kits/vite-plugin-mock'
import { v4 } from 'uuid'
import { success } from './utils'

const mock: MockMethod[] = [
  {
    url: '/login',
    method: 'post',
    response: () => {
      const token = v4()
      const refreshToken = v4()
      const expires = new Date().getTime() + 2 * 60 * 60 * 1000
      return success({ token, refreshToken, expires }, '登录成功')
    },
  },
]

export default mock
