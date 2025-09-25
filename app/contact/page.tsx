import type { Metadata } from 'next'

type Contact = { label: string; value: string }

const contacts: Contact[] = [
  { label: 'General inquiries', value: 'info@ippan.org' },
  { label: 'Ecosystem partnerships', value: 'partners@ippan.org' },
  { label: 'Community & forum', value: 'community@ippan.org' },
  { label: 'Press & media', value: 'press@ippan.org' },
]

export const metadata: Metadata = {
  title: 'Contact the IPPAN Foundation',
  description:
    'Connect with the IPPAN Foundation teams for partnership opportunities, community initiatives, press requests, and general enquiries.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact the IPPAN Foundation',
    description:
      'Reach the IPPAN Foundation for collaboration, ecosystem programs, and media requests supporting decentralized infrastructure.',
    url: '/contact',
  },
  twitter: {
    title: 'Contact the IPPAN Foundation',
    description:
      'Email the IPPAN Foundation teams to partner on sustainable blockchain innovation and community growth.',
    card: 'summary',
  },
}

export default function Contact() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20 text-slate-300">
      <header className="mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">Contact</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-100">
          Connect with the Foundation
        </h1>
        <p className="mt-6 text-lg text-slate-300">
          We welcome collaboration with developers, enterprises, researchers, and policymakers who
          share our vision for decentralized, sustainable infrastructure. Reach out to the teams
          below and we&apos;ll follow up promptly.
        </p>
      </header>

      <section className="grid gap-6 sm:grid-cols-2">
        {contacts.map((item) => (
          <div
            key={item.label}
            className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl shadow-slate-950/40"
          >
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
              {item.label}
            </h2>
            <a
              href={`mailto:${item.value}`}
              aria-label={`Email ${item.label} at ${item.value}`}
              className="mt-3 block text-lg font-medium text-indigo-300 transition hover:text-indigo-200 break-words"
            >
              {item.value}
            </a>
          </div>
        ))}
      </section>

      <section className="mt-16 rounded-3xl border border-slate-800 bg-slate-900/60 p-10 text-sm text-slate-300 shadow-xl shadow-slate-950/40">
        <h2 className="text-lg font-semibold text-slate-100">Stay in the loop</h2>
        <p className="mt-3">
          Subscribe to the Foundation briefing for governance updates, ecosystem highlights, and
          upcoming community calls. We respect your privacy and will only send essential
          communications.
        </p>
      </section>
    </main>
  )
}
