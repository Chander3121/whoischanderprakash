"use client";

import { motion } from "framer-motion";

import HeroButtons from "./HeroButtons";
import HeroTechChips from "./HeroTechChips";
import FloatingCard from "./FloatingCard";

export default function HeroContent() {
  return (
    <div
      className="
        mt-6
        flex
        flex-col
        items-center
        gap-16
        lg:mt-12
        lg:flex-row
        lg:items-center
        lg:gap-20
      "
    >
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
        className="
          flex-1
          text-center
          lg:text-left
        "
      >
        <span
          className="
            text-sm
            font-semibold
            uppercase
            tracking-[0.35em]
            text-blue-600
          "
        >
          Backend Engineer
        </span>

        <h1
          className="
            mt-7
            text-4xl
            font-bold
            leading-tight
            tracking-[-0.05em]
            text-slate-900

            sm:text-5xl

            lg:text-[76px]
            lg:leading-[0.98]
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
            mx-auto
            mt-8
            max-w-xl
            text-base
            leading-7
            text-slate-600

            sm:text-lg

            lg:mx-0
            lg:leading-8
          "
        >
          I design scalable APIs, payment systems,
          microservices and backend architectures
          that power modern digital products.
        </p>

        <HeroButtons />

        <HeroTechChips />
      </motion.div>

      {/* RIGHT */}

      <div
        className="
          relative
          hidden
          h-[620px]
          flex-1
          lg:block
        "
      >
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
  );
}
