import { Project } from "@/types/project";

export const projects: Record<string, Project> = {
  "wear-on-rent": {
    slug: "wear-on-rent",

    title: "WearOnRent",

    tagline: "Luxury Ethnic Wear Marketplace",

    shortDescription:
      "Luxury ethnic wear rental marketplace.",

    description:
      "A marketplace where users can rent premium ethnic wear with secure online payments.",

    image: "/images/projects/ecompim.png",

    featured: true,

    features: [
      {
        title: "Secure Authentication",
        description:
          "JWT based authentication with protected routes.",
        icon: "shield",
      },
      {
        title: "Rental Booking",
        description:
          "Book outfits with inventory validation.",
        icon: "calendar",
      },
      {
        title: "Stripe Payments",
        description:
          "Integrated secure online payment workflow.",
        icon: "credit-card",
      },
      {
        title: "Admin Dashboard",
        description:
          "Manage products, bookings and users.",
        icon: "layout-dashboard",
      },
      {
        title: "Wishlist",
        description:
          "Save favorite outfits for later.",
        icon: "heart",
      },
      {
        title: "Notifications",
        description:
          "Booking confirmations and status updates.",
        icon: "bell",
      },
    ],

    challenges: [
      {
        title: "Inventory Conflicts",

        problem:
          "Multiple users could attempt to rent the same outfit at the same time.",

        solution:
          "Implemented inventory validation before confirming the booking to avoid conflicts.",
      },

      {
        title: "Reliable Payments",

        problem:
          "Payment could succeed while booking creation failed.",

        solution:
          "Handled payment confirmation using Stripe webhooks and idempotent backend processing.",
      },

      {
        title: "Performance",

        problem:
          "Large product listings increased response time.",

        solution:
          "Optimized GraphQL queries, eager loaded associations and introduced Redis caching.",
      },
    ],

    learnings: [
      {
        title: "Idempotent Payments",

        description:
          "Payment systems should always be designed to safely retry requests without creating duplicate transactions.",
      },

      {
        title: "Inventory Validation",

        description:
          "Availability should be verified immediately before confirming a booking.",
      },

      {
        title: "GraphQL Performance",

        description:
          "Well-designed GraphQL queries reduce over-fetching and simplify frontend development.",
      },

      {
        title: "Redis Caching",

        description:
          "Frequently accessed data benefits greatly from caching, reducing database load.",
      },

      {
        title: "Background Jobs",

        description:
          "Time-consuming tasks should run asynchronously to keep the user experience responsive.",
      },
    ],

    layout: "featured",

    year: "2026",

    category: "Marketplace",

    duration: "8 Weeks",

    role: "Full Stack Developer",

    teamSize: "Solo",

    status: "In Progress",

    technologies: [
      "Rails",
      "React",
      "GraphQL",
      "PostgreSQL",
      "Stripe",
      "Docker",
    ],

    techStack: {
      backend: [
        "Ruby on Rails",
        "GraphQL",
        "REST API",
        "Redis",
        "Sidekiq",
      ],

      frontend: [
        "React",
        "Next.js",
        "Tailwind CSS",
      ],

      database: [
        "PostgreSQL",
      ],

      infrastructure: [
        "Docker",
        "AWS",
        "GitHub Actions",
      ],
    },

    goals: [
      "Build a premium ethnic wear rental marketplace.",
      "Enable secure online booking and payments.",
      "Prevent inventory conflicts.",
      "Provide an admin dashboard for inventory management.",
    ],

    outcomes: [
      "Designed a scalable GraphQL backend.",
      "Integrated secure Stripe payments.",
      "Implemented inventory validation before booking.",
      "Built a responsive modern user experience.",
    ],

    github: "",

    live: "",

    overview:
      "WearOnRent is a rental marketplace focused on premium ethnic wear.",

    problem:
      "Buying premium outfits for one-time occasions is expensive.",

    solution:
      "Built a rental marketplace with secure payments and inventory management.",

    architecture: {
      frontend: "Next.js + React",

      api: "GraphQL API",

      backend: "Ruby on Rails",

      services: [
        {
          title: "PostgreSQL",
          subtitle: "Primary Database",
        },
        {
          title: "Redis",
          subtitle: "Caching",
        },
        {
          title: "Stripe",
          subtitle: "Payments",
        },
        {
          title: "Active Storage",
          subtitle: "Media",
        },
      ],

      highlights: [
        "GraphQL API Gateway",
        "JWT Authentication",
        "Redis Caching",
        "Background Jobs",
        "Stripe Integration",
        "Docker Deployment",
      ],

      decisions:
        "The application follows a layered architecture where the frontend communicates through GraphQL, the backend handles business logic, Redis improves performance, PostgreSQL stores transactional data and Stripe securely manages payments.",
    },

    gallery: [
      {
        // image: "/images/projects/wearonrent/home.png",
        image: "/images/projects/ecompim.png",
        title: "Marketplace Homepage",
        description:
          "Users can explore premium ethnic wear with a modern browsing experience.",
      },
      {
        // image: "/images/projects/wearonrent/product.png",
        image: "/images/projects/ecompim.png",
        title: "Product Details",
        description:
          "Detailed product page with rental duration, pricing and availability.",
      },
      {
        // image: "/images/projects/wearonrent/dashboard.png",
        image: "/images/projects/ecompim.png",
        title: "Admin Dashboard",
        description:
          "Manage inventory, bookings and customer activity.",
      },
    ],
  },

  "hr-lite": {
    slug: "hr-lite",

    title: "HRLite",

    tagline: "Human Resource Management System",

    shortDescription:
      "Modern HR platform for small businesses.",

    description:
      "An HR management system with attendance, leave management, payroll and employee portal.",

    image: "/images/projects/ecompim.png",

    featured: true,

    features: [
      {
        title: "Secure Authentication",
        description:
          "JWT based authentication with protected routes.",
        icon: "shield",
      },
      {
        title: "Rental Booking",
        description:
          "Book outfits with inventory validation.",
        icon: "calendar",
      },
      {
        title: "Stripe Payments",
        description:
          "Integrated secure online payment workflow.",
        icon: "credit-card",
      },
      {
        title: "Admin Dashboard",
        description:
          "Manage products, bookings and users.",
        icon: "layout-dashboard",
      },
      {
        title: "Wishlist",
        description:
          "Save favorite outfits for later.",
        icon: "heart",
      },
      {
        title: "Notifications",
        description:
          "Booking confirmations and status updates.",
        icon: "bell",
      },
    ],

    challenges: [
      {
        title: "Inventory Conflicts",

        problem:
          "Multiple users could attempt to rent the same outfit at the same time.",

        solution:
          "Implemented inventory validation before confirming the booking to avoid conflicts.",
      },

      {
        title: "Reliable Payments",

        problem:
          "Payment could succeed while booking creation failed.",

        solution:
          "Handled payment confirmation using Stripe webhooks and idempotent backend processing.",
      },

      {
        title: "Performance",

        problem:
          "Large product listings increased response time.",

        solution:
          "Optimized GraphQL queries, eager loaded associations and introduced Redis caching.",
      },
    ],

    learnings: [
      {
        title: "Idempotent Payments",

        description:
          "Payment systems should always be designed to safely retry requests without creating duplicate transactions.",
      },

      {
        title: "Inventory Validation",

        description:
          "Availability should be verified immediately before confirming a booking.",
      },

      {
        title: "GraphQL Performance",

        description:
          "Well-designed GraphQL queries reduce over-fetching and simplify frontend development.",
      },

      {
        title: "Redis Caching",

        description:
          "Frequently accessed data benefits greatly from caching, reducing database load.",
      },

      {
        title: "Background Jobs",

        description:
          "Time-consuming tasks should run asynchronously to keep the user experience responsive.",
      },
    ],

    layout: "compact",

    year: "2026",

    category: "Marketplace",

    duration: "8 Weeks",

    role: "Full Stack Developer",

    teamSize: "Solo",

    status: "In Progress",

    technologies: [
      "Rails",
      "React",
      "GraphQL",
      "PostgreSQL",
      "Stripe",
      "Docker",
    ],

    techStack: {
      backend: [
        "Ruby on Rails",
        "GraphQL",
        "REST API",
        "Redis",
        "Sidekiq",
      ],

      frontend: [
        "React",
        "Next.js",
        "Tailwind CSS",
      ],

      database: [
        "PostgreSQL",
      ],

      infrastructure: [
        "Docker",
        "AWS",
        "GitHub Actions",
      ],
    },

    goals: [
      "Build a premium ethnic wear rental marketplace.",
      "Enable secure online booking and payments.",
      "Prevent inventory conflicts.",
      "Provide an admin dashboard for inventory management.",
    ],

    outcomes: [
      "Designed a scalable GraphQL backend.",
      "Integrated secure Stripe payments.",
      "Implemented inventory validation before booking.",
      "Built a responsive modern user experience.",
    ],

    github: "",

    live: "",

    overview:
      "WearOnRent is a rental marketplace focused on premium ethnic wear.",

    problem:
      "Buying premium outfits for one-time occasions is expensive.",

    solution:
      "Built a rental marketplace with secure payments and inventory management.",

    architecture: {
      frontend: "Next.js + React",

      api: "GraphQL API",

      backend: "Ruby on Rails",

      services: [
        {
          title: "PostgreSQL",
          subtitle: "Primary Database",
        },
        {
          title: "Redis",
          subtitle: "Caching",
        },
        {
          title: "Stripe",
          subtitle: "Payments",
        },
        {
          title: "Active Storage",
          subtitle: "Media",
        },
      ],

      highlights: [
        "GraphQL API Gateway",
        "JWT Authentication",
        "Redis Caching",
        "Background Jobs",
        "Stripe Integration",
        "Docker Deployment",
      ],

      decisions:
        "The application follows a layered architecture where the frontend communicates through GraphQL, the backend handles business logic, Redis improves performance, PostgreSQL stores transactional data and Stripe securely manages payments.",
    },

    gallery: [
      {
        // image: "/images/projects/wearonrent/home.png",
        image: "/images/projects/ecompim.png",
        title: "Marketplace Homepage",
        description:
          "Users can explore premium ethnic wear with a modern browsing experience.",
      },
      {
        // image: "/images/projects/wearonrent/product.png",
        image: "/images/projects/ecompim.png",
        title: "Product Details",
        description:
          "Detailed product page with rental duration, pricing and availability.",
      },
      {
        // image: "/images/projects/wearonrent/dashboard.png",
        image: "/images/projects/ecompim.png",
        title: "Admin Dashboard",
        description:
          "Manage inventory, bookings and customer activity.",
      },
    ],
  },
};
