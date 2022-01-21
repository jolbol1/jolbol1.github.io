module.exports = {
  siteMetadata: {
    siteUrl: `https://www.jamesshopland.com`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `James Shopland`,
        short_name: `JamesShopland`,
        description: `James Shopland. Software Developer. I use this site as a test bench for new frameworks and to improve my skills in web design.`,
        lang: `en`,
        start_url: `/`,
        background_color: `rgb(23, 23, 49)`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: 'src/images/JSLogo.png',
      },
    },
  ],
};
