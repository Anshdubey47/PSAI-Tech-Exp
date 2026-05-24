import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Star } from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { Button } from '../components/ui/Button';
import { contacts } from '../data/content';

export const Contact: React.FC = () => {
  const [activeForm, setActiveForm] = useState<'inquiry' | 'feedback'>('inquiry');

  // Inquiry Form State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    interest: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Feedback Form State
  const [feedbackData, setFeedbackData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    category: '',
    rating: 0,
    message: ''
  });
  const [hoveredRating, setHoveredRating] = useState(0);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [feedbackLoading, setFeedbackLoading] = useState(false);
  const [ratingError, setRatingError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFeedbackChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFeedbackData({
      ...feedbackData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        interest: '',
        message: ''
      });
    }, 1500);
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (feedbackData.rating === 0) {
      setRatingError(true);
      return;
    }
    setRatingError(false);
    setFeedbackLoading(true);

    // Simulate API request
    setTimeout(() => {
      setFeedbackLoading(false);
      setFeedbackSubmitted(true);
      setFeedbackData({
        firstName: '',
        lastName: '',
        email: '',
        category: '',
        rating: 0,
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="relative">
      
      {/* BANNER HEADER SECTION (DARK THEME) */}
      <section className="relative pt-36 pb-16 overflow-hidden">
        {/* Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-blue/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <SectionHeader
            badge="Consultation Portal"
            title="Let's Build the"
            titleGradient="Future Together"
            description="Ready to transform your enterprise operations? Connect with our technology consultants to schedule a platform diagnostic today."
            align="center"
          />
        </div>
      </section>

      {/* DUAL CONTACT LAYOUT (MATTE WHITE THEME) */}
      <section className="py-20 bg-[#fafafa] text-brand-dark min-h-screen relative overflow-hidden border-t border-black/5">
        <div className="absolute inset-0 bg-grid-light opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
            
            {/* LEFT COLUMN: CONTACT CARDS & MAP */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-8 text-left">
              
              {/* HQ Card */}
              <ScrollReveal direction="left">
                <div className="glass-panel-light p-8 rounded-3xl border border-black/5 shadow-xl h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-extrabold text-brand-dark mb-6">Corporate Headquarters</h3>
                    
                    <div className="space-y-6">
                      
                      {/* Address */}
                      <div className="flex items-start gap-4">
                        <div className="w-11 h-11 rounded-full bg-black/5 flex items-center justify-center text-brand-blue shrink-0">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-extrabold text-brand-dark text-sm">Bhopal Hub</p>
                          <p className="text-gray-500 text-xs leading-relaxed font-semibold mt-1">
                            1A, 1st Floor, Metro Plaza, E-5,<br />
                            Arera Colony, Bhopal, M.P., India,<br />
                            PIN CODE 462016
                          </p>
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="flex items-center gap-4">
                        <div className="w-11 h-11 rounded-full bg-black/5 flex items-center justify-center text-brand-blue shrink-0">
                          <Phone className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-extrabold text-brand-dark text-sm">General Hotline</p>
                          <p className="text-gray-500 text-xs font-semibold mt-1">{contacts.phone}</p>
                        </div>
                      </div>

                      {/* Emails */}
                      <div className="flex items-start gap-4">
                        <div className="w-11 h-11 rounded-full bg-black/5 flex items-center justify-center text-brand-blue shrink-0">
                          <Mail className="w-5 h-5" />
                        </div>
                        <div className="space-y-1">
                          <p className="font-extrabold text-brand-dark text-sm mb-1.5">Department Channels</p>
                          {contacts.emails.map((e, index) => (
                            <div key={index} className="text-xs">
                              <span className="font-bold text-gray-400 mr-1 uppercase">{e.label}:</span>
                              <a href={`mailto:${e.email}`} className="text-brand-blue hover:underline font-semibold">{e.email}</a>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Interactive Google Map */}
              <ScrollReveal direction="left" delay={150}>
                <div className="h-64 rounded-3xl overflow-hidden border border-black/5 shadow-inner bg-black/5">
                  <iframe
                    title="Bhopal Headquarters Location Map"
                    src="https://maps.google.com/maps?q=Metro%20Plaza%2C%20Arera%20Colony%2C%20Bhopal&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </ScrollReveal>


            </div>

            {/* RIGHT COLUMN: CONTACT FORM */}
            <div className="lg:col-span-7 flex">
              <ScrollReveal direction="right" className="w-full flex">
                <div className="bg-white p-8 md:p-10 rounded-3xl border border-black/5 shadow-2xl flex flex-col justify-between w-full h-full">
                  
                  {/* Sliding Tabs */}
                  <div className="flex border-b border-black/5 pb-4 mb-8">
                    <button
                      type="button"
                      onClick={() => setActiveForm('inquiry')}
                      className={`flex-1 pb-3 text-sm font-bold uppercase tracking-wider border-b-2 transition-all duration-300 ${
                        activeForm === 'inquiry'
                          ? 'border-brand-blue text-brand-blue'
                          : 'border-transparent text-gray-400 hover:text-brand-dark'
                      }`}
                    >
                      Inquiry Portal
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveForm('feedback')}
                      className={`flex-1 pb-3 text-sm font-bold uppercase tracking-wider border-b-2 transition-all duration-300 ${
                        activeForm === 'feedback'
                          ? 'border-brand-blue text-brand-blue'
                          : 'border-transparent text-gray-400 hover:text-brand-dark'
                      }`}
                    >
                      Submit Feedback
                    </button>
                  </div>

                  {activeForm === 'inquiry' ? (
                    submitted ? (
                      <div className="flex-grow flex flex-col justify-center items-center text-center py-12 space-y-6">
                        <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue border border-brand-blue/20">
                          <CheckCircle2 className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-extrabold text-brand-dark tracking-tight">Query Dispatched</h3>
                        <p className="text-gray-500 max-w-sm text-sm font-semibold leading-relaxed">
                          Thank you for contacting us. A technology coordinator will reach out to you within the next 24 operational hours.
                        </p>
                        <button
                          onClick={() => setSubmitted(false)}
                          className="text-xs font-bold uppercase tracking-widest text-brand-blue hover:text-brand-dark transition-colors mt-2"
                        >
                          Send another query
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6 text-left h-full flex flex-col justify-between">
                        <div className="space-y-6">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex flex-col">
                              <label htmlFor="firstName" className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">First Name</label>
                              <input
                                required
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="px-4 py-3 bg-black/5 border border-black/5 focus:border-brand-blue/30 rounded-xl text-sm font-semibold text-brand-dark focus:outline-none focus:bg-white transition-all shadow-inner"
                                placeholder="Gyanendra"
                              />
                            </div>
                            
                            <div className="flex flex-col">
                              <label htmlFor="lastName" className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">Last Name</label>
                              <input
                                required
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="px-4 py-3 bg-black/5 border border-black/5 focus:border-brand-blue/30 rounded-xl text-sm font-semibold text-brand-dark focus:outline-none focus:bg-white transition-all shadow-inner"
                                placeholder="Mudgal"
                              />
                            </div>
                          </div>

                          <div className="flex flex-col">
                            <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">Work Email</label>
                            <input
                              required
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className="px-4 py-3 bg-black/5 border border-black/5 focus:border-brand-blue/30 rounded-xl text-sm font-semibold text-brand-dark focus:outline-none focus:bg-white transition-all shadow-inner"
                              placeholder="mudgal@psaitech.com"
                            />
                          </div>

                          <div className="flex flex-col">
                            <label htmlFor="interest" className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">Topic of Interest</label>
                            <select
                              required
                              id="interest"
                              name="interest"
                              value={formData.interest}
                              onChange={handleChange}
                              className="px-4 py-3 bg-black/5 border border-black/5 focus:border-brand-blue/30 rounded-xl text-sm font-semibold text-brand-dark focus:outline-none focus:bg-white transition-all shadow-inner cursor-pointer"
                            >
                              <option value="" disabled>Select an interest area</option>
                              <option value="erp">Enterprise Resource Planning (XERP)</option>
                              <option value="ai">AI Systems Integration</option>
                              <option value="cloud">Cloud & Infrastructure Adoption</option>
                              <option value="security">Zero-Trust & Cyber Defense</option>
                              <option value="consulting">Services & Manpower Consultancy</option>
                            </select>
                          </div>

                          <div className="flex flex-col">
                            <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">How can we help?</label>
                            <textarea
                              required
                              id="message"
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              rows={4}
                              className="px-4 py-3 bg-black/5 border border-black/5 focus:border-brand-blue/30 rounded-xl text-sm font-semibold text-brand-dark focus:outline-none focus:bg-white transition-all shadow-inner resize-none"
                              placeholder="Write your diagnostic request details here..."
                            />
                          </div>
                        </div>

                        <Button
                          type="submit"
                          disabled={loading}
                          variant="primary"
                          glow
                          className="w-full py-4 mt-8 font-bold justify-center"
                        >
                          {loading ? 'Dispatching...' : 'Send Message'}
                          {!loading && <Send className="w-4 h-4 ml-1.5" />}
                        </Button>
                      </form>
                    )
                  ) : (
                    feedbackSubmitted ? (
                      <div className="flex-grow flex flex-col justify-center items-center text-center py-12 space-y-6">
                        <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue border border-brand-blue/20">
                          <CheckCircle2 className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-extrabold text-brand-dark tracking-tight">Feedback Submitted</h3>
                        <p className="text-gray-500 max-w-sm text-sm font-semibold leading-relaxed">
                          Thank you for sharing your experience. Your feedback helps us continuously improve our systems and services.
                        </p>
                        <button
                          type="button"
                          onClick={() => setFeedbackSubmitted(false)}
                          className="text-xs font-bold uppercase tracking-widest text-brand-blue hover:text-brand-dark transition-colors mt-2"
                        >
                          Submit more feedback
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleFeedbackSubmit} className="space-y-6 text-left h-full flex flex-col justify-between">
                        <div className="space-y-6">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex flex-col">
                              <label htmlFor="feedbackFirstName" className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">First Name</label>
                              <input
                                required
                                type="text"
                                id="feedbackFirstName"
                                name="firstName"
                                value={feedbackData.firstName}
                                onChange={handleFeedbackChange}
                                className="px-4 py-3 bg-black/5 border border-black/5 focus:border-brand-blue/30 rounded-xl text-sm font-semibold text-brand-dark focus:outline-none focus:bg-white transition-all shadow-inner"
                                placeholder="Gyanendra"
                              />
                            </div>
                            
                            <div className="flex flex-col">
                              <label htmlFor="feedbackLastName" className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">Last Name</label>
                              <input
                                required
                                type="text"
                                id="feedbackLastName"
                                name="lastName"
                                value={feedbackData.lastName}
                                onChange={handleFeedbackChange}
                                className="px-4 py-3 bg-black/5 border border-black/5 focus:border-brand-blue/30 rounded-xl text-sm font-semibold text-brand-dark focus:outline-none focus:bg-white transition-all shadow-inner"
                                placeholder="Mudgal"
                              />
                            </div>
                          </div>

                          <div className="flex flex-col">
                            <label htmlFor="feedbackEmail" className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">Email Address</label>
                            <input
                              required
                              type="email"
                              id="feedbackEmail"
                              name="email"
                              value={feedbackData.email}
                              onChange={handleFeedbackChange}
                              className="px-4 py-3 bg-black/5 border border-black/5 focus:border-brand-blue/30 rounded-xl text-sm font-semibold text-brand-dark focus:outline-none focus:bg-white transition-all shadow-inner"
                              placeholder="mudgal@psaitech.com"
                            />
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-end">
                            <div className="flex flex-col">
                              <label htmlFor="feedbackCategory" className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">Feedback Category</label>
                              <select
                                required
                                id="feedbackCategory"
                                name="category"
                                value={feedbackData.category}
                                onChange={handleFeedbackChange}
                                className="px-4 py-3 bg-black/5 border border-black/5 focus:border-brand-blue/30 rounded-xl text-sm font-semibold text-brand-dark focus:outline-none focus:bg-white transition-all shadow-inner cursor-pointer"
                              >
                                <option value="" disabled>Select a category</option>
                                <option value="erp">ERP & Platform Features</option>
                                <option value="ai">AI Integration & Models</option>
                                <option value="security">Security & Reliability</option>
                                <option value="support">Customer Support</option>
                                <option value="consulting">Professional Consulting</option>
                                <option value="general">General Experience</option>
                              </select>
                            </div>

                            <div className="flex flex-col">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">Rating</span>
                              <div className="flex items-center gap-1.5 py-2.5">
                                {[1, 2, 3, 4, 5].map((star) => {
                                  const isHighlighted = (hoveredRating || feedbackData.rating) >= star;
                                  return (
                                    <button
                                      key={star}
                                      type="button"
                                      onClick={() => {
                                        setFeedbackData({ ...feedbackData, rating: star });
                                        setRatingError(false);
                                      }}
                                      onMouseEnter={() => setHoveredRating(star)}
                                      onMouseLeave={() => setHoveredRating(0)}
                                      className="focus:outline-none transition-transform duration-200 active:scale-95"
                                    >
                                      <Star
                                        className={`w-6 h-6 transition-colors duration-200 ${
                                          isHighlighted
                                            ? 'text-amber-500 fill-amber-500 filter drop-shadow-[0_0_2px_rgba(245,158,11,0.4)]'
                                            : 'text-gray-300'
                                        }`}
                                      />
                                    </button>
                                  );
                                })}
                              </div>
                            </div>
                          </div>

                          {ratingError && (
                            <p className="text-red-500 text-xs font-bold -mt-3">Please select a rating of at least 1 star.</p>
                          )}

                          <div className="flex flex-col">
                            <label htmlFor="feedbackMessage" className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">Your Review</label>
                            <textarea
                              required
                              id="feedbackMessage"
                              name="message"
                              value={feedbackData.message}
                              onChange={handleFeedbackChange}
                              rows={4}
                              className="px-4 py-3 bg-black/5 border border-black/5 focus:border-brand-blue/30 rounded-xl text-sm font-semibold text-brand-dark focus:outline-none focus:bg-white transition-all shadow-inner resize-none"
                              placeholder="Share your thoughts on our services, platforms, or consultation experience..."
                            />
                          </div>
                        </div>

                        <Button
                          type="submit"
                          disabled={feedbackLoading}
                          variant="primary"
                          glow
                          className="w-full py-4 mt-8 font-bold justify-center"
                        >
                          {feedbackLoading ? 'Submitting...' : 'Submit Feedback'}
                          {!feedbackLoading && <Send className="w-4 h-4 ml-1.5" />}
                        </Button>
                      </form>
                    )
                  )}

                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
export default Contact;
