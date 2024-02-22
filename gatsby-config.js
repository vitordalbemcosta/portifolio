/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Vitor Dalbem Costa Portfolio`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  pathPrefix: "/portifolio",
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon.png",
      },
    },
  ],
};
