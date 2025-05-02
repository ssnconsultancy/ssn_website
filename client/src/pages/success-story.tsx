import { Link } from "wouter";

export default function SuccessStory() {
  return (
    <>
      <section className="bg-primary text-background py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Success Stories</h1>
            <p className="text-xl text-supportingText">
              Real-world impact through innovative IT solutions
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <span className="inline-block px-4 py-1 bg-highlight bg-opacity-10 text-highlight rounded-full text-sm font-medium mb-4">
                  Featured Project
                </span>
                <h2 className="text-3xl font-bold mb-6">Transforming Project Visibility at 12th Wonder</h2>
                <div className="w-20 h-1 bg-highlight mb-8"></div>
                
                <div className="prose max-w-none text-secondary">
                  <p className="mb-4">
                    In a standout achievement that reflects our capability and commitment, 12th Wonder, a leading technology company, entrusted Abhinav Chauhan, our PMO Expert & Gen AI Engineer, with the development of a comprehensive PMO Dashboard solution. The goal was ambitious: to streamline internal project tracking, reporting, and decision-making across multiple departments.
                  </p>
                  <p className="mb-4">
                    Despite the complexity and scale, Abhinav delivered the project in a record-breaking 6 months, setting a new benchmark for PMO implementation efficiency. The solution integrated data from various sources, providing executives with real-time insights into project health, resource allocation, and forecasting.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-4 mt-8">The Challenge</h3>
                  <ul className="list-disc pl-5 mb-6 space-y-2">
                    <li>Multiple departments using different tracking systems, causing information silos</li>
                    <li>Lack of real-time visibility into project status, resulting in delayed decision-making</li>
                    <li>Inconsistent reporting methodologies across teams</li>
                    <li>Complex integration requirements with existing enterprise systems</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold mb-4">Our Approach</h3>
                  <ul className="list-disc pl-5 mb-6 space-y-2">
                    <li>Conducted thorough analysis of existing workflows and pain points</li>
                    <li>Designed a unified dashboard architecture that could pull data from disparate sources</li>
                    <li>Implemented customized visualization components for different stakeholder needs</li>
                    <li>Created automated reporting functionality to eliminate manual processes</li>
                    <li>Integrated advanced forecasting capabilities using AI/ML techniques</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold mb-4">The Results</h3>
                  <ul className="list-disc pl-5 mb-6 space-y-2">
                    <li>40% reduction in time spent on project status reporting</li>
                    <li>Near real-time visibility into project health metrics</li>
                    <li>75% improvement in resource allocation efficiency</li>
                    <li>Data-driven forecasting leading to more accurate project timelines</li>
                    <li>Standardized reporting across all departments</li>
                  </ul>
                </div>
                
                <blockquote className="border-l-4 border-highlight pl-4 italic text-secondary my-8">
                  "What Abhinav delivered in just 6 months completely changed how we operate. The PMO dashboards gave us real-time visibility we didn't even know we needed—now, it's impossible to imagine working without them. Everything from sprint tracking to project health and forecasting is at our fingertips. Abhinav's technical skill, professionalism, and fresh thinking made this project one of our most impactful internal implementations to date."
                  <footer className="mt-2 font-semibold not-italic">— Director of Operations, 12th Wonder</footer>
                </blockquote>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Key Takeaways</h3>
                  <p className="text-secondary mb-8">
                    This success story demonstrates our ability to deliver complex, high-impact IT solutions efficiently. The same expertise and approach that transformed 12th Wonder's project management capabilities can be applied to government agencies in Uttarakhand seeking to modernize their operations.
                  </p>
                  
                  <Link href="/contact" className="btn-primary">
                    Discuss Your Project
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="h-full">
                  <img 
                    src="https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1136&q=80" 
                    alt="12th Wonder Project Dashboard" 
                    className="h-1/2 w-full object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                    alt="Team working on dashboard implementation" 
                    className="h-1/2 w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">What This Means For You</h2>
            <div className="section-divider"></div>
            <p className="text-secondary text-lg max-w-3xl mx-auto">
              Our success with 12th Wonder demonstrates our capability to tackle complex challenges efficiently. Here's how this translates to benefits for your government agency:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-highlight text-4xl mb-4">
                <i className="fas fa-tachometer-alt"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Rapid Implementation</h3>
              <p className="text-secondary">
                We understand the importance of delivering results quickly, especially in the public sector where timelines are often tight and stakeholder expectations are high.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-highlight text-4xl mb-4">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Measurable Impact</h3>
              <p className="text-secondary">
                Our solutions deliver quantifiable benefits—from cost savings to efficiency improvements—that directly contribute to better governance and public service.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-highlight text-4xl mb-4">
                <i className="fas fa-cogs"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Tailored Solutions</h3>
              <p className="text-secondary">
                We don't believe in one-size-fits-all approaches. Each solution is custom-designed to address the specific needs and challenges of your agency.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/why-choose-us" className="btn-primary">
              Why Choose SSN Consultancy
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
