import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "IPPAN Foundation",
    template: "%s | IPPAN Foundation",
  },
  description:
    "Independent stewardship for the IPPAN protocol—security, public goods, and long-term ecosystem growth.",
  keywords: [
    "IPPAN",
    "Foundation",
    "Protocol",
    "Blockchain",
    "Security",
    "Public Goods",
  ],
  authors: [{ name: "IPPAN Foundation" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "IPPAN Foundation",
    title: "IPPAN Foundation",
    description:
      "Independent stewardship for the IPPAN protocol—security, public goods, and long-term ecosystem growth.",
  },
  twitter: {
    card: "summary_large_image",
    title: "IPPAN Foundation",
    description:
      "Independent stewardship for the IPPAN protocol—security, public goods, and long-term ecosystem growth.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex min-h-screen flex-col bg-white`}>
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
