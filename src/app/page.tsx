import { Button, Card, Container, SectionHeading } from "@/components";

const features = [
  {
    title: "Protocol Stewardship",
    description:
      "Support core improvements and neutral coordination for the IPPAN protocol ecosystem.",
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
    title: "Security-First",
    description:
      "Audits, best practices, and responsible disclosure to ensure protocol reliability.",
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
    title: "Public Goods",
    description:
      "Grants for tooling, documentation, and developer experience improvements.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
  },
  {
    title: "Transparency",
    description:
      "Published policies, regular reporting, and clear accountability measures.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-zinc-50 to-white py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
              IPPAN Foundation
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-zinc-600">
              Independent stewardship for the IPPAN protocol—security, public
              goods, and long-term ecosystem growth.
            </p>
            <p className="mt-4 text-base leading-relaxed text-zinc-500">
              The IPPAN Foundation supports the development and credibility of
              the IPPAN protocol through open-source funding, security
              coordination, transparent governance processes, and education. We
              operate with neutrality and a long-term horizon.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/mission" variant="primary">
                Explore our mission
              </Button>
              <Button href="/programs" variant="secondary">
                View programs
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* DevNet Callout */}
      <section className="border-y border-zinc-200 bg-zinc-900 py-12">
        <Container>
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div>
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-green-400">
                  DevNet Live
                </span>
              </div>
              <h2 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                Explore the IPPAN DevNet
              </h2>
              <p className="mt-1 text-zinc-400">
                View live network activity, transactions, and protocol metrics.
              </p>
            </div>
            <Button
              href="https://ippan-explorer2.vercel.app/"
              variant="outline"
              external
              className="border-white text-white hover:bg-white hover:text-zinc-900"
            >
              Open DevNet Explorer
            </Button>
          </div>
        </Container>
      </section>

      {/* What We Do */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            title="What we do"
            subtitle="The Foundation focuses on four key areas to support the IPPAN ecosystem."
            centered
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="border-t border-zinc-200 bg-zinc-50 py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
              Learn more about our work
            </h2>
            <p className="mt-4 text-lg text-zinc-600">
              Discover how the IPPAN Foundation supports the protocol ecosystem
              through governance, grants, and security initiatives.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/about" variant="primary">
                About the Foundation
              </Button>
              <Button href="/contact" variant="outline">
                Get in touch
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
