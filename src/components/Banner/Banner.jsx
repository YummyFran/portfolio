import React from 'react'
import './banner.css'

const Banner = () => {
  return (
    <section id="home">
        <div className="timeline"></div>
        <header className="container">
            <span className="pseudo rnd">{"Home />"}</span>
            <p className="line first">Hi, I'm</p>
            <h1 className="line">Yummy Fran Palomares</h1>
            <p className="subheading line last">I design and develop <span id="activity"></span></p>
            <a href="#projects" className="cta">Projects</a>
        </header>
    </section>
  )
}

export default Banner