import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const resumeLink = "/Azim_Rahat_Resume.pdf";

const Hero = () => {
  return (
    <section className="mb-8 sm:mb-16" id="about">
      <p className="text-bp-muted mb-4 text-center font-mono text-sm font-medium leading-relaxed sm:text-left sm:text-base lg:mb-6">
        Hey 👋! I'm a software engineer graduating from CUNY City College in
        December 2026. I recently interned at OnePay, a fintech startup backed
        by Walmart.
      </p>
      <p className="text-bp-muted mb-4 text-center font-mono text-sm font-medium leading-relaxed sm:text-left sm:text-base lg:mb-6">
        I have a deep passion for creating and problem solving, and I'm
        currently looking for full-time Software Engineer roles. Feel free to
        reach out, and check out my <br />
        <a
          href="https://github.com/Aziiimm"
          target="_blank"
          rel="noopener noreferrer"
          className="text-bp-text hover:text-bp-accent inline-flex items-center gap-1 font-bold transition-colors duration-300"
        >
          GitHub
          <MdOutlineArrowOutward className="text-sm" />
        </a>
        ,{" "}
        <a
          href="https://www.linkedin.com/in/azim-rahat/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-bp-text hover:text-bp-accent inline-flex items-center gap-1 font-bold transition-colors duration-300"
        >
          LinkedIn
          <MdOutlineArrowOutward className="text-sm" />
        </a>
        , and{" "}
        <a
          href={resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-bp-text hover:text-bp-accent inline-flex items-center gap-1 font-bold transition-colors duration-300"
        >
          Resume
          <MdOutlineArrowOutward className="text-sm" />
        </a>
        .
      </p>

      <p className="text-bp-muted text-center font-mono text-sm font-medium leading-relaxed sm:text-left sm:text-base">
        Outside of tech, I'm a big basketball fan, and I love hiking! I also
        enjoy the fantasy genre, whether it's reading or playing video games.
      </p>
    </section>
  );
};

export default Hero;
