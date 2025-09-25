import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IPPAN Foundation",
  description:
    "A professional foundation platform providing trusted identity services, partnerships, and community support.",
  metadataBase: new URL("https://ippan.org"),
  openGraph: {
    title: "IPPAN Foundation",
    description:
      "Professional services for secure identification, digital partnerships, and community collaboration.",
    url: "https://ippan.org",
    siteName: "IPPAN Foundation",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IPPAN Foundation",
    description:
      "Professional services for secure identification, digital partnerships, and community collaboration.",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-slate-950 text-slate-100 antialiased">
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
