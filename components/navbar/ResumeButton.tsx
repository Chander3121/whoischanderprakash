"use client";

import { Download } from "lucide-react";

export default function ResumeButton() {
  return (
    <a
      href="/CHANDER_PRAKASH_ROR_GOLANG_RESUME_2026-05-27.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex
        items-center
        gap-2
        rounded-full
        bg-blue-600
        px-5
        py-3
        text-sm
        font-semibold
        text-white
        shadow-lg
        shadow-blue-600/20
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      Download Resume

      <Download size={16} />
    </a>
  );
}
