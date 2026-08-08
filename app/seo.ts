import { Metadata } from "next";

export const siteConfig = {
  name: "Chander Prakash",

  title: "Chander Prakash | Software Engineer & Ruby on Rails Developer",

  description:
    "Chander Prakash is a Software Engineer and Ruby on Rails Developer with 3+ years of experience building scalable APIs, GraphQL applications, payment systems, docker and backend services.",

  url: "https://whoischanderprakash-dev.vercel.app",

  creator: "Chander Prakash",

  keywords: [
    "Backend Engineer",
	"Software Engineer",
	"3 years of experience",
    "Ruby on Rails",
    "Golang",
    "GraphQL",
    "PostgreSQL",
    "Docker",
    "Redis",
    "Software Developer",
    "Full Stack Developer",
    "Portfolio",
  ],

  // verification: {
	//   google: "YOUR_GOOGLE_VERIFICATION_CODE",
	// },

  ogImage: "/images/profile/profile.jpg",
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
