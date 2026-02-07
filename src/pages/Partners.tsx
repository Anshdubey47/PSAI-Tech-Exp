import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';

/* ========== PARTNER LOGOS ========== */

import hpe from '@/assets/images/partners/hpe.png';
import tcs from '@/assets/images/partners/tcs.png';
import microsoft from '@/assets/images/partners/microsoft.png';
import intel from '@/assets/images/partners/intel.png';
import samsung from '@/assets/images/partners/samsung.png';
import dlink from '@/assets/images/partners/dlink.png';
import cisco from '@/assets/images/partners/cisco.png';
import epson from '@/assets/images/partners/epson.png';
import array from '@/assets/images/partners/array.png';
import aws from '@/assets/images/partners/aws.png';
import cloudbolt from '@/assets/images/partners/cloudbolt.png';
import edb from '@/assets/images/partners/edb.png';
import ibm from '@/assets/images/partners/ibm.png';
import ifs from '@/assets/images/partners/ifs.png';
import iron from '@/assets/images/partners/iron.png';
import nutanix from '@/assets/images/partners/nutanix.png';
import opentext from '@/assets/images/partners/opentext.png';
import oracle from '@/assets/images/partners/oracle.png';
import paloalto from '@/assets/images/partners/paloalto.png';
import redhat from '@/assets/images/partners/redhat.png';
import sap from '@/assets/images/partners/sap.png';
import versa from '@/assets/images/partners/versa.png';
import vmware from '@/assets/images/partners/vmware.png';
import people from '@/assets/images/partners/people.png';
import brother from '@/assets/images/partners/brother.png';
import acer from '@/assets/images/partners/acer.png';
import globus from '@/assets/images/partners/globus.png';


/* ========== CLIENT LOGOS ========== */

import c1 from '@/assets/images/clients/c1.png';
import c2 from '@/assets/images/clients/c2.png';
import c3 from '@/assets/images/clients/c3.png';
import c4 from '@/assets/images/clients/c4.png';
import c5 from '@/assets/images/clients/c5.png';
import c6 from '@/assets/images/clients/c6.png';
import c7 from '@/assets/images/clients/c7.png';
import c8 from '@/assets/images/clients/c8.png';
import c9 from '@/assets/images/clients/c9.png';
import c10 from '@/assets/images/clients/c10.png';
import c11 from '@/assets/images/clients/c11.png';
import c12 from '@/assets/images/clients/c12.png';
import c13 from '@/assets/images/clients/c13.png';
import c14 from '@/assets/images/clients/c14.png';
import c15 from '@/assets/images/clients/c15.png';
import c16 from '@/assets/images/clients/c16.png';
import c17 from '@/assets/images/clients/c17.png';
import c18 from '@/assets/images/clients/c18.png';
import c19 from '@/assets/images/clients/c19.png';
import c20 from '@/assets/images/clients/c20.png';
import c21 from '@/assets/images/clients/c21.png';
import c22 from '@/assets/images/clients/c22.png';
import c23 from '@/assets/images/clients/c23.png';
/* ========== PARTNERS DATA ========== */

const partners = [
  {
    name: 'Array Networks',
    logo: array,
    desc: 'Application Delivery & Security Partner',
  },
  {
    name: 'Amazon Web Services',
    logo: aws,
    desc: 'Cloud Services Partner',
  },
  {
    name: 'Cisco',
    logo: cisco,
    desc: 'Networking Solutions Partner',
  },
  {
    name: 'CloudBolt',
    logo: cloudbolt,
    desc: 'Hybrid Cloud Partner',
  },
  {
    name: 'D-Link',
    logo: dlink,
    desc: 'Networking Infrastructure Partner',
  },
  {
    name: 'EDB PostgreSQL',
    logo: edb,
    desc: 'Database Solutions Partner',
  },
  {
    name: 'Epson',
    logo: epson,
    desc: 'Printing Solutions Partner',
  },
  {
    name: 'Hewlett Packard Enterprise',
    logo: hpe,
    desc: 'Enterprise Solutions Partner',
  },
  {
    name: 'IBM',
    logo: ibm,
    desc: 'IT & Consulting Partner',
  },
  {
    name: 'IFS',
    logo: ifs,
    desc: 'ERP Solutions Partner',
  },
  {
    name: 'Intel',
    logo: intel,
    desc: 'Technology Provider',
  },
  {
    name: 'Iron Mountain',
    logo: iron,
    desc: 'Data Management Partner',
  },
  {
    name: 'Microsoft',
    logo: microsoft,
    desc: 'Cloud & Software Partner',
  },
  {
    name: 'Nutanix',
    logo: nutanix,
    desc: 'Cloud Infrastructure Partner',
  },
  {
    name: 'OpenText',
    logo: opentext,
    desc: 'Information Management Partner',
  },
  {
    name: 'Oracle',
    logo: oracle,
    desc: 'Enterprise Software Partner',
  },
  {
    name: 'Palo Alto Networks',
    logo: paloalto,
    desc: 'Cybersecurity Partner',
  },
  {
    name: 'Red Hat',
    logo: redhat,
    desc: 'Open Source Solutions Partner',
  },
  {
    name: 'Samsung',
    logo: samsung,
    desc: 'Technology Partner',
  },
  {
    name: 'SAP',
    logo: sap,
    desc: 'Enterprise Resource Planning Partner',
  },
  {
    name: 'Tata Consultancy Services',
    logo: tcs,
    desc: 'Implementation Partner',
  },
  {
    name: 'Versa Networks',
    logo: versa,
    desc: 'SD-WAN Partner',
  },
  {
    name: 'VMware',
    logo: vmware,
    desc: 'Virtualization Partner',
  },
  {
  name: 'Globus',
  logo: globus,
  desc: 'Enterprise IT & Infrastructure Solutions Partner',
},
{
  name: 'PeopleLink',
  logo: people,
  desc: 'Unified Communications & Collaboration Partner',
},
{
  name: 'Acer',
  logo: acer,
  desc: 'Commercial Computing & Hardware Solutions Partner',
},
{
  name: 'Brother',
  logo: brother,
  desc: 'Printing & Office Automation Solutions Partner',
},

];

/* ========== CLIENT DATA ========== */

const clients = [
  { name: 'Client 1', logo: c1 },
  { name: 'Client 2', logo: c2 },
  { name: 'Client 3', logo: c3 },
  { name: 'Client 4', logo: c4 },
  { name: 'Client 5', logo: c5 },
  { name: 'Client 6', logo: c6 },
  { name: 'Client 7', logo: c7 },
  { name: 'Client 8', logo: c8 },
  { name: 'Client 9', logo: c9 },
  { name: 'Client 10', logo: c10 },
  { name: 'Client 11', logo: c11 },
  { name: 'Client 12', logo: c12 },
  { name: 'Client 13', logo: c13 },
  { name: 'Client 14', logo: c14 },
  { name: 'Client 15', logo: c15 },
  { name: 'Client 16', logo: c16 },
  { name: 'Client 17', logo: c17 },
  { name: 'Client 18', logo: c18 },
  { name: 'Client 19', logo: c19 },
  { name: 'Client 20', logo: c20 },
  { name: 'Client 21', logo: c21 },
  { name: 'Client 22', logo: c22 },
  { name: 'Client 23', logo: c23 },
];

/* ========== COMPONENT ========== */

export default function Partners() {
  return (
    <Layout>
      <section className="pt-32 pb-20 relative overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 tech-grid opacity-30" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />

        <div className="container-custom relative z-10">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Partners
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Trusted <span className="gradient-text">Technology Partners</span>
            </h1>

            <p className="text-muted-foreground max-w-3xl mx-auto">
              We collaborate with world-class technology leaders to deliver
              innovative, scalable, and secure solutions.
            </p>
          </motion.div>

          {/* Partners */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-20"
          >
            <h2 className="text-2xl font-bold text-center mb-10">
              Our Technology Partners
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

              {partners.map((item, i) => (
                <motion.div
                  key={`${item.name}-${i}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="glow-card p-6 flex flex-col items-center text-center hover:scale-105 transition"
                >
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="h-16 object-contain mb-4"
                  />

                  <h3 className="font-semibold mb-1">
                    {item.name}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {item.desc}
                  </p>
                </motion.div>
              ))}

            </div>
          </motion.div>

          {/* Clients */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glow-card p-8 mx-12"
          >
            <h2 className="text-2xl font-bold text-center mb-10">
              Our Clientele
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center">

              {clients.map((client, i) => (
                <motion.div
                  key={`client-${i}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center justify-center p-4"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-20 object-contain grayscale-0 hover:grayscale transition"
                  />
                </motion.div>
              ))}

            </div>
          </motion.div>

        </div>
      </section>
    </Layout>
  );
}
