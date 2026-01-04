import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Card } from "@/components/card";
import { CTAButton } from "@/components/cta-button";

export default function HomePage() {
  return (
    <>
      <div className="border-b bg-zinc-50">
        <Container>
          <div className="py-3 text-sm text-zinc-700">
            <span className="font-medium text-zinc-900">DevNet is live.</span>{" "}
            Explore the IPPAN network in the public DevNet explorer.
          </div>
        </Container>
      </div>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                IPPAN Foundation
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-zinc-700">
                The IPPAN Foundation is an independent steward of the IPPAN
                protocol and ecosystem. We support open development, promote
                security and reliability, and fund initiatives that grow real
                adoption—without compromising neutrality.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <CTAButton href="/mission">Our mission</CTAButton>
                <CTAButton href="/programs" variant="secondary">
                  Programs & grants
                </CTAButton>
                <CTAButton
                  href="https://ippan-explorer2.vercel.app/"
                  external
                  variant="secondary"
                >
                  Open DevNet
                </CTAButton>
              </div>

              <div className="mt-8 text-sm text-zinc-600">
                We focus on protocol stewardship, security, education, and
                long-term ecosystem health.
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <div className="text-sm font-medium text-zinc-900">
                  What we do
                </div>
                <ul className="mt-4 space-y-3 text-sm text-zinc-700">
                  <li>• Fund open-source engineering and research</li>
                  <li>• Coordinate security practices and responsible disclosure</li>
                  <li>• Maintain governance processes and policies</li>
                  <li>• Support ecosystem builders, standards, and education</li>
                </ul>
                <div className="mt-6">
                  <CTAButton href="/transparency" variant="secondary">
                    Transparency & reporting
                  </CTAButton>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-zinc-50 border-y">
        <Container>
          <h2 className="text-2xl font-semibold tracking-tight">
            Principles that guide the Foundation
          </h2>
          <p className="mt-3 max-w-3xl text-zinc-700">
            IPPAN Foundation operates with a long-term horizon: neutrality,
            security-first engineering, verifiability, and responsible ecosystem
            growth.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card title="Neutral Stewardship">
              We support the protocol and public goods without favoring
              individual entities.
            </Card>
            <Card title="Security & Reliability">
              We back audits, testing, best practices, and incident response.
            </Card>
            <Card title="Open Development">
              We fund and coordinate open tooling, docs, and core improvements.
            </Card>
            <Card title="Transparency">
              Clear reporting, published policies, and accountable decision
              processes.
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <h3 className="text-2xl font-semibold tracking-tight">
                Builders & institutions
              </h3>
              <p className="mt-3 text-zinc-700">
                Whether you are building applications, integrating infrastructure,
                or evaluating IPPAN for institutional use, the Foundation provides
                neutral resources and supports the ecosystem with long-term
                coordination.
              </p>
            </div>
            <div className="lg:col-span-4">
              <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <div className="text-sm font-medium text-zinc-900">
                  Get started
                </div>
                <div className="mt-4 flex flex-col gap-3">
                  <CTAButton href="/resources" variant="secondary">
                    Resources
                  </CTAButton>
                  <CTAButton href="/contact" variant="secondary">
                    Contact
                  </CTAButton>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
