import React from 'react'
import Img from 'gatsby-image'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

import ScrollSign from '../scroll-sign/scroll-sign'
import styles from './hero-type-a.module.scss'

const HeroTypeA = (props) => {
  return (
    <section>
      <Img className={styles.heroImage} alt={props.heroImageAltText} fluid={props.heroImage.fluid} />

      <div className={styles.hero_title}>
        <div className={`${styles.title_text} is-size-3-desktop is-size-4-tablet is-size-6-mobile has-text-weight-bold`}>
          <h2 dangerouslySetInnerHTML={{
              __html: documentToHtmlString(props.title),
            }}>
          </h2>
        </div>
      </div>
      <div className={styles.heroSubTitle}>
        <div className="{styles.title_text} is-size-3-desktop is-size-4-tablet is-size-6-mobile has-text-weight-bold">
          <h2 dangerouslySetInnerHTML={{
              __html: documentToHtmlString(props.subTitle),
            }}>
          </h2>
        </div>
      </div>
      {/* CTA button */}
      <div className={styles.heroCTA}>
        <button className="button is-danger has-text-weight-bold"> 
          REGISTER YOUR INTEREST
        </button>
      </div>
      <ScrollSign />
    </section>
  )
}

export default HeroTypeA
