<template>
  <div ref="containerRef" class="whitespace-nowrap flex looping-animator">
    <div ref="elContainerRef" class="block">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, nextTick } from "vue";
import clamp from "lodash/clamp";

const MIN_MULTIPLIER: number = 1;
const MAX_MULTIPLIER: number = 10; // Important to prevent browser lockup

export default defineComponent({
  setup(props) {
    const elContainerRef = ref<HTMLElement | null>(null);
    const containerRef = ref<HTMLElement | null>(null);

    onMounted(() => {
      nextTick(() => {
        if (!!containerRef.value && !!elContainerRef.value) {
          const parentWidth = containerRef.value.parentElement!.clientWidth;
          const elementWidth = elContainerRef.value.scrollWidth;

          let multiplier = clamp(
            Math.ceil((parentWidth / elementWidth) * 1.5),
            MIN_MULTIPLIER,
            MAX_MULTIPLIER
          );

          // Append copy
          for (let i = 0; i < multiplier; i++) {
            const copy = elContainerRef.value.cloneNode(true);
            containerRef.value.appendChild(copy);
          }

          setTimeout(() => {
            const totalDuration =
              (elContainerRef.value!.clientWidth * 15) / props.speed;

            for (const el of Array.from(containerRef.value?.children ?? [])) {
              (<HTMLElement>el).style.animationDuration = `${totalDuration}ms`;
            }
          }, 100);
        }
      });
    });

    return {
      elContainerRef,
      containerRef,
    };
  },
  props: {
    speed: {
      type: Number,
      default: 1,
    },
  },
});
</script>

<style>
.looping-animator > * {
  animation: ltr linear infinite;
}

@keyframes ltr {
  0% {
    transform: translateX(0%) translate3d(0px, 0px, 0px);
  }

  100% {
    transform: translateX(-100%) translate3d(0px, 0px, 0px);
  }
}
</style>
