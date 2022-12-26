<template>
  <div>
    <Swiper
      @swiper="onInitSwiper"
      :slides-per-view="1"
      :breakpoints="{
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
          navigation: {
            enabled: true,
          },
        },
      }"
      :space-between="30"
      :free-mode="{ enabled: true, sticky: false, momentum: true }"
      :autoplay="{
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }"
      pagination
      navigation
      loop
      class="h-[50vh] w-full"
    >
      <SwiperSlide v-for="image in project.media">
        <a
          :href="image.url"
          target="_blank"
          class="h-full w-full flex cursor-zoom-in"
        >
          <img
            :src="image.url"
            alt=""
            class="w-full h-full m-auto object-cover bg-white rounded-2xl"
            lazy="true"
          />
        </a>
        <div class="spinner__container !bg-transparent">
          <div class="spinner !border-_dark-teal"></div>
        </div>
      </SwiperSlide>
    </Swiper>

    <div class="flex mt-2 text-xs flex-col md:flex-row">
      <p class="flex-grow basis-0 text-center md:text-right">
        <span class="md:hidden">Swipe to see more</span>
        <span class="hidden md:inline">Use the arrow buttons</span>
      </p>
      <span class="mx-4 text-center hidden md:inline"> | </span>
      <p class="flex-grow basis-0 text-center md:text-left">
        Click to open full image
      </p>
    </div>
  </div>
</template>

<style>
.swiper-pagination-bullet {
  @apply !bg-slate-50;
}

/* Custom Swiper Next and Prev Buttons */
.swiper-button-prev,
.swiper-button-next {
  @apply w-12 h-12  rounded-full flex shadow-md;
  @apply text-slate-50 hover:text-_teal  bg-_teal hover:bg-slate-50 transition-colors;

  /* Manually hide buttons on mobile */
  @apply hidden md:flex;
}

.swiper-button-prev {
  @apply pr-1;
}

.swiper-button-next {
  @apply pl-1;
}

.swiper-button-prev::after,
.swiper-button-next::after {
  @apply drop-shadow-md text-2xl font-black m-auto;
}
</style>

<script lang="ts">
import { defineComponent, type PropType, nextTick } from "vue";
import LoopingAnimator from "./LoopingAnimator.vue";
// Swiper imports
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Pagination, FreeMode, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import type { Project } from "../assets/projects";

// Swiper Modules
SwiperCore.use([Pagination, FreeMode, Autoplay, Navigation]);

export default defineComponent({
  props: {
    project: {
      type: Object as PropType<Project>,
      required: true,
    },
  },
  components: {
    LoopingAnimator,

    SwiperSlide,
    Swiper,
  },
  mounted() {},
  methods: {
    onInitSwiper(e: SwiperCore) {
      e.navigation.update();
    },
  },
});
</script>
