import React from 'react'
import Img from 'gatsby-image'

import styles from './hero-type-a.module.css'

export default ({ data }) => (
  <section>
    <columns>
      <column>
        <Img className={styles.heroImage} alt={data.name} fluid={data.heroImage.fluid} />
      </column>
      <column class="center">
        text
      </column>
    </columns>
  </section>
)
