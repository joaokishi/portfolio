import React from 'react';

const GradientLine = ({ className = '', width = 'w-full' }) => {
  return (
    <div 
      className={`h-0.5 ${width} ${className}`}
      style={{ 
        background: 'var(--gradient-purple)',
        borderRadius: '1px'
      }}
    ></div>
  );
};

export default GradientLine;
