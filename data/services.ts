export interface Service {
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    title: "REST API Development",
    description:
      "Designing secure, scalable and maintainable REST APIs following production-ready architecture and clean coding practices.",
  },

  {
    title: "GraphQL APIs",
    description:
      "Building flexible GraphQL APIs with optimized resolvers, efficient queries and scalable schema design.",
  },

  {
    title: "Payment Systems",
    description:
      "Integrating secure payment workflows using Stripe and Razorpay with idempotency, webhooks and reconciliation.",
  },

  {
    title: "Background Jobs",
    description:
      "Processing asynchronous tasks using Sidekiq and Redis for reliable and high-performance applications.",
  },

  {
    title: "Database Design",
    description:
      "Designing PostgreSQL databases with proper relationships, indexing strategies and optimized queries.",
  },

  {
    title: "Microservices",
    description:
      "Building modular backend services with Golang and integrating them with Rails applications.",
  },
];
