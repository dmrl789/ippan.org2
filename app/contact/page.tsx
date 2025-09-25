import type { Metadata } from 'next'

const contacts = [
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
  },
}

export default function Contact() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <header className="mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">Contact</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900">Connect with the Foundation</h1>
        <p className="mt-6 text-lg text-gray-700">
          We welcome collaboration with developers, enterprises, researchers, and policymakers who share our vision for
          decentralized, sustainable infrastructure. Reach out to the teams below and we&apos;ll follow up promptly.
        </p>
      </header>

      <section className="grid gap-6 sm:grid-cols-2">
        {contacts.map((item) => (
          <div key={item.label} className="rounded-3xl border p-6 shadow-sm">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">{item.label}</h2>
            <a href={`mailto:${item.value}`} className="mt-3 block text-lg font-medium text-indigo-600 hover:text-indigo-700">
              {item.value}
            </a>
          </div>
        ))}
      </section>

      <section className="mt-16 grid gap-8 md:grid-cols-2">
        <div className="rounded-3xl border bg-white p-8 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">Foundation Headquarters</h2>
          <address className="mt-4 not-italic text-sm text-gray-600">
            IPPAN Foundation
            <br /> 21 Civic Exchange Way
            <br /> Singapore 048763
          </address>
          <p className="mt-4 text-sm text-gray-600">
            Our distributed team spans multiple continents. Virtual meetings can be scheduled across UTC, EST, and JST timezones
            with advance notice.
          </p>
        </div>
        <div className="rounded-3xl border bg-slate-50 p-8 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">Media Resources</h2>
          <p className="mt-3 text-sm text-gray-600">
            Accredited journalists and analysts can request executive interviews, protocol briefings, and access to our media
            asset library. Please include your publication, deadline, and areas of interest when reaching out.
          </p>
        </div>
      </section>

      <section className="mt-16 rounded-3xl border bg-slate-50 p-10 text-sm text-gray-600">
        <h2 className="text-lg font-semibold text-gray-900">Stay in the loop</h2>
        <p className="mt-3">
          Subscribe to the Foundation briefing for governance updates, ecosystem highlights, and upcoming community calls. We
          respect your privacy and will only send essential communications.
        </p>
      </section>
    </main>
  )
}
