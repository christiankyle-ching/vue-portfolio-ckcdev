import { makeHTMLLink } from "../utils";

const CURRENT_STATUS: string = `
Software Engineer at
${makeHTMLLink("Dynameyes", "https://www.linkedin.com/company/dynameyes/")}"
`;

const AVAILABLE_FOR_WORK: boolean = false;

let SELF_DESCRIPTION_PARAGRAPHS: string[] = [
  `
  I'm a hobbyist developer <b>focused in Web development</b>.
  I have experience mainly in using <b>Django (Python), Vue.JS 3, Firebase, and Tailwind CSS</b>.
  I'm currently learning .
  `,
];

export { SELF_DESCRIPTION_PARAGRAPHS, AVAILABLE_FOR_WORK, CURRENT_STATUS };
