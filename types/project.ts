import type { FeatureIconName } from "@/lib/feature-icons";

export interface ProjectFeature {
  title: string;
  description: string;
  icon: FeatureIconName;
}

export type ProjectLayout =
  | "featured"
  | "compact";

export interface TechStack {
  backend: string[];
  frontend: string[];
  database: string[];
  infrastructure: string[];
}

export interface ProjectGalleryImage {
  image: string;
  title: string;
  description: string;
}

export interface ProjectChallenge {
  title: string;
  problem: string;
  solution: string;
}

export interface ProjectArchitecture {
  frontend: string;
  api: string;
  backend: string;

  services: {
    title: string;
    subtitle: string;
  }[];

  highlights: string[];

  decisions: string;
}

export interface ProjectLearning {
  title: string;
  description: string;
}

export interface Project {
  slug: string;

  title: string;

  tagline: string;

  shortDescription: string;

  description: string;

  image: string;

  duration: string;

  role: string;

  teamSize: string;

  architecture: ProjectArchitecture;

  status:
    | "Completed"
    | "In Progress";

  featured: boolean;

  features: ProjectFeature[];

  layout: ProjectLayout;

  year: string;

  category: string;

  challenges: ProjectChallenge[];

  technologies: string[];

  techStack: TechStack;

  github?: string;

  live?: string;

  goals: string[];

  outcomes: string[];

  overview: string;

  problem: string;

  solution: string;

  learnings: ProjectLearning[];

  gallery: ProjectGalleryImage[];
}
