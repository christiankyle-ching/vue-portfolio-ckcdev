import {
  createRouter,
  createWebHistory,
  type RouterScrollBehavior,
} from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProjectView from "../views/ProjectView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import NotFound from "../views/NotFound.vue";

// @ts-ignore
const scrollBehavior: RouterScrollBehavior = (to, _from, savedPosition) => {
  if (["project", "projects"].includes(to.name?.toString() ?? "")) {
    return { top: 0 };
  }

  // Delay for transition
  return savedPosition;
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior,
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
      meta: {
        title: "Projects",
      },
    },
    {
      path: "/project/:id",
      name: "project",
      component: ProjectView,
    },

    // will match everything and put it under `$route.params.pathMatch`
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
      meta: {
        noindex: true,
      },
    },
  ],
});

// Default Values
const DEFAULT_TITLE = import.meta.env.VITE_APP_TITLE;
const DEFAULT_OG_IMAGE = "/static/images/og-image.png";
const DEFAULT_OG_TITLE = "Portfolio - Christian Kyle Ching";
const DEFAULT_OG_DESCRIPTION =
  "Personal Portfolio of Christian Kyle Ching in Web / App Development";

router.afterEach((to, from) => {
  document.title = to.meta.title
    ? `${to.meta.title} - ${DEFAULT_TITLE}`
    : DEFAULT_TITLE;

  const robots = document.head.querySelector<HTMLMetaElement>(
    "meta[name='robots']"
  );
  const ogImage = document.head.querySelector<HTMLMetaElement>(
    "meta[property='og:image']"
  );
  const ogTitle = document.head.querySelector<HTMLMetaElement>(
    "meta[property='og:title']"
  );
  const ogDescription = document.head.querySelector<HTMLMetaElement>(
    "meta[property='og:description']"
  );

  // Set pages with meta.noindex
  if (robots) robots.content = to.meta.noindex ? "noindex" : "all";

  // Change Open Graph tags to default if not in project view
  if (to.name != "project") {
    // og:image
    if (ogImage) ogImage.content = DEFAULT_OG_IMAGE;

    // og:title
    if (ogTitle) ogTitle.content = DEFAULT_OG_TITLE;

    // og:description
    if (ogDescription) ogDescription.content = DEFAULT_OG_DESCRIPTION;
  }
});

export default router;
