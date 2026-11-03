import React from 'react';

interface QraezevEmblemProps {
  className?: string;
  size?: number;
}

/**
 * Renders the iconic Qraezev brand mark from the pitch deck:
 * Sleek geometric dual-facet diamond mark.
 */
export const QraezevLogoMark: React.FC<QraezevEmblemProps> = ({ className = 'w-5 h-5' }) => {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Upper facet in Signal Gold */}
      <path d="M8 20L20 6L32 18L26 24L20 18L14 24L8 20Z" fill="#F7B500" />
      {/* Lower facet in Electric Cobalt Blue */}
      <path d="M8 20L14 26L20 20L26 26L20 34L8 20Z" fill="#1868F2" />
    </svg>
  );
};

/**
 * Renders the signature concentric ring graphic from Page 1 of the Qraezev Pitch Deck:
 * Top semicircles in Signal Gold (#F7B500), bottom semicircles in Electric Cobalt Blue (#1868F2).
 */
export const QraezevConcentricRing: React.FC<{ size?: number; className?: string }> = ({
  size = 280,
  className = '',
}) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative rounded-full select-none shrink-0 ${className}`}
    >
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full drop-shadow-xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Ring - Top Half (Gold) */}
        <path
          d="M 15 100 A 85 85 0 0 1 185 100 L 155 100 A 55 55 0 0 0 45 100 Z"
          fill="#F7B500"
        />
        {/* Outer Ring - Bottom Half (Cobalt Blue) */}
        <path
          d="M 15 100 A 85 85 0 0 0 185 100 L 155 100 A 55 55 0 0 1 45 100 Z"
          fill="#1868F2"
        />

        {/* Inner Ring - Top Half (Blue) */}
        <path
          d="M 50 100 A 50 50 0 0 1 150 100 L 130 100 A 30 30 0 0 0 70 100 Z"
          fill="#1868F2"
        />
        {/* Inner Ring - Bottom Half (Gold) */}
        <path
          d="M 50 100 A 50 50 0 0 0 150 100 L 130 100 A 30 30 0 0 1 70 100 Z"
          fill="#F7B500"
        />

        {/* Center Core (Dark Obsidian) */}
        <circle cx="100" cy="100" r="28" fill="#121310" stroke="#2C2D28" strokeWidth="2" />
      </svg>
    </div>
  );
};

/**
 * Official Qraezev geometric brand emblem uploaded by founder:
 * Light mode: Deep charcoal/black folded ribbons.
 * Dark mode: Crisp white/silver folded ribbons.
 */
export const QraezevOfficialLogo: React.FC<{ size?: number; className?: string }> = ({
  size = 220,
  className = '',
}) => {
  return (
    <div style={{ width: size, height: size }} className={`relative select-none shrink-0 flex items-center justify-center ${className}`}>
      {/* Light Mode Logo (Black on light background) */}
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full block dark:hidden drop-shadow-sm"
      >
        <defs>
          <linearGradient id="q-light-ribbon-1" x1="120" y1="90" x2="280" y2="240" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1C1D18" />
            <stop offset="60%" stopColor="#12130F" />
            <stop offset="100%" stopColor="#080806" />
          </linearGradient>
          <linearGradient id="q-light-facet-1" x1="230" y1="130" x2="310" y2="250" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4A4C44" />
            <stop offset="50%" stopColor="#252622" />
            <stop offset="100%" stopColor="#121310" />
          </linearGradient>
          <linearGradient id="q-light-ribbon-2" x1="280" y1="310" x2="120" y2="160" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1C1D18" />
            <stop offset="60%" stopColor="#12130F" />
            <stop offset="100%" stopColor="#080806" />
          </linearGradient>
          <linearGradient id="q-light-facet-2" x1="170" y1="270" x2="90" y2="150" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4A4C44" />
            <stop offset="50%" stopColor="#252622" />
            <stop offset="100%" stopColor="#121310" />
          </linearGradient>
        </defs>

        {/* Top Folded Ribbon */}
        <g>
          <path
            d="M 95 195 C 72 172 72 135 95 112 C 118 89 155 89 178 112 L 285 219 L 230 274 L 95 195 Z"
            fill="url(#q-light-ribbon-1)"
          />
          <path
            d="M 198 132 L 286 52 C 295 44 309 50 309 63 L 309 220 C 309 231 297 238 288 230 L 198 132 Z"
            fill="url(#q-light-facet-1)"
          />
        </g>

        {/* Bottom Folded Ribbon (180deg symmetric) */}
        <g transform="rotate(180 200 200)">
          <path
            d="M 95 195 C 72 172 72 135 95 112 C 118 89 155 89 178 112 L 285 219 L 230 274 L 95 195 Z"
            fill="url(#q-light-ribbon-2)"
          />
          <path
            d="M 198 132 L 286 52 C 295 44 309 50 309 63 L 309 220 C 309 231 297 238 288 230 L 198 132 Z"
            fill="url(#q-light-facet-2)"
          />
        </g>
      </svg>

      {/* Dark Mode Logo (White/Silver on dark background) */}
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full hidden dark:block drop-shadow-[0_4px_24px_rgba(255,255,255,0.14)]"
      >
        <defs>
          <linearGradient id="q-dark-ribbon-1" x1="120" y1="90" x2="280" y2="240" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="60%" stopColor="#F3F4F6" />
            <stop offset="100%" stopColor="#E5E7EB" />
          </linearGradient>
          <linearGradient id="q-dark-facet-1" x1="230" y1="130" x2="310" y2="250" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#D1D5DB" />
            <stop offset="100%" stopColor="#9CA3AF" />
          </linearGradient>
          <linearGradient id="q-dark-ribbon-2" x1="280" y1="310" x2="120" y2="160" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="60%" stopColor="#F3F4F6" />
            <stop offset="100%" stopColor="#E5E7EB" />
          </linearGradient>
          <linearGradient id="q-dark-facet-2" x1="170" y1="270" x2="90" y2="150" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#D1D5DB" />
            <stop offset="100%" stopColor="#9CA3AF" />
          </linearGradient>
        </defs>

        {/* Top Folded Ribbon */}
        <g>
          <path
            d="M 95 195 C 72 172 72 135 95 112 C 118 89 155 89 178 112 L 285 219 L 230 274 L 95 195 Z"
            fill="url(#q-dark-ribbon-1)"
          />
          <path
            d="M 198 132 L 286 52 C 295 44 309 50 309 63 L 309 220 C 309 231 297 238 288 230 L 198 132 Z"
            fill="url(#q-dark-facet-1)"
          />
        </g>

        {/* Bottom Folded Ribbon (180deg symmetric) */}
        <g transform="rotate(180 200 200)">
          <path
            d="M 95 195 C 72 172 72 135 95 112 C 118 89 155 89 178 112 L 285 219 L 230 274 L 95 195 Z"
            fill="url(#q-dark-ribbon-2)"
          />
          <path
            d="M 198 132 L 286 52 C 295 44 309 50 309 63 L 309 220 C 309 231 297 238 288 230 L 198 132 Z"
            fill="url(#q-dark-facet-2)"
          />
        </g>
      </svg>
    </div>
  );
};

