/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { VenturesPage } from './pages/VenturesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { DocumentsPage } from './pages/DocumentsPage';
import { WritingPage } from './pages/WritingPage';
import { ContactPage } from './pages/ContactPage';
import { CaseStudyModal } from './components/CaseStudyModal';
import { DocumentModal } from './components/DocumentModal';
import { ArticleModal } from './components/ArticleModal';
import { MediaLightbox } from './components/MediaLightbox';
import { Project, DocumentItem, Article } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [isDark, setIsDark] = useState<boolean>(false);

  // Modal states
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedDocument, setSelectedDocument] = useState<DocumentItem | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [lightboxData, setLightboxData] = useState<{ src: string; caption: string } | null>(null);

  // Dark mode effect syncing with document.documentElement
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const handleOpenLightbox = (src: string, caption: string) => {
    setLightboxData({ src, caption });
  };

  const handleOpenContact = () => {
    setActiveTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F4ED] dark:bg-[#121310] text-neutral-900 dark:text-[#F6F4ED] transition-colors duration-200">
      {/* 3-Zone Top Navigation Contract */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isDark={isDark}
        setIsDark={setIsDark}
        onOpenContact={handleOpenContact}
      />

      {/* Main Viewport Container - Automatically adapts across wide and ultra-wide screens */}
      <main className="flex-1 w-full mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 3xl:px-32 4xl:px-40">
        {activeTab === 'overview' && (
          <HomePage
            onSelectProject={setSelectedProject}
            onSelectDocument={setSelectedDocument}
            onSelectArticle={setSelectedArticle}
            onOpenLightbox={handleOpenLightbox}
            setActiveTab={setActiveTab}
            onOpenContact={handleOpenContact}
          />
        )}

        {activeTab === 'about' && (
          <AboutPage
            onOpenLightbox={handleOpenLightbox}
            onOpenContact={handleOpenContact}
          />
        )}

        {activeTab === 'ventures' && (
          <VenturesPage
            onSelectDocument={setSelectedDocument}
            onOpenLightbox={handleOpenLightbox}
            onOpenContact={handleOpenContact}
          />
        )}

        {activeTab === 'projects' && (
          <ProjectsPage
            onSelectProject={setSelectedProject}
          />
        )}

        {activeTab === 'documents' && (
          <DocumentsPage
            onSelectDocument={setSelectedDocument}
            onOpenLightbox={handleOpenLightbox}
          />
        )}

        {activeTab === 'writing' && (
          <WritingPage
            onSelectArticle={setSelectedArticle}
          />
        )}

        {activeTab === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Quiet Footer Contract */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenContact={handleOpenContact}
      />

      {/* Interactive Modal Layer */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <DocumentModal
        document={selectedDocument}
        onClose={() => setSelectedDocument(null)}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      <MediaLightbox
        imageSrc={lightboxData?.src || null}
        caption={lightboxData?.caption || ''}
        onClose={() => setLightboxData(null)}
      />
    </div>
  );
}
