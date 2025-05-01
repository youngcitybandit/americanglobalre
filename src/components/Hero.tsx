import { ArrowRight, ShieldCheck, TrendingUp, DollarSign, Sparkles, Star, CircleCheck } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [animatedText, setAnimatedText] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    
    // Create a moving glow effect
    const glowInterval = setInterval(() => {
      setGlowPosition({
        x: 30 + Math.random() * 40,
        y: 30 + Math.random() * 40,
      });
    }, 3000);
    
    // Set up text animation interval
    const textInterval = setInterval(() => {
      setAnimatedText(prev => (prev + 1) % 3);
    }, 4000);
    
    return () => {
      clearInterval(glowInterval);
      clearInterval(textInterval);
    };
  }, []);
  
  // Animated background shapes
  const shapes = [
    { left: '5%', top: '20%', size: 20, delay: 0, duration: 15 },
    { left: '15%', top: '60%', size: 30, delay: 2, duration: 20 },
    { left: '85%', top: '15%', size: 15, delay: 1, duration: 12 },
    { left: '75%', top: '70%', size: 25, delay: 3, duration: 17 },
    { left: '50%', top: '30%', size: 12, delay: 2.5, duration: 14 },
    { left: '35%', top: '85%', size: 18, delay: 1.5, duration: 19 },
  ];

  // Hero taglines that will animate
  const taglines = [
    "Managing Risk for Employer Benefits",
    "Empowering Employee Wellness",
    "Transforming Health Insurance"
  ];

  return (
    <section className="relative overflow-hidden bg-agr-dark pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Dynamic background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-30">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-agr-accent via-agr-brightBlue to-transparent"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-20 bg-gradient-to-tr from-agr-accent to-transparent rounded-full blur-3xl"></div>
      
      {/* Animated background shapes */}
      {shapes.map((shape, i) => (
        <div 
          key={i}
          className="absolute rounded-full mix-blend-lighten opacity-30 animate-pulse"
          style={{
            left: shape.left,
            top: shape.top,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            background: `radial-gradient(circle at center, rgba(25, 239, 215, 0.8), rgba(25, 239, 215, 0))`,
            animationDelay: `${shape.delay}s`,
            animationDuration: `${shape.duration}s`,
            transform: `scale(${1 + Math.sin(Date.now() / 2000 + i) * 0.2})`,
          }}
        />
      ))}
      
      {/* Moving glow effect */}
      <div 
        className="absolute w-1/4 h-1/4 rounded-full blur-3xl opacity-20 transition-all duration-3000 ease-in-out"
        style={{ 
          background: 'radial-gradient(circle at center, #19efd7, transparent)',
          left: `${glowPosition.x}%`, 
          top: `${glowPosition.y}%` 
        }}
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className={`md:w-1/2 mb-12 md:mb-0 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="inline-block bg-gradient-to-r from-agr-accent via-agr-brightBlue to-white bg-clip-text text-transparent">
                  <span className={`inline-block transition-opacity duration-700 ${animatedText === 0 ? 'opacity-100' : 'opacity-0 absolute'}`}>
                    {taglines[0]}
                  </span>
                  <span className={`inline-block transition-opacity duration-700 ${animatedText === 1 ? 'opacity-100' : 'opacity-0 absolute'}`}>
                    {taglines[1]}
                  </span>
                  <span className={`inline-block transition-opacity duration-700 ${animatedText === 2 ? 'opacity-100' : 'opacity-0 absolute'}`}>
                    {taglines[2]}
                  </span>
                </span>
                <span className="text-white"> in the Digital Age</span>
              </h1>

              <p className={`text-lg md:text-xl text-gray-300 mb-8 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                American Global Re delivers advanced, customized insurance solutions that go beyond traditional coverage — because health insurance wasn't built to cover it all. We don't just respond to change — we drive it.
              </p>
              
              {/* Features list */}
              <div className={`mb-8 transition-all duration-700 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="flex items-center mb-3 hover:translate-x-2 transition-transform duration-300">
                  <CircleCheck className="h-5 w-5 text-agr-accent mr-2" />
                  <span className="text-gray-200">Customized Insurance Solutions</span>
                </div>
                <div className="flex items-center mb-3 hover:translate-x-2 transition-transform duration-300">
                  <CircleCheck className="h-5 w-5 text-agr-accent mr-2" />
                  <span className="text-gray-200">Innovative Risk Management</span>
                </div>
                <div className="flex items-center hover:translate-x-2 transition-transform duration-300">
                  <CircleCheck className="h-5 w-5 text-agr-accent mr-2" />
                  <span className="text-gray-200">World-Class Service</span>
                </div>
              </div>
              
              <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <Button asChild size="lg" className="bg-agr-accent text-agr-dark hover:bg-agr-accent/90 transition-all duration-300 transform hover:scale-105 relative overflow-hidden group">
                  <a href="#services">
                    <span className="relative z-10 flex items-center">
                      Explore Our Solutions 
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-agr-accent to-agr-brightBlue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10 transition-all duration-300 hover:scale-105 group">
                  <a href="#contact">
                    Talk to an Expert
                    <Star className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <div className={`md:w-1/2 flex justify-center md:justify-end transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Enhanced glow effects */}
              <div className="w-72 h-72 md:w-96 md:h-96 bg-gradient-to-tr from-agr-brightBlue via-[#7ceeff] to-agr-accent rounded-full opacity-30 absolute top-4 left-4 blur-2xl animate-pulse"></div>
              <div className="w-60 h-60 md:w-80 md:h-80 bg-gradient-to-br from-[#19efd7] to-[#7ceeff] rounded-full opacity-20 absolute -top-8 -right-8 blur-3xl"></div>
              
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 w-full max-w-xl shadow-lg transition-transform duration-500 hover:-rotate-1 hover:scale-105">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-white font-bold text-2xl bg-gradient-to-r from-white to-agr-accent bg-clip-text text-transparent">Innovative Solutions</div>
                </div>
                <div className="space-y-6">
                  <div 
                    className={`bg-white/5 rounded-lg p-5 transition-all duration-300 border border-white/5 hover:border-agr-accent/50 transform transition-all duration-500 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    onMouseEnter={() => setActiveFeature(0)}
                    onMouseLeave={() => setActiveFeature(null)}
                  >
                    <div className="flex items-center">
                      <div className={`text-agr-accent mr-3 transition-all duration-300 ${activeFeature === 0 ? 'scale-125' : ''}`}>
                        <ShieldCheck className="h-6 w-6" />
                      </div>
                      <div className="text-white font-medium mb-2 text-lg">Customized Coverage</div>
                    </div>
                    <p className="text-gray-300 text-sm">Tailored insurance solutions designed specifically for your business needs and employee requirements.</p>
                    {activeFeature === 0 && (
                      <div className="absolute inset-0 border border-agr-accent/50 rounded-lg animate-pulse pointer-events-none"></div>
                    )}
                  </div>
                  <div 
                    className={`bg-white/5 rounded-lg p-5 transition-all duration-300 border border-white/5 hover:border-agr-accent/50 transform transition-all duration-500 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    onMouseEnter={() => setActiveFeature(1)}
                    onMouseLeave={() => setActiveFeature(null)}
                  >
                    <div className="flex items-center">
                      <div className={`text-agr-accent mr-3 transition-all duration-300 ${activeFeature === 1 ? 'scale-125' : ''}`}>
                        <TrendingUp className="h-6 w-6" />
                      </div>
                      <div className="text-white font-medium mb-2 text-lg">Risk Mitigation</div>
                    </div>
                    <p className="text-gray-300 text-sm">Proactive strategies to identify and address potential vulnerabilities before they impact your business.</p>
                    {activeFeature === 1 && (
                      <div className="absolute inset-0 border border-agr-accent/50 rounded-lg animate-pulse pointer-events-none"></div>
                    )}
                  </div>
                  <div 
                    className={`bg-white/5 rounded-lg p-5 transition-all duration-300 border border-white/5 hover:border-agr-accent/50 transform transition-all duration-500 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    onMouseEnter={() => setActiveFeature(2)}
                    onMouseLeave={() => setActiveFeature(null)}
                  >
                    <div className="flex items-center">
                      <div className={`text-agr-accent mr-3 transition-all duration-300 ${activeFeature === 2 ? 'scale-125' : ''}`}>
                        <DollarSign className="h-6 w-6" />
                      </div>
                      <div className="text-white font-medium mb-2 text-lg w-full">Indemnity Insurance Providing Benefits to Employees</div>
                    </div>
                    <p className="text-gray-300 text-sm">Immediate cash payments to employees for qualified events.</p>
                    {activeFeature === 2 && (
                      <div className="absolute inset-0 border border-agr-accent/50 rounded-lg animate-pulse pointer-events-none"></div>
                    )}
                  </div>
                </div>
                
                {/* Enhanced badge with animations */}
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-agr-accent to-agr-brightBlue text-agr-dark text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                  <span className="flex items-center">
                    <Star className="h-3 w-3 mr-1" />
                    Cutting-Edge
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
