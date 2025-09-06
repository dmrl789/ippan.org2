import Link from 'next/link'

export default function Home() {
  return (
    <section className="grid gap-10">
      <div className="rounded-2xl bg-gradient-to-r from-brand to-brand-light p-8 text-white">
        <h1 className="text-3xl font-bold">IPPAN Foundation</h1>
        <p className="mt-2 max-w-2xl">Advancing a sustainable, high‑throughput, verifiable network for financial‑grade settlement, AI provenance, and global availability.</p>
        <div className="mt-6 flex gap-3">
          <Link href="/forum" className="rounded-md bg-white px-4 py-2 text-brand hover:bg-gray-100">Visit Forum</Link>
          <Link href="/about" className="rounded-md border border-white/70 px-4 py-2 hover:bg-white/10">Learn more</Link>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <Card title="Mission" desc="Open research, standards, and reference code for verifiable compute, HashTimer, and financial‑grade finality."/>
        <Card title="Programs" desc="Community grants, standards working groups, and validator support."/>
        <Card title="Forum" desc="Discuss IPPAN architecture, clients, and ecosystem. Log in to post."/>
      </div>
    </section>
  )
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-xl border p-5">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-gray-600">{desc}</p>
    </div>
  )
}
