<template>
  <div class="p-2 overflow-hidden w-screen max-w-[100%] relative">
    <RouterView v-slot="{ Component, route }">
      <transition name="route">
        <component :is="Component" mode="out-in" :key="route.path" />
      </transition>
    </RouterView>
  </div>
</template>

<script>
import { isInViewport, addClassIfInViewport, animateOnScroll } from "./utils";
import _ from "lodash";

import "./firebase";

export default {
  mounted() {
    // Show Cards on Scroll
    window.addEventListener(
      "scroll",
      _.throttle(() => {
        addClassIfInViewport(".card:not(.active)", "active");
      }, 150)
    );

    // Scale Elements on Scroll
    const threshold = 75;
    window.addEventListener(
      "scroll",
      _.throttle(() => {
        animateOnScroll(".scale-on-scroll", {
          transformScale: true,
          scrollThreshold: 75,
        });
      }, 16.67)
    );
  },
  watch: {
    $route(to, from) {
      setTimeout(() => {
        addClassIfInViewport(".card:not(.active)", "active");
      }, 1000);
    },
  },
};
</script>

<style>
@import "@/assets/base.css";
</style>
