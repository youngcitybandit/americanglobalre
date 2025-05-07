
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  // If we're on the home page, use anchor links
  // Otherwise, redirect to home page with the appropriate hash
  const getLinkPath = (sectionId: string) => {
    return isHomePage ? `#${sectionId}` : `/#${sectionId}`;
  };

  return (
    <footer className="bg-agr-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="font-semibold text-lg mb-6 text-left">Quick Links</h3>
            <ul className="space-y-3 text-left">
              <li><Link to={getLinkPath('solutions')} className="text-gray-400 hover:text-white transition-colors">Solutions</Link></li>
              <li><Link to={getLinkPath('services')} className="text-gray-400 hover:text-white transition-colors">Coverage</Link></li>
              <li><Link to={getLinkPath('about')} className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to={getLinkPath('contact')} className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-6 text-left">Legal</h3>
            <ul className="space-y-3 text-left">
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookie-policy" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</Link></li>
              <li><Link to="/regulatory-info" className="text-gray-400 hover:text-white transition-colors">Regulatory Information</Link></li>
              <li><Link to="/disclaimer" className="text-gray-400 hover:text-white transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 American Global Reinsurance Company, Inc. An Allied Insurance Company. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
