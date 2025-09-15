import React from "react";
import * as technologies from "../assets/technologies";

const Skills = () => {
  const techs = [
    { name: "JavaScript", img: technologies.javascript },
    { name: "TypeScript", img: technologies.ts },
    { name: "React", img: technologies.reactjs },
    { name: "HTML5", img: technologies.html5 },
    { name: "CSS3", img: technologies.css3 },
    { name: "Tailwind", img: technologies.tailwindcss },
    { name: "Next.js", img: technologies.nextjs },
    { name: "jQuery", img: technologies.jquery },
    { name: "Node.js", img: technologies.nodejs },
    { name: "Express.js", img: technologies.expressjs },
    { name: "Python", img: technologies.python },
    { name: "Flask", img: technologies.flask },
    { name: "C++", img: technologies.cplusplus },
    { name: "Java", img: technologies.java },
    { name: "MySQL", img: technologies.sql },
    { name: "MongoDB", img: technologies.mongodb },
    { name: "PostgreSQL", img: technologies.postgres },
    { name: "AWS", img: technologies.aws },
    { name: "Git", img: technologies.git },
    { name: "Docker", img: technologies.docker },
    { name: "Redis", img: technologies.redis },
    { name: "Scikit-learn", img: technologies.scikit },
    { name: "TensorFlow", img: technologies.tensorflow },
    { name: "Pandas", img: technologies.pandas },
  ];

  return (
    <section className="mb-8 sm:mb-16" id="skills">
      <h2 className="mb-4 text-2xl font-semibold text-white sm:text-3xl">
        Technical Skills
      </h2>

      <div className="relative overflow-hidden">
        <div
          className="skills-carousel flex gap-4 py-4 sm:gap-6"
          style={{
            animation: `scroll-${techs.length} 15s linear infinite`,
          }}
        >
          {techs.map((tech, techIndex) => (
            <div
              className="skill-card flex min-w-[100px] flex-shrink-0 cursor-pointer flex-col items-center justify-center rounded-lg bg-white/60 p-3 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:min-w-[120px] sm:p-4"
              key={tech.name}
            >
              <img
                className="mb-1 h-8 w-8 sm:mb-2 sm:h-12 sm:w-12"
                src={tech.img}
                alt={`${tech.name} logo`}
                loading="lazy"
              />
              <span className="text-center text-xs font-medium text-gray-700 sm:text-sm">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
