import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProjectView from "../views/ProjectView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import NotFound from "../views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (["project", "projects"].includes(to.name)) {
      return { top: 0 };
    }

    // Delay for transition
    return savedPosition;
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/projects/",
      name: "projects",
      component: ProjectsView,
    },
    {
      path: "/project/:id",
      name: "project",
      component: ProjectView,
    },

    // will match everything and put it under `$route.params.pathMatch`
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  ],
});

export default router;
