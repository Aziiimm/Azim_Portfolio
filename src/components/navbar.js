import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import '../styles/navbar.css'

function Navbar() {

    return (
      
        <nav className = 'bar'>
            <div className = 'barItems'>
                <div><a className = 'main' href= "/">Azim Rahat</a></div>
            <div className = 'rightGrid'>
                <div>
                    <div className = 'sections'>
                        <a className = 'navButtons' href = '#about'>About</a>
                        <a className = 'navButtons' href = '#skills'>Skills</a>
                        <a className = 'navButtons' href = '#project'>Projects</a>
                        <a className = 'navButtons' href = '#resume'>Resume</a>
                        <a className = 'navButtons' href = '#contact'>Contact</a>
                    </div>
                </div>
                    <div className = 'socials'>
                        <a class = 'navButtons' 
                            href = 'https://github.com/Aziiimm' 
                            target='_blank' rel='noopener noreferrer'>
                            <AiFillGithub />
                        </a>
                        <a class = 'navButtons' 
                            href = 'https://www.linkedin.com/in/azim-rahat/' 
                            target='_blank' rel='noopener noreferrer'>
                            <AiFillLinkedin />
                        </a>
                    </div>
            </div>
            </div>
        </nav>

    );
  }
  
  export default Navbar;
