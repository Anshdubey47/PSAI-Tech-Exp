import React, { useEffect, useState, useRef } from 'react';
import { clsx } from 'clsx';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  delay?: number; // in ms
  duration?: number; // in ms
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 600,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Once visible, stop observing
            if (elementRef.current) {
              observer.unobserve(elementRef.current);
            }
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -50px 0px', // Trigger slightly before entering fully
      }
    );

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const directions = {
    fade: 'opacity-0',
    up: 'opacity-0 translate-y-8',
    down: 'opacity-0 -translate-y-8',
    left: 'opacity-0 translate-x-8',
    right: 'opacity-0 -translate-x-8',
  };

  const visibleClasses = 'opacity-100 translate-y-0 translate-x-0';

  const style = {
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  };

  return (
    <div
      ref={elementRef}
      style={style}
      className={clsx(
        'transition-all',
        isVisible ? visibleClasses : directions[direction],
        className
      )}
    >
      {children}
    </div>
  );
};
