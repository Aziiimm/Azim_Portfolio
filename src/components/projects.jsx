import React from "react";
// import textgame from "../assets/projects/textgame.gif";
import binyc from "../assets/projects/binyc.gif";
import shotcaller from "../assets/projects/shotcaller.gif";
import encrypter from "../assets/projects/encrypter.gif";
import quickbid from "../assets/projects/quickbid.gif";
import jumble from "../assets/projects/jumble_banner.png";
import cosmiccare from "../assets/projects/cosmiccare.gif";
import { MdOutlineArrowOutward } from "react-icons/md";

const projectData = [
  {
    img: jumble,
    alt: "Jumble project",
    title: "Jumble",
    description:
      "Multiplayer party game platform with real time lobbies & gameplay. Play against friends!",
    link: "https://jumble-nine.vercel.app/",
    techStack: [
      "WebSockets",
      "Redis",
      "Docker",
      "AWS",
      "React",
      "TypeScript",
      "Express",
      "PostgreSQL",
    ],
  },
  {
    img: shotcaller,
    alt: "ShotCaller project",
    title: "ShotCaller",
    description:
      "Fantasy basketball matchup predictor using machine learning & data analysis.",
    link: "https://shot-caller-five.vercel.app/",
    techStack: [
      "Scikit-learn",
      "Pandas",
      "Python",
      "Flask",
      "PostgreSQL",
      "TypeScript",
      "BeautifulSoup",
    ],
  },
  {
    img: cosmiccare,
    alt: "CosmicCare project",
    title: "CosmicCare",
    description:
      "Emotional wellness app transforming your daily emotional journey into an interactive 3D solar system experience.",
    link: "https://cosmiccare.vercel.app/",
    techStack: [
      "Next.js",
      "TypeScript",
      "Three.js",
      "Supabase",
      "OpenAI Whisper",
      "Gemini API",
    ],
  },
  {
    img: quickbid,
    alt: "Quickbid project",
    title: "QuickBid",
    description:
      "A realtime e-bidding web app allowing users to list, purchase, and bid on items.",
    link: "https://github.com/Aziiimm/quickbid",
    techStack: [
      "React",
      "Express",
      "Tailwind CSS",
      "TypeScript",
      "Supabase",
      "Stripe API",
    ],
  },
  {
    img: binyc,
    alt: "BINyc project",
    title: "BINyc",
    description:
      "A trash reporting web app with interactive map visualizations, aiming to keep NYC clean.",
    link: "https://github.com/Aziiimm/BINyc",
    techStack: ["React", "Express", "Tailwind CSS", "Leaflet", "MongoDB"],
  },
  {
    img: encrypter,
    alt: "Customer Encrypter/Decrypter project",
    title: "Custom Encrypter",
    description:
      "An encryption & decryption tool applying a custom cipher method for .txt file encryption.",
    link: "https://github.com/Aziiimm/custom-encrypter-decrypter",
    techStack: ["Java", "Java Swing"],
  },
];

const Projects = () => {
  return (
    <section className="mb-8 sm:mb-16" id="projects">
      <h2 className="mb-4 text-2xl font-semibold text-white sm:text-3xl">
        Projects
      </h2>
      <div className="space-y-4">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="rounded-xl bg-white/60 p-3 shadow-lg transition-all duration-300 hover:shadow-xl sm:p-4"
          >
            <div className="flex flex-col items-stretch gap-3 md:gap-4 lg:flex-row">
              <div className="w-full flex-shrink-0 md:w-full lg:w-80">
                {project.img ? (
                  <img
                    src={project.img}
                    alt={project.alt}
                    className="h-48 w-full rounded-lg object-cover sm:h-56 md:h-64 lg:h-full lg:rounded-none"
                  />
                ) : (
                  <div className="flex h-48 w-full items-center justify-center rounded-lg bg-gray-200 sm:h-56 md:h-64 lg:h-full">
                    <span className="text-sm text-gray-500">
                      Image Coming Soon
                    </span>
                  </div>
                )}
              </div>
              <div className="w-full flex-1">
                <div className="flex flex-col">
                  <div className="mb-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-base font-bold text-gray-800 transition-colors duration-150 hover:text-blue-600 sm:text-lg md:text-xl"
                    >
                      {project.title}
                      <MdOutlineArrowOutward className="text-lg text-blue-600" />
                    </a>
                  </div>
                  <p className="mb-2 whitespace-pre-line text-xs text-gray-700 sm:text-sm md:text-base">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="rounded-full bg-[#0061ff] px-2 py-1 text-xs font-medium text-white sm:px-3"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
