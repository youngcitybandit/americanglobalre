
import React, { useState, useEffect } from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  const [isGlowing, setIsGlowing] = useState(false);
  
  useEffect(() => {
    // Start the glow effect after component mounts
    setIsGlowing(true);
    
    // Create a pulsing glow effect
    const glowInterval = setInterval(() => {
      setIsGlowing(prev => !prev);
    }, 2000);
    
    return () => clearInterval(glowInterval);
  }, []);

  return (
    <div className={`flex items-center ${className} relative group`}>
      {/* Glow effect */}
      <div 
        className={`absolute -inset-1 rounded-lg bg-gradient-to-r from-agr-accent via-agr-brightBlue to-agr-accent opacity-70 blur-lg transition-opacity duration-1000 ${
          isGlowing ? 'opacity-70' : 'opacity-30'
        } group-hover:opacity-80`}
      ></div>
      
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
