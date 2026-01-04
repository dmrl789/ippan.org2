import type { Metadata } from "next";
import { Container, SectionHeading, Button } from "@/components";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore our programs including grants, security initiatives, research, and education for the IPPAN ecosystem.",
};

const programs = [
  {
    title: "Grants & Public Goods",
    description:
      "Funding for tooling, libraries, documentation, and infrastructure that benefits the entire ecosystem. We support open-source projects that improve developer experience and protocol accessibility.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Security & Audits",
    description:
      "Comprehensive security programs including professional audits, bug bounties, and incident response readiness. We ensure the protocol maintains the highest security standards.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
  },
  {
    title: "Research & Standards",
    description:
      "Protocol research, interoperability studies, and development of best practices. We work to advance the technical foundations of the IPPAN ecosystem.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    title: "Education",
    description:
      "Educational materials for builders, institutions, and developers. We create resources to help the community understand and build on the IPPAN protocol.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
];

export default function ProgramsPage() {
  return (
    <>
      {/* Header */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-fg sm:text-5xl">
              Programs
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-muted">
              The Foundation supports the IPPAN ecosystem through focused
              programs in grants, security, research, and education.
            </p>
          </div>
        </Container>
      </section>

      {/* Programs Grid */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {programs.map((program) => (
              <div
                key={program.title}
                className="rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-glow"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-card2 text-accent">
                  {program.icon}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-fg">
                  {program.title}
                </h3>
                <p className="leading-relaxed text-muted">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How to Apply */}
      <section className="border-t border-border bg-card py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl border border-border bg-card2 p-8 sm:p-12">
              <SectionHeading
                title="How to apply"
                subtitle="Interested in receiving a grant or participating in our programs?"
              />
              <div className="prose prose-invert max-w-none">
                <p className="text-muted">
                  Grant applications will be published with clear criteria,
                  milestones, and reporting requirements. We evaluate proposals
                  based on their potential impact on the ecosystem, technical
                  feasibility, and alignment with our mission.
                </p>
                <p className="mt-4 text-muted">
                  For now, contact the Foundation with a short proposal
                  outlining:
                </p>
                <ul className="mt-4 space-y-2 text-muted">
                  <li>Project description and goals</li>
                  <li>Team background and qualifications</li>
                  <li>Requested funding amount and timeline</li>
                  <li>Expected outcomes and deliverables</li>
                  <li>How the project benefits the IPPAN ecosystem</li>
                </ul>
              </div>
              <div className="mt-8">
                <Button href="/contact" variant="primary">
                  Contact us
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
