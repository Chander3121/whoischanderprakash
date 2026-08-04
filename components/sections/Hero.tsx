"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

const technologies = [
  "Ruby on Rails",
  "Golang",
  "PostgreSQL",
  "Docker",
  "Redis",
  "GraphQL",
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">

      {/* Background Image */}

      <div className="absolute inset-0 -z-30">

        <Image
          src="/images/hero-bg.jpg"
          alt="Hero Background"
          fill
          priority
          className="
            object-cover
            object-center
            scale-110
            blur-[4px]
            brightness-[0.7]
          "
        />

      </div>

      {/* White Overlay */}

      <div className="absolute inset-0 -z-30 bg-white/70" />

      {/* Reading Gradient */}

      <div className="absolute inset-0 -z-50 bg-gradient-to-r from-white via-white/85 to-white/10" />

      {/* Right Glow */}

      <div
        className="
          absolute
          right-[-220px]
          top-1/2
          -z-10
          h-[720px]
          w-[720px]
          -translate-y-1/2
          rounded-full
          bg-blue-400/15
          blur-[180px]
        "
      />

      {/* Left Glow */}

      <div
        className="
          absolute
          left-[-220px]
          top-16
          -z-10
          h-[450px]
          w-[450px]
          rounded-full
          bg-sky-300/10
          blur-[150px]
        "
      />

      <div className="relative mx-auto flex w-full max-w-7xl mt-12 flex-col items-center gap-20 px-6 lg:flex-row lg:px-10">

        {/* LEFT */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="flex-1"
        >

          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
            Backend Engineer
          </span>

          <h1
            className="
              mt-7
              text-6xl
              font-bold
              leading-[0.98]
              tracking-[-0.05em]
              text-slate-900
              lg:text-[76px]
            "
          >
            Building reliable
            <br />
            backend systems
            <br />
            for modern
            <br />
            applications.
          </h1>

          <p
            className="
              mt-8
              max-w-xl
              text-lg
              leading-8
              text-slate-600
            "
          >
            I design scalable APIs, payment systems,
            microservices and backend architectures
            that power modern digital products.
          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap gap-4">

            <button
              className="
                group
                flex
                items-center
                gap-2
                rounded-full
                bg-blue-600
                px-7
                py-4
                font-medium
                text-white
                shadow-lg
                shadow-blue-600/20
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
                hover:shadow-blue-600/30
              "

              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View My Work

              <ArrowRight
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </button>

            <button
              className="
                group
                flex
                items-center
                gap-2
                rounded-full
                border
                border-white/70
                bg-white/70
                px-7
                py-4
                font-medium
                text-slate-800
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-white
                hover:shadow-lg
              "
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({behavior: "smooth"})
                }
            >
              Get In Touch

              <Mail
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover:rotate-6
                "
              />
            </button>

          </div>

          {/* Tech Chips */}

          <div className="mt-12 flex flex-wrap gap-3">

            {technologies.map((tech) => (
              <span
                key={tech}
                className="
                  rounded-full
                  border
                  border-white/70
                  bg-white/70
                  px-5
                  py-2.5
                  text-sm
                  font-medium
                  text-slate-700
                  shadow-sm
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-200
                  hover:bg-white
                  hover:shadow-lg
                "
              >
                {tech}
              </span>
            ))}

          </div>

        </motion.div>

        {/* RIGHT */}
        <div className="relative hidden h-[620px] flex-1 pt-12 lg:block">

          <FloatingCard
            title="REST API"
            subtitle="Design & Development"
            top="2%"
            left="34%"
            delay={0}
          />

          <FloatingCard
            title="GraphQL"
            subtitle="Schema First APIs"
            top="18%"
            left="65%"
            delay={0.4}
          />

          <FloatingCard
            title="Microservices"
            subtitle="Go Services"
            top="24%"
            left="4%"
            delay={0.8}
          />

          <FloatingCard
            title="Payment Systems"
            subtitle="Stripe • Razorpay"
            top="45%"
            left="60%"
            delay={1.2}
          />

          <FloatingCard
            title="Background Jobs"
            subtitle="Sidekiq • Redis"
            top="56%"
            left="15%"
            delay={1.6}
          />

          <FloatingCard
            title="Database Design"
            subtitle="PostgreSQL"
            top="75%"
            left="42%"
            delay={2}
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
  delay: number;
}

function FloatingCard({
  title,
  subtitle,
  top,
  left,
  delay,
}: CardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: [0, -10, 0],
      }}
      transition={{
        opacity: {
          duration: 0.5,
          delay,
        },
        y: {
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay,
        },
      }}
      style={{
        top,
        left,
      }}
      className="
        absolute
        rounded-[24px]
        border
        border-white/70
        bg-white/70
        px-5
        py-4
        backdrop-blur-xl
        shadow-[0_20px_50px_rgba(15,23,42,0.08)]
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-blue-200
        hover:bg-white/90
        hover:shadow-[0_25px_70px_rgba(59,130,246,0.18)]
      "
    >
      {/* Accent */}

      <div className="mb-3 h-1.5 w-10 rounded-full bg-gradient-to-r from-blue-600 to-sky-400" />

      <h3 className="text-base font-semibold tracking-tight text-slate-900">
        {title}
      </h3>

      <p className="mt-1 text-sm leading-6 text-slate-500">
        {subtitle}
      </p>
    </motion.div>
  );
}