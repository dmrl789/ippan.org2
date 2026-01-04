import type { Metadata } from "next";
import { Container, SectionHeading, Button } from "@/components";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about the IPPAN Foundation and our role in supporting the IPPAN protocol ecosystem.",
};

const whatWeAre = [
  "A neutral steward of the IPPAN protocol",
  "A funder of public goods and ecosystem development",
  "A coordinator of security practices and audits",
  "A publisher of governance policies and standards",
];

const whatWeAreNot = [
  "A centralized operator or controller of the protocol",
  "A gatekeeper for builders or developers",
  "A marketing agency or promotional entity",
  "A for-profit organization",
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-b from-zinc-50 to-white py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
              What is the IPPAN Foundation?
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-zinc-600">
              The IPPAN Foundation is an independent organization dedicated to
              the long-term health of the IPPAN protocol and its open ecosystem.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="prose prose-zinc max-w-none">
              <p className="text-lg leading-relaxed text-zinc-600">
                Our role is stewardship: supporting security, neutrality, and
                credible adoption by funding public goods and maintaining clear
                governance processes. We operate independently to ensure the
                protocol remains open, secure, and accessible to all builders
                and users.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-zinc-600">
                The Foundation takes a long-term view, focusing on sustainable
                growth and the development of robust infrastructure rather than
                short-term gains. We believe that transparency and
                accountability are essential to building trust in decentralized
                systems.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* What we are / What we are not */}
      <section className="border-t border-zinc-200 bg-zinc-50 py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-5xl">
            <SectionHeading
              title="Our role in the ecosystem"
              subtitle="Understanding what the Foundation does—and what it doesn't."
              centered
            />
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {/* What we are */}
              <div className="rounded-2xl border border-zinc-200 bg-white p-8">
                <h3 className="flex items-center gap-2 text-xl font-semibold text-zinc-900">
                  <svg
                    className="h-6 w-6 text-green-600"
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
                  What we are
                </h3>
                <ul className="mt-6 space-y-3">
                  {whatWeAre.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-zinc-600"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* What we are not */}
              <div className="rounded-2xl border border-zinc-200 bg-white p-8">
                <h3 className="flex items-center gap-2 text-xl font-semibold text-zinc-900">
                  <svg
                    className="h-6 w-6 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  What we are not
                </h3>
                <ul className="mt-6 space-y-3">
                  {whatWeAreNot.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-zinc-600"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
              Want to learn more?
            </h2>
            <p className="mt-4 text-zinc-600">
              Explore our mission, programs, and governance structure.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/mission" variant="primary">
                Our mission
              </Button>
              <Button href="/governance" variant="outline">
                Governance
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
