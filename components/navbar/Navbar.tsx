"use client";

import { useEffect, useState } from "react";

import MobileNav from "./MobileNav";

import Link from "next/link";
import Image from "next/image";

import DesktopNav from "./DesktopNav";
import MobileMenuButton from "./MobileMenuButton";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
	  document.body.style.overflow = open
	    ? "hidden"
	    : "";

	  return () => {
	    document.body.style.overflow = "";
	  };
	}, [open]);

  return (
    <header
      className="
        fixed
        inset-x-0
        top-0
        z-50
      "
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <div
          className="
            mt-6
            flex
            items-center
            justify-between

            rounded-full

            border
            border-white/70

            bg-white/70

            px-6
            py-4

            backdrop-blur-xl

            shadow-[0_10px_40px_rgba(15,23,42,.08)]
          "
        >
          <Link
            href="/"
            className="
              flex
              items-center
              gap-4
            "
          >
            {/* Profile Image */}

            <div
              className="
                relative
                h-12
                w-12
                sm:h-14
                sm:w-14
                overflow-hidden
                rounded-full
                ring-2
                ring-white
                shadow-lg
                shadow-blue-100
              "
            >
              <Image
                src="/images/profile/profile.jpg"
                alt="Chander Prakash"
                fill
                className="object-cover"
              />
            </div>

            {/* Name */}

            <div className="leading-tight">

              <h2
                className="
                  text-lg
                  font-bold
                  tracking-tight
                  text-slate-900
                "
              >
                Chander Prakash
              </h2>

              <p
                className="
                  text-sm
                  font-medium
                  text-slate-500
                "
              >
                Software Engineer
              </p>

            </div>

          </Link>

          <DesktopNav />

          <MobileMenuButton
            onClick={() => setOpen(true)}
          />

          <MobileNav
            open={open}
            onClose={() => setOpen(false)}
          />
        </div>

      </div>
    </header>
  );
}
