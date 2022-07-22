<template>
  <div class="relative">
    <BackButton :toPath="{ name: 'home' }" />

    <div v-if="project" class="grid grid-cols-1 lg:grid-cols-2 gap-2">
      <div class="card bg-_teal text-white active col-span-full">
        <header>
          <h1 class="text-center">{{ project.title }}</h1>
        </header>
        <ProjectImages v-if="showImages" :project="project" />
        <div v-else>
          <video
            :src="project.videos[0].url"
            class="h-[50vh] m-auto rounded-3xl border-4 border-_dark-teal bg-white"
            autoplay
            muted
            loop
          ></video>
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

      <section id="description" class="card bg-_teal text-white">
        <div>
          <h2>Description</h2>
          <p v-for="p in project.descriptionParagraphs" class="mt-2">
            <span v-html="p"></span>
          </p>
        </div>
      </section>

      <section id="features" class="card bg-_teal text-white">
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
        class="card bg-_teal text-white col-span-full"
      >
        <header>
          <h2 class="text-center">Screenshots</h2>
        </header>
        <ProjectImages :project="project" />
      </section>

      <section id="links" class="card bg-_teal col-span-full !gap-2 !min-h-0">
        <header>
          <h2 class="text-center">Links</h2>
        </header>
        <footer class="flex !w-full gap-4 flex-wrap">
          <a
            v-for="link in project.links"
            :href="link.url"
            target="_blank"
            class="button flex-grow justify-center"
          >
            <ProjectIcon :site="link.site" />
            <span class="capitalize">{{
              link.label ? link.label : link.site
            }}</span>
          </a>
          <button @click="share" class="button flex-grow justify-center">
            <ShareIcon />
            <span>Share</span>
          </button>
        </footer>
      </section>
    </div>
  </div>
</template>

<script>
import { getProjectByID } from "../assets/projects";
import LoopingAnimator from "../components/LoopingAnimator.vue";
import ArrowDownIcon from "../components/icons/ArrowDownIcon.vue";
import ProjectIcon from "../components/ProjectIcon.vue";
import ArrowRightIcon from "../components/icons/ArrowRightIcon.vue";
import ArrowLeftIcon from "../components/icons/ArrowLeftIcon.vue";
import ShareIcon from "../components/icons/ShareIcon.vue";
import BackButton from "../components/BackButton.vue";
import ProjectImages from "../components/ProjectImages.vue";
import { nextTick } from "vue";

export default {
  data() {
    return {
      project: null,
    };
  },
  methods: {
    async share() {
      const data = {
        url: window.location.href,
        title: this.project.title,
        text: `${this.project.title} - Project of Christian Kyle Ching`,
      };

      try {
        navigator.share(data);
      } catch (e) {
        console.error("Cannot share");
        console.error(e);
        try {
          await navigator.clipboard.writeText(window.location.href);
        } catch (e) {
          console.error("Cannot copy");
          console.error(e);
          alert(`Cannot share or copy URL: ${e}`);
          throw e;
        }
      }
    },
  },
  mounted() {
    this.project = getProjectByID(this.$route.params.id);

    if (!this.project) this.$router.push({ name: "NotFound" });

    nextTick(() => {
      document.title = `${this.project.title} - ${document.title}`;
    });
  },
  computed: {
    showImages() {
      return !this.project.videos.length;
    },
  },
  components: {
    LoopingAnimator,
    ArrowDownIcon,
    ProjectIcon,
    ArrowRightIcon,
    ArrowLeftIcon,
    ShareIcon,
    BackButton,
    ProjectImages,
  },
};
</script>
