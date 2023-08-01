export type loginParam = {
  account: string
  password: string
}

export type loginResponse = {
  token: string
  refreshToken: string
  expires: number
}
