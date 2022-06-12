<template>
  <div>
    <BackButton />

    <div class="h-[35vh] flex">
      <h1 class="m-auto scale-on-scroll">Projects</h1>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-2">
      <div v-for="p in projects">
        <ProjectCard :project="p" />
      </div>

      <a
        href="https://github.com/christiankyle-ching?tab=repositories"
        target="_blank"
        class="card h-full bg-_dark-red mt-2"
        :class="{ 'col-span-full': projects.length % 2 == 0 }"
      >
        <div class="m-auto">
          <span class="flex justify-between items-center gap-4">
            <h5>View All Repositories at Github</h5>
            <ArrowRightIcon />
          </span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import { PROJECTS, ACTIVE_PROJECTS } from "@/assets/projects";
import ArrowRightIcon from "../components/icons/ArrowRightIcon.vue";
import LoopingAnimator from "../components/LoopingAnimator.vue";
import ProjectCard from "../components/ProjectCard.vue";
import BackButton from "../components/BackButton.vue";

export default {
  data() {
    return {
      projects: ACTIVE_PROJECTS,
    };
  },
  components: { ArrowRightIcon, LoopingAnimator, ProjectCard, BackButton },
};
</script>
