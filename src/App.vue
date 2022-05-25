<script setup></script>

<template>
  <div class="px-2">
    <RouterView v-slot="{ Component, route }">
      <transition name="route">
        <component :is="Component" mode="out-in" />
      </transition>
    </RouterView>
  </div>
</template>

<style>
@import "@/assets/base.css";
</style>
