"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Calendar,
  GitBranch,
  Star,
  Code2,
} from "lucide-react";

import { GithubRepository } from "@/types/github";

interface Props {
  repository: GithubRepository;
}

export default function RepositoryCard({
  repository,
}: Props) {
  const updatedDate = new Date(
    repository.updatedAt
  ).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });

  return (
    <motion.article
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        group
        h-full
        rounded-[24px]
		    lg:rounded-[30px]
        border
        border-slate-200
        bg-white
        p-5
    		sm:p-6
    		lg:p-7
        shadow-sm
        transition-all
        duration-300
        hover:border-blue-200
        hover:shadow-[0_30px_70px_rgba(59,130,246,.10)]
      "
    >
      {/* Header */}

      <div className="flex items-start justify-between gap-4">

        <div className="rounded-2xl bg-blue-50 p-2.5 lg:p-3">

          <Code2
            size={20}
            className="text-blue-600 lg:h-[22px] lg:w-[22px]"
          />

        </div>

        <ArrowUpRight
          className="
            text-slate-400
            transition-transform
            duration-300
            group-hover:-translate-y-1
            group-hover:translate-x-1
            group-hover:text-blue-600
          "
        />

      </div>

      {/* Repository Name */}

      <h3
        className="
          mt-5
          text-xl
          sm:text-2xl
          font-bold
          tracking-tight
          text-slate-900
          break-words
        "
      >
        {repository.name}
      </h3>

      {/* Description */}

      <p
        className="
          mt-3
          min-h-[56px]
          sm:min-h-[72px]
          text-sm
          sm:text-[15px]
          leading-6
          sm:leading-7
          text-slate-600
        "
      >
        {
          repository.description ??
          "Production-ready software project."
        }
      </p>

      {/* Language */}

      {repository.language && (
        <div className="mt-5">

          <span
            className="
              rounded-full
              bg-blue-50
              px-2.5
              sm:px-3
              py-1
              sm:py-1.5
              text-[11px]
              sm:text-xs
              font-semibold
              uppercase
              tracking-wider
              text-blue-600
            "
          >
            {repository.language}
          </span>

        </div>
      )}

      {/* Stats */}

      <div
        className="
          mt-6
          flex
          items-center
          gap-5
          text-sm
          text-slate-500
        "
      >

        <div className="flex items-center gap-2">

          <Star size={16} />

          {repository.stars}

        </div>

        <div className="flex items-center gap-2">

          <GitBranch size={16} />

          {repository.forks}

        </div>

      </div>

      {/* Footer */}

      <div
        className="
          mt-6
          flex
          items-center
          justify-between
          border-t
          border-slate-100
          pt-5
          sm:pt-6
        "
      >

        <div 
          className="
            flex
            items-center
            gap-2
            text-xs
            sm:text-sm
            text-slate-500
          "
        >

          <Calendar size={16} />

          {updatedDate}

        </div>

        <Link
          href={repository.htmlUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            text-sm
            font-semibold
            text-blue-600
            transition-all
            duration-300
            hover:translate-x-1
            hover:text-blue-700
          "
        >
          View →
        </Link>

      </div>

    </motion.article>
  );
}
