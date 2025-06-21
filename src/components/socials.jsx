import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IoDocument } from "react-icons/io5";

function Socials({ containerClass, linkClass }) {
  return (
    <div className={containerClass}>
      <a
        className={linkClass}
        href="https://github.com/Aziiimm"
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub"
      >
        <AiFillGithub aria-label="GitHub" />
      </a>
      <a
        className={linkClass}
        href="https://www.linkedin.com/in/azim-rahat/"
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn"
      >
        <AiFillLinkedin aria-label="LinkedIn" />
      </a>
      <a
        className={linkClass}
        href="https://drive.google.com/file/d/1u-SE1GxT25UZ1mRP1EMQFcsyldc_RD-d/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        title="Resume"
      >
        <IoDocument aria-label="Resume" />
      </a>
    </div>
  );
}

export default Socials;
