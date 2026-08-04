import {
  Bell,
  Calendar,
  CreditCard,
  Heart,
  LayoutDashboard,
  ShieldCheck,
} from "lucide-react";

export const featureIcons = {
  shield: ShieldCheck,
  calendar: Calendar,
  "credit-card": CreditCard,
  "layout-dashboard": LayoutDashboard,
  heart: Heart,
  bell: Bell,
} as const;

export type FeatureIconName = keyof typeof featureIcons;
