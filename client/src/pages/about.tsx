import { Link } from "wouter";

export default function About() {
  const coreValues = [
    {
      title: "Purpose-Driven Innovation",
      description: "We innovate with intent—focusing on solutions that address real challenges faced by government agencies and create meaningful impact for citizens.",
      icon: "fa-lightbulb"
    },
    {
      title: "Integrity & Transparency",
      description: "We believe in absolute honesty in all our dealings. Our processes, pricing, and progress reports are transparent and traceable.",
      icon: "fa-balance-scale"
    },
    {
      title: "Empowering Through Knowledge",
      description: "We don't just implement systems; we transfer skills. Every project is an opportunity to build capacity within government teams.",
      icon: "fa-graduation-cap"
    },
    {
      title: "Local Roots, Global Vision",
      description: "We combine deep understanding of Uttarakhand's unique context with global best practices to deliver solutions that are both locally relevant and world-class.",
      icon: "fa-globe-asia"
    },
    {
      title: "Collaboration Over Competition",
      description: "We see ourselves as partners, not vendors. Success means working alongside government teams, understanding their perspectives, and co-creating solutions.",
      icon: "fa-handshake"
    },
    {
      title: "Agility with Purpose",
      description: "We embrace adaptive approaches that respond to changing needs, but always keep the core mission in focus.",
      icon: "fa-tachometer-alt"
    },
    {
      title: "Security & Responsibility",
      description: "We handle sensitive government data with the highest standards of security and ethical responsibility.",
      icon: "fa-shield-alt"
    }
  ];
  
  const missionPoints = [
    {
      title: "Digitizing and Streamlining Processes",
      description: "Modernize traditional workflows through automation and intelligent systems that reduce manual effort and improve service delivery speed."
    },
    {
      title: "Building Robust IT Infrastructures",
      description: "Design and implement scalable, secure, and resilient digital systems tailored to the unique needs of government bodies."
    },
    {
      title: "Delivering Specialized Expertise",
      description: "Offer hands-on consultancy in project management, cloud computing, and cybersecurity to ensure projects are executed with precision and long-term viability."
    },
    {
      title: "Enabling a Culture of Innovation",
      description: "Equip government employees with the tools, training, and mindset to embrace continuous learning and adapt to technological advancements."
    }
  ];

  return (
    <>
      <section className="bg-primary text-background py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">About SSN Consultancy</h1>
            <p className="text-xl text-supportingText">
              Empowering Uttarakhand's public sector through digital innovation and transformation
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Company Introduction</h2>
              <div className="w-20 h-1 bg-highlight mb-8"></div>
              <p className="text-secondary text-lg mb-6">
                SSN Consultancy is a newly established IT consulting firm on a mission to revolutionize the way government agencies in Uttarakhand operate. While we are at the beginning of our journey, we are backed by a phenomenal team of experienced IT professionals who bring with them a proven track record of delivering successful, high-impact projects across various domains.
              </p>
              <p className="text-secondary text-lg mb-6">
                Our focus is on empowering public sector organizations through innovative, tech-driven solutions. We understand the unique challenges faced by government bodies in Uttarakhand—from legacy systems to limited resources, from geographical constraints to the pressing need for transparency and efficiency.
              </p>
              <p className="text-secondary text-lg">
                What sets us apart is our deep commitment to the region's development. We're not just service providers; we're partners in Uttarakhand's digital transformation journey. Our team combines local insights with global expertise to create solutions that are both contextually relevant and technologically advanced.
              </p>
            </div>
            <div className="order-first lg:order-last">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                alt="Team Collaboration" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Vision</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="bg-primary text-background p-10 rounded-lg shadow-lg">
            <div className="max-w-3xl mx-auto">
              <div className="text-highlight text-5xl mb-6 text-center">
                <i className="fas fa-eye"></i>
              </div>
              <p className="text-xl text-center leading-relaxed">
                To transform Uttarakhand into a model digital state—where technology is not just a tool, but a catalyst for meaningful change. We envision a future where every government agency, from the smallest local office to state-level departments, operates with transparency, agility, and efficiency. Through the strategic use of innovative digital solutions, we aim to empower public institutions to deliver seamless, citizen-first services—setting a benchmark not only for Uttarakhand but for the entire nation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Mission</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {missionPoints.map((point, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-primary flex items-center">
                  <span className="inline-block w-8 h-8 bg-highlight text-white rounded-full text-center leading-8 mr-3">
                    {index + 1}
                  </span>
                  {point.title}
                </h3>
                <p className="text-secondary">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Core Values</h2>
            <div className="section-divider"></div>
            <p className="text-secondary text-lg max-w-3xl mx-auto">
              These principles guide everything we do at SSN Consultancy, from how we develop solutions to how we build relationships.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="text-highlight text-4xl mb-4">
                  <i className={`fas ${value.icon}`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-secondary">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Leadership Insight</h2>
            <div className="w-20 h-1 bg-highlight mx-auto mb-8"></div>
            <p className="text-xl mb-8">
              Hear directly from our CEO about the vision and mission driving SSN Consultancy
            </p>
            <Link href="/ceo-message" className="btn-primary">
              Read CEO's Message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
