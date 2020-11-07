module.exports = {
  siteMetadata: {
    title: `Camurdan Atolye`,
    description: `Camurdan Atolye'nin websitesidir.`,
    author: `Emre Kelleci`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
   `gatsby-plugin-manifest`,
   
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
