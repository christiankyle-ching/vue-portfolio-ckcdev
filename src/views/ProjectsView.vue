<template>
  <div>
    <BackButton />

    <div class="h-[35vh] flex">
      <h1 class="m-auto">Projects</h1>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-2">
      <div v-for="p in projects">
        <ProjectCard :project="p" />
      </div>
    </div>
  </div>
</template>

<script>
import { PROJECTS_SORTED } from "@/assets/projects";
import ArrowRightIcon from "../components/icons/ArrowRightIcon.vue";
import LoopingAnimator from "../components/LoopingAnimator.vue";
import ProjectCard from "../components/ProjectCard.vue";
import BackButton from "../components/BackButton.vue";

export default {
  data() {
    return {
      projects: PROJECTS_SORTED,
    };
  },
  components: { ArrowRightIcon, LoopingAnimator, ProjectCard, BackButton },
};
</script>
