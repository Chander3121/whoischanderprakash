interface Props {
  highlights: string[];
}

export default function ArchitectureHighlights({
  highlights,
}: Props) {
  return (
    <div className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {highlights.map((item) => (
        <div
          key={item}
          className="
            rounded-2xl
            border
            border-slate-200
            bg-white
            px-5
            py-4
            shadow-sm
          "
        >
          <div className="flex items-center gap-3">

            <div className="h-2.5 w-2.5 rounded-full bg-blue-600" />

            <span className="font-medium">
              {item}
            </span>

          </div>
        </div>
      ))}
    </div>
  );
}
