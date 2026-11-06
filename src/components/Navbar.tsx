import React, { useState } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isDark: boolean;
  setIsDark: (dark: boolean) => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  isDark,
  setIsDark,
  onOpenContact,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'overview', label: 'Overview' },
    { id: 'about', label: 'About' },
    { id: 'ventures', label: 'Ventures' },
    { id: 'projects', label: 'Projects' },
    { id: 'documents', label: 'Archive' },
    { id: 'writing', label: 'Writing' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#F6F4ED]/85 dark:bg-[#121310]/85 border-b border-[#E5E2D6] dark:border-[#2C2D28] transition-colors duration-200">
      <div className="w-full mx-auto flex items-center justify-between gap-8 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 3xl:px-32 4xl:px-40 h-16 sm:h-18">
        {/* Zone 1: Pure typographic text wordmark without logo */}
        <button
          onClick={() => handleNavClick('overview')}
          className="text-lg font-bold tracking-tight text-neutral-900 dark:text-[#F6F4ED] hover:text-[#1868F2] dark:hover:text-[#F7B500] transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
        >
          <span>Dinesh</span>
          <span>Polavarapu</span>
        </button>

        {/* Zone 2: 4-7 clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-600 dark:text-neutral-400">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`transition-colors whitespace-nowrap shrink-0 py-1 relative cursor-pointer ${
                  isActive
                    ? 'text-base text-neutral-950 dark:text-[#F6F4ED] font-bold'
                    : 'hover:text-[#1868F2] dark:hover:text-[#F7B500]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action + theme toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle theme"
            className="p-2 rounded-lg text-neutral-600 dark:text-neutral-400 hover:bg-[#EBE8DD] dark:hover:bg-[#1C1D18] transition-colors cursor-pointer"
          >
            {isDark ? <Sun className="w-4 h-4 text-[#F7B500]" /> : <Moon className="w-4 h-4 text-[#1868F2]" />}
          </button>

          {/* Gold CTA button mirroring pitch deck primary CTA */}
          <button
            onClick={() => {
              handleNavClick('contact');
              onOpenContact();
            }}
            className="hidden xl:inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-neutral-950 bg-[#F7B500] hover:bg-[#E5A600] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-xs active:scale-[0.98]"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 text-neutral-700 dark:text-neutral-300 hover:bg-[#EBE8DD] dark:hover:bg-[#1C1D18] rounded-lg cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#E5E2D6] dark:border-[#2C2D28] bg-[#F6F4ED] dark:bg-[#1A1B17] px-6 py-4 animate-in fade-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                  activeTab === link.id
                    ? 'bg-[#EAE6D8] dark:bg-[#252620] text-neutral-950 dark:text-white font-semibold'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => {
                handleNavClick('contact');
                onOpenContact();
              }}
              className="mt-2 w-full py-2.5 text-center text-xs font-semibold text-neutral-950 bg-[#F7B500] hover:bg-[#E5A600] rounded-lg"
            >
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
