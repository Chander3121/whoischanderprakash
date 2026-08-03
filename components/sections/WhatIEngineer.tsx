import ServiceCard from "@/components/cards/ServiceCard";
import { services } from "@/data/services";

export default function WhatIEngineer() {
  return (
    <section
      id="services"
      className="py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Heading */}

        <div className="max-w-3xl">

          <span className="text-sm font-semibold uppercase tracking-[0.30em] text-blue-600">
            What I Engineer
          </span>

          <h2 className="mt-5 text-5xl font-bold tracking-tight text-slate-900">
            Backend systems built for reliability, performance and scale.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            I enjoy solving backend engineering challenges by building
            scalable APIs, payment systems, background processing,
            microservices and production-ready architectures.
          </p>

        </div>

        {/* Grid */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
            />
          ))}

        </div>

      </div>
    </section>
  );
}
