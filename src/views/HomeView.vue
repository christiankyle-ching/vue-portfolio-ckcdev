<template>
  <div class="w-screen">
    <a href="">
      <main class="h-screen w-full grid grid-row-3 grid-cols-1">
        <div class="flex justify-center items-center row-span-1 col-span-1">
          <h1>Christian Kyle Ching</h1>
        </div>

        <div class="row-span-2 col-span-1 grid grid-cols-1 lg:grid-cols-2">
          <div class="card bg-blue-700 h-full">
            <LoopingText>
              <h1 class="text-6xl">I am an aspiring Web / App Developer.</h1>
            </LoopingText>
          </div>
        </div>
      </main>
    </a>
  </div>
</template>

<script setup>
import _projects from "@/assets/projects.js";
const PROJECTS = _projects;

import LoopingText from "@/components/LoopingText.vue";
</script>

<style></style>
