import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="grid gap-10">
      <div className="hero-gradient rounded-2xl p-8 text-white">
        <h1 className="text-4xl font-bold mb-4">IPPAN Foundation</h1>
        <p className="mt-2 max-w-2xl text-lg">
          Advancing a sustainable, high‑throughput, verifiable network for financial‑grade settlement, 
          AI provenance, and global availability.
        </p>
        <div className="mt-6 flex gap-3">
          <Link 
            to="/about" 
            className="rounded-md bg-white px-4 py-2 text-brand hover:bg-gray-100 transition-colors"
          >
            Learn More
          </Link>
          <Link 
            to="/contact" 
            className="rounded-md border border-white/70 px-4 py-2 hover:bg-white/10 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
      
      <div className="grid gap-6 md:grid-cols-3">
        <Card 
          title="Mission" 
          description="Open research, standards, and reference code for verifiable compute, HashTimer, and financial‑grade finality."
        />
        <Card 
          title="Programs" 
          description="Community grants, standards working groups, and validator support."
        />
        <Card 
          title="Research" 
          description="Advancing cryptography, distributed systems, and energy‑efficient infrastructure."
        />
      </div>
    </section>
  )
}

function Card({ title, description }: { title: string; description: string }) {
  return (
    <div className="card-hover rounded-xl border p-6 bg-white shadow-sm">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}
