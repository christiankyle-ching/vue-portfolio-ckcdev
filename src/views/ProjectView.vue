<template>
  <div class="relative">
    <BackButton />

    <div v-if="project" class="grid grid-cols-1 lg:grid-cols-2 gap-2">
      <div class="card bg-_teal text-slate-50 active col-span-full">
        <header>
          <h1 class="text-center">{{ project.title }}</h1>
        </header>
        <ProjectImages v-if="showImages" :project="project" />
        <div v-else>
          <video
            :src="project.media[0].url"
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

      <section id="description" class="card bg-_teal text-slate-50">
        <div>
          <h2>Description</h2>
          <p v-for="p in project.descriptionParagraphs" class="mt-2">
            <span v-html="p"></span>
          </p>
        </div>
      </section>

      <section id="features" class="card bg-_teal text-slate-50">
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
        v-if="!showImages && !!project.media"
        id="more-images"
        class="card bg-_teal text-slate-50 col-span-full"
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
            <span class="capitalize text-center">{{
              link.label ? link.label : link.site
            }}</span>
          </a>
          <button @click="handleShare" class="button flex-grow justify-center">
            <ShareIcon />
            <span>Share</span>
          </button>
        </footer>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed } from "vue";
import { type Project, getProjectByID } from "../assets/projects";
import LoopingAnimator from "../components/LoopingAnimator.vue";
import ArrowDownIcon from "../components/icons/ArrowDownIcon.vue";
import ProjectIcon from "../components/ProjectIcon.vue";
import ArrowRightIcon from "../components/icons/ArrowRightIcon.vue";
import ArrowLeftIcon from "../components/icons/ArrowLeftIcon.vue";
import ShareIcon from "../components/icons/ShareIcon.vue";
import BackButton from "../components/BackButton.vue";
import ProjectImages from "../components/ProjectGallery.vue";
import { nextTick } from "vue";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const route = useRoute();
    const router = useRouter();
    const project = ref<Project | null>(null);

    onMounted(() => {
      nextTick(() => {
        project.value = getProjectByID(String(route.params.id));

        if (!project.value) {
          router.push({ name: "NotFound" });
          return;
        }

        // === Set Title ===
        document.title = `${project.value.title} - ${document.title}`;

        // === Set Open Graph Tags ===
        const ogImage = document.head.querySelector<HTMLMetaElement>(
          "meta[property='og:image']"
        );
        const ogTitle = document.head.querySelector<HTMLMetaElement>(
          "meta[property='og:title']"
        );
        const ogDescription = document.head.querySelector<HTMLMetaElement>(
          "meta[property='og:description']"
        );

        if (ogImage)
          ogImage.content = `/static/images/projects/${project.value.id}.jpg`;
        if (ogTitle) ogTitle.content = project.value.title ?? "";
        if (ogDescription)
          ogDescription.content = project.value.descriptionParagraphs[0] ?? "";
      });
    });

    /** Show images if there are no videos */
    const showImages = computed(
      () => !project.value?.media.filter((media) => media.isVideo).length
    );

    const handleShare = async () => {
      if (!project.value) return;

      const data = {
        url: window.location.href,
        title: project.value.title,
        text: `${project.value.title} - Project of Christian Kyle Ching`,
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
    };

    return {
      project,
      showImages,
      handleShare,
    };
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
});
</script>
