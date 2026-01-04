import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";

export default function MissionPage() {
  return (
    <Section>
      <Container>
        <PageHeader
          title="Mission & Principles"
          subtitle="Neutral stewardship for the IPPAN protocol, built on transparency, security, and long-term ecosystem health."
        />

        <div className="prose prose-zinc max-w-none">
          <h2>Our mission</h2>
          <p>
            The IPPAN Foundation exists to support the long-term development,
            security, and credibility of the IPPAN protocol and its open ecosystem.
            We fund public goods, coordinate technical stewardship, and maintain
            governance processes that protect neutrality and enable responsible growth.
          </p>

          <h2>What “stewardship” means</h2>
          <ul>
            <li>
              Supporting core protocol development and critical open-source tooling
            </li>
            <li>
              Promoting security practices, audits, and responsible disclosure
            </li>
            <li>
              Publishing policies and transparent reporting for accountability
            </li>
            <li>
              Encouraging education, standards, and ecosystem coordination
            </li>
          </ul>

          <h2>Principles</h2>
          <ul>
            <li><strong>Neutrality:</strong> we prioritize public goods and ecosystem health.</li>
            <li><strong>Security-first:</strong> reliability and rigorous testing are non-negotiable.</li>
            <li><strong>Verifiability:</strong> transparency, auditability, and measurable outcomes.</li>
            <li><strong>Long-term focus:</strong> durable infrastructure over short-term hype.</li>
          </ul>
        </div>
      </Container>
    </Section>
  );
}
