module.exports = {
  siteMetadata: {
    title: 'Research Blocks',
    author: 'Parker Merritt',
    description: 'Web-based clinical research platform.',
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/RBLogoTrans.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
