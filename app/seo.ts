import { Metadata } from "next";

export const siteConfig = {
  name: "Chander Prakash",

  title: "Chander Prakash | Backend Engineer",

  description:
    "Backend Engineer specializing in Ruby on Rails, Golang, GraphQL, PostgreSQL, Docker and scalable backend systems.",

  url: "https://whoischanderprakash.com",

  creator: "Chander Prakash",

  keywords: [
    "Backend Engineer",
    "Ruby on Rails",
    "Golang",
    "GraphQL",
    "PostgreSQL",
    "Docker",
    "Redis",
    "Software Engineer",
    "Full Stack Developer",
    "Portfolio",
  ],

  // verification: {
	//   google: "YOUR_GOOGLE_VERIFICATION_CODE",
	// },

  ogImage: "/images/seo/og-image.png",
};

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "http://localhost:3000";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,

  applicationName: siteConfig.name,

  authors: [
    {
      name: siteConfig.creator,
    },
  ],

  creator: siteConfig.creator,

  publisher: siteConfig.creator,

  keywords: siteConfig.keywords,

  category: "Technology",

  robots: {
    index: true,
    follow: true,
  },
};
