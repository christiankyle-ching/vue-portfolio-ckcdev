<template>
  <div ref="container" class="whitespace-nowrap flex">
    <span ref="textContainer" id="textContainer" class="block">
      <slot></slot>
    </span>
    <span ref="textContainer2" id="textContainer2" class="block"></span>
    <span ref="textContainer3" id="textContainer2" class="block"></span>
  </div>
</template>

<script>
export default {
  props: {
    perLetterDuration: {
      type: Number,
      default: 270,
    },
  },
  data() {
    return {
      textEl: null,
      textEl2: null,
      textEl3: null,

      x: 0,
      currentTick: 0,
    };
  },
  mounted() {
    this.textEl = this.$refs.textContainer.firstElementChild;
    this.textEl2 = this.textEl.cloneNode(true);
    this.textEl3 = this.textEl.cloneNode(true);

    // Append copy
    this.$refs.textContainer2.appendChild(this.textEl2);
    this.$refs.textContainer3.appendChild(this.textEl3);

    const totalDuration = this.perLetterDuration * this.textEl.innerText.length;

    // Set Duration
    this.$refs.textContainer.style.animationDuration = `${totalDuration}ms`;
    this.$refs.textContainer2.style.animationDuration = `${totalDuration}ms`;
    this.$refs.textContainer3.style.animationDuration = `${totalDuration}ms`;
  },
};
</script>

<style scoped>
#textContainer,
#textContainer2,
#textContainer3 {
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
