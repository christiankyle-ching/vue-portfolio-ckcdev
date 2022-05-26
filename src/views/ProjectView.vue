<template>
  <div v-if="project" class="grid grid-cols-1 lg:grid-cols-2 gap-2">
    <div class="card bg-_dark-teal text-white active col-span-full">
      <header>
        <h1 class="text-center">{{ project.title }}</h1>
      </header>
      <LoopingAnimator v-if="showImages">
        <div class="flex gap-6 pr-6 items-center">
          <div
            v-for="image in project.images"
            class="h-[50vh] w-[80vw] lg:w-[50vw]"
          >
            <img
              :src="image.url"
              alt=""
              class="h-full w-full object-cover rounded-3xl border-4 border-_teal"
            />
          </div>
        </div>
      </LoopingAnimator>
      <div v-else>
        <video
          :src="project.videos[0].url"
          class="h-[50vh] m-auto rounded-3xl bg-_teal border-4"
          autoplay
          muted
          loop
        ></video>
        <!-- <a href="#more-images" class="flex justify-between mt-4">
          <span>More Images</span>
          <ArrowDownIcon />
        </a> -->
      </div>
      <footer>
        <span class="text-center">
          Built With
          <strong>{{ project.stack }}</strong>
          for
          <strong>{{ project.platform }}.</strong>
        </span>
      </footer>
    </div>

    <section id="description" class="card bg-_dark-teal text-white">
      <div>
        <h2>Description</h2>
        <p v-for="p in project.descriptionParagraphs" class="mt-2">
          {{ p }}
        </p>
      </div>
    </section>

    <section id="features" class="card bg-_dark-teal text-white">
      <div>
        <h2>Features</h2>
        <ul class="list-disc pl-4">
          <li v-for="p in project.features" class="mt-2">
            {{ p }}
          </li>
        </ul>
      </div>
    </section>

    <section
      v-if="!showImages && !!project.images"
      id="more-images"
      class="card bg-_dark-teal text-white col-span-full"
    >
      <header>
        <h2 class="text-center">Screenshots</h2>
      </header>
      <LoopingAnimator>
        <div class="flex gap-6 pr-6 items-center">
          <div
            v-for="image in project.images"
            class="h-[50vh] w-[80vw] lg:w-[50vw]"
          >
            <img
              :src="image.url"
              alt=""
              class="h-full w-full object-cover rounded-3xl bg-_teal border-4"
            />
          </div>
        </div>
      </LoopingAnimator>
    </section>

    <section id="links" class="card bg-_dark-teal col-span-full">
      <header>
        <h2 class="text-center">Links</h2>
      </header>
      <footer class="flex !w-full items-stretch justify-evenly gap-4">
        <a
          v-for="link in project.links"
          :href="link.url"
          target="_blank"
          class="button"
        >
          <ProjectIcon :site="link.site" />
          <span class="capitalize">{{ link.site }}</span>
        </a>
      </footer>
    </section>
  </div>
</template>

<script>
import { getProjectByID } from "../assets/projects";
import LoopingAnimator from "../components/LoopingAnimator.vue";
import ArrowDownIcon from "../components/icons/ArrowDownIcon.vue";
import ProjectIcon from "../components/ProjectIcon.vue";

export default {
  data() {
    return {
      project: null,
    };
  },
  mounted() {
    this.project = getProjectByID(this.$route.params.id);
  },
  computed: {
    showImages() {
      return !this.project.videos.length;
    },
  },
  components: { LoopingAnimator, ArrowDownIcon, ProjectIcon },
};
</script>
