import React from "react";
import { MdLocationOn } from "react-icons/md";
import CCNY from "../assets/employers/ccny.webp";

const education = [
  {
    logo: CCNY,
    alt: "CCNY logo",
    degree: "B.S. in Computer Science",
    school: "City College of New York",
    location: "New York, NY",
    duration: "Graduation: December 2026",
    description:
      "Relevant Coursework: Data Structures, Algorithms, Operating Systems, Database Systems, Software Engineering, Statistics, Image Processing, Machine Learning, Artificial Intelligence, Big Data Management",
  },
];

function Education() {
  return (
    <section className="mb-8 sm:mb-16" id="education">
      <h2 className="text-bp-text mb-5 font-mono text-3xl font-bold tracking-tight sm:text-4xl">
        Education
      </h2>

      <div className="flex flex-col">
        {education.map((edu, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex w-3.5 flex-shrink-0 flex-col items-center">
              <span className="bg-bp-accent mt-1.5 h-2.5 w-2.5 flex-shrink-0 rounded-full"></span>
              {index < education.length - 1 && (
                <span className="bg-bp-line mt-1 w-px flex-1"></span>
              )}
            </div>
            <div className="flex-1 pb-2">
              <div className="mb-1 flex items-start gap-3">
                <img
                  src={edu.logo}
                  alt={edu.alt}
                  className="mt-0.5 h-12 w-12 flex-shrink-0 rounded object-contain sm:h-16 sm:w-16"
                />
                <div className="flex-1">
                  <h3 className="text-bp-text font-mono text-sm font-bold sm:text-base">
                    {edu.degree}
                  </h3>
                  <p className="text-bp-accent font-mono text-sm">
                    {edu.school}
                  </p>
                  <p className="text-bp-muted mt-0.5 flex items-center gap-1 font-mono text-[11px]">
                    <MdLocationOn className="text-bp-accent flex-shrink-0" />
                    {edu.location} &middot; {edu.duration}
                  </p>
                </div>
              </div>
              <p className="text-bp-muted mt-2 max-w-2xl font-mono text-sm font-medium leading-relaxed">
                {edu.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
