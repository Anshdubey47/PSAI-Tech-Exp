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
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
              Message from the <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Managing Director</span>
            </h2>

            {/* Highlight Quote */}
            <div className="relative bg-gradient-to-br from-blue-700 to-blue-900 text-white p-10 md:p-12 rounded-3xl shadow-2xl overflow-hidden">

  {/* Decorative Glow */}
  <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

  {/* Quote Mark */}
  <div className="text-5xl opacity-20 font-serif mb-4">“</div>

  <p className="text-lg md:text-xl leading-relaxed font-medium tracking-wide">
    Technology empowers transformation, but people drive true progress.
    Our commitment is to build trust, deliver excellence, and create
    long-term value for our clients and communities.
  </p>

  <div className="mt-6 text-sm md:text-base font-semibold tracking-wider uppercase opacity-90">
    — Managing Director
  </div>
</div>

            {/* Full Message */}
            <p className="text-muted-foreground leading-relaxed">
              At PS Associates, we believe in building sustainable partnerships
              through innovation, integrity, and execution excellence. As the
              digital landscape evolves, we remain focused on delivering
              enterprise-grade solutions that create measurable impact.
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
