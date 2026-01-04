import type { Metadata } from "next";
import { Container, SectionHeading, Button } from "@/components";

/* eslint-disable react/no-unescaped-entities */

export const metadata: Metadata = {
  title: "Transparency",
  description:
    "Learn about the IPPAN Foundation's commitment to transparency, including treasury policies, reporting, and audits.",
};

const transparencyAreas = [
  {
    title: "Treasury Policy",
    description:
      "The Foundation maintains a conservative treasury policy designed to ensure long-term sustainability while funding ecosystem development.",
    details: [
      "Diversified holdings to reduce risk",
      "Clear allocation guidelines for different program areas",
      "Regular financial reviews and adjustments",
      "Published treasury addresses for on-chain verification",
    ],
  },
  {
    title: "Reporting Cadence",
    description:
      "We publish regular reports to keep the community informed about Foundation activities and progress.",
    details: [
      "Quarterly updates on programs and initiatives",
      "Annual comprehensive report",
      "Grant recipient progress reports",
      "Security disclosure summaries (when applicable)",
    ],
  },
  {
    title: "Audits & Controls",
    description:
      "The Foundation undergoes regular audits and maintains internal controls to ensure accountability.",
    details: [
      "Annual financial audits by independent firms",
      "Smart contract audits for Foundation operations",
      "Internal control reviews",
      "Published audit reports and findings",
    ],
  },
];

export default function TransparencyPage() {
  return (
    <>
      {/* Header */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-fg sm:text-5xl">
              Transparency
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-muted">
              We believe transparency is fundamental to building trust. Here's
              how we maintain accountability to the ecosystem.
            </p>
          </div>
        </Container>
      </section>

      {/* Commitment Statement */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-glow sm:p-12">
              <h2 className="text-2xl font-bold text-fg">
                Our commitment to transparency
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                The IPPAN Foundation is committed to operating with full
                transparency. We publish our policies, report on our activities,
                and maintain open communication with the community. This
                commitment extends to our financial operations, decision-making
                processes, and program outcomes.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Transparency Areas */}
      <section className="border-t border-border bg-card py-16 sm:py-20">
        <Container>
          <SectionHeading
            title="How we maintain transparency"
            subtitle="Key areas where we ensure accountability and openness."
            centered
          />
          <div className="mt-12 space-y-8">
            {transparencyAreas.map((area) => (
              <div
                key={area.title}
                className="rounded-2xl border border-border bg-card2 p-8"
              >
                <h3 className="text-xl font-semibold text-fg">
                  {area.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">
                  {area.description}
                </p>
                <ul className="mt-6 space-y-2">
                  {area.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-3 text-muted"
                    >
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-fg">
              Have questions about our operations?
            </h2>
            <p className="mt-4 text-muted">
              We're happy to provide additional information about our
              transparency practices.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="primary">
                Get in touch
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
