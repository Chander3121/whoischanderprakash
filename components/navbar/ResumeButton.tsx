"use client";

import { useState } from "react";

import {
  Download,
  Check,
  Loader2,
} from "lucide-react";

import { track } from "@vercel/analytics";
import { trackEvent } from "@/lib/analytics";

export default function ResumeButton() {
  const [status, setStatus] = useState<
    "idle" | "downloading" | "downloaded"
  >("idle");

  const handleDownload = () => {
    track("resume_download", {
      source: "navbar",
    });

    trackEvent("resume_download", {
      source: "navbar",
    });

    setStatus("downloading");

    const link = document.createElement("a");
    link.href =
      "/CHANDER_PRAKASH_ROR_GOLANG_RESUME_2026-05-27.pdf";
    link.download =
      "CHANDER_PRAKASH_RESUME.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setStatus("downloaded");

      setTimeout(() => {
        setStatus("idle");
      }, 2500);
    }, 500);
  };

  return (
    <button
      onClick={handleDownload}
      disabled={status === "downloading"}
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
        disabled:cursor-not-allowed
        disabled:opacity-80
      "
    >
      {status === "idle" && (
        <>
          Download Resume
          <Download size={16} />
        </>
      )}

      {status === "downloading" && (
        <>
          Downloading...
          <Loader2
            size={16}
            className="animate-spin"
          />
        </>
      )}

      {status === "downloaded" && (
        <>
          Downloaded
          <Check size={16} />
        </>
      )}
    </button>
  );
}
