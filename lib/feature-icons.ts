import {
  Bell,
  Calendar,
  CreditCard,
  Heart,
  LayoutDashboard,
  ShieldCheck,
  BriefcaseBusiness,
  Monitor,
  MessageSquare,
} from "lucide-react";

export const featureIcons = {
  shield: ShieldCheck,
  "shield-check": ShieldCheck,

  calendar: Calendar,

  "credit-card": CreditCard,

  "layout-dashboard": LayoutDashboard,

  heart: Heart,

  bell: Bell,

  briefcase: BriefcaseBusiness,

  monitor: Monitor,

  "messages-square": MessageSquare,
} as const;

export type FeatureIconName = keyof typeof featureIcons;
