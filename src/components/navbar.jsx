import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-bp-line bg-bp-bg/90 backdrop-blur-md lg:hidden">
      <div className="mx-auto w-full max-w-5xl px-4 py-4 sm:px-6 lg:px-8">
        <nav
          className="flex flex-col md:flex-row md:items-center md:justify-between"
          role="navigation"
        >
          <div className="flex items-center justify-between">
            <a
              className="font-mono text-xl font-bold tracking-tight text-bp-text transition-colors duration-300 hover:text-bp-accent"
              href="/"
            >
              Azim Rahat
            </a>

            <button
              aria-label="Open menu"
              aria-expanded={isOpen}
              className="text-2xl text-bp-text md:hidden"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
            >
              <GiHamburgerMenu />
            </button>
          </div>

          <div
            className={`${
              isOpen ? "flex" : "hidden"
            } mt-4 grid grid-cols-3 items-center justify-items-center gap-3 font-mono text-xs uppercase tracking-wider md:mt-0 md:flex md:flex-row md:gap-0 md:space-x-8 md:text-[11px]`}
          >
            <a
              className="text-bp-muted transition-colors duration-300 hover:text-bp-accent"
              href="#about"
            >
              About
            </a>
            <a
              className="text-bp-muted transition-colors duration-300 hover:text-bp-accent"
              href="#education"
            >
              Education
            </a>
            <a
              className="text-bp-muted transition-colors duration-300 hover:text-bp-accent"
              href="#experience"
            >
              Experience
            </a>
            <a
              className="text-bp-muted transition-colors duration-300 hover:text-bp-accent"
              href="#projects"
            >
              Projects
            </a>
            <a
              className="text-bp-muted transition-colors duration-300 hover:text-bp-accent"
              href="#skills"
            >
              Skills
            </a>
            <a
              className="text-bp-muted transition-colors duration-300 hover:text-bp-accent"
              href="#contact"
            >
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
