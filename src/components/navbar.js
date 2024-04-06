import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IoDocument } from "react-icons/io5";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="bar">
      <div className="barItems">
        <div>
          <a className="main navButtons" href="/">
            Azim Rahat
          </a>
        </div>
        <div className="rightGrid">
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
              href="https://drive.google.com/file/d/1lQSV71MsqMI7n5e8wtP6r3KD3VMR5pp4/view"
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
