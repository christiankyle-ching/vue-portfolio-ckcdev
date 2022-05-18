<template>
  <div class="w-screen px-2">
    <main class="min-h-screen w-full grid grid-row-3 grid-cols-1">
      <!-- Top Column -->
      <div class="flex justify-center items-center row-span-1 col-span-1">
        <h2>Christian Kyle Ching</h2>
      </div>

      <!-- Bottom Column -->
      <div class="row-span-2 col-span-1 grid grid-cols-1 lg:grid-cols-2 gap-2">
        <div class="card active !min-h-[75vh] h-full bg-blue-700 relative">
          <div class="card__background flex hover:opacity-0">
            <LoopingText class="m-auto">
              <span class="text-4xl lg:text-6xl">
                I am an aspiring Web / App Developer.&nbsp;
              </span>
            </LoopingText>
          </div>

          <header>
            <h3>Portfolio</h3>
          </header>

          <footer>
            <a href="#asd" class="flex justify-between items-center">
              <span>See my works</span>
              <button>
                <ArrowDownIcon />
              </button>
            </a>
          </footer>
        </div>

        <div class="grid grid-cols-2 grid-rows-2 gap-2">
          <div class="card active bg-red-700 card--background-hover">
            <header>Projects</header>
            <div class="card__background flex opacity-0 hover:opacity-100">
              <LoopingText class="m-auto">
                <span class="text-4xl lg:text-6xl">View my works.&nbsp;</span>
              </LoopingText>
            </div>
            <footer></footer>
          </div>
          <div class="card active bg-violet-700 card--background-hover">
            <header>About</header>
            <div class="card__background flex opacity-0 hover:opacity-100">
              <LoopingText class="m-auto">
                <span class="text-4xl lg:text-6xl">Get to know me more!&nbsp;</span>
              </LoopingText>
            </div>
            <footer></footer>
          </div>
          <div
            id="asd"
            class="card active bg-green-700 card--background-hover col-span-full"
          >
            <header>Contact</header>
            <div class="card__background flex opacity-0 hover:opacity-100">
              <LoopingText class="m-auto">
                <span class="text-4xl lg:text-6xl"
                  >Have an idea? Connect with me!&nbsp;</span
                >
              </LoopingText>
            </div>
            <footer></footer>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import _projects from "@/assets/projects.js";
const PROJECTS = _projects;

import LoopingText from "@/components/LoopingText.vue";
import ArrowDownIcon from "@/components/icons/ArrowDownIcon.vue";
</script>

<style></style>
