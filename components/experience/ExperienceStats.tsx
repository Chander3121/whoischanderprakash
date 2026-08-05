"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  FolderKanban,
  Rocket,
  Cpu,
} from "lucide-react";

const stats = [
  {
    icon: BriefcaseBusiness,
    value: "3+",
    label: "Years Experience",
  },
  {
    icon: FolderKanban,
    value: "6+",
    label: "Projects Delivered",
  },
  {
    icon: Rocket,
    value: "20+",
    label: "Major Features",
  },
  {
    icon: Cpu,
    value: "Backend",
    label: "Engineering Focus",
  },
];

export default function ExperienceStats() {
  return (
    <div 
      className="
        mt-16
        grid
        grid-cols-2
        gap-4
        xl:grid-cols-4
      "
    >
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <motion.div
            key={stat.label}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              group
              relative
              overflow-hidden
              rounded-[36px]
              border
              border-slate-200
              bg-white
              p-5
              sm:p-6
              lg:p-8
              shadow-sm
              transition-all
              duration-300
              hover:border-blue-200
              hover:shadow-[0_30px_70px_rgba(59,130,246,.12)]
            "
          >
            {/* Glow */}

            <div
              className="
                absolute
                -right-12
                -top-12
                h-40
                w-40
                rounded-full
                bg-blue-100/60
                blur-3xl
                opacity-0
                transition-opacity
                duration-500
                group-hover:opacity-100
              "
            />

            <div className="relative">

              <div className="mb-4 lg:mb-6 inline-flex rounded-2xl bg-blue-50 p-3">
                <Icon
                  size={20}
                  className="text-blue-600 h-6 w-6 text-blue-600 lg:h-7 lg:w-7"
                />
              </div>

              <h3
                className={`
                  font-bold
                  tracking-tight
                  text-slate-900
                  ${
                    stat.value === "Backend"
                      ? "text-2xl sm:text-3xl lg:text-5xl"
                      : "text-3xl sm:text-4xl lg:text-5xl"
                  }
                `}
              >
                {stat.value}
              </h3>

              <p
                className="
                  mt-2
                  text-sm
                  leading-6
                  text-slate-500

                  lg:mt-3
                  lg:text-base
                "
              >
                {stat.label}
              </p>

            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
