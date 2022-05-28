import { PROJECTS } from "./assets/projects";

const projectURLs = PROJECTS.map(
  (p) => `https://ckcdev.vercel.app/project/${p.id}`
);

console.log("--- public/sitemap.txt ---");
console.log("https://ckcdev.vercel.app/");
console.log("https://ckcdev.vercel.app/projects/");
console.log(projectURLs.join("\n"));
