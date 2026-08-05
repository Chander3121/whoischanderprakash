"use client";

import { motion } from "framer-motion";

interface Props {
  totalProjects: number;
}

export default function ProjectsHero({
  totalProjects,
}: Props) {
  return (
    <section
      className="
        relative
        overflow-hidden
        pt-40
        pb-20
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          left-1/2
          top-0
          -z-10
          h-[450px]
          w-[450px]
          -translate-x-1/2
          rounded-full
          bg-blue-100
          blur-[120px]
        "
      />

      <div
        className="
          mx-auto
          max-w-7xl
          px-6
          text-center
          lg:px-10
        "
      >
        <motion.span
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="
            rounded-full
            border
            border-blue-200
            bg-blue-50
            px-5
            py-2
            text-sm
            font-semibold
            uppercase
            tracking-[0.25em]
            text-blue-600
          "
        >
          Portfolio
        </motion.span>

        <motion.h1
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: .1,
          }}
          className="
            mt-8
            text-5xl
            font-bold
            tracking-[-0.05em]
            text-slate-900

            lg:text-7xl
          "
        >
          Projects
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: .2,
          }}
          className="
            mx-auto
            mt-8
            max-w-3xl
            text-lg
            leading-8
            text-slate-600
          "
        >
          Explore production-ready backend systems,
          marketplaces, payment integrations,
          scalable APIs and full-stack applications
          I've built over the years.
        </motion.p>

        {/* Stats */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: .3,
          }}
          className="
            mt-14
            flex
            flex-wrap
            justify-center
            gap-4
          "
        >
          <Stat
            value={totalProjects}
            label="Projects"
          />

          <Stat
            value="3+"
            label="Years"
          />

          <Stat
            value="Rails • Go"
            label="Primary Stack"
          />
        </motion.div>
      </div>
    </section>
  );
}

interface StatProps {
  value: string | number;
  label: string;
}

function Stat({
  value,
  label,
}: StatProps) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        px-8
        py-6
        shadow-sm
      "
    >
      <h3
        className="
          text-3xl
          font-bold
          text-slate-900
        "
      >
        {value}
      </h3>

      <p
        className="
          mt-2
          text-sm
          text-slate-500
        "
      >
        {label}
      </p>
    </div>
  );
}
