const Promise = require('bluebird')
const path = require('path')

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions

//   return new Promise((resolve, reject) => {
//     const blogPost = path.resolve('./src/templates/blog-post.js')
//     resolve(
//       graphql(
//         `
//           {
//             allContentfulBlogPost {
//               edges {
//                 node {
//                   title
//                   slug
//                 }
//               }
//             }
//           }
//           `
//       ).then(result => {
//         if (result.errors) {
//           console.log(result.errors)
//           reject(result.errors)
//         }

//         const posts = result.data.allContentfulBlogPost.edges
//         posts.forEach((post, index) => {
//           createPage({
//             path: `/blog/${post.node.slug}/`,
//             component: blogPost,
//             context: {
//               slug: post.node.slug
//             },
//           })
//         })
//       })
//     )
//   })
// }

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const homePageTemplate = path.resolve('./src/templates/home-page.js')

  const result = await graphql(`
    query {
      allContentfulHomePage {
        edges {
          node {
            id
            pageTitle
            pageHero {
              id
              internal {
                type
              }
            }
            pageSections {
              id
            }
          }
        }      
      }
    }
    `)

    result.data.allContentfulHomePage.edges.forEach((page, index) => {
      createPage({
        path: `/home`,
        component: homePageTemplate,
        context: {
          id: page.node.id,
          heroId: page.node.pageHero.id
        },
      })
    })
}