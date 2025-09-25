import Link from "next/link";

const focusAreas = [
  {
    title: "Trusted Identification",
    description:
      "Biometric-backed and compliant verification, giving communities secure credentials that unlock services everywhere.",
  },
  {
    title: "Google Ecosystem Partnerships",
    description:
      "Deep collaboration with Google Workspace, Cloud, and Maps to deliver resilient infrastructure and analytics.",
  },
  {
    title: "Civic Innovation Forum",
    description:
      "A moderated space where practitioners exchange policies, implementation guides, and lessons learned in real time.",
  },
];

const stats = [
  { label: "Verified identities issued", value: "120K+" },
  { label: "Partner organisations", value: "48" },
  { label: "Active forum members", value: "3.2K" },
  { label: "Service uptime", value: "99.98%" },
];

const initiatives = [
  {
    title: "Universal Identity Wallet",
    copy:
      "A privacy-first credential wallet interoperable with ICAO, NIST, and EU digital identity guidelines, ready for cross-border travel and finance.",
    link: "/identity",
  },
  {
    title: "Google for Nonprofits Alliance",
    copy:
      "IPPAN leverages Google Cloud regions, Workspace collaboration, and Android partner programs to accelerate impact at scale.",
    link: "/about",
  },
  {
    title: "Community Forum 2.0",
    copy:
      "Launching moderated working groups, localisation labs, and sector directories so practitioners can co-design inclusive systems.",
    link: "/forum",
  },
];

export default function Home() {
  return (
    <div className="gradient-background">
      <section className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-24 pt-16 md:flex-row md:items-center md:px-8">
        <div className="max-w-2xl space-y-6">
          <p className="eyebrow">Inclusive identity infrastructure</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Professional infrastructure for trusted identification and civic access
          </h1>
          <p className="text-lg text-slate-300">
            IPPAN Foundation partners with governments, multilaterals, and the private sector to deliver secure digital
            identities, compliant data practices, and community programmes powered by Google and open standards.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/identity" className="btn-primary">
              Explore identity services
            </Link>
            <Link
              href="/forum"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white"
            >
              Visit the forum
            </Link>
          </div>
          <div className="grid gap-6 pt-8 sm:grid-cols-3">
            {focusAreas.map((item) => (
              <div key={item.title} className="card-surface">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex-1">
          <div className="absolute inset-0 -translate-x-6 rounded-full bg-gradient-to-br from-sky-500/30 via-indigo-500/30 to-purple-600/20 blur-3xl" />
          <div className="relative card-surface">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">Programmes at a glance</p>
            <ul className="mt-6 space-y-6 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-400" aria-hidden />
                <span>
                  Identity Verification API integrates ISO/IEC 18013 standards with granular consent and audit controls.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-400" aria-hidden />
                <span>
                  Google Cloud analytics provide real-time fraud detection dashboards and resilience benchmarks.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-violet-400" aria-hidden />
                <span>
                  Forum-led policy labs iterate privacy-by-design regulations with expert moderators across 12 regions.
                </span>
              </li>
            </ul>
            <div className="mt-6 rounded-2xl border border-slate-800/70 bg-slate-900/80 p-5 text-sm text-slate-400">
              <p className="font-semibold text-white">Vercel-native deployment</p>
              <p className="mt-2 text-slate-300">
                Optimised for edge delivery, internationalisation, and observability—ready for continuous delivery on
                Vercel.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 md:px-8">
        <div className="grid gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/40 p-10 md:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="space-y-2">
              <p className="text-3xl font-semibold text-white">{item.value}</p>
              <p className="text-sm text-slate-400">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 md:px-8">
        <div className="space-y-6 text-center">
          <p className="eyebrow">Strategic initiatives</p>
          <h2 className="text-3xl sm:text-4xl">Delivering secure identification across every touchpoint</h2>
          <p className="mx-auto max-w-3xl text-base text-slate-300">
            From digital identity wallets to multi-sector collaboration, IPPAN Foundation drives measurable impact by
            pairing compliant technology with inclusive governance.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {initiatives.map((item) => (
            <article key={item.title} className="card-surface text-left">
              <h3 className="text-xl text-white">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{item.copy}</p>
              <Link href={item.link} className="mt-6 inline-flex items-center text-sm font-semibold text-sky-400 transition hover:text-sky-300">
                Learn more
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="ml-2 h-4 w-4"
                >
                  <path
                    d="M13 5l7 7-7 7M20 12H4"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24 text-center md:px-8">
        <div className="rounded-3xl border border-slate-800/70 bg-gradient-to-br from-sky-500/10 via-indigo-500/10 to-purple-500/10 p-12">
          <p className="eyebrow">Get involved</p>
          <h2 className="text-3xl">Build the next generation of trusted civic infrastructure</h2>
          <p className="mt-4 text-base text-slate-300">
            Request a technical consultation, access our Google partnership playbooks, or co-design a pilot in the
            IPPAN Forum.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Link href="/contact" className="btn-primary">
              Request a consultation
            </Link>
            <Link
              href="/forum"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white"
            >
              Access the forum
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
