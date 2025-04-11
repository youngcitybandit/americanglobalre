
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-agr-dark pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-agr-accent via-agr-brightBlue to-transparent"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 opacity-10 bg-gradient-to-tr from-agr-accent to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Managing <span className="gradient-text">Risk for Employer Benefits</span> in the Digital Age
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                American Global delivers advanced, customized insurance solutions that go beyond traditional coverage — because health insurance wasn't built to cover it all. We don't just respond to change — we drive it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="btn-gradient">
                  <a href="#services">Explore Our Solutions <ArrowRight className="ml-2 h-5 w-5" /></a>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
                  <a href="#contact">Talk to an Expert</a>
                </Button>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 bg-gradient-to-tr from-agr-brightBlue to-agr-accent rounded-full opacity-20 absolute top-4 left-4 blur-2xl"></div>
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 w-full max-w-md shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-white font-bold">Small Business Coverage</div>
                  <div className="text-agr-accent">Comprehensive</div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-sm text-gray-400 mb-1">Medical Stop-Loss</div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-agr-brightBlue to-agr-accent h-2 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-sm text-gray-400 mb-1">Small Business Protection</div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-agr-brightBlue to-agr-accent h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-sm text-gray-400 mb-1">Telehealth Services</div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-agr-brightBlue to-agr-accent h-2 rounded-full" style={{ width: '88%' }}></div>
                    </div>
                  </div>
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
