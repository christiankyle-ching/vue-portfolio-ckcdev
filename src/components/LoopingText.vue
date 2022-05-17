<template>
  <div ref="container" class="whitespace-nowrap flex gap-4">
    <span ref="textContainer" id="textContainer" class="block">
      <slot></slot>
    </span>
    <span ref="textContainer2" id="textContainer2" class="block"></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textEl: null,
      textElCopy: null,
    };
  },
  mounted() {
    this.textEl = this.$refs.textContainer.firstElementChild;
    this.textElCopy = this.textEl.cloneNode(true);

    // Append copy
    this.$refs.textContainer2.appendChild(this.textElCopy);

    const perLetterDuration = 270;
    const totalDuration = perLetterDuration * this.textEl.innerText.length;

    this.$refs.textContainer.style.animationDuration = `${totalDuration}ms`;
    this.$refs.textContainer2.style.animationDuration = `${totalDuration}ms`;
  },
};
</script>

<style scoped>
#textContainer,
#textContainer2 {
  animation: ltr linear infinite;
}

@keyframes ltr {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-100%);
  }
}
</style>
