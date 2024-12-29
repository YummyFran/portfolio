import React from 'react'
import './contact.css'
import Roadmap from '../../assets/roadmap.svg'
import { BiSend } from "react-icons/bi";

const Contact = () => {
  return (
    <section id="contact">
        <div className="timeline"></div>
        <div className="container">
            <span className="pseudo">{"Contact />"}</span>
            <div className="heading">
                <h1 className="header">Allies & Connections</h1>
                <h2 className="subheader">Forming Bonds Across Digital Realms.</h2>
            </div>
            <div className="content">
              <div className="roadmap">
                <img src={Roadmap} alt="roadmap"/>
              </div>
              <div className="form">
                <div className="details">
                  <input type="text" placeholder='Name' />
                  <input type="email" placeholder='Email' />
                </div>
                <div className="message">
                  <div className="subject">
                    <input type="text" placeholder='Subject' />
                    <BiSend className="send"/>
                  </div>
                  <textarea name="message" id="message" placeholder='Message'></textarea>
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Contact