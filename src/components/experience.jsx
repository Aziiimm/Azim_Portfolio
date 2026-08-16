import React from "react";
import { MdLocationOn } from "react-icons/md";
import OnePay from "../assets/employers/onepay.webp";
import STEMKasa from "../assets/employers/stemkasa.webp";
import Google from "../assets/employers/google.webp";
import CCNY from "../assets/employers/ccny.webp";

const experiences = [
  {
    logo: OnePay,
    alt: "OnePay logo",
    title: "Software Engineer Intern",
    company: "OnePay",
    location: "New York, NY",
    duration: "June 2026 - Aug 2026",
    description:
      "Built an internal voice-agent QA platform to replace a $60k/yr vendor tool, using an LLM-driven simulated caller to test a customer-support voice agent over live audio. Automated manual phone-call testing and grading, increasing eval throughput 10x.",
    tags: [
      "NestJS",
      "React Native",
      "ElevenLabs",
      "Kafka",
      "SQS",
      "DynamoDB",
      "S3",
      "AWS",
      "Kubernetes",
      "Docker",
      "Datadog",
    ],
  },
  {
    logo: STEMKasa,
    alt: "STEMKasa logo",
    title: "Software Engineer Intern",
    company: "STEMKasa",
    location: "New York, NY",
    duration: "May 2024 - May 2025",
    description:
      "Implemented RESTful APIs with Flask and Express integrating GPT-4 and Whisper for a personalized learning assistant. Cut average API response time by 22% with a Redis caching layer, and authored 50+ tests integrated into CI/CD pipelines.",
    tags: [
      "Flask",
      "Express",
      "GPT-4",
      "Whisper",
      "Redis",
      "MongoDB",
      "React",
      "Docker",
    ],
  },
  {
    logo: Google,
    alt: "Google logo",
    title: "Software Engineering Fellow",
    company: "Google",
    location: "New York, NY",
    duration: "Feb 2025 - May 2025",
    description:
      "Selected from a competitive pool of 350+ applicants for Google Software Engineering Program; received 1:1 mentorship from Google engineers, strengthening coding and problem-solving skills.",
    tags: ["Python"],
  },
  {
    logo: CCNY,
    alt: "CCNY logo",
    title: "Computer Science Tutor",
    company: "City College of New York",
    location: "New York, NY",
    duration: "Aug 2024 - May 2025",
    description:
      "Tutored 20+ students in Data Structures, Algorithms, and Operating Systems, reinforcing understanding of dynamic programming, complexity analysis, and memory management.",
    tags: ["Python", "C++"],
  },
];

function Experience() {
  return (
    <section className="mb-8 sm:mb-16" id="experience">
      <h2 className="text-bp-text mb-5 font-mono text-3xl font-bold tracking-tight sm:text-4xl">
        Experience
      </h2>

      <div className="flex flex-col">
        {experiences.map((exp, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex w-3.5 flex-shrink-0 flex-col items-center">
              <span className="bg-bp-accent mt-1.5 h-2.5 w-2.5 flex-shrink-0 rounded-full"></span>
              {index < experiences.length - 1 && (
                <span className="bg-bp-line mt-1 w-px flex-1"></span>
              )}
            </div>
            <div className="flex-1 pb-7">
              <div className="mb-1 flex items-start gap-3">
                <img
                  src={exp.logo}
                  alt={exp.alt}
                  className="mt-0.5 h-12 w-12 flex-shrink-0 rounded object-contain sm:h-16 sm:w-16"
                />
                <div className="flex-1">
                  <h3 className="text-bp-text font-mono text-sm font-bold sm:text-base">
                    {exp.title}
                  </h3>
                  <p className="text-bp-accent font-mono text-sm">
                    {exp.company}
                  </p>
                  <p className="text-bp-muted mt-0.5 flex items-center gap-1 font-mono text-[11px]">
                    <MdLocationOn className="text-bp-accent flex-shrink-0" />
                    {exp.location} &middot; {exp.duration}
                  </p>
                </div>
              </div>
              <p className="text-bp-muted mt-2 max-w-2xl font-mono text-sm font-medium leading-relaxed">
                {exp.description}
              </p>
              {exp.tags.length > 0 && (
                <div className="mt-2 flex max-w-2xl flex-wrap gap-x-3 gap-y-1">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-bp-accent font-mono text-xs"
                    >
                      [{tag}]
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
