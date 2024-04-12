import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IoDocument } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import "../styles/navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bar">
      <div className="barItems">
        <div>
          <a className="main navButtons" href="/">
            Azim Rahat
          </a>
        </div>

        <button
          aria-label="Open menu"
          className="burger-menu"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <GiHamburgerMenu />
        </button>

        <div className={`rightGrid ${isOpen ? "open" : ""}`}>
          <div className="sections">
            <a className="navButtons" href="#about">
              About
            </a>
            <a className="navButtons" href="#skills">
              Skills
            </a>
            <a className="navButtons" href="#projects">
              Projects
            </a>
            <a className="navButtons" href="#contact">
              Contact
            </a>
          </div>

          <div className="socials">
            <a
              class="navButtons"
              href="https://github.com/Aziiimm"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <AiFillGithub />
            </a>
            <a
              class="navButtons"
              href="https://www.linkedin.com/in/azim-rahat/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <AiFillLinkedin />
            </a>

            <a
              class="navButtons"
              href="https://drive.google.com/file/d/1oP2GkQ5Bzxb4mmsAnD1dQJBtrf4oBnAL/view"
              target="_blank"
              rel="noopener noreferrer"
              title="Resume"
            >
              <IoDocument />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
