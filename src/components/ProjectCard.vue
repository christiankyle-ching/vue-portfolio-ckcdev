<template>
  <RouterLink
    :to="{ name: 'project', params: { id: project.id } }"
    class="card h-full bg-red-200 text-_black card--bg-hover"
  >
    <header>
      <h5>{{ project.title }}</h5>
    </header>

    <div class="card__background flex relative">
      <img
        :src="project.images[1].url"
        alt=""
        class="absolute top-0 left-0 w-full h-full object-cover object-center opacity-30"
      />
      <LoopingAnimator class="m-auto">
        <span class="text-2xl lg:text-4xl">
          <b>{{ project.platform }}</b> | {{ project.stack }} |
          <b>{{ project.date_dev.getFullYear() }}</b> |&nbsp;
        </span>
      </LoopingAnimator>
    </div>

    <footer>
      <span class="flex justify-between items-center">
        <span>View</span>
        <ArrowRightIcon />
      </span>
    </footer>
  </RouterLink>
</template>

<script>
import LoopingAnimator from "./LoopingAnimator.vue";
import ArrowRightIcon from "./icons/ArrowRightIcon.vue";
export default {
  props: {
    project: {
      required: true,
    },
  },
  components: { LoopingAnimator, ArrowRightIcon },
};
</script>
