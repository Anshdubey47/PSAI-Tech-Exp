import React, { useState, useMemo } from 'react';
import { Box, Search, SlidersHorizontal, ArrowUpRight } from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { products } from '../data/content';

export const Solutions: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'erp' | 'ai' | 'security' | 'document' | 'other'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'erp', name: 'ERP Systems' },
    { id: 'ai', name: 'AI Models' },
    { id: 'security', name: 'Security' },
    { id: 'document', name: 'Document Hubs' },
    { id: 'other', name: 'Other Platforms' },
  ] as const;

  // Filter and search products
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const getIconAnimationClass = (category: string) => {
    switch (category) {
      case 'ai':
        return 'group-hover:scale-110 group-hover:rotate-[6deg] transition-all duration-300';
      case 'erp':
        return 'group-hover:scale-110 group-hover:-translate-y-1 group-hover:rotate-[6deg] transition-all duration-300';
      case 'security':
        return 'group-hover:scale-115 group-hover:rotate-12 transition-all duration-300';
      case 'document':
        return 'group-hover:scale-110 group-hover:-translate-y-0.5 group-hover:rotate-[-6deg] transition-all duration-300';
      default:
        return 'group-hover:scale-110 group-hover:rotate-12 transition-all duration-300';
    }
  };

  return (
    <div className="relative">
      
      {/* BANNER HEADER SECTION (DARK THEME) */}
      <section className="relative pt-36 pb-16 overflow-hidden">
        {/* Glow overlay */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <SectionHeader
            badge="Product Catalog"
            title="Ecosystem"
            titleGradient="Platforms"
            description="Explore our proprietary digital frameworks engineered for high-availability database processing and secure information exchange."
            align="center"
          />
        </div>
      </section>

      {/* FILTER & PRODUCTS LISTING (MATTE WHITE THEME) */}
      <section className="py-20 bg-[#fafafa] text-brand-dark min-h-screen relative overflow-hidden border-t border-black/5">
        <div className="absolute inset-0 bg-grid-light opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Filter & Search Bar */}
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
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-black/5 border border-black/5 rounded-full text-xs font-semibold text-brand-dark placeholder-gray-500 focus:outline-none focus:bg-white focus:border-brand-blue/40 transition-all shadow-inner"
              />
              <Search className="w-4 h-4 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2" />
            </div>


          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <ScrollReveal direction="fade" className="text-center py-20">
              <Box className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-brand-dark mb-1">No products found</h3>
              <p className="text-gray-500 text-sm">Try broadening your category filter or search query.</p>
            </ScrollReveal>
          )}

          {/* Bento-Inspired Asymmetric Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {filteredProducts.map((product, idx) => {
              const IconComponent = product.icon;
              const animClass = getIconAnimationClass(product.category);
              const isFeatured = (activeCategory === 'all' && searchQuery === '') && (idx === 0 || idx === 5); // Large card visual interest
              
              return (
                <ScrollReveal 
                  key={product.id} 
                  direction="up" 
                  delay={idx * 30} 
                  className={isFeatured ? 'md:col-span-2 md:row-span-1' : ''}
                >
                  <div className={`glass-panel-light p-8 rounded-3xl border border-black/5 hover:border-black/15 card-lift h-full flex flex-col justify-between group relative overflow-hidden ${
                    isFeatured ? 'min-h-[350px]' : 'min-h-[290px]'
                  }`}>
                    {/* Mesh Glow Background */}
                    <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${product.gradient} rounded-bl-full opacity-5 group-hover:opacity-25 transition-opacity duration-700 blur-[50px] pointer-events-none`} />
                    
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <div className={`w-11 h-11 rounded-xl bg-gradient-to-tr ${product.gradient} flex items-center justify-center text-gray-900 shadow-sm transition-transform duration-300 ${animClass}`}>
                          <IconComponent className="w-5 h-5 opacity-90 animate-pulse-slow" />
                        </div>
                        <span className="text-black/5 font-black text-2xl group-hover:text-black/10 transition-colors duration-300">
                          {String(product.id).padStart(2, '0')}
                        </span>
                      </div>

                      <h3 className={`font-extrabold text-brand-dark mb-3 group-hover:text-brand-blue transition-colors duration-300 ${
                        isFeatured ? 'text-2xl lg:text-3xl' : 'text-lg'
                      }`}>
                        {product.title}
                      </h3>
                      
                      <p className={`text-gray-500 leading-relaxed ${
                        isFeatured ? 'text-base max-w-xl' : 'text-sm'
                      }`}>
                        {product.desc}
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-black/5 pt-5 mt-8">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        Protocol System / {product.category}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-black/5 group-hover:bg-brand-blue group-hover:text-white flex items-center justify-center transition-colors duration-300">
                        <ArrowUpRight className="w-4 h-4" />
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
export default Solutions;
