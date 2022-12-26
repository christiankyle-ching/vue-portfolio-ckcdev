import { createHTMLElement, makeHTMLLink } from "../utils";

const CURRENT_STATUS: string = `
Software Engineer at
${makeHTMLLink("Dynameyes", "https://www.linkedin.com/company/dynameyes/")}
`;

const AVAILABLE_FOR_WORK: boolean = false;

const SELF_DESCRIPTION_PARAGRAPHS: string[] = [
  `
  A Software Engineer ${createHTMLElement("strong", {
    innerHTML: "focused in Web development",
  })}.`,
  `Currently using: ${createHTMLElement("strong", {
    innerHTML: "Vue.js 3 (TypeScript), GraphQL Apollo, and Ant Design Vue",
  })}.`,
  `Main tech stacks: ${createHTMLElement("strong", {
    innerHTML:
      "Django (Python), Vue.js 3 (TypeScript), Firebase, and Tailwind CSS",
  })}.
  `,
];

export { SELF_DESCRIPTION_PARAGRAPHS, AVAILABLE_FOR_WORK, CURRENT_STATUS };
