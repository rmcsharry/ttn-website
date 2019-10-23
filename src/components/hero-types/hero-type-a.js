import React from 'react'
import Img from 'gatsby-image'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

import styles from './hero-type-a.module.scss'

const HeroTypeA = props => {
  // const { contentfulHeroTypeA: page } = data;

  // const hero = get(this, 'props.data.contentfulHeroTypeA')

  let style1 = { '--animation-order': 1 }
  let style2 = { '--animation-order': 2 }
  let style3 = { '--animation-order': 3 }
  let style4 = { '--animation-order': 4 }
  let style5 = { '--animation-order': 5 }
  let style6 = { '--animation-order': 6 }

  return (
    <section>
      <Img className={styles.heroImage} alt={props.heroImageAltText} fluid={props.heroImage.fluid} />

      <div className={styles.hero_title}>
        <ul className={`${styles.title_text} is-size-3-desktop is-size-4-tablet is-size-6-mobile has-text-weight-bold`}>
          <li style={style1} dangerouslySetInnerHTML={{
              __html: documentToHtmlString(props.title),
            }}>
          </li>
        </ul>
      </div>
      <div className={styles.heroSubTitle}>
        <ul className="{styles.title_text} is-size-3-desktop is-size-4-tablet is-size-6-mobile has-text-weight-bold">
          <li style={style6} dangerouslySetInnerHTML={{
              __html: documentToHtmlString(props.subTitle),
            }}>
          </li>
        </ul>
      </div>
      {/* CTA button */}
      <div className={styles.heroCTA}>
        <button className="button is-danger has-text-weight-bold"> 
          REGISTER YOUR INTEREST
        </button>
      </div>
    </section>
  )
}

export default HeroTypeA
