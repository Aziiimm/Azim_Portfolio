import React from "react";
import Navbar from "./components/navbar";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Experience from "./components/experience";
import "./styles/App.css";

function App() {
  return (
    <div>
      <div className="navBehavior">
        <Navbar />
      </div>

      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
