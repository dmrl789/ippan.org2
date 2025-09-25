import Link from 'next/link'

const discussionTracks = [
  {
    title: 'Protocol & Research',
    description:
      'Collaborate on consensus upgrades, network parameters, and formal research that advances the IPPAN roadmap.',
  },
  {
    title: 'Builders & Integrators',
    description:
      'Share implementation tips, SDK updates, and integration patterns for payments, IoT networks, and data services.',
  },
  {
    title: 'Nodes & Infrastructure',
    description:
      'Coordinate node operations, monitoring best practices, and infrastructure incentive programs with peers worldwide.',
  },
  {
    title: 'Governance & Community',
    description:
      'Propose initiatives, contribute to working groups, and shape how the Foundation allocates resources.',
  },
]

export default function ForumPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <header className="mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">Community Forum</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900">Join the Conversation</h1>
        <p className="mt-6 text-lg text-gray-700">
          The IPPAN Forum is the gathering place for developers, researchers, node operators, and partners shaping the future of
          decentralized infrastructure. Participate in open discussions, submit proposals, and find collaborators across the
          global ecosystem.
        </p>
      </header>

      <section className="grid gap-6 sm:grid-cols-2">
        {discussionTracks.map((track) => (
          <article key={track.title} className="flex h-full flex-col rounded-3xl border p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">{track.title}</h2>
            <p className="mt-3 text-sm text-gray-600">{track.description}</p>
            <div className="mt-6 pt-4">
              <Link
                href="mailto:community@ippan.org"
                className="inline-flex items-center text-sm font-semibold text-indigo-600 transition hover:text-indigo-700"
              >
                Request access →
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-20 rounded-3xl border bg-slate-900 p-10 text-slate-100">
        <h2 className="text-2xl font-semibold">How to Participate</h2>
        <ol className="mt-6 space-y-4 text-sm text-slate-200">
          <li>
            <span className="font-semibold text-white">1. Introduce yourself.</span> Share your background, interests, and what
            you&apos;re building.
          </li>
          <li>
            <span className="font-semibold text-white">2. Explore active threads.</span> Add your insights to research, builder,
            and governance discussions.
          </li>
          <li>
            <span className="font-semibold text-white">3. Launch new initiatives.</span> Form working groups, propose grants, or
            coordinate validator programs with Foundation support.
          </li>
        </ol>
        <p className="mt-8 text-sm text-slate-300">
          Need real-time collaboration? Join the community workspace once your forum account is approved and coordinate via
          open calls and regional meetups.
        </p>
      </section>
    </main>
  )
}
