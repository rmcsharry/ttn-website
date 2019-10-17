import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/layout.js'
import HeroTypeA from '../components/hero-types/hero-type-a.js'

class homePageTemplate extends React.Component {
  render() {
    const siteTitle = get(this.props.data, 'site.siteMetadata.title')
    const pageData = get(this.props.data, 'contentfulHomePage')
    const heroTypeAData = get(this.props.data, 'contentfulHeroTypeA')
    console.log(pageData)

    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />
        {pageData.pageHero.internal.type === 'ContentfulHeroTypeA' && <HeroTypeA {...heroTypeAData} />}
        <section>next section</section>
      </Layout>
    )
  }
}

export default homePageTemplate

export const pageQuery = graphql`
  query heroTypeAByIdQuery($id: String!, $heroId: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulHomePage(id: { eq: $id }) {
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
    contentfulHeroTypeA(id: { eq: $heroId }) {
      title {
        nodeType
        content {
          nodeType
          content {
            nodeType
            value
          }
        }
      }
      subTitle {
        nodeType
        content {
          nodeType
          content {
            nodeType
            value
          }
        }
      }
      textA {
        nodeType
        content {
          nodeType
          content {
            marks {
              type
            }
            nodeType
            value
          }
        }
      }
      textB {
        nodeType
        content {
          nodeType
          content {
            marks {
              type
            }
            nodeType
            value
          }
        }
      }
      textC {
        nodeType
        content {
          nodeType
          content {
            marks {
              type
            }
            nodeType
            value
          }
        }
      }
      heroImageAltText
      heroImage {
        fluid(maxWidth: 800, resizingBehavior: SCALE, background: "rgb:040404") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`
