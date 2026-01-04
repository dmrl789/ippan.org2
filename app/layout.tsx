import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: "IPPAN Foundation",
    template: "%s · IPPAN Foundation",
  },
  description:
    "The IPPAN Foundation supports the development, security, and long-term stewardship of the IPPAN protocol and ecosystem.",
  metadataBase: new URL("https://ippan.org"),
  openGraph: {
    title: "IPPAN Foundation",
    description:
      "Stewardship, security, education, and ecosystem funding for the IPPAN protocol.",
    url: "https://ippan.org",
    siteName: "IPPAN Foundation",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "IPPAN Foundation",
    description:
      "Stewardship, security, education, and ecosystem funding for the IPPAN protocol.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-white text-zinc-900 antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
