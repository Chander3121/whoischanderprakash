import SectionHeading from "./SectionHeading";
import GalleryCard from "./GalleryCard";

import { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function ProjectGallery({
  project,
}: Props) {
  const [hero, ...others] = project.gallery;

  return (
    <section className="mx-auto mt-36 max-w-7xl px-6">

      <SectionHeading
        subtitle="Showcase"
        title="Product Gallery"
      />

      <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-600">
        A quick walkthrough of the most important
        interfaces built for this project.
      </p>

      <div className="mt-16 space-y-8">

        {hero && (
          <GalleryCard
            featured
            {...hero}
          />
        )}

        {others.length > 0 && (
          <div className="grid gap-8 lg:grid-cols-2">
            {others.map((image, index) => (
              <GalleryCard
                key={`${image.title}-${index}`}
                {...image}
              />
            ))}
          </div>
        )}

      </div>

    </section>
  );
}
