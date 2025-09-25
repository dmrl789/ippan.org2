import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About the IPPAN Foundation',
  description:
    'Learn how the IPPAN Foundation stewards protocol governance, ecosystem programs, and responsible growth for the IPPAN Network.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About the IPPAN Foundation',
    description:
      'Discover the mandate, mission pillars, and technology stewardship initiatives that keep the IPPAN Network credibly neutral and sustainable.',
    url: '/about',
  },
  twitter: {
    title: 'About the IPPAN Foundation',
    description:
      'See how the IPPAN Foundation advances decentralized infrastructure through governance, grants, and technical programs.',
  },
}

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <header className="mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">About the Foundation</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900">Stewarding the IPPAN Network</h1>
        <p className="mt-6 text-lg text-gray-700">
          The IPPAN Foundation is a non-profit organization dedicated to advancing the adoption and long-term sustainability of
          the IPPAN Network. We ensure the protocol remains open, neutral, and resilient so builders everywhere can innovate with
          confidence.
        </p>
      </header>

      <section className="space-y-10">
        <article className="rounded-3xl border p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900">Our Mandate</h2>
          <p className="mt-4 text-gray-700">
            Founded to protect the core protocol, govern open standards, and support ecosystem growth, the Foundation acts as a
            long-term steward of the IPPAN Network. We coordinate technical roadmaps, align stakeholders, and advocate for
            responsible decentralization across jurisdictions.
          </p>
        </article>

        <article className="rounded-3xl border p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900">Mission Pillars</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Protocol Evolution</h3>
              <p className="mt-2 text-sm text-gray-600">
                Maintain and advance the IPPAN protocol for security, performance, and interoperability through transparent
                research and development.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Developer Empowerment</h3>
              <p className="mt-2 text-sm text-gray-600">
                Support builders with open-source tooling, technical documentation, grants, and mentorship opportunities.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Open Participation</h3>
              <p className="mt-2 text-sm text-gray-600">
                Encourage global node participation and community decision-making that keeps the network credibly neutral.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Responsible Growth</h3>
              <p className="mt-2 text-sm text-gray-600">
                Champion sustainability initiatives, regulatory clarity, and ethical deployment of decentralized infrastructure.
              </p>
            </div>
          </div>
        </article>

        <article className="rounded-3xl border p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900">Technology Stewardship</h2>
          <p className="mt-4 text-gray-700">
            IPPAN introduces breakthrough innovations—HashTimer™ ordering, an energy-efficient BlockDAG architecture, a
            self-healing peer-to-peer network, human-readable naming, and machine-to-machine payment rails. The Foundation
            safeguards these capabilities while promoting interoperability with emerging standards.
          </p>
        </article>

        <article className="rounded-3xl border p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900">Programs & Partnerships</h2>
          <p className="mt-4 text-gray-700">
            Our grants, infrastructure incentives, educational initiatives, and strategic partnerships accelerate innovation across
            the ecosystem. We collaborate with universities, enterprises, regulators, and open-source communities to ensure IPPAN
            delivers meaningful impact for people and machines worldwide.
          </p>
        </article>

        <article className="rounded-3xl border p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900">Transparency & Governance</h2>
          <p className="mt-4 text-gray-700">
            The Foundation operates with accountability and openness. Treasury allocations, research outputs, and protocol updates
            are reported publicly, with community forums and working groups driving consensus on the network&apos;s direction.
          </p>
        </article>
      </section>
    </main>
  )
}
