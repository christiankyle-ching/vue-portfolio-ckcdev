<template>
  <button @click="goBack" class="button-back">
    <ArrowLeftIcon />
  </button>
</template>

<script>
import ArrowLeftIcon from "./icons/ArrowLeftIcon.vue";

export default {
  props: ["toPath"],
  components: { ArrowLeftIcon },
  methods: {
    goBack() {
      if (window.history.state.back) {
        this.$router.go(-1);
      } else {
        this.$router.replace({ name: "home" });
      }
    },
  },
};
</script>
