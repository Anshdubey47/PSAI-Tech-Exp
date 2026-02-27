import { motion } from "framer-motion";
import mdImage from "@/assets/images/Image10.png"; // replace with your image

export default function MDMessageSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
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
            <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl border-8 border-primary/20">
              <img
                src={mdImage}
                alt="Managing Director"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Message from the <span className="gradient-text">Managing Director</span>
            </h2>

            {/* Highlight Quote */}
            <div className="bg-primary text-white p-6 rounded-xl mb-6 shadow-lg">
              <p className="text-lg font-medium">
                “Technology empowers transformation, but people drive true progress.
                Our commitment is to build trust, deliver excellence, and create
                long-term value for our clients and communities.”
              </p>
              <p className="mt-4 font-semibold">— Managing Director</p>
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
