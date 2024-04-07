import "../styles/projects.css";
import calculatorproject from "../assets/calculatorproject.gif";
import textgame from "../assets/textgame.gif";
import React from "react";

const Projects = () => {
  return (
    <div className="projectsContainer">
      <h1 className="title">
        <span className="projectsHead">Projects</span>
      </h1>

      <div className="projectsList">
        <div className="project-card">
          <img src={calculatorproject} alt="project 1"></img>
          <div className="content-slate">
            <a href="https://github.com/Aziiimm/Calcify">Calcify</a>
            <p>A calculator capable of solving basic calculus functions!</p>

            <div className="project-stack">
              <div>JavaScript</div>
              <div>React</div>
              <div>HTML</div>
              <div>Tailwind</div>
            </div>
          </div>
        </div>

        <div className="project-card">
          <img src={textgame} alt="project 2"></img>
          <div className="content-slate">
            <a href="https://github.com/Aziiimm/Text-Based-Adventure-Game">Text-Based Adventure Game</a>
            <p>
              A story driven adventure game where users navigate through a
              fantasy world with different path options.
            </p>

            <div id="contact" className="project-stack">
              <div>C++</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
