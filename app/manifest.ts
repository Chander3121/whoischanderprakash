import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Chander Prakash",
    short_name: "Chander",
    description:
      "Chander Prakash is a Software Engineer and Ruby on Rails Developer with 3+ years of experience building scalable APIs, GraphQL applications, payment systems, Docker and backend services.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
