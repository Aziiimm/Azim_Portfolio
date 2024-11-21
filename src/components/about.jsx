import React from "react";
import heroimage from "../assets/heroimage.jpg";
import "../styles/about.css";

const About = () => {
  return (
    <section id="about" className="hero">
      <div className="aboutContainer">
        <div>
          <img className="coverpicture" src={heroimage} alt="Me"></img>
        </div>

        <div className="bioContainer">
          <h2>
            <span className="hello">Hello Everyone,</span>
          </h2>

          <div>
            <p className="aboutme">
              My name is&nbsp;<strong>Azim</strong>, and I'm an
            </p>
            <p className="aboutme">Aspiring Software Engineer</p>

            <p className="shortbio">
              I'm currently a student at CUNY City College, and I have a deep
              passion for problem solving, programming, and creating. I am a
              quick learner, and I enjoy exploring new technologies and
              expanding my skillset!
            </p>

            <p className="shortbio">
              Outside of tech, I'm a huge sports enthusaist, I love playing or
              watching basketball. I also enjoy reading or playing sci-fi games,
              puzzling, or spending time with friends!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
