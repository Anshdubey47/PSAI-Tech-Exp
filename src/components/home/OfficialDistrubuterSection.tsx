import { motion } from "framer-motion";

export default function OfficialDistributorSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white">
      <div className="container mx-auto text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-widest text-orange-400 mb-3"
        >
          Authorized Distribution Partner
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-semibold"
        >
          Official Neva Hardware Distributor to{" "}
          <span className="text-cyan-400">MP Vidhan Sabha</span>
        </motion.h2>

      </div>
    </section>
  );
}
