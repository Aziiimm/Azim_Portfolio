import React from "react";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Hero from "./components/hero";
import Education from "./components/education";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Contact from "./components/contact";
import "./styles/App.css";

function App() {
  return (
    <div className="min-h-screen text-bp-text">
      <Navbar />
      <main className="mx-auto w-full max-w-6xl px-4 pb-20 pt-8 sm:px-6 lg:px-8 lg:pt-20">
        <div className="lg:flex lg:items-start lg:gap-14">
          <Sidebar />
          <div className="min-w-0 flex-1">
            <Hero />
            <Education />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
