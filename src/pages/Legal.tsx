export default function Legal() {
  return (
    <div className="prose max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Legal Information</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Terms of Use</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Welcome to the IPPAN Foundation website. By accessing and using this website, 
              you accept and agree to be bound by the terms and provision of this agreement.
            </p>
            
            <h3 className="text-lg font-medium text-gray-900">Use License</h3>
            <p>
              Permission is granted to temporarily download one copy of the materials on the 
              IPPAN Foundation website for personal, non-commercial transitory viewing only.
            </p>
            
            <h3 className="text-lg font-medium text-gray-900">Disclaimer</h3>
            <p>
              The materials on the IPPAN Foundation website are provided on an 'as is' basis. 
              The IPPAN Foundation makes no warranties, expressed or implied, and hereby disclaims 
              and negates all other warranties including without limitation, implied warranties or 
              conditions of merchantability, fitness for a particular purpose, or non-infringement 
              of intellectual property or other violation of rights.
            </p>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              The IPPAN Foundation is committed to protecting your privacy. This privacy policy 
              explains how we collect, use, and protect your information when you visit our website.
            </p>
            
            <h3 className="text-lg font-medium text-gray-900">Information We Collect</h3>
            <p>
              We may collect information that you provide directly to us, such as when you 
              contact us or subscribe to our newsletter. This may include your name, email address, 
              and any other information you choose to provide.
            </p>
            
            <h3 className="text-lg font-medium text-gray-900">How We Use Your Information</h3>
            <p>
              We use the information we collect to communicate with you, provide updates about 
              our research and programs, and improve our website and services.
            </p>
            
            <h3 className="text-lg font-medium text-gray-900">Data Security</h3>
            <p>
              We implement appropriate security measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              The IPPAN Foundation supports open research and development. Many of our research 
              outputs, software, and documentation are released under open source licenses to 
              promote collaboration and innovation.
            </p>
            
            <p>
              Unless otherwise specified, content on this website is licensed under the 
              Creative Commons Attribution 4.0 International License.
            </p>
          </div>
        </section>
        
        <section className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Contact for Legal Matters</h2>
          <p className="text-gray-600">
            For questions regarding these terms, privacy policy, or other legal matters, 
            please contact us at legal@ippan.org
          </p>
        </section>
      </div>
    </div>
  )
}
