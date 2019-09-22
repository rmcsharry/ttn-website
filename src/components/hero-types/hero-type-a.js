import React from 'react'

import get from 'lodash/get'
import PropTypes from "prop-types";
import Img from 'gatsby-image'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
 
import styles from './hero-type-a.module.css'

const HeroTypeA = props => {
  // render() {
  
  
  // const { contentfulHeroTypeA: page } = data;
  
    // const hero = get(this, 'props.data.contentfulHeroTypeA')

    return (
      <section>
      <pre> {JSON.stringify(props, null, 2)} </pre>
      
        <div className="columns">
          <div className="column">
            {/* <Img className={styles.heroImage} alt={data.name} fluid={data.heroImage.fluid} /> */}
          </div>
          <div className="column center">
            {/* {console.log(hero)} */}
            {/* {data.childContentfulHeroTypeATitleRichTextNode.content.content.value} */}
          </div>
        </div>
      </section>
    )
  }
// }

HeroTypeA.propTypes = {
  id: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

export default HeroTypeA

