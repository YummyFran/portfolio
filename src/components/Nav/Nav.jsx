import React from 'react'
import logo from '../../assets/logo.svg'
import './nav.css'

function Nav() {
  return (
    <nav>
        <a href="#home" className="brand">
            <img src={logo} alt="logo" className='logo'/>
            <div className="brandname">Yummy Fran</div>
        </a>
        <ul className="navlinks">
            <div className="close">&times;</div>
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Works</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#contact"><span className='hireme'>Hire Me</span></a></li>
        </ul>
        <div className="menu">
            <div className="burger"></div>
        </div>
    </nav>
  )
}

export default Nav