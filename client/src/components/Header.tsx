import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import SsnLogo from "./SsnLogo";
import { useMobile } from "@/hooks/use-mobile";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const isMobile = useMobile();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const closeMenu = () => {
    if (isOpen) setIsOpen(false);
  };
  
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
    <header className="bg-primary text-background sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <SsnLogo className="h-12 w-auto" />
            <div className="font-bold text-xl md:text-2xl">SSN Consultancy</div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                href={item.path}
                className={`nav-link ${isActive(item.path) ? "active" : ""}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button 
              id="mobile-menu-button" 
              type="button"
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
              className="text-background hover:text-highlight"
            >
              <i className={`fas ${isOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div 
          id="mobile-menu" 
          className={`md:hidden pb-4 ${isOpen ? "block" : "hidden"}`}
        >
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                href={item.path}
                className={`nav-link py-2 ${isActive(item.path) ? "active" : ""}`}
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
