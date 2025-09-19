import React from "react";
import heroimage from "../assets/heroimage.jpg";
import { MdOutlineArrowOutward } from "react-icons/md";

const Hero = () => {
  // Resume link - update this in one place to change everywhere
  const resumeLink =
    "https://drive.google.com/file/d/1GpuuU16KXIDun1I5XZ70bTQTGWS0y4gx/view?usp=sharing";

  return (
    <section className="mb-8">
      <div className="flex flex-col items-center gap-8 md:gap-12 lg:flex-row">
        {/* Image - appears first on mobile, second on desktop */}
        <div className="order-1 flex flex-1 justify-center lg:order-2">
          <img
            src={heroimage}
            alt="Azim Rahat"
            className="h-48 w-48 rounded-full border-4 border-white/30 object-cover shadow-2xl sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80"
          />
        </div>

        {/* Text and buttons - appears second on mobile, first on desktop */}
        <div className="order-2 flex-1 text-center lg:order-1 lg:text-left">
          <h1 className="mb-4 text-white sm:mb-6">
            <span className="text-2xl font-medium sm:text-3xl md:text-4xl lg:text-4xl">
              Hi Everyone, I'm
            </span>
            <br />
            <span className="text-3xl font-semibold sm:text-4xl md:text-5xl lg:text-6xl">
              <u>Azim Rahat</u>
            </span>
          </h1>
          <p className="mb-4 text-lg font-medium text-white sm:text-xl md:text-2xl">
            I'm a Software Engineer
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-full border-2 border-white bg-transparent px-6 py-2 text-base font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-gray-800 sm:px-8 sm:py-3 sm:text-lg"
            >
              View My Work
            </button>
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-white bg-transparent px-6 py-2 text-center text-base font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-gray-800 sm:px-8 sm:py-3 sm:text-lg"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="mt-8 text-white">
        <p className="mb-4 text-center text-sm leading-relaxed sm:mb-6 sm:text-left sm:text-base md:text-lg">
          I'm currently a student at CUNY City College, and I have a deep
          passion for problem solving, programming, and creating. I am a quick
          learner, and I enjoy exploring new technologies and expanding my
          skillset! Feel free to reach out to me, and check out my{" "}
          <a
            href="https://github.com/Aziiimm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold transition-colors duration-300 hover:text-blue-800"
          >
            GitHub
            <MdOutlineArrowOutward className="text-sm" />
          </a>
          ,{" "}
          <a
            href="https://www.linkedin.com/in/azim-rahat/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold transition-colors duration-300 hover:text-blue-800"
          >
            LinkedIn
            <MdOutlineArrowOutward className="text-sm" />
          </a>
          , and my{" "}
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold transition-colors duration-300 hover:text-blue-800"
          >
            Resume
            <MdOutlineArrowOutward className="text-sm" />
          </a>
          .
        </p>

        <p className="text-center text-sm leading-relaxed sm:text-left sm:text-base md:text-lg">
          Outside of tech, I'm a huge sports enthusiast. I love playing or
          watching basketball. I also enjoy reading or playing sci-fi games,
          puzzling, or spending time with friends!
        </p>
      </div>
    </section>
  );
};

export default Hero;
