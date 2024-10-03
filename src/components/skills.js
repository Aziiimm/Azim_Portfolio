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
  ts,
  flask,
} from "../assets/technologies";

const Skills = () => {
  const techs = [
    { name: "C++", img: cplusplus },
    { name: "Java", img: java },
    { name: "JavaScript", img: javascript },
    { name: "TypeScript", img: ts },
    { name: "HTML5", img: html5 },
    { name: "CSS3", img: css3 },
    { name: "React", img: reactjs },
    { name: "Tailwind", img: tailwindcss },
    { name: "Git", img: git },
    { name: "MongoDB", img: mongodb },
    { name: "MySQL", img: sql },
    { name: "Python", img: python },
    { name: "jQuery", img: jquery },
    { name: "Node.js", img: nodejs },
    { name: "Flask", img: flask },
  ];

  return (
    <section className="skillsContainer">
      <header>
        <h1 className="title">Tech Stack</h1>
      </header>

      <ul className="skills">
        {techs.map((tech) => (
          <li className="techs" key={tech.name}>
            <img
              className="logo"
              src={tech.img}
              alt={`${tech.name} logo`}
              loading="lazy"
            />
            {tech.name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
