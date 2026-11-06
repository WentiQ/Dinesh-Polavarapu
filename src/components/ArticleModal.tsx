import React, { useEffect, useState } from 'react';
import { X, Clock, Share2, Check } from 'lucide-react';
import { Article } from '../types';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
    setScrollProgress(progress);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl max-h-[92vh] flex flex-col bg-white dark:bg-[#0c0d12] border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Reading Progress Indicator */}
        <div className="w-full h-1 bg-neutral-100 dark:bg-neutral-800">
          <div
            className="h-full bg-neutral-900 dark:bg-white transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-900/60 shrink-0">
          <div className="text-xs text-neutral-500 dark:text-neutral-400 font-mono-code flex items-center gap-2">
            <span>{article.category}</span>
            <span>·</span>
            <span>{article.date}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-200 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Link Copied' : 'Share'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
              title="Close (ESC)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Article Body */}
        <div 
          onScroll={handleScroll}
          className="flex-1 overflow-y-auto px-6 sm:px-12 py-8 md:py-12 space-y-8"
        >
          {/* Article Header */}
          <div className="border-b border-neutral-100 dark:border-neutral-800 pb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 mb-3">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTime}</span>
              <span>·</span>
              <span>By Dinesh Polavarapu</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-semibold text-neutral-950 dark:text-neutral-50 leading-tight tracking-tight mb-4 font-editorial">
              {article.title}
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {article.subtitle}
            </p>
          </div>

          {/* Key Excerpt */}
          <div className="p-5 rounded-xl bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200/80 dark:border-neutral-800 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed italic">
            "{article.excerpt}"
          </div>

          {/* Structured Paragraph Sections */}
          <div className="space-y-8">
            {article.content.map((sec, idx) => (
              <div key={idx} className="space-y-4">
                {sec.heading && (
                  <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight pt-2">
                    {sec.heading}
                  </h2>
                )}
                {sec.paragraphs.map((p, pIdx) => (
                  <p
                    key={pIdx}
                    className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed"
                  >
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Article Footnotes / Author Sign-off */}
          <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800 text-xs text-neutral-500 dark:text-neutral-400 space-y-3">
            <div className="flex flex-wrap gap-2">
              <span className="font-semibold text-neutral-700 dark:text-neutral-300">Topics:</span>
              {article.tags.map((t, idx) => (
                <React.Fragment key={t}>
                  <span>{t}</span>
                  {idx < article.tags.length - 1 && <span>·</span>}
                </React.Fragment>
              ))}
            </div>
            <p>
              Published by Dinesh Polavarapu · Founder, Qraezev · Mechanical Engineering, IIT Tirupati.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 flex items-center justify-between text-xs text-neutral-500">
          <span>End of essay</span>
          <button
            onClick={onClose}
            className="text-neutral-800 dark:text-neutral-200 hover:underline cursor-pointer"
          >
            Back to library
          </button>
        </div>
      </div>
    </div>
  );
};
