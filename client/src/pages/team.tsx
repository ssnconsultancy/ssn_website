export default function Team() {
  const teamMembers = [
    {
      name: "Abhinav Chauhan",
      role: "PMO Expert & Gen AI Engineer",
      bio: "A driven and forward-thinking professional, Abhinav brings fresh energy to the team with a focus on integrating next-gen technology into public sector workflows. As a Gen AI engineer, he is passionate about using innovation to streamline project execution and bring smarter solutions to government operations.",
      isPrimary: true
    },
    {
      name: "Nitin Mishra",
      role: "Senior IT Infrastructure Manager",
      bio: "With over a decade of experience, Nitin is an expert in designing and managing scalable, secure IT infrastructures. His specialization in AWS-backed systems ensures government clients have robust foundations for their digital transformation journeys."
    },
    {
      name: "Amol Suroshi",
      role: "Cloud Solutions Architect",
      bio: "Amol leads cloud transformation strategies with a focus on efficiency, security, and scalability. His deep knowledge of AWS architecture enables smooth migrations and optimized performance for public sector services."
    },
    {
      name: "VP Bijalwan",
      role: "Banking Consultant",
      bio: "VP contributes critical banking and financial process expertise to SSN. His background in auditing and public finance helps government agencies strengthen transparency, efficiency, and regulatory compliance."
    },
    {
      name: "Anamitra Bahuguna",
      role: "Cybersecurity & Tech Policy Analyst",
      bio: "A Gen Z cybersecurity enthusiast with a sharp eye for digital threats and systems security, Anamitra brings a fresh, proactive approach to protecting government IT environments. His passion for cybersecurity and evolving tech policy makes her a vital contributor to future-ready governance solutions."
    }
  ];

  return (
    <>
      <section className="bg-primary text-background py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Our Founding Team</h1>
            <p className="text-xl text-supportingText">
              Meet the experts behind SSN Consultancy's innovative solutions
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-secondary text-lg max-w-3xl mx-auto">
              Meet the experts behind SSN Consultancy. Our team combines local knowledge with global expertise to deliver transformative IT solutions for Uttarakhand's public sector.
            </p>
          </div>
          
          {/* Featured Team Member - CEO */}
          <div className="mb-20">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-10">
                <div className="text-center mb-8">
                  <div className="inline-block bg-highlight text-white text-sm px-4 py-1 rounded-full font-medium mb-4">
                    CEO & Founder
                  </div>
                  <h2 className="text-3xl font-bold mb-2">{teamMembers[0].name}</h2>
                  <p className="text-highlight text-xl mb-4">{teamMembers[0].role}</p>
                  <div className="w-24 h-1 bg-highlight mx-auto mb-8"></div>
                </div>
                <div className="max-w-3xl mx-auto">
                  <p className="text-secondary text-lg text-center mb-8">{teamMembers[0].bio}</p>
                  <div className="flex justify-center space-x-4">
                    <a href="#" className="text-primary hover:text-highlight transition-colors">
                      <i className="fab fa-linkedin text-2xl"></i>
                    </a>
                    <a href="#" className="text-primary hover:text-highlight transition-colors">
                      <i className="fab fa-twitter text-2xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Other Team Members */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.slice(1).map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-8 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-highlight font-medium mb-4">{member.role}</p>
                <div className="w-12 h-0.5 bg-highlight mx-auto mb-4"></div>
                <p className="text-secondary">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Join Our Team</h2>
            <div className="section-divider"></div>
            <p className="text-secondary text-lg max-w-3xl mx-auto">
              We're always looking for talented professionals who share our vision of digital transformation for Uttarakhand. If you're passionate about technology and public service, we'd love to hear from you.
            </p>
          </div>
          
          <div className="text-center">
            <a href="/contact" className="btn-primary">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
