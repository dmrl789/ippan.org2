export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20 text-slate-300">
      <header className="mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">About the Foundation</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-100">Stewarding the IPPAN Network</h1>
        <p className="mt-6 text-lg text-slate-300">
          The IPPAN Foundation is a non-profit organization dedicated to advancing the adoption and long-term sustainability of
          the IPPAN Network. We ensure the protocol remains open, neutral, and resilient so builders everywhere can innovate with
          confidence.
        </p>
      </header>

      <section className="space-y-10">
        <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 text-slate-300 shadow-xl shadow-slate-950/40">
          <h2 className="text-2xl font-semibold text-slate-100">Our Mandate</h2>
          <p className="mt-4 text-slate-300">
            Founded to protect the core protocol, govern open standards, and support ecosystem growth, the Foundation acts as a
            long-term steward of the IPPAN Network. We coordinate technical roadmaps, align stakeholders, and advocate for
            responsible decentralization across jurisdictions.
          </p>
        </article>

        <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 text-slate-300 shadow-xl shadow-slate-950/40">
          <h2 className="text-2xl font-semibold text-slate-100">Mission Pillars</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-slate-100">Protocol Evolution</h3>
              <p className="mt-2 text-sm text-slate-300">
                Maintain and advance the IPPAN protocol for security, performance, and interoperability through transparent
                research and development.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-100">Developer Empowerment</h3>
              <p className="mt-2 text-sm text-slate-300">
                Support builders with open-source tooling, technical documentation, grants, and mentorship opportunities.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-100">Open Participation</h3>
              <p className="mt-2 text-sm text-slate-300">
                Encourage global node participation and community decision-making that keeps the network credibly neutral.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-100">Responsible Growth</h3>
              <p className="mt-2 text-sm text-slate-300">
                Champion sustainability initiatives, regulatory clarity, and ethical deployment of decentralized infrastructure.
              </p>
            </div>
          </div>
        </article>

        <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 text-slate-300 shadow-xl shadow-slate-950/40">
          <h2 className="text-2xl font-semibold text-slate-100">Technology Stewardship</h2>
          <p className="mt-4 text-slate-300">
            IPPAN introduces breakthrough innovations—HashTimer™ ordering, an energy-efficient BlockDAG architecture, a
            self-healing peer-to-peer network, human-readable naming, and machine-to-machine payment rails. The Foundation
            safeguards these capabilities while promoting interoperability with emerging standards.
          </p>
        </article>

        <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 text-slate-300 shadow-xl shadow-slate-950/40">
          <h2 className="text-2xl font-semibold text-slate-100">Programs & Partnerships</h2>
          <p className="mt-4 text-slate-300">
            Our grants, infrastructure incentives, educational initiatives, and strategic partnerships accelerate innovation across
            the ecosystem. We collaborate with universities, enterprises, regulators, and open-source communities to ensure IPPAN
            delivers meaningful impact for people and machines worldwide.
          </p>
        </article>

        <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 text-slate-300 shadow-xl shadow-slate-950/40">
          <h2 className="text-2xl font-semibold text-slate-100">Transparency & Governance</h2>
          <p className="mt-4 text-slate-300">
            The Foundation operates with accountability and openness. Treasury allocations, research outputs, and protocol updates
            are reported publicly, with community forums and working groups driving consensus on the network&apos;s direction.
          </p>
        </article>
      </section>
    </main>
  )
}
