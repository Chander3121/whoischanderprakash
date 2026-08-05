"use client";

import DesktopNavLinks from "./DesktopNavLinks";
import ResumeButton from "./ResumeButton";

export default function DesktopNav() {
  return (
    <div
      className="
        hidden
        items-center
        gap-10
        lg:flex
      "
    >
      <DesktopNavLinks />

      <ResumeButton />
    </div>
  );
}
