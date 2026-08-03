interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-16">
      <p className="text-blue-600 font-medium">
        {subtitle}
      </p>

      <h2 className="mt-2 text-5xl font-bold tracking-tight text-slate-900">
        {title}
      </h2>
    </div>
  );
}
