import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import PageLayout from '../components/page-layout/page-layout'
import HeroTypeB from '../components/hero-types/hero-type-b'
import LayoutSection from '../components/layout-section/layout-section'

class teamPageTemplate extends React.Component {
  constructor() {
    super();
    this.oldScrollValue = 0,
    this.embeddedImageStyle = {
      maxWidth: '310px',
      border: '1px solid hsla(203, 89%, 53%, 1'
    }
    this.state = {
      setNavbarBackground: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = e => {
    this.oldScrollValue = window.pageYOffset;
    if (this.oldScrollValue > (window.innerHeight * 0.4) && !this.state.setNavbarBackground) {
      this.setState({setNavbarBackground: true})
    }
    if (this.oldScrollValue < (window.innerHeight * 0.4) && this.state.setNavbarBackground) {
      this.setState({setNavbarBackground: false})
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const siteTitle = get(this.props.data, 'site.siteMetadata.title')
    const pageData = get(this.props.data, 'contentfulTeamPage')
    const heroData = get(this.props.data, 'contentfulHeroTypeB')

    let sectionList = pageData.pageSections.map((section, index) =>{
      return <LayoutSection key={index} data={section} options={this.embeddedImageStyle} />;
    })

    console.log(pageData)

    return (
      <PageLayout location={this.props.location} setNavbarBackground={this.state.setNavbarBackground}>
        <Helmet title={siteTitle} />
        {pageData.pageHero.internal.type === 'ContentfulHeroTypeB' && <HeroTypeB {...heroData} />}
        {sectionList}
      </PageLayout>
    )
  }
}

export default teamPageTemplate

export const pageQuery = graphql`
  query teamPageQuery($id: String!, $heroId: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulTeamPage(id: { eq: $id }) {
      pageTitle
      pageHero {
        id
        internal {
          type
        }
      }
      pageSections {
        id
        sectionBackgroundColor {
          colorName
        }
        sectionName
        sectionColumns {
          columnName
          columnType
          childContentfulSectionColumnColumnContentRichTextNode {
            json
          }
        }
      }
    }
    contentfulHeroTypeB(id: { eq: $heroId }) {
      title {
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
      subTitle {
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
        fluid(maxWidth: 1920, resizingBehavior: SCALE, background: "rgb:040404") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`
