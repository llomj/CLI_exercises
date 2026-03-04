import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface FlowViewProps {
  onBack: () => void;
}

const Section: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => (
  <div className="mb-10">
    <h3 className="text-lg font-bold text-emerald-400 mb-3 pb-2 border-b border-emerald-500/30">{title}</h3>
    <div className="text-slate-300 text-sm leading-relaxed space-y-2">{children}</div>
  </div>
);

const Step: React.FC<{ n: number; children: React.ReactNode }> = ({ n, children }) => (
  <p><span className="text-amber-400 font-semibold">Step {n}:</span> <span className="text-slate-300">{children}</span></p>
);

const CodeBlock: React.FC<{ code: string }> = ({ code }) => (
  <SyntaxHighlighter
    language="bash"
    style={oneDark}
    customStyle={{
      padding: '1rem',
      margin: '0.75rem 0',
      borderRadius: '0.75rem',
      background: 'rgba(15, 23, 42, 0.8)',
      fontSize: '0.8rem',
      lineHeight: '1.6',
      fontFamily: "'Fira Code', monospace"
    }}
    codeTagProps={{ style: { fontFamily: "'Fira Code', monospace" } }}
    PreTag="div"
  >
    {code.trim()}
  </SyntaxHighlighter>
);

const Key: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-cyan-400 font-medium">{children}</span>
);

export const FlowView: React.FC<FlowViewProps> = ({ onBack }) => {
  const { language } = useLanguage();
  const isFr = language === 'fr';

  return (
    <div className="relative min-h-[600px] animate-in slide-in-from-left duration-500 pb-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-black text-white flex items-center gap-3">
          <i className="fas fa-diagram-project text-emerald-400"></i>
          {isFr ? 'Flux shell et pipelines' : 'Shell Flow & Pipelines'}
        </h2>
        <button
          onClick={onBack}
          className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl text-sm font-bold transition-colors"
        >
          {isFr ? 'Retour' : 'Back'}
        </button>
      </div>

      <div className="glass rounded-2xl p-6 border border-white/5 overflow-x-auto max-h-[70vh] overflow-y-auto">
        <p className="text-slate-400 text-sm mb-6">
          {isFr
            ? "Le shell exécute les commandes de gauche à droite. Les tubes (|) et la redirection (> <) connectent les flux. Ce guide explique le flux des données entre les commandes."
            : "The shell runs commands left to right. Pipes (|) and redirection (> <) connect streams. This guide explains how data flows between commands."}
        </p>

        <Section title={isFr ? '1. FLUX DES TUBES (PIPES)' : '1. PIPE FLOW'}>
          <Step n={1}>{isFr ? "cmd1 | cmd2 : cmd1 s'exécute et envoie sa sortie (stdout) à l'entrée (stdin) de cmd2." : "cmd1 | cmd2: cmd1 runs and sends its output (stdout) to cmd2's input (stdin)."}</Step>
          <Step n={2}>{isFr ? "Les deux commandes s'exécutent en parallèle. cmd2 lit au fur et à mesure que cmd1 écrit." : "Both commands run concurrently. cmd2 reads as cmd1 writes."}</Step>
          <Step n={3}>{isFr ? "Seule la sortie standard (stdout) est tubée. stderr va toujours au terminal sauf redirection." : "Only stdout is piped. stderr still goes to the terminal unless redirected."}</Step>
          <CodeBlock code={`ls -l | grep '\.txt$'
# Flow: ls writes to pipe → grep reads from pipe
# grep filters and prints matching lines`} />
        </Section>

        <Section title={isFr ? '2. CHAÎNES DE TUBES' : '2. PIPE CHAINS'}>
          <Step n={1}>{isFr ? "cmd1 | cmd2 | cmd3 : les données circulent de gauche à droite." : "cmd1 | cmd2 | cmd3: data flows left to right."}</Step>
          <Step n={2}>{isFr ? "Chaque commande lit stdin, traite, écrit sur stdout. La suivante reçoit ce flux." : "Each command reads stdin, processes, writes to stdout. The next receives that stream."}</Step>
          <Step n={3}>{isFr ? "Philosophie Unix : petits outils qui font une chose bien, composés par des tubes." : "Unix philosophy: small tools that do one thing well, composed with pipes."}</Step>
          <CodeBlock code={`cat access.log | cut -d' ' -f1 | sort | uniq -c
# 1. cat: read file → stdout
# 2. cut: extract column 1 → stdout
# 3. sort: sort lines → stdout
# 4. uniq -c: count duplicates → stdout`} />
        </Section>

        <Section title={isFr ? '3. REDIRECTION — FLUX VERS FICHIERS' : '3. REDIRECTION — STREAMS TO FILES'}>
          <Step n={1}>{isFr ? "> file : redirige stdout vers le fichier (écrase). La commande écrit dans le fichier au lieu du terminal." : "> file: redirects stdout to file (overwrite). Command writes to file instead of terminal."}</Step>
          <Step n={2}>{isFr ? ">> file : ajoute à la fin du fichier au lieu d'écraser." : ">> file: appends to file instead of overwriting."}</Step>
          <Step n={3}>{isFr ? "< file : lit stdin depuis le fichier. La commande reçoit le contenu du fichier comme entrée." : "< file: reads stdin from file. Command receives file content as input."}</Step>
          <CodeBlock code={`ls > output.txt    # stdout → file
grep x < input.txt  # file → stdin
cmd 2>&1 | tee log  # stderr+stdout → pipe, and save to log`} />
        </Section>

        <Section title={isFr ? '4. && et || — FLUX DE CONTRÔLE' : '4. && and || — CONTROL FLOW'}>
          <Step n={1}>{isFr ? "cmd1 && cmd2 : cmd2 s'exécute seulement si cmd1 réussit (exit code 0)." : "cmd1 && cmd2: cmd2 runs only if cmd1 succeeds (exit code 0)."}</Step>
          <Step n={2}>{isFr ? "cmd1 || cmd2 : cmd2 s'exécute seulement si cmd1 échoue (exit code non-zéro)." : "cmd1 || cmd2: cmd2 runs only if cmd1 fails (non-zero exit)."}</Step>
          <Step n={3}>{isFr ? "Évaluation court-circuit : && s'arrête au premier échec ; || s'arrête au premier succès." : "Short-circuit: && stops at first failure; || stops at first success."}</Step>
          <CodeBlock code={`mkdir backup && cp -r src backup/
# Only copies if mkdir succeeds

cmd || echo "Failed"
# Runs echo only if cmd fails`} />
        </Section>

        <Section title={isFr ? '5. CODES DE SORTIE — FLUX DE DÉCISION' : '5. EXIT CODES — DECISION FLOW'}>
          <Step n={1}>{isFr ? "Chaque commande retourne un code (0-255). 0 = succès, non-zéro = échec." : "Every command returns a code (0-255). 0 = success, non-zero = failure."}</Step>
          <Step n={2}>{isFr ? "$? contient le code de la dernière commande. Utilisez-le dans les scripts." : "$? holds the last command's exit code. Use it in scripts."}</Step>
          <Step n={3}>{isFr ? "if cmd; then ... fi : le then s'exécute si cmd retourne 0." : "if cmd; then ... fi: the then block runs if cmd returns 0."}</Step>
          <CodeBlock code={`grep -q pattern file
if [ $? -eq 0 ]; then
  echo "Found"
else
  echo "Not found"
fi`} />
        </Section>

        <Section title={isFr ? '6. ORDRE D\'EXÉCUTION — GAUCHE À DROITE' : '6. EXECUTION ORDER — LEFT TO RIGHT'}>
          <Step n={1}>{isFr ? "Le shell parse la ligne, puis exécute : d'abord les redirections, puis la commande." : "Shell parses the line, then executes: redirections first, then the command."}</Step>
          <Step n={2}>{isFr ? "Dans cmd1 | cmd2, les deux démarrent. cmd1 écrit ; cmd2 lit. Données en flux." : "In cmd1 | cmd2, both start. cmd1 writes; cmd2 reads. Data streams."}</Step>
          <Step n={3}>{isFr ? "Dans cmd1 && cmd2, cmd2 attend que cmd1 termine. Séquentiel, pas parallèle." : "In cmd1 && cmd2, cmd2 waits for cmd1 to finish. Sequential, not parallel."}</Step>
          <CodeBlock code={`# Pipe: concurrent
ls | grep x   # ls and grep run together

# And: sequential
cd dir && ls  # ls runs only after cd completes`} />
        </Section>

        <Section title={isFr ? '7. STDIN, STDOUT, STDERR' : '7. STDIN, STDOUT, STDERR'}>
          <Step n={1}>{isFr ? "0 = stdin (entrée), 1 = stdout (sortie), 2 = stderr (erreurs)." : "0 = stdin (input), 1 = stdout (output), 2 = stderr (errors)."}</Step>
          <Step n={2}>{isFr ? "Par défaut : stdin = clavier, stdout = terminal, stderr = terminal." : "Default: stdin = keyboard, stdout = terminal, stderr = terminal."}</Step>
          <Step n={3}>{isFr ? "2>&1 : redirige stderr vers stdout. Utile pour capturer tout dans un fichier ou un tube." : "2>&1: redirects stderr to stdout. Useful to capture everything to a file or pipe."}</Step>
          <CodeBlock code={`cmd > out.txt 2>&1   # both to file
cmd 2>/dev/null    # discard errors
cmd | tee file     # stdout to pipe and file`} />
        </Section>

        <Section title={isFr ? 'RÉSUMÉ' : 'SUMMARY'}>
          <ul className="list-disc list-inside space-y-1 text-slate-400">
            <li>{isFr ? "Tubes : stdout de gauche → stdin de droite. Exécution parallèle." : "Pipes: left stdout → right stdin. Parallel execution."}</li>
            <li>{isFr ? "Redirection : > écraser, >> ajouter, < lire depuis fichier." : "Redirection: > overwrite, >> append, < read from file."}</li>
            <li>{isFr ? "&& : exécuter seulement si la précédente réussit." : "&&: run next only if previous succeeds."}</li>
            <li>{isFr ? "|| : exécuter seulement si la précédente échoue." : "||: run next only if previous fails."}</li>
            <li>{isFr ? "Exit code 0 = succès. $? pour vérifier." : "Exit code 0 = success. $? to check."}</li>
            <li>{isFr ? "2>&1 fusionne stderr dans stdout." : "2>&1 merges stderr into stdout."}</li>
          </ul>
        </Section>
      </div>
    </div>
  );
};
