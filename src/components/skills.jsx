import React from "react";
import * as technologies from "../assets/technologies";

const skillCategories = [
  {
    label: "Languages",
    items: [
      { name: "JavaScript", img: technologies.javascript },
      { name: "TypeScript", img: technologies.ts },
      { name: "Python", img: technologies.python },
      { name: "Java", img: technologies.java },
      { name: "C++", img: technologies.cplusplus },
      { name: "SQL", img: technologies.database },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "React", img: technologies.reactjs },
      { name: "React Native", img: technologies.reactjs },
      { name: "Next.js", img: technologies.nextjs, invert: true },
      { name: "HTML5", img: technologies.html5 },
      { name: "CSS3", img: technologies.css3 },
      { name: "Tailwind CSS", img: technologies.tailwindcss },
    ],
  },
  {
    label: "Backend & APIs",
    items: [
      { name: "Node.js", img: technologies.nodejs },
      { name: "NestJS", img: technologies.nestjs },
      { name: "Express.js", img: technologies.expressjs, invert: true },
      { name: "Flask", img: technologies.flask, invert: true },
      { name: "Django", img: technologies.django, invert: true },
      { name: "GraphQL", img: technologies.graphql },
      { name: "FastAPI", img: technologies.fastapi },
    ],
  },
  {
    label: "Data, Cache & Infra",
    items: [
      { name: "PostgreSQL", img: technologies.postgres },
      { name: "MySQL", img: technologies.sql },
      { name: "MongoDB", img: technologies.mongodb },
      { name: "Redis", img: technologies.redis },
      { name: "Docker", img: technologies.docker },
      { name: "Kubernetes", img: technologies.kubernetes },
      { name: "AWS", img: technologies.aws },
      { name: "Kafka", img: technologies.kafka, invert: true },
      { name: "Datadog", img: technologies.datadog },
    ],
  },
  {
    label: "ML, Testing & Tooling",
    items: [
      { name: "Pandas", img: technologies.pandas },
      { name: "Scikit-learn", img: technologies.scikit },
      { name: "TensorFlow", img: technologies.tensorflow },
      { name: "CUDA", img: technologies.nvidia },
      { name: "Selenium", img: technologies.selenium },
      { name: "Git", img: technologies.git },
    ],
  },
];

const Skills = () => {
  const skillCount = skillCategories.reduce(
    (total, cat) => total + cat.items.length,
    0,
  );

  return (
    <section className="mb-8 sm:mb-16" id="skills">
      <div className="mb-4 flex flex-col gap-1">
        <span className="text-bp-label font-mono text-xs uppercase tracking-widest">
          {skillCategories.length} Categories &middot; {skillCount} Skills
        </span>
        <h2 className="text-bp-text font-mono text-3xl font-bold tracking-tight sm:text-4xl">
          Technical Skills
        </h2>
      </div>

      <div className="flex flex-col gap-5">
        {skillCategories.map((category) => (
          <div key={category.label} className="flex flex-col gap-2.5">
            <div className="flex items-baseline gap-3">
              <span className="text-bp-muted whitespace-nowrap font-mono text-[11px] uppercase tracking-wider">
                {category.label}
              </span>
              <span
                className="bg-bp-line h-px flex-1"
                aria-hidden="true"
              ></span>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.items.map((tech) => (
                <span
                  key={tech.name}
                  className="border-bp-line bg-bp-chip text-bp-text hover:border-bp-accent inline-flex items-center gap-2 rounded border px-3 py-1.5 font-mono text-xs transition-colors duration-300"
                >
                  {tech.img && (
                    <img
                      className={`h-5 w-5 flex-shrink-0 object-contain ${tech.invert ? "invert" : ""}`}
                      src={tech.img}
                      alt=""
                      loading="lazy"
                    />
                  )}
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
