import type { Metadata } from "next";

const leadership = [
  {
    name: "Dr. Maya Fernandez",
    role: "Executive Director",
    bio: "Specialist in identity governance and former advisor to ASEAN Smart Cities Network.",
  },
  {
    name: "Samuel Adeyemi",
    role: "Chief Technology Officer",
    bio: "Leads IPPAN's privacy engineering practice after a decade of building secure infrastructure at Google Cloud.",
  },
  {
    name: "Aiko Nakamura",
    role: "Head of Civic Partnerships",
    bio: "Coordinates impact programmes with governments, multilaterals, and grassroots networks across 28 countries.",
  },
];

const values = [
  {
    title: "Privacy by design",
    description:
      "We architect every workflow with encryption, consent management, and zero knowledge protocols from the outset.",
  },
  {
    title: "Open standards",
    description:
      "IPPAN advances open APIs aligned with ISO, W3C, and regional regulations to ensure interoperability and resilience.",
  },
  {
    title: "Inclusive governance",
    description:
      "Communities, policy makers, and technologists co-create forums, charters, and playbooks for equitable adoption.",
  },
];

export const metadata: Metadata = {
  title: "About IPPAN Foundation",
  description:
    "Learn about the IPPAN Foundation's mission, governance model, and leadership empowering trusted identification.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-16 px-6 py-16 md:px-8">
      <section className="space-y-6">
        <p className="eyebrow">Who we are</p>
        <h1 className="text-4xl">A global foundation for ethical identification</h1>
        <p className="text-base text-slate-300">
          The IPPAN Foundation is an independent, non-profit organisation delivering inclusive identity solutions. We
          steward national-scale programmes, private sector integrations, and humanitarian deployments, ensuring every
          credential protects people&rsquo;s rights while driving economic opportunity.
        </p>
        <p className="text-base text-slate-300">
          Established in 2014, IPPAN operates a hybrid governance structure that combines civil society oversight, public
          sector partnerships, and technology councils. Our programmes span biometric registration, document lifecycle
          management, regulatory sandboxes, and the IPPAN Forum community of practice.
        </p>
      </section>

      <section>
        <h2 className="text-3xl">Our values</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="card-surface">
              <h3 className="text-xl">{value.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl">Leadership team</h2>
        <p className="mt-4 text-sm text-slate-300">
          Our leadership blends public policy, engineering, and community engagement expertise across continents.
        </p>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {leadership.map((person) => (
            <article key={person.name} className="card-surface">
              <h3 className="text-lg text-white">{person.name}</h3>
              <p className="text-sm text-slate-400">{person.role}</p>
              <p className="mt-3 text-sm text-slate-300">{person.bio}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/40 p-10">
        <h2 className="text-3xl">Accountability framework</h2>
        <ul className="mt-6 space-y-4 text-sm text-slate-300">
          <li>
            <span className="font-semibold text-white">Board governance:</span> Multi-stakeholder board with annual public
            reporting and independent audits.
          </li>
          <li>
            <span className="font-semibold text-white">Standards compliance:</span> Alignment with ISO 27001, SOC 2, and GDPR
            guardrails across all deployments.
          </li>
          <li>
            <span className="font-semibold text-white">Community engagement:</span> Quarterly town halls and forum-based
            policy consultations moderated by civic leaders.
          </li>
        </ul>
      </section>
    </div>
  );
}
