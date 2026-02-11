import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import AnimatedNumber from './AnimatedNumber';

const clients = [
  'Police Department',
  'Public Works Department',
  'Education Department',
  'Health Department',
  'Revenue Department',
  'BSNL',
  'Power Transmission',
  'Road Development Corporation',
  'Delhi Municipal Corporation',
  'Gujrat Tourism Development',
  'Agriculture Department',
  'Forest Department',
];

export default function ClientsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-16 relative overflow-hidden bg-secondary/30">
      <div className="absolute inset-0 tech-grid opacity-30" />

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
            Trusted by Leading
            <span className="gradient-text"> Public Sector Organizations</span>
          </h3>
          <p className="text-muted-foreground">
            Serving{' '}
            <AnimatedNumber value={130} suffix="+" className="inline-block" />
            {' '}departments and public institutions
          </p>
        </motion.div>

        {/* Scrolling Logos */}
        <div className="relative overflow-hidden">
          {/* Gradient Fade Left */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          {/* Gradient Fade Right */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
            className="flex gap-8 items-center"
          >
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client}-${index}`}
                className="flex-shrink-0 px-8 py-4 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm"
              >
                <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                  {client}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
