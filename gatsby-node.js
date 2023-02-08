/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
const blogPostTemplate = require.resolve(`./src/templates/blog-post.js`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx(sort: { frontmatter: { date: DESC } }) {
        nodes {
          path
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`There was an error loading posts`, result.errors)
    return
  }

  const posts = result.data.allMdx.nodes

  posts.forEach(post => {
    createPage({
      path: post.path,
      component: blogPostTemplate,
      context: {
        path: post.path,
      },
    })
  })
}
