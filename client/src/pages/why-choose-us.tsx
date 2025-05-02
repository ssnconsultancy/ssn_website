import { Link } from "wouter";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Rooted in Uttarakhand, Committed to Its Growth",
      description: "We understand the local challenges because we come from here. Our mission is deeply personal—to uplift our home state with technology that creates lasting change.",
      icon: "fa-map-marker-alt"
    },
    {
      title: "Young Energy Meets Proven Expertise",
      description: "Our team brings together seasoned professionals and next-gen thinkers. We balance experience with innovation to deliver practical yet forward-looking solutions.",
      icon: "fa-lightbulb"
    },
    {
      title: "Tailored Public Sector Solutions",
      description: "We know government isn't a one-size-fits-all space. Every system we build is customized, secure, and aligned with your department's real needs.",
      icon: "fa-cogs"
    },
    {
      title: "Focus on Empowerment, Not Just Execution",
      description: "We don't just deliver systems—we empower your people to use them. Through hands-on training, continuous support, and collaborative engagement, we ensure long-term success.",
      icon: "fa-users"
    },
    {
      title: "End-to-End Digital Transformation",
      description: "From infrastructure to cloud, dashboards to cybersecurity—we offer comprehensive services under one roof, ensuring consistency and quality at every step.",
      icon: "fa-sync-alt"
    },
    {
      title: "Committed to Public Good",
      description: "Our solutions aim to enhance transparency, efficiency, and citizen service. We measure our success by the positive impact we create for the people of Uttarakhand.",
      icon: "fa-hands-helping"
    }
  ];

  return (
    <>
      <section className="bg-primary text-background py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Why Choose SSN Consultancy</h1>
            <p className="text-xl text-supportingText">
              What sets us apart in the IT consulting landscape
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-secondary text-lg max-w-3xl mx-auto">
              What sets us apart in the IT consulting landscape, especially when it comes to serving government agencies in Uttarakhand.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 mr-6">
                  <div className="bg-highlight bg-opacity-10 p-4 rounded-full">
                    <i className={`fas ${feature.icon} text-highlight text-2xl`}></i>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-secondary">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
                <div className="w-20 h-1 bg-highlight mb-8"></div>
                <p className="text-secondary text-lg mb-6">
                  At SSN Consultancy, we follow a structured yet flexible methodology that ensures successful digital transformation for government agencies:
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-semibold mr-4 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary text-lg mb-2">Understand</h3>
                      <p className="text-secondary">We begin by deeply understanding your agency's specific challenges, workflows, and objectives.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-semibold mr-4 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary text-lg mb-2">Design</h3>
                      <p className="text-secondary">We collaborate with your team to design tailored solutions that address your unique requirements.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-semibold mr-4 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary text-lg mb-2">Implement</h3>
                      <p className="text-secondary">We utilize agile methodologies to ensure rapid, efficient, and transparent implementation.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-semibold mr-4 flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary text-lg mb-2">Train</h3>
                      <p className="text-secondary">We provide comprehensive training to ensure your team can effectively use and maintain the new systems.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-semibold mr-4 flex-shrink-0">
                      5
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary text-lg mb-2">Support</h3>
                      <p className="text-secondary">We offer ongoing support and refinement to ensure long-term success and adaptability.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="hidden lg:block">
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                  alt="Our collaborative approach in action" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-primary text-background p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Let's Build Something That Lasts</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Uttarakhand is ready for its digital leap. Together, let's make governance smarter, services faster, and people's lives better—one project at a time.
            </p>
            <Link href="/contact" className="btn-primary">
              Start Your Digital Transformation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
