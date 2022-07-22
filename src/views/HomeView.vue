<template>
  <div>
    <main class="min-h-screen">
      <!-- Top Column -->
      <div class="flex justify-center items-center !h-[35vh]">
        <div class="scale-on-scroll">
          <h2>ckching.dev</h2>
        </div>
      </div>

      <!-- Bottom Column : Cards -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-2">
        <!-- Main Card -->
        <button ref="main-card" class="card !h-[65vh] bg-_teal group">
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
                    class="min-w-[7rem] rounded-lg bg-white p-2"
                  />
                  <img
                    src="@/assets/images/vue.png"
                    alt="Vue"
                    class="min-w-[4rem] rounded-lg bg-white p-2"
                  />
                  <img
                    src="@/assets/images/firebase.png"
                    alt="Vue"
                    class="min-w-[3rem] rounded-lg p-2 bg-white"
                  />
                  <div class="bg-white text-purple-800 rounded-lg p-2">
                    <span class="text-4xl font-bold">C#</span>
                  </div>
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
          <a href="#top-projects" class="card bg-_dark-red col-span-full group">
            <header class="group-hover:opacity-0 transition-opacity">
              <h6>Projects</h6>
            </header>
            <div class="card__background flex group">
              <!-- View My Works -->
              <div
                class="absolute flex top-0 bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <LoopingAnimator class="m-auto">
                  <span class="text-2xl lg:text-4xl">View my works.&nbsp;</span>
                </LoopingAnimator>
              </div>

              <!-- Project Logos -->
              <div
                ref="project-logos"
                class="flex group-hover:opacity-0 transition-opacity"
              >
                <LoopingAnimator class="m-auto">
                  <div class="grid grid-cols-[repeat(5,5rem)] gap-8 pr-8">
                    <img
                      src="@/assets/images/projects/roomfiles/logo.jpg"
                      alt="RoomFiles"
                      class="h-16 w-16 rounded-lg bg-white"
                    />
                    <img
                      src="@/assets/images/projects/nasa_apod/logo.png"
                      alt="NASA's APOD"
                      class="h-16 w-16 rounded-lg bg-white"
                    />
                    <img
                      src="@/assets/images/projects/digital-wellbeing-windows/logo.png"
                      alt="Digital Wellbeing for Windows"
                      class="h-16 w-16 rounded-lg bg-white"
                    />
                    <img
                      src="@/assets/images/projects/bytes-of-past/logo.png"
                      alt="Bytes of Past"
                      class="h-16 w-16 rounded-lg bg-white"
                    />
                    <img
                      src="@/assets/images/projects/budget/logo.jpg"
                      alt="Budget Planner"
                      class="h-16 w-16 rounded-lg bg-white"
                    />
                  </div>
                </LoopingAnimator>
              </div>
            </div>
            <!-- <footer>
              <a class="flex justify-between items-center">
                <span>See All</span>
                <button>
                  <ArrowDownIcon />
                </button>
              </a>
            </footer> -->
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
      <!-- <div class="card h-full bg-_dark-red col-span-full">
        <h2 class="m-auto">Top Projects</h2>
      </div> -->

      <!-- For: Projects -->
      <div v-for="project in visibleProjects">
        <ProjectCard :project="project" />
      </div>

      <RouterLink
        :to="{ name: 'projects' }"
        class="card h-full bg-_dark-red"
        :class="{ 'col-span-full': visibleProjects.length % 2 == 0 }"
      >
        <div class="m-auto">
          <span class="flex justify-between items-center gap-4">
            <h5>View All Projects</h5>
            <ArrowRightIcon />
          </span>
        </div>
      </RouterLink>
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
        class="rounded-full w-64 lg:w-80 object-cover object-center border-8 border-_orange mx-auto"
      />

      <!-- Name and Introduction -->
      <article class="flex flex-col gap-4">
        <h2 class="text-center">Christian Kyle Ching</h2>
        <p>
          I'm currently a <strong>graduating student of BSIT</strong> (Bachelor
          of Science and Information Technology) in Pamantasan ng Lungsod ng
          Valenzuela (Philippines). I'm currently looking for opportunity as an
          <strong>Entry-Level Software Engineer</strong>.
        </p>

        <a
          href="https://docs.google.com/document/d/1ZrY_BvP7HT8QPgeHsCmJgeVlVKdK5mvO26gGzG3LZ2M/export?format=pdf"
          class="button text-white !bg-_orange hover:!bg-_light-yellow hover:!text-_red-orange m-auto"
        >
          Download CV
        </a>
      </article>
    </section>

    <section id="contact" class="mt-2 flex flex-col gap-2">
      <div class="card bg-_teal">
        <header class="m-auto">
          <h2>
            <strong>I'm open for new opportunities!</strong>
            You can reach me at my links below.
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
            <h3 class="mt-2 !leading-none">Email</h3>
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
            <h3 class="mt-2 !leading-none">Github</h3>
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
            <h3 class="mt-2 !leading-none">Linkedin</h3>
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
            <h3 class="mt-2 !leading-none">Facebook</h3>
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

<script>
import { TOP_PROJECTS } from "@/assets/projects.js";

import LoopingAnimator from "../components/LoopingAnimator.vue";
import ArrowDownIcon from "../components/icons/ArrowDownIcon.vue";
import GithubIcon from "../components/icons/GithubIcon.vue";
import LinkedinIcon from "../components/icons/LinkedinIcon.vue";
import EmailIcon from "../components/icons/EmailIcon.vue";
import FacebookIcon from "../components/icons/FacebookIcon.vue";
import ArrowRightIcon from "../components/icons/ArrowRightIcon.vue";
import PhoneIcon from "../components/icons/PhoneIcon.vue";
import UserIcon from "../components/icons/UserIcon.vue";
import ProjectCard from "../components/ProjectCard.vue";

const MAX_NUMBER_OF_PROJECTS = 4;
const visibleProjects = TOP_PROJECTS.slice(0, MAX_NUMBER_OF_PROJECTS);

export default {
  components: {
    LoopingAnimator,
    ArrowDownIcon,
    GithubIcon,
    LinkedinIcon,
    EmailIcon,
    FacebookIcon,
    ArrowRightIcon,
    PhoneIcon,
    UserIcon,
    ProjectCard,
  },
  data() {
    return {
      MAX_NUMBER_OF_PROJECTS: 4,
      visibleProjects: visibleProjects,
    };
  },
  mounted() {
    this.$refs["main-card"].addEventListener("mouseenter", () => {
      console.log("enter");
      this.$refs["project-logos"].classList.add("opacity-0");
    });

    this.$refs["main-card"].addEventListener("mouseleave", () => {
      this.$refs["project-logos"].classList.remove("opacity-0");
    });
  },
};
</script>

<style></style>
