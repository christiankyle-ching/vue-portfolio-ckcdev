<template>
  <div class="p-2 overflow-hidden w-screen max-w-[100%] relative">
    <RouterView v-slot="{ Component, route }">
      <transition name="route">
        <component :is="Component" mode="out-in" :key="route.path" />
      </transition>
    </RouterView>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, watch } from "vue";
import { addClassIfInViewport, animateOnScroll } from "./utils";
import throttle from "lodash/throttle";
import { useRoute } from "vue-router";
import "./firebase";

export type EventListener = (this: Window, ev: Event) => void;

export default defineComponent({
  setup() {
    const route = useRoute();

    onMounted(() => {
      // Show Cards on Scroll
      window.addEventListener(
        "scroll",
        throttle(() => {
          addClassIfInViewport(".card:not(.active)", "active");
        }, 150) as EventListener
      );

      // Scale Elements on Scroll
      window.addEventListener(
        "scroll",
        throttle(() => {
          animateOnScroll(".scale-on-scroll", {
            transformScale: true,
            scrollThreshold: 75,
          });
        }, 16.67) as EventListener
      );
    });

    watch([route], () => {
      setTimeout(() => {
        addClassIfInViewport(".card:not(.active)", "active");
      }, 1000);
    });
  },
});
</script>

<style>
@import "@/assets/base.css";
</style>
