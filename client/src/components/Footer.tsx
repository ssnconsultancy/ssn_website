import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-primary text-background pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link href="/" className="block mb-6">
              <div className="font-bold text-2xl text-white">SSN Consultancy</div>
            </Link>
            <p className="text-supportingText mb-6">
              Driving digital transformation for Uttarakhand's public sector through innovative IT solutions and consultancy services.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-supportingText hover:text-highlight transition duration-150"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a 
                href="#" 
                className="text-supportingText hover:text-highlight transition duration-150"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a 
                href="#" 
                className="text-supportingText hover:text-highlight transition duration-150"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-supportingText hover:text-highlight transition duration-150">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-supportingText hover:text-highlight transition duration-150">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-supportingText hover:text-highlight transition duration-150">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-supportingText hover:text-highlight transition duration-150">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/success-story" className="text-supportingText hover:text-highlight transition duration-150">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-supportingText hover:text-highlight transition duration-150">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-supportingText hover:text-highlight transition duration-150">
                  IT Architecture & Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-supportingText hover:text-highlight transition duration-150">
                  PMO Implementation
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-supportingText hover:text-highlight transition duration-150">
                  Training & Capacity Building
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-supportingText hover:text-highlight transition duration-150">
                  Cloud Services (AWS)
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-supportingText hover:text-highlight transition duration-150">
                  Cybersecurity & Compliance
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-highlight"></i>
                <span className="text-supportingText">
                  Tea Estate Plot No. 82, Banjarawala, Dehradun, Uttarakhand – 248001
                </span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone mr-3 text-highlight"></i>
                <span className="text-supportingText">+91 9897392540</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3 text-highlight"></i>
                <span className="text-supportingText">ssnconsultancy@outlook.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 border-t border-secondary border-opacity-20 text-center">
          <p className="text-supportingText">© {new Date().getFullYear()} SSN Consultancy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
