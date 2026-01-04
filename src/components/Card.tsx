interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export function Card({ title, description, icon }: CardProps) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      {icon && (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700">
          {icon}
        </div>
      )}
      <h3 className="mb-2 text-lg font-semibold text-zinc-900">{title}</h3>
      <p className="text-sm leading-relaxed text-zinc-600">{description}</p>
    </div>
  );
}
