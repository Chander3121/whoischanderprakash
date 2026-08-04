interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-10">

      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
        {subtitle}
      </p>

      <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
        {title}
      </h2>

    </div>
  );
}
