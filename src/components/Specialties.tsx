
import { Heart, Building, CircleDollarSign, Stethoscope, Scissors, Ambulance, Syringe, Leaf } from 'lucide-react';
import { useEffect, useState, useRef, useCallback } from "react";

const Specialties = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const specialties = [
    {
      icon: <Heart className="h-10 w-10" />,
      title: "Hospital",
      description: "Cash benefits for hospital stays and procedures"
    },
    {
      icon: <Building className="h-10 w-10" />,
      title: "Emergency Room",
      description: "Coverage for unexpected medical emergencies"
    },
    {
      icon: <Ambulance className="h-10 w-10" />,
      title: "Ambulance",
      description: "Benefits for emergency transportation services"
    },
    {
      icon: <Scissors className="h-10 w-10" />,
      title: "Surgical",
      description: "Financial support for surgical procedures"
    },
    {
      icon: <Syringe className="h-10 w-10" />,
      title: "Anesthesia",
      description: "Coverage for anesthesia-related expenses"
    },
    {
      icon: <Leaf className="h-10 w-10" />,
      title: "Wellness",
      description: "Support for preventative care and wellness"
    }
  ];

  const handleScroll = useCallback(() => {
    if (!sectionRef.current) return;
    
    const sectionTop = sectionRef.current.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (sectionTop < windowHeight * 0.75) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <section id="specialties" className="section-padding bg-agr-dark relative overflow-hidden" ref={sectionRef}>
      {/* Dynamic background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-agr-accent/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-agr-brightBlue/20 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-agr-accent to-agr-brightBlue">Indemnity Insurance Providing Cash Benefit Solutions</span> for Your Workforce
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-4">
            Enhance your existing benefits program with American Global's employee cash benefits coverage.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <div 
              key={index} 
              className={`bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl shadow-md overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="p-6 bg-gradient-to-r from-agr-blue to-agr-brightBlue flex justify-center items-center relative">
                <div 
                  className={`text-white transform transition-all duration-500 ${hoveredIndex === index ? 'scale-125 rotate-12' : ''}`}
                  style={{ 
                    filter: hoveredIndex === index ? 'drop-shadow(0 0 8px rgba(25, 239, 215, 0.8))' : 'none'
                  }}
                >
                  {specialty.icon}
                </div>
                {hoveredIndex === index && (
                  <div className="absolute inset-0 bg-gradient-to-r from-agr-accent/20 to-agr-brightBlue/20 animate-pulse"></div>
                )}
              </div>
              <div className="p-6 flex flex-col items-center">
                <h3 className="text-xl font-semibold text-center text-white mb-2">{specialty.title}</h3>
                <p className={`text-sm text-gray-300 text-center transition-all duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-70'}`}>
                  {specialty.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
