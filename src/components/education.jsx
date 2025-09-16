import React from "react";
import CCNY from "../assets/employers/ccny.png";

function Education() {
  const education = [
    {
      logo: CCNY,
      alt: "CCNY logo",
      degree: "B.S. in Computer Science",
      school: "City College of New York",
      location: "New York, NY",
      duration: "Graduation: December 2026",
      description:
        "Relevant Coursework: Data Structures, Algorithms, Operating Systems, Database Systems, Systems Design, Software Engineering, Computer Architecture, Statistics, Image Processing, Machine Learning, Artificial Intelligence.",
    },
  ];

  return (
    <section className="mb-8 sm:mb-16" id="education">
      <h2 className="mb-4 text-2xl font-semibold text-white sm:text-3xl">
        Education
      </h2>

      <div className="space-y-3">
        {education.map((edu, index) => (
          <div
            key={index}
            className="rounded-xl bg-white/60 p-3 shadow-lg transition-all duration-300 hover:shadow-xl sm:p-4"
          >
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <img
                  src={edu.logo}
                  alt={edu.alt}
                  className="h-10 w-10 rounded-lg object-contain sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-20 lg:w-20"
                />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex-1">
                    <h3 className="mb-0 text-sm font-bold text-gray-800 sm:text-base md:text-lg">
                      {edu.degree}
                    </h3>
                    <p className="mb-0 text-sm font-semibold text-[#0061ff] sm:text-base">
                      {edu.school}
                    </p>
                    <div className="sm:hidden">
                      <p className="text-sm text-gray-700">{edu.location}</p>
                      <p className="text-sm text-gray-700">{edu.duration}</p>
                    </div>
                  </div>
                  <div className="hidden text-right sm:block">
                    <p className="text-sm text-gray-700">{edu.location}</p>
                    <p className="text-sm text-gray-700">{edu.duration}</p>
                  </div>
                </div>
                <p className="hidden text-sm leading-relaxed text-gray-700 sm:block md:text-base">
                  {edu.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
