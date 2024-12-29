import React from 'react'
import projects from '../../datas/projects.json'
import './projects.css'
import { Link } from 'react-router-dom'

const Projects = ({ screenshots }) => {
  return (
    <section id="projects">
        <div className="timeline"></div>
        <div className="container"> 
            <span className="pseudo">{"Works />"}</span>
            {projects.filter(project => project.featured).map((project, i) => (
                <div className="project" key={i}>
                        <Link to={`projects/${project.name}`} ref={screenshot => screenshots.current[i] = screenshot} className={`${i} screenshot ${project.name}`} />
                    <div className="details">
                        <div className="sticky-content">
                            <h3 className="title">{project.title}</h3>
                            <div className="description">{project.description}</div>
                            <div className="actions">
                                {project['pop-up'] ?
                                    <a href='' style={{cursor: "pointer"}} onClick={() => window.open(project.demo, 'targetWindow', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=310,height=480')} className="demo primary--btn">Demo</a>:
                                    <a href={project.demo} rel="noreferrer" target="_blank" className="demo primary--btn">Demo</a>
                                }
                                <a href={project.source} rel="noreferrer" target="_blank" className="source secondary--btn">Source Code</a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <Link to="projects" className='show-projects tertiary--btn'>Show more projects</Link>
        </div>
    </section>
  )
}

export default Projects