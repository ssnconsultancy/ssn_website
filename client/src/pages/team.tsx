export default function Team() {
  const teamMembers = [
    {
      name: "Abhinav Chauhan",
      role: "PMO Expert & Gen AI Engineer",
      bio: "A driven and forward-thinking professional, Abhinav brings fresh energy to the team with a focus on integrating next-gen technology into public sector workflows. As a Gen AI engineer, he is passionate about using innovation to streamline project execution and bring smarter solutions to government operations.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      isPrimary: true
    },
    {
      name: "Nitin Mishra",
      role: "Senior IT Infrastructure Manager",
      bio: "With over a decade of experience, Nitin is an expert in designing and managing scalable, secure IT infrastructures. His specialization in AWS-backed systems ensures government clients have robust foundations for their digital transformation journeys.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
    },
    {
      name: "Amol Suroshi",
      role: "Cloud Solutions Architect",
      bio: "Amol leads cloud transformation strategies with a focus on efficiency, security, and scalability. His deep knowledge of AWS architecture enables smooth migrations and optimized performance for public sector services.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
    },
    {
      name: "VP Bijalwan",
      role: "Banking Consultant",
      bio: "VP contributes critical banking and financial process expertise to SSN. His background in auditing and public finance helps government agencies strengthen transparency, efficiency, and regulatory compliance.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
    },
    {
      name: "Anamitra Bahuguna",
      role: "Cybersecurity & Tech Policy Analyst",
      bio: "A Gen Z cybersecurity enthusiast with a sharp eye for digital threats and systems security, Anamitra brings a fresh, proactive approach to protecting government IT environments. His passion for cybersecurity and evolving tech policy makes her a vital contributor to future-ready governance solutions.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
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
          
          {/* Featured Team Member */}
          <div className="mb-20">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 items-center">
                <div className="md:col-span-1 p-8 flex justify-center">
                  <div className="relative">
                    <img 
                      src={teamMembers[0].image} 
                      alt={teamMembers[0].name} 
                      className="rounded-full w-60 h-60 object-cover border-4 border-highlight"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-highlight text-white text-sm px-4 py-1 rounded-full font-medium">
                      CEO & Founder
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2 p-8">
                  <h2 className="text-3xl font-bold mb-2">{teamMembers[0].name}</h2>
                  <p className="text-highlight text-xl mb-6">{teamMembers[0].role}</p>
                  <p className="text-secondary text-lg mb-6">{teamMembers[0].bio}</p>
                  <div className="flex space-x-4">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {teamMembers.slice(1).map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 relative inline-block">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="rounded-full w-40 h-40 object-cover mx-auto border-4 border-primary"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-highlight mb-3">{member.role}</p>
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
