import React from 'react'
import skills from '../../datas/skills.json'
import './about.css'

const About = () => {
  return (
    <section id="about">
        <div className="timeline"></div>
        <div className="container">
            <span className="pseudo">{"About />"}</span>
            <div className="me">
                <div className="details">
                    <div className="sticky-content">
                        <div className="heading">
                            <h1 className="header">The hero with unique superpowers</h1>
                            <h2 className="subheader">Code, design, animate, and beyond.</h2>
                        </div>
                        <p>
                            My name is Yummy Fran Palomares, a developer, designer, and a writer in heart.
                        </p>
                        <p>
                            In the realm of zeroes and ones, I'm a storyteller crafting intricate narratives through programming languages. From elegant algorithms to user-centric designs, I thrive on sculpting digital landscapes that enrich and simplify.
                        </p>
                    </div>
                </div>
                <div className="picture"></div>
            </div>
            <div className="school">
                <div className="heading">
                    <h1 className="header">Schooling Chapters</h1>
                    <h2 className="subheader">Pages from My Academic Tale</h2>
                </div>
                <div className="educations">
                    <div className="education">
                        <div className="level">College</div>
                        <div className="place">Cordova Public College</div>
                        <div className="taken">Bachelor of Science in Information Technology</div>
                        <div className="year">2023 - now</div>
                    </div>
                    <div className="education">
                        <div className="level">Senior High School</div>
                        <div className="place">Mactan National High School - SHS</div>
                        <div className="taken">Computer System Servicing</div>
                        <div className="year">2020 - 2022</div>
                    </div>
                    <div className="education">
                        <div className="level">High School</div>
                        <div className="place">Mactan National High School</div>
                        <div className="taken">Technical Drafting</div>
                        <div className="year">2016 - 2020</div>
                    </div>
                    <div className="education">
                        <div className="level">Elementary</div>
                        <div className="place">Mactan Elementary School</div>
                        <div className="year">2010 - 2016</div>
                    </div>
                </div>
            </div>
            <div className="skills">
                <div className="heading">
                    <h1 className="header">Powers &amp; Potentials</h1>
                    <h2 className="subheader">A Hero's Skillset</h2>    
                </div>
                {skills.map((skill, i) => (
                    <div className="skill" key={i}>
                    <div className="illustration">
                    <img src={skill.illustration} alt="front end"/>
                    </div>
                    <div className="skillset">
                        <div className="sticky-content">
                            <h3 className="title">{skill.title}</h3>
                            <div className="icons">
                                {skill.skills.map((icon, j) => {
                                    return (
                                        <div className="icon" key={j}>
                                            <img src={icon.icon} alt={icon.name}/>
                                            <span>{icon.name}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default About