import React, { useState, useEffect } from 'react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { partners, clients } from '../data/content';

export const Partners: React.FC = () => {
  // Top 8 featured partners for the circular orbit visualization
  const orbitPartners = partners.slice(0, 8);
  
  const [selectedPartner, setSelectedPartner] = useState<typeof partners[number]>(partners[0]);
  const [orbitAngle, setOrbitAngle] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Slowly rotate the orbit in the background
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setOrbitAngle((prev) => (prev + 0.15) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="relative">
      
      {/* BANNER HEADER (DARK THEME) */}
      <section className="relative pt-36 pb-16 overflow-hidden">
        {/* Glow overlay */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-blue/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <SectionHeader
            badge="Ecosystem Integration"
            title="Trusted Technology"
            titleGradient="Partners"
            description="We collaborate with world-class technology leaders to engineer scalable, secure, and resilient enterprise infrastructures."
            align="center"
          />
        </div>
      </section>

      {/* SECTION 1: INTERACTIVE CIRCULAR ORBIT (DARK THEME) */}
      <section className="py-12 bg-[#09090b] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        
        {/* Glow background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
          
          <ScrollReveal direction="up" className="mb-8 text-center max-w-xl">
            <h2 className="text-xl font-bold text-white mb-2">Interactive Ecosystem Orbit</h2>
            <p className="text-sm text-gray-400 font-semibold">Hover to pause, click on any partner logo floating in the concentric orbit to view their integration role details.</p>
          </ScrollReveal>

          {/* Interactive Concentric Orbit Ring Box */}
          <div 
            className="relative w-full max-w-[650px] h-[450px] sm:h-[500px] md:h-[550px] flex items-center justify-center mb-12 scale-[0.65] min-[400px]:scale-[0.75] sm:scale-90 md:scale-100 origin-center transition-all duration-300"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            
            {/* Concentric Guide Rings */}
            <div className="absolute w-[440px] h-[440px] border border-dashed border-white/10 rounded-full pointer-events-none animate-spin-slow" style={{ animationDuration: '60s' }} />
            <div className="absolute w-[280px] h-[280px] border border-dashed border-white/10 rounded-full pointer-events-none animate-spin-slow" style={{ animationDuration: '40s', animationDirection: 'reverse' }} />
            
            {/* Center Focus Card (PS Associates Logo + Selected Partner Info) */}
            <div className="relative z-20 w-52 h-52 rounded-full glass-panel border border-brand-blue/20 flex flex-col items-center justify-center p-6 text-center shadow-[0_0_50px_rgba(37,99,235,0.15)] animate-pulse-slow">
              <div className="w-20 h-20 rounded-2xl border border-brand-blue/30 mb-3 bg-white flex items-center justify-center p-2 relative shadow-lg">
                <img
                  src={selectedPartner.logo}
                  alt={selectedPartner.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-extrabold text-sm text-white mb-1 line-clamp-1">{selectedPartner.name}</h3>
              <p className="text-[10px] text-brand-blue font-bold uppercase tracking-wider line-clamp-2 leading-relaxed px-1">
                {selectedPartner.desc}
              </p>
            </div>

            {/* Orbiting Partner Nodes */}
            {orbitPartners.map((partner, idx) => {
              // Calculate positioning coordinates around the circle
              const startAngle = (idx * 2 * Math.PI) / orbitPartners.length;
              const angleInRad = startAngle + (orbitAngle * Math.PI) / 180;
              const radius = 220; // Radius of orbit
              const x = Math.cos(angleInRad) * radius;
              const y = Math.sin(angleInRad) * radius;

              const isSelected = selectedPartner.name === partner.name;

              return (
                <div
                  key={idx}
                  className="absolute transition-transform duration-300 ease-out z-10"
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                >
                  <button
                    onClick={() => setSelectedPartner(partner)}
                    className={`animate-float-node w-14 h-14 rounded-full flex items-center justify-center p-2.5 transition-all duration-300 border focus:outline-none cursor-pointer shadow-md bg-white hover:bg-gray-50 ${
                      isSelected
                        ? 'border-brand-blue ring-4 ring-brand-blue/30 shadow-[0_0_25px_rgba(37,99,235,0.5)] scale-110 !z-30'
                        : 'border-white/20 hover:border-brand-blue/30'
                    }`}
                    style={{
                      animationDelay: `${idx * 0.4}s`,
                      animationDuration: `${3.5 + (idx % 3) * 0.8}s`
                    }}
                    title={partner.name}
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-contain"
                    />
                  </button>
                </div>
              );
            })}

            {/* Subtle inner nodes floating close */}
            {partners.slice(8, 12).map((partner, idx) => {
              const startAngle = (idx * 2 * Math.PI) / 4 + Math.PI / 4;
              const angleInRad = startAngle - (orbitAngle * 1.5 * Math.PI) / 180; // Rotates opposite way
              const radius = 140; // Closer radius
              const x = Math.cos(angleInRad) * radius;
              const y = Math.sin(angleInRad) * radius;

              const isSelected = selectedPartner.name === partner.name;

              return (
                <div
                  key={idx + 8}
                  className="absolute transition-transform duration-300 ease-out z-10"
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                >
                  <button
                    onClick={() => setSelectedPartner(partner)}
                    className={`animate-float-node w-11 h-11 rounded-full flex items-center justify-center p-2 transition-all duration-300 border focus:outline-none cursor-pointer shadow-md bg-white hover:bg-gray-50 ${
                      isSelected
                        ? 'border-brand-blue ring-4 ring-brand-blue/30 shadow-[0_0_20px_rgba(37,99,235,0.5)] scale-110 !z-30'
                        : 'border-white/20 hover:border-brand-blue/30'
                    }`}
                    style={{
                      animationDelay: `${(idx + 4) * 0.4}s`,
                      animationDuration: `${3 + (idx % 2) * 1}s`
                    }}
                    title={partner.name}
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-contain"
                    />
                  </button>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 2: FULL ALLIANCE DIRECTORY GRID (MATTE WHITE THEME) */}
      <section className="py-24 bg-[#fafafa] text-brand-dark border-t border-black/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-light opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          
          <SectionHeader
            badge="Alliance Directory"
            title="Technology Partner"
            titleGradient="Network"
            description="Our full cooperative network of hardware manufacturers, cloud hyper-scalers, and enterprise software engineering leaders."
            align="center"
            light={true}
            className="mb-20"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
            {partners.map((partner, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 30}>
                <div 
                  onClick={() => setSelectedPartner(partner)}
                  className="glass-panel-light p-6 rounded-3xl border border-black/5 hover:border-black/10 card-lift flex flex-col items-center text-center group cursor-pointer h-full justify-between min-h-[200px]"
                >
                  <div className="h-14 flex items-center justify-center mb-4">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-12 object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-brand-dark text-base mb-1 group-hover:text-brand-blue transition-colors duration-300">
                      {partner.name}
                    </h3>
                    <p className="text-gray-500 text-xs font-semibold leading-relaxed px-2">
                      {partner.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 3: CLIENTELE MATRIX (DARK THEME) */}
      <section className="py-24 bg-[#09090b] relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-red/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <SectionHeader
            badge="Enterprise Portfolio"
            title="Our Trusted"
            titleGradient="Clientele"
            description="Empowering government departments, banking institutions, and large-scale enterprises with absolute process integrity."
            align="center"
            className="mb-20"
          />

          {/* Client Logo Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center max-w-6xl mx-auto">
            {clients.map((client, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 25}>
                <div className="glass-panel p-4 h-24 rounded-2xl flex items-center justify-center border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-14 object-contain opacity-100 group-hover:scale-105 transition-all duration-300"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};
export default Partners;
