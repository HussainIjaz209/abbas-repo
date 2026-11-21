import React from 'react';
import { Code2, Palette, Sparkles, BookOpen, User, Laptop, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-cyan-600/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <User className="w-3.5 h-3.5" />
            Background &amp; Passion
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 font-heading">
            A Little About Me
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            I'm Abbas Khan, a passionate young web developer and graphic designer. I'm currently studying in Grade 6 while learning and building creative digital projects. I enjoy developing websites, designing posters, creating social media graphics, and exploring new technologies. My goal is to turn ideas into attractive and useful digital experiences.
          </p>
        </div>

        {/* Two Professional Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Card 1: Web Development */}
          <motion.div 
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="group relative rounded-3xl p-1 bg-gradient-to-b from-cyan-500/30 via-white/5 to-white/5 hover:from-cyan-400 hover:via-blue-500/30 hover:to-purple-500/30 transition-all shadow-xl"
          >
            <div className="h-full bg-[#0b1021]/90 backdrop-blur-xl rounded-[22px] p-8 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Code2 className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-semibold">
                    Full-Stack Engineering
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 font-heading flex items-center gap-2">
                  Web Development
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Building responsive, performant websites from modern frontend UI components to reliable backend architectures. Focused on clean syntax, responsive layouts, and seamless user journeys.
                </p>

                <div className="space-y-2.5 mb-8">
                  {[
                    'Dynamic React.js & TypeScript frontends',
                    'Utility-first, pixel-perfect Tailwind CSS styling',
                    'RESTful API development with Node.js & Express.js',
                    'Database schemas, structured data & clean state management',
                    'Mobile-first responsive design across all screen sizes'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <div className="mt-0.5 rounded-full p-0.5 bg-cyan-500/20 text-cyan-400">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Laptop className="w-4 h-4 text-cyan-400" />
                  React • Node.js • Tailwind
                </span>
                <span className="text-xs text-cyan-300 font-semibold uppercase tracking-wider">
                  Production Ready
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Graphic Designing */}
          <motion.div 
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="group relative rounded-3xl p-1 bg-gradient-to-b from-purple-500/30 via-white/5 to-white/5 hover:from-purple-400 hover:via-pink-500/30 hover:to-cyan-500/30 transition-all shadow-xl"
          >
            <div className="h-full bg-[#110d24]/90 backdrop-blur-xl rounded-[22px] p-8 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                    <Palette className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 font-semibold">
                    Visual Brand Craft
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 font-heading flex items-center gap-2">
                  Graphic Designing
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Crafting visual identities, marketing assets, and promotional materials that capture eyes instantly. Transforming concepts into memorable graphics using industry-standard design tools.
                </p>

                <div className="space-y-2.5 mb-8">
                  {[
                    'High-conversion advertising posters & event flyers',
                    'Social media campaigns for Instagram, LinkedIn & Facebook',
                    'Business web banners & promotional digital graphics',
                    'Brand identity concepts, color palettes & typography pairing',
                    'Photoshop image manipulation, retouching & creative lighting'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <div className="mt-0.5 rounded-full p-0.5 bg-purple-500/20 text-purple-400">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  Photoshop • Illustrator • Canva
                </span>
                <span className="text-xs text-purple-300 font-semibold uppercase tracking-wider">
                  Creative Impact
                </span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Education & Values Strip */}
        <div className="mt-12 rounded-2xl bg-white/[0.03] border border-white/10 p-6 sm:p-8 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-base sm:text-lg">Grade 6 Scholar &amp; Lifelong Self-Learner</h4>
              <p className="text-slate-400 text-xs sm:text-sm">Balancing academic curiosity with real-world developer & designer skills every day.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-cyan-500/30 text-cyan-200 text-xs font-mono">
              Always Building &amp; Evolving
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
