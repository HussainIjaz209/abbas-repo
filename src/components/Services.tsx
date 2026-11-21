import React from 'react';
import { 
  Code2, 
  Palette, 
  Layout, 
  Sparkles, 
  CheckCircle, 
  ArrowUpRight 
} from 'lucide-react';
import { motion } from 'framer-motion';

interface ServicesProps {
  onHireMeClick: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onHireMeClick }) => {
  const serviceList = [
    {
      id: 'web-dev',
      icon: Code2,
      accent: 'cyan',
      title: 'Website Development',
      badge: 'Full-Stack & Frontend',
      description: 'End-to-end modern website development engineered with clean architecture, blazing performance, and seamless device compatibility.',
      features: [
        'Responsive websites',
        'Business websites',
        'Portfolio websites',
        'Landing pages'
      ],
      gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent'
    },
    {
      id: 'graphic-design',
      icon: Palette,
      accent: 'purple',
      title: 'Graphic Design',
      badge: 'Visual & Promotional Art',
      description: 'Bold visual graphics and striking compositions tailor-made to attract clicks, build recognition, and communicate brand stories clearly.',
      features: [
        'Social media posts',
        'Advertising posters',
        'Business banners',
        'Promotional designs'
      ],
      gradient: 'from-purple-500/20 via-pink-500/10 to-transparent'
    },
    {
      id: 'ui-ux',
      icon: Layout,
      accent: 'blue',
      title: 'UI/UX Design',
      badge: 'User Interfaces & Flows',
      description: 'Structured wireframes and interactive visual layouts prioritizing intuitive navigation, pleasing aesthetics, and user delight.',
      features: [
        'Website layouts',
        'Modern interfaces',
        'Creative visual concepts',
        'Interactive wireframes'
      ],
      gradient: 'from-blue-500/20 via-cyan-500/10 to-transparent'
    },
    {
      id: 'redesign',
      icon: Sparkles,
      accent: 'indigo',
      title: 'Website Redesign',
      badge: 'Modernization & Polish',
      description: 'Revamping outdated interfaces into contemporary, responsive powerhouses with clean typography and modern glassmorphism aesthetic.',
      features: [
        'Modern layouts',
        'Better user experience',
        'Responsive improvements',
        'Performance & visual boost'
      ],
      gradient: 'from-indigo-500/20 via-purple-500/10 to-transparent'
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#060812]/50">
      {/* Background accents */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            What I Deliver
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 font-heading">
            My Services
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Whether you need a brand-new responsive website, high-impact advertising posters, or an interface makeover, I provide creative digital solutions crafted with care.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceList.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-3xl p-1 bg-gradient-to-b from-white/10 via-white/5 to-white/[0.02] hover:from-cyan-500/40 hover:via-purple-500/30 hover:to-transparent transition-all duration-300 shadow-lg flex flex-col"
              >
                <div className="h-full bg-[#0a0f20]/95 backdrop-blur-xl rounded-[22px] p-6 sm:p-7 border border-white/10 flex flex-col justify-between relative overflow-hidden">
                  
                  {/* Subtle top corner gradient highlight */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${service.gradient} rounded-bl-full pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity`} />

                  <div>
                    {/* Top Row: Icon & Tag */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-cyan-400 group-hover:text-white group-hover:bg-gradient-to-tr group-hover:from-purple-600 group-hover:to-cyan-400 transition-all shadow-md">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-mono font-medium text-slate-400 uppercase tracking-wider">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 font-heading group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                      {service.description}
                    </p>

                    {/* Features checklist */}
                    <div className="space-y-2 mb-6 pt-2 border-t border-white/5">
                      {service.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-400/80 shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer Button */}
                  <div className="pt-4 border-t border-white/10">
                    <button
                      onClick={onHireMeClick}
                      className="w-full py-2.5 px-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] text-xs font-semibold text-slate-200 hover:text-cyan-300 flex items-center justify-between transition-colors cursor-pointer"
                    >
                      <span>Request Service</span>
                      <ArrowUpRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Custom Project Callout banner */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-purple-900/30 via-indigo-900/20 to-cyan-900/30 border border-white/10 p-6 sm:p-8 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-white font-bold text-lg font-heading">Looking for a tailored design or specific web feature?</h4>
            <p className="text-slate-400 text-sm mt-1">Every brand is unique. Let's discuss your custom ideas and bring them into reality.</p>
          </div>
          <button
            onClick={onHireMeClick}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold text-sm hover:opacity-95 shadow-lg shadow-purple-500/20 shrink-0 transition-opacity cursor-pointer"
          >
            Start a Conversation
          </button>
        </div>

      </div>
    </section>
  );
};
