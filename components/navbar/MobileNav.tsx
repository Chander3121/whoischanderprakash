"use client";

import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import MobileNavLinks from "./MobileNavLinks";
import Image from "next/image";
import ResumeButton from "./ResumeButton";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function MobileNav({
  open,
  onClose,
}: Props) {
  const handleNavigation = (id: string) => {
    onClose();

    setTimeout(() => {
      document
        .getElementById(id)
        ?.scrollIntoView({
          behavior: "smooth",
        });
    }, 250);
  };

  return (
    <AnimatePresence>

      {open && (
        <>

          {/* Backdrop */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .25 }}
            onClick={onClose}
            className="
              fixed
              inset-0
              z-40
              bg-black/20
              transition
              lg:hidden
            "
          />

          {/* Drawer */}

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: .35,
              ease: "easeInOut",
            }}
            className="
              fixed
              right-0
              top-0
              z-50

              flex
              h-dvh
              w-full
              flex-col

              border-l
              border-slate-200

              bg-white

              overflow-y-auto

              p-8

              shadow-2xl

              lg:hidden
            "
          >

            {/* Header */}

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-4">
      			    <Image
      			      src="/images/profile/profile.jpg"
      			      alt="Profile"
      			      width={54}
      			      height={54}
      			      className="
      			        rounded-full
      			        ring-2
      			        ring-blue-100
      			      "
      			    />

      			    <div>

      			      <h2 className="text-lg font-bold">
      			        Chander Prakash
      			      </h2>

      			      <p className="text-sm text-slate-500">
      			        Software Engineer
      			      </p>

      			    </div>

      			  </div>

              <button
                onClick={onClose}
                className="
                  flex
                  justify-center
                  items-center
                  h-8
                  w-8
                  rounded-full
                  bg-slate-100
                  hover:bg-slate-200
                "
              >
                <X size={22} />
              </button>

            </div>

            {/* Links */}

            <div className="mt-10 flex flex-col gap-2">

              <MobileNavLinks
                onClick={handleNavigation}
              />

            </div>

            {/* Resume */}

            <div
              className="
                sticky
                bottom-0

                mt-8

                border-t
                border-slate-200

                bg-white

                pt-6
              "
            >

              <ResumeButton />

            </div>

          </motion.div>

        </>
      )}

    </AnimatePresence>
  );
}
