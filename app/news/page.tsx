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

export default function NewsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20 text-slate-300">
      <header className="mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">News & Updates</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-100">Latest from the IPPAN Foundation</h1>
        <p className="mt-6 text-lg text-slate-300">
          Stay informed on protocol development, community initiatives, and opportunities to contribute. Highlights below are
          refreshed regularly, with detailed briefings distributed through the Foundation newsletter.
        </p>
      </header>

      <section className="space-y-6">
        {updates.map((item) => (
          <article
            key={item.title}
            className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 text-slate-300 shadow-xl shadow-slate-950/40"
          >
            <h2 className="text-2xl font-semibold text-slate-100">{item.title}</h2>
            <p className="mt-3 text-sm text-slate-300">{item.description}</p>
            <p className="mt-6 text-sm text-indigo-300">Full briefings coming soon.</p>
          </article>
        ))}
      </section>
    </main>
  )
}
