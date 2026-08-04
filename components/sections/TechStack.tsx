import TechCard from "@/components/cards/TechCard";
import { techStack} from "@/data/tech-stack";

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="relative overflow-hidden py-32"
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          right-0
          top-20
          h-[500px]
          w-[500px]
          rounded-full
          bg-blue-100/40
          blur-[140px]
        "
      />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="max-w-3xl">

          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Technology
          </span>

          <h2 className="mt-6 text-5xl font-bold tracking-[-0.04em] text-slate-900 lg:text-6xl">
            My engineering
            toolbox.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            I enjoy building scalable backend systems,
            APIs, microservices and modern web
            applications using reliable technologies.
          </p>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          {techStack.map((stack) => (

            <TechCard
              key={stack.title}
              {...stack}
            />

          ))}

        </div>

      </div>

    </section>
  );
}
