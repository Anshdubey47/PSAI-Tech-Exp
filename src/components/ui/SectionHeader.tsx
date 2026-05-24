import React from 'react';
import { clsx } from 'clsx';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  titleGradient?: string;
  description?: string;
  align?: 'center' | 'left';
  className?: string;
  light?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  titleGradient,
  description,
  align = 'center',
  className = '',
  light = false,
}) => {
  return (
    <div
      className={clsx(
        'max-w-4xl flex flex-col',
        align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start',
        className
      )}
    >
      {badge && (
        <span
          className={clsx(
            'inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border backdrop-blur-md',
            light 
              ? 'bg-black/5 border-black/10 text-brand-blue'
              : 'bg-white/5 border-white/10 text-brand-blue'
          )}
        >
          {badge}
        </span>
      )}
      
      <h2
        className={clsx(
          'text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight',
          light ? 'text-brand-dark' : 'text-white'
        )}
      >
        {title}
        {titleGradient && (
          <>
            {' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-green to-brand-red">
              {titleGradient}
            </span>
          </>
        )}
      </h2>
      
      {description && (
        <p
          className={clsx(
            'text-lg md:text-xl leading-relaxed font-medium max-w-2xl',
            light ? 'text-gray-600' : 'text-gray-400'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};
