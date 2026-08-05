"use client";

import Image from "next/image";

import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        pt-36
        pb-20
        sm:pb-24
        lg:pt-44
        lg:pb-32
      "
    >
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

      <div className="absolute inset-0 -z-20 bg-white/70" />

      {/* Reading Gradient */}

      <div className="absolute inset-0 -z-10 bg-gradient from-white via-white/85 to-white/10" />

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

      {/* Content */}

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-6
          lg:px-10
        "
      >
        <HeroContent />
      </div>
    </section>
  );
}
