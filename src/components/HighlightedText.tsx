import React from 'react';

// Unambiguous commands that are safe to highlight in any language
const STRICT_COMMANDS = new Set([
  'ls', 'cd', 'pwd', 'mkdir', 'rm', 'rmdir', 'cp', 'mv', 'touch', 'less', 
  'grep', 'uniq', 'wc', 'man', 'chmod', 'chown', 'sudo', 
  'apt', 'yum', 'df', 'tar', 'gzip', 'gunzip', 'zip', 'unzip', 'ps', 
  'ping', 'ifconfig', 'ip', 'netstat', 'ssh', 'scp', 'wget', 'curl',
  'bash', 'zsh', 'sh', 'clear', 'exit', 'history', 'alias', 'unalias', 'export', 'source',
  'git', 'docker', 'npm', 'node', 'python', 'python3', 'pip', 'nano', 'vim', 'emacs',
  'make', 'gcc', 'awk', 'sed', 'cut', 'tr', 'xargs', 'systemctl', 'journalctl'
]);

// Commands that might conflict with natural words in French (e.g. "du", "su", "sort", "vi")
// or are just common English words that we don't want highlighted by mistake (e.g. "find", "cat").
const AMBIGUOUS_COMMANDS = new Set([
  'du', 'su', 'sort', 'find', 'cat', 'head', 'tail', 'echo',
  'vi', 'kill', 'top', 'bg', 'fg', 'jobs'
]);

// English jargon words to highlight ONLY in French mode, because the user 
// explicitly wants English technical words to stand out in the French text.
const FRENCH_MODE_JARGON = new Set([
  'wild card', 'wildcard', 'prompt', 'output', 'input', 'syntax', 'file',
  'directory', 'folder', 'command', 'terminal', 'system', 'kernel', 'shell',
  'string', 'integer', 'boolean', 'array', 'object', 'function', 'variable',
  'boolean', 'argument', 'flag', 'flags', 'path', 'paths', 'error', 'script'
]);

interface HighlightedTextProps {
  text: string;
  className?: string;
  language?: string;
}

export const HighlightedText: React.FC<HighlightedTextProps> = ({ text, className = '', language = 'en' }) => {
  if (!text) return <span className={className}></span>;

  // Split by whitespace and punctuation to preserve layout, mapping to tokens
  // Matches english jargon, flags (-x, --flag) requiring preceding space/start, paths (/home/user), environment vars ($VAR), backticked text (`...`)
  const tokenizerRegex = /(wild card|wildcard|prompt|output|input|syntax|file|directory|folder|command|terminal|system|kernel|shell|string|integer|boolean|array|object|function|variable|argument|flags?|paths?|error|script|`[^`]+`|\$\w+|(?<=\s|^)--?\w+(?:-\w+)*|\/[\w/.-]+|[A-Za-z0-9_]+|[^\w\s`]+|\s+)/gi;
  
  const tokens = text.match(tokenizerRegex) || [text];

  return (
    <span className={className}>
      {tokens.map((token, index) => {
        // Handle explicit backticks (always highlighted regardless of language)
        if (token.startsWith('`') && token.endsWith('`')) {
          return (
            <span key={index} className="font-mono text-accent">
              {token.slice(1, -1)}
            </span>
          );
        }

        const lowerToken = token.toLowerCase();

        // Highlight unambiguous commands always
        if (STRICT_COMMANDS.has(lowerToken)) {
          return (
            <span key={index} className="font-mono text-accent">
              {token}
            </span>
          );
        }

        // Highlight ambiguous commands ONLY in English mode to avoid false positives in French (like "du")
        if (AMBIGUOUS_COMMANDS.has(lowerToken) && language !== 'fr') {
           return (
            <span key={index} className="font-mono text-accent">
              {token}
            </span>
          );
        }

        // Highlight English tech jargon ONLY in French mode
        if (language === 'fr' && FRENCH_MODE_JARGON.has(lowerToken)) {
           return (
            <span key={index} className="font-mono text-accent">
              {token}
            </span>
          );
        }

        // Handle flags (e.g., -la, --help) exactly
        if (token.match(/^--?[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*$/) && token !== '-' && token !== '--') {
          return (
            <span key={index} className="font-mono text-accent">
              {token}
            </span>
          );
        }

        // Handle environment variables ($PATH, $HOME)
        if (token.match(/^\$[A-Z_]+$/)) {
          return (
            <span key={index} className="font-mono text-accent">
              {token}
            </span>
          );
        }

        // Handle simple paths (e.g. /home/user or ./file) that clearly look like paths
        // Must contain alphanumeric and slash. Avoids standalone punctuation.
        if (token.match(/^\/[a-zA-Z0-9_.-]+(\/[a-zA-Z0-9_.-]+)*$/)) {
           return (
            <span key={index} className="font-mono text-accent">
              {token}
            </span>
          );
        }

        return <span key={index}>{token}</span>;
      })}
    </span>
  );
};
