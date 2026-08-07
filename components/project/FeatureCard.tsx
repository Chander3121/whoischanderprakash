"use client";

import { motion } from "framer-motion";

import {
  featureIcons,
  type FeatureIconName,
} from "@/lib/feature-icons";

interface Props {
  title: string;
  description: string;
  icon: FeatureIconName;
}

export default function FeatureCard({
  title,
  description,
  icon,
}: Props) {
  const Icon = featureIcons[icon];

  return (
    <motion.div>
      <div className="inline-flex rounded-2xl bg-blue-50 p-3">
        {Icon ? (
          <Icon
            size={24}
            className="text-blue-600"
          />
        ) : (
          <div className="h-6 w-6 rounded bg-red-500" />
        )}
      </div>

      <h3 className="mt-6 text-xl font-bold">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>
    </motion.div>
  );
}