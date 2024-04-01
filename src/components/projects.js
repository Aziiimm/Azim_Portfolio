import '../styles/projects.css'
import project1 from '../assets/wip.jpeg'
import portfolioProject from '../assets/portfolio.png'
import React from 'react'

const Projects = () => {
  
  return (
             
    <div className = 'projectsContainer'>
                
      <h1 id = 'projects' className = 'title'>
        <span className = 'projectsHead'>Projects</span>
      </h1>

      <div className = 'projectsList'>

        <div className = 'project-box'>

            <span>Portfolio Website</span>
            <img src = {portfolioProject} alt = 'First Project'></img>
            <p> This is my portfolio website FJALFJALKFJLKAFJLAJFLK AFJLKAFJLKAFJLFFA:
                LFKJALFJAL K FJALKFJLAKFJLKAJFLJFLAKJFLKAJFLAKJFLKJAFJ
                FJLJALFKJLK JLFJALKJFLKJFAL KJFLKJAFLKJFLKAJ LJFALKF
                 LJALJFLAJF LJF LJAFL JALFJ LFAFLJ
            </p>
            <div className = 'project-stack'>
              <div>JavaScript</div>
              <div>React</div>
              <div>HTML</div>
              <div>CSS</div>
            </div>

        </div>

        <div className = 'project-box'>
            <span>Portfolio Website</span>
            <img className = 'projectImage' src = {portfolioProject} alt = 'First Project'></img>
            <p>This is my portfolio website</p>
        </div>



      </div>
                  
    </div>
  )
}

export default Projects
