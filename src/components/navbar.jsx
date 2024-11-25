import React, { useState } from "react";
import Socials from "./socials";
import "../styles/navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="nav" role="navigation">
        <div className="nav__items">
          <div>
            <a className="nav__logo nav__icons" href="/">
              Azim Rahat
            </a>
          </div>

          <button
            aria-label="Open menu"
            aria-expanded={isOpen}
            className="nav__burger-menu"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <GiHamburgerMenu />
          </button>

          <div className={`nav__menu ${isOpen ? "open" : ""}`}>
            <div className="nav__sections">
              <a className="nav__icons" href="#about">
                About
              </a>
              <a className="nav__icons" href="#experience">
                Experience
              </a>
              <a className="nav__icons" href="#skills">
                Skills
              </a>
              <a className="nav__icons" href="#projects">
                Projects
              </a>
              <a className="nav__icons" href="#contact">
                Contact
              </a>
            </div>

            <span>
              <Socials containerClass="nav__socials" linkClass="nav__icons" />
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
