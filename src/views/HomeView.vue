<template>
  <div class="w-screen px-2">
    <main class="min-h-screen w-full">
      <!-- Top Column -->
      <div class="flex justify-center items-center !min-h-[35vh]">
        <h2>ckching.dev</h2>
      </div>

      <!-- Bottom Column : Cards -->
      <div class="cards-group grid grid-cols-1 lg:grid-cols-2 gap-2">
        <!-- Main Card -->
        <a
          href="#more-links"
          class="card active !min-h-[65vh] h-full bg-blue-700"
        >
          <header>
            <h3>Portfolio</h3>
          </header>

          <div class="card__background flex hover:opacity-0">
            <LoopingText class="m-auto">
              <span class="text-3xl lg:text-5xl">
                I am an aspiring Web / App Developer.&nbsp;
              </span>
            </LoopingText>
          </div>

          <footer>
            <span class="flex justify-between items-center">
              <span>See more</span>
              <button>
                <ArrowDownIcon />
              </button>
            </span>
          </footer>
        </a>

        <div id="more-links" class="grid grid-cols-2 grid-rows-2 gap-2">
          <!-- Projects -->
          <a
            href="#top-projects"
            class="card active bg-red-800 card--bg-hover col-span-full"
          >
            <header>
              <h6>Projects</h6>
            </header>
            <div class="card__background flex">
              <LoopingText class="m-auto">
                <span class="text-3xl lg:text-5xl">View my works.&nbsp;</span>
              </LoopingText>
            </div>
            <footer>
              <a class="flex justify-between items-center">
                <span>See All</span>
                <button>
                  <ArrowDownIcon />
                </button>
              </a>
            </footer>
          </a>

          <!-- About -->
          <a
            href="#about-me"
            class="card active bg-violet-700 card--bg-hover col-span-1"
          >
            <header>
              <h6>About Me</h6>
            </header>
            <div class="card__background flex">
              <LoopingText class="m-auto">
                <span class="text-3xl lg:text-5xl"
                  >Get to know me more!&nbsp;</span
                >
              </LoopingText>
            </div>
            <footer></footer>
          </a>

          <!-- Contact -->
          <a href="" class="card active bg-green-700 card--bg-hover col-span-1">
            <header>
              <h6>Contact</h6>
            </header>
            <div class="card__background flex">
              <LoopingText class="m-auto">
                <span class="text-3xl lg:text-5xl"
                  >Have an idea? Connect with me!&nbsp;</span
                >
              </LoopingText>
            </div>
            <footer></footer>
          </a>
        </div>
      </div>
    </main>

    <section id="top-projects" class="mt-2 grid grid-cols-2 gap-2">
      <div class="card active h-full bg-red-800 col-span-full">
        <h2 class="m-auto">Top Projects</h2>
      </div>

      <!-- For: Projects -->
      <a
        href=""
        v-for="project in TOP_PROJECTS"
        class="card active h-full bg-slate-900 card--bg-hover"
      >
        <header>
          <h5>{{ project.title }}</h5>
        </header>

        <div class="card__background flex relative">
          <img
            :src="project.images[1].url"
            alt=""
            class="absolute top-0 left-0 w-full h-full object-cover object-center opacity-20"
          />
          <LoopingText class="m-auto">
            <span class="text-3xl lg:text-5xl">
              <b>{{ project.platform }}</b> | {{ project.stack }} |
              <b>{{ project.date_dev.getFullYear() }}</b> |&nbsp;
            </span>
          </LoopingText>
        </div>

        <footer>
          <span href="" class="flex justify-between items-center">
            <span>View</span>
            <ArrowRightIcon />
          </span>
        </footer>
      </a>
    </section>

    <section id="about-me" class="mt-2 card active bg-red-800">
      <header>
        <LoopingText :perLetterDuration="500">
          <span class="text-9xl">Who Am I?&nbsp;</span>
        </LoopingText>
      </header>

      <img
        src="@/assets/images/christian-kyle-ching.jpg"
        alt=""
        class="rounded-full h-[50vh] object-cover object-center border-8 border-red-500 mx-auto"
      />

      <!-- Name and Introduction -->
      <article class="flex flex-col gap-4">
        <h3 class="text-center">Christian Kyle Ching</h3>
        <p>
          I'm currently a graduating student in Bachelor of Science and
          Information Technology in Pamantasan ng Lungsod ng Valenzuela
          (Philippines).
        </p>
      </article>
    </section>

    <section id="contact" class="mt-2 flex flex-col gap-2">
      <div class="card active bg-red-800">
        <header>
          <h2>
            I'm open for new opportunities! You can reach me at my links below.
          </h2>
        </header>
      </div>

      <div class="grid grid-cols-2 gap-2">
        <!-- Email -->
        <a
          href="mailto:ckching.dev@gmail.com"
          target="_blank"
          class="card active bg-red-800"
        >
          <header></header>
          <div>
            <EmailIcon />
            <h3 class="mt-2">Email</h3>
          </div>
          <footer></footer>
        </a>

        <!-- Github -->
        <a
          href="https://github.com/christiankyle-ching"
          target="_blank"
          class="card active bg-red-800"
        >
          <header></header>
          <div>
            <GithubIcon class="h-6" />
            <h3 class="mt-2">Github</h3>
          </div>
          <footer></footer>
        </a>

        <!-- Linkedin -->
        <a
          href="https://www.linkedin.com/in/christiankyle-ching"
          target="_blank"
          class="card active bg-red-800"
        >
          <header></header>
          <div>
            <LinkedinIcon />
            <h3 class="mt-2">Linkedin</h3>
          </div>
          <footer></footer>
        </a>

        <!-- Facebook -->
        <a
          href="https://www.facebook.com/christiankyle.ching"
          target="_blank"
          class="card active bg-red-800"
        >
          <header></header>
          <div>
            <FacebookIcon />
            <h3 class="mt-2">Facebook</h3>
          </div>
          <footer></footer>
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
import { PROJECTS, TOP_PROJECTS } from "@/assets/projects.js";

import LoopingText from "@/components/LoopingText.vue";
import ArrowDownIcon from "@/components/icons/ArrowDownIcon.vue";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon.vue";
import GithubIcon from "../components/icons/GithubIcon.vue";
import LinkedinIcon from "../components/icons/LinkedinIcon.vue";
import EmailIcon from "../components/icons/EmailIcon.vue";
import FacebookIcon from "../components/icons/FacebookIcon.vue";
</script>

<style></style>
