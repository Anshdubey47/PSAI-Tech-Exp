import React from 'react';
import { clsx } from 'clsx';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'white';
  showArrow?: boolean;
  glow?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  showArrow = false,
  glow = false,
  className = '',
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue disabled:opacity-50 disabled:pointer-events-none';
  
  const variants = {
    primary: 'bg-brand-blue text-white hover:bg-blue-500 hover:shadow-lg hover:shadow-brand-blue/20 border border-brand-blue/30',
    secondary: 'bg-white/5 text-white hover:bg-white/10 border border-white/10 backdrop-blur-md',
    ghost: 'bg-transparent text-gray-300 hover:text-white hover:bg-white/5',
    white: 'bg-white text-brand-dark hover:bg-gray-100 hover:shadow-lg hover:shadow-white/10 border border-white',
  };

  return (
    <button
      className={clsx(
        baseStyles,
        variants[variant],
        glow && variant === 'primary' && 'shadow-[0_0_20px_rgba(37,99,235,0.35)] hover:shadow-[0_0_25px_rgba(37,99,235,0.55)]',
        glow && variant === 'white' && 'shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.35)]',
        className
      )}
      {...props}
    >
      <span className="flex items-center gap-2">
        {children}
        {showArrow && (
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </span>
    </button>
  );
};
