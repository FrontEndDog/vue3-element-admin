export type LoginParam = {
  account: string
  password: string
}

export type LoginResponse = {
  token: string
  refreshToken: string
  tokenExpiresTime: number
}
