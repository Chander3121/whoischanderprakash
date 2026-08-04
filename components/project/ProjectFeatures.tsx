import SectionHeading from "./SectionHeading";
import FeatureCard from "./FeatureCard";

import { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function ProjectFeatures({
  project,
}: Props) {
  return (
    <section className="mx-auto mt-36 max-w-7xl px-6">

      <SectionHeading
        subtitle="Capabilities"
        title="Core Features"
      />

      <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-600">
        The key capabilities implemented while building
        this product.
      </p>

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {project.features.map((feature, index) => (
          <FeatureCard
            key={`${feature.title}-${index}`}
            {...feature}
          />
        ))}

      </div>

    </section>
  );
}
