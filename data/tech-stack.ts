import { IconName } from "@/lib/icons";

export interface TechCategory {
  title: string;
  icon: IconName;

  level: "Expert" | "Advanced" | "Intermediate";

  description: string;

  primary: string[];

  secondary: string[];
}

export const techStack: TechCategory[] = [
  {
    title: "Backend",
    icon: "backend",
    level: "Expert",
  	description: "Building scalable APIs, payment systems and production-ready backend services.",
    primary: [
      "Ruby on Rails",
      "Golang",
      "GraphQL",
    ],

    secondary: [
      "Ruby",
      "Python",
      "REST APIs",
      "gRPC",
      "JWT",
    ],
  },
  {
    title: "Database",
    icon: "database",
    level: "Advanced",

description:
"Designing relational databases, caching strategies and query optimization.",
    primary: [
      "PostgreSQL",
      "Redis",
    ],

    secondary: [
      "MySQL",
      "Query Optimization",
      "Database Design",
    ],
  },
  {
    title: "Frontend",
    icon: "frontend",
    level: "Advanced",

description:
"Building responsive interfaces with modern React ecosystem.",
    primary: [
      "React",
      "Next.js",
      "Tailwind CSS",
    ],

    secondary: [
      "JavaScript",
      "TypeScript",
      "Bootstrap",
    ],
  },
  {
    title: "DevOps & Tools",
    icon: "devops",
    level: "Intermediate",

description:
"Containerization, cloud deployments and development workflows.",
    primary: [
      "Docker",
      "AWS",
      "Git",
    ],

    secondary: [
      "GitHub",
      "Linux",
      "Kubernetes",
    ],
  },
];
