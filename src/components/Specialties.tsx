
import { Heart, Building, CircleDollarSign, Stethoscope, Scissors, Ambulance, Syringe, Leaf } from 'lucide-react';
import { useEffect, useState, useRef, useCallback } from "react";

const Specialties = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const specialties = [
    {
      icon: <Heart className="h-10 w-10" />,
      title: "Hospital",
    },
    {
      icon: <Building className="h-10 w-10" />,
      title: "Emergency Room",
    },
    {
      icon: <Ambulance className="h-10 w-10" />,
      title: "Ambulance",
    },
    {
      icon: <Scissors className="h-10 w-10" />,
      title: "Surgical",
    },
    {
      icon: <Syringe className="h-10 w-10" />,
      title: "Anesthesia",
    },
    {
      icon: <Leaf className="h-10 w-10" />,
      title: "Wellness",
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
    <section id="specialties" className="section-padding bg-agr-dark" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Cash Benefit Solutions for Your Workforce</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-4">
            Enhance your existing benefits program with American Global's employee cash benefits coverage.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <div 
              key={index} 
              className={`bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl shadow-md overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:border-agr-accent/30 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="p-6 bg-gradient-to-r from-agr-blue to-agr-brightBlue flex justify-center">
                <div className="text-white transform transition-all duration-300 hover:scale-110">
                  {specialty.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-center text-white">{specialty.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
