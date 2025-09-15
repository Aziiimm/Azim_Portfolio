import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Education from "./components/education";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Contact from "./components/contact";
import "./styles/App.css";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="rounded-xl bg-white/10 p-4 shadow-2xl backdrop-blur-md sm:p-6 md:p-8 lg:p-12">
          <Hero />
          <Education />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
