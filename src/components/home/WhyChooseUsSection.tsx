import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Clock, ShieldCheck, ThumbsUp, TrendingUp, Headphones } from 'lucide-react';
import AnimatedNumber from './AnimatedNumber';

const features = [
  {
    icon: Award,
    title: '25+ Years Experience',
    description: 'Deep expertise in serving  IT needs since 2015.',
  },
  {
    icon: ShieldCheck,
    title: 'GeM & GFR Compliant',
    description: 'All products and services compliant with government procurement norms.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: '98% on-time project completion rate across all contracts.',
  },
  {
    icon: ThumbsUp,
    title: 'Quality Assured',
    description: 'ISO certified processes ensuring consistent quality standards.',
  },
  {
    icon: TrendingUp,
    title: 'Competitive Pricing',
    description: 'Best-in-class rates through direct OEM partnerships.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock technical support .',
  },
];

const stats = [
  { value: 200, label: 'Projects Completed', suffix: '+' },
  { value: 200, label: 'Govt. Departments', suffix: '+' },
  { value: 2000, label: 'Manpower Deployed', suffix: '+' },
  { value: 100, label: 'Annual Turnover', prefix: '₹', suffix: 'Cr+' },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors"
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
        <feature.icon className="w-6 h-6 text-primary" />
      </div>
      <div>
        <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
        <p className="text-sm text-muted-foreground">{feature.description}</p>
      </div>
    </motion.div>
  );
}

export default function WhyChooseUsSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 tech-grid opacity-30" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-primary/10 via-transparent to-transparent" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              ref={headerRef}
              initial={{ opacity: 0, y: 30 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Why PS Associates
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                The Trusted Choice for
                <br />
                <span className="gradient-text">Business IT Solutions</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We provide IT & IT enabled services for a broad range of verticals. We have been in business for more than two decades and have been successfully serving the IT requirements of our clients.
              </p>
            </motion.div>

            {/* Features List */}
            <div className="grid grid-cols-1 gap-2">
              {features.slice(0, 3).map((feature, index) => (
                <FeatureCard key={feature.title} feature={feature} index={index} />
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div>
            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glow-card p-8 mb-8"
            >
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="text-center p-4 rounded-lg bg-background/50"
                  >
                    <AnimatedNumber
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      className="text-2xl md:text-3xl font-bold gradient-text mb-1"
                    />
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* More Features */}
            <div className="grid grid-cols-1 gap-2">
              {features.slice(3).map((feature, index) => (
                <FeatureCard key={feature.title} feature={feature} index={index + 3} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
