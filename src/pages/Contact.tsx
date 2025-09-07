export default function Contact() {
  return (
    <div className="prose max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-900">General Inquiries</h3>
              <p className="text-gray-600">info@ippan.org</p>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900">Research Partnerships</h3>
              <p className="text-gray-600">research@ippan.org</p>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900">Media & Press</h3>
              <p className="text-gray-600">press@ippan.org</p>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900">Community & Grants</h3>
              <p className="text-gray-600">grants@ippan.org</p>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Connect With Us</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-900">GitHub</h3>
              <a 
                href="https://github.com/ippan-foundation" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brand hover:text-brand-dark"
              >
                github.com/ippan-foundation
              </a>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900">Twitter</h3>
              <a 
                href="https://twitter.com/ippan_foundation" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brand hover:text-brand-dark"
              >
                @ippan_foundation
              </a>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900">Discord</h3>
              <a 
                href="https://discord.gg/ippan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brand hover:text-brand-dark"
              >
                Join our community
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-3">Partnership Opportunities</h2>
        <p className="text-gray-600">
          We're always interested in collaborating with organizations that share our vision. 
          Whether you're a research institution, technology company, or funding organization, 
          we'd love to hear from you about potential partnerships and collaborations.
        </p>
      </div>
    </div>
  )
}
