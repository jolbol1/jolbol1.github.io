require('dotenv').config({
  path: `.env`,
})

const website = require('./config/website')
const { githubApiQuery } = require('./config/githubQuery')



module.exports = {
  siteMetadata: {
    siteUrl: website.url, // For gatsby-plugin-sitemap
    title: website.title,
    titleAlt: website.titleAlt,
    description: website.description,
    banner: website.logo,
    headline: website.headline,
    siteLanguage: website.siteLanguage,
    ogLanguage: website.ogLanguage,
    author: website.author,
    twitter: website.twitter,
    facebook: website.facebook,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    `gatsby-plugin-react-helmet`,
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: website.title,
        short_name: website.titleAlt,
        description: website.description,
        start_url: '/',
        background_color: website.backgroundColor,
        theme_color: website.themeColor,
        display: 'standalone',
        icon: website.favicon,
      },
    },
    {
      resolve: `gatsby-source-github-api`,
      options: {
        url: "https://api.github.com/graphql", // default Github GraphQL v4 API endpoint
  
        // token: required by the GitHub API
        token: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
  
        // GraphQLquery: defaults to a search query
        graphQLQuery: githubApiQuery,
  
        // variables: defaults to variables needed for a search query
        variables: {
          github_login: process.env.GITHUB_LOGIN
        }
      }
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout`),
      },
    },
  ],
};
