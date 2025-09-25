const stats = [
  { label: 'Transactions per second', value: 'Millions+' },
  { label: 'Global node operators', value: 'Community-run' },
  { label: 'Energy profile', value: 'Ultra-efficient BlockDAG' },
]

export default function Home() {
  return (
    <main className="bg-slate-950">
      <section className="relative isolate overflow-hidden border-b border-slate-900 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">IPPAN Foundation</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl">
              Empowering the Future of Decentralized Infrastructure
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              The IPPAN Foundation is the steward of the IPPAN Network—an energy-efficient, massively scalable public blockchain
              built to support real-time financial transactions, machine-to-machine payments, and verifiable data availability
              across the globe.
            </p>
            <p className="mt-4 text-lg text-slate-300">
              We foster a secure, open, and resilient digital ecosystem where developers, businesses, and communities can build,
              innovate, and connect—free from centralized control.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/about"
                className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-400"
              >
                Join the Ecosystem
              </a>
              <a
                href="#technology"
                className="inline-flex items-center justify-center rounded-full border border-indigo-500/50 px-6 py-3 text-sm font-semibold text-indigo-300 transition hover:border-indigo-400 hover:text-indigo-200"
              >
                Explore Technology
              </a>
            </div>
          </div>
          <div className="grid gap-6 rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-xl shadow-indigo-500/5 backdrop-blur">
            <h2 className="text-lg font-semibold text-slate-100">IPPAN at a Glance</h2>
            <p className="text-sm text-slate-300">
              Founded to protect the core protocol, govern open standards, and support ecosystem growth, the Foundation ensures the
              network remains neutral, decentralized, and censorship-resistant for the next generation of the internet and
              financial systems.
            </p>
            <dl className="grid gap-4 text-sm text-slate-300 sm:grid-cols-2">
              {stats.map((item) => (
                <div key={item.label}>
                  <dt className="font-medium text-slate-100">{item.label}</dt>
                  <dd className="text-slate-400">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-[1.5fr,1fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-100">Mission & Mandate</h2>
            <p className="mt-6 text-slate-300">
              As a non-profit organization, the IPPAN Foundation is committed to advancing the adoption and long-term sustainability
              of the IPPAN Network. We maintain and evolve the protocol, support developers and builders, and promote fair access
              and global participation so anyone can contribute to network resilience.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-slate-950/40">
                <h3 className="text-lg font-semibold text-slate-100">Protocol Stewardship</h3>
                <p className="mt-3 text-sm text-slate-300">
                  Maintain and evolve the IPPAN protocol for security, performance, and interoperability with open standards.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-slate-950/40">
                <h3 className="text-lg font-semibold text-slate-100">Builder Support</h3>
                <p className="mt-3 text-sm text-slate-300">
                  Provide open tools, grants, and technical resources so innovators can launch applications with confidence.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-slate-950/40">
                <h3 className="text-lg font-semibold text-slate-100">Open Participation</h3>
                <p className="mt-3 text-sm text-slate-300">
                  Enable anyone to run nodes, earn rewards, and shape the network&apos;s future through transparent governance.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-slate-950/40">
                <h3 className="text-lg font-semibold text-slate-100">Responsible Innovation</h3>
                <p className="mt-3 text-sm text-slate-300">
                  Champion sustainability, regulatory clarity, and ethical deployment of decentralized infrastructure.
                </p>
              </div>
            </div>
          </div>
          <aside className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 shadow-xl shadow-slate-950/40">
            <h3 className="text-lg font-semibold text-slate-100">Community Programs</h3>
            <ul className="mt-6 space-y-4 text-sm text-slate-300">
              <li>
                <span className="font-medium text-slate-100">Developer Grants:</span> Funding open-source tools, libraries, and
                decentralized applications.
              </li>
              <li>
                <span className="font-medium text-slate-100">Infrastructure Incentives:</span> Supporting node operators and
                validators with fair rewards.
              </li>
              <li>
                <span className="font-medium text-slate-100">Education & Outreach:</span> Advancing blockchain literacy and
                training the next generation of builders.
              </li>
              <li>
                <span className="font-medium text-slate-100">Partnerships & Alliances:</span> Collaborating with academia,
                enterprises, and standards bodies worldwide.
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section id="technology" className="border-y border-slate-900 bg-slate-900 text-slate-100">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Technology We Steward</h2>
            <p className="mt-6 text-slate-300">
              IPPAN introduces breakthrough innovations designed for real-world scale, enabling trust-minimized collaboration across
              finance, IoT, and data services.
            </p>
          </div>
          <dl className="grid gap-6 text-sm text-slate-100">
            <div className="rounded-2xl border border-slate-700/60 bg-slate-800/50 p-6">
              <dt className="text-lg font-semibold">HashTimer™ Ordering</dt>
              <dd className="mt-2 text-slate-200">Deterministic, cryptographically verifiable time sequencing up to microsecond precision.</dd>
            </div>
            <div className="rounded-2xl border border-slate-700/60 bg-slate-800/50 p-6">
              <dt className="text-lg font-semibold">Energy-Efficient BlockDAG</dt>
              <dd className="mt-2 text-slate-200">Achieves millions of transactions per second without wasteful mining or congestion.</dd>
            </div>
            <div className="rounded-2xl border border-slate-700/60 bg-slate-800/50 p-6">
              <dt className="text-lg font-semibold">Self-Healing P2P Network</dt>
              <dd className="mt-2 text-slate-200">Global node discovery and data availability remain resilient even in extreme conditions.</dd>
            </div>
            <div className="rounded-2xl border border-slate-700/60 bg-slate-800/50 p-6">
              <dt className="text-lg font-semibold">Human-Readable Naming</dt>
              <dd className="mt-2 text-slate-200">Secure @handles and premium domains tied to cryptographic keys for effortless onboarding.</dd>
            </div>
            <div className="rounded-2xl border border-slate-700/60 bg-slate-800/50 p-6">
              <dt className="text-lg font-semibold">M2M Payments & IoT Integration</dt>
              <dd className="mt-2 text-slate-200">Instant, cost-efficient transactions between devices built for the autonomous economy.</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-100">Governance & Transparency</h2>
            <p className="mt-6 text-slate-300">
              The IPPAN Foundation ensures the network remains trustless and community-driven. Protocol upgrades, parameters, and
              treasury allocations are handled transparently, with community input every step of the way.
            </p>
            <ul className="mt-8 space-y-4 text-sm text-slate-300">
              <li>
                <span className="font-medium text-slate-100">Open Governance:</span> Major protocol decisions are openly debated,
                documented, and ratified.
              </li>
              <li>
                <span className="font-medium text-slate-100">Foundation Reserves:</span> Allocated responsibly to research,
                development, and ecosystem growth.
              </li>
              <li>
                <span className="font-medium text-slate-100">Compliance & Neutrality:</span> Supporting global participation while
                respecting regional frameworks.
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 shadow-xl shadow-slate-950/40">
            <h3 className="text-lg font-semibold text-slate-100">Get Involved</h3>
            <p className="mt-4 text-sm text-slate-300">
              IPPAN is open to everyone—developers, entrepreneurs, researchers, and enthusiasts. Choose your path to contribute.
            </p>
            <ul className="mt-6 space-y-4 text-sm text-slate-300">
              <li>
                <span className="font-medium text-slate-100">Run a Node:</span> Strengthen security and earn rewards by operating
                infrastructure.
              </li>
              <li>
                <span className="font-medium text-slate-100">Build on IPPAN:</span> Launch applications, integrate IoT networks,
                and deliver real-time financial services.
              </li>
              <li>
                <span className="font-medium text-slate-100">Contribute & Propose:</span> Join the conversation on protocol
                evolution and standards.
              </li>
              <li>
                <span className="font-medium text-slate-100">Support the Foundation:</span> Become a partner or donor to help
                advance the mission.
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-400"
              >
                Start Building
              </a>
              <a
                href="/forum"
                className="inline-flex items-center justify-center rounded-full border border-indigo-500/50 px-5 py-3 text-sm font-semibold text-indigo-300 transition hover:border-indigo-400 hover:text-indigo-200"
              >
                Join the Community Forum
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
