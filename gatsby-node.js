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

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const homePageTemplate = path.resolve('./src/templates/home-page.js')
    resolve(
      graphql(
        `
          {
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
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const pages = result.data.allContentfulHomePage.edges
        pages.forEach((page, index) => {
          createPage({
            path: `/home`,
            component: homePageTemplate,
            context: {
              id: page.node.id,
              heroId: page.node.pageHero.id
            },
          })
        })
      })
    )
  })
}