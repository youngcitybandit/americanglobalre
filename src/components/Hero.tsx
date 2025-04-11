
import { ArrowRight, ShieldCheck, TrendingUp, DollarSign } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-agr-dark pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Enhanced animated background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-agr-accent via-agr-brightBlue to-transparent animate-pulse"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 opacity-10 bg-gradient-to-tr from-agr-accent to-transparent rounded-full blur-3xl animate-pulse"></div>
      
      {/* Floating circles in background */}
      <div className="absolute top-1/4 left-1/4 w-12 h-12 rounded-full bg-agr-accent/20 animate-bounce duration-700 hidden md:block"></div>
      <div className="absolute bottom-1/4 right-1/3 w-16 h-16 rounded-full bg-agr-brightBlue/20 animate-bounce delay-300 duration-1000 hidden md:block"></div>
      <div className="absolute top-1/2 right-1/4 w-8 h-8 rounded-full bg-agr-accent/20 animate-bounce delay-500 duration-700 hidden md:block"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
                Managing <span className="text-agr-accent">Risk for Employer Benefits</span> in the Digital Age
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 animate-fade-in" style={{animationDelay: "200ms"}}>
                American Global delivers advanced, customized insurance solutions that go beyond traditional coverage — because health insurance wasn't built to cover it all. We don't just respond to change — we drive it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{animationDelay: "400ms"}}>
                <Button asChild size="lg" className="bg-agr-accent text-agr-dark hover:bg-agr-accent/90 group transition-all duration-300 transform hover:scale-105">
                  <a href="#services">
                    Explore Our Solutions 
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                  <a href="#contact">Talk to an Expert</a>
                </Button>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative transform hover:scale-105 transition-transform duration-500">
              {/* Enhanced glow effect */}
              <div className="w-72 h-72 md:w-96 md:h-96 bg-gradient-to-tr from-agr-brightBlue via-[#7ceeff] to-agr-accent rounded-full opacity-20 absolute top-4 left-4 blur-2xl animate-pulse"></div>
              <div className="w-60 h-60 md:w-80 md:h-80 bg-gradient-to-br from-[#19efd7] to-[#7ceeff] rounded-full opacity-10 absolute -top-8 -right-8 blur-3xl animate-pulse" style={{animationDelay: "300ms"}}></div>
              
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 w-full max-w-md shadow-lg transform transition-all duration-500 hover:shadow-teal-500/20 hover:shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-white font-bold text-2xl bg-gradient-to-r from-white to-agr-accent bg-clip-text text-transparent">Innovative Solutions</div>
                </div>
                <div className="space-y-6">
                  <div className="bg-white/5 hover:bg-white/10 rounded-lg p-5 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg border border-white/5 hover:border-agr-accent/20 group">
                    <div className="flex items-center">
                      <ShieldCheck className="text-agr-accent mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                      <div className="text-white font-medium mb-2 text-lg">Customized Coverage</div>
                    </div>
                    <p className="text-gray-300 text-sm">Tailored insurance solutions designed specifically for your business needs and employee requirements.</p>
                  </div>
                  <div className="bg-white/5 hover:bg-white/10 rounded-lg p-5 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg border border-white/5 hover:border-agr-accent/20 group">
                    <div className="flex items-center">
                      <TrendingUp className="text-agr-accent mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                      <div className="text-white font-medium mb-2 text-lg">Risk Mitigation</div>
                    </div>
                    <p className="text-gray-300 text-sm">Proactive strategies to identify and address potential vulnerabilities before they impact your business.</p>
                  </div>
                  <div className="bg-white/5 hover:bg-white/10 rounded-lg p-5 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg border border-white/5 hover:border-agr-accent/20 group">
                    <div className="flex items-center">
                      <DollarSign className="text-agr-accent mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                      <div className="text-white font-medium mb-2 text-lg">Cash Benefits to Employees</div>
                    </div>
                    <p className="text-gray-300 text-sm">Immediate cash payments to employees for qualified events.</p>
                  </div>
                </div>
                
                {/* Floating badge */}
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-agr-accent to-agr-brightBlue text-agr-dark text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                  Cutting-Edge
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
