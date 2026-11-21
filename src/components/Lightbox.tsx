import React, { useEffect } from 'react';
import { X, ExternalLink, Tag, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraphicProject } from '../data/portfolioData';

interface LightboxProps {
  project: GraphicProject | null;
  onClose: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-4xl bg-[#0b1022] border border-white/15 rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close preview"
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-white/20 text-white backdrop-blur-md transition-colors cursor-pointer border border-white/10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Image Container with high quality display */}
          <div className="relative w-full bg-black/60 flex items-center justify-center overflow-hidden max-h-[58vh]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-contain max-h-[58vh]"
              loading="lazy"
            />
            <div className="absolute bottom-3 left-4">
              <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-cyan-300 border border-cyan-400/30 text-xs font-mono font-medium">
                {project.category}
              </span>
            </div>
          </div>

          {/* Details footer */}
          <div className="p-6 sm:p-8 overflow-y-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                {project.title}
              </h3>
              {project.clientOrTheme && (
                <span className="text-xs text-purple-300 font-mono flex items-center gap-1.5 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20 w-fit">
                  <Sparkles className="w-3.5 h-3.5" />
                  {project.clientOrTheme}
                </span>
              )}
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              {project.description}
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/10">
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono mr-2">
                <Tag className="w-3.5 h-3.5 text-cyan-400" />
                <span>Tools &amp; Techniques:</span>
              </div>
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-xs text-slate-300 font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
