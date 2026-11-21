import React, { useState } from 'react';
import { 
  Palette, 
  Code2, 
  ExternalLink, 
  Eye, 
  Filter, 
  Sparkles, 
  Maximize2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { graphicProjects, webProjects, GraphicProject, WebProject } from '../data/portfolioData';
import { Lightbox } from './Lightbox';
import { Icons } from './SocialIcons';

export const Portfolio: React.FC = () => {
  // Main Category Tab: 'graphic' | 'web'
  const [activeTab, setActiveTab] = useState<'graphic' | 'web'>('graphic');
  
  // Sub-filter for graphic design
  const [graphicFilter, setGraphicFilter] = useState<string>('All');

  // Lightbox state for graphic designs
  const [selectedGraphic, setSelectedGraphic] = useState<GraphicProject | null>(null);

  // Sub-categories for graphic design
  const graphicCategories = [
    'All',
    'Advertising Posters',
    'Branding',
    'Social Media Posts',
    'Business Banners',
    'Promotional Designs',
    'Creative Graphics'
  ];

  // Filtered graphic projects
  const filteredGraphicProjects = graphicFilter === 'All' 
    ? graphicProjects 
    : graphicProjects.filter(p => p.category === graphicFilter);

  return (
    <section id="work" className="py-24 relative overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-purple-700/10 rounded-full blur-[140px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Curated Showcase
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 font-heading">
            My Portfolio &amp; Projects
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Explore my latest graphic design artworks, advertising posters, branding kits, and full-stack web applications.
          </p>
        </div>

        {/* Category Switcher Tabs: Graphic Design vs Web Development */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl">
            <button
              onClick={() => setActiveTab('graphic')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm sm:text-base font-semibold transition-all cursor-pointer ${
                activeTab === 'graphic'
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/25'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              <Palette className="w-4 h-4 text-purple-300" />
              <span>Category A: Graphic Design</span>
            </button>

            <button
              onClick={() => setActiveTab('web')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm sm:text-base font-semibold transition-all cursor-pointer ${
                activeTab === 'web'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              <Code2 className="w-4 h-4 text-cyan-300" />
              <span>Category B: Web Development</span>
            </button>
          </div>
        </div>

        {/* ================= CATEGORY A: GRAPHIC DESIGN ================= */}
        {activeTab === 'graphic' && (
          <div>
            {/* Sub-filter chips */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
              <span className="text-xs text-slate-500 font-mono mr-2 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> Filter by:
              </span>
              {graphicCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setGraphicFilter(category)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    graphicFilter === category
                      ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40 shadow-sm'
                      : 'bg-white/[0.03] text-slate-400 hover:text-white border border-white/5 hover:bg-white/[0.08]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence>
                {filteredGraphicProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35 }}
                    className="group relative rounded-3xl bg-[#0c1022] border border-white/10 overflow-hidden shadow-xl hover:border-purple-500/40 transition-all flex flex-col justify-between"
                  >
                    {/* Large Image Preview with overlay */}
                    <div className="relative aspect-[16/11] w-full overflow-hidden bg-black/40">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0c1022] via-transparent to-black/20" />
                      
                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                        <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-mono text-purple-300 border border-purple-500/30">
                          {project.category}
                        </span>
                        <button
                          onClick={() => setSelectedGraphic(project)}
                          aria-label={`View enlarged ${project.title}`}
                          className="w-8 h-8 rounded-full bg-black/60 hover:bg-purple-600 text-white backdrop-blur-md flex items-center justify-center transition-colors cursor-pointer border border-white/10"
                        >
                          <Maximize2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 flex flex-col justify-between flex-1">
                      <div>
                        {project.clientOrTheme && (
                          <p className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 mb-1.5">
                            {project.clientOrTheme}
                          </p>
                        )}
                        <h3 className="text-xl font-bold text-white mb-2 font-heading group-hover:text-purple-300 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-2">
                          {project.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {project.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-400 border border-white/5"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* View Project Action */}
                      <button
                        onClick={() => setSelectedGraphic(project)}
                        className="w-full py-2.5 px-4 rounded-xl bg-purple-500/10 hover:bg-purple-500/25 border border-purple-500/30 text-purple-200 text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer group-hover:border-purple-400"
                      >
                        <Eye className="w-4 h-4 text-purple-400" />
                        <span>View Project Preview</span>
                      </button>
                    </div>

                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        )}

        {/* ================= CATEGORY B: WEB DEVELOPMENT ================= */}
        {activeTab === 'web' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {webProjects.map((project) => (
              <div
                key={project.id}
                className="group relative rounded-3xl bg-[#0a0f24] border border-white/10 hover:border-cyan-500/40 overflow-hidden shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Website Screenshot with browser header styling */}
                <div>
                  <div className="bg-black/50 border-b border-white/10 px-4 py-2.5 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 tracking-wider">
                      https://projects.abbas/{project.id}
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-mono">
                      {project.category}
                    </span>
                  </div>

                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/40">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f24] via-transparent to-transparent opacity-80" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2.5 font-heading group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                      {project.description}
                    </p>

                    {/* Technologies Pills */}
                    <div className="mb-6">
                      <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                        Technologies:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Buttons: Live Demo & Source Code */}
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-md shadow-cyan-500/20 transition-all"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/15 text-slate-200 hover:text-white text-xs sm:text-sm font-medium flex items-center justify-center gap-2 transition-all"
                    >
                      <Icons.GitHub className="w-4 h-4 text-slate-300" />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </motion.div>
        )}

      </div>

      {/* Lightbox Modal */}
      <Lightbox
        project={selectedGraphic}
        onClose={() => setSelectedGraphic(null)}
      />
    </section>
  );
};
