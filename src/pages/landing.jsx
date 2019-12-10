import React from 'react'

import './landing.css'
import yarnbowl from '../images/yarnbowl.svg'

const Landing = () => {
  return (
    <main className="landing-page page-container">
      <section className="intro">
        <img
          alt="yarnbowl"
          className="yarn-bowl"
          src={yarnbowl}
        />
        <div className="slogan">
          <h1>a new way to crochet</h1>
        </div>
      </section>
    </main>
  )
}

export default Landing