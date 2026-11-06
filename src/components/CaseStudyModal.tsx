import React, { useEffect } from 'react';
import { X, Github, ExternalLink, CheckCircle2, ArrowRight } from 'lucide-react';
import { Project } from '../types';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl 2xl:max-w-5xl 3xl:max-w-6xl max-h-[92vh] flex flex-col bg-white dark:bg-[#1A1B17] border border-[#E5E2D6] dark:border-[#2C2D28] rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5E2D6] dark:border-[#2C2D28] bg-[#F6F4ED] dark:bg-[#121310] shrink-0">
          <div className="min-w-0">
            <div className="text-xs text-neutral-500 dark:text-neutral-400 font-mono-code flex items-center gap-2">
              <span className="text-[#1868F2] dark:text-[#5B95F7] font-semibold">{project.category}</span>
              <span>·</span>
              <span>Case Study</span>
              <span>·</span>
              <span className="text-[#F7B500] font-semibold">{project.status}</span>
            </div>
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-[#F6F4ED] truncate">
              {project.name}
            </h2>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#1868F2] hover:bg-[#1054CE] text-white transition-colors shadow-xs"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
                <ExternalLink className="w-3 h-3 text-white/80" />
              </a>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-neutral-200/60 dark:hover:bg-[#252620] text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">
          {/* Visual Showcase Banner */}
          <div className="relative aspect-16/9 rounded-xl overflow-hidden border border-neutral-200/80 dark:border-neutral-800 bg-neutral-900">
            <img
              src={project.image}
              alt={project.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute bottom-5 left-6 right-6 text-white">
              <div className="text-xs font-mono-code text-neutral-300 mb-1">
                {project.category} · System Overview
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
                {project.name}
              </h1>
              <p className="text-sm text-neutral-300 mt-1 max-w-2xl">
                {project.oneLiner}
              </p>
            </div>
          </div>

          {/* Technology Stack Strip */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-600 dark:text-neutral-400 pb-4 border-b border-neutral-100 dark:border-neutral-800/80">
            <span className="font-semibold text-neutral-800 dark:text-neutral-200">Stack & Foundations:</span>
            {project.technologies.map((tech, i) => (
              <React.Fragment key={tech}>
                <span className="font-mono-code">{tech}</span>
                {i < project.technologies.length - 1 && <span aria-hidden="true">·</span>}
              </React.Fragment>
            ))}
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200/70 dark:border-neutral-800/80">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
                01. The Core Problem
              </h3>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200/70 dark:border-neutral-800/80">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
                02. Engineering Solution
              </h3>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architecture Specifications */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-4">
              03. System Architecture & Components
            </h3>
            <div className="space-y-3">
              {project.architecture.map((arch, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-neutral-100 dark:border-neutral-800/80 bg-white dark:bg-[#11131a] flex items-start gap-3"
                >
                  <span className="font-mono-code text-xs text-neutral-400 dark:text-neutral-500 shrink-0 mt-0.5">
                    [{idx + 1}]
                  </span>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    {arch}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-4">
              04. Key Capabilities & Invariants
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg border border-neutral-100 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-900/20 flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-snug">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Current Stage vs Future Roadmap */}
          <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100/60 dark:bg-[#0e1017]">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
              05. Implementation Stage & Trajectory
            </h3>
            <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200 mb-3">
              Current Status: {project.currentStage}
            </p>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 font-semibold mb-2 uppercase tracking-wider">
              Roadmap Directions:
            </div>
            <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
              {project.futureRoadmap.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-3.5 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 text-xs text-neutral-500 dark:text-neutral-400">
          <span>Dinesh Polavarapu · Engineering Archive</span>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-neutral-800 dark:text-neutral-200 font-medium hover:underline flex items-center gap-1"
            >
              <span>Explore source on GitHub</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
