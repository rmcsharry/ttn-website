import React from 'react'

import styles from './footer.module.scss'

const Footer = () => {
  return (
    <footer className="container content">
      <div className="columns">
        <div className="column center">
          <a className={styles.instagram} href="https://www.instagram.com/thethoriumnetwork" target="_blank"></a>			
          <a className={styles.facebook} href="https://facebook.com/The.Thorium.Network" target="_blank"></a>
          <a className={styles.telegram} href="https://t.me/thethoriumnetwork" target="_blank"></a>
          <a className={styles.twitter} href="https://twitter.com/thoriumnetwork" target="_blank"></a>	
          <a className={styles.linkedin} href="https://www.linkedin.com/company/thethoriumnetwork/" target="_blank"></a>
          <a className={styles.youtube} href="https://www.youtube.com/channel/UCxeYOnwIGGNzyrMI339-2sw" target="_blank"></a>
          <a className={styles.reddit} href="https://www.reddit.com/user/TheThoriumNetwork" target="_blank"></a>
        </div>
      </div>
      <div className="columns">
        <div className="column column-center">
          <h6>Feel free to contact us!</h6>
          <p>Phone: +41 33 588 0002</p>
          <p>Fax: +41 31 528 0349</p>
          <p>contact@thethoriumnetwork.com</p>
        </div>
        <div className="column column-center">
          <h6>© The Thorium Network 2019</h6>
          <p>A project by MECi Group International</p>
          <p>Baar, SWITZERLAND</p>
          <p>www.MECi-Group.com</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
