import { motion } from 'framer-motion';
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const { toast } = useToast();

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    toast({
      title: 'Message Sent!',
      description: 'We will get back to you within 24 hours.',
    });

    setForm({
      name: '',
      email: '',
      phone: '',
      organization: '',
      message: '',
    });
  };

  return (
    <Layout>
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-30" />

        <div className="container-custom relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Contact Us
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get in <span className="gradient-text">Touch</span>
            </h1>

            <p className="text-muted-foreground">
              Request a quote or discuss your IT and manpower requirements with
              our team.
            </p>
          </motion.div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="glow-card p-6">
                <h3 className="text-xl font-semibold mb-6">
                  Contact Information
                </h3>

                <div className="space-y-4">
                  {[
                    {
                      icon: MapPin,
                      label: 'Head Office',
                      value:
                        '1A, Ist Floor, Metro Plaza, E-5, Arera Colony, Bhopal M.P. India, PIN CODE 462016',
                    },
                    {
                      icon: MapPin,
                      label: 'Marketing Office - Raipur',
                      value:
                        'Jai Villa, Yash Vihar Colony, Motinagar, Boriyakhurd, Raipur, Chhattisgarh',
                    },
                    {
                      icon: MapPin,
                      label: 'Marketing Office - Mumbai',
                      value:
                        'B-702, shalom garden, near galaxy hospital, THANE, MAHARASHTRA 401107 India',
                    },
                    {
                      icon: MapPin,
                      label: 'Marketing Office - Bengaluru',
                      value:
                        'Level 8, Tower 1, Umiya Business Bay, Cessna Business Tech Park, Marathahalli ORR, Bengaluru - 560103',
                    },
                    {
                      icon: MapPin,
                      label: 'Marketing Office - Bhopal',
                      value:
                        'Plot No.162, 3rd Floor, Windsor Square, Beside DDX Mall, Kolar Road, Bhopal, MP - 462016',
                    },
                    {
                      icon: Phone,
                      label: 'Phone',
                      value: '+91-755-4222624',
                    },
                    {
                      icon: Mail,
                      label: 'Email (Sales)',
                      value: 'sales@psaitech.com',
                    },
                    {
                      icon: Mail,
                      label: 'Email (HR)',
                      value: 'hr@psaitech.com',
                    },
                    {
                      icon: Mail,
                      label: 'Email (Support)',
                      value: 'support@psaitech.com',
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-start gap-4"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>

                      <div>
                        <div className="text-sm text-muted-foreground">
                          {item.label}
                        </div>

                        <div className="font-medium">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <form
                onSubmit={handleSubmit}
                className="glow-card p-6 space-y-4"
              >
                <h3 className="text-xl font-semibold mb-4">
                  Send a Message
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary outline-none transition-colors"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary outline-none transition-colors"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary outline-none transition-colors"
                  />

                  <input
                    type="text"
                    placeholder="Organization/Department"
                    value={form.organization}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        organization: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary outline-none transition-colors"
                  />
                </div>

                <textarea
                  placeholder="Your Message"
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary outline-none transition-colors resize-none"
                />

                <button
                  type="submit"
                  className="glow-button text-primary-foreground w-full flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
