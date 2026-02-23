import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  ArrowRight,
} from 'lucide-react';

import logo from '@/assets/logo.png';
const footerLinks = {
  services: [
    { name: 'Our Products', href: '/products' },
    { name: 'Industries', href: '/industries' },
    { name: 'All Services', href: '/services' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Partners', href: '/partners' },
    { name: 'Contact', href: '/contact' },
    { name: 'Gallery', href: '/gallery' },
  ],
};

export default function Footer() {
  return (
   <footer className="relative bg-gradient-to-b from-[#1e3a8a] to-[#172554] text-blue-100 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-primary/10 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">

        {/* MAIN TOP SECTION */}
        <div className="py-16 flex flex-col lg:flex-row items-start gap-10">

          {/* LEFT SIDE - COMPANY INFO */}
          <div className="max-w-md mx-6">
            <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <img
                src={logo}
                alt="PS Associates Logo"
                className="w-10 h-10 rounded-lg object-cover"
              />
              
            </motion.div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-white">PS Associates</span>
              <span className="text-xs text-blue-200 hidden sm:block">IT Hardware & Manpower</span>
            </div>
          </Link>

            <p className="text-blue-200 mt-4 mb-6">
              PS Associates delivers timely, high-quality technology solutions
              tailored to diverse industry domains. For over 28 years, we have
              provided ERP solutions, enterprise consulting, IT infrastructure
              services, and data center solutions.
            </p>

            <div className="space-y-3">
              <a href="mailto:bdm1@psaitech.com" className="flex items-center gap-3 text-blue-200 hover:text-orange-400 transition-colors group">
                <Mail className="w-4 h-4" />
                <span className="text-sm">support@psaitech.com</span>
              </a>

              <a href="mailto:hr@psaitech.com" className="flex items-center gap-3 text-blue-200 hover:text-orange-400 transition-colors group">
                <Mail className="w-4 h-4" />
                <span className="text-sm">bdm1@psaitech.com</span>
              </a>

              <a href="mailto:support@psaitech.com" className="flex items-center gap-3 text-blue-200 hover:text-orange-400 transition-colors group">
                <Mail className="w-4 h-4" />
                <span className="text-sm">hr@psaitech.com</span>
              </a>

              <a href="tel:+917554222624" className="flex items-center gap-3 text-blue-200 hover:text-orange-400 transition-colors group">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91-755-4222624</span>
              </a>

              <div className="flex items-start gap-3 text-blue-200 hover:text-orange-400">
                <MapPin className="w-4 h-4 mt-1" />
                <span className="text-sm">
                  1A, Ist Floor, Metro Plaza, E-5,
                  <br />
                  Arera Colony, Bhopal, M.P., India,
                  <br />
                  PIN CODE 462016
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - LINKS */}
          <div className="flex gap-16 ml-auto mr-4">

            {/* PRODUCTS & SERVICES */}
            <div>
              <h4 className="font-semibold text-white mb-4">
                Products & Services
              </h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-blue-200 hover:text-orange-400 transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* COMPANY */}
            <div>
              <h4 className="font-semibold text-white mb-4">
                Company
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-blue-200 hover:text-orange-400 transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="py-6 border-t border-blue-500/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-blue-300">
            © {new Date().getFullYear()} PS Associates. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            {[
              { icon: Linkedin, href: 'https://www.linkedin.com/company/psassociates' },
              { icon: Twitter, href: 'https://x.com/psassociatesbpl' },
              { icon: Facebook, href: 'https://www.facebook.com/PSAssociatesBPL' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-blue-800 flex items-center justify-center text-blue-200 hover:bg-orange-500 hover:text-white transition-colors"
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
