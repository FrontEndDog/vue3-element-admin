export type Success<T> = {
  code: number
  data: T
  msg: string
}

export type Error<T> = {
  code: number
  data: T
  msg: string
}
export const success = <T>(data: T, msg = '请求成功') => {
  return {
    code: 0,
    data,
    msg,
  }
}
