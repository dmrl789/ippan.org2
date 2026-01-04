import { Container } from "./container";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <Container>
        <div className="py-10">
          <div className="grid gap-6 lg:grid-cols-3">
            <div>
              <div className="font-semibold">IPPAN Foundation</div>
              <p className="mt-2 text-sm text-zinc-600">
                Independent stewardship for the IPPAN protocol: security, open
                development, and long-term ecosystem health.
              </p>
            </div>

            <div className="text-sm text-zinc-700">
              <div className="font-medium text-zinc-900">Links</div>
              <div className="mt-3 grid gap-2">
                <Link href="/mission" className="hover:underline">Mission</Link>
                <Link href="/governance" className="hover:underline">Governance</Link>
                <Link href="/transparency" className="hover:underline">Transparency</Link>
                <a
                  href="https://ippan-explorer2.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  DevNet Explorer
                </a>
              </div>
            </div>

            <div className="text-sm text-zinc-700">
              <div className="font-medium text-zinc-900">Contact</div>
              <p className="mt-3 text-zinc-600">
                Placeholder email: <span className="font-medium text-zinc-900">foundation@ippan.org</span>
              </p>
            </div>
          </div>

          <div className="mt-10 text-xs text-zinc-500">
            © {new Date().getFullYear()} IPPAN Foundation. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}
