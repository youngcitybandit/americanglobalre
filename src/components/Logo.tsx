
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/abeece20-c360-4f09-a3e4-f4b6fcd650a3.png" 
        alt="AGReinsurance Logo" 
        className="h-8 md:h-10"
      />
    </div>
  );
};

export default Logo;
