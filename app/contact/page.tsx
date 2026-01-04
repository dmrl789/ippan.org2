import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";

export default function ContactPage() {
  return (
    <Section>
      <Container>
        <PageHeader
          title="Contact"
          subtitle="Reach the Foundation for grants, partnerships, and institutional coordination."
        />

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="mt-2 text-zinc-700">
                Use a foundation mailbox for formal requests (grants, security,
                coordination).
              </p>
              <p className="mt-3 text-sm text-zinc-600">
                Placeholder: <span className="font-medium">foundation@ippan.org</span>
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Community</h3>
              <p className="mt-2 text-zinc-700">
                Link your public community channels here when ready.
              </p>
              <p className="mt-3 text-sm text-zinc-600">
                Placeholder: Discord / X / LinkedIn
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-sm text-zinc-600">
          Security-related messages should follow a responsible disclosure process
          (to be published on the Governance page).
        </div>
      </Container>
    </Section>
  );
}
