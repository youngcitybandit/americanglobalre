
import { 
  HeartPulse, 
  Briefcase,
  Users,
  HeartHandshake,
  Shield,
  Award
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState, useRef, useCallback } from "react";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const services = [
    {
      icon: <HeartPulse className="h-12 w-12 text-agr-brightBlue" />,
      title: "Indemnity Insurance",
      description: "Flexible indemnity insurance plans providing financial protection for businesses and their employees against specific healthcare expenses and conditions."
    },
    {
      icon: <Briefcase className="h-12 w-12 text-agr-brightBlue" />,
      title: "Business Solutions",
      description: "Tailored reinsurance packages specifically designed for the unique needs and budgets of businesses and employer groups."
    },
    {
      icon: <Users className="h-12 w-12 text-agr-brightBlue" />,
      title: "Small Employer Groups",
      description: "Specialized coverage solutions for small employer groups, balancing comprehensive protection with affordable premiums."
    },
    {
      icon: <HeartHandshake className="h-12 w-12 text-agr-brightBlue" />,
      title: "Employee Well-being",
      description: "Comprehensive wellness programs and support services that enhance employee satisfaction, productivity, and overall well-being."
    },
    {
      icon: <Shield className="h-12 w-12 text-agr-brightBlue" />,
      title: "Risk Management",
      description: "Proactive risk assessment and mitigation strategies to protect businesses from unforeseen healthcare expenses and liability."
    },
    {
      icon: <Award className="h-12 w-12 text-agr-brightBlue" />,
      title: "Cross-Industry Solutions",
      description: "Versatile coverage options adaptable to various industries, ensuring all businesses can find appropriate protection for their workforce."
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
    <section id="services" className="section-padding bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Modern Benefits for Today's Businesses</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            American Global provides comprehensive solutions that help employers—across industries and business sizes—protect their teams and support employee well-being.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`card-hover border-0 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
