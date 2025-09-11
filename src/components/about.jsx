import React from "react";
import heroimage from "../assets/heroimage.jpg";
import "../styles/about.css";
import { MdOutlineArrowOutward } from "react-icons/md";

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
              expanding my skillset! Feel free to reach out to me, and check out
              my&nbsp;
              <a
                href="https://github.com/Aziiimm"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <strong>GitHub</strong>
                <MdOutlineArrowOutward />
              </a>
              , &nbsp;
              <a
                href="https://www.linkedin.com/in/azim-rahat/"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <strong>LinkedIn</strong>
                <MdOutlineArrowOutward />
              </a>
              , and my&nbsp;
              <a
                href="https://drive.google.com/file/d/15ohFvfw4gwTH7TieLKFtdNLia3JebI4Z/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <strong>Resume</strong>
                <MdOutlineArrowOutward />
              </a>
              .
            </p>

            <p className="shortbio">
              Outside of tech, I'm a huge sports enthusiast. I love playing or
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
