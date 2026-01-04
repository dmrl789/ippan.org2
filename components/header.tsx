import Link from "next/link";
import { Container } from "./container";

const nav = [
  { href: "/", label: "Home" },
  { href: "/mission", label: "Mission" },
  { href: "/programs", label: "Programs" },
  { href: "/governance", label: "Governance" },
  { href: "/transparency", label: "Transparency" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-white/90 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-6">
          <Link href="/" className="font-semibold tracking-tight">
            IPPAN Foundation
          </Link>

          <nav className="hidden items-center gap-5 lg:flex">
            {nav.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                className="text-sm text-zinc-700 hover:text-zinc-900"
              >
                {i.label}
              </Link>
            ))}
            <a
              href="https://ippan-explorer2.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-zinc-900 hover:underline"
            >
              DevNet
            </a>
          </nav>

          <a
            href="https://ippan-explorer2.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl border bg-white px-3 py-1.5 text-sm font-medium text-zinc-900 hover:bg-zinc-50 lg:hidden"
          >
            DevNet
          </a>
        </div>
      </Container>
    </header>
  );
}
