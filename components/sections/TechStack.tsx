import TechCategory from "@/components/cards/TechCategory";
import { techStack } from "@/data/tech-stack";

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Heading */}

        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.30em] text-blue-600">
            Technology Stack
          </span>

          <h2 className="mt-5 text-5xl font-bold tracking-tight text-slate-900">
            Tools and technologies I use to build modern applications.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Over the past few years, I’ve worked across backend
            development, databases, frontend technologies and
            deployment tools to build scalable, production-ready
            software.
          </p>
        </div>

        {/* Categories */}

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {techStack.map((category) => (
            <TechCategory
              key={category.title}
              title={category.title}
              technologies={category.technologies}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
