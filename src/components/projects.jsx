import React, { useState } from "react";
import binycMp4 from "../assets/projects/binyc.mp4";
import binycWebm from "../assets/projects/binyc.webm";
import shotcallerMp4 from "../assets/projects/shotcaller.mp4";
import shotcallerWebm from "../assets/projects/shotcaller.webm";
import encrypterMp4 from "../assets/projects/encrypter.mp4";
import encrypterWebm from "../assets/projects/encrypter.webm";
import quickbidMp4 from "../assets/projects/quickbid.mp4";
import quickbidWebm from "../assets/projects/quickbid.webm";
import jumble from "../assets/projects/jumble_banner.webp";
import cosmiccareMp4 from "../assets/projects/cosmiccare.mp4";
import cosmiccareWebm from "../assets/projects/cosmiccare.webm";
import capstone from "../assets/projects/capstone.webp";
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
    img: capstone,
    alt: "GPU-Accelerated Recommender System",
    title: "GPU-Accelerated Recommender",
    description:
      "A GPU-accelerated recommender pipline on Hugging Face Amazon Reviews 2023 Dataset with over 571M reviews and 600k+ items.",
    link: "https://github.com/Aziiimm/capstone",
    techStack: [
      "NVIDIA Rapids (cuDF, cuML)",
      "CUDA",
      "Dask",
      "Python",
      "Pandas",
      "Scikit-learn",
      "FastAPI",
      "React",
    ],
  },
  {
    video: { mp4: shotcallerMp4, webm: shotcallerWebm },
    alt: "ShotCaller project demo",
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
    video: { mp4: cosmiccareMp4, webm: cosmiccareWebm },
    alt: "CosmicCare project demo",
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
    video: { mp4: quickbidMp4, webm: quickbidWebm },
    alt: "QuickBid project demo",
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
    video: { mp4: binycMp4, webm: binycWebm },
    alt: "BINyc project demo",
    title: "BINyc",
    description:
      "A trash reporting web app with interactive map visualizations, aiming to keep NYC clean.",
    link: "https://github.com/Aziiimm/BINyc",
    techStack: ["React", "Express", "Tailwind CSS", "Leaflet", "MongoDB"],
  },
  {
    video: { mp4: encrypterMp4, webm: encrypterWebm },
    alt: "Custom Encrypter/Decrypter project demo",
    title: "Custom Encrypter",
    description:
      "An encryption & decryption tool applying a custom cipher method for .txt file encryption.",
    link: "https://github.com/Aziiimm/custom-encrypter-decrypter",
    techStack: ["Java", "Java Swing"],
  },
];

const VISIBLE_COUNT = 3;

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll
    ? projectData
    : projectData.slice(0, VISIBLE_COUNT);
  const hasMore = projectData.length > VISIBLE_COUNT;

  return (
    <section className="mb-8 sm:mb-16" id="projects">
      <h2 className="mb-4 font-mono text-3xl font-bold tracking-tight text-bp-text sm:text-4xl">
        Projects
      </h2>
      <div className="space-y-4">
        {visibleProjects.map((project, index) => (
          <div
            key={index}
            className="rounded-md border border-bp-line bg-bp-surface p-3 transition-colors duration-300 hover:border-bp-accent sm:p-4"
          >
            <div className="flex flex-col items-stretch gap-3 md:gap-4 lg:flex-row">
              <div className="w-full flex-shrink-0 md:w-full lg:w-80">
                {project.video ? (
                  <video
                    className="h-48 w-full rounded object-cover saturate-[0.9] sm:h-56 md:h-64 lg:h-full lg:rounded-none"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    aria-label={project.alt}
                  >
                    <source src={project.video.webm} type="video/webm" />
                    <source src={project.video.mp4} type="video/mp4" />
                  </video>
                ) : project.img ? (
                  <img
                    src={project.img}
                    alt={project.alt}
                    loading="lazy"
                    className="h-48 w-full rounded object-cover saturate-[0.9] sm:h-56 md:h-64 lg:h-full lg:rounded-none"
                  />
                ) : (
                  <div className="flex h-48 w-full items-center justify-center rounded border border-bp-line bg-bp-bg sm:h-56 md:h-64 lg:h-full">
                    <span className="font-mono text-sm text-bp-muted">
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
                      className="inline-flex items-center gap-1 font-mono text-base font-bold text-bp-text transition-colors duration-150 hover:text-bp-accent sm:text-lg"
                    >
                      {project.title}
                      <MdOutlineArrowOutward className="text-lg text-bp-accent" />
                    </a>
                  </div>
                  <p className="mb-2 whitespace-pre-line font-mono text-xs font-medium text-bp-muted sm:text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-x-3 gap-y-1">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="font-mono text-xs text-bp-accent"
                      >
                        [{tech}]
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {hasMore && (
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="mt-4 rounded border border-bp-line px-4 py-2 font-mono text-xs text-bp-muted transition-colors duration-300 hover:border-bp-accent hover:text-bp-accent"
        >
          {showAll
            ? "View Less ↑"
            : `View More Projects (${projectData.length - VISIBLE_COUNT}) ↓`}
        </button>
      )}
    </section>
  );
};

export default Projects;
