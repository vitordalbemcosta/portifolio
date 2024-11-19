import neowintechImage from "../images/neowintech.png";
import sundayMktpImage from "../images/sunday-mktp.png";
import safebrokEuropeImage from "../images/safebrok-europe.png";
import safebrokPtImage from "../images/safebrok-pt.png";
import simulatorImage from "../images/simulator.png";
import hmvImage from "../images/hmv.png";

const professionalProjectsData = [
  {
    id: 1,
    title: "Hospital Moinhos de Vento - SISP",
    image: hmvImage,
    link: "https://sispappdev.codefi.com.br/auth/login",
    repository: "https://github.com/AgroBICodefi",
    details:
      "Software for a hospital in Porto Alegre - Brazil. This Software allows cross-departmental communication to create orders of medical supplies, goods, services, and investments. I was resposible for the creating of the Frontend using Angular, of various modules of this project, as well as the creation of the necessary CRUDs in the backend to support the frontend functionalities using C# .NET Core and Entity Framework Core.",
    technologies:
      "#Angular C# .net  #SCSS #Typescript #I18n #Jira #Git #GitHub",
  },
  {
    id: 2,
    title: "Safebrok Seguros",
    image: safebrokPtImage,
    link: "https://www.safebrok.com",
    repository: "https://github.com/TeaPayment",
    details:
      "Landing page for a peer-to-peer investment service. Contains a blog section powered by a CMS (Contentful) using both REST and GraphQL APIs. This was the first professional project where I took the lead in designing the project architecture, including the data models that would be served by the CMS.",
    technologies:
      "#React.js #Gatsby.js #Styled-components #Typescript #Contentful #Rest #Graphql #AWS #I18n #Lokalise #Jest",
  },
  {
    id: 3,
    title: "Safebrok Europe",
    image: safebrokEuropeImage,
    link: "https://www.safebrokeurope.com",
    repository: "https://github.com/TeaPayment",
    details:
      "Landing page for a peer-to-peer investment service. Contains a blog section powered by a CMS (Contentful) using both REST and GraphQL APIs. This was the first professional project where I took the lead in designing the project architecture, including the data models that would be served by the CMS.",
    technologies:
      "#React #Gatsby.js #Styled-components #Typescript #Contentful #Rest #Graphql #AWS #I18n #Lokalise #Jest",
  },
  {
    id: 4,
    title: "Smart Investment Simulator",
    image: simulatorImage,
    link: "https://smartinvestmentsimulator.com/en/",
    repository: "https://github.com/TeaPayment",
    details:
      "Static page for an investment simulator. This tool empowers users to simulate diverse investment products within a single interface. I initiated the project by formulating an agile spike story, subsequently presenting potential strategies and alternatives to core team leaders",
    technologies: "#React.js #Gatsby.js #Styled-components #Typescript #Jest",
  },
  {
    id: 5,
    title: "Neowintech Website",
    image: neowintechImage,
    link: "https://neowintech.com/",
    repository: "https://github.com/TeaPayment",
    details:
      "Landing page for a marketplace of investment products, built with Gatsby. Albeit a simple landing page, it was incredibly helpful in my growth as a developer, as it introduced me to core concepts such as dynamically translation of pages as well as providing a graphical visualization of data in the form of charts using the D3 library.",
    technologies:
      "#React.js #Gatsby.js #Tailwindcss #Typescript #React-intl #d3",
  },
  {
    id: 6,
    title: "My Sunday Marketplace",
    image: sundayMktpImage,
    link: "https://mysundaymarketplace.com/en/",
    repository: "https://github.com/TeaPayment",
    details:
      "Static landing page for a secondary product created by the company, in order to promote traffic to the main investment platform (Iban Wallet). This project first introduced me to core concepts in unit testing, as well as the opportunity to customize the existing deployment pipeline so that the newly-created tests would be run automatically on each deployment, thus allowing the team to catch any potential bugs before they can impact the end users.",
    technologies: "#React.js #Gatsby.js #Jest #Typescript #Github-actions",
  },
];

export default professionalProjectsData;
