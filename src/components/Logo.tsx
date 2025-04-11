
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
          src="/lovable-uploads/99dba7e6-e58c-4ac8-8a44-50a041349f4f.png" 
          alt="AGReinsurance Logo" 
          className="h-8 md:h-10 relative z-10 transition-all duration-300 group-hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Logo;
