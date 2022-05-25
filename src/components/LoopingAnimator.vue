<template>
  <div ref="container" class="whitespace-nowrap flex looping-animator">
    <div ref="elContainer" class="block">
      <slot></slot>
    </div>
  </div>
</template>

<script>
const MIN_MULTIPLIER = 1;
const MAX_MULTIPLIER = 10; // Important to prevent browser lockup

export default {
  props: {
    speed: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      element: null,
    };
  },
  mounted() {
    this.element = this.$refs.elContainer.firstElementChild;

    const parentWidth = this.$refs.container.parentElement.clientWidth;
    const elementWidth = this.$refs.elContainer.scrollWidth;

    let multiplier = Math.ceil((parentWidth / elementWidth) * 1.5);
    multiplier = multiplier < MIN_MULTIPLIER ? MIN_MULTIPLIER : multiplier;
    multiplier = multiplier > MAX_MULTIPLIER ? MAX_MULTIPLIER : multiplier;

    // Append copy
    for (let i = 0; i < multiplier; i++) {
      const copy = this.$refs.elContainer.cloneNode(true);
      this.$refs.container.appendChild(copy);
    }

    const totalDuration =
      (this.$refs.elContainer.clientWidth * 15) / this.speed;

    for (let el of this.$refs.container.children) {
      el.style.animationDuration = `${totalDuration}ms`;
    }
  },
};
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
