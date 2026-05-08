interface SectionTitleProps {
  label: string;
  title: string;
  description?: string;
}

export default function SectionTitle({ label, title, description }: SectionTitleProps) {
  return (
    <div className="mb-10">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
        {label}
      </p>
      <h2 className="mt-3 text-3xl font-bold text-slate-950 md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}