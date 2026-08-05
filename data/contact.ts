import type { ComponentProps } from "react";
import ContactCard from "@/components/cards/ContactCard";

type ContactItem = ComponentProps<typeof ContactCard>;

export const contactInfo: ContactItem[] = [
  {
    icon: "mail",
    title: "Email",
    value: "hireme.chanderprakash@gmail.com",
    href: "mailto:hireme.chanderprakash@gmail.com",
  },
  {
    icon: "github",
    title: "GitHub",
    value: "github.com/chander3121",
    href: "https://github.com/chander3121/",
  },
  {
    icon: "linkedin",
    title: "LinkedIn",
    value: "linkedin.com/in/chanderprakash3121",
    href: "https://linkedin.com/in/chanderprakash3121/",
  },
  {
    icon: "location",
    title: "Location",
    value: "Mehrauli, South Delhi, Delhi, India (110030)",
    href: "https://maps.app.goo.gl/vszRfdD39eteLPjs5",
  },
];
