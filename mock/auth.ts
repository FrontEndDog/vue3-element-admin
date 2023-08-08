import { MockMethod } from '@vue-kits/vite-plugin-mock'
import { v4 } from 'uuid'
import { error, success } from './utils'

const mock: MockMethod[] = [
  {
    url: '/api/login',
    method: 'post',
    response: ({ body }) => {
      if (body.account !== 'admin' || body.password !== '123456') {
        return error(null, '账号或密码错误')
      }
      const token = v4()
      const refreshToken = v4()
      const tokenExpiresTime = new Date().getTime() + 2 * 60 * 60 * 1000
      return success({ token, refreshToken, tokenExpiresTime }, '登录成功')
    },
  },
]

export default mock
