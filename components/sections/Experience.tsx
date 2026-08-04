import ExperienceCard from "@/components/cards/ExperienceCard";
import ExperienceStats from "@/components/experience/ExperienceStats";

import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden py-32"
    >
      <div
        className="
          absolute
          left-1/2
          top-0
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-blue-100/40
          blur-[140px]
          pointer-events-none
        "
      />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="max-w-3xl">

          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Career
          </span>

          <h2 className="mt-6 text-5xl font-bold tracking-tight text-slate-900 lg:text-6xl">
            Building reliable software
            for the last 3+ years.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            I've worked on production-grade backend
            systems, payment integrations, GraphQL APIs,
            microservices and scalable applications used
            by real businesses.
          </p>

        </div>

        {/* Stats */}

        <ExperienceStats />

        {/* Cards */}

        <div className="mt-20 space-y-10">

          {experiences.map((experience) => (

            <ExperienceCard
              key={experience.company}
              experience={experience}
            />

          ))}

        </div>

      </div>

    </section>
  );
}
