
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
          src="/lovable-uploads/f2b9246f-c52b-4b15-9f3e-08c754ff3227.png" 
          alt="AmericanGlobalRe Logo" 
          className="h-8 md:h-10 relative z-10 transition-all duration-300 group-hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Logo;
