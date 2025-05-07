
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Overview = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-agr-dark mb-6">Smart Coverage for Your Business and Team</h1>
            <p className="text-lg md:text-xl text-gray-600 mb-12">
              Tailored insurance solutions that protect your business, support your team with cash benefits, and proactively manage risk.
            </p>
            
            <Button 
              size="lg"
              className="bg-agr-brightBlue text-white hover:bg-agr-blue transition-transform duration-300 hover:scale-105 mb-16"
            >
              Login
            </Button>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-agr-brightBlue mb-4">Custom Solutions</h2>
                <p className="text-gray-600 mb-6">
                  We offer tailored insurance solutions designed specifically for your industry and business needs.
                </p>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-agr-brightBlue mr-2">✓</span>
                    <span>Industry-specific coverage plans</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-agr-brightBlue mr-2">✓</span>
                    <span>Flexible policy options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-agr-brightBlue mr-2">✓</span>
                    <span>Risk management consultation</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-agr-brightBlue mb-4">Comprehensive Coverage</h2>
                <p className="text-gray-600 mb-6">
                  Our coverage extends across multiple risk areas to provide complete protection for your business.
                </p>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-agr-brightBlue mr-2">✓</span>
                    <span>Property & casualty insurance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-agr-brightBlue mr-2">✓</span>
                    <span>Liability protection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-agr-brightBlue mr-2">✓</span>
                    <span>Business interruption coverage</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-agr-blue text-white p-10 rounded-lg shadow-lg max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">Employer Portal Access</h2>
              <p className="mb-8">
                Access your policies, claims, and account information through our secure online portal.
              </p>
              <Button 
                size="lg"
                className="bg-white text-agr-brightBlue hover:bg-gray-100 transition-transform duration-300 hover:scale-105"
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Overview;
