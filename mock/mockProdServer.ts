import { createProdMockServer } from '@vue-kits/vite-plugin-mock/client'

import auth from './auth'

export function setupProdMockServer() {
  createProdMockServer([...auth])
}
