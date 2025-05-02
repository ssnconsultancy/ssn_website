import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { useMobile } from "@/hooks/use-mobile";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const isMobile = useMobile();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const closeMenu = () => {
    if (isOpen) setIsOpen(false);
  };
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest("#mobile-menu") && !target.closest("#mobile-menu-button")) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  // Close menu on location change
  useEffect(() => {
    closeMenu();
  }, [location]);
  
  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };
  
  const navItems = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About Us" },
    { path: "/services", name: "Services" },
    { path: "/team", name: "Our Team" },
    { path: "/success-story", name: "Success Stories" },
    { path: "/contact", name: "Contact" },
  ];
  
  return (
    <header className={`bg-primary text-background sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="group flex items-center">
            {/* Logo animation on hover */}
            <div className="relative overflow-hidden mr-2">
              <div className="w-10 h-10 flex items-center justify-center bg-highlight rounded-full transform group-hover:rotate-12 transition-transform duration-300">
                <span className="text-white font-bold text-lg">SSN</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-2xl md:text-3xl tracking-tight text-white group-hover:text-highlight transition-colors duration-300">
                SSN Consultancy
              </span>
              <span className="text-xs text-supportingText hidden md:block">Transforming Government IT</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <div className="flex rounded-full bg-primary bg-opacity-30 backdrop-blur-sm px-1 py-1 shadow-inner">
              {navItems.map((item, index) => (
                <Link 
                  key={item.path}
                  href={item.path}
                  className={`
                    nav-link text-base font-medium mx-2 px-4 py-2 rounded-full transition-all duration-200
                    ${isActive(item.path) 
                      ? "bg-highlight text-white shadow-md" 
                      : "hover:bg-white hover:bg-opacity-10 hover:text-highlight"
                    }
                  `}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button 
              id="mobile-menu-button" 
              type="button"
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
              className="w-10 h-10 flex items-center justify-center bg-highlight rounded-full text-white hover:bg-opacity-90 transition-colors"
            >
              <i className={`fas ${isOpen ? "fa-times" : "fa-bars"} text-lg`}></i>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div 
          id="mobile-menu" 
          className={`md:hidden py-4 ${isOpen ? "block" : "hidden"}`}
        >
          <div className="flex flex-col space-y-2 border-t border-opacity-20 border-white pt-4 mt-4">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                href={item.path}
                className={`
                  py-3 px-4 text-base font-medium rounded-lg transition-all duration-200
                  ${isActive(item.path) 
                    ? "bg-highlight text-white" 
                    : "hover:bg-white hover:bg-opacity-10 hover:text-highlight"
                  }
                `}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
