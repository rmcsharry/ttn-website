import React from 'react'
import { Link } from "gatsby"

import styles from './navigation.module.scss'

const Navigation = (props) => {
  return (
    <nav className={`${props.data === true ? styles.bg_solid : styles.bg_trans} navbar is-fixed-top is-spaced" role = "navigation" aria - label="main navigation`}>
    <div className="navbar-brand">
      <a className="logo" href="https://www.thethoriumnetwork.com">
        <img src="../logo.png" alt="The Thoriumn Network logo" className="logo" />
      </a>
      <div className="brandname columns is-marginless center-column top is-lowercase">
        <div className="column">
          <span>the</span>
        </div>
        <div className="column">
          <span className="has-text-weight-bold">thorium</span>
        </div>
        <div className="column">
          <span>network</span>
        </div>
      </div>
      <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div className="navbar-menu">
      <div className="navbar-start force-navbar-center">
        <Link partiallyActive={true} activeStyle={{ color: '#1ca0f2' }} className="navbar-item is-tab" to="/thorium/">THORIUM</Link>
        <Link partiallyActive={true} activeStyle={{ color: '#1ca0f2' }} className="navbar-item is-tab" to="/blockchain/">BLOCKCHAIN</Link>
        <Link partiallyActive={true} activeStyle={{ color: '#1ca0f2' }} className="navbar-item is-tab" to="/about/">ABOUT</Link>
        <Link partiallyActive={true} activeStyle={{ color: '#1ca0f2' }} className="navbar-item is-tab" to="/team/">TEAM</Link>
      </div>
      <div className="navbar-end">
        
        <div className=""></div>
        
      </div>
    </div>
    </nav>
  )
}

export default Navigation
