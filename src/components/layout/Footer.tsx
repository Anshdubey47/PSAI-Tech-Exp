import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { contacts } from '../../data/content';

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050507] text-gray-400 pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-red/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-5 flex flex-col items-start pr-0 lg:pr-8">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20 bg-brand-dark">
                <img
                  src="/logo.png"
                  alt="PS Associates Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-bold text-lg text-white group-hover:text-brand-blue transition-colors duration-300">
                PS Associates
              </span>
            </Link>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
              PS Associates delivers timely, high-quality technology solutions tailored to diverse industry domains. For over 28 years, we have provided ERP solutions, enterprise consulting, and IT infrastructure services.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {contacts.socials.map((social, idx) => {
                const Icon = social.name === 'LinkedIn' ? LinkedinIcon : social.name === 'Twitter' ? TwitterIcon : FacebookIcon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/5 hover:border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-105"
                    aria-label={`Visit PS Associates on ${social.name}`}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Solutions & Directory */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="font-bold text-xs uppercase tracking-widest text-white mb-6">
              Solutions & Services
            </h4>
            <ul className="space-y-4">
              <li>
                <Link to="/solutions" className="text-sm text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-1.5 group">
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-brand-blue" />
                  Our Products
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-1.5 group">
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-brand-blue" />
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-sm text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-1.5 group">
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-brand-blue" />
                  Ecosystem Partners
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-1.5 group">
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-brand-blue" />
                  Company Story
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-1.5 group">
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-brand-blue" />
                  Moments & Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Matrix */}
          <div className="lg:col-span-4 flex flex-col">
            <h4 className="font-bold text-xs uppercase tracking-widest text-white mb-6">
              Contact Matrix
            </h4>
            <div className="space-y-5">
              <div className="flex flex-col gap-2">
                {contacts.emails.map((e, index) => (
                  <a
                    key={index}
                    href={`mailto:${e.email}`}
                    className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group"
                  >
                    <Mail className="w-4 h-4 text-brand-blue group-hover:text-white transition-colors shrink-0" />
                    <span>{e.email}</span>
                  </a>
                ))}
              </div>

              <a
                href={`tel:${contacts.phone.replace(/[^0-9+]/g, '')}`}
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group"
              >
                <Phone className="w-4 h-4 text-brand-blue group-hover:text-white transition-colors shrink-0" />
                <span>{contacts.phone}</span>
              </a>

              <div className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-brand-blue mt-1 shrink-0" />
                <span className="leading-relaxed">
                  1A, 1st Floor, Metro Plaza, E-5,<br />
                  Arera Colony, Bhopal, M.P., India,<br />
                  PIN CODE 462016
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs font-semibold tracking-wider text-gray-500 uppercase">
          <p>© {currentYear} PS Associates. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-white transition-colors duration-300">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white transition-colors duration-300">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
