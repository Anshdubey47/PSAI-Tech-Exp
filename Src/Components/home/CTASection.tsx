import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute inset-0 tech-grid opacity-30" />
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-accent/20 rounded-full blur-[128px]" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Transform Your
            <br />
            <span className="gradient-text">IT Infrastructure ?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Get in touch with our experts to discuss your requirements. We provide customized solutions for all business IT needs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="glow-button text-primary-foreground flex items-center gap-2 px-8 py-4"
              >
                Request a Quote
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <a href="tel:+916263387912">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-lg border border-border text-foreground font-semibold hover:bg-secondary transition-colors flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </motion.button>
            </a>
          </div>

          {/* Contact Info Cards */}
          <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto">
            <motion.a
              href="tel:+917552665544"
              whileHover={{ scale: 1.02 }}
              className="glow-card p-4 flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-sm text-muted-foreground">Call Us</div>
                <div className="font-semibold text-foreground">+91 755 266 5544</div>
              </div>
            </motion.a>
            <motion.a
              href="mailto:info@psassociates.in"
              whileHover={{ scale: 1.02 }}
              className="glow-card p-4 flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-sm text-muted-foreground">Email Us</div>
                <div className="font-semibold text-foreground">info@psaissociates.in</div>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
