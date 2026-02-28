import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import PSU from '@/assets/images/Industries/GovermentandPSU.jpg';
import Media from '@/assets/images/Industries/MediaEntertainment.jpg';

/* Banner Image */
import industriesBg from '@/assets/images/industriesbg.png';

const industries = [
  {
    id: '01',
    image: 'PSU',
    title: 'Government & PSUs',
    desc: 'Work in different fields and maintain hardware services in cooperative banking & power industries.',
  },
  {
    id: '02',
    image: 'Media',
    title: 'Media & Entertainment',
    desc: 'Renewing the global communications, entertainment, and media ecosystems with next-generation digital solutions.',
  },
  {
    id: '03',
    title: 'Manufacturing',
    desc: 'Collect raw materials and produce the best products as per market demand.',
  },
  {
    id: '04',
    title: 'BFSI',
    desc: 'Maintain strong financial and investment support for business growth and stability.',
  },
  {
    id: '05',
    title: 'Agribusiness',
    desc: 'Support farming production, processing, and agricultural development.',
  },
  {
    id: '06',
    title: 'Healthcare',
    desc: 'Maintain quality services within medical treatment and wellness sectors.',
  },
  {
    id: '07',
    title: 'Aviation',
    desc: 'Maintain air travel operations, infrastructure, and airline services.',
  },
  {
    id: '08',
    title: 'Telecom',
    desc: 'Transmit data and manage telecommunication services across industries.',
  },
  {
    id: '09',
    title: 'Retail',
    desc: 'Support companies that sell goods and services to consumers.',
  },
  {
    id: '10',
    title: 'Education',
    desc: 'Provide educational services for all levels of learning.',
  },
];

/* Animations */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const card = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function Industries() {
  return (
    <Layout>
      <section className="pt-32 pb-24 relative overflow-hidden">

        {/* Background */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0 tech-grid opacity-30"
        />

        <motion.div
          animate={{ x: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[140px]"
        />

        <div className="container-custom relative z-10">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Industries Sector
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mb-5">
              Get Solutions from{' '}
              <span className="gradient-text">Industrial Experts</span>
            </h1>

            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Industry-specific solutions that empower organizations to
              innovate, scale, and lead in a competitive digital ecosystem.
            </p>
          </motion.div>

          {/* Industries Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
          >
            {industries.map((item) => (
              <motion.div
                key={item.id}
                variants={card}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="glow-card p-7 group relative overflow-hidden"
              >
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition" />

                {/* Number */}
                <motion.div
                  whileHover={{ scale: 1.07 }}
                  className="text-4xl font-bold text-primary mb-3 relative z-7"
                >
                  {item.id}
                </motion.div>
               {/* Image */}
                {item.image && (
                  <div className="mb-4 relative z-10">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-70 object-cover rounded-lg"
                    />
                  </div>
                )}
                {/* Title */}
                <h3 className="text-lg font-semibold mb-3 relative z-10">
                  {item.title}
                </h3>

                {/* Desc */}
                <p className="text-sm text-muted-foreground leading-relaxed relative z-10">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* ===== Banner Section ===== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden mb-10"
          >
            {/* Background Image */}
            <img
              src={industriesBg}
              alt="Industries Background"
              className="w-full h-[350px] md:h-[420px] object-cover"
            />

            {/* Blue Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/70" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center text-center px-6">
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl text-white"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-5 leading-snug">
                  Providing customer services in your sector and having unique
                  tools and solutions made just for businesses like yours.
                </h2>

                
              </motion.div>
            </div>
          </motion.div>

        </div>
      </section>
    </Layout>
  );
}
