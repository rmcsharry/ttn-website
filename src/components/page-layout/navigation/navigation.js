import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.scss'

export default () => (
  <nav className="navbar is-fixed-top is-spaced" role="navigation" aria-label="main navigation">
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
        <a className="navbar-item is-tab">BLOCKCHAIN</a>
        <a className="navbar-item is-tab">THORIUM</a>
        <a className="navbar-item is-tab">ABOUT</a>
        <a className="navbar-item is-tab">TEAM</a>
      </div>
      <div className="navbar-end">
        <button className="button is-outlined is-primary has-text-weight-bold">
          <div className="">REGISTER</div>
        </button>
      </div>
    </div>
  </nav>
)
