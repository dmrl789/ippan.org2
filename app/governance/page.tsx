import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";

export default function GovernancePage() {
  return (
    <Section>
      <Container>
        <PageHeader
          title="Governance"
          subtitle="Clear processes, published policies, and accountable decision-making."
        />

        <div className="prose prose-zinc max-w-none">
          <h2>Structure</h2>
          <p>
            The IPPAN Foundation is designed to provide neutral stewardship.
            Governance is centered on transparency, conflict-of-interest management,
            and decision processes aligned with long-term protocol health.
          </p>

          <h2>Decision-making</h2>
          <ul>
            <li>Published priorities and program goals</li>
            <li>Documented selection criteria for grants and initiatives</li>
            <li>Review processes for security and protocol-critical changes</li>
            <li>Public reporting on funded work and outcomes</li>
          </ul>

          <h2>Policies</h2>
          <ul>
            <li>Conflict of interest and disclosures</li>
            <li>Responsible disclosure and security response</li>
            <li>Grants due diligence and milestone reporting</li>
            <li>Trademark and brand usage guidelines</li>
          </ul>

          <p className="text-zinc-600">
            Detailed policy documents can be linked here as they are finalized.
          </p>
        </div>
      </Container>
    </Section>
  );
}
