module.exports = {
  siteMetadata: {
    title: "My Portfolio",
    description: "This is a portfolio built with Gatsby",
    url: "",
    image: "",
    author: "Alexander Franco",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto mono`,
          `odor mean chey`,
          `work sans\:400,400i,700,700i`
        ],
        display: 'swap'
      }
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`, 
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      },
    },
  ],
};
