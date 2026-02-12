import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { Shield, Target, Eye, Award } from 'lucide-react';
import leaderImage1 from '@/assets/images/leaders/Image10.png';
import leaderImage2 from '@/assets/images/leaders/image copy.png';
import leaderImage3 from '@/assets/images/leaders/image copy 2.png';
import leaderImage4 from '@/assets/images/leaders/image copy 3.png';
import leaderImage5 from '@/assets/images/leaders/image copy 4.png';
import leaderImage6 from '@/assets/images/leaders/image copy 5.png';
import leaderImage7 from '@/assets/images/leaders/image copy 6.png';
import leaderImage8 from '@/assets/images/leaders/image copy 7.png';
import certImage1 from '@/assets/images/certificates/image.png';
import certImage2 from '@/assets/images/certificates/image copy.png';
import certImage3 from '@/assets/images/certificates/image copy 2.png';
import certImage4 from '@/assets/images/certificates/image copy 3.png';

import cert1 from '@/assets/images/certificates/cert1.png';
import certificatenew from '@/assets/images/certificates/certificatenew.png';
const timeline = [
  {
    step: '1',
    year: '1998',
    description: 'Company founded with a focus on IT solutions and professional staffing services.',
  },
  {
    step: '2',
    year: '2005',
    description: 'Expanded into government sector contracts, establishing long-term partnerships.',
  },
  {
    step: '3',
    year: '2015',
    description:
      'Launched digital media promotional services and expanded manpower supply capabilities, diversifying our portfolio.',
  },
  {
    step: '4',
    year: '2023',
    description:
      'Celebrating 25 years of excellence with sustained growth and innovation across IT and manpower services.',
  },
];

type Certificate = {
  name: string;
  src: string;
};

const missionPoints = [
  {
    title: 'Client-Centric Approach',
    description: 'Understanding and addressing unique client requirements with customized solutions.',
  },
  {
    title: 'Quality Excellence',
    description: 'Maintaining the highest standards in every project and partnership.',
  },
  {
    title: 'Cost Efficiency',
    description: 'Delivering exceptional value without compromising on quality or service.',
  },
  {
    title: 'Continuous Innovation',
    description: 'Staying ahead of industry trends to provide cutting-edge solutions.',
  },
];

const certificates: Certificate[] = [
  {
    name: 'Certificate 1',
    src: certImage1,
  },
  {
    name: 'Certificate 2',
    src: certImage2,
  },
  {
    name: 'Certificate 3',
    src: certImage3,
  },
  {
    name: 'Certificate 4',
    src: certImage4,
  },
  {
    name: 'Certificate 5',
    src: certificatenew,
  },
  {
    name: 'Certificate 6',
    src: cert1,
  },
];

const leaders = [
  {
    name: 'Mahesh dubey',
    role: 'CEO PS associates',
    src: leaderImage1,
  },
  {
    name: 'Gyanendra Mudgal',
    role: 'Regional Manager Mumbai',
    src: leaderImage2,
  },
  {
    name: 'Mihilal Patel',
    role: 'Regional Manager MP ',
    src: leaderImage3,
  },
  {
    name: 'Shilpi Dubey',
    role: 'Head of Department (Accounts)',
    src: leaderImage4,
  },
  {
    name: 'Shubhi Raghuvanshi',
    role: 'Business Development Manager',
    src: leaderImage5,
  },
  {
    name: 'Rukmani',
    role: 'Gem Executive',
    src: leaderImage6,
  },
  {
    name: 'Niharika Uzzarke',
    role: 'HR Executive',
    src: leaderImage7,
  },
  {
    name: 'Sachin',
    role: 'Accounts Executive',
    src: leaderImage8,
  },
];

export default function About() {
  return (
    <Layout>
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-30" />
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              We offer timely, high-quality technology solutions
              <span className="gradient-text"> tailored to specific domains</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We have offered a wide range of IT and IT-enabled services, including ERP, application development,
              enterprise consulting, IT infrastructure services, and data center solutions for mission-critical
              environments.
            </p>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-6">
              <h2 className="text-2xl font-bold">Our Story</h2>
              <p className="text-muted-foreground">
                As a customer-focused company, we create value as a client-centered business to assist organizations in
                expanding and becoming more efficient. We have built enduring relationships with our customers to
                provide cost-effective quality solutions on time.
              </p>
              <h2 className="text-2xl font-bold">Our Purpose</h2>
              <p className="text-muted-foreground">
                To fulfill the promise of technology and human ingenuity.
                <br />
                We assist our clients in becoming the best versions of themselves.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} className="grid grid-cols-2 gap-4">
              {[
                { icon: Target, label: 'Mission', text: 'Empower government and enterprises with reliable technology.' },
                { icon: Eye, label: 'Future Goal', text: 'Expand services across new sectors and regions.' },
                { icon: Shield, label: 'Values', text: 'Integrity, quality, and long-term partnerships.' },
                { icon: Award, label: 'Certifications', text: 'ISO 9001, GeM Seller, and CMMI aligned practices.' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="glow-card p-4 text-center bg-gradient-to-br from-primary/5 via-background to-accent/10"
                >
                  <item.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="font-semibold">{item.label}</div>
                  <div className="text-sm text-muted-foreground">{item.text}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="mb-16"
          >
            <div className="max-w-3xl mx-auto mb-10">
              <div className="glow-card p-8 bg-gradient-to-br from-background via-primary/5 to-accent/10 text-center">
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
                  Mission Statement: Commitment to Quality
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Our mission is to deliver cost-effective and high-quality solutions tailored to organizations of all
                  sizes. We are dedicated to enhancing our clients&apos; efficiency by providing the best products and
                  services that cater to their specific needs and challenges.
                </p>
              </div>
            </div>
            <div className="grid gap-3">
              {missionPoints.map((point) => (
                <div
                  key={point.title}
                  className="glow-card px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-gradient-to-r from-primary/5 via-background to-accent/10"
                >
                  <div className="font-semibold text-foreground">{point.title}</div>
                  <div className="text-sm text-muted-foreground sm:max-w-xl">{point.description}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="mb-16"
          >
            <div className="max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Core Values: Innovation and Trust
              </h2>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                At the heart of PS Associates are our foundational core values:
                <span className="font-semibold"> innovation</span>,<span className="font-semibold"> trust</span>,
                <span className="font-semibold"> service</span>, and
                <span className="font-semibold"> growth</span>. We prioritise delivering innovative solutions and
                reliable services while fostering a culture of trust with our stakeholders. This approach enables us to
                maintain long-lasting relationships and drive sustainable growth together, ensuring mutual success in
                every partnership we build.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="mb-16"
          >
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Certifications</h2>
              <p className="text-muted-foreground text-sm md:text-base">
                Our certifications reflect our commitment to process excellence, quality delivery, and continuous
                improvement in every engagement.
              </p>
            </div>
            <div className="max-w-4xl mx-auto grid gap-6 sm:grid-cols-2">
              {certificates.map((certificate, index) => (
                <motion.div
                  key={certificate.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ delay: index * 0.1 }}
                  className="glow-card bg-gradient-to-br from-primary/5 via-background to-accent/10 p-4 flex items-center justify-center"
                >
                  <div className="w-full h-full rounded-2xl overflow-hidden bg-background shadow-md flex items-center justify-center">
                    <img
                      src={certificate.src}
                      alt={certificate.name}
                      className="w-full h-full max-h-80 object-contain"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="mb-16"
          >
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Growth and Development Timeline</h2>
              <p className="text-muted-foreground">
                Our journey began in 1998 with a vision to transform how organizations approach IT and workforce
                solutions. Through strategic planning and a strong focus on client success, we have experienced
                consistent growth across all service areas.
              </p>
            </div>
            <div className="max-w-4xl mx-auto grid gap-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ delay: index * 0.1 }}
                  className="grid grid-cols-[auto,1fr] gap-6 items-start"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center font-semibold">
                      {item.step}
                    </div>
                    {index < timeline.length - 1 && <div className="flex-1 w-px bg-border mt-2" />}
                  </div>
                  <div>
                    <div className="text-lg font-semibold mb-1">{item.year}</div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            id="team"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Leadership Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {leaders.map((leader, index) => (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="glow-card p-6 text-center bg-gradient-to-br from-primary/5 via-background to-accent/10"
                >
                  <div className="w-32 h-40 mx-auto mb-4 rounded-2xl overflow-hidden bg-background/60">
                    <img src={leader.src} alt={leader.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-semibold">{leader.name}</h3>
                  <div className="text-primary text-sm mt-1">{leader.role}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
