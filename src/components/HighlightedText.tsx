import React from 'react';

const COMMON_COMMANDS = new Set([
    'ls', 'cd', 'pwd', 'mkdir', 'rm', 'rmdir', 'cp', 'mv', 'touch', 'cat', 'less', 'head', 'tail',
    'grep', 'find', 'sort', 'uniq', 'wc', 'echo', 'man', 'chmod', 'chown', 'sudo', 'su',
    'apt', 'yum', 'df', 'du', 'tar', 'gzip', 'gunzip', 'zip', 'unzip', 'ps', 'top', 'kill',
    'bg', 'fg', 'jobs', 'ping', 'ifconfig', 'ip', 'netstat', 'ssh', 'scp', 'wget', 'curl',
    'bash', 'zsh', 'sh', 'clear', 'exit', 'history', 'alias', 'unalias', 'export', 'source',
    'git', 'docker', 'npm', 'node', 'python', 'python3', 'pip', 'nano', 'vim', 'vi', 'emacs',
    'make', 'gcc', 'awk', 'sed', 'cut', 'tr', 'xargs', 'systemctl', 'journalctl'
]);

interface HighlightedTextProps {
    text: string;
    className?: string;
}

export const HighlightedText: React.FC<HighlightedTextProps> = ({ text, className = '' }) => {
    if (!text) return <span className={className}></span>;

    // Split by whitespace and punctuation to preserve layout, mapping to tokens
    // Matches words, flags (-x, --flag), paths (/home/user), environment vars ($VAR), backticked text (`...`)
    const tokenizerRegex = /(`[^`]+`|\$\w+|--?\w+(?:-\w+)*|\/[\w/.-]+|[A-Za-z0-9_]+|[^\w\s`]+|\s+)/g;

    const tokens = text.match(tokenizerRegex) || [text];

    return (
        <span className={className}>
            {tokens.map((token, index) => {
                // Handle explicit backticks
                if (token.startsWith('`') && token.endsWith('`')) {
                    return (
                        <span key={index} className="font-mono text-accent">
                            {token.slice(1, -1)}
                        </span>
                    );
                }

                // Handle commands
                if (COMMON_COMMANDS.has(token)) {
                    return (
                        <span key={index} className="font-mono text-accent">
                            {token}
                        </span>
                    );
                }

                // Handle flags (e.g., -la, --help)
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
                // We avoid highlighting single slashes or generic text
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
