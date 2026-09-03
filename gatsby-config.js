/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Vitor Dalbem Costa Portfolio`,
    description: `Software Developer in Lisbon focused on accessible interfaces and scalable digital products.`,
    siteUrl: `https://vitordalbemcosta.github.io/portifolio`,
  },
  pathPrefix: "/portifolio",
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon.svg",
      },
    },
  ],
};
