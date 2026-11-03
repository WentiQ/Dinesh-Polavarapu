import React from 'react';
import { ArrowRight, ArrowUpRight, FileText, Sparkles, BookOpen, Layers } from 'lucide-react';
import { PERSONAL_INFO, VENTURE_DATA, PROJECTS_DATA, DOCUMENTS_DATA, ARTICLES_DATA } from '../data/content';
import { Project, DocumentItem, Article } from '../types';

interface HomePageProps {
  onSelectProject: (project: Project) => void;
  onSelectDocument: (doc: DocumentItem) => void;
  onSelectArticle: (article: Article) => void;
  onOpenLightbox: (src: string, caption: string) => void;
  setActiveTab: (tab: string) => void;
  onOpenContact: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onSelectProject,
  onSelectDocument,
  onSelectArticle,
  onOpenLightbox,
  setActiveTab,
  onOpenContact,
}) => {
  const featuredProjects = PROJECTS_DATA.filter((p) => p.isFeatured).slice(0, 5);

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* 1. Hero Section - Refined Editorial Split */}
      <section className="pt-8 sm:pt-14 md:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Typographic Column (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            {/* Quiet Unboxed Metadata */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono-code text-neutral-500 dark:text-neutral-400">
              <span className="font-semibold text-neutral-900 dark:text-[#F6F4ED]">Dinesh Polavarapu</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#D99B00] dark:text-[#F7B500] font-semibold">Founder &amp; CEO, Qraezev</span>
              <span aria-hidden="true">·</span>
              <span>IIT Tirupati</span>
            </div>

            {/* Main Headline - punchy, precise */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.15rem] font-bold text-neutral-950 dark:text-[#F6F4ED] tracking-tight leading-[1.14] text-balance">
              Building software systems, physical AI architectures, and robotics.
            </h1>

            {/* Positioning Statement & Lead Copy - concise, clear */}
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-xl">
              I’m the founder of <strong className="font-semibold text-neutral-900 dark:text-white">Qraezev</strong> and a mechanical engineering student at <strong className="font-semibold text-neutral-900 dark:text-white">IIT Tirupati</strong>. I build AI and engineering systems.
            </p>

            {/* CTAs using Pitch Deck Colors: Signal Gold (#F7B500) and Electric Blue (#1868F2) */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  const el = document.getElementById('selected-projects');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-neutral-950 bg-[#F7B500] hover:bg-[#E5A600] rounded-xl transition-all shadow-sm cursor-pointer flex items-center gap-2 active:scale-[0.98]"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenContact}
                className="px-5 py-2.5 text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200 border border-[#E5E2D6] dark:border-[#2C2D28] hover:border-[#1868F2] hover:text-[#1868F2] dark:hover:border-[#F7B500] dark:hover:text-[#F7B500] bg-white/60 dark:bg-[#1A1B17]/60 rounded-xl transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Academic & Affiliation Strip */}
            <div className="pt-4 border-t border-[#E5E2D6] dark:border-[#2C2D28] flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-neutral-500 dark:text-neutral-400">
              <div>
                <span className="font-medium text-neutral-800 dark:text-neutral-200">Degree:</span> B.Tech in Mechanical Engineering (2024 – Present)
              </div>
              <span aria-hidden="true" className="hidden sm:inline">·</span>
              <div>
                <span className="font-medium text-neutral-800 dark:text-neutral-200">Institution:</span> {PERSONAL_INFO.academicAffiliation}
              </div>
            </div>
          </div>

          {/* Visual Column (5 cols) - Portrait with subtle editorial framing */}
          <div className="lg:col-span-5">
            <div className="relative group mx-auto max-w-md lg:max-w-none">
              {/* Subtle deck ambient light: Gold on top-right, Cobalt Blue on bottom-left */}
              <div className="absolute -top-4 -right-4 w-48 h-48 bg-[#F7B500]/15 blur-2xl rounded-full pointer-events-none" />
              <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-[#1868F2]/15 blur-2xl rounded-full pointer-events-none" />

              <div 
                onClick={() => onOpenLightbox(PERSONAL_INFO.portraitImage, 'Dinesh Polavarapu — Founder of Qraezev & Systems Engineer')}
                className="relative aspect-3/4 rounded-2xl overflow-hidden border border-[#E5E2D6] dark:border-[#2C2D28] shadow-xl bg-neutral-900 cursor-zoom-in transition-transform duration-300 group-hover:scale-[1.01]"
              >
                <img
                  src={PERSONAL_INFO.portraitImage}
                  alt="Dinesh Polavarapu portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-85" />
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <div className="text-xs font-mono-code text-[#F7B500] font-semibold">
                    Founder &amp; CEO · Qraezev
                  </div>
                  <div className="text-sm font-medium">
                    Dinesh Polavarapu
                  </div>
                  <div className="text-xs text-neutral-300">
                    IIT Tirupati · Mechanical Engineering
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Current Focus: QRAEZEV (With Pitch Deck Exact 3 Colors & Architecture Flow) */}
      <section className="relative rounded-2xl border border-[#E5E2D6] dark:border-[#2C2D28] bg-white dark:bg-[#1A1B17] p-8 sm:p-12 overflow-hidden shadow-xs">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F7B500]/10 blur-3xl pointer-events-none rounded-full" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1868F2]/10 blur-3xl pointer-events-none rounded-full" />
        
        <div className="relative space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5E2D6] dark:border-[#2C2D28] pb-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono-code text-[#D99B00] dark:text-[#F7B500] font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>THE EXPERIENCE LAYER FOR PHYSICAL AI · CURRENT VENTURE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-[#F6F4ED]">
                Qraezev
              </h2>
            </div>

            <div className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-[#EBE8DD] dark:bg-[#121310] text-neutral-700 dark:text-neutral-300 font-mono-code text-xs font-semibold tracking-tight shrink-0">
              <span>Early-stage development</span>
            </div>
          </div>

          {/* Thesis Statement from Slide 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <p className="text-lg sm:text-xl font-editorial italic text-neutral-800 dark:text-neutral-100 leading-relaxed">
                "Machines that learn from experience. Robots can see now. They still can't remember."
              </p>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                An experience layer is software that lets any robot or machine keep, reuse, and improve what it learns on the job, so integration costs fall. Over 600,000 new robots are installed every year—each one starts blank and learns nothing from its own failures.
              </p>
            </div>

            {/* Quick KPI Strip from Slide 2 */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-3 font-mono-code">
              <div className="p-3.5 rounded-xl border border-[#E5E2D6] dark:border-[#2C2D28] bg-[#F6F4ED] dark:bg-[#121310]">
                <div className="text-xl font-bold text-[#F7B500]">50%+</div>
                <div className="text-[11px] text-neutral-500 mt-1">Integration cost vs hardware</div>
              </div>
              <div className="p-3.5 rounded-xl border border-[#E5E2D6] dark:border-[#2C2D28] bg-[#F6F4ED] dark:bg-[#121310]">
                <div className="text-xl font-bold text-[#1868F2]">4–5×</div>
                <div className="text-[11px] text-neutral-500 mt-1">Full system vs bare robot price</div>
              </div>
            </div>
          </div>

          {/* Core Innovation Architecture: Page 3 of Pitch Deck (Sees -> Remembers & Decides [Gold] -> Moves) */}
          <div className="space-y-3 pt-2">
            <div className="text-xs font-mono-code uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              Memory Between Sensors &amp; Motors (The Core Flow)
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
              {/* Step 1: Sees */}
              <div className="p-5 rounded-xl border border-[#E5E2D6] dark:border-[#2C2D28] bg-[#F6F4ED] dark:bg-[#121310] flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono-code text-[#1868F2] font-semibold mb-1">01 · PERCEPTION</div>
                  <h4 className="text-base font-bold text-neutral-900 dark:text-white mb-2">Sees</h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    Cameras and sensors. Seeing is now solved and affordable (e.g. Intel RealSense ~$320). Detects part misalignment or variations.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E5E2D6] dark:border-[#2C2D28] text-[11px] text-neutral-500">
                  Hardware: Affordable
                </div>
              </div>

              {/* Step 2: Remembers & Decides (THE CORE INNOVATION - GOLD HIGHLIGHT BOX FROM PITCH DECK) */}
              <div className="p-5 rounded-xl border-2 border-[#F7B500] bg-[#F7B500] text-neutral-950 flex flex-col justify-between shadow-md">
                <div>
                  <div className="text-xs font-mono-code font-bold tracking-wider uppercase opacity-85 mb-1">
                    02 · THE CORE INNOVATION
                  </div>
                  <h4 className="text-base font-bold mb-2">Remembers &amp; Decides</h4>
                  <p className="text-xs font-medium leading-relaxed opacity-90">
                    qraezev forms experiences and links them by relation. In a new situation, related memories fire together and decide the move.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-neutral-950/20 text-[11px] font-bold">
                  Target: 50% fewer failed trials
                </div>
              </div>

              {/* Step 3: Moves */}
              <div className="p-5 rounded-xl border border-[#E5E2D6] dark:border-[#2C2D28] bg-[#F6F4ED] dark:bg-[#121310] flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono-code text-[#1868F2] font-semibold mb-1">03 · ACTUATION</div>
                  <h4 className="text-base font-bold text-neutral-900 dark:text-white mb-2">Moves</h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    Existing motor controllers and industrial safety layers. Executes the adapted trajectory with no jam or line downtime.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E5E2D6] dark:border-[#2C2D28] text-[11px] text-neutral-500">
                  Controller: Unmodified Safety
                </div>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  setActiveTab('ventures');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1868F2] dark:text-[#F7B500] hover:underline transition-colors cursor-pointer"
              >
                <span>Explore Full Venture Strategy &amp; Pitch Deck</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={PERSONAL_INFO.qraezevLiveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 text-xs font-mono-code font-bold hover:opacity-90 transition-opacity"
              >
                <span>Live: qraezev.vercel.app</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <span className="text-xs font-mono-code text-neutral-500">
              qraezev Software + qraezev Embedded
            </span>
          </div>
        </div>
      </section>

      {/* 3. Selected Projects Section */}
      <section id="selected-projects" className="space-y-8 scroll-mt-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E5E2D6] dark:border-[#2C2D28] pb-5">
          <div>
            <div className="text-xs font-mono-code text-[#D99B00] dark:text-[#F7B500] font-semibold mb-1">
              SYSTEMS, ENGINES &amp; HARDWARE
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-[#F6F4ED]">
              Selected Projects
            </h2>
          </div>
          <button
            onClick={() => {
              setActiveTab('projects');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-[#1868F2] dark:hover:text-[#F7B500] transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>View All Engineering Work</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Varied Project Cards - Intentional Editorial Treatment */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project, idx) => {
            const isWide = idx === 0; // Memossist receives premier spotlight
            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`group relative rounded-2xl border border-[#E5E2D6] dark:border-[#2C2D28] bg-white dark:bg-[#1A1B17] p-6 sm:p-7 flex flex-col justify-between hover:border-[#1868F2] dark:hover:border-[#F7B500] transition-all duration-200 cursor-pointer shadow-xs ${
                  isWide ? 'lg:col-span-2' : ''
                }`}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="text-xs font-mono-code text-neutral-500 dark:text-neutral-400 flex items-center gap-2">
                      <span className="font-semibold text-neutral-800 dark:text-neutral-200">{project.category}</span>
                      <span>·</span>
                      <span className="text-[#1868F2] dark:text-[#5B95F7]">{project.status}</span>
                    </div>
                    <div className="p-1.5 rounded-lg text-neutral-400 group-hover:text-[#1868F2] dark:group-hover:text-[#F7B500] transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & One-Liner */}
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950 dark:text-white mb-2 group-hover:text-[#1868F2] dark:group-hover:text-[#F7B500] transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                    {project.oneLiner}
                  </p>

                  {/* Visual Preview */}
                  <div className={`rounded-xl overflow-hidden border border-[#E5E2D6] dark:border-[#2C2D28] bg-neutral-950 mb-6 ${
                    isWide ? 'aspect-21/9' : 'aspect-16/9'
                  }`}>
                    <img
                      src={project.image}
                      alt={project.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Footer: Tech Stack + Trigger */}
                <div className="pt-4 border-t border-[#E5E2D6]/80 dark:border-[#2C2D28] flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-500 dark:text-neutral-400">
                  <div className="flex flex-wrap items-center gap-1.5 font-mono-code">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <React.Fragment key={tech}>
                        <span>{tech}</span>
                        {i < Math.min(3, project.technologies.length - 1) && <span>·</span>}
                      </React.Fragment>
                    ))}
                  </div>
                  <span className="font-semibold text-[#1868F2] dark:text-[#F7B500] group-hover:underline flex items-center gap-1">
                    <span>Read Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Engineering Approach & Foundations (IIT Tirupati Integration) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5 space-y-4">
          <div className="text-xs font-mono-code text-[#1868F2] dark:text-[#5B95F7] font-semibold">
            ENGINEERING PHILOSOPHY &amp; IIT TIRUPATI
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-[#F6F4ED]">
            Grounding software in physical engineering discipline.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Studying mechanical engineering at IIT Tirupati instills an uncompromising respect for physical laws: equilibrium, conservation, and failure limits. I bring that same structural rigor to software systems — prioritizing deterministic invariants, memory boundaries, and real utility over ephemeral demonstrations.
          </p>
          <div className="pt-2">
            <button
              onClick={() => {
                setActiveTab('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs sm:text-sm font-semibold text-neutral-950 dark:text-[#F6F4ED] hover:text-[#1868F2] dark:hover:text-[#F7B500] transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>Learn More About My Background &amp; Timeline</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl border border-[#E5E2D6] dark:border-[#2C2D28] bg-white dark:bg-[#1A1B17]">
            <div className="text-xs font-mono-code text-[#D99B00] dark:text-[#F7B500] font-bold mb-1">
              01 · FIRST PRINCIPLES
            </div>
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-2">
              Physical Grounding
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Deconstruct problems to their physical and computational fundamentals before writing code or choosing frameworks.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-[#E5E2D6] dark:border-[#2C2D28] bg-white dark:bg-[#1A1B17]">
            <div className="text-xs font-mono-code text-[#1868F2] font-bold mb-1">
              02 · SOVEREIGNTY
            </div>
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-2">
              Local Compute
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Prioritize on-device persistence and privacy; software should not leak human thinking or robot telemetry to remote cloud brokers.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-[#E5E2D6] dark:border-[#2C2D28] bg-white dark:bg-[#1A1B17]">
            <div className="text-xs font-mono-code text-[#1868F2] font-bold mb-1">
              03 · INVARIANTS
            </div>
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-2">
              Bounded State
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Autonomous agents require rigorous finite state machines and verifiable execution guarantees, not unbounded hallucinations.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-[#E5E2D6] dark:border-[#2C2D28] bg-white dark:bg-[#1A1B17]">
            <div className="text-xs font-mono-code text-[#D99B00] dark:text-[#F7B500] font-bold mb-1">
              04 · REAL UTILITY
            </div>
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-2">
              Physical AI Integration
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Cut robot integration costs and reduce failed trials in factories and workflows, rather than building demo toys.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Selected Writing & Publications Preview */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E5E2D6] dark:border-[#2C2D28] pb-5">
          <div>
            <div className="text-xs font-mono-code text-neutral-500 dark:text-neutral-400 mb-1">
              INTELLECTUAL INQUIRY
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-[#F6F4ED]">
              Selected Writing &amp; Research Notes
            </h2>
          </div>
          <button
            onClick={() => {
              setActiveTab('writing');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-[#1868F2] dark:hover:text-[#F7B500] transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>All Articles ({ARTICLES_DATA.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ARTICLES_DATA.slice(0, 2).map((article) => (
            <div
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="p-6 rounded-2xl border border-[#E5E2D6] dark:border-[#2C2D28] bg-white dark:bg-[#1A1B17] hover:border-[#1868F2] dark:hover:border-[#F7B500] transition-colors cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-mono-code text-neutral-500 dark:text-neutral-400 mb-2 flex items-center gap-2">
                  <span className="text-[#1868F2] dark:text-[#5B95F7]">{article.category}</span>
                  <span>·</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="text-xl font-bold tracking-tight text-neutral-950 dark:text-white mb-2 font-editorial">
                  {article.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                  {article.excerpt}
                </p>
              </div>
              <div className="text-xs font-semibold text-[#1868F2] dark:text-[#F7B500] hover:underline flex items-center gap-1">
                <span>Read Full Essay</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Document Archive Spotlight (Featuring the Qraezev Global Pitch Deck) */}
      <section className="p-8 sm:p-10 rounded-2xl border border-[#E5E2D6] dark:border-[#2C2D28] bg-white dark:bg-[#1A1B17] flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xs">
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-mono-code text-[#D99B00] dark:text-[#F7B500] font-semibold">
            <FileText className="w-3.5 h-3.5" />
            <span>FEATURED PITCH DECK · PRE-SEED DOCUMENTATION</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950 dark:text-white">
            {DOCUMENTS_DATA[0].title}
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {DOCUMENTS_DATA[0].summary}
          </p>
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono-code text-neutral-500">
            <span className="text-[#F7B500] font-semibold">{DOCUMENTS_DATA[0].pages} Slides</span>
            <span>·</span>
            <span>{DOCUMENTS_DATA[0].category}</span>
            <span>·</span>
            <span className="text-[#1868F2] dark:text-[#5B95F7]">Updated {DOCUMENTS_DATA[0].date}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
          <button
            onClick={() => onSelectDocument(DOCUMENTS_DATA[0])}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-neutral-950 bg-[#F7B500] hover:bg-[#E5A600] rounded-xl transition-colors cursor-pointer shadow-xs active:scale-[0.98]"
          >
            Open Pitch Deck Reader
          </button>
          <button
            onClick={() => {
              setActiveTab('documents');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-medium text-neutral-800 dark:text-neutral-200 border border-[#E5E2D6] dark:border-[#2C2D28] rounded-xl hover:border-[#1868F2] hover:text-[#1868F2] transition-colors cursor-pointer"
          >
            Archive Library ({DOCUMENTS_DATA.length})
          </button>
        </div>
      </section>

      {/* 7. Contact Banner */}
      <section className="text-center py-12 px-6 rounded-2xl border border-[#E5E2D6] dark:border-[#2C2D28] bg-white dark:bg-[#1A1B17] space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-[#F6F4ED]">
          Interested in collaborating or discussing systems?
        </h2>
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 max-w-xl mx-auto leading-relaxed">
          Whether you are an investor, founder, engineering researcher, or prospective collaborator, I welcome substantive inquiries.
        </p>
        <div className="pt-2">
          <button
            onClick={onOpenContact}
            className="px-6 py-3 text-sm font-semibold text-neutral-950 bg-[#F7B500] hover:bg-[#E5A600] rounded-xl transition-all shadow-xs cursor-pointer inline-flex items-center gap-2 active:scale-[0.98]"
          >
            <span>Initiate Direct Communication</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
