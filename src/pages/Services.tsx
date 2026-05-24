import React, { useState, useMemo } from 'react';
import { ArrowRight, Search, Layers, SlidersHorizontal } from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { services } from '../data/content';

export const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'it' | 'ai' | 'security' | 'infrastructure'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'it', name: 'IT Solutions' },
    { id: 'ai', name: 'AI & Automation' },
    { id: 'security', name: 'Security & Surveillance' },
    { id: 'infrastructure', name: 'Cloud & Infrastructure' },
  ] as const;

  // Filter and search services
  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
      const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            service.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="relative">
      
      {/* BANNER SECTION (DARK THEME) */}
      <section className="relative pt-36 pb-16 overflow-hidden">
        {/* Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-blue/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <SectionHeader
            badge="Directory Portfolio"
            title="Enterprise"
            titleGradient="Services"
            description="Our comprehensive suite of technology solutions powering digital transformation for government agencies and large-scale enterprises nationwide."
            align="center"
          />
        </div>
      </section>

      {/* FILTER & SERVICES GRID (MATTE WHITE THEME) */}
      <section className="py-20 bg-[#fafafa] text-brand-dark min-h-screen relative overflow-hidden border-t border-black/5">
        <div className="absolute inset-0 bg-grid-light opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Controls Bar (Filters & Search) */}
          <div className="flex flex-col lg:flex-row gap-6 justify-between items-center mb-16 pb-8 border-b border-black/5">
            
            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto overflow-x-auto lg:overflow-visible no-scrollbar pb-2 lg:pb-0">
              <div className="flex items-center gap-1.5 text-xs text-gray-500 font-bold uppercase tracking-wider mr-2 shrink-0">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filter:
              </div>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all shrink-0 ${
                    activeCategory === cat.id
                      ? 'bg-brand-blue text-white shadow-md shadow-brand-blue/15'
                      : 'bg-black/5 text-gray-600 hover:bg-black/10'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-80">
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-black/5 border border-black/5 rounded-full text-xs font-semibold text-brand-dark placeholder-gray-500 focus:outline-none focus:bg-white focus:border-brand-blue/40 transition-all shadow-inner"
              />
              <Search className="w-4 h-4 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2" />
            </div>


          </div>

          {/* Empty State */}
          {filteredServices.length === 0 && (
            <ScrollReveal direction="fade" className="text-center py-20">
              <Layers className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-brand-dark mb-1">No services found</h3>
              <p className="text-gray-500 text-sm">Try broadening your category filter or search query.</p>
            </ScrollReveal>
          )}

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <ScrollReveal key={service.id} direction="up" delay={idx * 40}>
                  <div className="glass-panel-light p-8 rounded-3xl border border-black/5 hover:border-black/15 card-lift h-full flex flex-col justify-between group relative overflow-hidden min-h-[300px]">
                    {/* Gradient background hover mesh */}
                    <div className={`absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-bl ${service.gradient} rounded-full opacity-5 group-hover:opacity-20 transition-opacity duration-500 blur-[60px] pointer-events-none`} />
                    
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${service.gradient} flex items-center justify-center text-gray-900 shadow-sm transform group-hover:scale-105 transition-transform duration-300`}>
                          <IconComponent className="w-5 h-5 opacity-90" />
                        </div>
                        <span className="text-black/5 font-black text-3xl group-hover:text-black/10 transition-colors duration-300">
                          {service.id}
                        </span>
                      </div>

                      <h3 className="text-xl font-extrabold text-brand-dark mb-3 group-hover:text-brand-blue transition-colors duration-300">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-500 text-sm leading-relaxed mb-8">
                        {service.desc}
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-black/5 pt-5 mt-auto">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        Domain Category / {service.category}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};
export default Services;
