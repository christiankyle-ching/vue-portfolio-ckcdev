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
import { isInViewport, addClassIfInViewport } from "@/utils.js";
import _ from "lodash";

import "./firebase";

export default {
  mounted() {
    window.addEventListener(
      "scroll",
      _.throttle(() => {
        addClassIfInViewport(".card:not(.active)", "active");
      }, 150)
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
