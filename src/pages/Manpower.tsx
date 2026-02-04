import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import {
  Users,
  GraduationCap,
  Briefcase,
  Wrench,
  FileText,
  HeadphonesIcon,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const roles = [
  {
    icon: GraduationCap,
    title: 'Engineers',
    desc: 'IT and software engineers supporting e-Governance platforms, enterprise applications, data centers, and large-scale digital transformation projects',
    count: '500+',
  },
  {
    icon: Wrench,
    title: 'Technicians',
    desc: 'Hardware, network, and system technicians deployed for infrastructure setup, maintenance, surveillance systems, and field operations',
    count: '400+',
  },
  {
    icon: HeadphonesIcon,
    title: 'Help Desk',
    desc: 'Service desk and help desk professionals managing ticketing systems, application support, and citizen or enterprise user assistance',
    count: '300+',
    },
  {
    icon: FileText,
    title: 'Data Entry',
    desc: 'Data entry and digitization staff supporting document management systems, record digitization, and large government databases',
    count: '500+',
  },
  {
    icon: Briefcase,
    title: 'Clerks',
    desc: 'Administrative and clerical staff supporting office operations, documentation, reporting, and departmental workflows',
    count: '200+',
  },
  {
    icon: Users,
    title: 'Supervisors',
    desc: 'Supervisors and project coordinators overseeing manpower deployment, compliance, reporting, and on-site operations',
    count: '100+',
  },
];

export default function Manpower() {
  return (
    <Layout>
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-30" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[128px]" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              IT & Government Manpower Services
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Professional <span className="gradient-text">Manpower</span> Deployment
            </h1>

            <p className="text-muted-foreground max-w-2xl mx-auto">
              PS ASSOCIATES delivers trained and reliable manpower to support government,
              semi-government, and enterprise IT projects, ensuring operational
              continuity and service excellence across India.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {roles.map((role, i) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glow-card p-6"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                  <role.icon className="w-7 h-7 text-primary" />
                </div>

                <div className="text-2xl font-bold gradient-text mb-1">
                  {role.count}
                </div>

                <h3 className="text-lg font-semibold mb-2">
                  {role.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {role.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glow-card p-8 text-center"
          >
            <h2 className="text-2xl font-bold mb-4">
              Need Manpower for IT or Government Projects?
            </h2>

            <p className="text-muted-foreground mb-6">
              Engage PS ASSOCIATES for structured, compliant, and scalable manpower deployment
              aligned with project requirements and service-level commitments.
            </p>

            <Link to="/contact">
              <button className="glow-button text-primary-foreground">
                Request Manpower
                <ArrowRight className="w-4 h-4 inline ml-2" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
