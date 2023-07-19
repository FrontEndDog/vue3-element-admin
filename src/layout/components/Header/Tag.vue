<template>
  <el-scrollbar
    ref="scrollbarRef"
    wrap-class="scroll-smooth"
    view-class="inline-flex h-full items-center px-4"
    @wheel="handleScroll"
  >
    <el-tag
      v-for="tag in tags"
      :key="tag.path"
      class="ml-1 cursor-pointer first:ml-0"
      :effect="route.path === tag.path ? 'dark' : 'plain'"
      :closable="!tag.meta.affix && tags.length !== 1"
      @click="handleClick(tag)"
      @close="handleClose(tag)"
    >
      {{ tag.meta.title }}
    </el-tag>
  </el-scrollbar>
</template>

<script setup lang="ts">
import { useHeaderTagStore } from '@/store/modules/headerTag'
import { ref, computed } from 'vue'
import { useRouter, useRoute, RouteLocationNormalized } from 'vue-router'
const route = useRoute()
const router = useRouter()
const headerTagStore = useHeaderTagStore()
const tags = computed(() => headerTagStore.tags)
const scrollbarRef = ref()

//横向滚动
const handleScroll = (e: WheelEvent) => {
  scrollbarRef.value.setScrollLeft(scrollbarRef.value.wrapRef.scrollLeft + e.deltaY * 10)
}
//标签点击
const handleClick = (tag: RouteLocationNormalized) => {
  router.push(tag.path)
}
//标签关闭
const handleClose = (tag: RouteLocationNormalized) => {
  headerTagStore.del(tag)
  //如果关闭的是当前标签，则跳转到最后一个标签页面
  if (tag.path === route.path) {
    const lastTag = tags.value[tags.value.length - 1]
    router.push(lastTag.path)
  }
}
</script>

<style lang="scss" scoped>
.el-scrollbar {
  height: $header-tag-height;
}
</style>
