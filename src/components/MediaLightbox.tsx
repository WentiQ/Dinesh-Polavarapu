import React, { useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';

interface MediaLightboxProps {
  imageSrc: string | null;
  caption: string;
  onClose: () => void;
}

export const MediaLightbox: React.FC<MediaLightboxProps> = ({ imageSrc, caption, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!imageSrc) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative max-w-5xl max-h-[92vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close image preview"
          className="absolute -top-12 right-0 p-2 text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
          <img
            src={imageSrc}
            alt={caption}
            referrerPolicy="no-referrer"
            className="max-h-[75vh] w-auto object-contain select-none"
          />
        </div>

        {caption && (
          <div className="mt-4 px-4 py-2 rounded-full bg-neutral-900/80 border border-neutral-800 text-xs text-neutral-300 max-w-xl text-center flex items-center gap-2">
            <ZoomIn className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
            <span className="truncate">{caption}</span>
          </div>
        )}
      </div>
    </div>
  );
};
