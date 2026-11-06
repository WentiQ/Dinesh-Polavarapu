import React, { useState } from 'react';
import { Github, ExternalLink, ArrowUpRight, Search } from 'lucide-react';
import { PROJECTS_DATA } from '../data/content';
import { Project } from '../types';

interface ProjectsPageProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Cognitive AI', 'Robotics & Control', 'Software Systems', 'FinTech / Agents', 'Healthcare AI', 'Venture Intelligence', 'Engineering'];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.oneLiner.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-16 pb-24">
      {/* 1. Header */}
      <section className="pt-8 sm:pt-14 space-y-4">
        <div className="text-xs font-mono-code text-neutral-500 dark:text-neutral-400">
          SYSTEMS, ENGINES & OPEN SOURCE
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
          Projects & Engineering Work
        </h1>
        <p className="text-base sm:text-lg 2xl:text-xl text-neutral-600 dark:text-neutral-300 max-w-4xl 2xl:max-w-5xl 3xl:max-w-6xl leading-relaxed">
          A curated catalog of software engines, cognitive architectures, financial state machines, and computational engineering experiments. Each project represents an inquiry into solving structural problems from first principles.
        </p>
      </section>

      {/* 2. Controls: Filter Bar & Search */}
      <section className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E5E2D6] dark:border-[#2C2D28]">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#EBE8DD] dark:bg-[#1A1B17] border border-[#E5E2D6] dark:border-[#2C2D28] rounded-xl text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 font-medium rounded-lg transition-colors cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#F7B500] text-neutral-950 font-bold shadow-xs'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects or stack..."
            className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl border border-[#E5E2D6] dark:border-[#2C2D28] bg-white dark:bg-[#1A1B17] text-neutral-900 dark:text-[#F6F4ED] placeholder:text-neutral-400 focus:outline-hidden focus:ring-1 focus:ring-[#1868F2]"
          />
        </div>
      </section>

      {/* 3. Projects Grid - Responsive adaptation from mobile to ultra-wide 4K */}
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group rounded-2xl border border-[#E5E2D6] dark:border-[#2C2D28] bg-white dark:bg-[#1A1B17] p-6 sm:p-7 flex flex-col justify-between hover:border-[#1868F2] dark:hover:border-[#F7B500] transition-all duration-200 shadow-xs"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between gap-4 mb-3">
                <div className="text-xs font-mono-code text-neutral-500 dark:text-neutral-400 flex items-center gap-2">
                  <span className="font-semibold text-neutral-800 dark:text-neutral-200">{project.category}</span>
                  <span>·</span>
                  <span className="text-[#1868F2] dark:text-[#5B95F7]">{project.status}</span>
                </div>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-1.5 rounded-lg text-neutral-500 hover:text-[#1868F2] dark:hover:text-[#F7B500] transition-colors"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>

              {/* Title & One-Liner */}
              <h3 
                onClick={() => onSelectProject(project)}
                className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950 dark:text-white mb-2 group-hover:text-[#1868F2] dark:group-hover:text-[#F7B500] transition-colors cursor-pointer"
              >
                {project.name}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-5">
                {project.oneLiner}
              </p>

              {/* Visual Preview */}
              <div
                onClick={() => onSelectProject(project)}
                className="aspect-16/9 rounded-xl overflow-hidden border border-[#E5E2D6] dark:border-[#2C2D28] bg-neutral-950 mb-5 cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>

              {/* Problem/Solution Preview */}
              <div className="space-y-2 text-xs text-neutral-600 dark:text-neutral-400 mb-5">
                <p className="line-clamp-2">
                  <strong className="text-neutral-800 dark:text-neutral-200">The Problem:</strong> {project.problem}
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-[#E5E2D6]/80 dark:border-[#2C2D28] flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex flex-wrap items-center gap-1.5 text-neutral-500 font-mono-code">
                {project.technologies.slice(0, 3).map((tech, i) => (
                  <React.Fragment key={tech}>
                    <span>{tech}</span>
                    {i < Math.min(2, project.technologies.length - 1) && <span>·</span>}
                  </React.Fragment>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => onSelectProject(project)}
                  className="font-semibold text-[#1868F2] dark:text-[#F7B500] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16 text-neutral-500 text-sm">
          No projects matched the selected filters.
        </div>
      )}
    </div>
  );
};
