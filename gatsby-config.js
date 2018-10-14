module.exports = {
  plugins: [
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/blog`,
        name: 'markdown-pages',
      },
    },
    `gatsby-transformer-remark`,
  ],
}
