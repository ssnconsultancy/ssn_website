import { Link } from "wouter";
import governmentBuilding from "../assets/government-building.png";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative text-background py-24 lg:py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={governmentBuilding} 
            alt="Digital Transformation for Government" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary bg-opacity-70"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-white drop-shadow-lg">
              Driving Digital Transformation for Uttarakhand's Public Sector
            </h1>
            <p className="text-xl md:text-2xl text-white text-opacity-90 font-light mb-10 drop-shadow">
              SSN Consultancy is on a mission to revolutionize how government agencies operate through innovative, tech-driven solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/services" className="btn-primary text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Explore Our Services
              </Link>
              <Link href="/contact" className="btn-secondary text-lg px-8 py-4 hover:bg-white hover:text-primary transform hover:-translate-y-1 transition-all duration-300">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Snippet */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">About SSN Consultancy</h2>
            <div className="section-divider"></div>
            <p className="text-secondary text-lg max-w-3xl mx-auto">
              SSN Consultancy is a newly established IT consulting firm on a mission to revolutionize the way government agencies in Uttarakhand operate. While we are at the beginning of our journey, we are backed by a team of experienced IT professionals who bring with them a proven track record of delivering successful, high-impact projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="card flex flex-col h-full">
              <div className="text-highlight text-4xl mb-4">
                <i className="fas fa-eye"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-secondary">
                To transform Uttarakhand into a model digital state—where technology is not just a tool, but a catalyst for meaningful change. We envision government agencies operating with transparency, agility, and efficiency.
              </p>
            </div>

            {/* Mission */}
            <div className="card flex flex-col h-full">
              <div className="text-highlight text-4xl mb-4">
                <i className="fas fa-bullseye"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-secondary">
                We are dedicated to digitizing processes, building robust IT infrastructures, delivering specialized expertise, and enabling a culture of innovation within government organizations.
              </p>
            </div>

            {/* Values */}
            <div className="card flex flex-col h-full">
              <div className="text-highlight text-4xl mb-4">
                <i className="fas fa-heart"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Our Core Values</h3>
              <ul className="text-secondary list-disc pl-5 space-y-2">
                <li>Purpose-Driven Innovation</li>
                <li>Integrity & Transparency</li>
                <li>Empowering Through Knowledge</li>
                <li>Local Roots, Global Vision</li>
              </ul>
            </div>
          </div>

          {/* CEO Message Preview */}
          <div className="mt-16 bg-primary text-background p-8 rounded-lg shadow-lg">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold mb-4">Message from our CEO</h3>
                <div className="w-16 h-1 bg-highlight mx-auto"></div>
              </div>
              <p className="mb-8 text-supportingText text-lg leading-relaxed italic text-center">
                "As someone who was born and raised in Uttarakhand, I carry a deep connection to this land—its people, its culture, and its potential. My journey in the IT industry has taken me across projects and teams where innovation and efficiency were the norm. But each time I returned home, I noticed a stark contrast..."
              </p>
              <div className="flex justify-center">
                <Link href="/ceo-message" className="btn-primary">
                  Read Full Message
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Core Services</h2>
            <div className="section-divider"></div>
            <p className="text-secondary text-lg max-w-3xl mx-auto">
              We offer comprehensive IT consulting services tailored specifically for government agencies in Uttarakhand, focusing on digital transformation, capacity building, and sustainable technology adoption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* IT Architecture Service */}
            <div className="card flex flex-col h-full">
              <div className="text-highlight text-4xl mb-4">
                <i className="fas fa-network-wired"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">IT Architecture & Infrastructure</h3>
              <p className="text-secondary flex-grow">
                We design and deploy robust, custom-built IT ecosystems tailored for government agencies. Our solutions are scalable, secure, and future-ready—ensuring reliable performance in even the most demanding environments.
              </p>
              <Link href="/services" className="text-highlight font-medium mt-4 inline-flex items-center">
                Learn more <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>

            {/* PMO Implementation Service */}
            <div className="card flex flex-col h-full">
              <div className="text-highlight text-4xl mb-4">
                <i className="fas fa-tasks"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Project Management Office (PMO)</h3>
              <p className="text-secondary flex-grow">
                We establish structured project execution frameworks that align with public sector needs. From governance models to reporting systems, our PMO solutions ensure transparency, accountability, and timely project delivery.
              </p>
              <Link href="/services" className="text-highlight font-medium mt-4 inline-flex items-center">
                Learn more <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>

            {/* Training Service */}
            <div className="card flex flex-col h-full">
              <div className="text-highlight text-4xl mb-4">
                <i className="fas fa-chalkboard-teacher"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Training & Capacity Building</h3>
              <p className="text-secondary flex-grow">
                We conduct hands-on training programs, workshops, and technical seminars to empower government staff with the digital skills they need. Our goal is to bridge the digital divide within public service and foster a culture of innovation.
              </p>
              <Link href="/services" className="text-highlight font-medium mt-4 inline-flex items-center">
                Learn more <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Success Story Snippet */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Success Stories</h2>
            <div className="section-divider"></div>
            <p className="text-secondary text-lg max-w-3xl mx-auto">
              See how our expertise has made a difference for our clients. These case studies demonstrate our capability to deliver transformative solutions.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg">
            <div className="p-8 lg:p-12">
              <div className="text-center mb-6">
                <span className="inline-block px-4 py-1 bg-highlight bg-opacity-10 text-highlight rounded-full text-sm font-medium mb-4">
                  Featured Project
                </span>
                <h3 className="text-2xl font-bold mb-4">Transforming Project Visibility at 12th Wonder</h3>
              </div>
              
              <div className="max-w-3xl mx-auto">
                <p className="text-secondary mb-8 text-lg">
                  In a standout achievement that reflects our capability and commitment, 12th Wonder, a leading technology company, entrusted Abhinav Chauhan, our PMO Expert & Gen AI Engineer, with the development of a comprehensive PMO Dashboard solution.
                </p>
                <blockquote className="border-l-4 border-highlight pl-6 py-4 italic text-secondary mb-8 bg-gray-50 rounded-r-lg">
                  "What Abhinav delivered in just 6 months completely changed how we operate. The PMO dashboards gave us real-time visibility we didn't even know we needed—now, it's impossible to imagine working without them."
                </blockquote>
                <div className="flex justify-center">
                  <Link href="/success-story" className="btn-primary">
                    View Full Case Study
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-title">Ready to Transform Your Agency?</h2>
            <div className="section-divider"></div>
            <p className="text-secondary text-lg max-w-3xl mx-auto mb-10">
              Let's discuss how SSN Consultancy can help your government agency embrace digital transformation and achieve new levels of efficiency and service delivery.
            </p>
            <Link href="/contact" className="btn-primary">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
