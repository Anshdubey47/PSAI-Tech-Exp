
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Users, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';

import AnimatedNumber from './AnimatedNumber';
import heroGlass from '@/assets/images/heroglass.png';

const stats = [
  { value: 25, suffix: '+', label: 'Years Experience', icon: Shield },
  { value: 500, suffix: '+', label: 'Projects Delivered', icon: Monitor },
  { value: 2000, suffix: '+', label: 'Manpower Deployed', icon: Users },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      <motion.div
  className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,200,255,0.15),transparent_60%)] z-0"
  animate={{ opacity: [0.6, 1, 0.6] }}
  transition={{ duration: 6, repeat: Infinity }}
/>
  {/* Background Image */}
  <motion.img
  src={heroGlass}
  alt="Futuristic Glass Structures"
  animate={{
    scale: [1, 1.05, 1],
    x: [0, -20, 0],
  }}
  transition={{
    duration: 20,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute inset-0 w-full h-full object-cover z-0"
/>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#021027]/80 via-[#021027]/70 to-[#021027]/95 z-10" />

  {/* Glow Effects */}
  <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[150px] z-0 animate-pulse" />
  <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-[150px] z-0 animate-pulse" />
    
      {/* Content */}
<div className="container-custom relative z-20 pt-20">
  <div className="max-w-4xl mx-auto text-center backdrop-blur-sm bg-white/5 border border-white/10 rounded-3xl p-10">  
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Your Trusted IT Solutions Partner
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
  initial={{ opacity: 0, y: 60 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="text-5xl md:text-7xl font-bold leading-tight mb-6"
>
  <span className="text-white">Building the</span>
  <br />
  <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
    Future of Enterprise IT
  </span>
</motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10"
          >
            We provide enterprise-grade IT hardware and highly skilled manpower services to power critical operations. From desktops to dedicated engineers, we enable seamless performance and long-term value.
          </motion.p>

          {/* CTA Buttons */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          > */}
            {/* <Link to="/products">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="glow-button text-primary-foreground flex items-center gap-2"
              >
                Explore Products
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 rounded-lg border border-border text-foreground font-semibold hover:bg-secondary transition-colors"
              >
                Get a Quote
              </motion.button>
            </Link>
          </motion.div> */}

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="p-6 text-center backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl shadow-xl"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <AnimatedNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  className="text-3xl font-bold gradient-text mb-1"
                />
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
