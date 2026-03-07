import React from 'react';

interface TadpoleIconProps {
  className?: string;
  size?: number;
}

/** Tadpole SVG icon: oval body on left, thin curved tail sweeping right. */
export const TadpoleIcon: React.FC<TadpoleIconProps> = ({ className = '', size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" aria-hidden>
    <ellipse cx="8" cy="12" rx="5" ry="6" />
    <path d="M13 11.5 Q17 11 21 12 Q19 13 15 12.5 Z" />
  </svg>
);
