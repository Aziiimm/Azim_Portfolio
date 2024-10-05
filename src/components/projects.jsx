import React from "react";
import calculatorproject from "../assets/projects/calculatorproject.gif";
import textgame from "../assets/projects/textgame.gif";
import "../styles/projects.css";

const projectData = [
  {
    img: calculatorproject,
    alt: "Calcify calculator project",
    title: "Calcify",
    description: "A calculator capable of solving basic calculus functions!",
    techStack: ["JavaScript", "React", "Tailwind"],
    link: "https://github.com/Aziiimm/Calcify",
  },
  {
    img: textgame,
    alt: "Text-Based Adventure Game project",
    title: "Text-Based Adventure Game",
    description:
      "A story-driven adventure game where users navigate through a fantasy world with different path options.",
    techStack: ["C++"],
    link: "https://github.com/Aziiimm/Text-Based-Adventure-Game",
  },
];

const Projects = () => {
  return (
    <section className="container" id="projects">
      <header>
        <h1 className="title">Projects</h1>
      </header>

      <ul
        className="projectsList"
        aria-label="List of projects I have worked on!"
      >
        {projectData.map((project, index) => (
          <li className="project-card" key={index}>
            <img src={project.img} alt={project.alt}></img>
            <div className="content-slate">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} project on GitHub`}
              >
                {project.title}
              </a>
              <p>{project.description}</p>

              <div className="project-stack">
                {project.techStack.map((tech, i) => (
                  <div key={i}>{tech}</div>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
