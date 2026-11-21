import React from 'react';
import { 
  Code2, 
  Palette, 
  Sparkles, 
  Layers, 
  Cpu, 
  Paintbrush, 
  FileCode, 
  Server, 
  Database,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'framer-motion';

export const Skills: React.FC = () => {
  const webSkills = [
    { name: 'HTML5', tag: 'Semantic Markup', desc: 'Modern structure, accessibility & clean semantics' },
    { name: 'CSS3', tag: 'Styling & Animation', desc: 'Flexbox, Grid systems & responsive layouts' },
    { name: 'JavaScript', tag: 'Core & ES6+', desc: 'Modern async patterns, DOM manipulation & algorithms' },
    { name: 'React.js', tag: 'Frontend Library', desc: 'Component architecture, Hooks, SPA & clean state' },
    { name: 'Tailwind CSS', tag: 'Modern Styling', desc: 'Utility classes, custom themes & glassmorphism' },
    { name: 'Node.js', tag: 'Runtime Environment', desc: 'Server scripts, package ecosystem & asynchronous I/O' },
    { name: 'Express.js', tag: 'Backend Framework', desc: 'REST API routing, server middleware & endpoints' },
    { name: 'Database Management', tag: 'Data Architecture', desc: 'SQL & NoSQL fundamentals, CRUD operations' }
  ];

  const designSkills = [
    { name: 'Adobe Photoshop', tag: 'Photo Manipulation', desc: 'Retouching, image composites, color grading' },
    { name: 'Adobe Illustrator', tag: 'Vector Graphics', desc: 'Vector logos, custom icons, typography layout' },
    { name: 'Canva', tag: 'Digital Marketing', desc: 'Rapid campaign design, presentations & flyers' },
    { name: 'Social Media Design', tag: 'Engaging Content', desc: 'Instagram feed posts, carousels & channel banners' },
    { name: 'Poster Design', tag: 'Print & Advertising', desc: 'Event flyers, corporate promo & visual hierarchy' },
    { name: 'Branding', tag: 'Identity & Style', desc: 'Cohesive color systems, font pairings & branding guidelines' }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#060812]/40">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] -z-10 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <Cpu className="w-3.5 h-3.5" />
            Core Competencies
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 font-heading">
            My Technical &amp; Design Skills
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            A comprehensive overview of the programming languages, frameworks, and design applications I use to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Column 1: Web Development Skills */}
          <div className="rounded-3xl p-8 bg-[#0b1022]/90 border border-white/10 backdrop-blur-xl relative">
            {/* Header */}
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-heading">Web Development</h3>
                  <p className="text-xs text-slate-400 font-mono">Modern Frontend &amp; Backend Engineering</p>
                </div>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                8 Technologies
              </span>
            </div>

            {/* Grid of skill cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {webSkills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -3, scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  className="p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-white text-sm">{skill.name}</span>
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  </div>
                  <span className="text-[11px] font-mono text-cyan-300/90 mb-1.5">{skill.tag}</span>
                  <p className="text-slate-400 text-xs leading-normal">{skill.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Column 2: Graphic Design Skills */}
          <div className="rounded-3xl p-8 bg-[#110e24]/90 border border-white/10 backdrop-blur-xl relative">
            {/* Header */}
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Palette className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-heading">Graphic Design</h3>
                  <p className="text-xs text-slate-400 font-mono">Creative Software &amp; Visual Strategy</p>
                </div>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                6 Disciplines
              </span>
            </div>

            {/* Grid of skill cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {designSkills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -3, scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  className="p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-purple-500/30 transition-all flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-white text-sm">{skill.name}</span>
                    <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  </div>
                  <span className="text-[11px] font-mono text-purple-300/90 mb-1.5">{skill.tag}</span>
                  <p className="text-slate-400 text-xs leading-normal">{skill.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Design Philosophy footnote */}
            <div className="mt-6 p-4 rounded-2xl bg-purple-950/30 border border-purple-500/20 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-purple-400 shrink-0" />
              <p className="text-xs text-purple-200">
                Focused on visual storytelling, balanced typography, and creative color harmonies that leave lasting impressions.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
