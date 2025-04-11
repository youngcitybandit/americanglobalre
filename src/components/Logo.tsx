
import React, { useState, useEffect } from 'react';

interface LogoProps {
  className?: string;
  isScrolled?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", isScrolled = false }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    // Start the animation immediately
    setIsAnimating(true);
    
    // Create an animation interval that repeats
    const animationInterval = setInterval(() => {
      setIsAnimating(false);
      
      // Small delay before restarting the animation for a nice effect
      setTimeout(() => {
        setIsAnimating(true);
      }, 500);
    }, 4000); // Complete cycle every 4 seconds
    
    return () => {
      clearInterval(animationInterval);
    };
  }, []);

  return (
    <div className={`flex items-center ${className} relative group`}>
      {/* Glow effect - only show when not scrolled */}
      {!isScrolled && (
        <div 
          className={`absolute -inset-1 rounded-lg overflow-hidden transition-all duration-500 ${
            isAnimating ? 'opacity-70' : 'opacity-30'
          } group-hover:opacity-80`}
        >
          <div 
            className={`w-full h-full bg-gradient-to-r from-agr-accent via-agr-brightBlue to-agr-accent bg-[length:200%_100%] ${
              isAnimating ? 'animate-gradient-x' : ''
            }`}
            style={{
              animation: isAnimating ? 'gradientFlow 3s ease-in-out forwards' : 'none'
            }}
          />
        </div>
      )}
      
      <style jsx>{`
        @keyframes gradientFlow {
          0% {
            background-position: 0% 0%;
            filter: blur(5px);
          }
          100% {
            background-position: 100% 0%;
            filter: blur(10px);
          }
        }
      `}</style>
      
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
