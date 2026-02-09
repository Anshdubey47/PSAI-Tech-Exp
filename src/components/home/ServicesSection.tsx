import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Monitor, Laptop, Printer, Users, Wrench, HeadphonesIcon, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Monitor,
    title: 'Application Development',
    description: 'High-performance application from leading brands, configured for government workloads.',
    href: '/products?category=desktops',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Laptop,
    title: 'Banking And Financial',
    description: 'Our solutions are designed to address the full spectrum of banking technology needs.',
    href: '/products?category=laptops',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Printer,
    title: 'Cloud And Infra',
    description: 'We can help you and your business with cloud adoption and implementation',
    href: '/products?category=printers',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Users,
    title: 'Data Analytics',
    description: 'We are a data and analytics firm that helps you use Data Visualization and Business Analytics',
    href: '/manpower',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Wrench,
    title: 'Managed Services',
    description: 'We provide IT infrastructure services that plans, designs and implements organizational IT strategies',
    href: '/services',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    icon: HeadphonesIcon,
    title: 'Call Center Services',
    description: '24/7 helpdesk and on-site support for all hardware and software issues.',
    href: '/services',
    color: 'from-pink-500 to-rose-500',
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={service.href}>
        <div className="glow-card p-6 h-full group cursor-pointer">
          {/* Icon */}
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} p-0.5 mb-5`}>
            <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
              <service.icon className="w-6 h-6 text-foreground" />
            </div>
          </div>

          {/* Content */}
          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {service.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            {service.description}
          </p>

          {/* Link */}
          <div className="flex items-center gap-1 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            Learn More <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ServicesSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 tech-grid opacity-50" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[128px]" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Complete IT Solutions 
            <br />
            <span className="gradient-text">Pursuing Excellence In Your Business</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From hardware procurement to skilled workforce deployment, we offer end-to-end IT solutions tailored for your organization.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
