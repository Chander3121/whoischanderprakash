export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  live?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "MonetizeAI",
    description:
      "AI-powered marketplace platform with Stripe payment integration and scalable Ruby on Rails backend.",

    image: "/images/projects/monetizeai.png",

    technologies: [
      "Ruby on Rails",
      "Stripe",
      "Docker",
      "PostgreSQL",
    ],

    featured: true,
  },

  {
    title: "ProWurk",

    description:
      "Freelancing platform with time tracking, payment workflows and background job processing.",

    image: "/images/projects/prowurk.png",

    technologies: [
      "Ruby on Rails",
      "Golang",
      "PostgreSQL",
      "Redis",
    ],

    featured: true,
  },

  {
    title: "eCompim",

    description:
      "Enterprise application with GraphQL APIs and scalable backend architecture.",

    image: "/images/projects/ecompim.png",

    technologies: [
      "Rails",
      "GraphQL",
      "PostgreSQL",
    ],

    featured: true,
  },

  {
    title: "Vistaweg",

    description:
      "Business platform focused on workflow management and backend integrations.",

    image: "/images/projects/vistaweg.png",

    technologies: [
      "Rails",
      "REST API",
      "Docker",
    ],

    featured: false,
  },
];
