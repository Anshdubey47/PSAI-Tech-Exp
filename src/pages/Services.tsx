import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";


/* Banner Image */
import servicesBg from "@/assets/images/industriesbg.png";

/* Service Images - Import them here */
import service04Img from "@/assets/images/servicesimg/AppDev.png";
import service05Img from "@/assets/images/servicesimg/CloudInfra.png";
import service06Img from "@/assets/images/servicesimg/SysIntegration.png";
import service07Img from "@/assets/images/servicesimg/Smartraining.png";
import service08Img from "@/assets/images/servicesimg/Servicesconsultancy.png";
import service09Img from "@/assets/images/servicesimg/CXTransformation.png";
import service10Img from "@/assets/images/servicesimg/DataAnalytics.png";
import service11Img from "@/assets/images/servicesimg/EnterpriseIT.png";
import service12Img from "@/assets/images/servicesimg/Survelliance.png";
import service13Img from "@/assets/images/servicesimg/LowCodeApp.png";
import service14Img from "@/assets/images/servicesimg/FacilityManagementServices.png";
import service16Img from "@/assets/images/servicesimg/IntelligentAutomation.png";
import service17Img from "@/assets/images/servicesimg/AMCtransparent.png";
import service18Img from "@/assets/images/servicesimg/NetworkingSolutionsTransparent.png";
import service19Img from "@/assets/images/servicesimg/Conversational AI.png";
import service20Img from "@/assets/images/servicesimg/SoftwareProduct.png";
import service21Img from "@/assets/images/servicesimg/AI Enable IT services.png";
import service22Img from "@/assets/images/servicesimg/Cybersecuritytransparent.png";

/* Services Data (Top 3 + existing, continuous numbering) */
const services = [
  {
    id: "01",
    image:service07Img,
    title: "Smart Training Solutions",
    desc: "PS Associates delivers smart training solutions through digital learning platforms, structured programs, and technology-enabled education initiatives that improve employability and skill development.",
  },
  {
    id: "02",
    image:service06Img,
    title: "System Integration for Digital India",
    desc: "End-to-end system integration services aligned with Digital India initiatives, combining software platforms, infrastructure, and skilled resources to deliver scalable transformation solutions.",
  },
  {
    id: "03",
    image:service08Img,
    title: "Services Consultancy",
    desc: "Professional services consultancy offering recruitment, deployment, monitoring, and retention of skilled personnel with complete confidentiality and ethical compliance.",
  },
  {
    id: "04",
    image: service04Img,
    title: "Application Development & Maintenance",
    desc: "Our services help IT systems run more efficiently by reducing costs, improving quality, and maximizing IT solutions. Includes analysis, design, implementation, testing, and integration with 25+ years of experience.",
  },
  {
    id: "05",
    image: service05Img,
    title: "Cloud & Infrastructure Services",
    desc: "Transform your infrastructure from capital-intensive, hardware-focused to intelligent, software-defined solutions. We help with cloud adoption, migration, and implementation for any opportunity.",
  },
  {
    id: "06",
    image:service09Img,
    title: "CX Transformation",
    desc: "Streamline sales and customer service to enhance user connections with your brand. Creating operational ecosystems that enable quick response and intelligently designed customer experiences at scale.",
  },
  {
    id: "07",
    image:service10Img,
    title: "Data Analytics",
    desc: "Leverage Data Visualization, Business Analytics, AI, Machine Learning, and Deep Learning to unlock value. We take an integrated approach to business intelligence projects for actionable insights.",
  },
  {
    id: "08",
    image:service11Img,
    title: "Enterprise IT Security & Integration",
    desc: "PSAITECH plans, designs and implements organizational IT strategies with cost-effective, reliable, cutting-edge infrastructure. Includes Data Center, Networking, Security & Surveillance, and Facility Management.",
  },
  {
    id: "09",
    image:service12Img,
    title: "Security & Surveillance Systems",
    desc: "IP-based security systems including Access Control, Video Surveillance, and Fire Detection & Alarm. Integrated solutions that are economical, proactive, flexible, and provide greater control.",
  },
  {
    id: "10",
    image:service14Img,
    title: "Facility Management Services",
    desc: "Complete planning, reporting, escalations and management of IT Infrastructure. Includes AMC services, Server & Network Management, Email Configuration, SLA Management, IT Security, and Asset Management.",
  },
  {
    id: "11",
    image:service16Img,
    title: "Intelligent Automation",
    desc: "With 23+ years of experience, PSAITECH delivers intelligent automation through Business Process Management, Robotic Process Automation, Low-Code Development, and Conversational AI solutions.",
  },
  {
    id: "12",
    image:service13Img,
    title: "Low-Code Application Development",
    desc: "Accelerate digital transformation by empowering citizen developers. Includes Legacy Application Modernization, Multi-experience Development, and Rapid Application Development reducing launch times by 60%.",
  },
  {
    id: "13",
    image:service19Img,
    title: "Conversational AI",
    desc: "Highly intelligent chatbots for written and spoken communication using context and non-verbal indicators. Features Smart Assistants, NLP for actionable insights, and 24/7 multilingual support.",
  },
  {
    id: "14",
    image:service20Img,
    title: "Software Product Engineering",
    desc: "Design, development, testing, deployment, and maintenance of software products. Using agile methodologies, design thinking, and DevOps to create digital solutions from concept to practical results.",
  },
  {
    id: "15",
    image:service17Img,
    title: "Annual Maintenance Contract (AMC)",
    desc: "Proactive IT infrastructure maintenance including health checks, troubleshooting, hardware servicing, and system optimization. Using preventive monitoring and support to ensure reliable operations and extended asset life.",
  },
  {
    id: "16",
    image:service18Img,
    title: "Networking Solutions",
    desc: "We deliver end-to-end networking solutions including LAN, WAN, cabling, routing, firewall setup, and secure wireless deployment, ensuring reliable performance and secure connectivity.",
  },
   {
    id: "17",
    image:service22Img,
    title: "Cybersecurity Services",
    desc: "Securing your digital infrastructure with AI-first defense strategies. Offers Advanced Threat Detection, Identity & Access Security, Extended Detection & Response (XDR), Zero Trust Architecture, Deepfake Protection, and Quantum-Safe Security Solutions to safeguard your business against evolving cyber risks.",
  },
   {
    id: "18",
    image:service21Img,
    title: "AI-Enabled IT Services",
    desc: "Transforming your enterprise with intelligent automation and adaptive AI ecosystems includeing AI-driven Automation, Hybrid AI Cloud Platforms, and Industry-Specific AI Solutions designed to optimize operations, enhance decision-making, and accelerate digital innovation. ",
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

                {/* Image - displays below ID if available */}
                {item.image && (
                  <div className="mb-4 relative z-10">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-70 object-cover rounded-lg"
                    />
                  </div>
                )}


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
