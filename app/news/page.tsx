import type { Metadata } from 'next'

const updates = [
  {
    title: 'Protocol roadmap Q4',
    description:
      'An overview of upcoming HashTimer™ optimizations, BlockDAG performance upgrades, and timelines for validator tooling.',
  },
  {
    title: 'Ecosystem grant cohort',
    description:
      'Meet the open-source teams building developer SDKs, IoT payment pilots, and data availability services on IPPAN.',
  },
  {
    title: 'Global community calls',
    description:
      'Monthly briefings featuring governance proposals, research milestones, and regional working group spotlights.',
  },
]

export const metadata: Metadata = {
  title: 'IPPAN Foundation News & Updates',
  description:
    'Read the latest IPPAN Foundation announcements covering protocol upgrades, ecosystem grants, governance highlights, and global community events.',
  alternates: {
    canonical: '/news',
  },
  openGraph: {
    title: 'IPPAN Foundation News & Updates',
    description:
      'Stay informed about protocol roadmap milestones, grant programs, and community calls from the IPPAN Foundation.',
    url: '/news',
  },
  twitter: {
    title: 'IPPAN Foundation News & Updates',
    description:
      'Catch up on IPPAN Foundation announcements, research highlights, and ecosystem progress.',
  },
}

export default function NewsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <header className="mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">News & Updates</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900">Latest from the IPPAN Foundation</h1>
      <p className="mt-6 text-lg text-gray-700">
        Stay informed on protocol development, community initiatives, and opportunities to contribute. Highlights below are
        refreshed regularly, with detailed briefings distributed through the Foundation newsletter.
      </p>
      <div className="mt-6 rounded-3xl border border-indigo-100 bg-white p-6 shadow-sm">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">Topics We Cover</h2>
        <ul className="mt-4 grid gap-2 text-sm text-gray-600 sm:grid-cols-2">
          <li>Consensus research and protocol optimization</li>
          <li>Developer tooling, SDK releases, and integration guides</li>
          <li>Governance proposals, treasury reports, and policy updates</li>
          <li>Community events, working groups, and regional workshops</li>
        </ul>
      </div>
      </header>

      <section className="space-y-6">
        {updates.map((item) => (
          <article key={item.title} className="rounded-3xl border p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900">{item.title}</h2>
            <p className="mt-3 text-sm text-gray-600">{item.description}</p>
            <p className="mt-6 text-sm text-indigo-600">Full briefings coming soon.</p>
          </article>
        ))}
      </section>
    </main>
  )
}
