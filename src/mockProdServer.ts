import { createProdMockServer } from '@vue-kits/vite-plugin-mock/client'

import auth from '../mock/auth'

export function setupProdMockServer() {
  createProdMockServer([...auth])
}
