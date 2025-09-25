"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/identity", label: "Identification" },
  { href: "/news", label: "News" },
  { href: "/forum", label: "Forum" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="border-b border-slate-800/70 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-5 md:px-8">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-lg font-semibold text-white"
          onClick={() => setMobileOpen(false)}
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-500 text-sm font-bold text-white shadow-lg shadow-sky-500/40">
            IF
          </span>
          <span className="text-slate-100 transition group-hover:text-white">IPPAN Foundation</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-2 transition hover:bg-slate-800/70 hover:text-white ${
                  isActive ? "bg-slate-800/70 text-white" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden md:flex">
          <Link
            href="/forum"
            className="rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400"
          >
            Join the Forum
          </Link>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-slate-700 p-2 text-slate-300 transition hover:border-slate-500 hover:text-white md:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileOpen((value) => !value)}
        >
          <span className="sr-only">Toggle navigation</span>
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
            {mobileOpen ? (
              <path
                d="M6 6l12 12M6 18L18 6"
                strokeWidth={1.5}
                stroke="currentColor"
                strokeLinecap="round"
              />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" strokeWidth={1.5} stroke="currentColor" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>
      <div
        id="mobile-navigation"
        className={`md:hidden ${mobileOpen ? "max-h-96 border-t border-slate-800/70" : "max-h-0 overflow-hidden"}`}
      >
        <nav className="space-y-1 px-6 pb-6 pt-2 text-sm font-medium text-slate-200">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center justify-between rounded-lg px-3 py-2 transition hover:bg-slate-800/70 hover:text-white ${
                  isActive ? "bg-slate-800/70 text-white" : ""
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
                  <path
                    d="M9 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            );
          })}
          <Link
            href="/forum"
            className="mt-4 flex items-center justify-center rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400"
            onClick={() => setMobileOpen(false)}
          >
            Join the Forum
          </Link>
        </nav>
      </div>
    </header>
  );
}
