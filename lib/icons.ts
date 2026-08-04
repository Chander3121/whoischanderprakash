// lib/icons.ts

import {
  Cpu,
  Database,
  Globe,
  ServerCog,
  MapPin,
  Mail,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export const icons = {
  // Tech
  backend: ServerCog,
  frontend: Globe,
  database: Database,
  devops: Cpu,

  // Contact
  github: FaGithub,
  linkedin: FaLinkedin,
  mail: Mail,
  location: MapPin,
} as const;

export type IconName = keyof typeof icons;
