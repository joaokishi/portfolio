import React from 'react';

const GradientLine = ({ className = '', height = 'h-1', width = 'w-full' }) => {
  return (
    <div
      className={`${width} ${height} rounded-full ${className}`}
      style={{ background: 'var(--gradient-purple)' }}
    ></div>
  );
};

export default GradientLine;
