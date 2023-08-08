export type MockResponse<T> = {
  code: number
  data: T
  msg: string
}

export const success = <T>(data: T, msg = '请求成功'): MockResponse<T> => {
  return {
    code: 0,
    data,
    msg,
  }
}

export const error = <T>(data: T, msg = '请求失败', code = -1): MockResponse<T> => {
  return {
    code,
    data,
    msg,
  }
}
