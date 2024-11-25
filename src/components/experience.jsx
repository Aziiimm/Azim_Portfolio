import React from "react";
import STEMKasa from "../assets/employers/stemkasa.jpg";
import "../styles/experience.css";

function Experience() {
  return (
    <section className="container" id="experience">
      <header>
        <h1 className="title">Experience</h1>
      </header>

      <ul className="experience__list">
        <article className="experience__card">
          <img src={STEMKasa} alt="STEMKasa logo"></img>
          <div>
            <h2 className="experience__employer">
              <strong>Software Engineer Intern · STEMKasa</strong>
            </h2>
            <p className="experience__time">May 2024 - Present</p>
            <p className="experience__description">
              Built RESTful APIs with Flask and Node.js to integrate OpenAI’s
              GPT-4, enhancing engagement by 20% with React.js and optimizing
              database performance with MongoDB. Collaborated in Agile sprints
              to integrate services and ensure reliability through end-to-end
              testing.
            </p>
          </div>
        </article>
      </ul>
    </section>
  );
}
export default Experience;
