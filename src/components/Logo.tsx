
import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

interface LogoProps {
  className?: string;
  onHero?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", onHero = false }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    if (onHero) {
      // Start animation after a short delay
      const timer = setTimeout(() => {
        setIsAnimating(true);
      }, 800);
      
      return () => clearTimeout(timer);
    }
  }, [onHero]);

  return (
    <div className={`flex items-center ${className}`}>
      {onHero ? (
        <div className="relative">
          <img 
            src="/lovable-uploads/99dba7e6-e58c-4ac8-8a44-50a041349f4f.png" 
            alt="AGReinsurance Logo" 
            className="h-8 md:h-10"
          />
          <div className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-agr-accent via-agr-brightBlue to-agr-accent transition-all duration-1000 ${isAnimating ? 'opacity-100' : 'opacity-0'}`} 
            style={{
              transform: isAnimating ? 'scaleX(1)' : 'scaleX(0)',
              transformOrigin: 'left'
            }}
          />
          {isAnimating && (
            <div className="absolute -top-1 right-0 text-agr-accent animate-pulse">
              <Sparkles className="h-4 w-4" />
            </div>
          )}
        </div>
      ) : (
        <img 
          src="/lovable-uploads/99dba7e6-e58c-4ac8-8a44-50a041349f4f.png" 
          alt="AGReinsurance Logo" 
          className="h-8 md:h-10"
        />
      )}
    </div>
  );
};

export default Logo;
