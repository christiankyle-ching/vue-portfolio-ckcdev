<template>
  <LoopingAnimator>
    <div class="flex gap-6 pr-6 items-center">
      <a
        v-for="image in project.images"
        :href="image.url"
        target="_blank"
        class="h-[50vh] w-[80vw] lg:w-[50vw] relative rounded-3xl border-4 border-_dark-teal overflow-hidden block cursor-zoom-in"
      >
        <img
          :src="image.url"
          alt=""
          class="h-full w-full object-cover"
          loading="lazy"
        />
        <div class="flex absolute left-0 top-0 w-full h-full bg-white -z-10">
          <div class="spinner m-auto"></div>
        </div>
      </a>
    </div>
  </LoopingAnimator>
</template>

<script>
import LoopingAnimator from "./LoopingAnimator.vue";
export default {
  props: {
    project: {
      required: true,
    },
  },
  components: { LoopingAnimator },
};
</script>
