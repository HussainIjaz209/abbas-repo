import React from 'react';
import { 
  Code2, 
  Palette, 
  Sparkles, 
  ArrowRight, 
  Mail, 
  Layers, 
  Terminal, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onExploreWork: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onContactClick }) => {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background glowing blurred orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-gradient-to-tr from-purple-700/25 via-blue-600/20 to-cyan-500/20 rounded-full blur-[130px] -z-10 pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-purple-600/15 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-[110px] -z-10 pointer-events-none" />

      {/* Decorative Grid Lines */}
      <div 
        className="absolute inset-0 -z-10 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.7) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Young Prodigy / Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-cyan-500/30 backdrop-blur-md mb-6 shadow-sm shadow-cyan-500/10">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span className="text-xs sm:text-sm font-medium tracking-wide text-cyan-200">
                12 Years Old • Grade 6 • Available for Freelance
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4 leading-[1.1]">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300">Abbas Khan</span>
            </h1>

            {/* Professional Title */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-200 mb-6 flex flex-wrap items-center gap-2">
              <span>Full-Stack Developer</span>
              <span className="text-purple-400">&amp;</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Creative Graphic Designer
              </span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-2xl leading-relaxed font-normal">
              I build modern websites and create eye-catching graphic designs that help brands stand out. I turn creative ideas into beautiful digital experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onExploreWork}
                className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm sm:text-base font-semibold rounded-xl group cursor-pointer shadow-lg shadow-purple-500/25 hover:shadow-cyan-500/30 transition-all active:scale-[0.98]"
              >
                <span className="w-full h-full bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 absolute group-hover:scale-105 transition-transform"></span>
                <span className="relative px-6 py-3.5 transition-all ease-out bg-[#080d1e] rounded-[10px] group-hover:bg-opacity-0 duration-300 flex items-center gap-2.5 text-white">
                  <span>Explore My Work</span>
                  <ArrowRight className="w-4 h-4 text-cyan-300 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button
                onClick={onContactClick}
                className="px-6 py-3.5 rounded-xl border border-white/15 bg-white/[0.04] hover:bg-white/[0.09] hover:border-white/30 text-white font-medium text-sm sm:text-base transition-all duration-200 flex items-center gap-2.5 backdrop-blur-sm cursor-pointer active:scale-[0.98]"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Stats / Specialization Pillars (Without fake numbers) */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 w-full pt-6 border-t border-white/10">
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-cyan-400 mb-1">
                  <Code2 className="w-4 h-4" />
                  <span className="text-xs uppercase font-mono tracking-wider font-semibold text-slate-400">Core</span>
                </div>
                <span className="text-sm sm:text-base font-bold text-white leading-tight">Web Development</span>
                <span className="text-xs text-slate-400 mt-0.5">Modern Full-Stack</span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-purple-400 mb-1">
                  <Palette className="w-4 h-4" />
                  <span className="text-xs uppercase font-mono tracking-wider font-semibold text-slate-400">Design</span>
                </div>
                <span className="text-sm sm:text-base font-bold text-white leading-tight">Graphic Design</span>
                <span className="text-xs text-slate-400 mt-0.5">Posters & Branding</span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-blue-400 mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs uppercase font-mono tracking-wider font-semibold text-slate-400">Output</span>
                </div>
                <span className="text-sm sm:text-base font-bold text-white leading-tight">Creative Projects</span>
                <span className="text-xs text-slate-400 mt-0.5">Digital Experiences</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Creative Developer & Designer Illustration / Visual Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 relative flex justify-center"
          >
            {/* Outer Glow Frame */}
            <div className="relative w-full max-w-[440px] aspect-[4/5] rounded-3xl p-1 bg-gradient-to-b from-purple-500/40 via-blue-500/20 to-cyan-500/40 shadow-2xl shadow-purple-900/40">
              <div className="w-full h-full bg-[#0a0f24]/90 backdrop-blur-xl rounded-[22px] overflow-hidden flex flex-col justify-between p-6 border border-white/10 relative">
                
                {/* Top Code-Window Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  </div>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    abbas.developer.ts
                  </span>
                  <div className="w-3"></div>
                </div>

                {/* Central Visual: Interactive Tech & Design Stack Canvas */}
                <div className="relative my-auto py-4 flex flex-col items-center text-center">
                  {/* Central Avatar / Emblem with interactive lighting */}
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-tr from-purple-600 via-indigo-700 to-cyan-500 p-1 shadow-xl shadow-cyan-500/20 mb-4 group cursor-pointer">
                    <div className="w-full h-full bg-[#070913] rounded-[14px] flex flex-col items-center justify-center p-3">
                      <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 via-blue-300 to-cyan-300 tracking-wider font-heading">
                        AK
                      </div>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 mt-1">
                        Creator
                      </span>
                    </div>
                  </div>

                  {/* Active Status Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium mb-3">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Ready for New Projects
                  </div>

                  <p className="text-sm text-slate-300 font-medium px-4">
                    Turning imaginative concepts into production-grade websites and eye-catching visual identities.
                  </p>
                </div>

                {/* Floating Element 1: Web Dev Card */}
                <motion.div 
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute -top-4 -left-4 sm:-left-6 bg-[#0e1630]/95 border border-cyan-500/30 px-3.5 py-2.5 rounded-xl shadow-xl backdrop-blur-md flex items-center gap-2.5 z-20"
                >
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] text-slate-400 uppercase font-mono">Frontend & Backend</p>
                    <p className="text-xs font-bold text-white">Full-Stack Code</p>
                  </div>
                </motion.div>

                {/* Floating Element 2: Graphic Design Card */}
                <motion.div 
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 4.6, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-4 -right-4 sm:-right-6 bg-[#161230]/95 border border-purple-500/30 px-3.5 py-2.5 rounded-xl shadow-xl backdrop-blur-md flex items-center gap-2.5 z-20"
                >
                  <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
                    <Palette className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] text-slate-400 uppercase font-mono">Posters & Ads</p>
                    <p className="text-xs font-bold text-white">Graphic Design</p>
                  </div>
                </motion.div>

                {/* Floating Code Snippet Preview (Bottom-Left) */}
                <div className="p-3 bg-black/40 rounded-xl border border-white/5 font-mono text-[11px] text-slate-400 text-left space-y-1">
                  <div className="flex items-center justify-between text-slate-500 text-[10px]">
                    <span>// tech stack</span>
                    <span className="text-cyan-400/80">React • Tailwind • Node</span>
                  </div>
                  <p className="text-purple-300">const passion = "Modern UI & High-Impact Art";</p>
                  <p className="text-slate-400">render(&lt;<span className="text-cyan-300">NextGenProject</span> /&gt;);</p>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
