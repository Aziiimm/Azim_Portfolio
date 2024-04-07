import React from "react";
import "../styles/skills.css";

import {
  cplusplus,
  java,
  javascript,
  html5,
  css3,
  reactjs,
  tailwindcss,
  git,
  mongodb,
  sql,
  jquery,
  nodejs,
  python,
} from "../assets/technologies";

const Skills = () => {
  return (
    <section className="skillsContainer">
      <h1 className="title">
        <span className="skillsHead">Tech Stack</span>
      </h1>

      <div className="skills">
        <div className="techs">
          <div>
            <img className="logo" src={cplusplus} alt="undefined" />
            C++
          </div>
        </div>

        <div className="techs">
          <div>
            <img className="logo" src={java} alt="undefined" />
            Java
          </div>
        </div>

        <div className="techs">
          <div>
            <img className="logo" src={javascript} alt="undefined" />
            JavaScript
          </div>
        </div>

        <div className="techs">
          <div>
            <img className="logo" src={html5} alt="undefined" />
            HTML
          </div>
        </div>

        <div className="techs">
          <div>
            <img className="logo" src={css3} alt="undefined" />
            CSS
          </div>
        </div>

        <div className="techs">
          <div>
            <img className="logo" src={reactjs} alt="undefined" />
            React
          </div>
        </div>

        <div className="techs">
          <div>
            <img className="logo" src={tailwindcss} alt="undefined" />
            Tailwind
          </div>
        </div>

        <div className="techs">
          <div>
            <img className="logo" src={git} alt="undefined" />
            Git
          </div>
        </div>

        <div className="techs">
          <div>
            <img className="logo" src={mongodb} alt="undefined" />
            MongoDB
          </div>
        </div>

        <div className="techs">
          <div>
            <img className="logo" src={sql} alt="undefined" />
            MySQL
          </div>
        </div>

        <div className="techs">
          <div>
            <img className="logo" src={python} alt="undefined" />
            Python
          </div>
        </div>

        <div className="techs">
          <div>
            <img className="logo" src={jquery} alt="undefined" />
            jQuery
          </div>
        </div>

        <div className="techs">
          <div>
            <img id="projects" className="logo" src={nodejs} alt="undefined" />
            Node.js
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
