import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components";

/* eslint-disable react/no-unescaped-entities */

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the IPPAN Foundation for general inquiries, grant applications, or security reports.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-fg sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-muted">
              Have questions or want to get involved? We'd love to hear from
              you.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Options & Form */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Information */}
              <div>
                <SectionHeading
                  title="Get in touch"
                  subtitle="Choose the best way to reach us based on your inquiry."
                />

                <div className="space-y-8">
                  {/* General Inquiries */}
                  <div className="rounded-2xl border border-border bg-card p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-card2 text-accent">
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-fg">
                          General Inquiries
                        </h3>
                        <p className="mt-1 text-sm text-muted">
                          For questions about the Foundation, partnerships, or
                          general information.
                        </p>
                        <a
                          href="mailto:foundation@ippan.org"
                          className="mt-2 inline-block text-sm font-medium text-accent hover:text-accent/80"
                        >
                          foundation@ippan.org
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Security */}
                  <div className="rounded-2xl border border-danger/30 bg-danger/10 p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-danger/20 text-danger">
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-fg">
                          Security Reports
                        </h3>
                        <p className="mt-1 text-sm text-muted">
                          For responsible disclosure of security vulnerabilities
                          or concerns.
                        </p>
                        <a
                          href="mailto:security@ippan.org"
                          className="mt-2 inline-block text-sm font-medium text-danger hover:text-danger/80"
                        >
                          security@ippan.org
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <div className="rounded-2xl border border-border bg-card p-8">
                  <h2 className="text-xl font-semibold text-fg">
                    Send us a message
                  </h2>
                  <p className="mt-2 text-sm text-muted">
                    Fill out the form below and we'll get back to you as soon as
                    possible.
                  </p>

                  <form
                    action="mailto:foundation@ippan.org"
                    method="POST"
                    encType="text/plain"
                    className="mt-6 space-y-6"
                  >
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-fg"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        className="mt-1 block w-full rounded-lg border border-border bg-card2 px-4 py-2.5 text-fg placeholder-muted shadow-sm transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-fg"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        className="mt-1 block w-full rounded-lg border border-border bg-card2 px-4 py-2.5 text-fg placeholder-muted shadow-sm transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-fg"
                      >
                        Subject
                      </label>
                      <select
                        name="subject"
                        id="subject"
                        required
                        className="mt-1 block w-full rounded-lg border border-border bg-card2 px-4 py-2.5 text-fg shadow-sm transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      >
                        <option value="">Select a topic</option>
                        <option value="general">General inquiry</option>
                        <option value="grants">Grant application</option>
                        <option value="partnership">Partnership</option>
                        <option value="press">Press inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-fg"
                      >
                        Message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        rows={5}
                        required
                        className="mt-1 block w-full rounded-lg border border-border bg-card2 px-4 py-2.5 text-fg placeholder-muted shadow-sm transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                        placeholder="Tell us how we can help..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-bg shadow-lg shadow-accent/20 transition-colors hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg"
                    >
                      Send message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
