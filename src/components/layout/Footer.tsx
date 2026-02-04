import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ArrowRight } from 'lucide-react';

const footerLinks = {
  products: [
    { name: 'Desktops', href: '/products?category=desktops' },
    { name: 'Laptops', href: '/products?category=laptops' },
    { name: 'Printers', href: '/products?category=printers' },
    { name: 'Accessories', href: '/products?category=accessories' },
  ],
  services: [
    { name: 'IT Hardware Supply', href: '/products' },
    { name: 'Manpower Services', href: '/manpower' },
    { name: 'Government Projects', href: '/projects' },
    { name: 'AMC Services', href: '/services' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'Certifications', href: '/about#certifications' },
    { name: 'Contact', href: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-background border-t border-border overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-primary/10 via-transparent to-transparent blur-3xl pointer-events-none" />
      
      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 group mb-6">
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">PS</span>
                </div>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary to-accent blur-lg opacity-50" />
              </div>
              <div>
                <span className="font-bold text-xl text-foreground">PS Associates</span>
                <p className="text-xs text-muted-foreground">Madhya Pradesh's Premier IT Partner</p>
              </div>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Leading provider of IT hardware solutions and skilled manpower services to government organizations across Madhya Pradesh since 2005.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto: sales@psaitech.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm"> sales@psaitech.com</span>
              </a>
              <a href="mailto: hr@psaitech.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm"> hr@psaitech.com</span>
              </a>
              <a href="tel:+91 (0755) 422-9295" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm">+91-755-4222624</span>
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm">1A, Ist Floor, Metro Plaza, E-5,<br /> Arera Colony, Bhopal, M.P., India,<br /> PIN CODE 462016</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} PS Associates. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-3">
            {[
              { icon: Linkedin, href: 'https://www.linkedin.com/company/xtranetindia/' },
              { icon: Twitter, href: 'https://x.com/xtranetindia' },
              { icon: Facebook, href: 'https://www.facebook.com/xtranetindia' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/20 transition-colors"
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
