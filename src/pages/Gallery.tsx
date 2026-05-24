import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { gallery } from '../data/content';

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<typeof gallery[number] | null>(null);

  return (
    <div className="relative">
      
      {/* BANNER SECTION (DARK THEME) */}
      <section className="relative pt-36 pb-16 overflow-hidden">
        {/* Glow overlay */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <SectionHeader
            badge="Corporate Archives"
            title="Moments That"
            titleGradient="Define Us"
            description="A visual journey capturing prestigious corporate milestones, state leadership meetings, and enterprise coordination events over 25+ years."
            align="center"
          />
        </div>
      </section>

      {/* GALLERY GRID SECTION (MATTE WHITE THEME) */}
      <section className="py-20 bg-[#fafafa] text-brand-dark min-h-screen relative overflow-hidden border-t border-black/5">
        <div className="absolute inset-0 bg-grid-light opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {gallery.map((item, idx) => (
              <ScrollReveal 
                key={idx} 
                direction="up" 
                delay={idx * 50}
                className="group cursor-pointer rounded-3xl overflow-hidden relative border border-black/5 bg-[#09090b]/5 shadow-sm"
              >
                <div 
                  onClick={() => setSelectedImage(item)}
                  className="relative h-64 sm:h-72 w-full overflow-hidden bg-black/10"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Glassmorphic Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6 text-left">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <ZoomIn className="w-7 h-7 text-brand-blue mb-3" />
                      <h3 className="font-extrabold text-white text-lg leading-snug">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Overlay */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#09090b]/95 backdrop-blur-xl p-4 md:p-8 transition-opacity duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full max-w-5xl bg-[#0e0e12] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 z-10 w-11 h-11 bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center rounded-full text-white transition-colors backdrop-blur-md"
              aria-label="Close image lightbox"
            >
              <X className="w-5 h-5" />
            </button>
            
            {/* Image Viewer */}
            <div className="relative w-full h-[55vh] md:h-[65vh] flex items-center justify-center p-6 bg-black/40">
              <img
                src={selectedImage.img}
                alt={selectedImage.title}
                className="max-w-full max-h-full object-contain rounded-xl"
              />
            </div>

            {/* Description Bar */}
            <div className="w-full bg-[#111116] p-8 border-t border-white/5 text-left">
              <p className="text-[10px] font-black text-brand-blue uppercase tracking-widest mb-1.5">
                Archived Record
              </p>
              <h3 className="text-xl md:text-2xl font-extrabold text-white tracking-tight">
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
export default Gallery;
