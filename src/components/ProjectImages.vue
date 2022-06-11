<template>
  <div>
    <Swiper
      :slides-per-view="1"
      :breakpoints="{
        768: {
          slidesPerView: 2,
        },
      }"
      :space-between="30"
      :pagination="true"
      :free-mode="{ enabled: true, sticky: false, momentum: true }"
      :autoplay="{
        enabled: true,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }"
      :loop="true"
      class="h-[50vh] w-full"
    >
      <SwiperSlide v-for="image in project.images">
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

    <div class="flex mt-2 text-sm flex-col md:flex-row">
      <p class="flex-grow basis-0 text-center md:text-right">
        Swipe to see more
      </p>
      <span class="mx-4 text-center">or</span>
      <p class="flex-grow basis-0 text-center md:text-left">
        Click to open full image
      </p>
    </div>
  </div>
</template>

<script>
import LoopingAnimator from "./LoopingAnimator.vue";

import { SwiperSlide, Swiper } from "swiper/vue";
import SwiperCore, { Pagination, FreeMode, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

// Swiper Modules
SwiperCore.use([Pagination, FreeMode, Autoplay]);

export default {
  props: {
    project: {
      required: true,
    },
  },
  components: {
    LoopingAnimator,

    SwiperSlide,
    Swiper,
  },
};
</script>

<style>
.swiper-pagination-bullet-active {
  @apply !bg-_dark-teal;
}
</style>
