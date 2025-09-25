import type { Metadata } from 'next'

const stats = [
  { label: 'Transactions per second', value: 'Millions+' },
  { label: 'Global node operators', value: 'Community-run' },
  { label: 'Energy profile', value: 'Ultra-efficient BlockDAG' },
]

const faqItems = [
  {
    question: 'What is the IPPAN Network?',
    answer:
      'The IPPAN Network is a public, energy-efficient blockchain that combines BlockDAG scalability with deterministic HashTimer™ ordering to support real-time settlement, data availability, and verifiable automation.',
  },
  {
    question: 'How does the IPPAN Foundation support builders?',
    answer:
      'We provide grants, reference implementations, governance guidelines, and technical advisory sessions so developers and enterprises can launch production-ready decentralized applications.',
  },
  {
    question: 'Is the IPPAN protocol sustainable?',
    answer:
      'Yes. The protocol is designed for low-energy consensus, geographic diversity in node operations, and transparent funding that prioritizes long-term resilience over short-term speculation.',
  },
]

export const metadata: Metadata = {
  title: 'Energy-Efficient Blockchain Infrastructure for Builders',
  description:
    'Discover how the IPPAN Foundation stewards the IPPAN Network—an energy-efficient, massively scalable public blockchain powering decentralized finance, IoT, and data services.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'IPPAN Foundation | Energy-Efficient Blockchain Infrastructure',
    description:
      'IPPAN Foundation stewards a sustainable, massively scalable blockchain built for real-world adoption, machine payments, and verifiable data.',
    url: '/',
  },
  twitter: {
    title: 'IPPAN Foundation | Energy-Efficient Blockchain Infrastructure',
    description:
      'Learn about the IPPAN Foundation mission, technology roadmap, and how to contribute to a sustainable decentralized network.',
  },
}

export default function Home() {
  return (
    <main className="bg-white">
      <section className="relative isolate overflow-hidden border-b bg-gradient-to-br from-white via-slate-50 to-slate-100">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">IPPAN Foundation</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Empowering the Future of Decentralized Infrastructure
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              The IPPAN Foundation is the steward of the IPPAN Network—an energy-efficient, massively scalable public blockchain
              built to support real-time financial transactions, machine-to-machine payments, and verifiable data availability
              across the globe.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              We foster a secure, open, and resilient digital ecosystem where developers, businesses, and communities can build,
              innovate, and connect—free from centralized control.
            </p>
            <p className="mt-4 text-base text-gray-600">
              Through public-good research, transparent treasury management, and collaborative governance, the Foundation keeps
              the IPPAN protocol credibly neutral while advancing real-world adoption across finance, mobility, supply chains,
              and climate-resilient infrastructure.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/about"
                className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
              >
                Join the Ecosystem
              </a>
              <a
                href="#technology"
                className="inline-flex items-center justify-center rounded-full border border-indigo-200 px-6 py-3 text-sm font-semibold text-indigo-600 transition hover:border-indigo-300 hover:text-indigo-700"
              >
                Explore Technology
              </a>
            </div>
          </div>
          <div className="grid gap-6 rounded-3xl border bg-white/70 p-8 shadow-sm backdrop-blur">
            <h2 className="text-lg font-semibold text-gray-900">IPPAN at a Glance</h2>
            <p className="text-sm text-gray-600">
              Founded to protect the core protocol, govern open standards, and support ecosystem growth, the Foundation ensures the
              network remains neutral, decentralized, and censorship-resistant for the next generation of the internet and
              financial systems.
            </p>
            <dl className="grid gap-4 text-sm text-gray-700 sm:grid-cols-2">
              {stats.map((item) => (
                <div key={item.label}>
                  <dt className="font-medium text-gray-900">{item.label}</dt>
                  <dd className="text-gray-600">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-[1.5fr,1fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900">Mission & Mandate</h2>
            <p className="mt-6 text-gray-700">
              As a non-profit organization, the IPPAN Foundation is committed to advancing the adoption and long-term sustainability
              of the IPPAN Network. We maintain and evolve the protocol, support developers and builders, and promote fair access
              and global participation so anyone can contribute to network resilience.
              </p>
              <p className="mt-4 text-gray-700">
                Our roadmap emphasizes responsible innovation and regulatory clarity while prioritizing open standards that make
                decentralized infrastructure approachable for enterprises, public institutions, and mission-driven organizations.
              </p>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">Protocol Stewardship</h3>
                <p className="mt-3 text-sm text-gray-600">
                  Maintain and evolve the IPPAN protocol for security, performance, and interoperability with open standards.
                </p>
              </div>
              <div className="rounded-2xl border p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">Builder Support</h3>
                <p className="mt-3 text-sm text-gray-600">
                  Provide open tools, grants, and technical resources so innovators can launch applications with confidence.
                </p>
              </div>
              <div className="rounded-2xl border p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">Open Participation</h3>
                <p className="mt-3 text-sm text-gray-600">
                  Enable anyone to run nodes, earn rewards, and shape the network&apos;s future through transparent governance.
                </p>
              </div>
              <div className="rounded-2xl border p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">Responsible Innovation</h3>
                <p className="mt-3 text-sm text-gray-600">
                  Champion sustainability, regulatory clarity, and ethical deployment of decentralized infrastructure.
                </p>
              </div>
            </div>
          </div>
          <aside className="rounded-3xl border bg-slate-50 p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Community Programs</h3>
            <ul className="mt-6 space-y-4 text-sm text-gray-600">
              <li>
                <span className="font-medium text-gray-900">Developer Grants:</span> Funding open-source tools, libraries, and
                decentralized applications.
              </li>
              <li>
                <span className="font-medium text-gray-900">Infrastructure Incentives:</span> Supporting node operators and
                validators with fair rewards.
              </li>
              <li>
                <span className="font-medium text-gray-900">Education & Outreach:</span> Advancing blockchain literacy and
                training the next generation of builders.
              </li>
              <li>
                <span className="font-medium text-gray-900">Partnerships & Alliances:</span> Collaborating with academia,
                enterprises, and standards bodies worldwide.
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section id="technology" className="border-y bg-slate-900 text-slate-100">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Technology We Steward</h2>
            <p className="mt-6 text-slate-200">
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
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900">Governance & Transparency</h2>
            <p className="mt-6 text-gray-700">
              The IPPAN Foundation ensures the network remains trustless and community-driven. Protocol upgrades, parameters, and
              treasury allocations are handled transparently, with community input every step of the way.
            </p>
            <ul className="mt-8 space-y-4 text-sm text-gray-600">
              <li>
                <span className="font-medium text-gray-900">Open Governance:</span> Major protocol decisions are openly debated,
                documented, and ratified.
              </li>
              <li>
                <span className="font-medium text-gray-900">Foundation Reserves:</span> Allocated responsibly to research,
                development, and ecosystem growth.
              </li>
              <li>
                <span className="font-medium text-gray-900">Compliance & Neutrality:</span> Supporting global participation while
                respecting regional frameworks.
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Get Involved</h3>
            <p className="mt-4 text-sm text-gray-600">
              IPPAN is open to everyone—developers, entrepreneurs, researchers, and enthusiasts. Choose your path to contribute.
            </p>
            <ul className="mt-6 space-y-4 text-sm text-gray-600">
              <li>
                <span className="font-medium text-gray-900">Run a Node:</span> Strengthen security and earn rewards by operating
                infrastructure.
              </li>
              <li>
                <span className="font-medium text-gray-900">Build on IPPAN:</span> Launch applications, integrate IoT networks,
                and deliver real-time financial services.
              </li>
              <li>
                <span className="font-medium text-gray-900">Contribute & Propose:</span> Join the conversation on protocol
                evolution and standards.
              </li>
              <li>
                <span className="font-medium text-gray-900">Support the Foundation:</span> Become a partner or donor to help
                advance the mission.
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
              >
                Start Building
              </a>
              <a
                href="/forum"
                className="inline-flex items-center justify-center rounded-full border border-indigo-200 px-5 py-3 text-sm font-semibold text-indigo-600 transition hover:border-indigo-300 hover:text-indigo-700"
              >
                Join the Community Forum
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900">Frequently Asked Questions</h2>
          <p className="mt-6 text-lg text-gray-700">
            Get quick answers about the IPPAN Network&apos;s vision, sustainability commitments, and how the Foundation collaborates
            with builders to accelerate decentralized infrastructure adoption.
          </p>
          <dl className="mt-10 space-y-6">
            {faqItems.map((item) => (
              <div key={item.question} className="rounded-3xl border border-indigo-100 bg-white p-8 shadow-sm">
                <dt className="text-xl font-semibold text-gray-900">{item.question}</dt>
                <dd className="mt-3 text-base text-gray-700">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </main>
  )
}
