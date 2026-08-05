import ServiceCard from "@/components/cards/ServiceCard";
import { services } from "@/data/services";

export default function WhatIEngineer() {
  return (
    <section
      id="services"
      className="py-20 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Heading */}

        <div className="max-w-3xl">

          <span className="text-sm font-semibold uppercase tracking-[0.30em] text-blue-600">
            What I Engineer
          </span>

          <h2
    			  className="
    			    mt-5

    			    text-4xl
    			    font-bold
    			    leading-tight
    			    tracking-tight
    			    text-slate-900

    			    sm:text-5xl
    			  "
    			>
            Backend systems built for reliability, performance and scale.
          </h2>

          <p
            className="
              mt-6

              text-base
              leading-7
              text-slate-600

              sm:text-lg
              sm:leading-8
            "
          >
            I enjoy solving backend engineering challenges by building
            scalable APIs, payment systems, background processing,
            microservices and production-ready architectures.
          </p>

        </div>

        {/* Grid */}

        <div className="
          mt-14

          grid

          gap-5

          sm:mt-16
          sm:gap-6

          md:grid-cols-2

          xl:mt-20
          xl:grid-cols-3
          xl:gap-8
          "
        >

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
