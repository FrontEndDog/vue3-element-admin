<!-- 图标集 https://icon-sets.iconify.design/ -->
<template>
  <Icon :icon="icon" :style="{ color }" />
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineOptions({
  name: 'Icon',
})

defineProps({
  icon: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: '',
  },
})
</script>
