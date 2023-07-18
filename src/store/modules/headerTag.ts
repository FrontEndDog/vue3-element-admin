import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useHeaderTagStore = defineStore('headerTag', () => {
  const tags = reactive([])
  return { tags }
})
