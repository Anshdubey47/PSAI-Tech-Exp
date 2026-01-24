import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { Building2, Calendar, MapPin, CheckCircle } from 'lucide-react';

const projects = [
  {
    title: 'X-ERP Business Solution',
    client: 'SME & Enterprise Clients',
    year: 'Cloud-Based',
    location: 'Cloud Environment',
    items: [
      'Payroll & Employee Self-Service',
      'Accounts & Inventory Management',
      'Sales, Marketing & CRM Automation',
      'Fully Cloud-Accessible ERP Platform',
      'Designed for Small & Medium Businesses',
    ],
  },
  {
    title: 'Synergy Low-Code Digital Platform',
    client: 'Public, Corporate & Govt Sectors',
    year: '23+ Years Experience',
    location: 'Industry Standards',
    items: [
      'Low-Code Digital Transformation Platform',
      'End-to-End Digitization Enablement',
      'Inventory Requisition & PO Automation',
      'Material Receipt & Stock Transfers',
      'Real-Time Stock Visibility',
    ],
  },
  {
    title: 'SAP ERP Core Modules',
    client: 'SAP Implementations',
    year: 'Enterprise Grade',
    location: 'Multi-Industry',
    items: [
      'SAP HCM – Payroll, Recruitment, Performance',
      'SAP MM – Procurement & Inventory',
      'SAP SD – Sales, Billing & Logistics',
      'SAP FICO – Finance & Controlling',
      'SAP PP, PM, QM & PS Modules',
    ],
  },
  {
    title: 'X-Sign Digital Signature Solution',
    client: 'Government & Enterprises',
    year: 'DSC Enabled',
    location: 'Desktop & Web',
    items: [
      'Digitally Sign PDF, Word & Excel Files',
      'Supports All Indian Certifying Authorities',
      'Single & Batch Signing Modes',
      'Secure & Fast Document Signing',
      'Used for Work Orders & Invoices',
    ],
  },
  {
    title: 'GST e-Invoice & e-Way Bill System',
    client: 'GST Registered Businesses',
    year: 'Government Integrated',
    location: 'ERP / Standalone',
    items: [
      'One-Click e-Invoice Generation',
      'QR & Barcode Enabled Invoices',
      'Integrated with IRP & GSTN',
      'e-Way Bill Creation & Management',
      'No Manual Data Entry Required',
    ],
  },
  {
    title: 'Oracle ERP Solutions',
    client: 'Enterprise Customers',
    year: 'Next-Gen Cloud',
    location: 'Cloud & On-Prem',
    items: [
      'Unified Data & Workflow Automation',
      'Finance, Operations & HR Enablement',
      'AI, ML & Advanced Analytics',
      'Compliance-Ready ERP Architecture',
      'Scalable & Cost-Efficient Solutions',
    ],
  },
  {
    title: 'RFID-Based Smart Solutions',
    client: 'Smart Infrastructure',
    year: 'IoT Enabled',
    location: 'Automated Tracking',
    items: [
      'RFID Tree Monitoring System',
      'RFID Asset Management Solution',
      'RFID E-Seal Tracking System',
      'Real-Time Identification & Tracking',
      'Improved Security & Monitoring',
    ],
  },
  {
    title: 'IFS ERP Implementation Services',
    client: 'IFS Customers',
    year: 'Trusted Partner',
    location: 'Global Delivery',
    items: [
      'Tailored Domain-Specific Implementations',
      'Proven Digital Transformation Frameworks',
      'Agile Delivery Models',
      'Reduced Project Risk & Faster ROI',
      'Post-Go-Live ERP Support',
    ],
  },
];

export default function Projects() {
  return (
    <Layout>
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-30" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Project Portfolio
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Enterprise <span className="gradient-text">Solutions</span>
            </h1>

            <p className="text-muted-foreground max-w-2xl mx-auto">
              Delivering scalable ERP platforms, digital transformation solutions,
              automation systems, and enterprise-grade technologies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glow-card p-6"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-1">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Building2 className="w-4 h-4" />
                      {project.client}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {project.year}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-sm text-primary mb-4">
                  <MapPin className="w-4 h-4" />
                  {project.location}
                </div>

                <ul className="space-y-2">
                  {project.items.map(item => (
                    <li
                      key={item}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 grid lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glow-card p-6"
            >
              <h3 className="text-xl font-semibold mb-4">
                Why Choose XtraNet?
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Global leader in IT solutions</li>
                <li>• Over 20 years of experience with proven success</li>
                <li>• Highly skilled and experienced IT professionals</li>
                <li>• Comprehensive range of IT services</li>
                <li>• Strong commitment to quality and service</li>
                <li>
                  • Global reach with offices in India, USA, Canada, Singapore,
                  and UAE
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mt-4">
                Contact XtraNet today to learn how we can help you succeed.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glow-card p-6"
            >
              <h3 className="text-xl font-semibold mb-4">
                Certifications & Partnerships
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                XtraNet is committed to delivering the highest quality of service
                and support. The company is:
              </p>
              <ul className="space-y-2 mt-3 text-sm text-muted-foreground">
                <li>• CMMI ML 5 Appraised</li>
                <li>• ISO 9001:2015 Certified</li>
                <li>• ISO/IEC 27001:2013 Certified</li>
                <li>• ISO/IEC 20000-1:2011 Certified</li>
                <li>• Oracle Partner Network Member</li>
                <li>• Microsoft Partner Network Member</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glow-card p-6"
            >
              <h3 className="text-xl font-semibold mb-4">Services Offered</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                ERP, Enterprise Consulting, IT Infrastructure, System Integration,
                Data Center Services, Web / Mobile / Desktop Application
                Development, BPO / ITeS, IT Manpower Sourcing, BI / AI / ML
                Solutions, BPM & Workflow Solutions, Document Management
                Solutions, Oracle Solutions, Human Resource Management Systems,
                and Intelligence Policing.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
