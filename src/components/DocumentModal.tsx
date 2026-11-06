import React, { useState, useEffect } from 'react';
import { X, FileText, Download, Printer, ChevronRight, Check, ArrowUpRight } from 'lucide-react';
import { DocumentItem } from '../types';

interface DocumentModalProps {
  document: DocumentItem | null;
  onClose: () => void;
}

export const DocumentModal: React.FC<DocumentModalProps> = ({ document, onClose }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!document) return null;

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 2400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl 2xl:max-w-5xl 3xl:max-w-6xl max-h-[90vh] flex flex-col bg-white dark:bg-[#0d0f15] border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Document Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5E2D6] dark:border-[#2C2D28] bg-[#F6F4ED] dark:bg-[#1A1B17]">
          <div className="flex items-center gap-3 min-w-0">
            <div className="p-2 rounded-lg bg-[#F7B500] text-neutral-950 shrink-0 shadow-xs">
              <FileText className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="text-xs text-neutral-500 dark:text-neutral-400 font-mono-code flex items-center gap-2">
                <span className="text-[#1868F2] dark:text-[#5B95F7] font-semibold">{document.category}</span>
                <span>·</span>
                <span>{document.date}</span>
                <span>·</span>
                <span className="text-[#F7B500] font-semibold">{document.pages} Pages</span>
              </div>
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 truncate">
                {document.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {document.fileUrl ? (
              <a
                href={document.fileUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg bg-[#F7B500] hover:bg-[#E5A600] text-neutral-950 transition-colors shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Open Raw PDF</span>
              </a>
            ) : (
              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#F7B500] hover:bg-[#E5A600] text-neutral-950 transition-colors shadow-xs cursor-pointer"
              >
                {downloadSuccess ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Saved</span>
                  </>
                ) : (
                  <>
                    <Download className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Save PDF</span>
                  </>
                )}
              </button>
            )}
            <button
              onClick={() => window.print()}
              className="p-1.5 rounded-lg border border-[#E5E2D6] dark:border-[#2C2D28] hover:bg-neutral-200/60 dark:hover:bg-[#252620] text-neutral-600 dark:text-neutral-400 transition-colors cursor-pointer"
              title="Print document"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-neutral-200/60 dark:hover:bg-[#252620] text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
              title="Close (ESC)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Document Content View */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">
          {/* Executive Overview Header */}
          <div className="border-b border-neutral-100 dark:border-neutral-800/80 pb-6">
            <div className="text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2">
              Official Technical Publication
            </div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-neutral-900 dark:text-neutral-100 leading-snug mb-3">
              {document.title}
            </h1>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-3xl">
              {document.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-neutral-500 dark:text-neutral-400">
              <span className="font-semibold text-neutral-700 dark:text-neutral-300">Author:</span>
              <span>Dinesh Polavarapu</span>
              <span>·</span>
              <span>Reading Duration: ~{document.readTime}</span>
              <span>·</span>
              <span>Format: {document.fileType} Specification</span>
            </div>
          </div>

          {/* Embedded PDF Viewer if fileUrl exists */}
          {document.fileUrl && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono-code text-neutral-500">
                <span className="text-[#1868F2] dark:text-[#F7B500] font-semibold">EMBEDDED DOCUMENT VIEWER</span>
                <a
                  href={document.fileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline flex items-center gap-1 text-neutral-700 dark:text-neutral-300"
                >
                  <span>Open In New Tab</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
              <div className="w-full h-[460px] sm:h-[540px] rounded-xl overflow-hidden border border-[#E5E2D6] dark:border-[#2C2D28] bg-neutral-900 shadow-inner">
                <iframe
                  src={`${document.fileUrl}#toolbar=0`}
                  title={document.title}
                  className="w-full h-full border-0"
                />
              </div>
            </div>
          )}

          {/* Abstract / Summary */}
          <div className="p-5 rounded-xl bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200/70 dark:border-neutral-800">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
              Executive Abstract
            </h4>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {document.summary}
            </p>
          </div>

          {/* Table of Contents & Sections */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3">
              Table of Contents & Core Modules
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {document.keySections.map((section, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-lg border border-neutral-100 dark:border-neutral-800/80 bg-white dark:bg-[#11131a] hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
                >
                  <span className="font-mono-code text-xs text-neutral-400 dark:text-neutral-500 w-5">
                    0{idx + 1}.
                  </span>
                  <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200 flex-1">
                    {section}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
                </div>
              ))}
            </div>
          </div>

          {/* Primary Excerpt & Deep Technical Note */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              Theoretical Foundation & System Excerpt
            </h4>
            <div className="p-6 rounded-xl bg-neutral-100/70 dark:bg-[#0a0c10] border border-neutral-200 dark:border-neutral-800 font-editorial text-lg text-neutral-800 dark:text-neutral-200 leading-relaxed italic">
              "{document.contentExcerpt}"
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
              * Note: The full multi-page document is retained in Dinesh Polavarapu's digital systems archive. For academic referencing or collaborative technical access, contact direct communications.
            </p>
          </div>

          {/* Tag Metadata */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-neutral-100 dark:border-neutral-800 text-xs text-neutral-500 dark:text-neutral-400">
            <span className="font-medium text-neutral-700 dark:text-neutral-300">Indexed Under:</span>
            {document.tags.map((tag, i) => (
              <React.Fragment key={tag}>
                <span>{tag}</span>
                {i < document.tags.length - 1 && <span aria-hidden="true">·</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 text-xs text-neutral-500 dark:text-neutral-400">
          <div className="font-mono-code">
            Page {currentPage} of {document.pages}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-2.5 py-1 rounded border border-neutral-200 dark:border-neutral-700 disabled:opacity-30 hover:bg-neutral-200/50 dark:hover:bg-neutral-800 transition-colors"
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentPage((p) => Math.min(document.pages, p + 1))}
              disabled={currentPage === document.pages}
              className="px-2.5 py-1 rounded border border-neutral-200 dark:border-neutral-700 disabled:opacity-30 hover:bg-neutral-200/50 dark:hover:bg-neutral-800 transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
