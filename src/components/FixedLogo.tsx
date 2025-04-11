
import React from 'react';
import Logo from './Logo';

const FixedLogo = () => {
  return (
    <div className="fixed bottom-4 left-4 z-50">
      <Logo className="h-10 md:h-12" />
    </div>
  );
};

export default FixedLogo;
