<template>
  <el-scrollbar class="bg-neutral-100" view-class="p-4 min-h-full flex flex-col items-stretch justify-start">
    <router-view v-slot="{ Component, route }">
      <transition
        name="fade"
        enter-active-class="fade-enter-active animate__animated animate__fadeInLeft"
        leave-active-class="fade-leave-active animate__animated animate__fadeOutRight"
      >
        <keep-alive include="Home">
          <component :is="Component" :key="route.path"></component>
        </keep-alive>
      </transition>
    </router-view>
  </el-scrollbar>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import 'animate.css';

.fade-enter-active {
  animation-duration: 0.3s;
  animation-delay: 0.3s;
}

.fade-leave-active {
  animation-duration: 0.3s;
}
</style>
