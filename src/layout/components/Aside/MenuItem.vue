<template>
  <div class="flex h-10 w-full items-center">
    <Icon v-if="routeItem.meta?.icon || root" class="mr-1 text-2xl" :icon="routeItem.meta?.icon"></Icon>
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
  root: {
    type: Boolean,
    default: false,
  },
})
</script>
