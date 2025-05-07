
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Logo from './Logo';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
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

  // Define consistent text styling classes
  const navLinkClass = "text-gray-700 text-base font-medium hover:text-agr-brightBlue transition-colors duration-300 hover:scale-105";
  const dropdownItemClass = "text-sm font-medium leading-none";
  const mobileNavLinkClass = "text-gray-700 text-base font-medium hover:text-agr-brightBlue transition-all duration-300 hover:pl-2";
  const mobileDropdownItemClass = "block text-gray-700 text-sm font-medium hover:text-agr-brightBlue transition-all duration-300 hover:pl-2";

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 bg-white ${isScrolled ? 'shadow-md py-3' : 'py-5'} ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <Logo isScrolled={isScrolled} />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`${navLinkClass} bg-transparent`}>Employers</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-3 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <a 
                            href="/employer-login"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className={dropdownItemClass}>Login</div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`${navLinkClass} bg-transparent`}>Brokers</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-3 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <a 
                            href="/broker-login"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className={dropdownItemClass}>Login</div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('solutions');
              }}
              className={navLinkClass + " inline-block"}
            >
              Solutions
            </a>
            
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('services');
              }}
              className={navLinkClass + " inline-block"}
            >
              Coverage
            </a>
            
            <a href="#about" className={navLinkClass + " inline-block"}>About</a>
            
            <Button asChild className="bg-agr-brightBlue hover:bg-agr-blue transition-transform duration-300 hover:scale-105">
              <a href="#contact" className="text-base font-medium">Contact Us</a>
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-agr-brightBlue focus:outline-none transition-transform duration-300 hover:scale-110"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <button 
                  onClick={() => {
                    const dropdown = document.getElementById('employersDropdown');
                    if (dropdown) {
                      dropdown.classList.toggle('hidden');
                    }
                  }}
                  className="flex items-center justify-between w-full text-base font-medium text-gray-700 hover:text-agr-brightBlue transition-all duration-300 hover:pl-2"
                >
                  <span>Employers</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div id="employersDropdown" className="hidden mt-2 pl-4 space-y-2">
                  <a 
                    href="/employer-login"
                    className={mobileDropdownItemClass}
                  >
                    Login
                  </a>
                </div>
              </div>
              
              <div className="relative">
                <button 
                  onClick={() => {
                    const dropdown = document.getElementById('brokersDropdown');
                    if (dropdown) {
                      dropdown.classList.toggle('hidden');
                    }
                  }}
                  className="flex items-center justify-between w-full text-base font-medium text-gray-700 hover:text-agr-brightBlue transition-all duration-300 hover:pl-2"
                >
                  <span>Brokers</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div id="brokersDropdown" className="hidden mt-2 pl-4 space-y-2">
                  <a 
                    href="/broker-login"
                    className={mobileDropdownItemClass}
                  >
                    Login
                  </a>
                </div>
              </div>
              
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('solutions');
                }}
                className={mobileNavLinkClass}
              >
                Solutions
              </a>
              
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('services');
                }}
                className={mobileNavLinkClass}
              >
                Coverage
              </a>
              
              <a href="#about" className={mobileNavLinkClass}>
                About
              </a>
              
              <Button 
                asChild 
                className="bg-agr-brightBlue hover:bg-agr-blue w-full transition-transform duration-300 hover:scale-105"
              >
                <a href="#contact" className="text-base font-medium">Contact Us</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
