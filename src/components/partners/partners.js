import React from 'react'

import styles from './partners.module.scss'
import meciLogo from './logo-meci-group.png'
import bitcouchLogo from './logo-bitcouch.jpg'

const Partners = () => {
  return (
    <section style={{background: 'white', color: 'black', borderTop: '1px, solid black'}}>
      <div className="container content">
        {/* <h3>Our Partners</h3> */}
        <div className="columns center">
          <div className="column center-column">
            <a href="http://MECi-Group.com" target="_blank">
              <img src={meciLogo} alt="meci group logo"/>
            </a>
          </div>
          <div className="column center-column">
            <a href="http://bitcouch.com" target="_blank">
              <img src={bitcouchLogo} alt="bitcouch logo"/>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners
