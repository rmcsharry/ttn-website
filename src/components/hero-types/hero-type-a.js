import React, { Suspense } from 'react'
import Img from 'gatsby-image'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import ScrollSign from '../scroll-sign/scroll-sign'
import styles from './hero-type-a.module.scss'
import Typing from 'react-typing-animation';

const HeroTypeA = (props) => {
  return (
    <div>
      <Img className={styles.hero_image} alt={props.heroImageAltText} fluid={props.heroImage.fluid} />

      <div className={styles.hero_title}>
        <div className={`${styles.title_text} is-size-3-desktop is-size-4-tablet is-size-6-mobile has-text-weight-bold`}>
          <Typing>
            {documentToReactComponents(props.title)}
          </Typing>
        </div>
      </div>
      <div className={styles.hero_sub_title}>
        <div className={`${styles.title_text} is-size-3-desktop is-size-4-tablet is-size-6-mobile has-text-weight-bold`}>
          <Typing>
            <Typing.Delay ms={2500} />
            {documentToReactComponents(props.subTitle)}
          </Typing>
        </div>
      </div>
      {/* CTA button */}
      <div className={styles.hero_cta}>
        <button className="button is-danger has-text-weight-bold">
          REGISTER YOUR INTEREST
      </button>
      </div>
      <ScrollSign />
    </div>
  )
}

export default HeroTypeA
