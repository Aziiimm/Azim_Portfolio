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
              Software Engineer Intern · STEMKasa
            </h2>
            <p className="experience__time">May 2024 - Present</p>
            <p className="experience__description">
              Developed RESTful API routes to integrate OpenAI's GPT-4 enabling
              an AI assistant learning bot. Built a React front end, and worked
              closely with cross-functional teams to implement multiple
              services.
            </p>
          </div>
        </article>
      </ul>
    </section>
  );
}
export default Experience;
