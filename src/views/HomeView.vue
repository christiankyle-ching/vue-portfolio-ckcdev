<template>
  <div>
    <main class="min-h-screen">
      <!-- Top Column -->
      <div class="flex justify-center items-center !min-h-[35vh]">
        <h2>ckching.dev</h2>
      </div>

      <!-- Bottom Column : Cards -->
      <div class="cards-group grid grid-cols-1 lg:grid-cols-2 gap-2">
        <!-- Main Card -->
        <button class="card !min-h-[65vh] h-full bg-_teal group">
          <header class="text-left">
            <h3>Portfolio</h3>
          </header>

          <div class="card__background flex relative">
            <div class="group-hover:opacity-0 transition-opacity flex">
              <LoopingAnimator class="m-auto">
                <span class="text-2xl lg:text-4xl">
                  I am an aspiring Web / App Developer.&nbsp;
                </span>
              </LoopingAnimator>
            </div>

            <div
              class="opacity-0 group-hover:opacity-100 transition-opacity absolute top-0 left-0 right-0 bottom-0 flex"
            >
              <LoopingAnimator class="m-auto">
                <div class="flex gap-8 pr-8 items-center">
                  <img
                    src="@/assets/images/django.png"
                    alt="Django"
                    class="min-w-[7rem] rounded-lg"
                  />
                  <img
                    src="@/assets/images/vue.png"
                    alt="Vue"
                    class="min-w-[4rem] rounded-lg p-2 bg-white"
                  />
                  <img
                    src="@/assets/images/firebase.png"
                    alt="Vue"
                    class="min-w-[3rem] rounded-lg p-2 bg-blue-300"
                  />
                </div>
              </LoopingAnimator>
            </div>
          </div>

          <footer>
            <a
              href="#more-links"
              class="flex justify-between items-center lg:hidden"
            >
              <span>See more</span>
              <button>
                <ArrowDownIcon />
              </button>
            </a>
          </footer>
        </button>

        <div id="more-links" class="grid grid-cols-2 grid-rows-2 gap-2">
          <!-- Projects -->
          <a
            href="#top-projects"
            class="card bg-_red card--bg-hover col-span-full group"
          >
            <header>
              <h6>Projects</h6>
            </header>
            <div class="card__background flex">
              <LoopingAnimator class="m-auto">
                <span class="text-2xl lg:text-4xl">View my works.&nbsp;</span>
              </LoopingAnimator>
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
            class="card bg-_yellow text-_black card--bg-hover col-span-1"
          >
            <div class="card__background flex">
              <LoopingAnimator class="m-auto">
                <span class="text-2xl lg:text-4xl"
                  >Get to know me more!&nbsp;</span
                >
              </LoopingAnimator>
            </div>
            <div class="flex h-full">
              <UserIcon class="m-auto !h-12 !w-12" />
            </div>
          </a>

          <!-- Contact -->
          <a
            href="#contact"
            class="card bg-_teal text-_black card--bg-hover col-span-1"
          >
            <div class="card__background flex">
              <LoopingAnimator class="m-auto">
                <span class="text-2xl lg:text-4xl"
                  >Have an idea? Connect with me!&nbsp;</span
                >
              </LoopingAnimator>
            </div>
            <div class="flex h-full">
              <PhoneIcon class="m-auto !h-12 !w-12" />
            </div>
          </a>
        </div>
      </div>
    </main>

    <section id="top-projects" class="mt-2 grid grid-cols-2 gap-2">
      <div class="card h-full bg-_dark-red col-span-full">
        <h2 class="m-auto">Top Projects</h2>
      </div>

      <!-- For: Projects -->
      <RouterLink
        :to="{ name: 'project', params: { id: project.id } }"
        v-for="project in TOP_PROJECTS"
        class="card h-full bg-_red card--bg-hover"
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
          <LoopingAnimator class="m-auto">
            <span class="text-2xl lg:text-4xl">
              <b>{{ project.platform }}</b> | {{ project.stack }} |
              <b>{{ project.date_dev.getFullYear() }}</b> |&nbsp;
            </span>
          </LoopingAnimator>
        </div>

        <footer>
          <span class="flex justify-between items-center">
            <span>View</span>
            <ArrowRightIcon />
          </span>
        </footer>
      </RouterLink>

      <!-- For: Projects -->
      <a
        href="https://github.com/christiankyle-ching?tab=repositories"
        target="_blank"
        class="card h-full bg-slate-800"
      >
        <div class="m-auto">
          <span class="flex justify-between items-center gap-4">
            <h5>View All Repositories at Github</h5>
            <ArrowRightIcon />
          </span>
        </div>
      </a>
    </section>

    <section id="about-me" class="mt-2 card bg-_yellow text-_black">
      <header>
        <LoopingAnimator :speed="0.8">
          <span class="text-7xl lg:text-9xl">Who Am I?&nbsp;</span>
        </LoopingAnimator>
      </header>

      <img
        src="@/assets/images/christian-kyle-ching.jpg"
        alt=""
        class="rounded-full h-[40vh] lg:h-[50vh] object-cover object-center border-8 border-_orange mx-auto"
      />

      <!-- Name and Introduction -->
      <article class="flex flex-col gap-4">
        <h2 class="text-center">Christian Kyle Ching</h2>
        <p>
          I'm currently a graduating student in Bachelor of Science and
          Information Technology in Pamantasan ng Lungsod ng Valenzuela
          (Philippines).
        </p>
      </article>
    </section>

    <section id="contact" class="mt-2 flex flex-col gap-2">
      <div class="card bg-_dark-teal">
        <header class="m-auto">
          <h2>
            I'm <strong>open for new opportunities</strong>! You can reach me at
            my links below.
          </h2>
        </header>
      </div>

      <div class="grid grid-cols-2 gap-2">
        <!-- Email -->
        <a
          href="mailto:ckching.dev@gmail.com"
          target="_blank"
          class="card bg-_teal"
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
          class="card bg-_teal"
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
          class="card bg-_teal"
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
          class="card bg-_teal"
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

    <footer class="mt-8 mb-4 flex flex-col gap-2">
      <!-- Attributions -->
      <p class="text-center text-sm">
        Design inspired by
        <a
          href="https://www.thecraftsmen.tech/"
          target="_blank"
          class="underline"
          >The Craftsmen Agency</a
        >
        and
        <a href="https://www.kaploom.com/" target="_blank" class="underline"
          >Kaploom</a
        >.
      </p>

      <p class="text-center text-sm">
        Icons by
        <a href="https://heroicons.com/" target="_blank" class="underline"
          >Heroicons</a
        >
        and
        <a href="https://fontawesome.com/" target="_blank" class="underline"
          >FontAwesome</a
        >.
      </p>
    </footer>
  </div>
</template>

<script setup>
import { PROJECTS, TOP_PROJECTS } from "@/assets/projects.js";

import LoopingAnimator from "../components/LoopingAnimator.vue";
import ArrowDownIcon from "../components/icons/ArrowDownIcon.vue";
import GithubIcon from "../components/icons/GithubIcon.vue";
import LinkedinIcon from "../components/icons/LinkedinIcon.vue";
import EmailIcon from "../components/icons/EmailIcon.vue";
import FacebookIcon from "../components/icons/FacebookIcon.vue";
import ArrowRightIcon from "../components/icons/ArrowRightIcon.vue";
import PhoneIcon from "../components/icons/PhoneIcon.vue";
import UserIcon from "../components/icons/UserIcon.vue";
</script>

<style></style>
