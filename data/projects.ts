import { Project } from "@/types/project";

export const projects: Record<string, Project> = {
  "prowurk": {
    slug: "prowurk",

    title: "Prowurk",

    tagline: "Freelance Workforce Management Platform",

    shortDescription:
      "A SaaS platform for remote workforce management, project collaboration and productivity tracking.",

    description:
      "Prowurk is a workforce management platform that helps businesses manage remote teams, track productivity, collaborate through real-time messaging and handle secure client payments.",

    image: "/images/projects/prowurk/homepage.png",

    featured: true,

    features: [
      {
        title: "Project Management",
        description:
          "Create projects, assign tasks and monitor team progress.",
        icon: "briefcase",
      },
      {
        title: "Real-Time Chat",
        description:
          "Instant messaging between clients and team members using WebSockets.",
        icon: "messages-square",
      },
      {
        title: "Employee Activity Tracker",
        description:
          "Automatic screenshot capture and activity monitoring through a Go microservice.",
        icon: "monitor",
      },
      {
        title: "Stripe Payments",
        description:
          "Secure online payments for client subscriptions and invoices.",
        icon: "credit-card",
      },
      {
        title: "Role Based Access",
        description:
          "Secure authorization for admins, managers and employees.",
        icon: "shield-check",
      },
      {
        title: "Notifications",
        description:
          "Real-time notifications for project updates, chat messages and task activities.",
        icon: "bell",
      },
    ],

    challenges: [
      {
        title: "Real-Time Communication",

        problem:
          "Users expected instant messaging without refreshing the application.",

        solution:
          "Implemented WebSocket based communication for real-time conversations between users.",
      },

      {
        title: "Employee Tracking",

        problem:
          "Capturing user activity and screenshots without affecting application performance.",

        solution:
          "Built a separate Go microservice responsible for activity tracking and screenshot processing while keeping the Rails application lightweight.",
      },

      {
        title: "Payment Reliability",

        problem:
          "Payment confirmation needed to remain consistent even during network failures.",

        solution:
          "Integrated Stripe webhooks with idempotent payment processing to ensure transaction consistency.",
      },

      {
        title: "Database Performance",

        problem:
          "Large datasets caused slow dashboard and project loading.",

        solution:
          "Optimized ActiveRecord queries using eager loading, proper indexing and Redis caching.",
      },
    ],

    learnings: [
      {
        title: "Scalable Architecture",

        description:
          "Separating resource-intensive workloads into microservices improves scalability and maintainability.",
      },

      {
        title: "Real-Time Systems",

        description:
          "WebSocket based communication provides a much better collaboration experience than polling.",
      },

      {
        title: "Secure Payments",

        description:
          "Payment systems should always rely on webhook verification instead of client-side success responses.",
      },

      {
        title: "Performance Optimization",

        description:
          "Database indexing, eager loading and Redis caching significantly reduce response times.",
      },

      {
        title: "Background Processing",

        description:
          "Long-running operations should be executed asynchronously using background jobs.",
      },
    ],

    layout: "featured",

    year: "2023",

    category: "SaaS Platform",

    duration: "3 Years",

    role: "Software Engineer",

    teamSize: "8+ Developers",

    status: "Completed",

    technologies: [
      "Ruby on Rails",
      "PostgreSQL",
      "Redis",
      "Go",
      "Stripe",
      "Docker",
      "WebSockets",
    ],

    techStack: {
      backend: [
        "Ruby on Rails",
        "REST API",
        "Redis",
        "Sidekiq",
        "Devise",
      ],

      frontend: [
        "Hotwire",
        "Turbo",
        "Stimulus JS",
        "JavaScript",
        "Bootstrap",
      ],

      database: [
        "PostgreSQL",
      ],

      infrastructure: [
        "Docker",
        "AWS",
        "GitHub",
      ],

      microservices: [
        "Go",
        "WebSockets",
      ],
    },

    goals: [
      "Provide a complete remote workforce management solution.",
      "Enable seamless project collaboration.",
      "Track employee productivity efficiently.",
      "Support secure subscription and payment workflows.",
    ],

    outcomes: [
      "Built production-ready REST APIs.",
      "Implemented real-time communication using WebSockets.",
      "Developed a Go microservice for employee activity tracking.",
      "Integrated secure Stripe payment workflows.",
      "Improved application performance through Redis caching and optimized database queries.",
    ],

    github: "",

    live: "https://www.prowurk.com",

    overview:
      "Prowurk is a workforce management platform that helps businesses manage distributed teams, communicate in real time, track employee productivity and process secure online payments.",

    problem:
      "Managing remote teams requires reliable collaboration, productivity tracking and secure client billing within a single platform.",

    solution:
      "Built scalable backend services, integrated real-time communication, developed an employee tracking microservice and implemented secure payment workflows.",

    architecture: {
      frontend: "Hotwire + Turbo + Stimulus",

      api: "REST API",

      backend: "Ruby on Rails",

      services: [
        {
          title: "PostgreSQL",
          subtitle: "Primary Database",
        },
        {
          title: "Redis",
          subtitle: "Caching & Background Jobs",
        },
        {
          title: "Stripe",
          subtitle: "Payments",
        },
        {
          title: "Go Tracker",
          subtitle: "Activity Monitoring",
        },
        {
          title: "WebSockets",
          subtitle: "Real-Time Chat",
        },
      ],

      highlights: [
        "REST APIs",
        "Role Based Authorization",
        "Real-Time Messaging",
        "Go Microservice",
        "Redis Caching",
        "Stripe Integration",
        "Docker Deployment",
      ],

      decisions:
        "The application follows a service-oriented architecture where Ruby on Rails manages business logic, PostgreSQL stores transactional data, Redis improves performance, Go handles activity tracking and WebSockets provide real-time communication.",
    },

    gallery: [
      {
        image: "/images/projects/prowurk/dashboard.png",
        title: "Dashboard",
        description:
          "Overview of projects, team activities and productivity insights.",
      },
      {
        image: "/images/projects/prowurk/earningreport.png",
        title: "Earning Report",
        description:
          "Track earnings, monitor revenue trends, and generate detailed financial reports.",
      },
      {
        image: "/images/projects/prowurk/settings.png",
        title: "Settings",
        description:
          "Customize application preferences, manage account settings, and configure system options.",
      },
    ],
  },

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
