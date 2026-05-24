import React from 'react';

export const NoiseOverlay: React.FC = () => {
  return (
    <div className="absolute inset-0 bg-noise pointer-events-none z-40 select-none" />
  );
};
