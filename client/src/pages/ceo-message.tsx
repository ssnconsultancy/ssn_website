import { Link } from "wouter";

export default function CeoMessage() {
  return (
    <>
      <section className="bg-primary text-background py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Message from our CEO</h1>
            <p className="text-xl text-supportingText">
              Abhinav Chauhan shares his vision for digital transformation in Uttarakhand
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-12">
              <div className="flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80" 
                  alt="CEO Abhinav Chauhan" 
                  className="rounded-full w-40 h-40 object-cover border-4 border-highlight"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-3">Abhinav Chauhan</h2>
                <p className="text-highlight text-xl mb-6">CEO & Founder, PMO Expert & Gen AI Engineer</p>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none text-secondary">
              <p className="mb-6">
                As someone who was born and raised in Uttarakhand, I carry a deep connection to this land—its people, its culture, and its potential. My journey in the IT industry has taken me across projects and teams where innovation and efficiency were the norm. But each time I returned home, I noticed a stark contrast. I saw government offices still relying on outdated systems, overburdened employees trying to do their best without the right tools, and citizens waiting in long queues for services that could be delivered at the click of a button elsewhere.
              </p>
              
              <p className="mb-6">
                This gap between what is possible with technology and what exists in our public institutions became impossible to ignore. I found myself thinking: What if we could bring the same level of technological advancement that drives private enterprises to our government agencies? What if we could help public servants work smarter, not harder? What if we could make interacting with government a seamless experience for every citizen in Uttarakhand?
              </p>
              
              <p className="mb-6">
                These questions led to the birth of SSN Consultancy. We're not just another IT consulting firm. We're a team deeply committed to the transformation of our home state through technology. Our mission is intensely personal—we want to see Uttarakhand emerge as a model of digital governance, where technology enhances rather than complicates the relationship between citizens and the state.
              </p>
              
              <p className="mb-6">
                What makes our approach different is our understanding that technology alone isn't the answer. Change happens when technology meets human context—when solutions are designed with empathy for both the government employee managing multiple responsibilities and the citizen navigating public services. That's why we focus not just on implementing systems, but on building capacity, transferring knowledge, and fostering a culture of innovation from within.
              </p>
              
              <p className="mb-6">
                Our team brings together both experienced professionals who understand the complexities of government operations and young innovators who bring fresh perspectives and cutting-edge expertise. This balance of wisdom and energy allows us to deliver solutions that are both practical today and future-ready.
              </p>
              
              <p className="mb-6">
                As we embark on this journey, I invite government agencies across Uttarakhand to join us. Digital transformation isn't just about websites or apps—it's about fundamentally reimagining how government works and serves. It's about releasing the full potential of our public institutions to drive development and improve lives.
              </p>
              
              <p className="mb-6">
                The road ahead will have its challenges, but I'm convinced that by working together—combining the dedication of our public servants with the power of thoughtful technology—we can create lasting change. This isn't just business for us; it's about building something that matters, something that lasts, something that makes our home better.
              </p>
              
              <p className="mb-10">
                I look forward to the opportunity to discuss how we can support your agency's digital transformation journey.
              </p>
              
              <p className="font-semibold">
                Warm regards,<br />
                Abhinav Chauhan<br />
                CEO & Founder<br />
                SSN Consultancy
              </p>
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/about" className="btn-primary">
                Learn About Our Company
              </Link>
              <Link href="/contact" className="btn-secondary">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
