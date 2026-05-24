import React from 'react';
import { MapPin, Target, Eye, Shield, Award, Quote } from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { GlassCard } from '../components/ui/GlassCard';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { 
  timeline, 
  missionPoints, 
  valueCards, 
  offices, 
  certificates, 
  leaders, 
  mdMessage 
} from '../data/content';

export const About: React.FC = () => {
  const stepColors = [
    {
      borderColor: "border-blue-500",
      glowBg: "group-hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:border-blue-500",
      lineColor: "from-blue-500 to-transparent",
      textColor: "group-hover:text-blue-600",
      topBorder: "border-t-4 border-t-blue-500",
      iconColor: "text-blue-500"
    },
    {
      borderColor: "border-green-500",
      glowBg: "group-hover:shadow-[0_0_20px_rgba(22,163,74,0.2)] hover:border-green-500",
      lineColor: "from-green-500 to-transparent",
      textColor: "group-hover:text-green-600",
      topBorder: "border-t-4 border-t-green-500",
      iconColor: "text-green-500"
    },
    {
      borderColor: "border-orange-500",
      glowBg: "group-hover:shadow-[0_0_20px_rgba(249,115,22,0.2)] hover:border-orange-500",
      lineColor: "from-orange-500 to-transparent",
      textColor: "group-hover:text-orange-600",
      topBorder: "border-t-4 border-t-orange-500",
      iconColor: "text-orange-500"
    },
    {
      borderColor: "border-red-500",
      glowBg: "group-hover:shadow-[0_0_20px_rgba(220,38,38,0.2)] hover:border-red-500",
      lineColor: "from-red-500 to-transparent",
      textColor: "group-hover:text-red-600",
      topBorder: "border-t-4 border-t-red-500",
      iconColor: "text-red-500"
    }
  ];

  // Map value card icons by index or label
  const valueIcons = [
    <Target className="w-6 h-6 text-brand-blue" />,
    <Eye className="w-6 h-6 text-brand-green" />,
    <Shield className="w-6 h-6 text-brand-red" />,
    <Award className="w-6 h-6 text-brand-blue" />
  ];

  return (
    <div className="relative">
      
      {/* HEADER SECTION (DARK THEME) */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        {/* Glow overlay */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <SectionHeader
            badge="Corporate Narrative"
            title="We offer timely, high-quality"
            titleGradient="technology solutions"
            description="PS Associates has provided a wide range of IT and IT-enabled services, including ERP, application development, enterprise consulting, and data center solutions for mission-critical environments."
            align="center"
            className="mb-20"
          />

          {/* Story & Purpose Dual Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left: Narrative */}
            <div className="lg:col-span-6 space-y-10 text-left">
              <ScrollReveal direction="left">
                <h3 className="text-2xl font-extrabold text-white mb-4">Our Origin Story</h3>
                <p className="text-gray-400 leading-relaxed text-base font-medium">
                  As a customer-focused company, we create value as a client-centered business to assist organizations in expanding and becoming more efficient. We have built enduring relationships with our customers to provide cost-effective quality solutions on time.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={150}>
                <h3 className="text-2xl font-extrabold text-white mb-4">Our Objective</h3>
                <p className="text-gray-400 leading-relaxed text-base font-medium">
                  To fulfill the promise of technology and human ingenuity. We assist our clients in becoming the best versions of themselves, ensuring their critical infrastructure operates seamlessly day-in and day-out.
                </p>
              </ScrollReveal>
            </div>

            {/* Right: Interactive Pillars Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {valueCards.map((item, idx) => (
                <ScrollReveal key={idx} direction="right" delay={idx * 80}>
                  <GlassCard glowColor="blue" className="group text-left flex flex-col items-start">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                      {valueIcons[idx]}
                    </div>
                    <h4 className="font-extrabold text-white text-lg mb-2">{item.label}</h4>
                    <p className="text-gray-400 text-xs leading-relaxed font-semibold">{item.text}</p>
                  </GlassCard>
                </ScrollReveal>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* CORE MISSION STATEMENT (MATTE WHITE THEME) */}
      <section className="py-28 bg-[#fafafa] text-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-light opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <ScrollReveal direction="up" className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-black/5 border border-black/10 text-brand-blue text-xs font-bold uppercase tracking-widest mb-6">
              Quality Commitment
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-brand-dark mb-6">
              Mission Statement: Commitment to Quality
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto font-medium">
              Our mission is to deliver cost-effective and high-quality solutions tailored to organizations of all sizes. We are dedicated to enhancing our clients' efficiency by providing the best products and services that cater to their specific needs and challenges.
            </p>
          </ScrollReveal>

          {/* Mission Point rows */}
          <div className="max-w-5xl mx-auto grid gap-4">
            {missionPoints.map((point, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 50}>
                <div className="glass-panel-light px-8 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-2xl border border-black/5 hover:border-black/10 transition-colors duration-300">
                  <div className="font-extrabold text-lg text-brand-dark shrink-0 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-brand-blue rounded-full" />
                    {point.title}
                  </div>
                  <div className="text-sm text-gray-500 font-semibold md:max-w-xl text-left md:text-right">
                    {point.description}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* CORE VALUES EXPOSITION (DARK THEME) */}
      <section className="py-28 bg-[#09090b] text-white relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <ScrollReveal direction="up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-blue text-xs font-bold uppercase tracking-widest">
              Foundational Ethics
            </span>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={100}>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Core Values: Innovation and Trust
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-medium">
              At the heart of PS Associates are our foundational core values: <span className="font-extrabold text-brand-blue">innovation</span>, <span className="font-extrabold text-brand-green">trust</span>, <span className="font-extrabold text-brand-red">service</span>, and <span className="font-extrabold text-white">growth</span>. We prioritize delivering innovative solutions and reliable services while fostering a culture of trust with our stakeholders. This approach enables us to maintain long-lasting relationships and drive sustainable growth together.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* MANAGING DIRECTOR MESSAGE (DARK THEME WITH MD PHOTO) */}
      <section className="py-28 bg-[#09090b] relative overflow-hidden border-t border-white/5">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-brand-red/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* MD Portrait */}
            <div className="lg:col-span-5 flex justify-center">
              <ScrollReveal direction="left" className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden border-[8px] border-white/5 shadow-2xl">
                <img
                  src={mdMessage.src}
                  alt={mdMessage.name}
                  className="w-full h-full object-cover object-[50%_15%]"
                />
              </ScrollReveal>
            </div>

            {/* MD Letter */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <ScrollReveal direction="right">
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-blue text-xs font-bold uppercase tracking-widest mb-2">
                  Leadership Voice
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  Message from the <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-green to-brand-red">
                    Managing Director
                  </span>
                </h2>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={150}>
                <div className="glass-panel rounded-3xl p-8 md:p-10 border border-white/5 relative">
                  <Quote className="w-14 h-14 text-brand-blue/10 absolute top-4 left-4" />
                  <div className="relative z-10 space-y-6">
                    {mdMessage.quote.split('\n\n').map((paragraph, pIdx) => (
                      <p key={pIdx} className="text-gray-300 text-sm md:text-base leading-relaxed font-medium">
                        {paragraph}
                      </p>
                    ))}
                    
                    <div className="pt-6 border-t border-white/5 text-xs font-black tracking-widest uppercase text-brand-blue">
                      — {mdMessage.name} <span className="text-gray-500 font-semibold block sm:inline mt-1 sm:mt-0">({mdMessage.role})</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* LEADERSHIP TEAM (MATTE WHITE THEME) */}
      <section className="py-28 bg-[#fafafa] text-brand-dark relative overflow-hidden border-t border-black/5">
        <div className="absolute inset-0 bg-grid-light opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <SectionHeader
            badge="The Team"
            title="Leadership"
            titleGradient="Team"
            description="Our professional management team orchestrates operations nationwide with focus and domain-level competency."
            align="center"
            light={true}
            className="mb-20"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 80}>
                <div className="glass-panel-light p-6 text-center rounded-3xl border border-black/5 hover:border-black/10 hover:shadow-xl transition-all duration-300 flex flex-col items-center group">
                  <div className="w-36 h-44 rounded-2xl overflow-hidden bg-gray-200 border-2 border-black/5 shadow-md mb-6 relative">
                    <img
                      src={leader.src}
                      alt={leader.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-extrabold text-brand-dark text-lg mb-1">{leader.name}</h3>
                  <p className="text-brand-blue text-xs font-bold uppercase tracking-wide">{leader.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS (DARK THEME) */}
      <section className="py-28 bg-[#09090b] relative overflow-hidden border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            badge="Process Excellence"
            title="Quality"
            titleGradient="Certifications"
            description="Our credentials guarantee security, robust operations, and continuous service delivery parameter validation."
            align="center"
            className="mb-20"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {certificates.map((cert, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 80}>
                <GlassCard glowColor="blue" className="!p-5 hover:bg-white/10 flex items-center justify-center group h-44">
                  <div className="w-full h-full rounded-2xl overflow-hidden bg-white flex items-center justify-center p-5">
                    <img
                      src={cert.src}
                      alt={cert.name}
                      className="w-full max-h-32 object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE growth & development (MATTE WHITE THEME) */}
      <section className="py-28 bg-[#fafafa] text-brand-dark relative overflow-hidden border-t border-black/5">
        <div className="absolute inset-0 bg-grid-light opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <SectionHeader
            badge="Company Evolution"
            title="Growth and"
            titleGradient="Development"
            description="A timeline of milestones showcasing consistent evolution, adaptation, and sustained excellence over the last 28 years."
            align="center"
            light={true}
            className="mb-24"
          />

          {/* Timeline Process Map */}
          <div className="max-w-6xl mx-auto relative pt-4">
            {/* Horizontal Line connecting nodes (Desktop only) */}
            <div className="absolute top-[48px] left-[12.5%] right-[12.5%] h-[4px] bg-black/5 hidden md:block z-0 overflow-hidden rounded-full">
              <div className="h-full bg-gradient-to-r from-blue-500 via-green-500 to-red-500 animate-timeline-line shadow-[0_0_8px_rgba(37,99,235,0.5)]" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {timeline.map((item, idx) => {
                const theme = stepColors[idx % 4];
                return (
                  <ScrollReveal key={idx} direction="up" delay={idx * 120} className="relative flex flex-col items-center group cursor-pointer text-center h-full">
                    {/* Glowing vertical line connecting circle to card for vertical/mobile layouts */}
                    <div className={`absolute top-12 left-1/2 -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b ${theme.lineColor} md:hidden z-0`} />

                    {/* Circle Node */}
                    <div className={`w-24 h-24 rounded-full bg-white border-2 ${theme.borderColor} flex flex-col items-center justify-center shadow-lg relative z-10 transition-all duration-500 group-hover:scale-110 ${theme.glowBg}`}>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Step {item.step}</span>
                      <span className="text-lg font-black text-brand-dark leading-none">{item.year}</span>
                      
                      {/* Decorative pulse ring on active hover */}
                      <span className={`absolute -inset-1.5 rounded-full border ${theme.borderColor}/20 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500`} />
                    </div>

                    {/* Description Card */}
                    <div className={`mt-8 w-full flex-1 p-6 rounded-2xl bg-white border border-black/5 hover:border-black/10 transition-all duration-500 text-center shadow-sm group-hover:shadow-md ${theme.topBorder} flex flex-col items-center justify-center`}>
                      <span className={`text-[10px] font-bold ${theme.textColor} uppercase tracking-wider mb-2`}>Milestone</span>
                      <p className="text-xs text-gray-500 leading-relaxed font-semibold transition-colors duration-300 group-hover:text-gray-700">
                        {item.description}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* OFFICE HUBS (DARK THEME) */}
      <section className="py-28 bg-[#09090b] relative overflow-hidden border-t border-white/5">
        <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            badge="Strategic Presence"
            title="Our Nationwide"
            titleGradient="Office Hubs"
            description="Connecting partners and projects seamlessly through regional support and specialized central coordination."
            align="center"
            className="mb-20"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {offices.map((office, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 80}>
                <GlassCard glowColor="blue" className="text-center group overflow-hidden !p-5">
                  <div className="overflow-hidden rounded-2xl mb-6 bg-black/60 h-44 flex items-center justify-center p-3 relative">
                    <MapPin className="w-10 h-10 text-brand-blue opacity-25 absolute" />
                    <img
                      src={office.img}
                      alt={office.city}
                      className="w-full h-full object-contain relative z-10 transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{office.city}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-semibold">{office.desc}</p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
export default About;
