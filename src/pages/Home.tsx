import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';
import { 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Cloud, 
  Database, 
  Activity, 
  Lock, 
  ArrowUpRight, 
  CheckCircle2, 
  MessageSquare, 
  Star,
  Monitor,
  Laptop,
  Printer,
  Users,
  Wrench,
  Headphones,
  Shield,
  Cpu
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { GlassCard } from '../components/ui/GlassCard';
import { SectionHeader } from '../components/ui/SectionHeader';
import { AnimatedCounter } from '../components/ui/AnimatedCounter';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { products, partners } from '../data/content';

export const Home: React.FC = () => {
  // Cloud Section Nodes
  const cloudNodes = [
    { icon: <Cloud className="w-5 h-5" />, label: 'Edge CDN', desc: 'Global cache delivery' },
    { icon: <Database className="w-5 h-5" />, label: 'Data Lake', desc: 'Secure storage' },
    { icon: <Activity className="w-5 h-5" />, label: 'Analytics', desc: 'Deep insights' },
    { icon: <Lock className="w-5 h-5" />, label: 'IAM Security', desc: 'Role-based access' },
  ];

  // Services exactly as shown in the requested image
  const homeServices = [
    {
      id: "01",
      title: "Application Development",
      icon: Monitor,
      iconColor: "text-blue-500",
      iconBg: "bg-blue-500/10 border-blue-500/20",
      glowBg: "group-hover:bg-blue-500/5",
      desc: "High-performance application from leading brands, configured for government workloads."
    },
    {
      id: "02",
      title: "Banking And Financial",
      icon: Laptop,
      iconColor: "text-purple-500",
      iconBg: "bg-purple-500/10 border-purple-500/20",
      glowBg: "group-hover:bg-purple-500/5",
      desc: "Our solutions are designed to address the full spectrum of banking technology needs."
    },
    {
      id: "03",
      title: "Cloud And Infra",
      icon: Printer,
      iconColor: "text-orange-500",
      iconBg: "bg-orange-500/10 border-orange-500/20",
      glowBg: "group-hover:bg-orange-500/5",
      desc: "We can help you and your business with cloud adoption and implementation."
    },
    {
      id: "04",
      title: "Manpower Solutions",
      icon: Users,
      iconColor: "text-green-500",
      iconBg: "bg-green-500/10 border-green-500/20",
      glowBg: "group-hover:bg-green-500/5",
      desc: "We provide skilled IT professionals to support, manage, and scale your business operations."
    },
    {
      id: "05",
      title: "AMC (hardware)",
      icon: Wrench,
      iconColor: "text-blue-500",
      iconBg: "bg-blue-500/10 border-blue-500/20",
      glowBg: "group-hover:bg-blue-500/5",
      desc: "We deliver comprehensive annual maintenance services to ensure reliable and uninterrupted IT infrastructure."
    },
    {
      id: "06",
      title: "Call Center Services",
      icon: Headphones,
      iconColor: "text-pink-500",
      iconBg: "bg-pink-500/10 border-pink-500/20",
      glowBg: "group-hover:bg-pink-500/5",
      desc: "24/7 helpdesk and on-site support for all hardware and software issues."
    },
    {
      id: "07",
      title: "Cyber Security",
      icon: Shield,
      iconColor: "text-orange-500",
      iconBg: "bg-orange-500/10 border-orange-500/20",
      glowBg: "group-hover:bg-orange-500/5",
      desc: "Enterprise-grade protection including threat detection, firewall setup, and endpoint security."
    },
    {
      id: "08",
      title: "AI Enabled IT Services",
      icon: Cpu,
      iconColor: "text-blue-500",
      iconBg: "bg-blue-500/10 border-blue-500/20",
      glowBg: "group-hover:bg-blue-500/5",
      desc: "AI-driven IT automation, hybrid AI cloud platforms, intelligent infrastructure monitoring, and industry-specific AI solutions for optimized operations."
    }
  ];

  const bentoProducts = products.slice(0, 4);
  const IconComponent0 = bentoProducts[0]?.icon;
  const IconComponent1 = bentoProducts[1]?.icon;
  const IconComponent2 = bentoProducts[2]?.icon;
  const IconComponent3 = bentoProducts[3]?.icon;

  // Select key partners for the home page marquee
  const marqueePartners = partners.filter(p => 
    ['Intel', 'Dell', 'Canon', 'Microsoft', 'Amazon Web Services', 'Cisco', 'IBM', 'HP', 'Oracle', 'Red Hat', 'SAP', 'VMware'].includes(p.name)
  );

  // Testimonials Carousel
  const testimonials = [
    {
      quote: "PS Associates transformed our core infrastructure. Their ERP integration streamlined our logistics, saving thousands of hours.",
      author: "Rajesh Sharma",
      role: "Director of Operations",
      company: "State Logistics Corp",
      rating: 5
    },
    {
      quote: "The Visa Management System (VMS) they built handles millions of records with absolute precision. Their cybersecurity framework is top-notch.",
      author: "Lt. Col. A. K. Verma",
      role: "Chief Technology Advisor",
      company: "National Portal Services",
      rating: 5
    },
    {
      quote: "Their team's execution speed is unmatched. They deployed our low-code modern portal 3 months ahead of schedule with flawless security.",
      author: "Shweta Rao",
      role: "VP of Product Engineering",
      company: "AeroTech Solutions",
      rating: 5
    }
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="relative">
      
      {/* SECTION 1: HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20">
        {/* Animated Gradient mesh background */}
        <div className="absolute inset-0 bg-[#09090b] z-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/15 via-[#09090b] to-brand-red/10 animate-pulse-slow" />
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-blue/20 rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-brand-red/10 rounded-full blur-[150px] pointer-events-none" />
          
          {/* Optional video structure as requested */}
          {/* <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-30 z-0">
            <source src="/hero-background.mp4" type="video/mp4" />
          </video> */}
          
          {/* Futuristic grid lines overlay */}
          <div className="absolute inset-0 bg-grid z-0 opacity-40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-16 lg:mt-24">
          
          {/* Hero Left: Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <ScrollReveal direction="fade" delay={100}>
              <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-blue font-bold text-xs tracking-widest uppercase mb-8 shadow-sm">
                <ShieldCheck className="w-4 h-4" />
                <span>Next-Generation Enterprise Tech</span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={200}>
              <h1 className="text-5xl sm:text-6xl xl:text-7.5xl font-extrabold text-white leading-[1.08] tracking-tight mb-8">
                Transforming <br className="hidden sm:block" />
                Enterprises Through <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-green to-brand-red">
                  Intelligent Tech
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={300}>
              <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed mb-10 font-medium">
                Scalable ERP solutions, intelligent AI systems, robust cloud infrastructure, and digital transformation services powered by 28+ years of enterprise excellence.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={400}>
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <Link to="/solutions" className="inline-flex items-center w-full sm:w-auto">
                  <Button variant="primary" glow showArrow className="w-full justify-center group">
                    Explore Solutions
                  </Button>
                </Link>
                <Link to="/contact" className="inline-flex items-center w-full sm:w-auto">
                  <Button variant="secondary" className="w-full justify-center">
                    Get Started
                  </Button>
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={500} className="w-full">
              <div className="pt-10 mt-10 border-t border-white/5 flex flex-wrap items-center gap-6 text-gray-400 font-bold text-xs tracking-widest uppercase">
                <div className="flex items-center gap-2"><Zap className="w-4 h-4 text-brand-blue"/> AI Integration</div>
                <div className="flex items-center gap-2"><Cloud className="w-4 h-4 text-brand-blue"/> Cloud Architecture</div>
                <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-brand-blue"/> Zero Trust</div>
              </div>
            </ScrollReveal>
          </div>

          {/* Hero Right: Interactive Dashboard Visualizer */}
          <div className="lg:col-span-5 relative w-full h-[450px] flex items-center justify-center">
            <ScrollReveal direction="fade" delay={300} className="w-full h-full">
              
              {/* Central Glowing Shield */}
              <div className="absolute w-72 h-72 rounded-full border border-white/5 flex items-center justify-center animate-pulse-slow">
                <div className="absolute inset-0 bg-brand-blue/5 rounded-full blur-xl" />
                <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-brand-blue/20 to-brand-red/20 flex items-center justify-center border border-white/10 shadow-[0_0_50px_rgba(37,99,235,0.25)] relative">
                  <ShieldCheck className="w-20 h-20 text-white" />
                  
                  {/* Rotating Orbit Ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-brand-blue/30 animate-orbit" />
                </div>
              </div>

              {/* Floating Stat Card 1 (Top Right) */}
              <div className="absolute top-[5%] right-[5%] sm:right-[8%] animate-pulse-slow">
                <GlassCard className="!p-4 sm:!p-5 shadow-[0_0_30px_rgba(0,0,0,0.5)] border-brand-green/20" hoverEffect={false}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-green/10 border border-brand-green/30 flex items-center justify-center text-brand-green">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-0.5">Uptime SLA</p>
                      <p className="font-extrabold text-white text-base"><AnimatedCounter end={99} suffix=".99%" /></p>
                    </div>
                  </div>
                </GlassCard>
              </div>

              {/* Floating Stat Card 2 (Mid Left) */}
              <div className="absolute top-[40%] left-[-15%] sm:left-[-10%]">
                <GlassCard className="!p-4 sm:!p-5 shadow-[0_0_30px_rgba(0,0,0,0.5)] border-brand-blue/20" hoverEffect={false}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center text-brand-blue">
                      <Cloud className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-0.5">Established</p>
                      <p className="font-extrabold text-white text-base">28+ Years</p>
                    </div>
                  </div>
                </GlassCard>
              </div>

              {/* Floating Stat Card 3 (Bottom Right) */}
              <div className="absolute bottom-[5%] right-[5%] sm:right-[8%]">
                <GlassCard className="!p-4 sm:!p-5 shadow-[0_0_30px_rgba(0,0,0,0.5)] border-brand-red/20" hoverEffect={false}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-0.5">Enterprise Deployments</p>
                      <p className="font-extrabold text-white text-base"><AnimatedCounter end={500} suffix="+" /></p>
                    </div>
                  </div>
                </GlassCard>
              </div>

            </ScrollReveal>
          </div>

        </div>

      </section>

      {/* SECTION 2: ABOUT PREVIEW (LIGHT THEME BLOCK) */}
      <section className="py-28 bg-[#fafafa] text-brand-dark relative overflow-hidden">
        {/* Subtle grid lines */}
        <div className="absolute inset-0 bg-grid-light opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Vision Header & Intro */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <ScrollReveal direction="up">
                <span className="inline-block px-4 py-1.5 rounded-full bg-black/5 border border-black/10 text-brand-blue text-xs font-bold uppercase tracking-widest">
                  Our Identity
                </span>
              </ScrollReveal>
              
              <ScrollReveal direction="up" delay={100}>
                <h2 className="text-4xl sm:text-5xl font-extrabold text-brand-dark tracking-tight leading-tight">
                  Timely, high-quality technology solutions <span className="text-brand-blue">tailored to specific domains.</span>
                </h2>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={200}>
                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                  Founded in 1998, PS Associates has grown to become a premier IT and IT-enabled services provider, building enduring relationships based on quality and trust. We help organizations expand and achieve absolute operational efficiency.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={300}>
                <div className="grid grid-cols-2 gap-8 pt-4">
                  <div className="border-l-2 border-brand-blue pl-4">
                    <p className="text-4xl font-extrabold text-brand-dark">28+</p>
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mt-1">Years of Excellence</p>
                  </div>
                  <div className="border-l-2 border-brand-blue pl-4">
                    <p className="text-4xl font-extrabold text-brand-dark">4</p>
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mt-1">Office Hubs</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={400} className="pt-4">
                <Link to="/about">
                  <Button variant="white" className="!text-brand-dark hover:bg-black/5 group shadow-none border-black/10">
                    Read Company Story
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </ScrollReveal>
            </div>

            {/* Right Column: Values Grid preview */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {[
                { label: 'Mission', text: 'Empower government and enterprises with reliable technology.', icon: <CheckCircle2 className="w-5 h-5 text-brand-blue" /> },
                { label: 'Strategy', text: 'Deliver customized, cost-effective solutions with zero compromises.', icon: <CheckCircle2 className="w-5 h-5 text-brand-green" /> },
                { label: 'Values', text: 'Integrity, quality, and commitment to long-term partnerships.', icon: <CheckCircle2 className="w-5 h-5 text-brand-red" /> },
                { label: 'Certifications', text: 'ISO 9001, GeM Seller, and CMMI aligned practices.', icon: <CheckCircle2 className="w-5 h-5 text-brand-blue" /> }
              ].map((value, idx) => (
                <ScrollReveal key={idx} direction="up" delay={idx * 100}>
                  <div className="glass-panel-light p-6 rounded-2xl flex flex-col items-start gap-4 border border-black/5 hover:border-black/10 transition-all duration-300">
                    <div className="p-2.5 rounded-xl bg-black/5 flex items-center justify-center">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-brand-dark text-base mb-1.5">{value.label}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed font-semibold">{value.text}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2.5: GOVERNMENT INTEGRATION BANNER */}
      <section className="relative pt-28 pb-20 overflow-hidden flex items-center justify-center bg-[#121214]">
        {/* Background Image with Zoom Effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 pointer-events-none scale-105"
          style={{ 
            backgroundImage: "url('/images/VidhanSabha.jpeg')",
          }}
        />
        
        {/* Ambient overlay to darken the assembly image for text readability */}
        <div className="absolute inset-0 bg-black/70 pointer-events-none z-0" />

        {/* Futuristic grid overlay */}
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none z-0" />

        {/* Seamless edge gradients */}
        {/* Top fade (blends the previous light section #fafafa into the dark banner) */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#fafafa] to-transparent pointer-events-none z-0" />
        
        {/* Bottom fade (blends the dark banner image completely into the solid #121214 background of the banner) */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#121214] via-[#121214]/80 to-transparent pointer-events-none z-0" />

        {/* Bottom divider line (partition) to separate from the services section */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-10" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <ScrollReveal direction="up" delay={100}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-[11px] font-bold uppercase tracking-widest">
              Authorized Distribution Partner
            </span>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200} className="flex justify-center">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-white/5 border border-white/10 p-2 flex items-center justify-center shadow-[0_0_50px_rgba(220,38,38,0.25)] hover:scale-105 transition-transform duration-500">
              <img 
                src="/images/mpvidhansabha.png" 
                alt="Madhya Pradesh State Emblem" 
                className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={300}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-2xl mx-auto drop-shadow-md">
              Official Hardware Distribution Partner to <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-blue to-white">
                MP Vidhan Sabha
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={400}>
            <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto font-medium leading-relaxed">
              PS Associates is honored to engineer, deploy, and maintain high-resilience IT hardware systems for the Legislative Assembly of Madhya Pradesh.
            </p>
          </ScrollReveal>
        </div>
      </section>
      {/* SECTION 2.75: PARTNER LOGO MARQUEE (LIGHT THEME DIVIDER BLOCK) */}
      <section className="py-12 bg-[#fafafa] border-y border-black/5 relative overflow-hidden select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">
            Trusted Technology Partners & Integrations
          </p>
          
          <div className="flex overflow-hidden gap-16 w-full relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-20 before:bg-gradient-to-r before:from-[#fafafa] before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:bottom-0 after:w-20 after:bg-gradient-to-l after:from-[#fafafa] after:to-transparent after:z-10">
            <div className="flex shrink-0 justify-around gap-16 min-w-full animate-marquee">
              {marqueePartners.map((partner, idx) => (
                <div key={idx} className="h-10 w-28 flex items-center justify-center filter grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-full max-w-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
            <div className="flex shrink-0 justify-around gap-16 min-w-full animate-marquee" aria-hidden="true">
              {marqueePartners.map((partner, idx) => (
                <div key={`dup-${idx}`} className="h-10 w-28 flex items-center justify-center filter grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-full max-w-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICES PREVIEW */}
      <section className="pt-20 pb-28 bg-[#09090b] relative overflow-hidden">
        {/* Glow overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-[180px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <SectionHeader
            badge="Featured Capabilities"
            title="Enterprise"
            titleGradient="Services"
            description="Explore our core specialized domains. Delivering absolute scale, efficiency, and robust infrastructure for government and corporations."
            align="center"
            className="mb-20"
          />

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homeServices.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <ScrollReveal key={service.id} direction="up" delay={idx * 50}>
                  <Link to="/services" className="block h-full">
                    <GlassCard 
                      glowColor="blue" 
                      className="h-full flex flex-col group relative overflow-hidden transition-all duration-500 border border-white/5 hover:border-white/10 hover:bg-white/5"
                    >
                      <div className={`absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 ${service.glowBg} pointer-events-none blur-2xl`} />
                      
                      <div className="flex justify-between items-start mb-6 relative z-10">
                        <div className={`w-12 h-12 rounded-xl border ${service.iconBg} flex items-center justify-center transition-all duration-300 group-hover:scale-105`}>
                          <IconComponent className={`w-5 h-5 ${service.iconColor}`} />
                        </div>
                        <span className="text-white/10 font-black text-2xl relative -top-1">{service.id}</span>
                      </div>

                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-brand-blue transition-colors duration-300 relative z-10">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow relative z-10 font-medium">
                        {service.desc}
                      </p>

                      <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue group-hover:text-white transition-colors duration-300 mt-auto relative z-10">
                        <span>Learn More</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </GlassCard>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <ScrollReveal direction="up">
              <Link to="/services">
                <Button variant="secondary" className="group">
                  View All 18 Services
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* SECTION 4: PRODUCT SHOWCASE (BENTO GRID) */}
      <section className="py-28 bg-[#fafafa] text-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-light opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <SectionHeader
            badge="Proprietary Ecosystems"
            title="Next-Gen"
            titleGradient="Platforms"
            description="Explore our state-of-the-art proprietary frameworks engineered to optimize governance and enterprise data workflows."
            align="center"
            light={true}
            className="mb-20"
          />

          {/* Bento Grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Bento Box 1: Large Featured (Columns 1 & 2) */}
            <ScrollReveal direction="up" className="md:col-span-2">
              <div className="glass-panel-light p-8 lg:p-10 rounded-3xl border border-black/5 hover:border-black/10 transition-all duration-500 card-lift h-full flex flex-col justify-between group min-h-[380px] relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${bentoProducts[0].gradient} rounded-bl-full opacity-10 group-hover:opacity-30 transition-opacity duration-700 blur-[80px]`} />
                
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-tr ${bentoProducts[0].gradient} flex items-center justify-center text-gray-900 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                      {IconComponent0 && <IconComponent0 className="w-5 h-5 opacity-90 animate-pulse-slow" />}
                    </div>
                  </div>
                  <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-[10px] font-bold uppercase tracking-wider mb-6">
                    Featured Platform
                  </div>
                  <h3 className="text-3xl font-extrabold text-brand-dark mb-4 group-hover:text-brand-blue transition-colors duration-300">
                    {bentoProducts[0].title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed max-w-xl">
                    {bentoProducts[0].desc}
                  </p>
                </div>

                <div className="mt-12 flex items-center justify-between border-t border-black/5 pt-6">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Protocol 01 / Smart Lockers</span>
                  <Link to="/solutions" className="w-10 h-10 rounded-full bg-black/5 hover:bg-brand-blue hover:text-white flex items-center justify-center transition-colors duration-300">
                    <ArrowUpRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Bento Box 2: Visa Management (Column 3) */}
            <ScrollReveal direction="up" delay={100}>
              <div className="glass-panel-light p-8 rounded-3xl border border-black/5 hover:border-black/10 transition-all duration-500 card-lift h-full flex flex-col justify-between group min-h-[380px] relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${bentoProducts[1].gradient} rounded-bl-full opacity-10 group-hover:opacity-30 transition-opacity duration-700 blur-[60px]`} />
                
                <div>
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-tr ${bentoProducts[1].gradient} flex items-center justify-center text-gray-900 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 mb-6`}>
                    {IconComponent1 && <IconComponent1 className="w-5 h-5 opacity-90 animate-pulse-slow" />}
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-blue transition-colors duration-300">
                    {bentoProducts[1].title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {bentoProducts[1].desc}
                  </p>
                </div>

                <div className="mt-8 border-t border-black/5 pt-6 flex justify-between items-center">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Protocol 02</span>
                  <Link to="/solutions" className="text-brand-blue hover:text-brand-dark transition-colors duration-300">
                    <ArrowUpRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Bento Box 3: XERP (Column 1) */}
            <ScrollReveal direction="up" delay={150}>
              <div className="glass-panel-light p-8 rounded-3xl border border-black/5 hover:border-black/10 transition-all duration-500 card-lift h-full flex flex-col justify-between group min-h-[350px] relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${bentoProducts[2].gradient} rounded-bl-full opacity-10 group-hover:opacity-30 transition-opacity duration-700 blur-[60px]`} />
                
                <div>
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-tr ${bentoProducts[2].gradient} flex items-center justify-center text-gray-900 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1 group-hover:rotate-[6deg] mb-6`}>
                    {IconComponent2 && <IconComponent2 className="w-5 h-5 opacity-90 animate-pulse-slow" />}
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-blue transition-colors duration-300">
                    {bentoProducts[2].title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {bentoProducts[2].desc}
                  </p>
                </div>

                <div className="mt-8 border-t border-black/5 pt-6 flex justify-between items-center">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Protocol 03</span>
                  <Link to="/solutions" className="text-brand-blue hover:text-brand-dark transition-colors duration-300">
                    <ArrowUpRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Bento Box 4: X-Sign Digital Signature (Columns 2 & 3) */}
            <ScrollReveal direction="up" delay={200} className="md:col-span-2">
              <div className="glass-panel-light p-8 lg:p-10 rounded-3xl border border-black/5 hover:border-black/10 transition-all duration-500 card-lift h-full flex flex-col justify-between group min-h-[350px] relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${bentoProducts[3].gradient} rounded-bl-full opacity-10 group-hover:opacity-30 transition-opacity duration-700 blur-[80px]`} />
                
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-tr ${bentoProducts[3].gradient} flex items-center justify-center text-gray-900 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                      {IconComponent3 && <IconComponent3 className="w-5 h-5 opacity-90 animate-pulse-slow" />}
                    </div>
                  </div>
                  <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-[10px] font-bold uppercase tracking-wider mb-6">
                    Digital Signature Compliance
                  </div>
                  <h3 className="text-3xl font-extrabold text-brand-dark mb-4 group-hover:text-brand-blue transition-colors duration-300">
                    {bentoProducts[3].title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed max-w-xl">
                    {bentoProducts[3].desc}
                  </p>
                </div>

                <div className="mt-12 flex items-center justify-between border-t border-black/5 pt-6">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Protocol 04 / E-Sign</span>
                  <Link to="/solutions" className="w-10 h-10 rounded-full bg-black/5 hover:bg-brand-blue hover:text-white flex items-center justify-center transition-colors duration-300">
                    <ArrowUpRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

          </div>

          <div className="mt-16 text-center">
            <ScrollReveal direction="up">
              <Link to="/solutions">
                <Button variant="white" className="!text-brand-dark hover:bg-black/5 border-black/10 group shadow-none">
                  View All 16 Products
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* SECTION 5: ENTERPRISE CLOUD PREVIEW (DARK SECTION) */}
      <section className="py-28 bg-[#09090b] text-white relative overflow-hidden">
        {/* Background gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-red/5 via-[#09090b] to-[#09090b]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Animated Cloud Visualization */}
            <div className="relative h-[400px] flex items-center justify-center">
              {/* Central Cloud Node */}
              <div className="relative z-20 w-28 h-28 rounded-full bg-gradient-to-br from-brand-blue to-brand-red flex items-center justify-center shadow-[0_0_50px_rgba(37,99,235,0.3)] animate-pulse-slow">
                <Cloud className="w-12 h-12 text-white" />
              </div>

              {/* Connecting Nodes */}
              {cloudNodes.map((node, i) => {
                const angle = (i * 2 * Math.PI) / cloudNodes.length;
                const radius = 130; // Radius in pixels
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                return (
                  <div
                    key={i}
                    className="absolute flex flex-col items-center gap-1.5"
                    style={{ transform: `translate(${x}px, ${y}px)` }}
                  >
                    <div className="w-12 h-12 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 flex items-center justify-center text-brand-blue shadow-lg">
                      {node.icon}
                    </div>
                    <span className="text-[10px] font-bold text-gray-400 tracking-wide uppercase">{node.label}</span>
                  </div>
                );
              })}
              
              {/* Radar sweep lines */}
              <div className="absolute w-72 h-72 border border-white/5 rounded-full pointer-events-none" />
              <div className="absolute w-96 h-96 border border-white/5 rounded-full pointer-events-none" />
            </div>

            {/* Text Copy */}
            <div className="text-left space-y-6">
              <ScrollReveal direction="up">
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-blue text-xs font-bold uppercase tracking-widest">
                  Infrastructure
                </span>
              </ScrollReveal>
              
              <ScrollReveal direction="up" delay={100}>
                <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  Infinite Scale. <br /><span className="text-brand-blue">Zero Friction.</span>
                </h2>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={200}>
                <p className="text-base text-gray-400 leading-relaxed">
                  Deploy applications on high-availability enterprise-grade cloud systems. Designed for security, multi-region redundancy, and automatic auto-scaling parameters to keep your work flow fluid.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={300}>
                <ul className="grid grid-cols-2 gap-4">
                  {['Global Edge CDN', 'Auto-scaling Kubernetes', 'Serverless Compute', 'Real-time Threat Monitoring'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-sm text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-semibold">{item}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={400} className="pt-4">
                <Link to="/services">
                  <Button variant="primary" glow showArrow>
                    Explore Architecture
                  </Button>
                </Link>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6: TESTIMONIALS (AUTO SLIDER) */}
      <section className="py-28 bg-[#fafafa] text-brand-dark relative overflow-hidden border-t border-black/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          <ScrollReveal direction="up" className="mb-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-black/5 border border-black/10 text-brand-blue text-xs font-bold uppercase tracking-widest">
              Trust & Execution
            </span>
          </ScrollReveal>

          {/* Testimonial Panel */}
          <div className="min-h-[280px] flex flex-col justify-center items-center">
            <ScrollReveal direction="fade" className="space-y-8">
              <div className="flex justify-center gap-1">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-blue text-brand-blue" />
                ))}
              </div>
              
              <blockquote className="text-2xl md:text-3xl font-extrabold text-brand-dark tracking-tight leading-relaxed max-w-3xl mx-auto">
                "{testimonials[activeTestimonial].quote}"
              </blockquote>
              
              <div className="pt-4">
                <p className="font-black text-brand-dark text-lg uppercase tracking-wider">
                  {testimonials[activeTestimonial].author}
                </p>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-1">
                  {testimonials[activeTestimonial].role} — <span className="text-brand-blue">{testimonials[activeTestimonial].company}</span>
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-12">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className={clsx(
                  'w-2 h-2 rounded-full transition-all duration-300',
                  activeTestimonial === idx ? 'w-6 bg-brand-blue' : 'bg-gray-300'
                )}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 7: DUAL CONTACT CTA */}
      <section className="py-28 bg-[#09090b] text-white relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-blue/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-10">
          
          <ScrollReveal direction="up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-blue text-xs font-bold uppercase tracking-widest">
              Join Progress
            </span>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100}>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Let's Build the <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-green to-brand-red">Future Together</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <p className="text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
              Connect with our technology consultants today to strategize your upcoming initiatives and infrastructure modernizations.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={300} className="pt-6">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button variant="primary" glow className="w-full justify-center">
                  Schedule Consultation
                </Button>
              </Link>
              <a href="mailto:support@psaitech.com" className="w-full sm:w-auto">
                <Button variant="secondary" className="w-full justify-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Send Email Query
                </Button>
              </a>
            </div>
          </ScrollReveal>

        </div>
      </section>

    </div>
  );
};
