import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export default () => (
  // <nav role="navigation">
  //   <ul className={styles.navigation}>
  //     <li className={styles.navigationItem}>
  //       <Link to="/">Home</Link>
  //     </li>
  //     <li className={styles.navigationItem}>
  //       <Link to="/blog/">Blog</Link>
  //     </li>
  //   </ul>
  // </nav>

  
  <section class="hero is-fullheight">

    {/* <div class="hero-head">  
      <div class="columns is-mobile is-marginless heading has-text-weight-bold">
        <div class="column left">
        <figure className={styles.logo}>
          <img src="logo.png"></img>
        </figure>
        </div>
        <div class="column center desktop">
          <p class="navbar-item">BLOCKCHAIN</p>
          <p class="navbar-item">THORIUM</p>
          <p class="navbar-item">ABOUT</p>          
          <p class="navbar-item">TEAM</p>
          <p class="navbar-item">BLOG</p>
        </div>
        <div class="column right">
          <p class="navbar-item desktop">REGISTER </p>
          <p class="navbar-item">HAMBURGER</p>
        </div>
      </div>
    </div> */}


  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
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
</section>
)