import neowintechImage from "../images/optimized/neowintech.webp";
import sundayMktpImage from "../images/optimized/sunday-mktp.webp";
import safebrokEuropeImage from "../images/optimized/safebrok-europe.webp";
import safebrokPtImage from "../images/optimized/safebrok-pt.webp";
import simulatorImage from "../images/optimized/simulator.webp";
import hmvImage from "../images/optimized/hmv.webp";

const professionalProjectsData = [
  {
    id: 1,
    title: "Hospital Moinhos de Vento - SISP",
    image: hmvImage,
    link: "https://sispappdev.codefi.com.br/auth/login",
    repository: "https://github.com/AgroBICodefi",
    details:
      "A platform supporting cross-departmental requests for medical supplies, goods, services and investments at a hospital in Porto Alegre, Brazil. I developed Angular frontend modules and the supporting CRUD functionality with C# .NET Core and Entity Framework Core.",
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
      "A peer-to-peer investment experience with a Contentful-powered editorial section using REST and GraphQL. I led the frontend architecture and shaped the content models served by the CMS.",
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
      "A multilingual peer-to-peer investment experience with a Contentful-powered editorial section. I helped define the Gatsby architecture, integrations and reusable frontend patterns.",
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
      "An investment simulator that lets users explore multiple products through a single interface. I began the work with a technical spike and presented implementation strategies and trade-offs to the core team.",
    technologies: "#React.js #Gatsby.js #Styled-components #Typescript #Jest",
  },
  {
    id: 5,
    title: "Neowintech Website",
    image: neowintechImage,
    link: "https://neowintech.com/",
    repository: "https://github.com/TeaPayment",
    details:
      "A Gatsby landing page for an investment-product marketplace, featuring localized content and data visualizations built with D3.",
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
      "A campaign landing page supporting the Iban Wallet investment platform. I introduced automated unit tests into the deployment pipeline so regressions could be detected before reaching users.",
    technologies: "#React.js #Gatsby.js #Jest #Typescript #Github-actions",
  },
];

export default professionalProjectsData;
