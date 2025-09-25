import type { Metadata } from "next";
import Link from "next/link";

const newsItems = [
  {
    title: "IPPAN launches cross-border ID pilot",
    date: "17 September 2024",
    summary:
      "A trilateral partnership with the African Union and Google Cloud enables secure traveller verification across seven borders.",
    link: "#",
  },
  {
    title: "Forum working groups open for registration",
    date: "2 September 2024",
    summary:
      "New community-led forums focus on humanitarian cash programmes, inclusive finance, and municipal services digitisation.",
    link: "#",
  },
  {
    title: "Compliance lab achieves ISO 27001 recertification",
    date: "20 August 2024",
    summary:
      "IPPAN's assurance lab renews its ISO credentials, reinforcing best practices across data centres and partner operations.",
    link: "#",
  },
];

export const metadata: Metadata = {
  title: "Newsroom",
  description: "Latest announcements and updates from the IPPAN Foundation and its partners.",
};

export default function NewsPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-12 px-6 py-16 md:px-8">
      <header className="space-y-4">
        <p className="eyebrow">Updates</p>
        <h1 className="text-4xl">News & announcements</h1>
        <p className="text-base text-slate-300">
          Stay informed about IPPAN Foundation deployments, policy collaborations, and forum milestones.
        </p>
      </header>
      <div className="space-y-6">
        {newsItems.map((item) => (
          <article key={item.title} className="card-surface">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-2xl text-white">{item.title}</h2>
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">{item.date}</span>
            </div>
            <p className="mt-4 text-sm text-slate-300">{item.summary}</p>
            <Link
              href={item.link}
              className="mt-6 inline-flex items-center text-sm font-semibold text-sky-400 transition hover:text-sky-300"
            >
              Read the full update
              <svg viewBox="0 0 24 24" aria-hidden="true" className="ml-2 h-4 w-4">
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
      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/40 p-10">
        <h2 className="text-3xl">Media enquiries</h2>
        <p className="mt-3 text-sm text-slate-300">
          Email <Link href="mailto:press@ippan.org" className="text-sky-400 hover:text-sky-300">press@ippan.org</Link> for
          interviews, data requests, and speaker opportunities. Accredited journalists gain forum read-only access for
          contextual research.
        </p>
      </section>
    </div>
  );
}
