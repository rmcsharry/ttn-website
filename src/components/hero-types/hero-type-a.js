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
      <Img className={styles.heroImage} alt={props.heroImageAltText} fluid={props.heroImage.fluid} />  
      <div className="columns no-padding no-margin">
        <div className="column">
        </div>
        <div className="column is-half">
          
        </div>
        <div className="column center">
          {/* {console.log(hero)} */}
          {/* {data.childContentfulHeroTypeATitleRichTextNode.content.content.value} */}
        </div>
      </div>
    </section>
  )
}


HeroTypeA.propTypes = {
  id: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

export default HeroTypeA

