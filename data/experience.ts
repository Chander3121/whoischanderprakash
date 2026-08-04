export interface Experience {
  company: string;
  role: string;
  employmentType: string;
  duration: string;
  location: string;

  technologies: string[];

  achievements: string[];
}

export const experiences: Experience[] = [
  {
    company: "Adware Technologies Pvt Ltd",

    role: "Associate Software Engineer",

    employmentType: "Full Time",

    duration: "June 2022 — Aug 2025",

    location: "Ghaziabad, Uttar Pradesh",

    technologies: [
      "Ruby on Rails",
      "Golang",
      "Python",
      "GraphQL",
      "PostgreSQL",
      "MySQL",
      "Docker",
      "Redis",
    ],

    achievements: [
      "Developed scalable REST & GraphQL APIs for production applications.",
      "Integrated secure payment systems using Stripe.",
      "Worked on background jobs using Sidekiq and Redis.",
      "Improved SQL query performance and application responsiveness.",
      "Collaborated in Agile teams using Git and Jira.",
    ],
  },
];
