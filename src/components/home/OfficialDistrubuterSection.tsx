import { motion } from "framer-motion";
import mpLogo from "@/assets/images/mpvidhansabha.png"

export default function OfficialDistributorSection() {
  return (
    <section className="py-24 bg-gradient-to-r from-primary to-primary/80 text-white relative overflow-hidden">

  <div className="container-custom text-center">

    <p className="text-sm tracking-widest uppercase text-white/70 mb-6">
      Authorized Distribution Partner
    </p>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="flex justify-center items-center gap-10 mb-8"
    >
      <div className="w-px h-12 bg-white/40" />
      <img
        src={mpLogo}
        alt="MP Vidhan Sabha"
        className="h-20 object-contain grayscale hover:grayscale-0 transition duration-300"
      />
    </motion.div>

    <h2 className="text-2xl md:text-4xl font-semibold max-w-3xl mx-auto">
      Official Hardware Distribution Partner to
      <span className="text-white font-bold"> MP Vidhan Sabha</span>
    </h2>

  </div>
</section>
  );
}
