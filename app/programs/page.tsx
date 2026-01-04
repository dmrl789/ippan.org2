import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { Card } from "@/components/card";

export default function ProgramsPage() {
  return (
    <Section>
      <Container>
        <PageHeader
          title="Programs"
          subtitle="We fund and coordinate initiatives that strengthen the protocol and expand responsible adoption."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card title="Grants & Public Goods">
            Funding for open-source tooling, developer experience, libraries, and
            ecosystem infrastructure.
          </Card>
          <Card title="Security & Audits">
            Support for audits, testing frameworks, threat modeling, and
            responsible disclosure processes.
          </Card>
          <Card title="Research & Standards">
            Applied research, protocol improvements, interoperability work, and
            best-practice standards.
          </Card>
          <Card title="Education">
            Documentation, workshops, and materials for builders and institutions.
          </Card>
          <Card title="Ecosystem Support">
            Coordination with partners, community initiatives, and network-wide
            health programs.
          </Card>
          <Card title="Institutional Enablement">
            Neutral resources for evaluation, integration, and operational readiness.
          </Card>
        </div>

        <div className="mt-10 rounded-2xl border bg-zinc-50 p-6">
          <h3 className="text-lg font-semibold">Grant applications</h3>
          <p className="mt-2 text-zinc-700">
            Grant processes and timelines will be published here. For now, contact
            the Foundation to express interest and share a brief proposal summary.
          </p>
        </div>
      </Container>
    </Section>
  );
}
