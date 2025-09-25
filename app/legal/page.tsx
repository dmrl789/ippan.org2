import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Legal & Compliance | IPPAN Foundation',
  description:
    'Review the IPPAN Foundation’s forthcoming terms of use, privacy practices, and compliance commitments for the IPPAN Network.',
  alternates: {
    canonical: '/legal',
  },
  openGraph: {
    title: 'IPPAN Foundation Legal & Compliance Overview',
    description:
      'Understand how the IPPAN Foundation approaches user protections, data privacy, and regulatory compliance.',
    url: '/legal',
  },
  twitter: {
    title: 'IPPAN Foundation Legal & Compliance Overview',
    description:
      'Learn about the policies guiding participation in the IPPAN Network and how the Foundation manages data responsibly.',
  },
}

export default function Legal() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <header className="mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">Legal & Compliance</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900">Our Commitment to Trust & Transparency</h1>
        <p className="mt-6 text-lg text-gray-700">
          The IPPAN Foundation is finalizing comprehensive Terms of Use and a Privacy Policy that reflect our commitment to
          decentralization, user protections, and responsible stewardship of the IPPAN Network. The summaries below outline the
          principles that will guide the full policies.
        </p>
      </header>

      <section className="space-y-10">
        <article className="rounded-3xl border p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900">Terms of Use Preview</h2>
          <p className="mt-4 text-gray-700">
            The forthcoming Terms of Use will clarify eligibility requirements, participant responsibilities, and governance
            processes for interacting with IPPAN Network services. They will set expectations for acceptable use, outline
            limitations of liability, and describe how dispute resolution and protocol change management will operate in
            collaboration with the community.
          </p>
        </article>

        <article className="rounded-3xl border p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900">Privacy Principles</h2>
          <p className="mt-4 text-gray-700">
            Our Privacy Policy will detail how the Foundation collects, stores, and safeguards personal information submitted
            through our websites, forums, and grant programs. We prioritize minimal data collection, transparent consent flows,
            and secure retention practices that comply with global data protection standards such as GDPR and PDPA.
          </p>
        </article>

        <article className="rounded-3xl border p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900">Regulatory Engagement</h2>
          <p className="mt-4 text-gray-700">
            To ensure long-term resilience, the Foundation collaborates with policymakers and standards bodies worldwide. Our
            legal documents will describe how we monitor regulatory developments, conduct risk assessments, and implement
            compliance programs without compromising the IPPAN Network’s decentralization or security.
          </p>
        </article>

        <article className="rounded-3xl border p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900">Community Feedback</h2>
          <p className="mt-4 text-gray-700">
            Draft policies will be shared with the community for review prior to publication. Feedback will be incorporated via
            public comment periods and forum discussions to ensure the final documents align with ecosystem expectations.
          </p>
        </article>
      </section>

      <section className="mt-16 rounded-3xl border bg-slate-50 p-8 text-sm text-gray-600">
        <h2 className="text-lg font-semibold text-gray-900">Stay Informed</h2>
        <p className="mt-3">
          Subscribe to the newsletter or follow our public forum to be notified when the complete legal documentation is
          published. Queries can be directed to <a href="mailto:legal@ippan.org" className="text-indigo-600 hover:text-indigo-700">legal@ippan.org</a>.
        </p>
      </section>
    </main>
  )
}
