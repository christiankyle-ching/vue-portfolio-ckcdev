import { ACTIVE_PROJECTS } from "./assets/projects";

const projectURLs = ACTIVE_PROJECTS.map(
  (p) => `https://ckcdev.vercel.app/project/${p.id}`
);

const sitemap = [
  "https://ckcdev.vercel.app/",

  // Projects
  "https://ckcdev.vercel.app/projects/",
  ...projectURLs,
];

console.log("----- public/sitemap.txt -----");
console.log(sitemap.join("\n"));
console.log("----- public/sitemap.txt -----");
