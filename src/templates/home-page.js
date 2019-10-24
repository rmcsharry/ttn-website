import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import PageLayout from '../components/page-layout/page-layout'
import HeroTypeA from '../components/hero-types/hero-type-a'
import BarChart from '../components/charts/bar-chart'
import LayoutSection from '../components/layout-section/layout-section'
import Partners from '../components/partners/partners'

import styles from './home-page.module.scss'

class homePageTemplate extends React.Component {
  render() {
    const siteTitle = get(this.props.data, 'site.siteMetadata.title')
    const pageData = get(this.props.data, 'contentfulHomePage')
    const heroTypeAData = get(this.props.data, 'contentfulHeroTypeA')
    let sectionList = pageData.pageSections.map(function(section, index){
      return <LayoutSection key={index} data={section} />;
    })

    console.log(pageData)

    return (
      <PageLayout location={this.props.location}>
        <Helmet title={siteTitle} />
        {pageData.pageHero.internal.type === 'ContentfulHeroTypeA' && <HeroTypeA {...heroTypeAData} />}
        <BarChart data={pageData.barChart} />
        {sectionList}

        <section>
          <div class="container content">
            <h3>What about renewables?</h3>
            <p>Renewable energy is only part of the solution to the looming energy crisis. Here are two distinguished individuals who have done the research. The clips are very short and well worth watching.</p>
            <div className="columns center">
              <div className="column center-column ">
              <h6><a href="https://en.wikipedia.org/wiki/Bill_Gates">Bill Gates&nbsp;</a>on renewable energy</h6>
                <iframe className={`${styles.vid_container} 16by9`}
                  src="https://www.youtube.com/embed/9xe3BWPsBTU"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
              </div>
              <div className="column center-column ">
              <h6><a href="https://en.wikipedia.org/wiki/James_Hansen">Dr. James Hansen&nbsp;</a>on renewable energy</h6>
                <iframe className={`${styles.vid_container} 16by9`}
                  src="https://www.youtube.com/embed/fmFo6XVm0Yk"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
              </div>
            </div>
          </div>
        </section >
        <section style={{background: 'white', color: 'black'}}>
          <div class="container content">
          <h3>A Blockchain to deliver Thorium</h3>
            <p>
              We are building the world’s first nuclear fuel delivery and management system based on blockchain technology.
              This provides <em>transparency and openness</em> to the fuel needed for the Thorium molten salt technology.
            </p>
            <p>We are not building a Molten Salt Burner (MSB) with this project.</p>

            <p>Using blockchain technology we are putting the Thorium energy system into the public space, forever. Providing a marketplace for energy generation, fuel management, and transparency never before seen in such a closed and secret industry as nuclear.
            </p>
            <p>
            Fire needed wood. Steam needed coal. Car engines need oil and power turbines need gas. Supplying fuel has always been at least a big a business as building the machines that use it. Large states like China, Russia, and India can produce their own fuel supply chains. But the private startups in Europe and North America will not have the same economies of scale. A specialist fuel supply chain will be of great importance to them.
            </p>
            <p>
            All the private companies working on molten salt technolgy, as well as government research laboratories around the world, need access to low cost reliable, traceable, transparent Thorium based fuel.
            </p>
            <p>
            Our blockchain project will provide the world community a way to contribute to nuclear energy in a way they have never been able to contribute before. The world will also be able to monitor and observe the movement of fuel as it is produced, mixed, sorted, transported, burned, and recycled for all Thorium that is on the blockchain.
            </p>
            <p>
              You can support the project soon by buying tokens in the presale and enable you to benefit, both financially and morally from the project.
            </p>
          </div>
        </section>
        <Partners />
      </PageLayout>
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
      barChart {
        chartData {
          dataPointNames
          dataPointValues
        }
        chartTitle
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
    contentfulHeroTypeA(id: { eq: $heroId }) {
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
