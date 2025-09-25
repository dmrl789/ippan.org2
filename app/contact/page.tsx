import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact IPPAN Foundation",
  description: "Reach out to the IPPAN Foundation team for partnerships, support, and media enquiries.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-12 px-6 py-16 md:px-8">
      <section className="space-y-6">
        <p className="eyebrow">Get in touch</p>
        <h1 className="text-4xl">We are ready to collaborate</h1>
        <p className="text-base text-slate-300">
          Connect with our programme, technology, or communications teams. We respond to most enquiries within two
          working days.
        </p>
      </section>

      <section className="grid gap-10 md:grid-cols-2">
        <div className="card-surface space-y-4">
          <h2 className="text-2xl">Contact directory</h2>
          <div>
            <p className="text-sm text-slate-400">General enquiries</p>
            <a href="mailto:info@ippan.org" className="text-sm text-sky-400 hover:text-sky-300">
              info@ippan.org
            </a>
          </div>
          <div>
            <p className="text-sm text-slate-400">Media</p>
            <a href="mailto:press@ippan.org" className="text-sm text-sky-400 hover:text-sky-300">
              press@ippan.org
            </a>
          </div>
          <div>
            <p className="text-sm text-slate-400">Partnerships</p>
            <a href="mailto:partnerships@ippan.org" className="text-sm text-sky-400 hover:text-sky-300">
              partnerships@ippan.org
            </a>
          </div>
          <div>
            <p className="text-sm text-slate-400">Forum support</p>
            <a href="mailto:support@ippan.org" className="text-sm text-sky-400 hover:text-sky-300">
              support@ippan.org
            </a>
          </div>
        </div>

        <form className="card-surface space-y-5" aria-label="Contact form">
          <div>
            <label htmlFor="name" className="text-sm font-semibold text-slate-200">
              Full name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Jane Doe"
              className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-sky-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-semibold text-slate-200">
              Work email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="name@organisation.org"
              className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-sky-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="topic" className="text-sm font-semibold text-slate-200">
              Topic
            </label>
            <select
              id="topic"
              name="topic"
              className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-2 text-sm text-slate-100 focus:border-sky-500 focus:outline-none"
            >
              <option>Partnership opportunity</option>
              <option>Identity deployment</option>
              <option>Forum access</option>
              <option>Media interview</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-semibold text-slate-200">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Share project details, objectives, and timelines."
              className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-sky-500 focus:outline-none"
            />
          </div>
          <button type="submit" className="btn-primary">
            Submit enquiry
          </button>
          <p className="text-xs text-slate-500">
            By submitting, you agree to our privacy policy and consent to receive follow-up communication.
          </p>
        </form>
      </section>

      <section className="card-surface space-y-4">
        <h2 className="text-2xl">Regional offices</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <p className="font-semibold text-white">Singapore</p>
            <p className="text-xs text-slate-400">144 Innovation Avenue, Suite 22</p>
          </div>
          <div>
            <p className="font-semibold text-white">Nairobi</p>
            <p className="text-xs text-slate-400">12 Impact Road, Civic Towers</p>
          </div>
          <div>
            <p className="font-semibold text-white">São Paulo</p>
            <p className="text-xs text-slate-400">89 Avenida Paulista, 8º Andar</p>
          </div>
        </div>
      </section>
    </div>
  );
}
