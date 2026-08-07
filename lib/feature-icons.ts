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

  CakeSlice,
  Filter,
  Package,
  ShoppingCart,
  Star,
  MonitorSmartphone,
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

  cake: CakeSlice,

  filter: Filter,

  package: Package,

  "shopping-cart": ShoppingCart,

  star: Star,

  "monitor-smartphone": MonitorSmartphone,
} as const;

export type FeatureIconName = keyof typeof featureIcons;
