interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export function Card({ title, description, icon }: CardProps) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-glow">
      {icon && (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-card2 text-accent">
          {icon}
        </div>
      )}
      <h3 className="mb-2 text-lg font-semibold text-fg">{title}</h3>
      <p className="text-sm leading-relaxed text-muted">{description}</p>
    </div>
  );
}
