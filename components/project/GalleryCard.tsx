"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  image: string;
  title: string;
  description: string;
  featured?: boolean;
}

export default function GalleryCard({
  image,
  title,
  description,
  featured = false,
}: Props) {
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
        overflow-hidden
        rounded-[36px]
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:border-blue-200
        hover:shadow-[0_30px_70px_rgba(59,130,246,.10)]
      "
    >
      <div
        className={`relative overflow-hidden ${
          featured ? "aspect-[16/8]" : "aspect-[16/10]"
        }`}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />
      </div>

      <div className="p-8">
        <h3 className="text-xl font-bold">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          {description}
        </p>
      </div>
    </motion.article>
  );
}
