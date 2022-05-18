<template>
  <div ref="container" class="whitespace-nowrap flex">
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

      x: 0,
      currentTick: 0,
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

    // const fps = 60;
    // const tick = 1000 / fps;
    // const totalTicks = (totalDuration / 1000) * fps;
    // const xPerTick = 100 / totalTicks;

    // setInterval(() => {
    //   this.$refs.textContainer.style.transform = `translate(-${this.x}%, 0%) translate3d(0px,0px,0px)`;
    //   this.$refs.textContainer2.style.transform = `translate(-${this.x}%, 0%) translate3d(0px,0px,0px)`;

    //   this.x = this.currentTick * xPerTick;
    //   this.currentTick =
    //     this.currentTick > totalTicks ? 0 : this.currentTick + 1;
    // }, tick);
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
    transform: translateX(0%) translate3d(0px, 0px, 0px);
  }

  100% {
    transform: translateX(-100%) translate3d(0px, 0px, 0px);
  }
}
</style>
