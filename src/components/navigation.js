import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export default () => (
  <nav class="navbar is-fixed-top is-spaced" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="logo" href="https://www.thethoriumnnetwork.com">
        <img
          src="logo.png"
          alt="The Thoriumn Network logo"
          class="logo"
        />
        </a>
        <div class="brandname columns is-marginless center-column top is-lowercase">
          <div class="column">
            <span>the</span>
          </div>
          <div class="column">
            <span class="has-text-weight-bold">thorium</span>  
          </div>
          <div class="column">
            <span>network</span>
          </div>
        </div>
      

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start force-navbar-center">
        <div class="center">
          <a class="navbar-item is-tab">BLOCKCHAIN</a>    
        </div>
        <div class="center">
          <a class="navbar-item is-tab">THORIUM</a>    
          </div>
        <div class="center">
          <a class="navbar-item is-tab">ABOUT</a>
        </div>
        <div class="center">
          <a class="navbar-item is-tab">TEAM</a>
        </div>
        <div class="center">
          <a class="navbar-item is-tab">BLOG</a>
        </div>
      </div>
      <div class="navbar-end">
        <div class="center">
            <button class="button is-small has-text-weight-bold">
              <div class="">REGISTER</div></button>
        </div>
      </div>
    </div>
</nav>
)
