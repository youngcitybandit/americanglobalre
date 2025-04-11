
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <span className="text-2xl font-bold">
        <span className="text-agr-blue">AG</span>
        <span className="text-agr-accent">Reinsurance</span>
      </span>
    </div>
  );
};

export default Logo;
