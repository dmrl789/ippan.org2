import type { Metadata } from "next";
import Link from "next/link";

const verificationSteps = [
  {
    title: "Capture & consent",
    description:
      "Applicants register via mobile or partner kiosks, capturing biometrics and documents with explicit consent flows.",
  },
  {
    title: "Validation & deduplication",
    description:
      "Encrypted submissions are validated against authoritative registries, automated fraud checks, and deduplication engines.",
  },
  {
    title: "Credential issuance",
    description:
      "Verified identities receive digital credentials compatible with ICAO, ISO, and W3C standards, ready for wallet storage.",
  },
  {
    title: "Lifecycle management",
    description:
      "Ongoing updates, suspensions, and revocations flow through governed APIs with real-time analytics dashboards.",
  },
];

const assurances = [
  "Multi-factor verification with biometric, device, and behavioural analysis.",
  "Edge-to-cloud encryption, residency controls, and audit-grade logging.",
  "Integration accelerators for Google Workspace, Android, and partner CRMs.",
  "Dedicated compliance support covering GDPR, PDPA, and HIPAA requirements.",
];

export const metadata: Metadata = {
  title: "Identification Services",
  description:
    "Explore IPPAN Foundation's secure identification stack, verification process, and compliance frameworks.",
};

export default function IdentityPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-16 px-6 py-16 md:px-8">
      <section className="space-y-6">
        <p className="eyebrow">Identity portfolio</p>
        <h1 className="text-4xl">Secure identification services for every sector</h1>
        <p className="text-base text-slate-300">
          IPPAN Foundation provides modular identity capabilities deployed through government tenders, humanitarian
          missions, and private sector inclusion programmes. Our architecture layers Google Cloud resilience with open
          source cryptography, ensuring transparency and verifiability from enrolment to revocation.
        </p>
      </section>

      <section>
        <h2 className="text-3xl">Verification lifecycle</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {verificationSteps.map((step) => (
            <article key={step.title} className="card-surface">
              <h3 className="text-xl text-white">{step.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/40 p-10">
        <h2 className="text-3xl">Assurance & compliance</h2>
        <ul className="mt-6 space-y-4 text-sm text-slate-300">
          {assurances.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-sky-400" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl">Deployment options</h2>
        <p className="text-sm text-slate-300">
          Choose between managed cloud, hybrid, or fully sovereign deployments with dedicated support teams.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="card-surface">
            <h3 className="text-lg">Managed Cloud</h3>
            <p className="mt-3 text-sm text-slate-300">
              Hosted on Google Cloud with Vercel edge delivery, auto-scaling, and 24/7 security operations.
            </p>
          </div>
          <div className="card-surface">
            <h3 className="text-lg">Hybrid</h3>
            <p className="mt-3 text-sm text-slate-300">
              Leverage on-premise data residency with federated identity bridges connecting to IPPAN services.
            </p>
          </div>
          <div className="card-surface">
            <h3 className="text-lg">Sovereign</h3>
            <p className="mt-3 text-sm text-slate-300">
              Dedicated deployments, operated by accredited national agencies with IPPAN certification.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-gradient-to-br from-sky-500/10 via-indigo-500/10 to-purple-500/10 p-10">
        <h2 className="text-3xl">Next steps</h2>
        <p className="mt-4 text-base text-slate-300">
          Schedule a discovery workshop or request sandbox credentials to evaluate our verification APIs, admin console,
          and Google integrations.
        </p>
        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
          <Link href="/contact" className="btn-primary">
            Book a discovery workshop
          </Link>
          <Link
            href="/news"
            className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white"
          >
            View product updates
          </Link>
        </div>
      </section>
    </div>
  );
}
