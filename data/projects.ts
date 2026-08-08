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

  "bakes-on-demand": {
    slug: "bakes-on-demand",

    title: "BakesOnDemand",

    tagline: "Modern Bakery E-Commerce Platform",

    shortDescription:
      "A full-stack bakery ecommerce platform with online ordering, cart management and secure checkout.",

    description:
      "BakesOnDemand is a modern bakery ecommerce platform that enables customers to browse freshly baked products, customize variants, manage shopping carts and place orders through a responsive and user-friendly shopping experience.",

    image: "/images/projects/bakesondemand/homepage.png",

    featured: true,

    features: [
      {
        title: "Product Catalog",
        description:
          "Browse cakes, pastries, cookies and breads with category-based navigation.",
        icon: "cake",
      },
      {
        title: "Advanced Filters",
        description:
          "Filter products by category, price, tags and sorting options.",
        icon: "filter",
      },
      {
        title: "Product Variants",
        description:
          "Support multiple sizes and pricing options for each bakery item.",
        icon: "package",
      },
      {
        title: "Shopping Cart",
        description:
          "Manage quantities, update cart items and view order summary before checkout.",
        icon: "shopping-cart",
      },
      {
        title: "Customer Reviews",
        description:
          "Allow customers to leave ratings and reviews after authentication.",
        icon: "star",
      },
      {
        title: "Responsive UI",
        description:
          "Built a modern mobile-friendly shopping experience using Tailwind CSS.",
        icon: "monitor-smartphone",
      },
    ],

    challenges: [
      {
        title: "Product Variants",

        problem:
          "Each bakery product could have multiple sizes with different prices and stock availability.",

        solution:
          "Designed a flexible product variant model supporting dynamic pricing and inventory management.",
      },

      {
        title: "Cart Synchronization",

        problem:
          "Keeping cart totals accurate while users update quantities frequently.",

        solution:
          "Implemented real-time cart calculations with quantity validation and automatic total updates.",
      },

      {
        title: "Scalable Product Browsing",

        problem:
          "Customers needed an easy way to discover products from a growing catalog.",

        solution:
          "Implemented category filters, search functionality and optimized product queries for faster browsing.",
      },
    ],

    learnings: [
      {
        title: "E-Commerce Architecture",

        description:
          "A well-designed ecommerce application requires clear separation between catalog, cart and checkout workflows.",
      },

      {
        title: "Inventory Management",

        description:
          "Product variants should maintain independent pricing and stock levels.",
      },

      {
        title: "User Experience",

        description:
          "Simple navigation, fast search and intuitive checkout significantly improve conversion rates.",
      },

      {
        title: "Database Design",

        description:
          "Proper associations between products, variants, categories and orders simplify future scalability.",
      },

      {
        title: "Reusable Components",

        description:
          "Building reusable UI components improves maintainability and development speed.",
      },
    ],

    layout: "compact",

    year: "2026",

    category: "E-Commerce",

    duration: "6 Weeks",

    role: "Full Stack Developer",

    teamSize: "Solo",

    status: "Completed",

    technologies: [
      "Ruby on Rails",
      "PostgreSQL",
      "Tailwind CSS",
      "Hotwire",
      "Turbo",
      "Stimulus",
      "Active Storage",
      "Docker",
    ],

    techStack: {
      backend: [
        "Ruby on Rails",
        "REST API",
        "Active Storage",
      ],

      frontend: [
        "ERB",
        "Turbo",
        "Stimulus",
        "Tailwind CSS",
      ],

      database: [
        "PostgreSQL",
      ],

      infrastructure: [
        "Docker",
        "GitHub",
      ],
    },

    goals: [
      "Build a premium bakery ecommerce platform.",
      "Provide a smooth shopping experience.",
      "Support product variants and inventory.",
      "Create a responsive shopping cart and checkout flow.",
    ],

    outcomes: [
      "Built a modern ecommerce platform for bakery products.",
      "Implemented product variants with dynamic pricing.",
      "Created responsive cart and order summary workflows.",
      "Designed a clean and mobile-friendly shopping experience.",
    ],

    github: "",

    live: "",

    overview:
      "BakesOnDemand is a full-stack ecommerce platform where customers can discover bakery products, customize variants and place orders through an intuitive shopping experience.",

    problem:
      "Traditional bakery businesses often lack a modern online ordering experience with organized catalogs, product customization and seamless checkout.",

    solution:
      "Developed a complete ecommerce platform featuring product catalog management, advanced filtering, product variants, shopping cart and responsive checkout workflows.",

    architecture: {
      frontend: "Rails Views + Turbo + Tailwind CSS",

      api: "REST API",

      backend: "Ruby on Rails",

      services: [
        {
          title: "PostgreSQL",
          subtitle: "Primary Database",
        },
        {
          title: "Active Storage",
          subtitle: "Product Images",
        },
        {
          title: "Turbo",
          subtitle: "Dynamic UI",
        },
        {
          title: "Docker",
          subtitle: "Containerized Development",
        },
      ],

      highlights: [
        "REST API",
        "Product Variants",
        "Shopping Cart",
        "Advanced Filtering",
        "Responsive Design",
        "Active Storage",
        "Docker",
      ],

      decisions:
        "The application follows a layered Rails architecture where Active Record manages product relationships, Tailwind CSS provides a modern responsive interface, Turbo enhances user interactions and PostgreSQL stores transactional ecommerce data.",
    },

    gallery: [
      {
        image: "/images/projects/bakesondemand/homepage.png",
        title: "Landing Page",
        description:
          "Modern landing page highlighting featured bakery products, categories and promotional sections.",
      },
      {
        image: "/images/projects/bakesondemand/productspage.png",
        title: "Product Catalog",
        description:
          "Category-based product listing with advanced filters, search and responsive product cards.",
      },
      {
        image: "/images/projects/bakesondemand/productshow.png",
        title: "Product Details",
        description:
          "Detailed product page supporting multiple size variants, quantity selection and customer reviews.",
      },
      {
        image: "/images/projects/bakesondemand/cartpage.png",
        title: "Shopping Cart",
        description:
          "Interactive shopping cart with quantity management, live order summary and checkout workflow.",
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

  "hrlite": {
    slug: "hrlite",

    title: "HRLite",

    tagline: "Lightweight HR & Payroll Management SaaS",

    shortDescription:
      "A modern HR management platform for small teams to manage employees, attendance, leaves, payroll and HR documents.",

    description:
      "HRLite is a lightweight HR management system designed for small teams and startups. It provides separate admin and employee portals for managing employee records, attendance, leave workflows, salary structures, payroll, payslips, HR letters and notifications.",

    image: "/images/projects/hrlite/admin-dashboard.png",

    featured: true,

    features: [
      {
        title: "Employee Management",
        description:
          "Manage employee profiles, employment information, salary details and employee records from a centralized admin portal.",
        icon: "briefcase",
      },
      {
        title: "Attendance Management",
        description:
          "Track employee attendance, working hours and attendance regularization requests.",
        icon: "calendar",
      },
      {
        title: "Leave Management",
        description:
          "Employees can apply for leave while admins can review, approve or reject leave requests.",
        icon: "calendar",
      },
      {
        title: "Payroll Management",
        description:
          "Generate monthly payroll using employee salary structures and attendance data.",
        icon: "credit-card",
      },
      {
        title: "HR Letter Management",
        description:
          "Create reusable templates and generate employment letters such as offer, promotion, increment and experience letters.",
        icon: "briefcase",
      },
      {
        title: "Employee Self-Service",
        description:
          "Employees can manage their profile, view attendance, leave balances, payslips, letters and notifications.",
        icon: "shield-check",
      },
    ],

    challenges: [
      {
        title: "Attendance-Based Payroll",

        problem:
          "Monthly payroll needs to account for employee salary structures, paid days and unpaid days derived from attendance.",

        solution:
          "Implemented a payroll workflow that calculates monthly payroll using employee salary information and attendance records before generating payroll records.",
      },

      {
        title: "Leave & Attendance Consistency",

        problem:
          "Leave approvals and attendance records need to remain consistent so that employee attendance and payroll calculations are accurate.",

        solution:
          "Designed leave and attendance workflows with approval states and automated attendance processing to keep HR records consistent.",
      },

      {
        title: "Reusable HR Documents",

        problem:
          "HR teams repeatedly create similar documents for offers, promotions, increments and employee certificates.",

        solution:
          "Implemented reusable letter templates with dynamic employee placeholders that can be used to generate different HR documents.",
      },

      {
        title: "Admin & Employee Workflows",

        problem:
          "Administrators need complete control over HR operations while employees should only have access to their own information and actions.",

        solution:
          "Implemented separate admin and employee workflows with role-based access and dedicated dashboards for each user type.",
      },
    ],

    learnings: [
      {
        title: "Business Workflow Design",

        description:
          "HR systems require carefully designed workflows because actions such as leave approval, attendance correction and payroll generation depend on each other.",
      },

      {
        title: "Payroll Processing",

        description:
          "Payroll calculations should be based on reliable attendance and salary data rather than relying on manually entered values.",
      },

      {
        title: "Role-Based Access",

        description:
          "Admin and employee portals should expose only the actions and information relevant to each role.",
      },

      {
        title: "Background Processing",

        description:
          "Recurring HR operations such as attendance processing can be automated using scheduled background jobs.",
      },

      {
        title: "Document Generation",

        description:
          "Template-based document generation makes repetitive HR processes faster and more consistent.",
      },
    ],

    layout: "compact",

    year: "2026",

    category: "HR SaaS",

    duration: "8 Weeks",

    role: "Full Stack Developer",

    teamSize: "Solo",

    status: "Completed",

    technologies: [
      "Ruby on Rails",
      "PostgreSQL",
      "Tailwind CSS",
      "Devise",
      "Active Storage",
      "Prawn",
      "Sidekiq",
      "Docker",
    ],

    techStack: {
      backend: [
        "Ruby on Rails",
        "Devise",
        "ActiveRecord",
        "Background Jobs",
      ],

      frontend: [
        "ERB",
        "Tailwind CSS",
        "Hotwire",
        "Turbo",
        "Stimulus",
      ],

      database: [
        "PostgreSQL",
      ],

      infrastructure: [
        "Docker",
        "GitHub",
      ],
    },

    goals: [
      "Build a lightweight HR platform for small teams and startups.",
      "Centralize employee and HR information.",
      "Automate attendance and payroll workflows.",
      "Provide self-service capabilities for employees.",
      "Simplify HR document and letter generation.",
    ],

    outcomes: [
      "Built separate admin and employee portals.",
      "Implemented attendance and leave management workflows.",
      "Built salary structure and monthly payroll processing.",
      "Implemented reusable HR letter templates.",
      "Added employee self-service for profiles, payslips and HR information.",
      "Implemented automated attendance processing and HR notifications.",
    ],

    github: "",

    live: "",

    overview:
      "HRLite is a lightweight HR and payroll management platform designed for small teams. It provides dedicated admin and employee portals for managing employee information, attendance, leaves, payroll, payslips, HR letters and notifications.",

    problem:
      "Small teams often rely on spreadsheets and disconnected tools for managing attendance, leave requests, employee records and payroll, making HR operations difficult to maintain as the team grows.",

    solution:
      "Built a centralized HR platform with dedicated admin and employee workflows that automate attendance, leave management, payroll processing and HR document generation.",

    architecture: {
      frontend: "Rails Views + Hotwire + Tailwind CSS",

      api: "Rails Application",

      backend: "Ruby on Rails",

      services: [
        {
          title: "PostgreSQL",
          subtitle: "Primary Database",
        },
        {
          title: "Redis",
          subtitle: "Background Jobs",
        },
        {
          title: "Active Storage",
          subtitle: "Employee Documents & Images",
        },
        {
          title: "Prawn",
          subtitle: "PDF Document Generation",
        },
      ],

      highlights: [
        "Role-Based Access",
        "Employee Self-Service",
        "Attendance Automation",
        "Leave Approval Workflow",
        "Salary Structures",
        "Monthly Payroll",
        "HR Letter Templates",
        "PDF Payslips",
        "Background Jobs",
        "Notifications",
      ],

      decisions:
        "The application follows a modular Rails architecture where PostgreSQL stores employee and HR data, ActiveRecord handles business relationships, background jobs automate recurring HR operations, Active Storage manages employee media and Prawn generates PDF-based HR documents and payslips.",
    },

    gallery: [
      {
        image: "/images/projects/hrlite/admin-dashboard.png",
        title: "Admin Dashboard",
        description:
          "Administrative overview showing employee count, attendance status, leave requests, payslip requests and attendance regularization requests.",
      },

      {
        image: "/images/projects/hrlite/payroll.png",
        title: "Payroll Management",
        description:
          "Monthly payroll management screen where administrators can generate payroll using attendance and salary structure data.",
      },

      {
        image: "/images/projects/hrlite/letter-templates.png",
        title: "HR Letter Templates",
        description:
          "Centralized template management for offer, promotion, increment, appreciation, warning, termination and experience letters.",
      },

      {
        image: "/images/projects/hrlite/employee-dashboard.png",
        title: "Employee Dashboard",
        description:
          "Employee self-service dashboard showing employment information, leave balances, attendance overview, working hours and achievements.",
      },

      {
        image: "/images/projects/hrlite/profile.png",
        title: "Employee Profile",
        description:
          "Employee profile management with employment information, personal details, emergency contact information and profile picture.",
      },

      {
        image: "/images/projects/hrlite/notifications.png",
        title: "Notifications",
        description:
          "Centralized notification center for employee updates such as approved leave requests and other HR activities.",
      },
    ],
  },
};
