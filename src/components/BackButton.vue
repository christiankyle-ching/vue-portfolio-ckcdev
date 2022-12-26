<template>
  <button @click="goBack" class="button-back">
    <ArrowLeftIcon />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import ArrowLeftIcon from "./icons/ArrowLeftIcon.vue";

export default defineComponent({
  setup() {
    const router = useRouter();

    const goBack = () => {
      if (window.history.state.back) {
        router.go(-1);
      } else {
        router.replace({ name: "home" });
      }
    };

    return {
      goBack,
    };
  },
  components: { ArrowLeftIcon },
});
</script>
