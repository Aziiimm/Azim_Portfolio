import "../styles/projects.css";
import portfolioProject from "../assets/portfolio.png";
import textgame from "../assets/textgame.gif"
import React from "react";

const Projects = () => {
  return (
    <div className="projectsContainer">
      <h1 className="title">
        <span className="projectsHead">Projects</span>
      </h1>

      <div className="projectsList">
        <div className="project-card">
          <img src={portfolioProject} alt="project 1"></img>
          <div className="content-slate">
            <a href="./">My Portfolio</a>
            <p>
              Testing this out to make it look nice and presentable for the
              future!
            </p>

            <div className="project-stack">
              <div>JavaScript</div>
              <div>React</div>
              <div>HTML</div>
              <div>CSS</div>
            </div>
          </div>
        </div>

        <div className="project-card">
          <img src={textgame} alt="project 2"></img>
          <div className="content-slate">
            <a href="./">Text-Based Adventure Game</a>
            <p>
              Testing this out to make it look nice and presentable for the
              future! This project will be a full stack application! TEST TEST
              TEST TEST TEST
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
