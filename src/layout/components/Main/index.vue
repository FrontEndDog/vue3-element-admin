<template>
  <el-scrollbar class="bg-neutral-100" view-class="p-4">
    <router-view>
      <template #default="{ Component }">
        <!-- <keep-alive> -->
        <component :is="Component" />
        <!-- </keep-alive> -->
      </template>
    </router-view>
  </el-scrollbar>
</template>

<script setup lang="ts"></script>
