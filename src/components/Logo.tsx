
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/99dba7e6-e58c-4ac8-8a44-50a041349f4f.png" 
        alt="AGReinsurance Logo" 
        className="h-8 md:h-10"
      />
    </div>
  );
};

export default Logo;
