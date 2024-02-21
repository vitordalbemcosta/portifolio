import SaveProgrammingImage from "../images/save-programming.png";
import KebabAdvisorImage from "../images/kebab-advisor.png";
import IronKicksImages from "../images/iron-kicks.png";

const personalProjectsData = [
  {
    id: 1,
    title: "Save programing shooting game",
    image: SaveProgrammingImage,
    link: "https://vitordalbemcosta.github.io/Project_1/#game-board",
    repository: "https://github.com/vitordalbemcosta/Project_1",
    details:
      "This was my very first project when taking the full-stack webdev course @ Ironhack, it is a shooting game build in vanilla JS using canva moving the items on screen from Y to X",
    technologies: "HTML, CSS, JavaScript",
  },
  {
    id: 2,
    title: "Ironkicks",
    image: IronKicksImages,
    link: "https://ironkicks.herokuapp.com/",
    repository: "https://github.com/vitordalbemcosta/project2_ironkicks",
    details:
      "Ironkicks was a pair project that I had the pleasure of developing with fellow ex-colleague Joao Pedro. Ironkicks was our first project implementing CRUD. The user is able to create a an account - log in / log off. Search for any snearker available on the API used. Add the chosen sneaker to it's favorites, remove from it's favorites, edit how many they wanted in their favorites, etc.",
    technologies:
      "express.js, node.js, MongoDB, JavaScript, HTMl, CSS, Handlebars.js",
  },
  {
    id: 3,
    title: "Kebab Advisor",
    image: KebabAdvisorImage,
    link: "https://kebabadvisor.netlify.app/",
    repository:
      "https://github.com/vitordalbemcosta/Project-KebabAdvisor-client",
    details:
      "MERN application awardaded with the most original project of cohort. Application separated in two repos for user and server side. The user is able to create an account to log in and log off. They are able to search for the Kebab restaurants in Lisbon and check more details about them. Gluten free, vegan friendly, etc. The user is once logged in is able to leave a review on a scale of 1 to 5 start to the restaurant and leave them a review about the user's experience.",
    technologies: "MongoDB, Express.js, React, Node.js, CSS, Postman",
  },
];

export default personalProjectsData;
