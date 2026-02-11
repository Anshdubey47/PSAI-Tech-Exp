import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// Animated SVG Icons Component
const AnimatedIcon = ({ type }) => {
  const icons = {
    vending: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <motion.rect
          x="25" y="15" width="50" height="70" rx="4"
          fill="none" stroke="currentColor" strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.rect
          x="35" y="25" width="12" height="12" rx="2"
          fill="currentColor"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
        />
        <motion.rect
          x="53" y="25" width="12" height="12" rx="2"
          fill="currentColor"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
        />
        <motion.rect
          x="35" y="43" width="12" height="12" rx="2"
          fill="currentColor"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
        />
        <motion.rect
          x="53" y="43" width="12" height="12" rx="2"
          fill="currentColor"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
        />
        <motion.path
          d="M30 65 L70 65 L65 75 L35 75 Z"
          fill="currentColor"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
        />
      </svg>
    ),
    
    vms: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <motion.rect
          x="20" y="25" width="60" height="50" rx="3"
          fill="none" stroke="currentColor" strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.circle
          cx="50" cy="40" r="8"
          fill="currentColor"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity, repeatDelay: 1.5 }}
        />
        <motion.path
          d="M35 55 Q50 65 65 55"
          fill="none" stroke="currentColor" strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.5, duration: 1, repeat: Infinity, repeatDelay: 1.5 }}
        />
        <motion.path
          d="M25 20 L50 10 L75 20"
          fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        />
      </svg>
    ),
    
    erp: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <motion.g>
          <motion.rect
            x="15" y="30" width="20" height="40" rx="2"
            fill="currentColor"
            initial={{ height: 0, y: 70 }}
            animate={{ height: 40, y: 30 }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
          />
          <motion.rect
            x="40" y="20" width="20" height="50" rx="2"
            fill="currentColor"
            initial={{ height: 0, y: 70 }}
            animate={{ height: 50, y: 20 }}
            transition={{ delay: 0.2, duration: 1, repeat: Infinity, repeatDelay: 1 }}
          />
          <motion.rect
            x="65" y="35" width="20" height="35" rx="2"
            fill="currentColor"
            initial={{ height: 0, y: 70 }}
            animate={{ height: 35, y: 35 }}
            transition={{ delay: 0.4, duration: 1, repeat: Infinity, repeatDelay: 1 }}
          />
        </motion.g>
        <motion.path
          d="M15 30 L35 30 L40 20 L60 20 L65 35 L85 35"
          fill="none" stroke="currentColor" strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1, duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
        />
      </svg>
    ),
    
    signature: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <motion.rect
          x="20" y="20" width="60" height="60" rx="4"
          fill="none" stroke="currentColor" strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.path
          d="M30 50 Q40 35 50 50 T70 50"
          fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.5, duration: 2, repeat: Infinity, repeatDelay: 1 }}
        />
        <motion.circle
          cx="75" cy="65" r="3"
          fill="currentColor"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.3, 1] }}
          transition={{ delay: 2.5, duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
        />
      </svg>
    ),
    
    governance: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <motion.path
          d="M50 20 L30 35 L30 65 L50 80 L70 65 L70 35 Z"
          fill="none" stroke="currentColor" strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.rect
          x="35" y="40" width="30" height="25" rx="2"
          fill="currentColor"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, repeat: Infinity, repeatDelay: 1.5 }}
        />
        <motion.path
          d="M45 48 L48 52 L55 45"
          fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1.3, duration: 0.5, repeat: Infinity, repeatDelay: 1.5 }}
        />
      </svg>
    ),
    
    dms: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <motion.g>
          <motion.rect
            x="25" y="25" width="40" height="50" rx="2"
            fill="none" stroke="currentColor" strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.rect
            x="35" y="20" width="40" height="50" rx="2"
            fill="currentColor"
            fillOpacity="0.2"
            stroke="currentColor" strokeWidth="2"
            initial={{ x: 35, opacity: 0 }}
            animate={{ x: 35, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1, repeat: Infinity, repeatDelay: 1.5 }}
          />
          <motion.line x1="40" y1="30" x2="65" y2="30" stroke="currentColor" strokeWidth="1.5" />
          <motion.line x1="40" y1="38" x2="65" y2="38" stroke="currentColor" strokeWidth="1.5" />
          <motion.line x1="40" y1="46" x2="60" y2="46" stroke="currentColor" strokeWidth="1.5" />
        </motion.g>
      </svg>
    ),
    
    assessment: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <motion.circle
          cx="50" cy="35" r="15"
          fill="none" stroke="currentColor" strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.path
          d="M50 50 L50 65 M40 70 L50 65 L60 70"
          fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.5, duration: 1, repeat: Infinity, repeatDelay: 1 }}
        />
        <motion.g>
          {[0, 120, 240].map((angle, i) => (
            <motion.circle
              key={i}
              cx={50 + 25 * Math.cos((angle - 90) * Math.PI / 180)}
              cy={35 + 25 * Math.sin((angle - 90) * Math.PI / 180)}
              r="3"
              fill="currentColor"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ delay: i * 0.2, duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
            />
          ))}
        </motion.g>
      </svg>
    ),
    
    hr: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <motion.g>
          <motion.circle
            cx="35" cy="35" r="8"
            fill="currentColor"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
          />
          <motion.path
            d="M35 45 L35 60 M27 53 L35 60 L43 53"
            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.5, duration: 0.8, repeat: Infinity, repeatDelay: 2 }}
          />
        </motion.g>
        <motion.g>
          <motion.circle
            cx="65" cy="35" r="8"
            fill="currentColor"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
          />
          <motion.path
            d="M65 45 L65 60 M57 53 L65 60 L73 53"
            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.8, duration: 0.8, repeat: Infinity, repeatDelay: 2 }}
          />
        </motion.g>
        <motion.path
          d="M20 70 Q50 75 80 70"
          fill="none" stroke="currentColor" strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1.6, duration: 1, repeat: Infinity, repeatDelay: 1 }}
        />
      </svg>
    ),
    
    ai: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <motion.circle
          cx="50" cy="50" r="20"
          fill="none" stroke="currentColor" strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.g>
          {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <motion.g key={i}>
              <motion.line
                x1={50 + 22 * Math.cos(angle * Math.PI / 180)}
                y1={50 + 22 * Math.sin(angle * Math.PI / 180)}
                x2={50 + 32 * Math.cos(angle * Math.PI / 180)}
                y2={50 + 32 * Math.sin(angle * Math.PI / 180)}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: i * 0.1, duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
              />
              <motion.circle
                cx={50 + 32 * Math.cos(angle * Math.PI / 180)}
                cy={50 + 32 * Math.sin(angle * Math.PI / 180)}
                r="2"
                fill="currentColor"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.5, 1] }}
                transition={{ delay: i * 0.1 + 0.5, duration: 0.3, repeat: Infinity, repeatDelay: 2 }}
              />
            </motion.g>
          ))}
        </motion.g>
      </svg>
    ),
    
    inventory: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <motion.rect
          x="20" y="30" width="60" height="45" rx="2"
          fill="none" stroke="currentColor" strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.line x1="35" y1="30" x2="35" y2="75" stroke="currentColor" strokeWidth="2" />
        <motion.line x1="50" y1="30" x2="50" y2="75" stroke="currentColor" strokeWidth="2" />
        <motion.line x1="65" y1="30" x2="65" y2="75" stroke="currentColor" strokeWidth="2" />
        <motion.path
          d="M25 25 L50 15 L75 25"
          fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.5, duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
        />
      </svg>
    ),
    
    project: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <motion.circle
          cx="30" cy="50" r="8"
          fill="currentColor"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
        />
        <motion.circle
          cx="50" cy="30" r="8"
          fill="currentColor"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
        />
        <motion.circle
          cx="70" cy="50" r="8"
          fill="currentColor"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
        />
        <motion.circle
          cx="50" cy="70" r="8"
          fill="currentColor"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.9, duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
        />
        <motion.path
          d="M30 50 L50 30 L70 50 L50 70 Z"
          fill="none" stroke="currentColor" strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1.4, duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
        />
      </svg>
    ),
    
    recruitment: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <motion.circle
          cx="50" cy="35" r="12"
          fill="none" stroke="currentColor" strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.path
          d="M50 48 L50 60 M42 55 L50 60 L58 55 M35 70 Q50 75 65 70"
          fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.5, duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
        />
        <motion.path
          d="M55 28 L65 20 L70 25"
          fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1.5, duration: 0.8, repeat: Infinity, repeatDelay: 1.5 }}
        />
      </svg>
    ),
    
    social: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <motion.path
          d="M30 40 L50 25 L70 40 L70 70 L30 70 Z"
          fill="none" stroke="currentColor" strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.path
          d="M40 50 L45 55 L60 42"
          fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1, duration: 0.8, repeat: Infinity, repeatDelay: 1.5 }}
        />
        <motion.g>
          {[-15, 0, 15].map((offset, i) => (
            <motion.circle
              key={i}
              cx={50 + offset}
              cy={75}
              r="2"
              fill="currentColor"
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: [0, -5, 0], opacity: [0, 1, 0] }}
              transition={{ delay: i * 0.2 + 1.8, duration: 1, repeat: Infinity, repeatDelay: 1.5 }}
            />
          ))}
        </motion.g>
      </svg>
    ),
    
    desk: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <motion.rect
          x="25" y="25" width="50" height="50" rx="3"
          fill="none" stroke="currentColor" strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.circle
          cx="50" cy="50" r="12"
          fill="currentColor"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.1, 1] }}
          transition={{ delay: 0.5, duration: 0.8, repeat: Infinity, repeatDelay: 1.5 }}
        />
        <motion.path
          d="M50 38 L50 50 L58 54"
          fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1.3, duration: 0.5, repeat: Infinity, repeatDelay: 1.5 }}
        />
      </svg>
    ),
    
    eye: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <motion.path
          d="M20 50 Q50 30 80 50 Q50 70 20 50"
          fill="none" stroke="currentColor" strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.circle
          cx="50" cy="50" r="12"
          fill="none" stroke="currentColor" strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.5, duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.circle
          cx="50" cy="50" r="6"
          fill="currentColor"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ delay: 1, duration: 0.8, repeat: Infinity, repeatDelay: 1.5 }}
        />
      </svg>
    ),
  };

  return icons[type] || icons.vending;
};

const products = [
  {
    id: 1,
    title: 'Smart Vending & Locker Machines',
    icon: 'vending',
    description: 'Complete Package Care & Management',
    points: [
      'Smart Lockers offer ultra-secure, automated, and scalable management of mails, parcels, and assets – no matter what your market!',
      'Switch to a High-Performance Last-Mile Delivery System',
      'Smart Lockers system will be loved by all users – recipients, carriers, and property owners. Replace the mail management chaos with slick 15-second package drops',
    ],
  },
  {
    id: 2,
    title: 'VMS – Visa Management System',
    icon: 'vms',
    description: 'The Visa Management Platform (VMP) is an enterprise-grade, end-to-end digital solution designed to manage the complete lifecycle of visa applications for governments, diplomatic missions & authorized service providers.',
    long: 'Built on the PSAITECH Low-Code Digital Platform, the solution combines robust workflow automation, secure document management, biometric processing & real-time monitoring to deliver a highly reliable and compliant visa processing ecosystem. Developed on the PSAITECH Platform, the Visa Management Platform exemplifies our ability to deliver complex, security-sensitive digital systems with precision and reliability.',
  },
  {
    id: 3,
    title: 'XERP',
    icon: 'erp',
    description: 'We offer a comprehensive finance and accounting solution for all business requirements, it simplifies accounting business procedures for enterprise-wide financial management, enables better decision-making, and lowers expenses.',
    long: 'Payroll, employee self-service, accounting, inventories, sales and marketing, and customer relationship management (CRM) are just a few of the crucial business processes that it automates. It works well in accounting and finance to manage risks and keep expenses under control. This system gathers financial information from multiple departments and generates practical financial reports including the balance sheet, profit and loss account, and trial balance.',
  },
  {
    id: 4,
    title: 'X-Sign',
    icon: 'signature',
    description: 'X-Sign is a cutting-edge digital signature solution designed to revolutionize document management for businesses.',
    points: [
      'Enhanced efficiency, security, and sustainability',
      'Sign, send, and secure documents digitally',
      'Complies with the Information Technology Act, ensuring legal recognition of digital signatures',
    ],
  },
  {
    id: 5,
    title: 'e-Governance Solutions',
    icon: 'governance',
    description: 'e-governance solutions encompass Self Service Portals and GIS Applications designed to enhance citizen engagement and streamline government services.',
    long: 'The Self Service Portals offer secure, personalised access to online services such as tax payments, grievance registration, and utility management. The GIS Applications provide a user-friendly interface for locating essential services, booking community facilities, and making online payments, thereby improving accessibility, efficiency, and transparency in municipal operations.',
  },
  {
    id: 6,
    title: 'eDMS – Document Management System',
    icon: 'dms',
    description: 'PSAITECH eDMS offers a comprehensive, end-to-end architecture for delivering Rich Internet Applications (RIAs) and content across various platforms.',
    long: 'It ensures efficient knowledge sharing and content management, enhancing information distribution and workflow management. With features like document collaboration, annotation, revision control, and approval stage management, eDMS streamline enterprise-wide processes. Built on open-source technologies, it provides significant cost savings compared to proprietary systems.',
  },
  {
    id: 7,
    title: 'Assessment Module',
    icon: 'assessment',
    description: 'Identifying and evaluating a company\'s current employees for the objectives of reassignment, training, promotion, or dismissal is at the core of PSAITECH Assessment module.',
    long: 'The assessment also includes determining which employees\' abilities are required to carry out the company\'s plans and reviewing their employees to see whether their talents fit the objectives of the business needs. If this practice is repeated on a regular basis, the company\'s staff develops and their competencies are more closely matched with the business plan.',
  },
  {
    id: 8,
    title: 'Human Capital Management',
    icon: 'hr',
    description: 'Our Human Capital Management solution is built by top HR and IT experts. It\'s user-friendly and unique, with remarkable features.',
    long: 'This browser-based application requires no installation and is easy to use. It integrates all HR needs into one comprehensive solution. With cloud-based architecture, access it anytime, anywhere. No special training is needed. This tool meets all manager requirements, offering simplicity and efficiency.',
  },
  {
    id: 9,
    title: 'AI & Advanced Predictive Intelligence',
    icon: 'ai',
    description: 'Artificial intelligence in policing helps in improving decision-making and can have a hugely beneficial impact on society, economy, and the environment.',
    long: 'We provide several artificial intelligence tools and techniques that play an important role in improving the policy process, such as decision support and optimization techniques. Policing is an extremely complex process that makes changes to the environment and affects the three pillars of sustainable development.',
  },
  {
    id: 10,
    title: 'Inventory Solution',
    icon: 'inventory',
    description: 'PSAITECH Inventory Solution helps you manage inventory easily.',
    points: [
      'Create online requisitions, automate PO creation',
      'Handle material receipts, and manage stock transfers',
      'Get clear stock visibility',
      'Save time and money with industry standards',
    ],
  },
  {
    id: 11,
    title: 'Project Management System',
    icon: 'project',
    description: 'PSAITECH Project Management Solution (PMS) enhances project development. It ensures the smooth handling of new teams and stakeholders.',
    points: [
      'Structure and control, ensuring projects meet customer expectations',
      'Planning, risk management, resource allocation',
      'Budgeting and communication',
      'Helps businesses achieve goals and deliverables efficiently',
    ],
  },
  {
    id: 12,
    title: 'Recruitment Assessment Platform',
    icon: 'recruitment',
    description: 'PSAITECH\'s recruitment assessment platform creates a low-cost, efficient hiring process. AI helps automate sourcing, screening, and interviewing.',
    points: [
      'Integration of multiple platforms',
      'Applicant tracking system',
      'Manpower summary dashboard',
      'Centralized access for stakeholders ensures smooth communication',
    ],
  },
  {
    id: 13,
    title: 'Social Media Analytics',
    icon: 'social',
    description: 'The SMA tool enhances decision-making by collecting and analyzing social media data.',
    points: [
      'Customizable features, including sentiment analytics',
      'Profile comparison and advanced research',
      'Find viral posts using keywords',
      'Hashtag trends and profile searches',
    ],
  },
  {
    id: 14,
    title: 'Service Desk',
    icon: 'desk',
    description: 'Boost employee productivity with our online service desk solution. Say goodbye to time-consuming query handling.',
    long: 'Our comprehensive technical support ensures swift issue resolution, empowering your workforce. Unlike traditional help desks, our service desk offers a broader approach to IT support, ensuring all employee needs are met efficiently. Elevate employee welfare and streamline operations with our cutting-edge service desk platform.',
  },
  {
    id: 15,
    title: 'PSAITECH Eye',
    icon: 'eye',
    description: 'Our mobile surveillance application offers comprehensive security solutions for homes, ensuring continuous monitoring and detection of intruders in your absence.',
    long: 'With motion detection and facial recognition capabilities, any suspicious activity triggers immediate alerts via email, call, or SMS. Our app, compatible with Android and Apple devices, features live video streaming and an attendance management system for enhanced security. Seamlessly integrate various devices like IP cameras and alarms for a robust security setup.',
  },
];

// Product Card Component
const ProductCard = ({ product, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Check if product has expandable content
  const hasExpandableContent = product.long && product.long.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="group relative bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
    >
      {/* Gradient Background on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative p-8">
        {/* Icon */}
        <motion.div
          className="w-20 h-20 mb-6 text-blue-600"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <AnimatedIcon type={product.icon} />
        </motion.div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
          {product.title}
        </h3>

        {/* Description */}
        {product.description && (
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            {product.description}
          </p>
        )}

        {/* Long Description (Expandable) */}
        {product.long && (
          <motion.div
            initial={false}
            animate={{ height: isExpanded ? 'auto' : 0 }}
            className="overflow-hidden"
          >
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              {product.long}
            </p>
          </motion.div>
        )}

        {/* Points/Features */}
        {product.points && (
          <ul className="space-y-2.5 mb-6">
            {product.points.map((point, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 + idx * 0.1 }}
                className="text-sm text-gray-700 flex items-start gap-3"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                {point}
              </motion.li>
            ))}
          </ul>
        )}

        {/* Read More Button - Only show if there's expandable content */}
        {hasExpandableContent && (
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors group/btn"
            whileHover={{ x: 5 }}
          >
            <span>{isExpanded ? 'Show Less' : 'Read More'}</span>
            <motion.div
              animate={{ x: isExpanded ? 0 : [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </motion.button>
        )}
      </div>

      {/* Card Number Badge */}
      <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-xs font-bold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {String(product.id).padStart(2, '0')}
      </div>
    </motion.div>
  );
};

export default function Products() {
  return (
    <Layout>
      <section className="pt-32 pb-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-semibold mb-6 shadow-sm"
            >
              Products & Solutions
            </motion.span>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              Enterprise Digital Products
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              We offer a comprehensive portfolio of IT products and solutions leveraging advanced AI, ML, IR, and cutting-edge technologies to drive smarter decision-making and help organizations achieve their goals.
            </motion.p>
          </motion.div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-20 text-center"
          >
            <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
              <Link
                to="/contact"
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                Request a Demo
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </Link>
              
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}