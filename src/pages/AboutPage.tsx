import React, { useState } from 'react';
import { ArrowUpRight, GraduationCap, Compass, Cpu, Wrench, ShieldCheck, ChevronDown, ChevronUp, Briefcase, Award } from 'lucide-react';
import { PERSONAL_INFO, TIMELINE_DATA, TECHNICAL_COMPETENCIES, TECHNICAL_EXPERIENCES, HONORS_CERTIFICATIONS } from '../data/content';

interface AboutPageProps {
  onOpenLightbox: (src: string, caption: string) => void;
  onOpenContact: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenLightbox, onOpenContact }) => {
  const [selectedTimelineCategory, setSelectedTimelineCategory] = useState<string>('All');
  const [expandedMilestones, setExpandedMilestones] = useState<Record<number, boolean>>({ 0: true, 1: true });

  const toggleMilestone = (idx: number) => {
    setExpandedMilestones((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const filteredTimeline = TIMELINE_DATA.filter((item) => {
    if (selectedTimelineCategory === 'All') return true;
    return item.category === selectedTimelineCategory;
  });

  return (
    <div className="space-y-24 sm:space-y-28 pb-24">
      {/* 1. Header & Lead Introduction */}
      <section className="pt-8 sm:pt-14 space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono-code text-neutral-500 dark:text-neutral-400">
          <span className="text-[#D99B00] dark:text-[#F7B500] font-semibold">PROFESSIONAL IDENTITY &amp; BACKGROUND</span>
          <span>·</span>
          <span>DINESH POLAVARAPU</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-950 dark:text-[#F6F4ED] leading-tight">
          An engineer and founder building at the convergence of physical discipline and cognitive computation.
        </h1>

        <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-3xl">
          I am an independent systems builder, founder of <strong className="font-semibold text-neutral-900 dark:text-white">Qraezev</strong>, and a mechanical engineering undergraduate at <strong className="font-semibold text-neutral-900 dark:text-white">IIT Tirupati</strong>. My work investigates persistent cognitive memory, autonomous agent state machines, and computational engineering systems designed from first principles.
        </p>
      </section>

      {/* 2. Background Split: Academic Foundations & Independent Engineering */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-950 dark:text-[#F6F4ED]">
              The Intersection: IIT Tirupati &amp; Autonomous Systems
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
              <p>
                My academic training is rooted in Mechanical Engineering at the Indian Institute of Technology Tirupati, joining in 2024. Studying classical continuum mechanics, kinematics, and thermodynamics enforces a rigorous habit of thought: physical materials cannot be persuaded by hype, and mathematical boundary conditions do not tolerate shortcuts.
              </p>
              <p>
                Alongside my studies, I work on robotics, on-device intelligence, and venture building. I won the <strong className="font-semibold text-neutral-900 dark:text-white">Nation Builder Competition</strong>, a campus-run competition at IIT Tirupati, with Guardian, an on-body health-monitoring prototype.
              </p>
              <p>
                Through Qraezev and open-source systems like Memossist and Tascyn, I explore how software can operate with the structural integrity of mechanical mechanisms — where state is conserved, transitions are deterministic, and physical machines learn from experience on the job.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-[#E5E2D6] dark:border-[#2C2D28] bg-white dark:bg-[#1A1B17] flex items-center gap-4 shadow-xs">
            <GraduationCap className="w-8 h-8 text-[#1868F2] dark:text-[#5B95F7] shrink-0" />
            <div className="text-xs sm:text-sm">
              <div className="font-semibold text-neutral-900 dark:text-white">
                IIT Tirupati · B.Tech Mechanical Engineering (2024 – Present)
              </div>
              <div className="text-neutral-500 dark:text-neutral-400">
                Tirupati, Andhra Pradesh, India · Core emphasis on continuum kinematics, robotics, and physical systems.
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-4">
          <div 
            onClick={() => onOpenLightbox(PERSONAL_INFO.portraitImage, 'Dinesh Polavarapu')}
            className="aspect-4/3 rounded-2xl overflow-hidden border border-[#E5E2D6] dark:border-[#2C2D28] bg-neutral-900 cursor-zoom-in"
          >
            <img
              src={PERSONAL_INFO.portraitImage}
              alt="Dinesh Polavarapu"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div 
            onClick={() => onOpenLightbox('/src/assets/images/engineering_mechanics_lab_1793726734864.jpg', 'Computational Engineering & Dynamic Analysis')}
            className="aspect-16/9 rounded-2xl overflow-hidden border border-[#E5E2D6] dark:border-[#2C2D28] bg-neutral-900 cursor-zoom-in"
          >
            <img
              src="/src/assets/images/engineering_mechanics_lab_1793726734864.jpg"
              alt="Computational Engineering Laboratory"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. Engineering Philosophy & Operating Principles */}
      <section className="space-y-8">
        <div className="border-b border-[#E5E2D6] dark:border-[#2C2D28] pb-4">
          <div className="text-xs font-mono-code text-[#D99B00] dark:text-[#F7B500] font-bold mb-1">
            CORE PRINCIPLES
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-[#F6F4ED]">
            How I Approach Problems
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-[#E5E2D6] dark:border-[#2C2D28] bg-white dark:bg-[#1A1B17] space-y-3 shadow-xs">
            <Compass className="w-5 h-5 text-[#F7B500]" />
            <h3 className="text-base font-bold text-neutral-900 dark:text-white">
              First-Principles Decomposition
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Resist industry consensus and standard software boilerplate. Analyze the fundamental bottlenecks — whether memory latency, state fragmentation, or physical stress — and build upwards from truth.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-[#E5E2D6] dark:border-[#2C2D28] bg-white dark:bg-[#1A1B17] space-y-3 shadow-xs">
            <Cpu className="w-5 h-5 text-[#1868F2]" />
            <h3 className="text-base font-bold text-neutral-900 dark:text-white">
              Stateful Determinism
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Probabilistic intelligence is powerful, but enterprise and robotic tooling must operate within mathematically bounded state machines to guarantee safety, privacy, and correctness.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-[#E5E2D6] dark:border-[#2C2D28] bg-white dark:bg-[#1A1B17] space-y-3 shadow-xs">
            <ShieldCheck className="w-5 h-5 text-emerald-500" />
            <h3 className="text-base font-bold text-neutral-900 dark:text-white">
              Sovereign Utility
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Software should empower the sovereign operator. Avoid building shallow cloud wrappers; optimize for local compute, data durability, and tools that survive corporate platform shifts.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Technical Domains & Competencies */}
      <section className="space-y-8">
        <div className="border-b border-[#E5E2D6] dark:border-[#2C2D28] pb-4">
          <div className="text-xs font-mono-code text-[#1868F2] dark:text-[#5B95F7] font-semibold mb-1">
            STACK &amp; ARCHITECTURE
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-[#F6F4ED]">
            Technical Competencies
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {TECHNICAL_COMPETENCIES.map((comp, idx) => (
            <div
              key={comp.domain}
              className="p-6 rounded-2xl border border-[#E5E2D6] dark:border-[#2C2D28] bg-white dark:bg-[#1A1B17] space-y-3 shadow-xs"
            >
              <h3 className="text-base font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                <Wrench className={`w-4 h-4 ${idx % 2 === 0 ? 'text-[#F7B500]' : 'text-[#1868F2]'}`} />
                <span>{comp.domain}</span>
              </h3>
              <div className="flex flex-wrap gap-2 pt-1">
                {comp.skills.map((skill, i) => (
                  <span
                    key={skill}
                    className="text-xs font-mono-code text-neutral-600 dark:text-neutral-300"
                  >
                    {skill}
                    {i < comp.skills.length - 1 && <span className="ml-2 text-neutral-400" aria-hidden="true">·</span>}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Technical Experience & Engineering Internships */}
      <section className="space-y-8">
        <div className="border-b border-[#E5E2D6] dark:border-[#2C2D28] pb-4">
          <div className="text-xs font-mono-code text-[#D99B00] dark:text-[#F7B500] font-semibold mb-1">
            INDUSTRY &amp; RESEARCH APPOINTMENTS
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-[#F6F4ED]">
            Technical Experience
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TECHNICAL_EXPERIENCES.map((exp) => (
            <div
              key={exp.company}
              className="p-6 sm:p-7 rounded-2xl border border-[#E5E2D6] dark:border-[#2C2D28] bg-white dark:bg-[#1A1B17] flex flex-col justify-between space-y-5 hover:border-[#1868F2] dark:hover:border-[#F7B500] transition-colors shadow-xs"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-mono-code text-[#1868F2] dark:text-[#5B95F7] font-semibold flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </span>
                  <span className="text-xs font-mono-code text-neutral-500">{exp.location}</span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-950 dark:text-white">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                    {exp.company}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {exp.description}
                </p>

                <ul className="space-y-1.5 text-xs text-neutral-500 dark:text-neutral-400 pt-2 border-t border-[#E5E2D6]/70 dark:border-[#2C2D28]">
                  {exp.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="text-[#F7B500] shrink-0">―</span>
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#E5E2D6]/70 dark:border-[#2C2D28]">
                {exp.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono-code text-neutral-500 bg-[#F6F4ED] dark:bg-[#121310] px-2 py-0.5 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Honors & Accreditations */}
      <section className="space-y-8">
        <div className="border-b border-[#E5E2D6] dark:border-[#2C2D28] pb-4">
          <div className="text-xs font-mono-code text-[#1868F2] dark:text-[#5B95F7] font-semibold mb-1">
            AWARDS &amp; PROFESSIONAL CERTIFICATIONS
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-[#F6F4ED]">
            Honors &amp; Accreditations
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {HONORS_CERTIFICATIONS.map((honor) => (
            <div
              key={honor.title}
              className="p-5 rounded-2xl border border-[#E5E2D6] dark:border-[#2C2D28] bg-white dark:bg-[#1A1B17] space-y-2 shadow-xs"
            >
              <div className="flex items-center justify-between text-xs font-mono-code">
                <span className="font-bold text-[#F7B500] flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  <span>{honor.year}</span>
                </span>
                <span className="text-neutral-500">{honor.issuer}</span>
              </div>
              <h4 className="text-sm font-bold text-neutral-900 dark:text-white">
                {honor.title}
              </h4>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {honor.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Interactive Expandable Timeline */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E5E2D6] dark:border-[#2C2D28] pb-4">
          <div>
            <div className="text-xs font-mono-code text-[#D99B00] dark:text-[#F7B500] font-bold mb-1">
              CHRONOLOGY &amp; MILESTONES
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-[#F6F4ED]">
              Development Journey
            </h2>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex items-center gap-1 p-1 bg-[#EBE8DD] dark:bg-[#1A1B17] border border-[#E5E2D6] dark:border-[#2C2D28] rounded-xl text-xs">
            {['All', 'Venture', 'Software', 'Academic', 'Engineering'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedTimelineCategory(cat)}
                className={`px-3 py-1.5 font-medium rounded-lg transition-colors cursor-pointer ${
                  selectedTimelineCategory === cat
                    ? 'bg-[#F7B500] text-neutral-950 font-bold shadow-xs'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {filteredTimeline.map((item, idx) => {
            const isExpanded = !!expandedMilestones[idx];
            return (
              <div
                key={idx}
                className="rounded-2xl border border-[#E5E2D6] dark:border-[#2C2D28] bg-white dark:bg-[#1A1B17] p-6 transition-all hover:border-[#1868F2] dark:hover:border-[#F7B500] shadow-xs"
              >
                <div
                  onClick={() => toggleMilestone(idx)}
                  className="flex items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono-code text-xs font-bold text-[#F7B500] w-12 sm:w-16 shrink-0">
                      {item.year}
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                        {item.title}
                      </h3>
                      <div className="text-xs text-neutral-500 dark:text-neutral-400 font-mono-code">
                        <span>{item.organization}</span>
                        <span className="mx-1.5">·</span>
                        <span className="text-[#1868F2] dark:text-[#5B95F7] font-semibold">{item.category}</span>
                      </div>
                    </div>
                  </div>

                  <button className="p-1 text-neutral-400 hover:text-neutral-900 dark:hover:text-white">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>

                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-[#E5E2D6]/80 dark:border-[#2C2D28] space-y-3 animate-in fade-in duration-150">
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      {item.description}
                    </p>
                    <ul className="space-y-1.5 text-xs text-neutral-500 dark:text-neutral-400">
                      {item.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <span className="text-[#F7B500] shrink-0">―</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. Closing Call to Action */}
      <section className="p-8 sm:p-10 rounded-2xl border border-[#E5E2D6] dark:border-[#2C2D28] bg-white dark:bg-[#1A1B17] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
        <div>
          <h3 className="text-xl font-bold tracking-tight text-neutral-950 dark:text-[#F6F4ED] mb-1">
            Let's discuss systems, ventures, or research.
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            Directly reachable at {PERSONAL_INFO.email} for serious discussions.
          </p>
        </div>
        <button
          onClick={onOpenContact}
          className="px-6 py-2.5 text-xs sm:text-sm font-bold text-neutral-950 bg-[#F7B500] hover:bg-[#E5A600] rounded-xl transition-all shadow-xs cursor-pointer shrink-0 active:scale-[0.98]"
        >
          Send a Message
        </button>
      </section>
    </div>
  );
};
