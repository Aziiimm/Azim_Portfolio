import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
        <nav
          className="rounded-xl bg-white/20 p-3 shadow-lg backdrop-blur-lg sm:p-5"
          role="navigation"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center justify-between">
              <a
                className="text-2xl font-semibold text-white transition-colors duration-300 hover:text-white/80"
                href="/"
              >
                Azim Rahat
              </a>

              <button
                aria-label="Open menu"
                aria-expanded={isOpen}
                className="text-2xl text-white md:hidden"
                type="button"
                onClick={() => setIsOpen(!isOpen)}
              >
                <GiHamburgerMenu />
              </button>
            </div>

            <div
              className={`${
                isOpen ? "flex" : "hidden"
              } mt-4 grid grid-cols-3 items-center justify-items-center gap-3 md:mt-0 md:flex md:flex-row md:gap-0 md:space-x-8`}
            >
              <a
                className="font-medium text-white transition-colors duration-300 hover:text-white/80"
                href="#about"
              >
                About
              </a>
              <a
                className="font-medium text-white transition-colors duration-300 hover:text-white/80"
                href="#education"
              >
                Education
              </a>
              <a
                className="font-medium text-white transition-colors duration-300 hover:text-white/80"
                href="#experience"
              >
                Experience
              </a>
              <a
                className="font-medium text-white transition-colors duration-300 hover:text-white/80"
                href="#projects"
              >
                Projects
              </a>
              <a
                className="font-medium text-white transition-colors duration-300 hover:text-white/80"
                href="#skills"
              >
                Skills
              </a>
              <a
                className="font-medium text-white transition-colors duration-300 hover:text-white/80"
                href="#contact"
              >
                Contact
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
