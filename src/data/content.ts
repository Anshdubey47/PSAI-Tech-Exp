import {
  GraduationCap,
  Link as LinkIcon,
  Users,
  Code,
  Cloud,
  Headphones as HeadphonesIcon,
  BarChart3,
  ShieldCheck,
  Cctv,
  Server,
  Workflow,
  Hammer,
  MessageSquare as MessageSquareHeart,
  Box,
  Activity,
  Wifi,
  ShieldAlert,
  Cpu,
  LayoutGrid,
  FileCheck,
  FileSignature,
  Landmark,
  Files,
  ClipboardCheck,
  Brain,
  Boxes,
  Briefcase,
  UserPlus,
  Share2,
  Eye,
  Video
} from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  icon: any;
  gradient: string;
  desc: string;
  category: 'it' | 'ai' | 'security' | 'infrastructure';
}

export interface ProductItem {
  id: number;
  title: string;
  desc: string;
  gradient: string;
  category: 'erp' | 'ai' | 'security' | 'document' | 'other';
  icon: any;
}

export interface TeamMember {
  name: string;
  role: string;
  src: string;
}

export interface TimelineItem {
  step: string;
  year: string;
  description: string;
}

export interface OfficeItem {
  city: string;
  desc: string;
  img: string;
}

export interface CertificateItem {
  name: string;
  src: string;
}

export interface GalleryItem {
  img: string;
  title: string;
}

// Services Data (All 18 items preserved exactly)
export const services: ServiceItem[] = [
  {
    id: "01",
    title: "Smart Training Solutions",
    icon: GraduationCap,
    gradient: "from-[#ff9a9e] to-[#fecfef]",
    desc: "PS Associates delivers smart training solutions through digital learning platforms, structured programs, and technology-enabled education initiatives.",
    category: "infrastructure"
  },
  {
    id: "02",
    title: "System Integration",
    icon: LinkIcon,
    gradient: "from-[#a18cd1] to-[#fbc2eb]",
    desc: "End-to-end system integration services aligned with Digital India initiatives, combining software platforms, infrastructure, and skilled resources.",
    category: "it"
  },
  {
    id: "03",
    title: "Services Consultancy",
    icon: Users,
    gradient: "from-[#84fab0] to-[#8fd3f4]",
    desc: "Professional services consultancy offering recruitment, deployment, monitoring, and retention of skilled personnel with complete confidentiality.",
    category: "it"
  },
  {
    id: "04",
    title: "App Development",
    icon: Code,
    gradient: "from-[#fccb90] to-[#d57eeb]",
    desc: "Our services help IT systems run more efficiently by reducing costs, improving quality, and maximizing IT solutions.",
    category: "it"
  },
  {
    id: "05",
    title: "Cloud & Infrastructure",
    icon: Cloud,
    gradient: "from-[#e0c3fc] to-[#8ec5fc]",
    desc: "Transform your infrastructure from capital-intensive, hardware-focused to intelligent, software-defined solutions. We help with cloud adoption.",
    category: "infrastructure"
  },
  {
    id: "06",
    title: "CX Transformation",
    icon: HeadphonesIcon,
    gradient: "from-[#f093fb] to-[#f5576c]",
    desc: "Streamline sales and customer service to enhance user connections with your brand. Creating operational ecosystems for quick response.",
    category: "it"
  },
  {
    id: "07",
    title: "Data Analytics",
    icon: BarChart3,
    gradient: "from-[#4facfe] to-[#00f2fe]",
    desc: "Leverage Data Visualization, Business Analytics, AI, Machine Learning, and Deep Learning to unlock value for actionable insights.",
    category: "ai"
  },
  {
    id: "08",
    title: "Enterprise IT Security",
    icon: ShieldCheck,
    gradient: "from-[#fdfbfb] to-[#ebedee]",
    desc: "PSAITECH plans, designs and implements organizational IT strategies with cost-effective, reliable, cutting-edge infrastructure.",
    category: "security"
  },
  {
    id: "09",
    title: "Security & Surveillance",
    icon: Cctv,
    gradient: "from-[#a1c4fd] to-[#c2e9fb]",
    desc: "IP-based security systems including Access Control, Video Surveillance, and Fire Detection & Alarm. Integrated solutions that are economical.",
    category: "security"
  },
  {
    id: "10",
    title: "Facility Management",
    icon: Server,
    gradient: "from-[#ffecd2] to-[#fcb69f]",
    desc: "Complete planning, reporting, escalations and management of IT Infrastructure. Includes AMC services, Server & Network Management.",
    category: "infrastructure"
  },
  {
    id: "11",
    title: "Intelligent Automation",
    icon: Workflow,
    gradient: "from-[#cfd9df] to-[#e2ebf0]",
    desc: "With 23+ years of experience, PSAITECH delivers intelligent automation through Business Process Management, Robotic Process Automation.",
    category: "ai"
  },
  {
    id: "12",
    title: "Low-Code Development",
    icon: Hammer,
    gradient: "from-[#fff1eb] to-[#ace0f9]",
    desc: "Accelerate digital transformation by empowering citizen developers. Includes Legacy Application Modernization, Multi-experience Development.",
    category: "it"
  },
  {
    id: "13",
    title: "Conversational AI",
    icon: MessageSquareHeart,
    gradient: "from-[#c1dfc4] to-[#deecdd]",
    desc: "Highly intelligent chatbots for written and spoken communication using context and non-verbal indicators. Features Smart Assistants.",
    category: "ai"
  },
  {
    id: "14",
    title: "Product Engineering",
    icon: Box,
    gradient: "from-[#6a11cb] to-[#2575fc]",
    desc: "Design, development, testing, deployment, and maintenance of software products. Using agile methodologies, design thinking, and DevOps.",
    category: "it"
  },
  {
    id: "15",
    title: "AMC Contracts",
    icon: Activity,
    gradient: "from-[#37ecba] to-[#72afd3]",
    desc: "Proactive IT infrastructure maintenance including health checks, troubleshooting, hardware servicing, and system optimization.",
    category: "infrastructure"
  },
  {
    id: "16",
    title: "Networking Solutions",
    icon: Wifi,
    gradient: "from-[#df89b5] to-[#bfd9fe]",
    desc: "We deliver end-to-end networking solutions including LAN, WAN, cabling, routing, firewall setup, and secure wireless deployment.",
    category: "infrastructure"
  },
  {
    id: "17",
    title: "Cybersecurity Services",
    icon: ShieldAlert,
    gradient: "from-[#f6d365] to-[#fda085]",
    desc: "Securing your digital infrastructure with AI-first defense strategies. Offers Advanced Threat Detection, Identity & Access Security.",
    category: "security"
  },
  {
    id: "18",
    title: "AI-Enabled Services",
    icon: Cpu,
    gradient: "from-[#96fbc4] to-[#f9f586]",
    desc: "Transforming your enterprise with intelligent automation and adaptive AI ecosystems including AI-driven Automation, Hybrid AI Cloud.",
    category: "ai"
  }
];

// Products Data (All 16 items preserved exactly)
export const products: ProductItem[] = [
  {
    id: 1,
    title: 'Smart Vending & Locker Machines',
    desc: 'Complete Package Care & Management. Smart Lockers offer ultra-secure, automated, and scalable management of mails, parcels, and assets.',
    gradient: 'from-[#ff9a9e] to-[#fecfef]',
    category: 'other',
    icon: LayoutGrid
  },
  {
    id: 2,
    title: 'VMS – Visa Management System',
    desc: 'The Visa Management Platform (VMP) is an enterprise-grade, end-to-end digital solution designed to manage the complete lifecycle of visa applications.',
    gradient: 'from-[#a18cd1] to-[#fbc2eb]',
    category: 'erp',
    icon: FileCheck
  },
  {
    id: 3,
    title: 'XERP',
    desc: 'We offer a comprehensive finance and accounting solution for all business requirements, it simplifies accounting business procedures for enterprise-wide financial management.',
    gradient: 'from-[#84fab0] to-[#8fd3f4]',
    category: 'erp',
    icon: BarChart3
  },
  {
    id: 4,
    title: 'X-Sign',
    desc: 'X-Sign is a cutting-edge digital signature solution designed to revolutionize document management for businesses. Complies with the IT Act.',
    gradient: 'from-[#fccb90] to-[#d57eeb]',
    category: 'security',
    icon: FileSignature
  },
  {
    id: 5,
    title: 'e-Governance Solutions',
    desc: 'e-governance solutions encompass Self Service Portals and GIS Applications designed to enhance citizen engagement and streamline government services.',
    gradient: 'from-[#e0c3fc] to-[#8ec5fc]',
    category: 'other',
    icon: Landmark
  },
  {
    id: 6,
    title: 'eDMS – Document Management',
    desc: 'PSAITECH eDMS offers a comprehensive, end-to-end architecture for delivering Rich Internet Applications (RIAs) and content across various platforms.',
    gradient: 'from-[#f093fb] to-[#f5576c]',
    category: 'document',
    icon: Files
  },
  {
    id: 7,
    title: 'Assessment Module',
    desc: 'Identifying and evaluating a company\'s current employees for the objectives of reassignment, training, promotion, or dismissal is at the core.',
    gradient: 'from-[#4facfe] to-[#00f2fe]',
    category: 'other',
    icon: ClipboardCheck
  },
  {
    id: 8,
    title: 'Human Capital Management',
    desc: 'Our Human Capital Management solution is built by top HR and IT experts. It integrates all HR needs into one comprehensive browser-based solution.',
    gradient: 'from-[#fdfbfb] to-[#ebedee]',
    category: 'erp',
    icon: Users
  },
  {
    id: 9,
    title: 'AI Predictive Intelligence',
    desc: 'Artificial intelligence in policing helps in improving decision-making and can have a hugely beneficial impact on society, economy, and the environment.',
    gradient: 'from-[#a1c4fd] to-[#c2e9fb]',
    category: 'ai',
    icon: Brain
  },
  {
    id: 10,
    title: 'Inventory Solution',
    desc: 'PSAITECH Inventory Solution helps you manage inventory easily. Create online requisitions, automate PO creation, and manage stock transfers.',
    gradient: 'from-[#ffecd2] to-[#fcb69f]',
    category: 'erp',
    icon: Boxes
  },
  {
    id: 11,
    title: 'Project Management System',
    desc: 'PSAITECH Project Management Solution (PMS) enhances project development. It ensures the smooth handling of new teams and stakeholders.',
    gradient: 'from-[#cfd9df] to-[#e2ebf0]',
    category: 'erp',
    icon: Briefcase
  },
  {
    id: 12,
    title: 'Recruitment Assessment',
    desc: 'PSAITECH\'s recruitment assessment platform creates a low-cost, efficient hiring process. AI helps automate sourcing, screening, and interviewing.',
    gradient: 'from-[#fff1eb] to-[#ace0f9]',
    category: 'other',
    icon: UserPlus
  },
  {
    id: 13,
    title: 'Social Media Analytics',
    desc: 'The SMA tool enhances decision-making by collecting and analyzing social media data. Customizable features, including sentiment analytics.',
    gradient: 'from-[#c1dfc4] to-[#deecdd]',
    category: 'ai',
    icon: Share2
  },
  {
    id: 14,
    title: 'Service Desk',
    desc: 'Boost employee productivity with our online service desk solution. Say goodbye to time-consuming query handling and elevate employee welfare.',
    gradient: 'from-[#6a11cb] to-[#2575fc]',
    category: 'other',
    icon: HeadphonesIcon
  },
  {
    id: 15,
    title: 'PSAITECH Eye',
    desc: 'Our mobile surveillance application offers comprehensive security solutions for homes, ensuring continuous monitoring and detection of intruders.',
    gradient: 'from-[#37ecba] to-[#72afd3]',
    category: 'security',
    icon: Eye
  },
  {
    id: 16,
    title: 'Video Conferencing Solutions',
    desc: 'Complete Unified Communication & Collaboration Platform. Enterprise-grade video conferencing systems for boardrooms and hybrid work environments.',
    gradient: 'from-[#df89b5] to-[#bfd9fe]',
    category: 'other',
    icon: Video
  }
];

// Value Cards (About page preview/full)
export const valueCards = [
  { label: 'Mission', text: 'Empower government and enterprises with reliable technology.', iconName: 'Target' },
  { label: 'Future Goal', text: 'Expand services across new sectors and regions.', iconName: 'Eye' },
  { label: 'Values', text: 'Integrity, quality, and long-term partnerships.', iconName: 'Shield' },
  { label: 'Certifications', text: 'ISO 9001, GeM Seller, and CMMI aligned practices.', iconName: 'Award' }
];

// Mission Points
export const missionPoints = [
  { title: 'Client-Centric Approach', description: 'Understanding and addressing unique client requirements with customized solutions.' },
  { title: 'Quality Excellence', description: 'Maintaining the highest standards in every project and partnership.' },
  { title: 'Cost Efficiency', description: 'Delivering exceptional value without compromising on quality or service.' },
  { title: 'Continuous Innovation', description: 'Staying ahead of industry trends to provide cutting-edge solutions.' },
];

// Offices
export const offices: OfficeItem[] = [
  { city: "Bhopal", desc: "Head office managing operations and central coordination.", img: "/images/certificates/bhopal.png" },
  { city: "Mumbai", desc: "Strategic office for enterprise and media engagements.", img: "/images/certificates/mumbai.png" },
  { city: "Raipur", desc: "Regional hub for banking and government projects.", img: "/images/certificates/raipur.png" },
  { city: "Bangalore", desc: "Technology partnerships and talent engagement hub.", img: "/images/certificates/bangalore.png" }
];

// Certificates
export const certificates: CertificateItem[] = [
  { name: 'Certificate 1', src: '/images/certificates/image.png' },
  { name: 'Certificate 2', src: '/images/certificates/image copy.png' },
  { name: 'Certificate 3', src: '/images/certificates/image copy 2.png' },
  { name: 'Certificate 4', src: '/images/certificates/image copy 3.png' },
  { name: 'Certificate 5', src: '/images/certificates/certificatenew.png' },
  { name: 'Certificate 6', src: '/images/certificates/cert1.png' },
];

// Leaders
export const leaders: TeamMember[] = [
  { name: 'Gyanendra Mudgal', role: 'Regional Manager Mumbai', src: '/images/leaders/image copy.png' },
  { name: 'Mihilal Patel', role: 'Regional Manager MP', src: '/images/leaders/image12.png' },
  { name: 'Shilpi Dubey', role: 'Head of Department (Accounts)', src: '/images/leaders/image13.png' },
  { name: 'Shubhi Raghuvanshi', role: 'Business Development Manager', src: '/images/leaders/image14.png' }
];

// Managing Director Quote & Portrait Info
export const mdMessage = {
  name: "Mr. Mahesh Dubey",
  role: "Managing Director",
  src: "/images/leaders/Image10.png",
  quote: `At PS Associates, we believe sustainable success is built on trust, integrity, and forward-thinking leadership. Our focus has always been to deliver reliable, high-quality technology and workforce solutions that create measurable value for our clients. We adapt to evolving industry demands while maintaining the standards that define our organization.

Beyond execution, we strive to build long-term partnerships grounded in transparency and performance. As we move forward, our vision remains clear — to strengthen our impact, expand our capabilities, and remain a trusted partner in progress.`
};

// Timeline Growth
export const timeline: TimelineItem[] = [
  { step: '1', year: '1998', description: 'Company founded with a focus on IT solutions and professional staffing services.' },
  { step: '2', year: '2005', description: 'Expanded into government sector contracts, establishing long-term partnerships.' },
  { step: '3', year: '2015', description: 'Launched digital media promotional services and expanded manpower supply capabilities, diversifying our portfolio.' },
  { step: '4', year: '2023', description: 'Celebrating 25 years of excellence with sustained growth and innovation across IT and manpower services.' },
];

// Gallery Items
export const gallery: GalleryItem[] = [
  { img: "/images/gallery/i7.png", title: "Meeting with CM of Madhya Pradesh" },
  { img: "/images/gallery/i2.png", title: "Wedding of Hon. JV Singh" },
  { img: "/images/gallery/i6.png", title: "Office Celebrations" },
  { img: "/images/gallery/i3.png", title: "Meeting Co-op Minister" },
  { img: "/images/gallery/i1.png", title: "Edu. Minister of Ethiopia" },
  { img: "/images/gallery/i5.png", title: "Tips about MP Krishi" },
  { img: "/images/gallery/i10.png", title: "BITOAA AGMs" },
  { img: "/images/gallery/i9.png", title: "BITOAA President" },
  { img: "/images/gallery/i8.png", title: "Conoration as BITOAA President" },
  { img: "/images/gallery/i14.png", title: "Installation of First ATM" },
  { img: "/images/gallery/i12.png", title: "With Co-op Minister" },
  { img: "/images/gallery/i11.png", title: "Welcoming CM of MP" },
  { img: "/images/gallery/i13.png", title: "With Co-op Minister" },
];

// Contacts details
export const contacts = {
  address: "1A, Ist Floor, Metro Plaza, E-5, Arera Colony, Bhopal, M.P., India, PIN CODE 462016",
  phone: "+91-755-4222624",
  emails: [
    { label: "Support", email: "support@psaitech.com" },
    { label: "Business Development", email: "bdm1@psaitech.com" },
    { label: "Human Resources", email: "hr@psaitech.com" }
  ],
  socials: [
    { name: "LinkedIn", href: "https://www.linkedin.com/company/psassociates" },
    { name: "Twitter", href: "https://x.com/psassociatesbpl" },
    { name: "Facebook", href: "https://www.facebook.com/PSAssociatesBPL" }
  ]
};

export interface PartnerItem {
  name: string;
  logo: string;
  desc: string;
}

export interface ClientItem {
  name: string;
  logo: string;
}

export const partners: PartnerItem[] = [
  { name: 'Intel', logo: '/images/partners/intel.png', desc: 'Technology Provider' },
  { name: 'Dell', logo: '/images/partners/dell.png', desc: 'Enterprise IT & Infrastructure Solutions Partner' },
  { name: 'Canon', logo: '/images/partners/canon.png', desc: 'IT & Solutions Partner' },
  { name: 'Microsoft', logo: '/images/partners/microsoft.png', desc: 'Cloud & Software Partner' },
  { name: 'Amazon Web Services', logo: '/images/partners/aws.png', desc: 'Cloud Services Partner' },
  { name: 'Cisco', logo: '/images/partners/cisco.png', desc: 'Networking Solutions Partner' },
  { name: 'IBM', logo: '/images/partners/ibm.png', desc: 'IT & Consulting Partner' },
  { name: 'HP', logo: '/images/partners/hp.png', desc: 'Technology Partner' },
  { name: 'Array Networks', logo: '/images/partners/array.png', desc: 'Application Delivery & Security Partner' },
  { name: 'Samsung', logo: '/images/partners/samsung.png', desc: 'Technology Partner' },
  { name: 'CloudBolt', logo: '/images/partners/cloudbolt.png', desc: 'Hybrid Cloud Partner' },
  { name: 'D-Link', logo: '/images/partners/dlink.png', desc: 'Networking Infrastructure Partner' },
  { name: 'EDB PostgreSQL', logo: '/images/partners/edb.png', desc: 'Database Solutions Partner' },
  { name: 'Epson', logo: '/images/partners/epson.png', desc: 'Printing Solutions Partner' },
  { name: 'Hewlett Packard Enterprise', logo: '/images/partners/hpe.png', desc: 'Enterprise Solutions Partner' },
  { name: 'IFS', logo: '/images/partners/ifs.png', desc: 'ERP Solutions Partner' },
  { name: 'Iron Mountain', logo: '/images/partners/iron.png', desc: 'Data Management Partner' },
  { name: 'Nutanix', logo: '/images/partners/nutanix.png', desc: 'Cloud Infrastructure Partner' },
  { name: 'OpenText', logo: '/images/partners/opentext.png', desc: 'Information Management Partner' },
  { name: 'Oracle', logo: '/images/partners/oracle.png', desc: 'Enterprise Software Partner' },
  { name: 'Palo Alto Networks', logo: '/images/partners/paloalto.png', desc: 'Cybersecurity Partner' },
  { name: 'Red Hat', logo: '/images/partners/redhat.png', desc: 'Open Source Solutions Partner' },
  { name: 'SAP', logo: '/images/partners/sap.png', desc: 'Enterprise Resource Planning Partner' },
  { name: 'Tata Consultancy Services', logo: '/images/partners/tcs.png', desc: 'Implementation Partner' },
  { name: 'Versa Networks', logo: '/images/partners/versa.png', desc: 'SD-WAN Partner' },
  { name: 'VMware', logo: '/images/partners/vmware.png', desc: 'Virtualization Partner' },
  { name: 'Globus', logo: '/images/partners/globus.png', desc: 'Enterprise IT & Infrastructure Solutions Partner' },
  { name: 'PeopleLink', logo: '/images/partners/people.png', desc: 'Unified Communications & Collaboration Partner' },
  { name: 'Acer', logo: '/images/partners/acer.png', desc: 'Commercial Computing & Hardware Solutions Partner' },
  { name: 'Brother', logo: '/images/partners/brother.png', desc: 'Printing & Office Automation Solutions Partner' }
];

export const clients: ClientItem[] = [
  { name: 'Client 1', logo: '/images/clients/c1.png' },
  { name: 'Client 2', logo: '/images/clients/c2.png' },
  { name: 'Client 3', logo: '/images/clients/c3.png' },
  { name: 'Client 4', logo: '/images/clients/c4.png' },
  { name: 'Client 5', logo: '/images/clients/c5.png' },
  { name: 'Client 6', logo: '/images/clients/c6.png' },
  { name: 'Client 7', logo: '/images/clients/c7.png' },
  { name: 'Client 8', logo: '/images/clients/c8.png' },
  { name: 'Client 9', logo: '/images/clients/c9.png' },
  { name: 'Client 10', logo: '/images/clients/c10.png' },
  { name: 'Client 11', logo: '/images/clients/c11.png' },
  { name: 'Client 12', logo: '/images/clients/c12.png' },
  { name: 'Client 13', logo: '/images/clients/c13.png' },
  { name: 'Client 14', logo: '/images/clients/c14.png' },
  { name: 'Client 15', logo: '/images/clients/c15.png' },
  { name: 'Client 16', logo: '/images/clients/c16.png' },
  { name: 'Client 17', logo: '/images/clients/c17.png' },
  { name: 'Client 18', logo: '/images/clients/c18.png' },
  { name: 'Client 19', logo: '/images/clients/c19.png' },
  { name: 'Client 20', logo: '/images/clients/c20.png' },
  { name: 'Client 21', logo: '/images/clients/c21.png' },
  { name: 'Client 22', logo: '/images/clients/c22.png' },
  { name: 'Client 23', logo: '/images/clients/c23.png' }
];

