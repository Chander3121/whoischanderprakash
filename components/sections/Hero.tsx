"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-44 pb-32">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-20 px-6 lg:flex-row lg:px-10">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          className="flex-1"
        >

          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Backend Engineer
          </span>

          <h1 className="mt-6 text-6xl font-bold leading-tight tracking-tight lg:text-7xl">
            Building reliable
            <br />
            backend systems
            <br />
            for modern
            <br />
            applications.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
            I design scalable APIs, payment systems,
            microservices and backend architectures
            that power real-world products.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <button className="flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-medium text-white transition hover:scale-105">
              View My Work
              <ArrowRight size={18} />
            </button>

            <button className="flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 font-medium transition hover:bg-slate-100">
              Let's Connect
              <Mail size={18} />
            </button>

          </div>

          <div className="mt-10 flex flex-wrap gap-3">

            {[
              "Rails",
              "Go",
              "PostgreSQL",
              "Docker",
              "Redis",
              "GraphQL",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm"
              >
                {tech}
              </span>
            ))}

          </div>

        </motion.div>

        {/* RIGHT */}

        <div className="relative hidden h-[520px] flex-1 lg:block">

          <FloatingCard
            title="REST API"
            subtitle="Design & Development"
            top="0%"
            left="35%"
          />

          <FloatingCard
            title="GraphQL"
            subtitle="APIs"
            top="18%"
            left="62%"
          />

          <FloatingCard
            title="Microservices"
            subtitle="Architecture"
            top="22%"
            left="5%"
          />

          <FloatingCard
            title="Payment Systems"
            subtitle="Stripe • Razorpay"
            top="42%"
            left="60%"
          />

          <FloatingCard
            title="Background Jobs"
            subtitle="Sidekiq • Redis"
            top="52%"
            left="18%"
          />

          <FloatingCard
            title="Database Design"
            subtitle="PostgreSQL"
            top="70%"
            left="48%"
          />

        </div>

      </div>
    </section>
  );
}

interface CardProps {
  title: string;
  subtitle: string;
  top: string;
  left: string;
}

function FloatingCard({
  title,
  subtitle,
  top,
  left,
}: CardProps) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
      }}
      style={{
        top,
        left,
      }}
      className="absolute rounded-3xl border border-slate-200 bg-white px-6 py-5 shadow-xl"
    >
      <h3 className="font-semibold">{title}</h3>

      <p className="mt-1 text-sm text-slate-500">
        {subtitle}
      </p>
    </motion.div>
  );
}
