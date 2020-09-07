require('dotenv').config();

module.exports = {
  // TODO Add sanity headless CMS to pull in data from online dashboard
  siteMetadata: {
    title: `Francis de Lima`,
    description: `Personal website of Francis de Lima`,
    url: `https://www.francisdelima.com`, // No trailing slash allowed!
    image: '/images/francis.png', // Path to your image you placed in the 'static' folder
  },

  plugins: [
    {
      resolve: `gatsby-styled-components-dark-mode`,
      options: {
        light: require(`${__dirname}/src/assets/theme.js`).light,
        dark: require(`${__dirname}/src/assets/theme.js`).dark,
      },
    },

    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.SANITY_STUDIO_API_PROJECT_ID,
        dataset: 'production',
        watchMode: true,
      },
    },

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || 'none',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `francisdelima.com`,
        short_name: `Francis de Lima`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#37474f`,
        display: `minimal-ui`,
      },
    },
    'gatsby-plugin-styled-components',

    'gatsby-plugin-react-helmet',
  ],
};
