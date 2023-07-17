<template>
  <div class="flex h-10 w-full items-center">
    <Icon class="mr-1 text-2xl" icon="mdi-light:home"></Icon>
    <div>{{ routeItem.meta?.title }}</div>
  </div>
</template>

<script setup lang="ts">
import { RouteRecordRaw } from 'vue-router'
import { type PropType } from 'vue'
defineOptions({
  name: 'MenuItem',
})
defineProps({
  routeItem: {
    type: Object as PropType<RouteRecordRaw>,
    default: () => {
      return {}
    },
  },
})
</script>
