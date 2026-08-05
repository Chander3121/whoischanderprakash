"use client";

import { Menu } from "lucide-react";

interface Props {
  onClick: () => void;
}

export default function MobileMenuButton({
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className="
        rounded-xl
        border
        border-slate-200
        p-3
        text-slate-700
        transition
        hover:bg-slate-100

        lg:hidden
      "
    >
      <Menu size={22} />
    </button>
  );
}
