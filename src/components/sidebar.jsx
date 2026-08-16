import React from "react";
import heroimage from "../assets/heroimage.webp";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const resumeLink = "/Azim_Rahat_Resume.pdf";

const Profile = () => (
  <>
    <img
      src={heroimage}
      alt="Azim Rahat"
      className="h-48 w-48 flex-shrink-0 rounded-lg border border-solid border-bp-accent object-cover p-1 lg:h-auto lg:w-full lg:aspect-square"
    />
    <h1 className="mb-0.5 mt-3 font-mono text-3xl font-bold tracking-tight text-bp-text">
      Azim Rahat
    </h1>
    <p className="mb-0 font-mono text-[11px] uppercase tracking-widest text-bp-muted underline decoration-bp-accent decoration-1 underline-offset-4">
      Software Engineer
    </p>
    <span className="mt-3 inline-flex items-center gap-2 rounded border border-bp-line px-2.5 py-1.5 font-mono text-[10.5px] text-bp-text">
      <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
      </span>
      Open to Full-Time SWE Roles
    </span>
  </>
);

const Ctas = ({ row, large }) => (
  <div className={`flex gap-2 ${row ? "flex-col sm:flex-row" : "flex-col"}`}>
    <button
      onClick={() =>
        document
          .getElementById("projects")
          ?.scrollIntoView({ behavior: "smooth" })
      }
      className={`rounded border border-bp-accent bg-bp-accent text-center font-mono font-semibold text-bp-bg transition-all duration-300 hover:bg-transparent hover:text-bp-accent ${large ? "px-6 py-3 text-sm" : "px-4 py-2 text-xs"}`}
    >
      View My Work
    </button>
    <a
      href={resumeLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`rounded border border-bp-accent text-center font-mono font-semibold text-bp-accent transition-all duration-300 hover:bg-bp-accent hover:text-bp-bg ${large ? "px-6 py-3 text-sm" : "px-4 py-2 text-xs"}`}
    >
      Resume &rarr;
    </a>
  </div>
);

function Sidebar() {
  return (
    <>
      {/* Desktop: sticky left sidebar */}
      <aside className="hidden lg:sticky lg:top-8 lg:flex lg:w-56 lg:flex-shrink-0 lg:flex-col lg:gap-6 lg:self-start">
        <div className="flex flex-col">
          <Profile />
        </div>
        <Ctas />
        <nav
          aria-label="Section navigation"
          className="flex flex-col gap-2.5 border-t border-bp-line pt-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] uppercase tracking-wider text-bp-muted transition-colors duration-300 hover:text-bp-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-col gap-2 border-t border-bp-line pt-4">
          <a
            href="https://github.com/Aziiimm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-bp-muted transition-colors duration-300 hover:text-bp-accent"
          >
            <AiFillGithub className="text-sm" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/azim-rahat/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-bp-muted transition-colors duration-300 hover:text-bp-accent"
          >
            <AiFillLinkedin className="text-sm" /> LinkedIn
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-bp-muted transition-colors duration-300 hover:text-bp-accent"
          >
            <MdEmail className="text-sm" /> Email
          </a>
        </div>
      </aside>

      {/* Mobile / tablet: top block, nav handled by the hamburger navbar */}
      <div className="mb-8 flex flex-col items-center gap-4 text-center lg:hidden">
        <div className="flex flex-col items-center">
          <Profile />
        </div>
        <Ctas row large />
      </div>
    </>
  );
}

export default Sidebar;
