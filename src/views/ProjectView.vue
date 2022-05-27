<template>
  <div class="relative">
    <RouterLink
      :to="{ name: 'home' }"
      class="fixed top-[5vh] left-0 z-10 button !bg-white !text-_black !p-3 !pl-2 !rounded-tl-none !rounded-bl-none shadow-lg"
    >
      <ArrowLeftIcon />
    </RouterLink>

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
            class="h-[50vh] m-auto rounded-3xl border-4 border-_teal"
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
                class="h-full w-full object-cover rounded-3xl border-4 border-_teal"
              />
            </div>
          </div>
        </LoopingAnimator>
      </section>

      <section
        id="links"
        class="card bg-_dark-teal col-span-full !gap-2 !min-h-0"
      >
        <header>
          <h2 class="text-center">Links</h2>
        </header>
        <footer
          class="flex !w-full items-stretch justify-evenly gap-4 flex-wrap"
        >
          <a
            v-for="link in project.links"
            :href="link.url"
            target="_blank"
            class="button"
          >
            <ProjectIcon :site="link.site" />
            <span class="capitalize">{{ link.site }}</span>
          </a>
          <button @click="share" class="button">
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
  },
};
</script>
