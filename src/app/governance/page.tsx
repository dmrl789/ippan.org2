import type { Metadata } from "next";
import { Container, SectionHeading, Button } from "@/components";

export const metadata: Metadata = {
  title: "Governance",
  description:
    "Learn about the IPPAN Foundation's governance structure, policies, and decision-making processes.",
};

const policies = [
  {
    title: "Decision-Making",
    description:
      "Our decision-making process is designed to be transparent, inclusive, and efficient. Major decisions are documented and published, with clear rationales and expected outcomes.",
    items: [
      "Documented decision processes",
      "Published rationales for major decisions",
      "Regular reviews and updates",
      "Community input mechanisms",
    ],
  },
  {
    title: "Conflict of Interest Policy",
    description:
      "Foundation members and contributors must disclose any potential conflicts of interest. We maintain strict separation between personal interests and Foundation activities.",
    items: [
      "Mandatory disclosure requirements",
      "Recusal procedures for conflicted parties",
      "Annual conflict reviews",
      "Public disclosure of material conflicts",
    ],
  },
  {
    title: "Security Disclosure Policy",
    description:
      "We maintain a responsible disclosure program for security vulnerabilities. Researchers are encouraged to report issues through our secure channels.",
    items: [
      "Secure reporting channels",
      "Coordinated disclosure timelines",
      "Recognition for responsible reporters",
      "Post-incident transparency",
    ],
  },
  {
    title: "Program Selection Criteria",
    description:
      "Grant and program selection follows published criteria to ensure fair and consistent evaluation of all applications.",
    items: [
      "Published evaluation criteria",
      "Standardized application process",
      "Independent review committees",
      "Appeals and feedback mechanisms",
    ],
  },
];

export default function GovernancePage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-b from-zinc-50 to-white py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
              Governance
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-zinc-600">
              The Foundation maintains clear policies designed to support
              neutrality, manage conflicts of interest, and ensure
              accountability.
            </p>
          </div>
        </Container>
      </section>

      {/* Introduction */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="text-lg leading-relaxed text-zinc-600">
              Governance at the IPPAN Foundation focuses on published processes
              and measurable outcomes. We believe that clear, consistent
              policies are essential for building trust and ensuring the
              long-term health of the protocol ecosystem.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-zinc-600">
              All policies are regularly reviewed and updated to reflect best
              practices and community feedback. We are committed to continuous
              improvement in our governance structures.
            </p>
          </div>
        </Container>
      </section>

      {/* Policies */}
      <section className="border-t border-zinc-200 bg-zinc-50 py-16 sm:py-20">
        <Container>
          <SectionHeading
            title="Our policies"
            subtitle="Published policies that guide Foundation operations and decision-making."
            centered
          />
          <div className="mt-12 space-y-8">
            {policies.map((policy) => (
              <div
                key={policy.title}
                className="rounded-2xl border border-zinc-200 bg-white p-8"
              >
                <h3 className="text-xl font-semibold text-zinc-900">
                  {policy.title}
                </h3>
                <p className="mt-3 leading-relaxed text-zinc-600">
                  {policy.description}
                </p>
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {policy.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-zinc-600"
                    >
                      <svg
                        className="h-4 w-4 flex-shrink-0 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {item}
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
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
              Questions about governance?
            </h2>
            <p className="mt-4 text-zinc-600">
              We welcome feedback and questions about our governance structures.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="primary">
                Contact us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
