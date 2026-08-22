import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GajdaSectionHeader } from '../ui/GajdaSectionHeader';
import { personalInfo } from '../../data/portfolioData';
import { Mail, Check, Copy, Send, Linkedin, Github } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';
import { editorialEase, snappySpring } from '../../utils/motion';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all required fields marked with *.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    
    // Construct direct mailto URI
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || `Portfolio Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 px-5 sm:px-8 bg-[#08090d] border-t border-white/10 relative overflow-hidden">
      {/* Background Finale Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-3xl mx-auto relative z-10">
        <GajdaSectionHeader
          title="CONTACT"
          subtitle="Have a question, an opportunity, or a project to discuss? Send a message directly."
        />

        {/* Quick Email Copy & Social Connectors Bar */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: editorialEase }}
          className="flex flex-col sm:flex-row items-center justify-between p-4 sm:p-5 bg-[#0c0d12] border border-white/10 mb-10 gap-4 shadow-xl rounded-lg"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border border-white/20 flex items-center justify-center text-white">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">Direct Inquiries</span>
              <span className="text-xs sm:text-sm font-mono text-white font-semibold">{personalInfo.email}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <MagneticButton strength={5}>
              <button
                onClick={handleCopyEmail}
                className="px-3.5 py-1.5 border border-white/20 hover:border-white text-[11px] font-mono uppercase tracking-wider text-white transition-all flex items-center gap-1.5 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </MagneticButton>

            <MagneticButton strength={5}>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-white/20 hover:border-white text-slate-300 hover:text-white transition-all block cursor-pointer"
                aria-label="LinkedIn"
                title="Connect on LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </MagneticButton>

            <MagneticButton strength={5}>
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-white/20 hover:border-white text-slate-300 hover:text-white transition-all block cursor-pointer"
                aria-label="GitHub"
                title="Follow on GitHub"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
            </MagneticButton>
          </div>
        </motion.div>

        {error && (
          <motion.div 
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-3.5 bg-red-950/40 border border-red-500/40 text-red-300 text-xs font-mono mb-6"
          >
            {error}
          </motion.div>
        )}

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="submitted-state"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={snappySpring}
              className="p-8 border-2 border-white bg-[#0c0d12] text-center space-y-3 shadow-2xl rounded-xl"
            >
              <Check className="w-8 h-8 text-white mx-auto" />
              <h3 className="text-base font-display font-extrabold uppercase tracking-wider text-white">
                DISPATCHING TO EMAIL CLIENT...
              </h3>
              <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
                Your default email application is being triggered with your pre-filled inquiry. You can also write directly to <span className="text-white font-mono">{personalInfo.email}</span>.
              </p>
              <MagneticButton strength={6}>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-5 py-2 border border-white text-xs font-mono uppercase tracking-wider text-white hover:bg-white hover:text-black transition-all cursor-pointer"
                >
                  Send another message
                </button>
              </MagneticButton>
            </motion.div>
          ) : (
            <motion.form
              key="form-state"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: 0.08, ease: editorialEase }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-xs font-display font-bold uppercase tracking-widest text-slate-300 mb-2">
                  ENTER YOUR NAME*
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your Name / Organization"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#050608] border border-white/15 focus:border-white p-3.5 text-xs font-mono text-white placeholder:text-slate-600 focus:outline-none transition-colors rounded-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-display font-bold uppercase tracking-widest text-slate-300 mb-2">
                  ENTER YOUR EMAIL*
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#050608] border border-white/15 focus:border-white p-3.5 text-xs font-mono text-white placeholder:text-slate-600 focus:outline-none transition-colors rounded-none"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-display font-bold uppercase tracking-widest text-slate-300 mb-2">
                  SUBJECT
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Software Engineering Opportunity / Project Inquiry"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-[#050608] border border-white/15 focus:border-white p-3.5 text-xs font-mono text-white placeholder:text-slate-600 focus:outline-none transition-colors rounded-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-display font-bold uppercase tracking-widest text-slate-300 mb-2">
                  YOUR MESSAGE*
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  placeholder="Describe your project, role, or collaboration inquiry..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#050608] border border-white/15 focus:border-white p-3.5 text-xs font-mono text-white placeholder:text-slate-600 focus:outline-none transition-colors resize-y rounded-none"
                />
              </div>

              <div className="text-center pt-2">
                <MagneticButton strength={8}>
                  <button
                    type="submit"
                    className="gajda-btn-primary px-12 py-3.5 text-xs font-display font-black uppercase tracking-widest w-full sm:w-auto inline-flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>SUBMIT MESSAGE</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </MagneticButton>
              </div>
            </motion.form>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
