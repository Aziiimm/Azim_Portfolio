import React from "react";
import textgame from "../assets/projects/textgame.gif";
import binyc from "../assets/projects/binyc.gif";
import shotcaller from "../assets/projects/shotcaller.gif";
import encrypter from "../assets/projects/encrypter.gif";
import "../styles/projects.css";
import { MdOutlineArrowOutward } from "react-icons/md";

const projectData = [
  {
    img: shotcaller,
    alt: "ShotCaller project",
    title: "ShotCaller",
    description: "Predict NBA and Fantasy League Match outcomes!",
    techStack: [
      "Python",
      "Beautiful Soup",
      "Pandas",
      "Scikit-learn",
      "PostgreSQL",
      "Flask",
      "Vite",
      "React",
      "Typescript",
      "Heroku",
    ],
    link: "https://shot-caller-five.vercel.app/",
  },
  {
    img: binyc,
    alt: "BINyc project",
    title: "BINyc",
    description:
      "See or report any trash sightings in NYC to keep the city clean!",
    techStack: ["Vite", "React", "Express", "Tailwind", "Leaflet", "MongoDB"],
    link: "https://github.com/Aziiimm/BINyc",
  },
  {
    img: encrypter,
    alt: "Customer Encrypter/Decrypter project",
    title: "Custom Encrypter/Decrypter",
    description:
      "A custom encryption/decryption tool applying an original cipher method! ",
    techStack: ["Java"],
    link: "https://github.com/Aziiimm/custom-encrypter-decrypter",
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
                <span className="arrow">
                  <MdOutlineArrowOutward />
                </span>
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
