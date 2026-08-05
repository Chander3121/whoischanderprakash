"use client";

const links = [
  {
    id: "projects",
    label: "Projects",
  },
  {
    id: "experience",
    label: "Experience",
  },
  {
    id: "services",
    label: "Engineering",
  },
  {
    id: "tech-stack",
    label: "Tech Stack",
  },
  {
    id: "contact",
    label: "Contact",
  },
];

export default function DesktopNavLinks() {
  const scrollTo = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <>
      {links.map((link) => (
        <button
          key={link.id}
          onClick={() => scrollTo(link.id)}
          className="
            relative
            text-sm
            font-medium
            text-slate-700
            transition-all
            duration-300

            hover:text-blue-600

            after:absolute
            after:left-0
            after:-bottom-2
            after:h-[2px]
            after:w-0
            after:rounded-full
            after:bg-blue-600
            after:transition-all
            after:duration-300

            hover:after:w-full
          "
        >
          {link.label}
        </button>
      ))}
    </>
  );
}
