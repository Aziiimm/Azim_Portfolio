import React, { useState } from "react";
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
  aws,
  docker,
  expressjs,
  nextjs,
  postgres,
} from "../assets/technologies";
import "../styles/skills.css";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const techs = [
    { name: "JavaScript", img: javascript, category: ["frontend", "backend"] },
    { name: "TypeScript", img: ts, category: ["frontend", "backend"] },
    { name: "React", img: reactjs, category: ["frontend"] },
    { name: "HTML5", img: html5, category: ["frontend"] },
    { name: "CSS3", img: css3, category: ["frontend"] },
    { name: "Tailwind", img: tailwindcss, category: ["frontend"] },
    // { name: "Next.js", img: nextjs, category: ["frontend", "backend"] },
    { name: "jQuery", img: jquery, category: ["frontend"] },
    { name: "Node.js", img: nodejs, category: ["backend"] },
    { name: "Express.js", img: expressjs, category: ["backend"] },
    { name: "Python", img: python, category: ["backend"] },
    { name: "Flask", img: flask, category: ["backend"] },
    { name: "C++", img: cplusplus, category: ["backend"] },
    { name: "Java", img: java, category: ["backend"] },
    { name: "MySQL", img: sql, category: ["database"] },
    { name: "MongoDB", img: mongodb, category: ["database"] },
    { name: "PostgreSQL", img: postgres, category: ["database"] },
    // { name: "AWS", img: aws, category: ["database", "tools"] },
    { name: "Git", img: git, category: ["tools"] },
    { name: "Docker", img: docker, category: ["tools"] },
  ];

  const categories = ["all", "frontend", "backend", "database", "tools"];

  const filteredTechs =
    selectedCategory === "all"
      ? techs
      : techs.filter((tech) => tech.category.includes(selectedCategory));

  return (
    <section className="container" id="skills">
      <header>
        <h1 className="title">Technical Skills</h1>
      </header>

      <div className="filters">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <ul className="skills">
        {filteredTechs.map((tech) => (
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
