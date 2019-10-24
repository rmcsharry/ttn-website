import React from 'react'
import Img from 'gatsby-image'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

import ScrollSign from '../scroll-sign/scroll-sign'
import styles from './hero-type-a.module.scss'

const HeroTypeA = (props) => {
  return (
    <section>
      <Img className={styles.hero_image} alt={props.heroImageAltText} fluid={props.heroImage.fluid} />

      <div className={styles.hero_title}>
        <div className={`${styles.title_text} is-size-3-desktop is-size-4-tablet is-size-6-mobile has-text-weight-bold`}>
          <div dangerouslySetInnerHTML={{
              __html: documentToHtmlString(props.title),
            }}>
          </div>
        </div>
      </div>
      <div className={styles.hero_sub_title}>
        <div className={`${styles.title_text} is-size-3-desktop is-size-4-tablet is-size-6-mobile has-text-weight-bold`}>
          <div dangerouslySetInnerHTML={{
              __html: documentToHtmlString(props.subTitle),
            }}>
          </div>
        </div>
      </div>
      {/* CTA button */}
      <div className={styles.hero_cta}>
        <button className="button is-danger has-text-weight-bold"> 
          REGISTER YOUR INTEREST
        </button>
      </div>
      <ScrollSign />
    </section>
  )
}

export default HeroTypeA
