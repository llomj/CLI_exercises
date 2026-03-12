import { PersonaStage, LevelInfo, RandomModeStats } from './types';

export const XP_PER_QUESTION = 10;
export const QUESTIONS_PER_SUBLEVEL = 100;
export const SUBLEVELS_PER_LEVEL = 3;
export const QUESTIONS_PER_LEVEL = QUESTIONS_PER_SUBLEVEL * SUBLEVELS_PER_LEVEL; // 300
export const TOTAL_QUESTIONS = 3300; // 11 levels (0–10) × 300 questions

/**
 * Star thresholds for level mode:
 *  - >10% and <20% of the 300 questions in that level → 1★
 *  - ≥20% and <40% → 2★
 *  - ≥40% and <60% → 3★
 *  - ≥60% and <80% → 4★
 *  - ≥90% and ≤100% → 5★
 *
 * NOTE: Percent is always computed against QUESTIONS_PER_LEVEL (300),
 * not just the questions the user has already seen.
 */
export const STAR_PERCENTAGE_THRESHOLDS = [10, 20, 40, 60, 80, 90] as const;

/**
 * Derive stars (0–5) for level mode based on how many questions in the
 * level (out of 300) the user has answered correctly, ignoring how many
 * they have seen so far.
 */
export const getStarsFromAccuracy = (correct: number, _total: number): number => {
  if (correct <= 0) return 0;
  const pct = (correct / QUESTIONS_PER_LEVEL) * 100;

  if (pct > 10 && pct < 20) return 1;
  if (pct >= 20 && pct < 40) return 2;
  if (pct >= 40 && pct < 60) return 3;
  if (pct >= 60 && pct < 80) return 4;
  if (pct >= 90 && pct <= 100) return 5;

  return 0;
};

/**
 * Random mode star thresholds: % of TOTAL_QUESTIONS (3300), using the same
 * percentage bands as level mode but applied globally:
 *  - >10% and <20% of 3300 → 1★
 *  - ≥20% and <40% → 2★
 *  - ≥40% and <60% → 3★
 *  - ≥60% and <80% → 4★
 *  - ≥90% and ≤100% → 5★
 */

/** Derive stars (0–5) for Random mode only: correct count vs TOTAL_QUESTIONS. Do not mix with level mode stars. */
export const getStarsFromRandomCorrect = (correct: number): number => {
  if (correct <= 0) return 0;
  const pct = (correct / TOTAL_QUESTIONS) * 100;

  if (pct > 10 && pct < 20) return 1;
  if (pct >= 20 && pct < 40) return 2;
  if (pct >= 40 && pct < 60) return 3;
  if (pct >= 60 && pct < 80) return 4;
  if (pct >= 90 && pct <= 100) return 5;

  return 0;
};

/** Legacy: derive stars from progress (for migration). */
export const getStarsFromProgress = (progress: number): number => {
  if (progress >= QUESTIONS_PER_SUBLEVEL * 3) return 3;
  if (progress >= QUESTIONS_PER_SUBLEVEL * 2) return 2;
  if (progress >= QUESTIONS_PER_SUBLEVEL) return 1;
  return 0;
};

// Random Mode: score = correct × accuracy (correct/total). Same 10 personas, point-based progression.
export const RANDOM_MODE_THRESHOLDS: { minScore: number; persona: PersonaStage }[] = [
  { minScore: 0, persona: PersonaStage.TADPOLE },
  { minScore: 5, persona: PersonaStage.PLANKTON },
  { minScore: 15, persona: PersonaStage.SHRIMP },
  { minScore: 40, persona: PersonaStage.CRAB },
  { minScore: 80, persona: PersonaStage.SMALL_FISH },
  { minScore: 150, persona: PersonaStage.OCTOPUS },
  { minScore: 250, persona: PersonaStage.SEAL },
  { minScore: 400, persona: PersonaStage.DOLPHIN },
  { minScore: 600, persona: PersonaStage.SHARK },
  { minScore: 900, persona: PersonaStage.WHALE },
  { minScore: 1300, persona: PersonaStage.GOD_WHALE },
];

/** Evolution score: correct × (correct / total). Rewards both volume and accuracy. */
export const getRandomModeScore = (stats: RandomModeStats): number => {
  if (stats.totalAnswered === 0) return 0;
  const accuracy = stats.totalCorrect / stats.totalAnswered;
  return Math.floor(stats.totalCorrect * accuracy);
};

/** Map cumulative Random-mode score to persona. Same 11 personas as Level mode (0–10). */
export const getPersonaFromRandomScore = (score: number): PersonaStage => {
  let result = PersonaStage.TADPOLE;
  for (const { minScore, persona } of RANDOM_MODE_THRESHOLDS) {
    if (score >= minScore) result = persona;
  }
  return result;
};

/** Get next persona threshold for progress display. Returns null if at max (God Whale). */
export const getNextRandomModeThreshold = (score: number): { minScore: number; persona: PersonaStage } | null => {
  for (const t of RANDOM_MODE_THRESHOLDS) {
    if (score < t.minScore) return t;
  }
  return null;
};

/** Emoji icons for each persona (level selection, badges). */
export const PERSONA_EMOJI: Record<PersonaStage, string> = {
  [PersonaStage.TADPOLE]: "🥚",
  [PersonaStage.PLANKTON]: "🦠",
  [PersonaStage.SHRIMP]: "🦐",
  [PersonaStage.CRAB]: "🦀",
  [PersonaStage.SMALL_FISH]: "🐟",
  [PersonaStage.OCTOPUS]: "🐙",
  [PersonaStage.SEAL]: "🦭",
  [PersonaStage.DOLPHIN]: "🐬",
  [PersonaStage.SHARK]: "🦈",
  [PersonaStage.WHALE]: "🐋",
  [PersonaStage.GOD_WHALE]: "🐳",
};

// Level configurations with personas and concepts (CLI/terminal focus). Level 0 = absolute beginner.
export const LEVELS: LevelInfo[] = [
  {
    level: 0,
    persona: PersonaStage.TADPOLE,
    concepts: ["terminal", "command", "keyboard", "prompt", "folder", "file", "path"],
    description: "Complete beginner. Learn what a terminal is, what a command is, and basic computer terms—no prior knowledge assumed.",
    color: "#94a3b8"
  },
  {
    level: 1,
    persona: PersonaStage.PLANKTON,
    concepts: ["terminal", "shell", "PATH", "exit codes", "globbing", "aliases"],
    description: "Terminal and shell foundations. Learn what a terminal is, how the shell works, and basic navigation.",
    color: "#10b981"
  },
  {
    level: 2,
    persona: PersonaStage.SHRIMP,
    concepts: ["filesystem", "paths", "inodes", "permissions", "links"],
    description: "Filesystem and storage. Master paths, permissions, inodes, and symbolic links.",
    color: "#059669"
  },
  {
    level: 3,
    persona: PersonaStage.CRAB,
    concepts: ["cat", "grep", "sed", "awk", "redirection", "pipes"],
    description: "File and text processing. Learn cat, grep, redirection, and pipes.",
    color: "#ec4899"
  },
  {
    level: 4,
    persona: PersonaStage.SMALL_FISH,
    concepts: ["ps", "top", "kill", "cron", "systemd", "processes"],
    description: "Process management. Master ps, top, kill, cron, and daemons.",
    color: "#06b6d4"
  },
  {
    level: 5,
    persona: PersonaStage.OCTOPUS,
    concepts: ["apt", "dnf", "brew", "snap", "flatpak", "make"],
    description: "Package management. Learn apt, dnf, brew, and building from source.",
    color: "#10b981"
  },
  {
    level: 6,
    persona: PersonaStage.SEAL,
    concepts: ["TCP/IP", "DNS", "ping", "curl", "ssh", "scp", "rsync"],
    description: "Networking basics. Master IP, ports, DNS, curl, and remote tools.",
    color: "#f59e0b"
  },
  {
    level: 7,
    persona: PersonaStage.DOLPHIN,
    concepts: ["ip", "iptables", "nftables", "HTTP", "REST", "load balancing"],
    description: "Advanced networking. Learn ip, firewalls, and web protocols.",
    color: "#3b82f6"
  },
  {
    level: 8,
    persona: PersonaStage.SHARK,
    concepts: ["users", "PAM", "SSH hardening", "firewall", "SELinux", "GPG"],
    description: "Security and hardening. Master user management, SSH, and encryption.",
    color: "#ef4444"
  },
  {
    level: 9,
    persona: PersonaStage.WHALE,
    concepts: ["recon", "enumeration", "Metasploit", "privilege escalation", "pentest"],
    description: "Hacking and pentest concepts. Ethical hacking principles and tools.",
    color: "#059669"
  },
  {
    level: 10,
    persona: PersonaStage.GOD_WHALE,
    concepts: ["Docker", "Kubernetes", "Git", "boot process", "Unix philosophy"],
    description: "Containers, Git, boot process, and Unix philosophy. Master the full stack.",
    color: "#1f2937"
  }
];

// Glossary item type for app use
export interface GlossaryItem {
  term: string;
  definition: string;
  levelRange: string;
  detailedDescription: string;
  example: string;
}

// Glossary data for the app (CLI/terminal terms)
import { CLI_GLOSSARY } from './data/cliGlossary';
export const GLOSSARY: GlossaryItem[] = CLI_GLOSSARY;

