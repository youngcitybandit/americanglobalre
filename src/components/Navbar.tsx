
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'} ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <Logo isScrolled={isScrolled} />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-agr-brightBlue transition-colors duration-300 hover:scale-105 inline-block">Services</a>
            <a href="#specialties" className="text-gray-700 hover:text-agr-brightBlue transition-colors duration-300 hover:scale-105 inline-block">Specialties</a>
            <a href="#about" className="text-gray-700 hover:text-agr-brightBlue transition-colors duration-300 hover:scale-105 inline-block">About</a>
            <Button asChild className="bg-agr-brightBlue hover:bg-agr-blue transition-transform duration-300 hover:scale-105">
              <a href="#contact">Contact Us</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-agr-brightBlue focus:outline-none transition-transform duration-300 hover:scale-110"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a 
                href="#services" 
                className="text-gray-700 hover:text-agr-brightBlue transition-all duration-300 hover:pl-2"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
              <a 
                href="#specialties" 
                className="text-gray-700 hover:text-agr-brightBlue transition-all duration-300 hover:pl-2"
                onClick={() => setIsOpen(false)}
              >
                Specialties
              </a>
              <a 
                href="#about" 
                className="text-gray-700 hover:text-agr-brightBlue transition-all duration-300 hover:pl-2"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <Button 
                asChild 
                className="bg-agr-brightBlue hover:bg-agr-blue w-full transition-transform duration-300 hover:scale-105"
                onClick={() => setIsOpen(false)}
              >
                <a href="#contact">Contact Us</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
