import { motion } from "framer-motion";
import mdImage from "@/assets/images/leaders/Image10.png"; // replace with your image

export default function MDMessageSection() {
  return (
    <section className="py-28 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      <div className="container-custom">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >

          {/* Left - Image */}
          <div className="flex justify-center">
            <div className="relative w-96 h-96 md:w-[28rem] md:h-[28rem] rounded-full overflow-hidden shadow-2xl border-8 border-primary/20">
              <img
                src={mdImage}
                alt="Managing Director"
                className="w-full h-full object-cover object-[50%_15%]"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
  Message from the <span className="text-primary">Managing Director</span>
</h2>

            {/* Highlight Quote */}
            <div className="bg-primary text-white rounded-2xl p-4 md:p-6 shadow-md max-w-2xl">

  <div className="text-white text-3xl mb-4 font-serif opacity-40">“</div>

  <p className="text-base md:text-lg leading-relaxed font-medium text-white">
    Technology empowers transformation, but people drive true progress.
    Our commitment is to build trust, deliver excellence, and create
    long-term value for our clients and communities.
  </p>

  <div className="mt-6 text-sm tracking-widest uppercase text-white font-semibold opacity-90">
    — Managing Director
  </div>
</div>
</div>
     </motion.div>
      </div>
    </section>
  );
}
