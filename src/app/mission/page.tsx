import type { Metadata } from "next";
import { Container, SectionHeading, Button, Card } from "@/components";

export const metadata: Metadata = {
  title: "Mission",
  description:
    "Our mission is to strengthen the IPPAN protocol as a reliable, secure, and verifiable foundation for builders and institutions.",
};

const principles = [
  {
    title: "Neutrality & Independence",
    description:
      "We operate independently from any single stakeholder, ensuring fair and unbiased support for the entire ecosystem.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
        />
      </svg>
    ),
  },
  {
    title: "Security & Reliability First",
    description:
      "Security is non-negotiable. We prioritize audits, best practices, and responsible disclosure above all else.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "Verifiability & Transparency",
    description:
      "All our processes, decisions, and financials are documented and publicly accessible for community review.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    ),
  },
  {
    title: "Long-term Ecosystem Health",
    description:
      "We focus on sustainable growth and infrastructure that will serve the ecosystem for years to come.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
];

export default function MissionPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-b from-zinc-50 to-white py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
              Our Mission
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-zinc-600">
              To strengthen the IPPAN protocol as a reliable, secure, and
              verifiable foundation for builders and institutions—through open
              development, security coordination, and transparent governance.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission Statement */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8 sm:p-12">
              <blockquote className="text-center">
                <p className="text-2xl font-medium italic leading-relaxed text-zinc-700 sm:text-3xl">
                  &ldquo;We exist to ensure the IPPAN protocol remains open,
                  secure, and accessible—serving as trusted infrastructure for
                  the next generation of decentralized applications.&rdquo;
                </p>
              </blockquote>
            </div>
          </div>
        </Container>
      </section>

      {/* Principles */}
      <section className="border-t border-zinc-200 bg-zinc-50 py-16 sm:py-20">
        <Container>
          <SectionHeading
            title="Our principles"
            subtitle="These core principles guide everything we do at the Foundation."
            centered
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {principles.map((principle) => (
              <Card
                key={principle.title}
                title={principle.title}
                description={principle.description}
                icon={principle.icon}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
              See our mission in action
            </h2>
            <p className="mt-4 text-zinc-600">
              Learn about the programs and initiatives we support to fulfill our
              mission.
            </p>
            <div className="mt-8">
              <Button href="/programs" variant="primary">
                View programs
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
