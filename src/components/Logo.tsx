
import React from 'react';

interface LogoProps {
  className?: string;
  isScrolled?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", isScrolled = false }) => {
  return (
    <div className={`flex items-center ${className} relative group`}>
      <div className="relative">
        <img 
          src="/lovable-uploads/22d0b6e7-5cb4-4394-9b9b-d6e95943f1d6.png" 
          alt="AmericanGlobalRe Logo" 
          className="h-8 md:h-12 relative z-10 transition-all duration-300 group-hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Logo;
