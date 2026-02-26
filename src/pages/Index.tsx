import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import ClientsSection from '@/components/home/ClientsSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import CTASection from '@/components/home/CTASection';
import { motion } from "framer-motion";
import ODSection from "@/components/home/OfficialDistrubuterSection.tsx";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ODSection/>
      <ServicesSection />
      <ClientsSection />
      <WhyChooseUsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
