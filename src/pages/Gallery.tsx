import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { X } from 'lucide-react';

/* ========== IMPORT IMAGES ========== */

import i1 from '@/assets/images/gallery/i1.png';
import i2 from '@/assets/images/gallery/i2.png';
import i3 from '@/assets/images/gallery/i3.png';
import i4 from '@/assets/images/gallery/i4.png';
import i5 from '@/assets/images/gallery/i5.png';
import i6 from '@/assets/images/gallery/i6.png';
import i7 from '@/assets/images/gallery/i7.png';
import i9 from '@/assets/images/gallery/i8.png';
import i8 from '@/assets/images/gallery/i9.png';
import i10 from '@/assets/images/gallery/i10.png';
import i11 from '@/assets/images/gallery/i11.png';
import i12 from '@/assets/images/gallery/i12.png';
import i13 from '@/assets/images/gallery/i13.png';
import i14 from '@/assets/images/gallery/i14.png';

/* ========== DATA ========== */

const gallery = [
  {
    img: i13,
    title: 'With Co-op Minister',
  },
  
  {
    img: i11,
    title: 'Welcoming CM of MP',
  },
  
  {
    img: i12,
    title: 'With Co-op Minister',
  },
  
  {
    img: i14,
    title: 'Installation of First ATM',
  },
  {
    img: i9,
    title: 'Conoration as BITOAA President',
  },
  {
    img: i8,
    title: 'BITOAA President',
  },
  {
    img: i10,
    title: 'BITOAA AGMs',
  },
  {
    img: i5,
    title: 'Tips about MP Krishi',
  },
  {
    img: i1,
    title: 'Edu. Minister of Ethiopia',
  },
  {
    img: i3,
    title: 'Meeting Co-op Minister',
  },
   {
    img: i6,
    title: 'Office Celebrations',
  },
  {
    img: i2,
    title: 'Wedding of Hon. JV Singh',
  },
 
  {
    img: i7,
    title: 'Meeting with CM of Madhya Pradesh',
  },
  
  
  
  
  
];

/* ========== ANIMATION ========== */

const itemAnim = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export default function Gallery() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <Layout>
      <section className="pt-32 pb-24 relative overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 tech-grid opacity-30" />

        <div className="container-custom relative z-10">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Gallery
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mb-5">
              Moments That <span className="gradient-text">Define Us</span>
            </h1>

            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A glimpse into our achievements, collaborations, celebrations,
              and milestones over the years.
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 mx-4 md:grid-cols-3 lg:grid-cols-3 gap-6"
          >
            {gallery.map((item, i) => (
              <motion.div
                key={i}
                variants={itemAnim}
                whileHover={{ scale: 1.05 }}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg"
                onClick={() => setSelected(item)}
              >
                {/* Image */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition" />

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition">
                  <h3 className="font-semibold text-sm">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ===== Lightbox Preview ===== */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative max-w-4xl w-full"
              >
                {/* Close */}
                <button
                  onClick={() => setSelected(null)}
                  className="absolute -top-12 right-0 text-white hover:text-primary transition"
                >
                  <X size={32} />
                </button>

                {/* Image */}
                <img
                  src={selected.img}
                  alt={selected.title}
                  className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
                />

                {/* Caption */}
                <div className="text-center text-white mt-4 text-lg font-medium">
                  {selected.title}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </section>
    </Layout>
  );
}
