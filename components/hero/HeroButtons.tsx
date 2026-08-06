"use client";

import { ArrowRight, Mail } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function HeroButtons() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    if (id === "projects") {
      trackEvent("view_work_click", {
        source: "hero_section",
      });
    } else {
      trackEvent("contact_button_click", {
        source: "hero_section",
      });
    }
  };

  return (
    <div
      className="
        mt-10
        flex
        flex-col
        gap-4

        sm:flex-row
        sm:justify-center

        lg:justify-start
      "
    >
      {/* Primary Button */}

      <button
        onClick={() => scrollToSection("projects")}
        className="
          group
          flex
          items-center
          justify-center
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

      {/* Secondary Button */}

      <button
        onClick={() => scrollToSection("contact")}
        className="
          group
          flex
          items-center
          justify-center
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
  );
}
