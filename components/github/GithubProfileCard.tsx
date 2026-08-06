"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowUpRight,
  Globe,
  MapPin,
  Users,
  FolderGit2,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import { GithubProfile } from "@/types/github";

interface Props {
  profile: GithubProfile;
}

export default function GithubProfileCard({
  profile,
}: Props) {
  return (
    <div
      className="
        group
        overflow-hidden
        rounded-[36px]
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:border-blue-200
        hover:shadow-[0_35px_90px_rgba(59,130,246,.10)]

        lg:p-8
      "
    >
      {/* Header */}

      <div className="flex gap-4 sm:gap-5 items-center">

        <div className="relative h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-full ring-4 ring-blue-50 shrink-0">

          <Image
            src={profile.avatar}
            alt={profile.name}
            fill
            sizes="96px"
            className="object-cover"
          />

        </div>

        <div className="min-w-0 flex-1">

          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            {profile.name}
          </h3>

          <p className="mt-1 text-sm sm:text-base text-slate-500">
            @{profile.login}
          </p>

          {profile.location && (
            <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">

              <MapPin size={16} />

              <span>{profile.location}</span>

            </div>
          )}

        </div>

      </div>

      {/* Bio */}

      {profile.bio && (
        <p className="mt-6 sm:mt-8 text-sm sm:text-base leading-7 sm:leading-8 text-slate-600">
          {profile.bio}
        </p>
      )}

      {/* Stats */}

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">

        <div className="rounded-2xl bg-slate-50 p-5 sm:p-4 text-center">

          <FolderGit2
            className="mx-auto text-blue-600"
            size={22}
          />

          <h4 className="mt-2 sm:mt-3 text-3xl sm:text-2xl font-bold text-slate-900">
            {profile.publicRepos}
          </h4>

          <p className="mt-2 text-xs uppercase tracking-wider text-slate-500">
            Repositories
          </p>

        </div>

        <div className="rounded-2xl bg-slate-50 p-4 text-center">

          <Users
            className="mx-auto text-blue-600"
            size={22}
          />

          <h4 className="mt-3 text-2xl font-bold text-slate-900">
            {profile.followers}
          </h4>

          <p className="mt-1 text-xs uppercase tracking-wider text-slate-500">
            Followers
          </p>

        </div>

        <div className="rounded-2xl bg-slate-50 p-4 text-center">

          <FaGithub
            className="mx-auto text-blue-600"
            size={22}
          />

          <h4 className="mt-3 text-2xl font-bold text-slate-900">
            {profile.following}
          </h4>

          <p className="mt-1 text-xs uppercase tracking-wider text-slate-500">
            Following
          </p>

        </div>

      </div>

      {/* Actions */}

      <div className="mt-8 flex flex-col sm:mt-10 sm:flex-row sm:flex-wrap gap-3">

        <Link
          href={profile.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            w-full
            justify-center
            sm:w-auto
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-slate-900
            px-5
            py-3
            text-sm
            font-semibold
            text-white
            transition-all
            duration-300
            hover:-translate-y-1
          "
        >
          <FaGithub size={18} />

          View GitHub

          <ArrowUpRight size={16} />
        </Link>

        <Link
          href="https://linkedin.com/in/chanderprakash3121"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-slate-200
            bg-white
            px-5
            py-3
            text-sm
            font-semibold
            text-slate-700
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-blue-200
          "
        >
          <FaLinkedin size={18} />

          LinkedIn
        </Link>

        {profile.website && (
          <Link
            href={
              profile.website.startsWith("http")
                ? profile.website
                : `https://${profile.website}`
            }
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-slate-200
              bg-white
              px-5
              py-3
              text-sm
              font-semibold
              text-slate-700
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-blue-200
            "
          >
            <Globe size={18} />

            Website
          </Link>
        )}

      </div>
    </div>
  );
}
