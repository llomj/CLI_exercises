import type { GlossaryItem } from '../constants';

export const CLI_GLOSSARY: GlossaryItem[] = [
  {
    term: "Terminal",
    definition: "A text-based interface for interacting with the operating system by typing commands.",
    levelRange: "1",
    detailedDescription: "The terminal (also called console or command line) is a program that accepts text input and displays text output. It provides direct access to the operating system without a graphical interface. On Linux/macOS, common terminals include GNOME Terminal, iTerm2, and the built-in Terminal app. On Windows, Command Prompt and PowerShell serve similar roles.\n\n1. Simple explanation: A terminal is a window where you type commands instead of clicking icons.\n2. Intermediate explanation: It's the primary way to run shell commands, scripts, and system tools on Unix-like systems.\n3. In-depth explanation: The terminal is a terminal emulator that connects to a shell process; it handles display, input, and often supports features like tabs, scrollback, and color.",
    example: "$ ls -la\n$ pwd\n$ echo hello"
  },
  {
    term: "Shell",
    definition: "The program that interprets commands and runs programs in the terminal.",
    levelRange: "1",
    detailedDescription: "The shell is the command-line interpreter that reads your input, parses it, and executes commands. Common shells include Bash (Bourne Again Shell), Zsh (Z Shell), and sh (POSIX shell). The shell handles variables, globbing, redirection, pipes, and scripting. Your default shell is set in /etc/passwd or via chsh.\n\n1. Simple explanation: The shell is the program that understands and runs the commands you type.\n2. Intermediate explanation: It provides features like variables, command history, tab completion, and scripting.\n3. In-depth explanation: The shell is a user-space program that forks and execs other programs; it implements job control, pipelines, and a rich scripting language.",
    example: "bash\nzsh\nsh script.sh"
  },
  {
    term: "PATH",
    definition: "An environment variable listing directories where the shell searches for executable programs.",
    levelRange: "1",
    detailedDescription: "PATH is a colon-separated (semicolon on Windows) list of directories. When you type a command like ls, the shell searches each directory in PATH, in order, for an executable named ls. If not found, you get 'command not found'. You can view PATH with echo $PATH and add directories with export PATH=$PATH:/new/dir.\n\n1. Simple explanation: PATH tells the shell where to look for programs when you type a command.\n2. Intermediate explanation: Without PATH, you'd need to type the full path (e.g. /usr/bin/ls) for every command.\n3. In-depth explanation: PATH is inherited by child processes; modifying it in .bashrc or .zshrc affects new shells. Security considerations apply when PATH includes the current directory (.).",
    example: "echo $PATH\nexport PATH=$PATH:$HOME/bin"
  },
  {
    term: "Exit Code",
    definition: "A numeric value (0-255) returned by a program to indicate success or failure.",
    levelRange: "1",
    detailedDescription: "When a program exits, it returns an exit code (also called exit status or return code) to the shell. Convention: 0 means success, non-zero means failure. The shell stores the last exit code in $?. You can use it in conditionals: if command; then ... fi. Common codes: 0 (success), 1 (general error), 2 (misuse), 126 (not executable), 127 (not found).\n\n1. Simple explanation: Exit code 0 means the command succeeded; any other number usually means something went wrong.\n2. Intermediate explanation: Scripts and programs use exit codes so other commands can react to success or failure.\n3. In-depth explanation: exit is a shell builtin; the kernel passes the exit status to the parent process. Many tools document their exit codes in man pages.",
    example: "ls /tmp; echo $?\nfalse; echo $?"
  },
  {
    term: "Globbing",
    definition: "Pattern matching that expands wildcards like * and ? into matching filenames.",
    levelRange: "1",
    detailedDescription: "Globbing (or pathname expansion) is when the shell replaces patterns with matching filenames before running a command. * matches any string (including empty); ? matches any single character; [abc] matches one of a, b, or c. The expansion happens in the shell, not in the program. To prevent expansion, quote the pattern.\n\n1. Simple explanation: * and ? are wildcards that match multiple files at once.\n2. Intermediate explanation: ls *.txt expands to all .txt files in the current directory before ls runs.\n3. In-depth explanation: Globbing is done by the shell; if no files match, the pattern may be passed literally (bash) or cause an error (zsh with nomatch).",
    example: "ls *.txt\nrm temp_?\ncp [abc]*.log backup/"
  },
  {
    term: "Redirection",
    definition: "Sending command input/output to or from files instead of the terminal.",
    levelRange: "1",
    detailedDescription: "Redirection changes where stdin (0), stdout (1), and stderr (2) go. > redirects stdout to a file (overwrite); >> appends. < redirects stdin from a file. 2> redirects stderr. 2>&1 sends stderr to wherever stdout goes. &> (bash) redirects both. The shell sets up file descriptors before exec'ing the command.\n\n1. Simple explanation: > saves output to a file; < reads input from a file.\n2. Intermediate explanation: You can redirect stdout, stderr, and stdin separately or together.\n3. In-depth explanation: Redirection uses dup2() to reassign file descriptors. Order matters: 2>&1 >file redirects stderr to the old stdout, then stdout to file, so stderr may still go to the terminal.",
    example: "ls > output.txt\ncat < input.txt\ncmd 2>&1 | tee log.txt"
  },
  {
    term: "Pipe",
    definition: "Connecting the output of one command to the input of another using |.",
    levelRange: "1",
    detailedDescription: "A pipe (|) connects the stdout of the left command to the stdin of the right command. Both run concurrently; the right command reads as the left writes. Pipes enable composition: ls | grep txt | wc -l. Only stdout is piped; stderr goes to the terminal unless redirected. Broken pipe (SIGPIPE) occurs if the reader exits early.\n\n1. Simple explanation: | sends the output of one command as input to the next.\n2. Intermediate explanation: Pipes let you chain commands: find files, filter them, count them.\n3. In-depth explanation: The shell creates a pipe with pipe(), forks, and connects the file descriptors. Data flows left-to-right; backpressure is handled by blocking the writer.",
    example: "ls -l | grep '\.txt$'\ncat file | sort | uniq"
  },
  {
    term: "Alias",
    definition: "A shortcut name for a command or command string.",
    levelRange: "1",
    detailedDescription: "An alias defines a short name that expands to a longer command. Example: alias ll='ls -la'. When you type ll, the shell replaces it with ls -la. Aliases are typically defined in .bashrc or .zshrc. They don't persist across sessions unless saved. Use alias to list them, unalias to remove. Aliases don't accept arguments in the same way functions do.\n\n1. Simple explanation: An alias is a shortcut—type ll instead of ls -la.\n2. Intermediate explanation: Define aliases in your shell config file so they're available in every new terminal.\n3. In-depth explanation: Alias expansion happens before other parsing; they're not suitable for complex logic—use functions instead.",
    example: "alias ll='ls -la'\nalias gs='git status'"
  },
  {
    term: "Environment Variable",
    definition: "A key-value pair stored in the process environment, visible to the process and its children.",
    levelRange: "1",
    detailedDescription: "Environment variables (e.g. PATH, HOME, USER) are inherited by child processes. Set with export VAR=value (bash/zsh). View with printenv or echo $VAR. They're used for configuration: EDITOR, LANG, etc. Child processes can't change the parent's environment. Variables set in the shell persist until the shell exits unless saved in .bashrc.\n\n1. Simple explanation: Environment variables store settings that programs can read, like your home directory.\n2. Intermediate explanation: export makes a variable available to programs you run from the shell.\n3. In-depth explanation: The environment is passed as the third argument to execve(); it's a null-terminated array of KEY=value strings.",
    example: "export EDITOR=vim\necho $HOME"
  },
  {
    term: "Absolute Path",
    definition: "A path that starts from the root directory (/) and uniquely identifies a file.",
    levelRange: "2",
    detailedDescription: "An absolute path begins with / and specifies the full location from the filesystem root. Examples: /home/user/file.txt, /usr/bin/ls. It's the same regardless of the current working directory. Use pwd to see your current directory; absolute paths don't depend on it. Required when referencing files from scripts or configs that may run from different directories.\n\n1. Simple explanation: An absolute path starts with / and gives the full address of a file.\n2. Intermediate explanation: /home/user/docs/report.txt works from anywhere; docs/report.txt only works if you're in /home/user.\n3. In-depth explanation: The kernel resolves paths starting from /; symlinks in the path are followed (unless using realpath or similar).",
    example: "/home/user/file.txt\n/usr/local/bin/myapp"
  },
  {
    term: "Relative Path",
    definition: "A path relative to the current working directory, not starting with /.",
    levelRange: "2",
    detailedDescription: "A relative path doesn't start with /; it's interpreted relative to the current directory (.). ./file means file in the current dir. ../parent means the parent directory. ../sibling/file goes up one level, then into sibling. Relative paths change meaning when you cd. Use them for portability within a project.\n\n1. Simple explanation: A relative path describes where a file is compared to where you are now.\n2. Intermediate explanation: ./script.sh runs a script in the current directory; ../ means the folder above.\n3. In-depth explanation: The shell and kernel resolve . and .. during path resolution; .. doesn't cross filesystem boundaries in some edge cases.",
    example: "./script.sh\n../config/settings.conf"
  },
  {
    term: "File Permissions",
    definition: "Read (r), write (w), and execute (x) bits that control access for user, group, and others.",
    levelRange: "2",
    detailedDescription: "Unix files have three permission sets: owner (user), group, and others. Each has r (read), w (write), x (execute). For files: r=read content, w=modify, x=run. For directories: r=list, w=create/delete, x=enter (cd). View with ls -l; change with chmod. Octal: 755 = rwxr-xr-x. Symbolic: chmod u+x file.\n\n1. Simple explanation: Permissions control who can read, change, or run a file.\n2. Intermediate explanation: chmod 755 makes a file executable for everyone; chmod 600 makes it private to you.\n3. In-depth explanation: Permissions are stored in the inode; the kernel checks them on every access. SUID, SGID, and sticky bits extend the model.",
    example: "ls -l file.txt\nchmod 755 script.sh\nchmod u+x file"
  },
  {
    term: "grep",
    definition: "A command that searches text for lines matching a pattern.",
    levelRange: "3",
    detailedDescription: "grep (Global Regular Expression Print) searches input (files or stdin) for lines matching a pattern. By default it prints matching lines. -i ignores case; -r recurses into directories; -n shows line numbers; -v inverts (non-matching). Patterns are basic regex by default; -E for extended regex (egrep). Exit code 0 if match found, 1 if not.\n\n1. Simple explanation: grep finds lines containing a word or pattern in a file.\n2. Intermediate explanation: grep -r 'error' . searches all files in the current directory recursively.\n3. In-depth explanation: grep compiles the pattern and scans line-by-line; it's optimized for speed. Use -F for literal strings when you don't need regex.",
    example: "grep 'error' log.txt\ngrep -r 'TODO' src/\ngrep -i 'warning' *.log"
  },
  {
    term: "Pipe (|)",
    definition: "The | operator that connects stdout of one command to stdin of another.",
    levelRange: "3",
    detailedDescription: "See 'Pipe' in Level 1 for full definition. Pipes are fundamental to the Unix philosophy: small tools that do one thing well, composed with pipes. Common patterns: ps aux | grep python, cat file | sort | uniq, find . -name '*.txt' | xargs grep pattern.\n\n1. Simple explanation: | chains commands so the output of one becomes the input of the next.\n2. Intermediate explanation: Pipes enable powerful one-liners by combining simple commands.\n3. In-depth explanation: The shell creates a pipe, forks, and connects file descriptors; both processes run concurrently.",
    example: "ps aux | grep nginx\ncat access.log | cut -d' ' -f1 | sort | uniq -c"
  },
  {
    term: "Shebang",
    definition: "The first line #! of a script that specifies the interpreter to run it.",
    levelRange: "1",
    detailedDescription: "The shebang (#!/bin/bash or #!/usr/bin/env python3) is the first line of an executable script. The kernel uses it to choose the interpreter. #! must be the first two characters. /usr/bin/env is often used for portability (e.g. #!/usr/bin/env bash) so the script finds the interpreter in PATH. The rest of the line is passed to the interpreter.\n\n1. Simple explanation: #!/bin/bash tells the system to run the script with bash.\n2. Intermediate explanation: Use #!/usr/bin/env bash to find bash in PATH, which helps on different systems.\n3. In-depth explanation: The kernel reads the shebang, execs the interpreter with the script path as an argument. Max length limits apply on some systems.",
    example: "#!/bin/bash\necho 'Hello'\n\n#!/usr/bin/env python3\nprint('Hi')"
  },
  {
    term: "cd",
    definition: "Change directory—navigates to a different folder.",
    levelRange: "1",
    detailedDescription: "cd (change directory) sets the shell's current working directory. cd /path goes to an absolute path. cd relative/path goes relative to current dir. cd .. goes up one level. cd - goes to the previous directory. cd with no args goes to $HOME. It's a shell builtin because it must change the shell's own working directory.\n\n1. Simple explanation: cd moves you into a different folder.\n2. Intermediate explanation: cd .. goes up; cd - returns to where you were before.\n3. In-depth explanation: Only the shell's process changes directory; child processes inherit it. There's no cd program—it must be a builtin.",
    example: "cd /home/user\ndir\ncd ..\ncd -"
  },
  {
    term: "ls",
    definition: "List directory contents—shows files and folders.",
    levelRange: "1",
    detailedDescription: "ls lists files and directories. -l long format (permissions, owner, size, date); -a show hidden (dotfiles); -la both; -h human-readable sizes; -t sort by time; -r reverse order. By default, ls sorts alphabetically. On many systems, ls is aliased to ls --color for colored output. Exit code 0 normally, 2 if directory doesn't exist.\n\n1. Simple explanation: ls shows what's in the current folder.\n2. Intermediate explanation: ls -la shows everything including hidden files, with details.\n3. In-depth explanation: ls reads directory entries via getdents(); it may stat() each file for -l. Large directories can be slow.",
    example: "ls\nls -la\nls -lht"
  },
  {
    term: "pwd",
    definition: "Print working directory—shows the current folder path.",
    levelRange: "1",
    detailedDescription: "pwd (print working directory) outputs the absolute path of the current directory. It's a shell builtin and also a separate program (/bin/pwd). The builtin tracks the shell's logical directory; the external command may resolve symlinks with -P. Useful in scripts to know where you are. Simple and fast.\n\n1. Simple explanation: pwd tells you which folder you're in.\n2. Intermediate explanation: Use pwd in scripts to get the current directory path.\n3. In-depth explanation: PWD is often kept in the shell environment; pwd just prints it. With -P, the external pwd uses getcwd() which resolves symlinks.",
    example: "pwd\n# Output: /home/user/projects"
  },
  {
    term: "cat",
    definition: "Concatenate and display file contents.",
    levelRange: "3",
    detailedDescription: "cat reads files and writes them to stdout. cat file1 file2 concatenates multiple files. With no args, cat reads stdin (so it echoes what you type until Ctrl+D). Often used to view small files or pipe content: cat file | grep x. For large files, use less or more. -n numbers lines. -A shows non-printing chars.\n\n1. Simple explanation: cat shows the contents of a file.\n2. Intermediate explanation: cat file1 file2 combines and displays multiple files.\n3. In-depth explanation: cat is simple and fast; for interactive viewing, less is better. cat is also used to create files: cat > file, then type, Ctrl+D.",
    example: "cat readme.txt\ncat file1.txt file2.txt\ncat file | head -20"
  },
  {
    term: "mkdir",
    definition: "Create a new directory.",
    levelRange: "1",
    detailedDescription: "mkdir creates directories. mkdir dirname creates one directory. mkdir -p parent/child/grandchild creates the full path, including parent directories. -p doesn't error if the directory already exists. Useful in scripts for ensuring a path exists. Permissions follow umask; use -m to set explicitly.\n\n1. Simple explanation: mkdir makes a new folder.\n2. Intermediate explanation: mkdir -p a/b/c creates a, then a/b, then a/b/c as needed.\n3. In-depth explanation: mkdir calls mkdir() syscall; -p implements a loop to create each path component. Fails if a component exists and isn't a directory.",
    example: "mkdir mydir\nmkdir -p project/src/components"
  },
  {
    term: "rm",
    definition: "Remove files or directories.",
    levelRange: "1",
    detailedDescription: "rm deletes files. -r (recursive) deletes directories and their contents. -f (force) ignores missing files and doesn't prompt. -rf is common but dangerous—double-check the path. rm doesn't move to trash; deletion is permanent. Use rm -i for interactive confirmation. Never run rm -rf / or rm -rf /*.\n\n1. Simple explanation: rm deletes files. rm -r deletes folders and everything inside.\n2. Intermediate explanation: rm -rf is powerful and irreversible—use with extreme care.\n3. In-depth explanation: rm unlinks files; if the link count reaches 0, the inode is freed. Open files may persist until closed. -rf can be catastrophic if the path is wrong.",
    example: "rm oldfile.txt\nrm -r olddir\nrm -rf temp/"
  },
  {
    term: "cp",
    definition: "Copy files or directories.",
    levelRange: "1",
    detailedDescription: "cp copies files. cp src dst copies a file. cp -r src dst copies a directory recursively. -i prompts before overwrite. -p preserves attributes (timestamps, permissions). Multiple sources can copy to a directory: cp a b c dest/. If dest exists and is a file, it's overwritten; if a directory, files are copied into it.\n\n1. Simple explanation: cp makes a copy of a file or folder.\n2. Intermediate explanation: cp -r copies a directory and all its contents.\n3. In-depth explanation: cp reads and writes; it doesn't clone inodes. For large trees, rsync may be faster. Preserving hardlinks requires -a or -l.",
    example: "cp file.txt backup.txt\ncp -r src/ backup/"
  },
  {
    term: "mv",
    definition: "Move or rename files and directories.",
    levelRange: "1",
    detailedDescription: "mv moves or renames files. Within the same filesystem, mv is typically a rename (same inode); across filesystems, it copies then deletes. mv old new renames. mv file dir/ moves into the directory. -i prompts before overwrite. mv doesn't need -r for directories—it moves the whole tree.\n\n1. Simple explanation: mv moves files or renames them.\n2. Intermediate explanation: mv folder/ dest/ moves the entire folder into dest.\n3. In-depth explanation: Same filesystem: rename() syscall, fast. Different filesystem: copy + unlink. Cross-device move can be slow for large directories.",
    example: "mv oldname.txt newname.txt\nmv file.txt ~/Documents/"
  },
  {
    term: "chmod",
    definition: "Change file permissions (read, write, execute).",
    levelRange: "2",
    detailedDescription: "chmod changes the permission bits of files. Octal: chmod 755 file (rwxr-xr-x). Symbolic: chmod u+x (add execute for user), g-w (remove write for group), o=r (others get read only). u=user, g=group, o=others, a=all. + add, - remove, = set. -R recurses into directories. Only the owner or root can change permissions.\n\n1. Simple explanation: chmod changes who can read, write, or run a file.\n2. Intermediate explanation: chmod 755 makes a script executable for everyone; 600 makes it private.\n3. In-depth explanation: chmod modifies the mode bits in the inode. SUID (4000), SGID (2000), sticky (1000) can also be set. umask affects new files, not chmod.",
    example: "chmod 755 script.sh\nchmod u+x file\nchmod -R 644 docs/"
  },
  {
    term: "Inode",
    definition: "A data structure that stores a file's metadata (permissions, size, pointers to data blocks).",
    levelRange: "2",
    detailedDescription: "An inode (index node) is a filesystem structure holding file metadata: permissions, owner, size, timestamps, and pointers to data blocks. Each file has an inode; the filename is stored in the directory (which maps names to inode numbers). ls -i shows inode numbers. Hard links share the same inode. When all links are removed, the inode is freed.\n\n1. Simple explanation: An inode is the file's 'record' that stores its info and where its data lives.\n2. Intermediate explanation: The filename is in the directory; the directory points to an inode number. Multiple names can point to the same inode (hard links).\n3. In-depth explanation: Inodes are allocated when files are created; running out of inodes can prevent new files even if disk space remains. ext4 and similar use inodes.",
    example: "ls -i file.txt\nstat file.txt"
  },
  {
    term: "Symbolic Link",
    definition: "A special file that points to another file or directory by path (like a shortcut).",
    levelRange: "2",
    detailedDescription: "A symbolic link (symlink) is a file containing a path to another file. Created with ln -s target linkname. Unlike hard links, symlinks can point to directories and across filesystems. If the target is moved or deleted, the symlink breaks (dangling link). ls -l shows the target. readlink prints the target path. Symlinks can be relative or absolute.\n\n1. Simple explanation: A symlink is a shortcut—a file that points to another file.\n2. Intermediate explanation: ln -s /path/to/target mylink creates a symlink. If you delete the target, the link breaks.\n3. In-depth explanation: Symlinks have their own inode; the inode stores the target path. The kernel follows symlinks during path resolution. Circular symlinks can cause issues.",
    example: "ln -s /usr/bin/python3 py\nln -s ../config/settings.conf ."
  },
];
