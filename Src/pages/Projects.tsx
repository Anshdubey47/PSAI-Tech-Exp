import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { Building2, Calendar, MapPin, CheckCircle } from 'lucide-react';

const projects = [
  {
    title: 'MP Police Digitization',
    client: 'MP Police HQ',
    year: '2023',
    location: 'Statewide',
    items: ['5000+ Desktops', '2000+ Laptops', '500+ Printers', 'IT Support Staff'],
  },
  {
    title: 'PWD IT Infrastructure',
    client: 'Public Works Dept',
    year: '2022',
    location: 'Bhopal Zone',
    items: ['1200 Workstations', 'Network Setup', '200 Engineers Deployed'],
  },
  {
    title: 'Education Dept e-Learning',
    client: 'School Education',
    year: '2023',
    location: '50 Districts',
    items: ['10,000 Tablets', 'Training Support', 'Technical Helpdesk'],
  },
  {
    title: 'Health Dept EMR System',
    client: 'Health Department',
    year: '2024',
    location: 'District Hospitals',
    items: ['2500 Systems', 'Data Entry Operators', '24/7 Support'],
  },

  // ➕ Added projects (XtraNet-style)
  {
    title: 'State Treasury ERP Implementation',
    client: 'Finance Department',
    year: '2022',
    location: 'Statewide',
    items: ['ERP Deployment', 'Workflow Automation', 'User Training'],
  },
  {
    title: 'Smart City Command Center',
    client: 'Urban Development Authority',
    year: '2023',
    location: 'Metro Cities',
    items: ['Integrated Dashboards', 'Data Analytics', '24x7 Monitoring'],
  },
  {
    title: 'Judiciary e-Courts Infrastructure',
    client: 'High Court Administration',
    year: '2021',
    location: 'District Courts',
    items: ['Server Setup', 'Case Management Systems', 'IT Manpower Support'],
  },
];


export default function Projects() {
  return (
    <Layout>
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-30" />
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">Portfolio</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Government <span className="gradient-text">Projects</span></h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">Showcasing our major contracts with government departments across Madhya Pradesh.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.div key={project.title} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glow-card p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1"><Building2 className="w-4 h-4" />{project.client}</span>
                      <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{project.year}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm text-primary mb-4"><MapPin className="w-4 h-4" />{project.location}</div>
                <ul className="space-y-2">
                  {project.items.map(item => <li key={item} className="text-sm text-muted-foreground flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" />{item}</li>)}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mt-20 grid lg:grid-cols-3 gap-6">

  {/* WHY CHOOSE XTRANET */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="glow-card p-6"
  >
    <h3 className="text-xl font-semibold mb-4">Why Choose XtraNet?</h3>
    <ul className="space-y-2 text-sm text-muted-foreground">
      <li>• Global leader in IT solutions</li>
      <li>• Over 20 years of experience with proven success</li>
      <li>• Highly skilled and experienced IT professionals</li>
      <li>• Comprehensive range of IT services</li>
      <li>• Strong commitment to quality and service</li>
      <li>
        • Global reach with offices in India, USA, Canada, Singapore, and UAE
      </li>
    </ul>
    <p className="text-sm text-muted-foreground mt-4">
      Contact XtraNet today to learn how we can help you succeed.
    </p>
  </motion.div>

  {/* CERTIFICATIONS & PARTNERSHIPS */}
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
      XtraNet is committed to delivering the highest quality of service and
      support. The company is:
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

  {/* SERVICES OFFERED */}
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
      Data Center Services, Web / Mobile / Desktop Application Development,
      BPO / ITeS, IT Manpower Sourcing, BI / AI / ML Solutions, BPM & Workflow
      Solutions, Document Management Solutions, Oracle Solutions,
      Human Resource Management Systems, and Intelligence Policing.
    </p>
  </motion.div>

</div>

      </section>
    </Layout>
  );
}
