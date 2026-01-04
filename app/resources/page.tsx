import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { CTAButton } from "@/components/cta-button";

export default function ResourcesPage() {
  return (
    <Section>
      <Container>
        <PageHeader
          title="Resources"
          subtitle="Neutral links, documentation, and materials for builders and institutions."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border p-6">
            <h3 className="text-lg font-semibold">Protocol & documentation</h3>
            <p className="mt-2 text-zinc-700">
              Add official documentation, specs, and technical resources here.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <CTAButton href="https://github.com/dmrl789" external variant="secondary">
                GitHub
              </CTAButton>
              <CTAButton href="https://ippan-explorer2.vercel.app/" external variant="secondary">
                DevNet Explorer
              </CTAButton>
            </div>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="text-lg font-semibold">Brand kit & trademarks</h3>
            <p className="mt-2 text-zinc-700">
              Provide logo assets, usage guidelines, and trademark policies here.
            </p>
            <p className="mt-3 text-sm text-zinc-600">
              (Placeholder — add downloadable files when ready.)
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
