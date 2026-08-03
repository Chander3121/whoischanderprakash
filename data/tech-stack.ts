export interface TechCategory {
  title: string;
  technologies: string[];
}

export const techStack: TechCategory[] = [
  {
    title: "Backend",
    technologies: [
      "Ruby",
      "Ruby on Rails",
      "Golang",
      "REST APIs",
      "GraphQL",
      "JWT Authentication",
    ],
  },
  {
    title: "Database",
    technologies: [
      "PostgreSQL",
      "Redis",
      "MySQL",
      "Database Design",
      "Query Optimization",
    ],
  },
  {
    title: "Frontend",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript",
    ],
  },
  {
    title: "DevOps & Tools",
    technologies: [
      "Docker",
      "Git",
      "GitHub",
      "Linux",
      "AWS (Learning)",
    ],
  },
];
