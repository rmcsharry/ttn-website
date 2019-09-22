import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import HeroTypeA from '../components/hero-types/hero-type-a.js'

class homePageTemplate extends React.Component {
  render() {
    const pageData = get(this.props, 'data.contentfulHomePage')
    const heroTypeAData = get(this.props, 'data.contentfulHeroTypeA')
    console.log(pageData);

    return (
      <div>
        {pageData.pageHero.internal.type === 'ContentfulHeroTypeA' &&
          <HeroTypeA {...heroTypeAData}/>}
      </div>
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
    childContentfulHeroTypeATitleRichTextNode {
      content {
        content {
          value
          nodeType
        }
        nodeType
      }
    }
    heroImage {
      fluid(maxWidth: 1180, background: "rgb:000000") {
        ...GatsbyContentfulFluid_tracedSVG
      }
    }
  }
}
`