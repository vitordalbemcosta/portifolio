/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `portifolio_vitor`,
    siteUrl: `https://www.yourdomain.tld`,
  },
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
