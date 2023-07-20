<template>
  <template v-if="canShowRouteItem">
    <el-menu-item v-if="routeItemShowChildren.length === 0 && routeItem.meta?.title" :index="routeItem.path">
      <MenuItem :route-item="routeItem" :root="root"></MenuItem>
    </el-menu-item>

    <SubMenu v-if="routeItemShowChildren.length === 1" :route-item="routeItemShowChildren[0]" :root="root"></SubMenu>

    <el-sub-menu v-if="routeItemShowChildren.length > 1" :index="routeItem.path">
      <template #title>
        <MenuItem :route-item="routeItem" :root="false"></MenuItem>
      </template>
      <SubMenu v-for="(item, index) in routeItem.children" :key="index" :route-item="item" :root="false"></SubMenu>
    </el-sub-menu>
  </template>
</template>

<script setup lang="ts">
import { RouteRecordRaw } from 'vue-router'
import { computed, type PropType } from 'vue'
import MenuItem from './MenuItem.vue'

defineOptions({
  name: 'SubMenu',
})
const props = defineProps({
  routeItem: {
    type: Object as PropType<RouteRecordRaw>,
    default: () => {
      return {}
    },
  },
  //是否是一级菜单
  root: {
    type: Boolean,
    default: true,
  },
})

//当前路由是否可见
const canShowRouteItem = computed(() => {
  return (routeItemShowChildren.value.length || props.routeItem.meta?.title) && !props.routeItem.meta?.hidden
})

//当前路由下可见的子路由
const routeItemShowChildren = computed(() => {
  if (!props.routeItem.children) return []
  return props.routeItem.children.filter((item) => {
    return !item.meta?.hidden && item.meta?.title
  })
})
</script>
