import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { NoiseOverlay } from '../ui/NoiseOverlay';

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col relative bg-[#09090b]">
      {/* Ambient backgrounds */}
      <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-brand-blue/5 to-transparent pointer-events-none -z-10" />
      
      {/* Noise texture overlay across all pages */}
      <NoiseOverlay />
      
      {/* Pill Navbar */}
      <Navbar />
      
      {/* Main Content Area */}
      <main className="flex-grow z-10 relative">{children}</main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};
