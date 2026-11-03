import React from 'react';
import { ArrowUpRight, ArrowRight, Sparkles, FileText, Download, CheckCircle, Eye, ExternalLink } from 'lucide-react';
import { VENTURE_DATA, PERSONAL_INFO, DOCUMENTS_DATA } from '../data/content';
import { DocumentItem } from '../types';
import { QraezevLogoMark } from '../components/QraezevEmblem';

interface VenturesPageProps {
  onSelectDocument: (doc: DocumentItem) => void;
  onOpenLightbox: (src: string, caption: string) => void;
  onOpenContact: () => void;
}

export const VenturesPage: React.FC<VenturesPageProps> = ({
  onSelectDocument,
  onOpenLightbox,
  onOpenContact,
}) => {
  const pitchDeckDoc = DOCUMENTS_DATA.find((d) => d.id === 'doc-qraezev-pitch-deck') || DOCUMENTS_DATA[0];

  return (
    <div className="space-y-24 sm:space-y-28 pb-24">
      {/* 1. Venture Header with Official Logo */}
      <section className="pt-8 sm:pt-14 space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E5E2D6] dark:border-[#2C2D28] pb-4">
          <div className="flex items-center gap-2 text-xs font-mono-code text-[#D99B00] dark:text-[#F7B500] font-semibold">
            <QraezevLogoMark className="w-4 h-4 shrink-0" />
            <span>THE EXPERIENCE LAYER FOR PHYSICAL AI · VENTURE PROFILE</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#EBE8DD] dark:bg-[#1A1B17] border border-[#E5E2D6] dark:border-[#2C2D28] text-neutral-800 dark:text-neutral-200 font-mono-code text-xs font-semibold shadow-xs">
            <span>Physical AI &amp; Robotics</span>
            <span className="opacity-40">·</span>
            <span className="text-[#1868F2] dark:text-[#5B95F7]">Pre-Seed Prototype Phase</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-950 dark:text-[#F6F4ED]">
                {VENTURE_DATA.name}
              </h1>
            </div>

            <p className="text-xl sm:text-2xl text-neutral-800 dark:text-neutral-100 font-editorial italic leading-relaxed">
              "{VENTURE_DATA.tagline}"
            </p>

            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl">
              An experience layer is software that lets any robot or machine keep, reuse, and improve what it learns on the job, so integration costs fall. Sits directly between sensors and motor controllers.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={VENTURE_DATA.websiteUrl || "https://qraezev.vercel.app/"}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#1868F2] hover:bg-[#1254C7] rounded-xl transition-all shadow-xs cursor-pointer flex items-center gap-2 active:scale-[0.98]"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Visit Live Website (qraezev.vercel.app)</span>
              </a>

              <button
                onClick={() => onSelectDocument(pitchDeckDoc)}
                className="px-5 py-2.5 text-xs sm:text-sm font-bold text-neutral-950 bg-[#F7B500] hover:bg-[#E5A600] rounded-xl transition-all shadow-xs cursor-pointer flex items-center gap-2 active:scale-[0.98]"
              >
                <FileText className="w-4 h-4" />
                <span>Read Official Pitch Deck (10 Slides)</span>
              </button>

              <a
                href="/assets/aistudio/qraezev_Pitch_Deck_Global_Updated.pdf"
                download="qraezev_Pitch_Deck_Global.pdf"
                className="px-5 py-2.5 text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200 border border-[#E5E2D6] dark:border-[#2C2D28] hover:border-[#1868F2] hover:text-[#1868F2] bg-white/50 dark:bg-[#1A1B17]/50 rounded-xl transition-colors cursor-pointer flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF Deck</span>
              </a>

              <button
                onClick={onOpenContact}
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#1868F2] dark:text-[#F7B500] hover:underline transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span>Partner or Inquire</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Official Qraezev Logo */}
          <div className="lg:col-span-4 flex justify-center">
            <img
              src="/assets/qraezev-logo-light.png"
              alt="Qraezev logo"
              className="block dark:hidden w-48 h-48 object-contain"
            />
            <img
              src="/assets/qraezev-logo-dark.png"
              alt="Qraezev logo"
              className="hidden dark:block w-48 h-48 object-contain"
            />
          </div>
        </div>
      </section>

      {/* 2. Problem Breakdown: "Robots start from zero. Every time." (Slide 2 & 4) */}
      <section className="space-y-6">
        <div className="border-b border-[#E5E2D6] dark:border-[#2C2D28] pb-4">
          <div className="text-xs font-mono-code text-[#D99B00] dark:text-[#F7B500] font-bold mb-1">
            PROBLEM STATEMENT
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-[#F6F4ED]">
            Robots start from zero. Every time.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 mt-2 max-w-3xl leading-relaxed">
            Every repeated miss costs engineer hours, line downtime, and rework. Perception is solved—depth cameras like Intel RealSense cost ~$320, so every robot can have eyes. Over 600,000 new robots are installed every year, yet each one starts blank and learns nothing from its own failures.
          </p>
        </div>

        {/* 3 Metric Cards from Slide 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono-code">
          <div className="p-6 rounded-2xl border border-[#E5E2D6] dark:border-[#2C2D28] bg-white dark:bg-[#1A1B17]">
            <div className="text-3xl sm:text-4xl font-bold text-[#F7B500] mb-2">50%+</div>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
              of a robot system's cost is integration and programming, not hardware.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-[#E5E2D6] dark:border-[#2C2D28] bg-white dark:bg-[#1A1B17]">
            <div className="text-3xl sm:text-4xl font-bold text-[#1868F2] mb-2">4–5×</div>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
              A full robot system typically costs 4–5 times the price of the robot itself.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-[#E5E2D6] dark:border-[#2C2D28] bg-white dark:bg-[#1A1B17]">
            <div className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mb-2">73%</div>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
              of manufacturers surveyed say programming a robot takes a week to a month.
            </p>
          </div>
        </div>
      </section>

      {/* 3. The Solution & Architecture: Slide 3 & Slide 6 */}
      <section className="space-y-6">
        <div className="border-b border-[#E5E2D6] dark:border-[#2C2D28] pb-4">
          <div className="text-xs font-mono-code text-[#1868F2] dark:text-[#5B95F7] font-bold mb-1">
            SOLUTION · MEMORY BETWEEN SENSORS AND MOTORS
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-[#F6F4ED]">
            Give any robot a memory to learn and adapt.
          </h2>
        </div>

        {/* 3-Step Flow Diagram from Page 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Step 1: Sees */}
          <div className="p-6 rounded-2xl border border-[#E5E2D6] dark:border-[#2C2D28] bg-white dark:bg-[#1A1B17] flex flex-col justify-between space-y-4">
            <div>
              <div className="text-xs font-mono-code text-[#1868F2] font-semibold mb-1">STEP 01 · PERCEPTION</div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">Sees</h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Cameras and sensors. Seeing is now solved and affordable (e.g. Intel RealSense ~$320).
              </p>
              <div className="mt-3 p-3 rounded-lg bg-[#F6F4ED] dark:bg-[#121310] text-xs font-mono-code text-neutral-600 dark:text-neutral-300">
                Example: The mechanical part sits 4 mm off-center on the conveyor.
              </div>
            </div>
            <div className="text-xs text-neutral-500 font-mono-code pt-3 border-t border-[#E5E2D6] dark:border-[#2C2D28]">
              Existing Vision Sensors
            </div>
          </div>

          {/* Step 2: Remembers & Decides (The Core Innovation in Deck Gold) */}
          <div className="p-6 rounded-2xl border-2 border-[#F7B500] bg-[#F7B500] text-neutral-950 flex flex-col justify-between space-y-4 shadow-lg">
            <div>
              <div className="text-xs font-mono-code font-bold tracking-wider uppercase opacity-85 mb-1">
                STEP 02 · THE CORE INNOVATION
              </div>
              <h3 className="text-xl font-bold mb-2">Remembers &amp; Decides</h3>
              <p className="text-xs font-medium leading-relaxed opacity-95">
                qraezev forms experiences and links them by relation. In a new situation, related memories fire together and decide the move.
              </p>
              <div className="mt-3 p-3 rounded-lg bg-neutral-950/10 text-xs font-mono-code font-bold">
                Example: Last time, a straight push jammed. Shift 4 mm first.
              </div>
            </div>
            <div className="text-xs font-bold pt-3 border-t border-neutral-950/20">
              Target: 50% fewer failed trials than no memory
            </div>
          </div>

          {/* Step 3: Moves */}
          <div className="p-6 rounded-2xl border border-[#E5E2D6] dark:border-[#2C2D28] bg-white dark:bg-[#1A1B17] flex flex-col justify-between space-y-4">
            <div>
              <div className="text-xs font-mono-code text-[#1868F2] font-semibold mb-1">STEP 03 · ACTUATION</div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">Moves</h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Existing robot controller and safety layers. Software on top of a robot's existing sensors and controller. It never replaces them.
              </p>
              <div className="mt-3 p-3 rounded-lg bg-[#F6F4ED] dark:bg-[#121310] text-xs font-mono-code text-neutral-600 dark:text-neutral-300">
                Example: Moves 4 mm, then pushes. No jam, zero line downtime.
              </div>
            </div>
            <div className="text-xs text-neutral-500 font-mono-code pt-3 border-t border-[#E5E2D6] dark:border-[#2C2D28]">
              Existing Controllers &amp; Safety
            </div>
          </div>
        </div>

        {/* Dual Delivery: Software vs Embedded (Slide 6) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
          <div className="p-6 rounded-2xl border border-[#E5E2D6] dark:border-[#2C2D28] bg-white dark:bg-[#1A1B17] space-y-2">
            <h4 className="text-base font-bold text-neutral-900 dark:text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1868F2]" />
              <span>qraezev Software</span>
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Runs on a robot's host computer, industrial workstation, edge box, or in simulation environments.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-[#E5E2D6] dark:border-[#2C2D28] bg-white dark:bg-[#1A1B17] space-y-2">
            <h4 className="text-base font-bold text-neutral-900 dark:text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F7B500]" />
              <span>qraezev Embedded</span>
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              The same brain packaged on a compact onboard module. Fully offline, sovereign execution with zero cloud dependency.
            </p>
          </div>
        </div>
      </section>

      {/* 4. The Moat & Competitive Matrix (Slide 7) */}
      <section className="p-8 sm:p-10 rounded-2xl border border-[#E5E2D6] dark:border-[#2C2D28] bg-white dark:bg-[#1A1B17] space-y-6">
        <div>
          <div className="text-xs font-mono-code text-[#D99B00] dark:text-[#F7B500] font-semibold mb-1">
            COMPETITIVE ADVANTAGE
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-[#F6F4ED]">
            Memory is not the moat. The lifecycle is.
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-2 max-w-3xl leading-relaxed">
            Foundation models provide general skills trained before deployment. Robot-maker stacks are tied to one vendor or reprogrammed manually. Passive memory layers only store and recall. Qraezev adds the complete lifecycle: score, merge, and forget.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono-code">
          <div className="p-4 rounded-xl border border-[#E5E2D6] dark:border-[#2C2D28] bg-[#F6F4ED] dark:bg-[#121310] space-y-1">
            <div className="text-neutral-500">Foundation Models</div>
            <div className="font-semibold text-neutral-900 dark:text-white">Gemini Robotics, GR00T, Skild</div>
            <div className="text-[11px] text-neutral-400">Trained before deployment</div>
          </div>

          <div className="p-4 rounded-xl border border-[#E5E2D6] dark:border-[#2C2D28] bg-[#F6F4ED] dark:bg-[#121310] space-y-1">
            <div className="text-neutral-500">Robot Maker Stacks</div>
            <div className="font-semibold text-neutral-900 dark:text-white">FANUC, ABB, Universal Robots</div>
            <div className="text-[11px] text-neutral-400">Tied to single vendor, hand scripted</div>
          </div>

          <div className="p-4 rounded-xl border border-[#E5E2D6] dark:border-[#2C2D28] bg-[#F6F4ED] dark:bg-[#121310] space-y-1">
            <div className="text-neutral-500">Passive Memory Layers</div>
            <div className="font-semibold text-neutral-900 dark:text-white">Monolithos, robotmem, Memori</div>
            <div className="text-[11px] text-neutral-400">Store and recall only</div>
          </div>

          <div className="p-4 rounded-xl border-2 border-[#F7B500] bg-[#F7B500]/10 space-y-1">
            <div className="text-[#D99B00] dark:text-[#F7B500] font-bold">qraezev Core</div>
            <div className="font-semibold text-neutral-950 dark:text-white">The Experience Lifecycle</div>
            <div className="text-[11px] text-neutral-600 dark:text-neutral-300">Score, merge, forget on the job</div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#F6F4ED] dark:bg-[#121310] text-xs font-mono-code text-neutral-700 dark:text-neutral-300 flex items-center gap-2">
          <span className="text-[#F7B500] font-bold">Our Moat:</span>
          <span>Every deployment adds experience that only real physical machines can generate.</span>
        </div>
      </section>

      {/* 5. Team Section from Slide 10 */}
      <section className="space-y-6">
        <div className="border-b border-[#E5E2D6] dark:border-[#2C2D28] pb-4">
          <div className="text-xs font-mono-code text-[#1868F2] dark:text-[#5B95F7] font-semibold mb-1">
            FOUNDING BUILDERS
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-[#F6F4ED]">
            Two builders. One mission.
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
            One team builds the mind, and the machine it runs on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Dinesh Polavarapu */}
          <div className="p-6 rounded-2xl border border-[#E5E2D6] dark:border-[#2C2D28] bg-white dark:bg-[#1A1B17] space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-neutral-950 dark:text-white">Dinesh Polavarapu</h3>
                <div className="text-xs font-mono-code text-[#F7B500] font-semibold">Founder &amp; CEO</div>
              </div>
              <div className="w-10 h-10 rounded-full overflow-hidden bg-neutral-900 border border-[#F7B500]">
                <img src={PERSONAL_INFO.portraitImage} alt="Dinesh" className="w-full h-full object-cover" />
              </div>
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
              B.Tech Mechanical Engineering student at IIT Tirupati. Built Memossist during an AI and RAG internship at BSERC and LifeLine AI during an applied healthcare AI internship at IIT Kharagpur.
            </p>
          </div>

          {/* Mokshagna Anurag Kankati */}
          <div className="p-6 rounded-2xl border border-[#E5E2D6] dark:border-[#2C2D28] bg-white dark:bg-[#1A1B17] space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-neutral-950 dark:text-white">Mokshagna Anurag Kankati</h3>
                <div className="text-xs font-mono-code text-[#1868F2] font-semibold">Co-founder &amp; CTO</div>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#1868F2] text-white flex items-center justify-center font-bold text-sm">
                MK
              </div>
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
              B.Tech ECE, MVGR College. 3+ years in robotics and UAVs. Interned at NITK, IIT Tirupati (CubeSat), Zebu Intelligent Systems, and Daloft Aerospace. 2nd place, AVISHKAR.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Technical Execution Roadmap (Slide 11) */}
      <section className="p-8 sm:p-10 rounded-2xl border-2 border-[#F7B500] bg-white dark:bg-[#1A1B17] space-y-6 shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-[#E5E2D6] dark:border-[#2C2D28] pb-6">
          <div>
            <div className="text-xs font-mono-code text-[#D99B00] dark:text-[#F7B500] font-bold mb-1">
              TECHNICAL EXECUTION ROADMAP
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-neutral-950 dark:text-white">
              15 Months. One Proof.
            </div>
          </div>
          <div className="text-xs font-mono-code text-neutral-500">
            Ideation stage · Real-robot milestone delivery
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="text-xs font-mono-code text-neutral-500 uppercase tracking-wider">
              15-Month Execution Deliverables:
            </div>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className="p-3 rounded-xl bg-[#F6F4ED] dark:bg-[#121310] border border-[#E5E2D6] dark:border-[#2C2D28] flex items-center gap-3">
                <span className="font-mono-code font-bold text-[#F7B500] w-6">01</span>
                <span>Runtime on a real physical robot · Month 6</span>
              </div>
              <div className="p-3 rounded-xl bg-[#F6F4ED] dark:bg-[#121310] border border-[#E5E2D6] dark:border-[#2C2D28] flex items-center gap-3">
                <span className="font-mono-code font-bold text-[#1868F2] w-6">02</span>
                <span>Gains over 3 baselines (50% fewer failed trials) · Month 9</span>
              </div>
              <div className="p-3 rounded-xl bg-[#F6F4ED] dark:bg-[#121310] border border-[#E5E2D6] dark:border-[#2C2D28] flex items-center gap-3">
                <span className="font-mono-code font-bold text-emerald-500 w-6">03</span>
                <span>One external industrial pilot · Month 15</span>
              </div>
            </div>
            <p className="text-xs text-neutral-500 font-mono-code">
              Next: Venture expansion grounded in verified physical robot telemetry and pilot performance.
            </p>
          </div>

          {/* Execution Resource Allocation */}
          <div className="p-6 rounded-xl bg-[#F6F4ED] dark:bg-[#121310] border border-[#E5E2D6] dark:border-[#2C2D28] space-y-3 font-mono-code text-xs">
            <div className="font-bold text-neutral-900 dark:text-white flex items-center justify-between pb-2 border-b border-[#E5E2D6] dark:border-[#2C2D28]">
              <span>CORE FOCUS ALLOCATION</span>
              <span className="text-[#F7B500]">100% TECHNICAL EXECUTION</span>
            </div>
            <div className="space-y-2 text-neutral-600 dark:text-neutral-300">
              <div className="flex justify-between">
                <span>Core Research &amp; Engineering</span>
                <span className="font-bold text-[#F7B500]">35%</span>
              </div>
              <div className="flex justify-between">
                <span>Robot Hardware &amp; Lab Workcells</span>
                <span className="font-bold text-[#1868F2]">30%</span>
              </div>
              <div className="flex justify-between">
                <span>Compute &amp; Simulation Software</span>
                <span>15%</span>
              </div>
              <div className="flex justify-between">
                <span>Continuous Trajectory Testing</span>
                <span>10%</span>
              </div>
              <div className="flex justify-between">
                <span>Operational Invariants &amp; IP</span>
                <span>10%</span>
              </div>
            </div>
            <div className="pt-2 text-[11px] text-neutral-400">
              * 90% directed straight to people, physical robot hardware, compute, and testing.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
