import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { clsx } from 'clsx';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Partners', path: '/partners' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={clsx(
          'fixed left-0 right-0 z-50 transition-all duration-500 flex justify-center px-4',
          scrolled ? 'top-3 md:top-4' : 'top-5 md:top-6'
        )}
      >
        {/* Main Pill Wrapper */}
        <div
          className={clsx(
            'w-full max-w-6xl rounded-full glass-panel flex items-center justify-between transition-all duration-500 shadow-xl',
            scrolled 
              ? 'py-2 px-4 md:px-6 bg-brand-dark/80 border-white/10' 
              : 'py-3.5 px-6 md:px-8 bg-[#0a0f1c]/40 border-white/5'
          )}
        >
          {/* Logo Pill Section (Left) */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 md:w-10 md:h-10 rounded-full overflow-hidden border border-white/20 bg-brand-dark group-hover:scale-105 group-hover:border-brand-blue/50 transition-all duration-300">
              <img
                src="/logo.png"
                alt="PS Associates Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm md:text-base tracking-tight text-white group-hover:text-brand-blue transition-colors duration-300">
                PS Associates
              </span>
              <span className="text-[9px] md:text-[10px] text-gray-400 font-semibold tracking-wider uppercase -mt-0.5 hidden sm:inline-block">
                IT & Manpower
              </span>
            </div>
          </Link>

          {/* Links Section (Center) */}
          <nav className="hidden md:flex items-center gap-1 bg-white/5 border border-white/5 rounded-full p-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={clsx(
                    'relative px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300',
                    isActive 
                      ? 'text-white bg-white/10' 
                      : 'text-gray-400 hover:text-white'
                  )}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-brand-blue rounded-full shadow-[0_0_8px_rgba(37,99,235,0.8)]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA / Action Section (Right) */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-brand-blue text-white text-xs font-bold hover:bg-blue-500 hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-300 border border-brand-blue/30 group"
            >
              Get Started
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay Drawer */}
      <div
        className={clsx(
          'fixed inset-0 z-40 bg-brand-dark/95 backdrop-blur-2xl transition-all duration-500 flex flex-col justify-center px-8 md:hidden',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="absolute top-28 left-12 w-64 h-64 bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-28 right-12 w-64 h-64 bg-brand-red/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="flex flex-col gap-6 max-w-sm mx-auto w-full relative z-10">
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
                className={clsx(
                  'text-3xl font-extrabold tracking-tight transition-all duration-300 py-2 border-b border-white/5 flex items-center justify-between group',
                  mobileOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0',
                  isActive ? 'text-brand-blue' : 'text-gray-300 hover:text-white'
                )}
              >
                <span>{item.name}</span>
                <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-brand-blue" />
              </Link>
            );
          })}
          
          <Link
            to="/contact"
            className="mt-6 w-full py-4 rounded-full bg-brand-blue text-white font-bold text-center hover:bg-blue-500 transition-colors shadow-lg shadow-brand-blue/20"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </>
  );
};
