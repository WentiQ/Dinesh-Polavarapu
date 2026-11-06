import React, { useState } from 'react';
import { FileText, Download, Eye, Layers, Image as ImageIcon } from 'lucide-react';
import { DOCUMENTS_DATA, PERSONAL_INFO } from '../data/content';
import { DocumentItem } from '../types';

interface DocumentsPageProps {
  onSelectDocument: (doc: DocumentItem) => void;
  onOpenLightbox: (src: string, caption: string) => void;
}

export const DocumentsPage: React.FC<DocumentsPageProps> = ({ onSelectDocument, onOpenLightbox }) => {
  const [activeTab, setActiveTab] = useState<'documents' | 'gallery'>('documents');
  const [selectedDocCategory, setSelectedDocCategory] = useState<string>('All');

  const docCategories = ['All', 'Pitch Deck', 'Curriculum Vitae', 'Whitepaper', 'Technical Blueprint', 'Venture Brief', 'Academic Report', 'Internship Report', 'Certificate', 'Research Note'];

  const filteredDocs = DOCUMENTS_DATA.filter((doc) => {
    if (selectedDocCategory === 'All') return true;
    return doc.category === selectedDocCategory;
  });

  const visualAssets = [
    {
      src: '/src/assets/images/qraezev_venture_concept_1793726734363.jpg',
      title: 'Qraezev Cognitive Substrate Architecture Schematic',
      type: 'Systems Architecture',
      date: '2026',
    },
    {
      src: '/src/assets/images/memossist_preview.jpg',
      title: 'Memossist On-Device Cognitive Memory Architecture',
      type: 'Cognitive AI & Local Vector Memory',
      date: '2026',
    },
    {
      src: '/src/assets/images/lifeline_ai_preview.jpg',
      title: 'LifeLine AI Smart Health Companion Architecture',
      type: 'Healthcare AI & Emergency Telemetry',
      date: '2026',
    },
    {
      src: '/src/assets/images/guardian_wearable_preview.jpg',
      title: 'The Universal Health Guardian Ecosystem (IIT Tirupati Winner)',
      type: 'Health Telemetry Wearables & On-Device AI',
      date: '2026',
    },
    {
      src: '/src/assets/images/praxinex_preview.jpg',
      title: 'Praxinex AI Revenue Recovery Agent Architecture',
      type: 'FinTech / Autonomous Agents',
      date: '2026',
    },
    {
      src: '/src/assets/images/tascyn_preview.jpg',
      title: 'Tascyn Focused Productivity System Interface',
      type: 'Productivity Systems & Mobile UI',
      date: '2026',
    },
    {
      src: '/src/assets/images/ur5_ik_verification_preview.jpg',
      title: 'UR5-IK Verification: Robotic Kinematics Analysis & Simulation',
      type: 'Robotics & Control',
      date: '2026',
    },
    {
      src: '/src/assets/images/startup_evaluation_preview.jpg',
      title: 'Startup Evaluation: AI-Powered Multi-Dimensional Framework',
      type: 'Venture Intelligence & Risk Modeling',
      date: '2026',
    },
    {
      src: '/src/assets/images/engineering_mechanics_lab_1793726734864.jpg',
      title: 'Computational Mechanics & Finite Element Analysis',
      type: 'Computational Mechanics',
      date: '2025',
    },
  ];

  return (
    <div className="space-y-16 pb-24">
      {/* 1. Header */}
      <section className="pt-8 sm:pt-14 space-y-4">
        <div className="text-xs font-mono-code text-neutral-500 dark:text-neutral-400">
          PUBLICATIONS & MEDIA ARCHIVE
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
          Media & Documentation Library
        </h1>
        <p className="text-base sm:text-lg 2xl:text-xl text-neutral-600 dark:text-neutral-300 max-w-4xl 2xl:max-w-5xl 3xl:max-w-6xl leading-relaxed">
          A dedicated repository of technical whitepapers, system blueprints, engineering reports, and architectural schematics. Explore full documents in the built-in reader or review system media.
        </p>
      </section>

      {/* 2. Mode Switch: Documents vs Gallery */}
      <section className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E5E2D6] dark:border-[#2C2D28]">
        <div className="flex items-center gap-1 p-1 bg-[#EBE8DD] dark:bg-[#1A1B17] border border-[#E5E2D6] dark:border-[#2C2D28] rounded-xl text-xs">
          <button
            onClick={() => setActiveTab('documents')}
            className={`px-4 py-2 font-medium rounded-lg transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'documents'
                ? 'bg-[#F7B500] text-neutral-950 font-bold shadow-xs'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Technical Documents ({DOCUMENTS_DATA.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('gallery')}
            className={`px-4 py-2 font-medium rounded-lg transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'gallery'
                ? 'bg-[#F7B500] text-neutral-950 font-bold shadow-xs'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Architecture &amp; Schematics ({visualAssets.length})</span>
          </button>
        </div>

        {activeTab === 'documents' && (
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            {docCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedDocCategory(cat)}
                className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                  selectedDocCategory === cat
                    ? 'bg-[#1868F2] text-white font-semibold'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </section>

      {/* 3. Document Cards View */}
      {activeTab === 'documents' && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-6">
          {filteredDocs.map((doc) => (
            <div
              key={doc.id}
              onClick={() => onSelectDocument(doc)}
              className="group p-6 sm:p-7 rounded-2xl border border-[#E5E2D6] dark:border-[#2C2D28] bg-white dark:bg-[#1A1B17] hover:border-[#1868F2] dark:hover:border-[#F7B500] transition-all duration-200 cursor-pointer flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-3">
                  <div className="text-xs font-mono-code text-neutral-500 dark:text-neutral-400 flex items-center gap-2">
                    <span className="text-[#1868F2] dark:text-[#5B95F7] font-semibold">{doc.category}</span>
                    <span>·</span>
                    <span>{doc.date}</span>
                    <span>·</span>
                    <span className="text-[#F7B500] font-semibold">{doc.pages} Pages</span>
                  </div>
                  <div className="p-1 rounded-md text-neutral-400 group-hover:text-[#1868F2] dark:group-hover:text-[#F7B500]">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-neutral-950 dark:text-white mb-2 group-hover:text-[#1868F2] dark:group-hover:text-[#F7B500] transition-colors">
                  {doc.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
                  {doc.summary}
                </p>

                {/* Modules list */}
                <div className="space-y-1 text-xs text-neutral-500 mb-6">
                  <div className="font-semibold text-neutral-700 dark:text-neutral-300">Key Sections Included:</div>
                  <ul className="space-y-1">
                    {doc.keySections.slice(0, 3).map((sec, idx) => (
                      <li key={idx} className="flex items-center gap-1.5 truncate">
                        <span className="text-[#F7B500]">―</span>
                        <span className="truncate">{sec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E5E2D6]/80 dark:border-[#2C2D28] flex items-center justify-between text-xs">
                <span className="font-mono-code text-neutral-500">{doc.readTime} reading time</span>
                <span className="font-semibold text-[#1868F2] dark:text-[#F7B500] group-hover:underline">
                  Open Interactive Reader →
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 4. Gallery & Schematics View */}
      {activeTab === 'gallery' && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-8">
          {visualAssets.map((asset, idx) => (
            <div
              key={idx}
              onClick={() => onOpenLightbox(asset.src, asset.title)}
              className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0c0d12] overflow-hidden cursor-zoom-in shadow-xs"
            >
              <div className="aspect-16/10 overflow-hidden bg-neutral-950">
                <img
                  src={asset.src}
                  alt={asset.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5 flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-mono-code text-neutral-500 dark:text-neutral-400 mb-0.5">
                    {asset.type} · {asset.date}
                  </div>
                  <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                    {asset.title}
                  </h4>
                </div>
                <div className="text-xs text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white">
                  Inspect
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
