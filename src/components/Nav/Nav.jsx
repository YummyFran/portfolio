import React from 'react'
import logo from '../../assets/logo.svg'
import './nav.css'
import { HashLink } from 'react-router-hash-link'

function Nav() {
  return (
    <nav>
        <a href="#home" className="brand">
            <img src={logo} alt="logo" className='logo'/>
            <div className="brandname">Yummy Fran</div>
        </a>
        <ul className="navlinks">
            <div className="close">&times;</div>
            <li><HashLink to="#home">Home</HashLink></li>
            <li><HashLink to="#projects">Works</HashLink></li>
            <li><HashLink to="#about">About Me</HashLink></li>
            <li><HashLink to="#contact"><span className='hireme'>Hire Me</span></HashLink></li>
        </ul>
        <div className="menu">
            <div className="burger"></div>
        </div>
    </nav>
  )
}

export default Nav