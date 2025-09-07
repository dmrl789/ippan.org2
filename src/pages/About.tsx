export default function About() {
  return (
    <div className="prose max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">About the Foundation</h1>
      
      <div className="space-y-6">
        <p className="text-lg leading-relaxed">
          The IPPAN Foundation supports the research and stewardship of the Immutable Proof & Availability Network. 
          We convene contributors across cryptography, distributed systems, and finance to advance verifiable, 
          energy‑efficient infrastructure.
        </p>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Our Mission</h2>
          <p>
            To advance open research, standards, and reference implementations for verifiable compute, 
            HashTimer protocols, and financial‑grade finality systems that enable sustainable, 
            high‑throughput networks for global availability.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-3">Research Areas</h2>
            <ul className="space-y-2">
              <li>• Verifiable computation and zero-knowledge proofs</li>
              <li>• Distributed consensus mechanisms</li>
              <li>• Energy-efficient blockchain protocols</li>
              <li>• Financial-grade settlement systems</li>
              <li>• AI provenance and data integrity</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-3">Community Programs</h2>
            <ul className="space-y-2">
              <li>• Research grants and fellowships</li>
              <li>• Standards working groups</li>
              <li>• Developer support programs</li>
              <li>• Educational initiatives</li>
              <li>• Validator network support</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-brand/10 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-3 text-brand">Join Our Mission</h2>
          <p>
            We welcome researchers, developers, and organizations who share our vision of building 
            sustainable, verifiable infrastructure for the future. Together, we can advance the 
            state of distributed systems and create a more secure, efficient digital world.
          </p>
        </div>
      </div>
    </div>
  )
}
