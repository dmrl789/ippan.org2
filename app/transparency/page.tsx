import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";

export default function TransparencyPage() {
  return (
    <Section>
      <Container>
        <PageHeader
          title="Transparency"
          subtitle="Accountability through reporting, auditable processes, and clear policies."
        />

        <div className="prose prose-zinc max-w-none">
          <h2>Treasury policy</h2>
          <p>
            The Foundation’s treasury policies are designed to support long-term
            sustainability, fund public goods, and ensure responsible operational
            management. Reporting commitments include periodic updates and
            program-level disclosures where appropriate.
          </p>

          <h2>Reporting</h2>
          <ul>
            <li>Program updates and milestones</li>
            <li>Grants awarded and progress summaries</li>
            <li>Security activities and audit status (as appropriate)</li>
            <li>Annual or periodic transparency reports</li>
          </ul>

          <h2>Audits & controls</h2>
          <p>
            Where relevant, the Foundation supports independent reviews of
            protocol-critical components, security practices, and operational
            controls to uphold ecosystem trust.
          </p>
        </div>
      </Container>
    </Section>
  );
}
