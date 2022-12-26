<template>
  <span>
    <span v-if="site === 'open'">
      <ExternalLink />
    </span>
    <span v-else-if="site === 'download'">
      <DownloadIcon />
    </span>
    <span v-else-if="site === 'github'">
      <GithubIcon />
    </span>
    <span v-else></span>
  </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GithubIcon from "./icons/GithubIcon.vue";
import ExternalLink from "./icons/ExternalLink.vue";
import DownloadIcon from "./icons/DownloadIcon.vue";

export default defineComponent({
  props: {
    site: {
      type: String,
      required: true,
    },
  },
  components: { GithubIcon, ExternalLink, DownloadIcon },
});
</script>

<style></style>
