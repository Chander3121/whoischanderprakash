import TimelineItem from "@/components/timeline/TimelineItem";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}

        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.30em] text-blue-600">
            Career Journey
          </span>

          <h2 className="mt-5 text-5xl font-bold tracking-tight text-slate-900">
            Building production-ready backend systems over the years.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            My journey from developing enterprise applications to
            building scalable backend systems, payment workflows,
            GraphQL APIs and modern web applications.
          </p>
        </div>

        {/* Timeline */}

        <div className="mt-20">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.year}
              year={experience.year}
              role={experience.role}
              company={experience.company}
              description={experience.description}
              achievements={experience.achievements}
              isLast={index === false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
