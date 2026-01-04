import Link from "next/link";
import { Container } from "./Container";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Mission", href: "/mission" },
  { name: "Programs", href: "/programs" },
  { name: "Governance", href: "/governance" },
  { name: "Transparency", href: "/transparency" },
  { name: "Contact", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <Container className="py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-zinc-900"
            >
              IPPAN Foundation
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-600">
              Independent stewardship for the IPPAN protocol—security, public
              goods, and long-term ecosystem growth.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-900">Navigation</h3>
            <ul className="mt-4 space-y-2">
              {navigation.slice(0, 3).map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-600 transition-colors hover:text-zinc-900"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-900">Resources</h3>
            <ul className="mt-4 space-y-2">
              {navigation.slice(3).map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-600 transition-colors hover:text-zinc-900"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://ippan-explorer2.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-zinc-600 transition-colors hover:text-zinc-900"
                >
                  DevNet Explorer
                  <svg
                    className="ml-1 h-3 w-3"
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
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-zinc-200 pt-8">
          <p className="text-center text-sm text-zinc-500">
            © {new Date().getFullYear()} IPPAN Foundation. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
