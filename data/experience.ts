export interface Experience {
  year: string;
  role: string;
  company: string;
  description: string;
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    year: "2022",
    role: "Associate Software Engineer",
    company: "Adware Technologies",

    description:
      "Worked on enterprise Ruby on Rails applications and collaborated with cross-functional teams to deliver scalable backend solutions.",

    achievements: [
      "Built REST APIs",
      "Worked with GraphQL",
      "Integrated payment systems",
      "Docker based development",
    ],
  },

  {
    year: "2023",
    role: "Software Engineer",
    company: "ProWurk",

    description:
      "Worked as a full-stack engineer building productivity software used by remote teams.",

    achievements: [
      "Background Jobs",
      "Turbo Streams",
      "Payment Workflows",
      "Go Microservices",
    ],
  },

  {
    year: "Today",
    role: "Independent Builder",
    company: "Personal Projects",

    description:
      "Building products, learning cloud technologies and strengthening backend engineering skills.",

    achievements: [
      "Portfolio Website",
      "HRLite",
      "WearOnRent",
      "AWS Learning",
    ],
  },
];
