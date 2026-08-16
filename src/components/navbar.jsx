import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MobileThemeToggle } from "./theme-toggle";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-bp-line bg-bp-bg/40 sticky top-0 z-50 border-b backdrop-blur-md lg:hidden">
      <div className="mx-auto w-full max-w-5xl px-4 py-4 sm:px-6 lg:px-8">
        <nav
          className="flex flex-col md:flex-row md:items-center md:justify-between"
          role="navigation"
        >
          <div className="flex items-center justify-between">
            <a
              className="text-bp-text hover:text-bp-accent font-mono text-xl font-bold tracking-tight transition-colors duration-300"
              href="/"
            >
              Azim Rahat
            </a>

            <div className="flex items-center gap-3">
              <MobileThemeToggle />
              <button
                aria-label="Open menu"
                aria-expanded={isOpen}
                className="text-bp-text text-2xl md:hidden"
                type="button"
                onClick={() => setIsOpen(!isOpen)}
              >
                <GiHamburgerMenu />
              </button>
            </div>
          </div>

          <div
            className={`${
              isOpen ? "flex" : "hidden"
            } mt-4 grid grid-cols-3 items-center justify-items-center gap-3 font-mono text-xs uppercase tracking-wider md:mt-0 md:flex md:flex-row md:gap-0 md:space-x-8 md:text-[11px]`}
          >
            <a
              className="text-bp-muted hover:text-bp-accent transition-colors duration-300"
              href="#about"
            >
              About
            </a>
            <a
              className="text-bp-muted hover:text-bp-accent transition-colors duration-300"
              href="#education"
            >
              Education
            </a>
            <a
              className="text-bp-muted hover:text-bp-accent transition-colors duration-300"
              href="#experience"
            >
              Experience
            </a>
            <a
              className="text-bp-muted hover:text-bp-accent transition-colors duration-300"
              href="#projects"
            >
              Projects
            </a>
            <a
              className="text-bp-muted hover:text-bp-accent transition-colors duration-300"
              href="#skills"
            >
              Skills
            </a>
            <a
              className="text-bp-muted hover:text-bp-accent transition-colors duration-300"
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
