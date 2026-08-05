interface Props {
  title: string;
  subtitle?: string;
}

export default function ProjectsSectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-12">

      <h2
        className="
          text-4xl
          font-bold
          tracking-[-0.04em]
          text-slate-900
        "
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className="
            mt-3
            max-w-2xl
            text-lg
            text-slate-600
          "
        >
          {subtitle}
        </p>
      )}

    </div>
  );
}
