export default function ProjectStats() {
  const stats = [
    {
      value: "6+",
      label: "Core Modules",
    },
    {
      value: "4",
      label: "Major Integrations",
    },
    {
      value: "100%",
      label: "Responsive UI",
    },
    {
      value: "24/7",
      label: "Scalable Architecture",
    },
  ];

  return (
    <section className="mx-auto mt-24 max-w-7xl px-6">

      <div className="grid gap-6 md:grid-cols-4">

        {stats.map((item) => (
          <div
            key={item.label}
            className="
              rounded-[28px]
              border
              border-slate-200
              bg-white
              p-8
              shadow-sm
            "
          >
            <h3 className="text-5xl font-bold tracking-tight text-blue-600">
              {item.value}
            </h3>

            <p className="mt-3 text-slate-500">
              {item.label}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}
