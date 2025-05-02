export default function Services() {
  const services = [
    {
      title: "IT Architecture & Infrastructure Setup",
      description: "We design and deploy robust, custom-built IT ecosystems tailored for government agencies. Our solutions are scalable, secure, and future-ready—ensuring reliable performance in even the most demanding environments.",
      icon: "fa-network-wired",
      bulletPoints: [
        "System architecture design and implementation",
        "Hardware and software infrastructure planning",
        "Network setup and optimization",
        "Scalability and performance engineering",
        "Legacy system integration and modernization"
      ]
    },
    {
      title: "Project Management Office (PMO) Implementation",
      description: "We establish structured project execution frameworks that align with public sector needs. From governance models to reporting systems, our PMO solutions ensure transparency, accountability, and timely project delivery.",
      icon: "fa-tasks",
      bulletPoints: [
        "PMO setup and governance framework design",
        "Project planning and scheduling methodologies",
        "Resource optimization and allocation frameworks",
        "Risk management and mitigation strategies",
        "Progress monitoring and reporting dashboards"
      ]
    },
    {
      title: "Training & Capacity Building for Government Employees",
      description: "We conduct hands-on training programs, workshops, and technical seminars to empower government staff with the digital skills they need. From basic IT literacy to advanced tools and platforms, our goal is to bridge the digital divide within public service and foster a culture of innovation from the inside out.",
      icon: "fa-chalkboard-teacher",
      bulletPoints: [
        "Digital literacy fundamentals for civil servants",
        "Advanced application and software training",
        "Change management and digital adoption workshops",
        "Leadership development for digital transformation",
        "Technical capability assessments and improvement plans"
      ]
    },
    {
      title: "Cloud Services (AWS)",
      description: "We offer strategic cloud adoption and migration services, focusing on data security, cost efficiency, and performance optimization. Our AWS-certified experts help agencies embrace cloud technologies without disrupting ongoing operations.",
      icon: "fa-cloud",
      bulletPoints: [
        "Cloud readiness assessment and strategy development",
        "AWS infrastructure design and implementation",
        "Data migration and security planning",
        "Cost optimization and resource management",
        "Ongoing monitoring and maintenance solutions"
      ]
    },
    {
      title: "Database Management & Setup",
      description: "We create and manage structured, high-performance databases that support real-time analytics and data-driven decision-making. Our systems ensure data integrity, accessibility, and compliance with government regulations.",
      icon: "fa-database",
      bulletPoints: [
        "Database architecture design and implementation",
        "Data migration and integration services",
        "Performance optimization and scaling",
        "Security hardening and access control",
        "Backup, recovery, and disaster management planning"
      ]
    },
    {
      title: "Cybersecurity & Compliance",
      description: "We implement advanced cybersecurity frameworks that defend public sector digital assets from internal and external threats. Our approach also ensures compliance with national and international data protection standards.",
      icon: "fa-shield-alt",
      bulletPoints: [
        "Security assessment and vulnerability testing",
        "Compliance verification with government regulations",
        "Threat monitoring and incident response planning",
        "Security awareness training for government personnel",
        "Secure software development practices implementation"
      ]
    },
    {
      title: "Internal Audit & Banking Consultancy",
      description: "We provide expert financial auditing and consultancy for public institutions, focusing on transparency, risk mitigation, and alignment with governmental financial policies. Our services include digital banking integration and process optimization.",
      icon: "fa-file-invoice",
      bulletPoints: [
        "Internal control systems evaluation and design",
        "Financial process digitization and automation",
        "Regulatory compliance assessments",
        "Digital payment systems integration",
        "Financial risk assessment and management"
      ]
    }
  ];
  
  return (
    <>
      <section className="bg-primary text-background py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Our Core Services</h1>
            <p className="text-xl text-supportingText">
              Comprehensive IT solutions tailored for Uttarakhand's government agencies
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-secondary text-lg max-w-3xl mx-auto">
              At SSN Consultancy, we offer specialized services designed to meet the unique needs of government agencies in Uttarakhand. Our solutions combine technical expertise with deep understanding of public sector requirements to deliver transformative outcomes.
            </p>
          </div>
          
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  <div className="bg-primary p-8 flex flex-col justify-center items-center text-center lg:col-span-1">
                    <div className="text-highlight text-5xl mb-6">
                      <i className={`fas ${service.icon}`}></i>
                    </div>
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  </div>
                  <div className="p-8 lg:col-span-4">
                    <p className="text-secondary mb-6 text-lg">{service.description}</p>
                    <h4 className="font-semibold mb-4 text-primary">Key Features:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.bulletPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="text-highlight mr-3 mt-1">
                            <i className="fas fa-check-circle"></i>
                          </div>
                          <span className="text-secondary">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary text-white p-12 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-6">Need a Custom Solution?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              We understand that every government agency has unique challenges. Our team can develop tailored solutions to address your specific requirements.
            </p>
            <a href="/contact" className="btn-primary">
              Request Consultation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
