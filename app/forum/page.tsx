import type { Metadata } from "next";
import Link from "next/link";

const forumTracks = [
  {
    name: "Implementation playbooks",
    description:
      "Best-practice guides, procurement templates, and architecture references for national ID programmes.",
  },
  {
    name: "Policy & regulation",
    description: "Debates and co-drafting sessions covering privacy laws, data sovereignty, and algorithmic accountability.",
  },
  {
    name: "Humanitarian response",
    description:
      "Use cases for rapid identity deployment in disaster zones, refugee registration, and cash programming.",
  },
  {
    name: "Technical deep dives",
    description:
      "Engineering walkthroughs of APIs, zero-knowledge credentials, mobile enrolment kits, and Google integrations.",
  },
];

export const metadata: Metadata = {
  title: "IPPAN Forum",
  description:
    "Join the IPPAN Foundation forum to collaborate with identity practitioners, policy makers, and technology leaders.",
};

export default function ForumPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-16 px-6 py-16 md:px-8">
      <section className="space-y-6">
        <p className="eyebrow">Community hub</p>
        <h1 className="text-4xl">The IPPAN Forum</h1>
        <p className="text-base text-slate-300">
          A moderated digital commons connecting 3,000+ experts advancing inclusive identification. Members share
          research, pilot results, and best practices while shaping international standards.
        </p>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        {forumTracks.map((track) => (
          <article key={track.name} className="card-surface">
            <h2 className="text-2xl text-white">{track.name}</h2>
            <p className="mt-3 text-sm text-slate-300">{track.description}</p>
          </article>
        ))}
      </section>

      <section className="card-surface space-y-4">
        <h2 className="text-3xl">Membership benefits</h2>
        <ul className="space-y-3 text-sm text-slate-300">
          <li>Weekly virtual roundtables and quarterly regional summits hosted via Google Meet.</li>
          <li>Resource library with templates, research briefs, and sandbox credentials.</li>
          <li>Directory of vetted solution partners and civic technology startups.</li>
          <li>Mentorship programme pairing practitioners with digital rights advocates.</li>
        </ul>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-gradient-to-br from-sky-500/10 via-indigo-500/10 to-purple-500/10 p-10">
        <h2 className="text-3xl">Join the conversation</h2>
        <p className="mt-4 text-base text-slate-300">
          Forum memberships are available to public sector agencies, nonprofits, start-ups, and researchers committed to
          privacy-respecting identification.
        </p>
        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
          <Link href="/contact" className="btn-primary">
            Apply for membership
          </Link>
          <Link
            href="/news"
            className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white"
          >
            Review latest announcements
          </Link>
        </div>
        <p className="mt-6 text-xs text-slate-500">
          Existing members can access the portal at forum.ippan.org with their SSO credentials or Google Workspace
          accounts.
        </p>
      </section>
    </div>
  );
}
