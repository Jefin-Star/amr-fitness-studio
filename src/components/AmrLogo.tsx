import React from 'react';

interface AmrLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  variant?: 'full' | 'mark-only';
}

export const AmrLogo: React.FC<AmrLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  variant = 'full',
}) => {
  // Dimension presets
  const sizeMap = {
    sm: { iconWidth: 44, iconHeight: 32, fontSize: 'text-xs', studioText: 'text-[9px]' },
    md: { iconWidth: 60, iconHeight: 44, fontSize: 'text-sm', studioText: 'text-[10px]' },
    lg: { iconWidth: 86, iconHeight: 64, fontSize: 'text-lg', studioText: 'text-xs' },
    xl: { iconWidth: 120, iconHeight: 88, fontSize: 'text-2xl', studioText: 'text-sm' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Precision Geometric Vector Logo of AMR (A - Lightning Bolt M - R) */}
      <svg
        width={currentSize.iconWidth}
        height={currentSize.iconHeight}
        viewBox="0 0 160 115"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:scale-105"
        aria-label="AMR Logo Mark"
      >
        <g>
          {/* Left Wing - Stylized Geometric "A" in Pure White */}
          <path
            d="M 32 35 L 54 35 L 72 70 L 60 70 L 52 54 L 32 54 L 23 70 L 11 70 Z M 48 46 L 36 46 L 42 34 Z"
            fill="#FFFFFF"
            style={{ display: 'none' }}
          />

          {/* High-fidelity Vector Representation matching user's photo */}
          {/* Left glyph: Angled A */}
          <path
            d="M 30 18 L 54 18 L 18 92 L 0 92 L 30 18 Z"
            fill="#FFFFFF"
          />
          <path
            d="M 30 18 L 68 85 L 53 92 L 20 28 L 30 18 Z"
            fill="#FFFFFF"
          />
          <path
            d="M 12 70 L 48 70 L 45 78 L 10 78 Z"
            fill="#FFFFFF"
          />

          {/* Center: Crimson Red Lightning Bolt (The AMR Thunder Spear) */}
          <path
            d="M 68 18 L 88 18 L 74 62 L 95 62 L 56 102 L 67 68 L 52 68 Z"
            fill="#FF1E27"
          />

          {/* Right glyph: Sharp White "R" */}
          <path
            d="M 98 18 L 138 18 L 146 36 L 138 54 L 114 54 L 109 64 L 100 64 L 115 32 L 103 32 Z"
            fill="#FFFFFF"
          />
          <path
            d="M 112 54 L 126 54 L 145 92 L 127 92 L 112 62 Z"
            fill="#FFFFFF"
          />
        </g>
      </svg>

      {/* Typography: APEX MUSCLE REALM */}
      {showText && variant === 'full' && (
        <div className="flex flex-col tracking-wider leading-none text-left">
          <div className="flex items-center gap-1.5 font-display font-extrabold tracking-widest text-white uppercase text-base sm:text-lg">
            <span>AMR</span>
            <span className="text-red-500 font-light text-sm">|</span>
            <span className="text-neutral-300 font-semibold text-xs sm:text-sm tracking-wider">FITNESS STUDIO</span>
          </div>
          <div className="text-[10px] sm:text-[11px] font-bold text-neutral-400 uppercase tracking-[0.22em] mt-0.5">
            APEX MUSCLE REALM
          </div>
        </div>
      )}
    </div>
  );
};
