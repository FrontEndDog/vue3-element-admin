import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { RouteLocationNormalized } from 'vue-router'
export const useHeaderTagStore = defineStore('headerTag', () => {
  const tags: RouteLocationNormalized[] = reactive([])
  //添加标签页
  const add = (tag: RouteLocationNormalized) => {
    if (tag.meta.noAffix) return
    if (tags.some((item) => item.path === tag.path)) return
    tags.push(tag)
  }
  //删除标签页
  const del = (tag: RouteLocationNormalized) => {
    const index = tags.findIndex((item) => item.path === tag.path)
    tags.splice(index, 1)
  }
  return { tags, add, del }
})
