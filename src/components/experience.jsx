import React from "react";
import STEMKasa from "../assets/employers/stemkasa.jpg";
import Google from "../assets/employers/google.webp";
import CCNY from "../assets/employers/ccny.png";

function Experience() {
  const experiences = [
    {
      logo: STEMKasa,
      alt: "STEMKasa logo",
      title: "Software Engineer Intern",
      company: "STEMKasa",
      location: "New York, NY",
      duration: "May 2024 - May 2025",
      description:
        "Developed RESTful APIs with Flask and Express integrating GPT-4 for a personalized learning assistant, optimizing MongoDB queries to reduce response time by 10%. Wrote 50+ automated end-to-end tests and enhanced user interaction with reusable React components in Agile sprints.",
    },
    {
      logo: Google,
      alt: "Google logo",
      title: "Software Engineering Fellow",
      company: "Google",
      location: "New York, NY",
      duration: "Feb 2025 – May 2025",
      description:
        "Selected from a competitive pool of 350+ applicants for Google Software Engineering Program; received 1:1 mentorship from Google engineers, strengthening coding and problem-solving skills.",
    },
    {
      logo: CCNY,
      alt: "CCNY logo",
      title: "Computer Science Tutor",
      company: "City College of New York",
      location: "New York, NY",
      duration: "Aug 2024 – May 2025",
      description:
        "Tutored 20+ students in Data Structures, Algorithms, and Operating Systems, reinforcing understanding of dynamic programming, complexity analysis, and memory management.",
    },
  ];

  return (
    <section className="mb-8 sm:mb-16" id="experience">
      <h2 className="mb-4 text-2xl font-semibold text-white sm:text-3xl">
        Experience
      </h2>

      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="rounded-xl bg-white/60 p-3 shadow-lg transition-all duration-300 hover:shadow-xl sm:p-4"
          >
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <img
                  src={exp.logo}
                  alt={exp.alt}
                  className="h-10 w-10 rounded-lg object-contain sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-20 lg:w-20"
                />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex-1">
                    <h3 className="mb-0 text-sm font-bold text-gray-800 sm:text-base md:text-lg">
                      {exp.title}
                    </h3>
                    <p className="mb-0 text-sm font-semibold text-[#0061ff] sm:text-base">
                      {exp.company}
                    </p>
                    <div className="sm:hidden">
                      <p className="text-sm text-gray-700">{exp.location}</p>
                      <p className="text-sm text-gray-700">{exp.duration}</p>
                    </div>
                  </div>
                  <div className="hidden text-right sm:block">
                    <p className="text-sm text-gray-700">{exp.location}</p>
                    <p className="text-sm text-gray-700">{exp.duration}</p>
                  </div>
                </div>
                <p className="hidden text-sm leading-relaxed text-gray-700 sm:block md:text-base">
                  {exp.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Experience;
