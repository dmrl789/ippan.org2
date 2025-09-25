import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Centre",
  description: "Terms of use, privacy policy, and compliance statements for the IPPAN Foundation.",
};

export default function LegalPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-12 px-6 py-16 md:px-8">
      <section className="space-y-4">
        <p className="eyebrow">Governance</p>
        <h1 className="text-4xl">Legal & compliance centre</h1>
        <p className="text-sm text-slate-300">
          The following summaries are provided for reference. Full legal documentation is available on request and is
          issued upon contracting.
        </p>
      </section>

      <section className="card-surface space-y-4">
        <h2 className="text-2xl">Terms of use</h2>
        <p className="text-sm text-slate-300">
          IPPAN Foundation platforms are provided for civic participation and identity services. Users agree not to
          misuse credentials, attempt unauthorised access, or breach community guidelines. Service-level agreements are
          established through partner contracts.
        </p>
      </section>

      <section className="card-surface space-y-4">
        <h2 className="text-2xl">Privacy policy</h2>
        <p className="text-sm text-slate-300">
          We process personal data strictly for identity management, programme delivery, and forum moderation. All data
          is encrypted in transit and at rest, with retention policies governed by legal mandates and community consent.
          Individuals can request access, correction, or deletion via privacy@ippan.org.
        </p>
      </section>

      <section className="card-surface space-y-4">
        <h2 className="text-2xl">Compliance statements</h2>
        <ul className="space-y-3 text-sm text-slate-300">
          <li>ISO 27001, SOC 2 Type II, and CSA STAR attestation across core systems.</li>
          <li>GDPR, PDPA, and HIPAA-aligned processing agreements with regional variations.</li>
          <li>Transparent audit trails accessible to regulators and accredited third parties.</li>
          <li>Responsible AI guidelines enforced across biometric and verification tooling.</li>
        </ul>
      </section>

      <section className="card-surface space-y-4">
        <h2 className="text-2xl">Forum charter</h2>
        <p className="text-sm text-slate-300">
          Forum members commit to respectful collaboration, evidence-based discussion, and safeguarding sensitive
          information. Moderators enforce participation standards, with escalation pathways for dispute resolution and
          data protection enquiries.
        </p>
      </section>
    </div>
  );
}
