<template>
  <span>
    <span>{{ currentText }}</span>
    <span ref="pointer" class="transition-opacity">{{ pointer }}</span>

    <!-- To get only the value -->
    <span ref="text" class="hidden">
      <slot></slot>
    </span>
  </span>
</template>

<script>
export default {
  props: {
    initDelay: {
      type: Number,
      default: 0,
    },
    minDelay: {
      type: Number,
      default: 25,
    },
    maxDelay: {
      type: Number,
      default: 50,
    },
    pointer: {
      type: String,
      default: "_",
    },
  },
  data() {
    return {
      currentText: "",
      text: "",
    };
  },
  mounted() {
    this.text = this.$refs.text.firstElementChild.innerText;

    this.$refs.pointer.innerText = "";
    this.$refs.pointer.style.opacity = "0";

    setTimeout(async () => {
      this.$refs.pointer.innerText = this.pointer;
      this.$refs.pointer.classList.add("animate-pulse-full");
      this.$refs.pointer.style.opacity = "1";

      for (let i = 0; i <= this.text.length; i++) {
        const rand = Math.floor(Math.random() * this.maxDelay) + this.minDelay;
        await new Promise((r) => setTimeout(r, rand));

        this.currentText = this.text.substring(0, i);
      }

      setTimeout(() => {
        this.$refs.pointer.classList.remove("animate-pulse-full");
        this.$refs.pointer.style.opacity = "0";
      }, 5000);
    }, this.initDelay);
  },
};
</script>

<style></style>
