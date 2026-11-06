import React from 'react';
import { Clock, ArrowRight, BookOpen } from 'lucide-react';
import { ARTICLES_DATA } from '../data/content';
import { Article } from '../types';

interface WritingPageProps {
  onSelectArticle: (article: Article) => void;
}

export const WritingPage: React.FC<WritingPageProps> = ({ onSelectArticle }) => {
  return (
    <div className="space-y-16 pb-24">
      {/* 1. Header */}
      <section className="pt-8 sm:pt-14 space-y-4">
        <div className="text-xs font-mono-code text-neutral-500 dark:text-neutral-400">
          EDITORIAL ESSAYS & RESEARCH NOTES
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
          Writing & Ideas
        </h1>
        <p className="text-base sm:text-lg 2xl:text-xl text-neutral-600 dark:text-neutral-300 max-w-4xl 2xl:max-w-5xl 3xl:max-w-6xl leading-relaxed">
          Inquiries into cognitive software architectures, on-device persistence, engineering discipline from mechanical physics, and venture creation from first principles.
        </p>
      </section>

      {/* 2. Articles List - Clean Editorial Grid adapting to wide screens */}
      <section className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {ARTICLES_DATA.map((article, idx) => (
          <article
            key={article.id}
            onClick={() => onSelectArticle(article)}
            className="group p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0c0d12] hover:border-neutral-400 dark:hover:border-neutral-700 transition-all duration-200 cursor-pointer shadow-xs flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono-code text-neutral-500 dark:text-neutral-400">
                <span className="font-semibold text-neutral-800 dark:text-neutral-200">{article.category}</span>
                <span aria-hidden="true">·</span>
                <span>{article.date}</span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{article.readTime}</span>
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50 font-editorial group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
                {article.title}
              </h2>

              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {article.subtitle}
              </p>

              <p className="text-sm text-neutral-700 dark:text-neutral-300 line-clamp-3 leading-relaxed pt-1">
                {article.excerpt}
              </p>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-between gap-3 border-t border-neutral-100 dark:border-neutral-900 mt-4">
              <div className="flex flex-wrap items-center gap-1.5 text-xs text-neutral-500 font-mono-code">
                {article.tags.map((tag, tIdx) => (
                  <React.Fragment key={tag}>
                    <span>{tag}</span>
                    {tIdx < article.tags.length - 1 && <span>·</span>}
                  </React.Fragment>
                ))}
              </div>
              <div className="text-xs font-medium text-neutral-900 dark:text-neutral-100 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>Read Article</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};
