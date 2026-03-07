import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useSound } from '../contexts/SoundContext';

interface PlatformDiff {
  command: string;
  linux: string;
  macos: string;
  notes?: string;
}

const PLATFORM_DIFFS: PlatformDiff[] = [
  {
    command: 'sed -i',
    linux: 'sed -i "s/old/new/" file   # in-place edit',
    macos: "sed -i '' 's/old/new/' file   # backup suffix required (empty '' for none)",
    notes: 'macOS sed requires a backup extension; use empty string for no backup.'
  },
  {
    command: 'date',
    linux: 'date +%Y-%m-%d   # GNU date',
    macos: 'date +%Y-%m-%d   # BSD date (similar)',
    notes: 'Most format strings work on both. -d (GNU) vs -v (BSD) for relative dates.'
  },
  {
    command: 'xargs',
    linux: 'echo -n "a b" | xargs -d " " -I {} echo {}',
    macos: "echo 'a b' | xargs -I {} echo {}   # -d not available on BSD",
    notes: 'BSD xargs lacks -d. Use different input formatting.'
  },
  {
    command: 'grep -P',
    linux: 'grep -P "\\d+" file   # Perl regex',
    macos: 'grep -E "[0-9]+" file   # -P not available; use -E or install GNU grep',
    notes: 'macOS grep does not support -P. Use -E for extended regex.'
  },
  {
    command: 'wc -l',
    linux: 'wc -l file   # counts newlines',
    macos: 'wc -l file   # same, but no newline at EOF = may undercount by 1',
    notes: 'If file lacks trailing newline, wc -l may report one fewer line on some systems.'
  },
  {
    command: 'readlink',
    linux: 'readlink -f /path   # canonical absolute path',
    macos: 'readlink -f /path   # not on macOS; use greadlink (GNU) or realpath',
    notes: 'Install coreutils (brew install coreutils) for greadlink on macOS.'
  },
  {
    command: 'md5sum / sha256sum',
    linux: 'md5sum file   sha256sum file',
    macos: 'md5 file   shasum -a 256 file',
    notes: 'macOS uses md5 and shasum; Linux uses md5sum and sha256sum.'
  },
  {
    command: 'head / tail -n',
    linux: 'head -n 5 file   tail -n 5 file',
    macos: 'head -5 file   tail -5 file   # -n optional; both accept -n 5',
    notes: 'Both accept -n N. On macOS, -5 is shorthand for -n 5.'
  }
];

export const PlatformView: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const { playTapSound } = useSound();
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState<number | null>(null);

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
          <i className="fas fa-laptop text-sky-400"></i>
          {t('rules.platform')}
        </h2>
      </div>

      <p className="text-slate-400 text-sm mb-6">
        {t('rules.platformDesc')}
      </p>

      <div className="space-y-3">
        {PLATFORM_DIFFS.map((diff, idx) => (
          <div
            key={idx}
            className="rounded-xl bg-white/5 border border-white/10 overflow-hidden"
          >
            <button
              onClick={() => { playTapSound(); setExpanded(expanded === idx ? null : idx); }}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors"
            >
              <code className="text-emerald-400 font-mono text-sm">{diff.command}</code>
              <i className={`fas fa-chevron-${expanded === idx ? 'up' : 'down'} text-slate-500 text-xs`}></i>
            </button>
            {expanded === idx && (
              <div className="px-4 pb-4 space-y-3 border-t border-white/5 pt-3">
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-500 mb-1">Linux</p>
                  <pre className="text-xs text-slate-300 font-mono bg-slate-900/50 p-3 rounded-lg overflow-x-auto">
                    {diff.linux}
                  </pre>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-500 mb-1">macOS</p>
                  <pre className="text-xs text-slate-300 font-mono bg-slate-900/50 p-3 rounded-lg overflow-x-auto">
                    {diff.macos}
                  </pre>
                </div>
                {diff.notes && (
                  <p className="text-xs text-slate-500 italic">{diff.notes}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
