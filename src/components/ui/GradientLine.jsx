import React, { memo } from 'react';

/**
 * GradientLine Component:
 * A horizontal line with a gradient background.
 */
const GradientLine = memo(({ className = '', width = 'w-full' }) => {
  return (
    <div
      className={`h-0.5 ${width} ${className}`}
      style={{ background: 'var(--gradient-purple)', borderRadius: '1px' }}
    ></div>
  );
});
export default GradientLine;
