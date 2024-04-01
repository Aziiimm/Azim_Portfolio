import React from 'react'
import '../styles/skills.css'
import cplusplus from '../assets/technologies/cplusplus.svg'
import java from '../assets/technologies/java.svg'
import javascript from '../assets/technologies/javascript.svg'
import html5 from '../assets/technologies/html.svg'
import css3 from '../assets/technologies/css3.svg'
import reactjs from '../assets/technologies/react.svg'
import tailwindcss from '../assets/technologies/tailwindcss.svg'
import git from '../assets/technologies/git.svg'
import mongodb from '../assets/technologies/mongodb.svg'
import sql from '../assets/technologies/mysql.svg'
import jquery from '../assets/technologies/jquery.svg'
import nodejs from '../assets/technologies/nodejs.svg'
import python from '../assets/technologies/python.svg'

const Skills = () => {
  return (

    <section className = 'skillsContainer'>

      <h1 id = 'skills' className = 'title'>
        <span className = 'skillsHead'>
          Tech Stack
        </span>
      </h1>

      <div className = 'skills'>
        
        <div className = 'techs'>
          <div>
            <img className = 'logo' src = {cplusplus} alt = 'undefined'></img>
            C++
          </div>
        </div>        
        
        <div className = 'techs'>
          <div>
            <img className = 'logo' src = {java} alt = 'undefined'></img>
            Java
          </div>
        </div>
        
        <div className = 'techs'>
          <div>
            <img className = 'logo' src = {javascript} alt = 'undefined'></img>
            JavaScript
          </div>
        </div>      

        <div className = 'techs'>
          <div>
            <img className = 'logo' src = {html5} alt = 'undefined'></img>
            HTML
          </div>
        </div>

        <div className = 'techs'>
          <div>
            <img className = 'logo' src = {css3} alt = 'undefined'></img>
            CSS
          </div>
        </div>


        <div className = 'techs'>
          <div>
            <img className = 'logo' src = {reactjs} alt = 'undefined'></img>
            React
          </div>
        </div>

        <div className = 'techs'>
          <div>
            <img className = 'logo' src = {tailwindcss} alt = 'undefined'></img>
            Tailwind CSS
          </div>
        </div>

        <div className = 'techs'>
          <div>
            <img className = 'logo' src = {git} alt = 'undefined'></img>
            Git
          </div>
        </div>

        <div className = 'techs'>
          <div>
            <img className = 'logo' src = {mongodb} alt = 'undefined'></img>
            MongoDB
          </div>
        </div>

        <div className = 'techs'>
          <div>
            <img className = 'logo' src = {sql} alt = 'undefined'></img>
            MySQL
          </div>
        </div>

        <div className = 'techs'>
          <div>
            <img className = 'logo' src = {python} alt = 'undefined'></img>
            Python
          </div>
        </div>

        <div className = 'techs'>
          <div>
            <img className = 'logo' src = {jquery} alt = 'undefined'></img>
            jQuery
          </div>
        </div>

        <div className = 'techs'>
          <div>
            <img className = 'logo' src = {nodejs} alt = 'undefined'></img>
            Node.js
          </div>
        </div>

      </div>

    </section>

  )
}

export default Skills
