import React, { useMemo } from 'react';
import { useSound } from '../contexts/SoundContext';
import { QuestionAttempt } from '../types';
import { LEVELS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { formatTranslation } from '../translations';

interface WeakSpotDrillsViewProps {
  history: QuestionAttempt[];
  onBack: () => void;
  onStartDrill: (levels: number[]) => void;
}

/** Derives weak levels (most incorrect answers) from quiz history. */
function getWeakLevels(history: QuestionAttempt[], topN: number = 3): number[] {
  const incorrectByLevel: Record<number, number> = {};
  for (const a of history) {
    if (!a.isCorrect) {
      incorrectByLevel[a.level] = (incorrectByLevel[a.level] ?? 0) + 1;
    }
  }
  const entries = Object.entries(incorrectByLevel)
    .map(([lev, count]) => ({ level: Number(lev), count }))
    .sort((a, b) => b.count - a.count);
  const levels = entries.slice(0, topN).map(e => e.level);
  return levels.length > 0 ? levels : [];
}

export const WeakSpotDrillsView: React.FC<WeakSpotDrillsViewProps> = ({
  history,
  onBack,
  onStartDrill
}) => {
  const { t } = useLanguage();
  const { playTapSound } = useSound();
  const weakLevels = useMemo(() => getWeakLevels(history, 5), [history]);
  const hasData = weakLevels.length > 0;

  return (
    <div className="relative min-h-[400px] animate-in slide-in-from-left duration-300 pb-12">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => { playTapSound(); onBack(); }}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
        >
          <i className="fas fa-arrow-left"></i>
          <span className="text-sm font-medium">{t('operations.back')}</span>
        </button>
        <h2 className="text-xl font-black text-white flex items-center gap-2">
          <i className="fas fa-bullseye text-amber-400"></i>
          {t('rules.weakSpotDrills')}
        </h2>
      </div>

      <p className="text-slate-400 text-sm mb-6">
        {t('rules.weakSpotDrillsDesc')}
      </p>

      {hasData ? (
        <div className="space-y-4">
          <div className="grid gap-3">
            {weakLevels.map((level) => {
              const info = LEVELS.find(l => l.level === level);
              const incorrectCount = history.filter(a => a.level === level && !a.isCorrect).length;
              return (
                <div
                  key={level}
                  className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10"
                >
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-1 bg-amber-500/20 text-amber-400 rounded-lg text-xs font-bold">
                      {formatTranslation(t('levelSelector.level'), { level })}
                    </span>
                    <span className="text-white font-medium">
                      {info?.persona ?? `Level ${level}`}
                    </span>
                  </div>
                  <span className="text-slate-500 text-sm">
                    {incorrectCount} {t('history.incorrect')}
                  </span>
                </div>
              );
            })}
          </div>
          <button
            onClick={() => { playTapSound(); onStartDrill(weakLevels); }}
            className="w-full py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl font-bold transition-all shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2"
          >
            <i className="fas fa-play"></i>
            {t('rules.startDrill')}
          </button>
        </div>
      ) : (
        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center text-slate-400">
          <i className="fas fa-chart-line text-4xl mb-4 opacity-50"></i>
          <p className="font-medium">{t('rules.noWeakSpotsYet')}</p>
          <p className="text-sm mt-2">{t('rules.noWeakSpotsHint')}</p>
        </div>
      )}
    </div>
  );
};
