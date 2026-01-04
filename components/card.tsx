export function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="text-sm font-medium text-zinc-900">{title}</div>
      <div className="mt-3 text-sm leading-relaxed text-zinc-700">{children}</div>
    </div>
  );
}
