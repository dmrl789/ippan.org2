import Link from "next/link";

const quickLinks = [
  { href: "/identity", label: "Identity Services" },
  { href: "/news", label: "Newsroom" },
  { href: "/forum", label: "Community Forum" },
  { href: "/legal", label: "Legal" },
];

const outreachLinks = [
  { href: "mailto:info@ippan.org", label: "info@ippan.org" },
  { href: "https://www.linkedin.com", label: "LinkedIn" },
  { href: "https://workspace.google.com", label: "Google Workspace" },
];

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-800/70 bg-slate-950">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <p className="text-lg font-semibold text-white">IPPAN Foundation</p>
          <p className="mt-3 max-w-md text-sm text-slate-400">
            Empowering inclusive digital identities and civic participation across communities, anchored in privacy,
            compliance, and interoperability.
          </p>
          <p className="mt-4 text-sm text-slate-500">
            144 Innovation Avenue, Suite 22<br />
            Singapore 238881
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">Quick links</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">Connect</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            {outreachLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800/70 py-4">
        <p className="mx-auto max-w-6xl px-6 text-xs text-slate-500 md:px-8">
          © {currentYear} IPPAN Foundation. All rights reserved. Crafted for deployment on Vercel.
        </p>
      </div>
    </footer>
  );
}
