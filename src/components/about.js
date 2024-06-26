import React from "react";
import coverpicture from "../assets/image1.jpg";
import "../styles/about.css";

const About = () => {
  return (
    <section id="about" className="hero">
      <div className="aboutContainer">
        <div>
          <img
            className="coverpicture"
            src={coverpicture}
            alt="Azim Rahat"
          ></img>
        </div>

        <div className="bioContainer">
          <h1>
            <span className="hello">Hello Everyone,</span>
          </h1>

          <div>
            <span className="aboutme">
              My name is&nbsp;<strong>Azim</strong>, and I'm an
            </span>
            <span className="aboutme">Aspiring Software Engineer</span>

            <span className="shortbio">
              I'm currently a student at CUNY City College, and I have a deep
              passion for problem solving, programming, and creating. I am a
              quick learner, and I enjoy exploring new technologies and
              expanding my skillset!
            </span>

            <span id="skills" className="shortbio">
              When I'm not on the computer, I'm usually playing or watching
              basketball, reading sci-fi books, baking, or playing strategy
              games!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
