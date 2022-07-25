// const CURRENT_STATUS = "a Full Stack Developer at Dynameyes";
const CURRENT_STATUS = "";
const AVAILABLE_FOR_WORK = false;

let SELF_DESCRIPTION_PARAGRAPHS = [
  `
  I'm a hobbyist developer <b>focused in Web development</b>.
  I have experience mainly in using <b>Django (Python), Vue.JS 3, Firebase, and Tailwind CSS</b>.
  I'm currently learning <b>Django REST Framework</b> for creating Web APIs.
  `,
];

if (CURRENT_STATUS != "")
  SELF_DESCRIPTION_PARAGRAPHS.push(`I'm currently <b>${CURRENT_STATUS}</b>.`);

export { SELF_DESCRIPTION_PARAGRAPHS, AVAILABLE_FOR_WORK };
