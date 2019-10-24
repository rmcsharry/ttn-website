import React from 'react'


import styles from './scroll-sign.module.scss'

const ScrollSign = () => {
  return (
    <div className={`${styles.scroll_sign} container`}>
      <div className="columns desktop">
        <div className="column left desktop">
          <div className={styles.arrow_down + ' ' + styles.bounce}>
          </div>
        </div>
        <div className="column right desktop">
          <div className={styles.arrow_down + ' ' + styles.bounce}>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScrollSign
