import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";

/* Banner Image */
import servicesBg from "@/assets/images/industriesbg.png";

/* Services Data (Top 3 + existing, continuous numbering) */
const services = [
  {
    id: "01",
    title: "Smart Training Solutions",
    desc: "PS Associates delivers smart training solutions through digital learning platforms, structured programs, and technology-enabled education initiatives that improve employability and skill development.",
  },
  {
    id: "02",
    title: "System Integration for Digital India",
    desc: "End-to-end system integration services aligned with Digital India initiatives, combining software platforms, infrastructure, and skilled resources to deliver scalable transformation solutions.",
  },
  {
    id: "03",
    title: "Services Consultancy",
    desc: "Professional services consultancy services offering recruitment, deployment, monitoring, and retention of skilled personnel with complete confidentiality and ethical compliance.",
  },
  {
    id: "04",
    title: "Application Development & Maintenance",
    desc: "End-to-end application design, development, testing, integration, and maintenance services that enhance system life, reduce downtime, and improve operational efficiency.",
  },
  {
    id: "05",
    title: "Cloud & Infrastructure Services",
    desc: "Migration, optimization, and management of cloud-enabled and software-defined infrastructure to improve scalability, performance, and business agility.",
  },
  {
    id: "06",
    title: "CX Transformation",
    desc: "Customer experience transformation through optimized sales, service workflows, and intelligent engagement across the customer journey.",
  },
  {
    id: "07",
    title: "Data Analytics",
    desc: "Advanced analytics, visualization, AI, and ML solutions that enable data-driven decision-making and unlock actionable business insights.",
  },
  {
    id: "08",
    title: "Enterprise IT Security & Integration",
    desc: "Design, implementation, and management of secure, reliable, and cost-effective IT infrastructure for enterprise and government environments.",
  },
  {
    id: "09",
    title: "Security & Surveillance Systems",
    desc: "Integrated IP-based security solutions including access control, video surveillance, and fire detection systems for proactive safety management.",
  },
  {
    id: "10",
    title: "Facility Management Services",
    desc: "Comprehensive IT facility management with structured planning, reporting, escalation, and compliance-driven service delivery.",
  },
  {
    id: "11",
    title: "Intelligent Automation",
    desc: "Automation solutions that reduce operational complexity, improve productivity, and help organizations adapt to evolving business needs.",
  },
  {
    id: "12",
    title: "Low-Code Application Development",
    desc: "Rapid application development using low-code platforms to accelerate digital initiatives and empower citizen developers.",
  },
  {
    id: "13",
    title: "Conversational AI",
    desc: "AI-powered chatbots and voice assistants delivering intelligent, context-aware customer interactions across platforms.",
  },
  {
    id: "14",
    title: "Software Product Engineering",
    desc: "End-to-end software product lifecycle management from concept and design to deployment using agile and DevOps practices.",
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
      ease: "easeOut",
    },
  },
};

export default function Services() {
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
              Our Services
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mb-5">
              Delivering <span className="gradient-text">Technology Excellence</span>
            </h1>

            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Comprehensive IT, digital, and enterprise services designed to support
              government and enterprise transformation initiatives.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
          >
            {services.map((item) => (
              <motion.div
                key={item.id}
                variants={card}
                whileHover={{ y: -10, scale: 1.03 }}
                className="glow-card p-7 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition" />

                <div className="text-4xl font-bold text-primary mb-3 relative z-10">
                  {item.id}
                </div>

                <h3 className="text-lg font-semibold mb-3 relative z-10">
                  {item.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed relative z-10">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Banner */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <img
              src={servicesBg}
              alt="Services Background"
              className="w-full h-[350px] md:h-[420px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/70" />

            <div className="absolute inset-0 flex items-center justify-center text-center px-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white max-w-3xl">
                Delivering secure, scalable, and future-ready solutions tailored
                for enterprise and government organizations.
              </h2>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
