import TechCard from "@/components/cards/TechCard";
import { techStack} from "@/data/tech-stack";

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="relative overflow-hidden py-20 lg:py-32"
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

          <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            My engineering
            toolbox.
          </h2>

          <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            I enjoy building scalable backend systems,
            APIs, microservices and modern web
            applications using reliable technologies.
          </p>

        </div>

        <div className="mt-14 grid gap-5 sm:mt-16 sm:gap-6 lg:mt-20 lg:gap-8 lg:grid-cols-2">

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
