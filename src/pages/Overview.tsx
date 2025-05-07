
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
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Tailored insurance solutions that protect your business, support your team with cash benefits, and proactively manage risk.
            </p>
            <Button 
              variant="outline" 
              className="border-agr-brightBlue text-agr-brightBlue hover:bg-agr-brightBlue hover:text-white transition-colors duration-300"
            >
              Log In
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Overview;
