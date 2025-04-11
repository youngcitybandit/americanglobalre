
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/d1120e29-7e22-481e-a3a7-7ac147942961.png" 
        alt="AGReinsurance Logo" 
        className="h-8 md:h-10"
      />
    </div>
  );
};

export default Logo;
