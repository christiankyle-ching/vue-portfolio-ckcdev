<template>
  <main class="bg-black text-white h-screen">
    <div class="container px-8 m-auto h-full flex">
      <div class="m-auto w-full">
        <h1>
          <span class="text-green-700">~$ </span>
          <Typed :initialDelay="0">
            <span>Hi! I'm Christian Kyle Ching.</span>
          </Typed>
        </h1>

        <p class="pt-4">
          <Typed :initDelay="2000">
            <span>An aspiring full-stack web developer</span>
          </Typed>
        </p>

        <p class="pt-60">
          <Typed :initDelay="5000">
            <span>-- More -- [Scroll down]</span>
          </Typed>
        </p>
      </div>
    </div>
  </main>
</template>

<script setup>
import _projects from "@/assets/projects.js";
const PROJECTS = _projects;

import Typed from "@/components/Typed.vue";
</script>

<style></style>
