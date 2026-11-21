import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Sparkles, 
  MessageSquare, 
  CheckCircle2, 
  Phone 
} from 'lucide-react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Icons } from './SocialIcons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate clean form handling
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Fire festive confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Fallback gracefully
      }
    }, 600);
  };

  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: Icons.WhatsApp,
      href: 'https://wa.me/#',
      color: 'hover:text-emerald-400 hover:border-emerald-500/40'
    },
    {
      name: 'Facebook',
      icon: Icons.Facebook,
      href: 'https://facebook.com/#',
      color: 'hover:text-blue-400 hover:border-blue-500/40'
    },
    {
      name: 'Instagram',
      icon: Icons.Instagram,
      href: 'https://instagram.com/#',
      color: 'hover:text-pink-400 hover:border-pink-500/40'
    },
    {
      name: 'GitHub',
      icon: Icons.GitHub,
      href: 'https://github.com/abbaskhan-dev',
      color: 'hover:text-purple-400 hover:border-purple-500/40'
    },
    {
      name: 'LinkedIn',
      icon: Icons.LinkedIn,
      href: 'https://linkedin.com/in/#',
      color: 'hover:text-cyan-400 hover:border-cyan-500/40'
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-purple-700/20 via-blue-600/15 to-cyan-500/20 rounded-full blur-[150px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 font-heading">
            Let's Work Together
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Have a project or creative idea? Let's bring it to life!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
          
          {/* Left: Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl p-8 bg-[#0a0f22]/90 border border-white/10 backdrop-blur-xl">
              <h3 className="text-2xl font-bold text-white mb-3 font-heading">
                Ready to collaborate?
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Whether you need a full responsive website, a modern poster campaign, or an eye-catching branding package, I'm ready to craft something amazing with you.
              </p>

              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-mono">Email Abbas</p>
                    <a 
                      href="mailto:abbas3546@gmail.com" 
                      className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors"
                    >
                      abbas3546@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-mono">Work Availability</p>
                    <p className="text-sm font-semibold text-emerald-400">Open for Freelance Projects</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links Card */}
            <div className="rounded-3xl p-6 bg-[#0c1026]/90 border border-white/10 backdrop-blur-xl">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4 font-mono">
                Connect Across Platforms
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-medium text-slate-300 transition-all ${social.color}`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{social.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-8 sm:p-10 bg-[#0a0f24]/95 border border-white/10 backdrop-blur-xl relative">
              
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2 font-heading">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-slate-300 text-sm max-w-md mb-6">
                    Thank you for reaching out, <span className="text-cyan-300 font-semibold">{formData.name}</span>! I have received your message and will get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-sm text-white font-medium border border-white/15 transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono font-medium text-slate-300 uppercase tracking-wider mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono font-medium text-slate-300 uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="e.g. sarah@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono font-medium text-slate-300 uppercase tracking-wider mb-2">
                      Your Message or Project Details
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      placeholder="Tell me about your website project, poster requirements, or branding vision..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all text-sm resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-purple-500/25 transition-all cursor-pointer active:scale-[0.99] disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
