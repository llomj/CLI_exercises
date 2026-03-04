# CLI Exercises Learn — Terminal & Shell Glossary

Welcome to the definitive guide for terminal and CLI command learning. This glossary covers core concepts from beginner to expert.

## Level 1: Terminal & Shell Foundations

- **Terminal**: A text-based interface for interacting with the operating system by typing commands. It provides direct access to the OS without a graphical interface.
- **Shell**: The program that interprets commands and runs programs in the terminal. Common shells: Bash, Zsh, sh.
- **PATH**: Environment variable listing directories where the shell searches for executables. Colon-separated on Unix.
- **Exit Code**: Numeric value (0-255) returned by a program. 0 = success, non-zero = failure. Check with `echo $?`.
- **Globbing**: Pattern matching with wildcards (*, ?, []) that expands to matching filenames.
- **Redirection**: Sending stdin/stdout/stderr to or from files. `>`, `>>`, `<`, `2>`, `2>&1`.
- **Pipe (|)**: Connects stdout of one command to stdin of another. Enables command composition.
- **Alias**: Shortcut name for a command. `alias ll='ls -la'`.
- **Environment Variable**: Key-value pair in process environment. `export VAR=value`, `echo $VAR`.
- **Shebang**: First line `#!/bin/bash` of a script specifying the interpreter.
- **cd**: Change directory. `cd /path`, `cd ..`, `cd -`.
- **ls**: List directory contents. `ls -la` for long format with hidden files.
- **pwd**: Print working directory—shows current folder path.
- **mkdir**: Create directory. `mkdir -p` creates parent directories.
- **rm**: Remove files. `rm -r` for directories. `rm -rf` is dangerous.
- **cp**: Copy files. `cp -r` for directories.
- **mv**: Move or rename files and directories.

## Level 2: Filesystem & Storage

- **Absolute Path**: Path starting from root (/). Same from anywhere. Example: `/home/user/file.txt`.
- **Relative Path**: Path relative to current directory. `./file`, `../parent`.
- **File Permissions**: r (read), w (write), x (execute) for user, group, others. View with `ls -l`, change with `chmod`.
- **chmod**: Change permissions. Octal: `chmod 755 file`. Symbolic: `chmod u+x file`.
- **Inode**: Data structure storing file metadata (permissions, size, block pointers). `ls -i` shows inode numbers.
- **Symbolic Link**: File pointing to another by path. `ln -s target linkname`. Can point to directories.

## Level 3: File & Text Processing

- **grep**: Search text for lines matching a pattern. `grep -r 'pattern' .` for recursive search.
- **cat**: Concatenate and display files. `cat file1 file2`.
- **Pipe (|)**: Chain commands. `ls | grep txt | wc -l`.

## Expanding

This glossary will expand as more levels and concepts are added. See `src/data/cliGlossary.ts` for the full app glossary with detailed descriptions.
