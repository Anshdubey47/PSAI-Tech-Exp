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
    At PS Associates, we believe sustainable success is built on trust, integrity, and forward-thinking leadership.
Our focus has always been to deliver reliable, high-quality technology and workforce solutions that create measurable value for our clients.
We adapt to evolving industry demands while maintaining the standards that define our organization.
Beyond execution, we strive to build long-term partnerships grounded in transparency and performance.
As we move forward, our vision remains clear — to strengthen our impact, expand our capabilities, and remain a trusted partner in progress.
  </p>

  <div className="mt-6 text-sm tracking-widest uppercase text-white font-semibold opacity-90">
    — Mr.Mahesh Dubey (Managing Director)
  </div>
</div>
</div>
     </motion.div>
      </div>
    </section>
  );
}
