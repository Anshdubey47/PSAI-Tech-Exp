import React from 'react';
import { clsx } from 'clsx';

interface GlassCardProps {
  className?: string;
  glowColor?: 'blue' | 'red' | 'green' | 'none';
  light?: boolean;
  onClick?: () => void;
  hoverEffect?: boolean;
  children: React.ReactNode;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  className = '',
  glowColor = 'none',
  light = false,
  onClick,
  hoverEffect = true,
  children,
}) => {
  const glowClasses = {
    none: '',
    blue: 'hover:shadow-2xl hover:shadow-brand-blue/10 hover:border-brand-blue/30',
    red: 'hover:shadow-2xl hover:shadow-brand-red/10 hover:border-brand-red/30',
    green: 'hover:shadow-2xl hover:shadow-brand-green/10 hover:border-brand-green/30',
  };

  return (
    <div
      onClick={onClick}
      className={clsx(
        light ? 'glass-panel-light' : 'glass-panel',
        'rounded-3xl p-8 relative overflow-hidden transition-all duration-500',
        hoverEffect && 'card-lift',
        glowClasses[glowColor],
        onClick && 'cursor-pointer',
        className
      )}
    >
      {/* Decorative Glow inside the card */}
      {glowColor === 'blue' && (
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-full blur-2xl pointer-events-none" />
      )}
      {glowColor === 'red' && (
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-full blur-2xl pointer-events-none" />
      )}
      {glowColor === 'green' && (
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 rounded-full blur-2xl pointer-events-none" />
      )}
      
      <div className="relative z-10 h-full flex flex-col">{children}</div>
    </div>
  );
};
