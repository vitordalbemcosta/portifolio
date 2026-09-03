import SaveProgrammingImage from "../images/optimized/save-programming.webp";
import KebabAdvisorImage from "../images/optimized/kebab-advisor.webp";
import IronKicksImages from "../images/optimized/iron-kicks.webp";

const personalProjectsData = [
  {
    id: 1,
    title: "Save Programming",
    image: SaveProgrammingImage,
    link: "https://vitordalbemcosta.github.io/Project_1/#game-board",
    repository: "https://github.com/vitordalbemcosta/Project_1",
    details:
      "My first project during Ironhack’s full-stack bootcamp: a browser shooting game built with vanilla JavaScript and the Canvas API.",
    technologies: "#HTML #CSS #JavaScript",
  },
  {
    id: 2,
    title: "Ironkicks",
    image: IronKicksImages,
    link: "https://ironkicks.herokuapp.com/",
    repository: "https://github.com/vitordalbemcosta/project2_ironkicks",
    details:
      "A pair-programming project exploring full CRUD flows. Users can create an account, browse sneakers from an external API and manage a personal favourites collection.",
    technologies:
      "#Express.js #Node.js #MongoDB #JavaScript #HTMl #CSS #Handlebars.js",
  },
  {
    id: 3,
    title: "Kebab Advisor",
    image: KebabAdvisorImage,
    link: "https://kebabadvisor.netlify.app/",
    repository:
      "https://github.com/vitordalbemcosta/Project-KebabAdvisor-client",
    details:
      "A MERN application split into client and server repositories. Users can discover kebab restaurants in Lisbon, filter by dietary needs and leave ratings and reviews after signing in.",
    technologies: "MongoDB #Express.js #React.js #Node.js #CSS #Postman",
  },
];

export default personalProjectsData;
