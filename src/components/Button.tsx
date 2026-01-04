import Link from "next/link";

interface ButtonProps {
  href: string;
  variant?: "primary" | "secondary" | "outline";
  external?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  href,
  variant = "primary",
  external = false,
  children,
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-zinc-900 text-white hover:bg-zinc-800 focus:ring-zinc-900 shadow-lg shadow-zinc-900/20",
    secondary:
      "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 focus:ring-zinc-500",
    outline:
      "border-2 border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white focus:ring-zinc-900",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClassName}
      >
        {children}
        <svg
          className="ml-2 h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </a>
    );
  }

  return (
    <Link href={href} className={combinedClassName}>
      {children}
    </Link>
  );
}
