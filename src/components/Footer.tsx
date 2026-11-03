import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/content';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-[#352D25] dark:border-[#2C2D28] bg-[#15120E] dark:bg-[#0E0F0C] py-14 px-6 lg:px-10 transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#352D25] dark:border-[#2C2D28]">
          {/* Brand and Coordinates */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-base font-semibold tracking-tight text-[#F6F4ED] dark:text-[#F6F4ED]">
              {PERSONAL_INFO.name}
            </h3>
            <p className="text-sm text-[#C4BDB3] dark:text-neutral-400 max-w-md leading-relaxed">
              Founder &amp; CEO of Qraezev, systems builder, and mechanical engineering student at IIT Tirupati. Building the experience layer for physical AI and machines that learn from experience.
            </p>
            <div className="flex items-center gap-4 text-[#C4BDB3] dark:text-neutral-400">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white dark:hover:text-[#F7B500] transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white dark:hover:text-[#F7B500] transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="hover:text-white dark:hover:text-[#F7B500] transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Site Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F6F4ED] dark:text-neutral-100">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#C4BDB3] dark:text-neutral-400">
              <li>
                <button
                  onClick={() => { setActiveTab('overview'); scrollToTop(); }}
                  className="hover:text-white dark:hover:text-neutral-200 cursor-pointer"
                >
                  Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('about'); scrollToTop(); }}
                  className="hover:text-white dark:hover:text-neutral-200 cursor-pointer"
                >
                  About & Philosophy
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('ventures'); scrollToTop(); }}
                  className="hover:text-white dark:hover:text-neutral-200 cursor-pointer"
                >
                  Ventures (Qraezev)
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('projects'); scrollToTop(); }}
                  className="hover:text-white dark:hover:text-neutral-200 cursor-pointer"
                >
                  Projects & Systems
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('documents'); scrollToTop(); }}
                  className="hover:text-white dark:hover:text-neutral-200 cursor-pointer"
                >
                  Archive & Documents
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('writing'); scrollToTop(); }}
                  className="hover:text-white dark:hover:text-neutral-200 cursor-pointer"
                >
                  Essays & Notes
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Engagement */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F6F4ED] dark:text-neutral-100">
              Inquiries
            </h4>
            <p className="text-sm text-[#C4BDB3] dark:text-neutral-400 leading-relaxed">
              Open to intellectual dialogue, research partnerships, and discussions on cognitive systems.
            </p>
            <div>
              <button
                onClick={() => { setActiveTab('contact'); onOpenContact(); scrollToTop(); }}
                className="text-xs font-medium text-[#F6F4ED] dark:text-neutral-100 hover:underline cursor-pointer"
              >
                Initiate a conversation →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#AFA69A] dark:text-neutral-500">
          <div>
            © {new Date().getFullYear()} Dinesh Polavarapu. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>IIT Tirupati Affiliation</span>
            <span>·</span>
            <span>Founder, Qraezev</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-white dark:hover:text-neutral-200 transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
