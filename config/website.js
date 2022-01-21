module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'James Shopland', // Navigation and Site Title
  titleAlt: 'James Shopland', // Title for JSONLD
  description: 'James Shopland, Web Developer. Personal site to test web design frameworks and software development skills.',
  headline: 'James Shopland Personal Site', // Headline for schema.org JSONLD
  url: 'https://jamesshopland.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  logo: '/icons/icon-512x512.png', // Used for SEO
  ogLanguage: 'en_GB', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/images/JSLogo.png', // Used for manifest favicon generation
  shortName: 'JShopland', // shortname for manifest. MUST be shorter than 12 characters
  author: 'James Shopland', // Author for schemaORGJSONLD
  themeColor: '#171731',
  backgroundColor: '#171731',

  twitter: '@JollyShopland', // Twitter Username
  facebook: '', // Facebook Site Name
  googleAnalyticsID: '',

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
}
