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
            <div className="bg-primary text-white p-6 md:p-8 rounded-2xl shadow-lg">

  <div className="text-white text-3xl mb-6 font-serif opacity-40">“</div>

  <p className="text-lg md:text-xl leading-relaxed">
    Technology empowers transformation, but people drive true progress.
    Our commitment is to build trust, deliver excellence, and create
    long-term value for our clients and communities.
  </p>

  <div className="mt-8 text-sm tracking-widest uppercase text-primary font-semibold">
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
