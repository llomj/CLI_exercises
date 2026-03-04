import React from 'react';
import { PersonaStage } from '../types';
import { PERSONA_EMOJI } from '../constants';

interface PersonaBadgeProps {
  stage: PersonaStage;
  size?: 'sm' | 'md' | 'lg';
}

export const PersonaBadge: React.FC<PersonaBadgeProps> = ({ stage, size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-12 h-12 text-xl',
    lg: 'w-20 h-20 text-4xl',
  };
  const emoji = PERSONA_EMOJI[stage] ?? '🐟';

  return (
    <div className={`flex flex-col items-center justify-center`}>
      <div className={`${sizeClasses[size]} rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-lg shadow-emerald-500/20`}>
        <span className="text-white">{emoji}</span>
      </div>
    </div>
  );
};