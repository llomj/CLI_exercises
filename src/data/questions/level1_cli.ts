// LEVEL 1: PLANKTON — Terminal & Shell Foundations (CLI)
// 97 Beginner + 100 Intermediate + 103 Expert. All questions unique with meaningful options.

import { level1Intermediate } from './level1_intermediate_cli';
import { level1Expert } from './level1_expert_cli';

const beginner = [
  (_i: number) => ({
    q: "What does the `pwd` command do?",
    o: ["Print working directory", "Print file contents", "Change directory", "List files"],
    c: 0,
    e: "pwd shows the full path of your current directory.",
    de: "pwd (print working directory) outputs the absolute path of the current directory. It's essential for knowing where you are in the filesystem when writing scripts or navigating.",
    deBeginner: "pwd prints the full path of the folder you're in. Use it to see where you are.",
    deExpert: "pwd is a builtin that calls getcwd(2) and prints the path. No arguments. Use pwd -P for physical path (resolves symlinks). Essential in scripts for resolving relative paths."
  }),
  (_i: number) => ({
    q: "What does `ls` display?",
    o: ["Directory contents", "File contents", "Current path", "Environment variables"],
    c: 0,
    e: "ls lists files and folders in the current directory.",
    de: "ls lists directory contents. Use -l for long format, -a for hidden files, -la for both.",
    deBeginner: "ls lists the files and folders in the current directory. Add -l for details, -a for hidden files.",
    deExpert: "ls reads directory entries (readdir). -l uses stat for each; -a includes dotfiles; -i inodes. Don't parse ls in scripts; use globs or find. Sort order: default alphabetical."
  }),
  (_i: number) => ({
    q: "What does `cd ..` do?",
    o: ["Go up one directory", "Go to home", "Create a directory", "Delete current directory"],
    c: 0,
    e: "cd .. moves to the parent directory.",
    de: ".. means parent directory. cd .. changes to the folder above the current one.",
    deBeginner: "cd .. moves you up one folder to the parent directory.",
    deExpert: ".. is the parent directory entry. cd .. updates cwd via chdir(2). Builtin; no separate process. At root, .. typically resolves to root."
  }),
  (_i: number) => ({
    q: "What is the conventional exit code for success?",
    o: ["0", "1", "-1", "255"],
    c: 0,
    e: "Exit code 0 means the command succeeded.",
    de: "By convention, 0 indicates success; any non-zero value indicates failure. Check with echo $?.",
    deBeginner: "Exit code 0 means success. Any other number usually means something went wrong. Check with echo $?.",
    deExpert: "Exit status 0 = success (universal). 1–255 = failure. wait(2) returns it; $? in shell. Use in conditionals, set -e, and chaining (&&, ||)."
  }),
  (_i: number) => ({
    q: "What does `mkdir mydir` do?",
    o: ["Creates a directory named mydir", "Removes mydir", "Moves into mydir", "Lists mydir"],
    c: 0,
    e: "mkdir creates a new directory.",
    de: "mkdir creates directories. Use mkdir -p to create parent directories as needed.",
    deBeginner: "mkdir mydir creates a new folder named mydir. Use -p to create parent folders too.",
    deExpert: "mkdir invokes mkdir(2). mkdir -p creates parents and does not error if path exists. Permissions follow umask. Essential in scripts for idempotent setup."
  }),
  (_i: number) => ({
    q: "What does the `*` wildcard match in globbing?",
    o: ["Any string of characters", "A single character", "Only digits", "Only letters"],
    c: 0,
    e: "* matches any sequence of characters (including none).",
    de: "Globbing: * matches any string; ? matches one character; [abc] matches one of a, b, or c.",
    deBeginner: "* matches any string of characters (including nothing). So *.txt matches all names ending in .txt.",
    deExpert: "Glob * matches zero or more chars. Shell expands before exec. Quote to prevent. nullglob, failglob change no-match behavior. fnmatch(3)."
  }),
  (_i: number) => ({
    q: "What does `ls -l` add to the output?",
    o: ["Long format with permissions and details", "Only hidden files", "Recursive listing", "Reverse order"],
    c: 0,
    e: "-l shows long format: permissions, owner, size, date.",
    de: "ls -l shows permissions (rwx), link count, owner, group, size, and modification time.",
    deBeginner: "ls -l shows long format: permissions, owner, size, and date for each file.",
    deExpert: "ls -l: one line per file with mode, nlink, owner, group, size, mtime, name. Stat(2) data. -h for human-readable size. Parsing fragile; prefer readdir/stat in scripts."
  }),
  (_i: number) => ({
    q: "What does `echo $HOME` display?",
    o: ["Your home directory path", "Current directory", "The word HOME", "Environment count"],
    c: 0,
    e: "HOME is an environment variable containing your home directory path.",
    de: "Environment variables like HOME, PATH, and USER are set by the shell and inherited by child processes.",
    deBeginner: "echo $HOME prints your home directory path. HOME is set by the system when you log in.",
    deExpert: "$HOME is parameter expansion of the HOME env var (set by login). getpwuid(3). Used by many tools. Read-only in practice; don't unset."
  }),
  (_i: number) => ({
    q: "What does `ls -a` show that normal `ls` hides?",
    o: ["Hidden files (dotfiles)", "Large files only", "Executable files only", "Recent files only"],
    c: 0,
    e: "-a shows all files including hidden ones (names starting with .).",
    de: "Files starting with . are hidden by default. ls -a reveals them.",
    deBeginner: "ls -a shows hidden files too—those whose names start with a dot (e.g. .bashrc).",
    deExpert: "-a includes entries whose name starts with . (dotfiles). Default ls omits them. Config files often in $HOME as dotfiles."
  }),
  (_i: number) => ({
    q: "What does `cd` with no arguments do?",
    o: ["Go to home directory", "Stay in current directory", "Show current path", "List directories"],
    c: 0,
    e: "cd with no args changes to $HOME.",
    de: "cd alone is equivalent to cd $HOME.",
    deBeginner: "cd with nothing after it takes you to your home directory.",
    deExpert: "cd with no args: cd $HOME. Builtin. Login default cwd is $HOME. Fails if HOME unset."
  }),
  (_i: number) => ({
    q: "What does `rm file.txt` do?",
    o: ["Deletes file.txt", "Renames file.txt", "Moves file.txt", "Copies file.txt"],
    c: 0,
    e: "rm removes (deletes) files. Deletion is permanent.",
    de: "rm unlinks the file. Use rm -r for directories. There is no undo.",
    deBeginner: "rm file.txt deletes the file. It's permanent—no recycle bin. Use rm -r for folders.",
    deExpert: "rm calls unlink(2). rm -r recursively removes dirs. No trash. -f forces. Never rm -rf /. Data may persist until overwritten."
  }),
  (_i: number) => ({
    q: "What does `cp src.txt dst.txt` do?",
    o: ["Copies src.txt to dst.txt", "Moves src.txt to dst.txt", "Compares the two files", "Deletes both"],
    c: 0,
    e: "cp copies the source file to the destination.",
    de: "cp creates a new file. Use cp -r for directories.",
    deBeginner: "cp src.txt dst.txt makes a copy: dst.txt has the same content as src.txt. Use cp -r for folders.",
    deExpert: "cp reads source, writes dest. New inode. cp -r for directories. Overwrites by default. -a preserves metadata. rsync for large or remote."
  }),
  (_i: number) => ({
    q: "What does `mv old.txt new.txt` do when new.txt does not exist?",
    o: ["Renames old.txt to new.txt", "Copies old.txt to new.txt", "Fails with error", "Creates a link"],
    c: 0,
    e: "mv renames the file when the destination doesn't exist.",
    de: "mv can rename or move. Same filesystem: fast rename. Different filesystem: copy + delete.",
    deBeginner: "mv old.txt new.txt renames the file to new.txt when new.txt doesn't exist. Same folder = rename.",
    deExpert: "mv is rename(2). Same FS: atomic directory update. Cross-FS: copy then unlink. Overwrites dest if it exists. No separate 'rename' command."
  }),
  (_i: number) => ({
    q: "What does `2>&1` in a command do?",
    o: ["Redirects stderr to stdout", "Redirects stdout to stderr", "Appends to file", "Creates a pipe"],
    c: 0,
    e: "2>&1 sends stderr (2) to wherever stdout (1) goes.",
    de: "File descriptors: 0=stdin, 1=stdout, 2=stderr. 2>&1 merges stderr into stdout.",
    deBeginner: "2>&1 sends error output (stderr) to the same place as normal output (stdout). So you can capture both together.",
    deExpert: "2>&1 duplicates fd 2 to fd 1. Order matters: 2>file 1>&2 vs 1>&2 2>file differ. Use when capturing all output or piping errors with stdout."
  }),
  (_i: number) => ({
    q: "What does the `|` (pipe) operator do?",
    o: ["Sends stdout of left command to stdin of right", "Runs commands in parallel", "Redirects to file", "Creates a background job"],
    c: 0,
    e: "| connects the output of one command to the input of the next.",
    de: "Pipes enable composition: ls | grep txt | wc -l.",
    deBeginner: "| connects two commands: the first command's output becomes the second's input. Example: ls | grep txt.",
    deExpert: "Pipe: kernel pipe(2). Left stdout → right stdin. Both run concurrently. Exit status = last command. PIPESTATUS in bash. Avoid useless cat."
  }),
  (_i: number) => ({
    q: "What is the first line `#!/bin/bash` called?",
    o: ["Shebang", "Comment", "Variable", "Alias"],
    c: 0,
    e: "The shebang tells the system which interpreter to use for the script.",
    de: "#!/bin/bash or #!/usr/bin/env bash specifies the interpreter. Must be the first line.",
    deBeginner: "#!/bin/bash is the shebang—it tells the system to run the script with bash. It must be the first line.",
    deExpert: "Shebang: #!interpreter [arg]. Kernel reads it on exec(2); interpreter gets script path as argv[0]. #!/usr/bin/env bash for portability. Max length OS-dependent."
  }),
  (_i: number) => ({
    q: "What does `alias ll='ls -la'` do?",
    o: ["Creates shortcut ll for ls -la", "Runs ls -la immediately", "Exports a variable", "Defines a function"],
    c: 0,
    e: "alias creates a shortcut. Typing ll will run ls -la.",
    de: "Aliases are expanded by the shell before the command runs. Save in .bashrc or .zshrc.",
    deBeginner: "alias ll='ls -la' makes ll a shortcut for ls -la. Put it in .bashrc to keep it.",
    deExpert: "alias: name → string replacement at parse time. No argument handling. Use functions for args. Not exported to subshells. unalias to remove."
  }),
  (_i: number) => ({
    q: "What does `cd -` do?",
    o: ["Go to previous directory", "Go to home", "Go to root", "Stay in place"],
    c: 0,
    e: "cd - switches to the directory you were in before the last cd.",
    de: "OLDPWD is set by cd. cd - is equivalent to cd $OLDPWD.",
    deBeginner: "cd - takes you back to the directory you were in before the last cd.",
    deExpert: "cd - uses $OLDPWD. Shell sets OLDPWD on each cd. Toggle between two dirs. Equivalent to cd $OLDPWD."
  }),
  (_i: number) => ({
    q: "What does `ls *.txt` expand to before running?",
    o: ["All .txt files in current directory", "The literal *.txt", "Only the first .txt file", "Nothing"],
    c: 0,
    e: "The shell expands * to matching filenames (globbing).",
    de: "Globbing happens in the shell. * matches any string. Quote to prevent expansion.",
    deBeginner: "The shell replaces *.txt with the list of all .txt files in the current directory before running ls.",
    deExpert: "Glob expansion before exec. ls sees N arguments (one per match). No match: literal * passed unless nullglob. Quote '*' to suppress."
  }),
  (_i: number) => ({
    q: "What does `>` do in `ls > output.txt`?",
    o: ["Redirects stdout to output.txt (overwrite)", "Appends to output.txt", "Reads from output.txt", "Pipes to output.txt"],
    c: 0,
    e: "> redirects stdout to a file, overwriting it.",
    de: "> truncates and writes. >> appends. < reads from file.",
    deBeginner: "> sends the command's output to a file and overwrites it. Use >> to add to the end instead.",
    deExpert: "> opens file with O_WRONLY|O_CREAT|O_TRUNC. Fd 1 redirected. noclobber prevents overwrite. Order of redirections matters."
  }),
  (_i: number) => ({
    q: "What is the shell?",
    o: ["Program that interprets and runs commands", "The terminal window", "The operating system", "A text editor"],
    c: 0,
    e: "The shell reads your input, parses it, and executes commands.",
    de: "Bash, Zsh, and sh are shells. They handle variables, globbing, pipes, and scripting.",
    deBeginner: "The shell is the program that reads your commands, runs them, and shows output. Bash and Zsh are shells.",
    deExpert: "Shell: command-line interpreter. Parses input, expands variables/globs, runs builtins or execs. bash, zsh, sh. Handles job control, redirection, scripting."
  }),
  (_i: number) => ({
    q: "What is PATH used for?",
    o: ["List of directories to search for executables", "Current directory path", "File permissions", "Command history"],
    c: 0,
    e: "PATH tells the shell where to find programs when you type a command.",
    de: "When you type ls, the shell searches each directory in PATH for an executable named ls.",
    deBeginner: "PATH is a list of folders. When you type a command, the shell looks in those folders for a program with that name.",
    deExpert: "PATH: colon-separated dirs. Shell searches in order for executable with command name. which/type show resolution. Modifying PATH in .bashrc. Empty component or . is security risk."
  }),
  (_i: number) => ({
    q: "What does `cat file.txt` do?",
    o: ["Displays file contents", "Creates file.txt", "Copies file.txt", "Deletes file.txt"],
    c: 0,
    e: "cat reads files and writes them to stdout.",
    de: "cat concatenates files. With one file, it just displays it. Use less for large files.",
    deBeginner: "cat file.txt prints the file's contents to the screen. For long files use less so you can scroll.",
    deExpert: "cat concatenates files to stdout. One file = display. Don't pipe cat file | cmd; use cmd < file. No pagination; use less for large files."
  }),
  (_i: number) => ({
    q: "What does `rm -r dirname` do?",
    o: ["Removes directory and its contents recursively", "Removes only empty directories", "Renames the directory", "Creates the directory"],
    c: 0,
    e: "-r makes rm recursive; it deletes the directory and everything inside.",
    de: "rm -r is dangerous. rm -rf forces without prompt. Never run rm -rf /.",
    deBeginner: "rm -r dirname deletes the folder and everything inside it. Very careful—no undo. Never use rm -rf /.",
    deExpert: "rm -r: recursive unlink/rmdir. -f suppresses prompts. Destructive; double-check path. rm -rf / destroys system. Prefer mv to trash when possible."
  }),
  (_i: number) => ({
    q: "What does `mkdir -p a/b/c` do?",
    o: ["Creates a, a/b, and a/b/c as needed", "Creates only c", "Fails if a exists", "Creates with permissions 755"],
    c: 0,
    e: "-p creates parent directories and does not error if they exist.",
    de: "mkdir -p is idempotent for existing directories. Essential for scripts.",
    deBeginner: "mkdir -p a/b/c creates a, then a/b, then a/b/c. It won't error if they already exist. Great for scripts.",
    deExpert: "mkdir -p: create parents; no error if path exists. Idempotent. Single syscall per missing component on many systems. Standard for script setup."
  }),
  (_i: number) => ({
    q: "What does `?` match in shell globbing?",
    o: ["Exactly one character", "Any string", "Zero or one character", "Only digits"],
    c: 0,
    e: "? matches any single character.",
    de: "file?.txt matches file1.txt, fileA.txt, etc. * matches any string including empty.",
    deBeginner: "? matches exactly one character. file?.txt matches file1.txt but not file10.txt.",
    deExpert: "? matches one character. * matches any string. [abc] one of set. No regex; glob only. set -f disables globbing."
  }),
  (_i: number) => ({
    q: "What does `echo $?` show after a command?",
    o: ["Exit code of the last command", "Process ID", "Number of arguments", "Current directory"],
    c: 0,
    e: "$? holds the exit status of the last executed command.",
    de: "0 = success, non-zero = failure. Essential for scripting and conditionals.",
    deBeginner: "echo $? prints the exit code of the last command. 0 = success; anything else = failure.",
    deExpert: "$? is the exit status of the last foreground command. Overwritten by each command. Use immediately or save to var. Critical for set -e and conditionals."
  }),
  (_i: number) => ({
    q: "What does `>>` do compared to `>`?",
    o: ["Appends instead of overwriting", "Reads instead of writes", "Redirects stderr", "Runs in background"],
    c: 0,
    e: ">> appends to the file; > overwrites it.",
    de: "Both redirect stdout. > truncates; >> appends. Use >> for log files.",
    deBeginner: ">> adds the output to the end of the file; > replaces the whole file. Use >> for logs.",
    deExpert: ">> opens with O_APPEND. Writes go to end. Atomic on local FS. Use for logs. > is O_TRUNC and overwrites."
  }),
  (_i: number) => ({
    q: "What is the terminal?",
    o: ["Text interface for running commands", "A type of computer", "A programming language", "A file format"],
    c: 0,
    e: "The terminal is a window where you type commands instead of using a GUI.",
    de: "Terminal emulators (GNOME Terminal, iTerm2) provide the interface; the shell runs inside.",
    deBeginner: "The terminal is the window where you type commands and see text output. A terminal emulator runs the shell inside it.",
    deExpert: "Terminal: emulator (e.g. GNOME Terminal, iTerm2) providing PTY. Shell runs in PTY. No GUI; line-oriented. SSH sessions are remote terminals."
  }),
  (_i: number) => ({
    q: "What does `~` expand to?",
    o: ["Home directory path", "Current directory", "Root directory", "Temporary directory"],
    c: 0,
    e: "~ is shorthand for your home directory ($HOME).",
    de: "cd ~ or cd ~/docs goes to your home. ~user goes to user's home.",
    deBeginner: "~ is short for your home directory. cd ~ or cd ~/Documents goes there. ~otheruser means that user's home.",
    deExpert: "Tilde expansion: ~ → $HOME, ~user → getpwnam(user). Done by shell. No expansion in single quotes. Used in paths and in cd."
  }),
  (_i: number) => ({
    q: "What does `chmod 755 script.sh` do?",
    o: ["Makes script executable: rwxr-xr-x", "Makes it read-only", "Deletes the file", "Changes owner"],
    c: 0,
    e: "755 gives owner rwx, group and others r-x (read and execute).",
    de: "Octal: 7=rwx, 5=r-x, 0=---. 755 is common for executables.",
    deBeginner: "chmod 755 makes the file readable and executable by everyone, and writable only by you. Common for scripts.",
    deExpert: "chmod 755: mode 0755. Owner rwx, group/other r-x. chmod(2). umask affects new files. 755 typical for executables. +x for add execute."
  }),
  (_i: number) => ({
    q: "What does `ls -i` show?",
    o: ["Inode numbers", "File sizes only", "Permissions only", "Creation dates"],
    c: 0,
    e: "-i shows the inode number for each file.",
    de: "Inodes store file metadata. Hard links share the same inode.",
    deBeginner: "ls -i shows the inode number for each file—a number the system uses internally. Hard links share the same inode.",
    deExpert: "ls -i prints inode number (st_ino). Inode holds metadata; multiple names (hard links) share inode. Useful for detecting hard links. stat(2)."
  }),
  (_i: number) => ({
    q: "What does `ln -s target linkname` create?",
    o: ["Symbolic link", "Hard link", "Copy", "Directory"],
    c: 0,
    e: "ln -s creates a symbolic link (symlink) pointing to target.",
    de: "Symlinks can point to directories and across filesystems. If target is deleted, link breaks.",
    deBeginner: "ln -s creates a symlink—a shortcut that points to another file or folder. If you delete the target, the link breaks.",
    deExpert: "ln -s: symlink(2). linkname contains path to target. Can cross filesystems; can point to dir. Dangling if target removed. readlink to resolve."
  }),
  (_i: number) => ({
    q: "What is an absolute path?",
    o: ["Path starting from root (/)", "Path with no spaces", "Shortest path", "Path to a symlink"],
    c: 0,
    e: "Absolute paths start with / and work from any directory.",
    de: "/home/user/file.txt is absolute. file.txt or ./file.txt is relative.",
    deBeginner: "An absolute path starts with / and points to the same file no matter where you are. Example: /home/user/file.txt.",
    deExpert: "Absolute path: starts with /. Resolved from root. Independent of cwd. realpath(3) canonicalizes. Use in scripts when cwd is undefined."
  }),
  (_i: number) => ({
    q: "What does `grep 'error' log.txt` do?",
    o: ["Prints lines containing 'error'", "Replaces 'error' in file", "Counts 'error' occurrences", "Deletes lines with 'error'"],
    c: 0,
    e: "grep searches for lines matching the pattern and prints them.",
    de: "grep -i ignores case. grep -r searches recursively. grep -n shows line numbers.",
    deBeginner: "grep 'error' log.txt prints every line in log.txt that contains the word 'error'. It doesn't change the file.",
    deExpert: "grep: regex search, prints matching lines. -i case-insensitive; -r recursive; -n line numbers. Exit 0 if match, 1 if none. Use in pipes."
  }),
  (_i: number) => ({
    q: "What does `./script.sh` mean?",
    o: ["Run script.sh in current directory", "List script.sh", "Copy script.sh", "Edit script.sh"],
    c: 0,
    e: "./ means current directory. ./script.sh runs the script.",
    de: "The script needs execute permission (chmod +x). ./ is required when . is not in PATH.",
    deBeginner: "./script.sh runs the script in the current folder. You need chmod +x on the file. ./ is needed because . is usually not in PATH.",
    deExpert: "./script.sh: path to executable in cwd. exec(2) with shebang or interpreter. Requires x permission. PATH not used for relative paths. Prevents accidental run of same-name in cwd."
  }),
  (_i: number) => ({
    q: "What does `export VAR=value` do?",
    o: ["Sets VAR for current and child processes", "Only for current command", "Unsets VAR", "Prints VAR"],
    c: 0,
    e: "export makes the variable available to programs you run.",
    de: "Without export, child processes don't see the variable. Use in .bashrc for persistence.",
    deBeginner: "export VAR=value sets the variable and makes it visible to any command you run. Put in .bashrc to keep it.",
    deExpert: "export: put VAR in environment. Child processes get copy via getenv(3). Without export, child doesn't see it. export in .bashrc for persistence."
  }),
  (_i: number) => ({
    q: "What does `[abc]` match in globbing?",
    o: ["One character: a, b, or c", "The string abc", "Any three characters", "a, b, c in sequence"],
    c: 0,
    e: "Brackets match exactly one character from the set.",
    de: "[a-z] matches one lowercase letter. [!0-9] matches one non-digit.",
    deBeginner: "[abc] matches exactly one character that is a, b, or c. [a-z] matches any one lowercase letter.",
    deExpert: "[...] character class: one char from set. [a-z] range; [!0-9] or [^0-9] negated. Glob only; not full regex. Quote to pass literally."
  }),
  (_i: number) => ({
    q: "What does `touch file.txt` do?",
    o: ["Creates empty file or updates timestamp", "Displays file", "Deletes file", "Moves file"],
    c: 0,
    e: "touch creates an empty file if it doesn't exist, or updates its modification time.",
    de: "touch is often used to create placeholder files or update timestamps for make.",
    deBeginner: "touch file.txt creates an empty file if it doesn't exist, or just updates its 'last modified' time if it does.",
    deExpert: "touch: update mtime/atime (utimensat(2)). Creates empty file if missing. Used for make dependencies, placeholder files. -d for specific time."
  }),
  (_i: number) => ({
    q: "What does `clear` do?",
    o: ["Clears the terminal screen", "Clears environment", "Deletes files", "Clears history"],
    c: 0,
    e: "clear clears the visible terminal output.",
    de: "Often bound to Ctrl+L. The scrollback may still contain old output.",
    deBeginner: "clear wipes the visible screen so you see a blank area. Your session and history stay. Often Ctrl+L does the same.",
    deExpert: "clear sends control sequences to clear the terminal view. Scrollback unchanged. Often alias for tput clear or equivalent. Ctrl+L in readline."
  }),
  (_i: number) => ({
    q: "What does `whoami` display?",
    o: ["Current username", "Hostname", "Current directory", "Shell name"],
    c: 0,
    e: "whoami prints the effective username of the current user.",
    de: "Useful in scripts. id gives more detail (uid, gid, groups).",
    deBeginner: "whoami prints your username—the name you use to log in. Useful in scripts.",
    deExpert: "whoami: getpwuid(geteuid()) and print name. id gives uid, gid, groups. Useful for scripts and logging. Same as id -un."
  }),
  (_i: number) => ({
    q: "What does `which ls` show?",
    o: ["Path to the ls executable", "ls manual page", "Files named ls", "ls version"],
    c: 0,
    e: "which shows the path of the command that would be executed.",
    de: "which searches PATH. type ls gives more info including aliases.",
    deBeginner: "which ls shows the full path to the ls program (where the shell finds it). type ls also shows if it's an alias.",
    deExpert: "which: search PATH for executable; print first match. type (builtin) shows alias/function/builtin/path. command -v for script use. which may not see shell functions."
  }),
  (_i: number) => ({
    q: "What does `uname` display?",
    o: ["System information (e.g. Linux)", "Username", "Current time", "Disk usage"],
    c: 0,
    e: "uname prints system information. uname -a shows all.",
    de: "uname -s = kernel name, -n = hostname, -r = release, -m = machine.",
    deBeginner: "uname prints system info (e.g. Linux). uname -a shows kernel name, hostname, version, machine.",
    deExpert: "uname: uname(2). -s kernel name, -n nodename, -r release, -m machine, -a all. Used for portability checks and logging. Varies by OS."
  }),
  (_i: number) => ({
    q: "What does `date` display?",
    o: ["Current date and time", "File modification date", "User creation date", "System uptime"],
    c: 0,
    e: "date shows the current date and time.",
    de: "date +%Y-%m-%d formats output. date is useful in scripts for timestamps.",
    deBeginner: "date shows the current date and time. You can format it, e.g. date +%Y-%m-%d for YYYY-MM-DD.",
    deExpert: "date: gettimeofday/clock. date +FORMAT for strftime-style output. Used in scripts for timestamps, log names. TZ for timezone. date -d for parsing (GNU)."
  }),
  (_i: number) => ({
    q: "What does `history` show?",
    o: ["List of previously run commands", "File history", "Login history", "Error history"],
    c: 0,
    e: "history lists the command history. Use !n to repeat command n.",
    de: "History is stored in ~/.bash_history or ~/.zsh_history. !! repeats last command.",
    deBeginner: "history lists the commands you've run. !! repeats the last command; !n repeats command number n. Stored in ~/.bash_history.",
    deExpert: "history: builtin listing HISTFILE. !! = !-1; !n = repeat n; !$ = last arg. HISTSIZE, HISTFILESIZE. Ctrl+R search. fc for edit-and-rerun."
  }),
  (_i: number) => ({
    q: "What does `exit` do?",
    o: ["Closes the current shell", "Logs out", "Stops a process", "Clears screen"],
    c: 0,
    e: "exit terminates the shell. Exit code can be passed: exit 1.",
    de: "exit [n] exits with code n. Closing the terminal also exits the shell.",
    deBeginner: "exit closes the current shell (and often the terminal window). You can pass a number: exit 1 means 'exit with error'.",
    deExpert: "exit [n]: builtin; shell exits with status n (0–255). Parent gets it via wait(2). In script, exit stops script. Default n is last command's $?."
  }),
  (_i: number) => ({
    q: "What does `grep -i` do?",
    o: ["Ignore case when matching", "Show line numbers", "Search recursively", "Invert match"],
    c: 0,
    e: "-i makes grep case-insensitive.",
    de: "grep -i 'error' finds ERROR, error, Error, etc.",
    deBeginner: "grep -i ignores case. grep -i 'error' matches error, ERROR, Error, etc.",
    deExpert: "grep -i: case-insensitive matching. Uses locale. Slower than default. Combine with -r, -n as needed."
  }),
  (_i: number) => ({
    q: "What does `grep -r` do?",
    o: ["Search recursively in directories", "Reverse order", "Read from file", "Raw output"],
    c: 0,
    e: "-r makes grep search recursively through subdirectories.",
    de: "grep -r 'pattern' . searches all files in current directory and below.",
    deBeginner: "grep -r searches in the current directory and all subdirectories. grep -r 'word' . searches everywhere under the current folder.",
    deExpert: "grep -r: recurse into directories. Reads files; follows symlinks with -R. Often combined with -l (list files). Prefer find + xargs for complex path control."
  }),
  (_i: number) => ({
    q: "What does `head -20 file.txt` do?",
    o: ["Shows first 20 lines", "Shows first 20 bytes", "Shows last 20 lines", "Shows 20th line"],
    c: 0,
    e: "head shows the beginning of a file. Default is 10 lines.",
    de: "head -n 20 is equivalent. Useful for peeking at large files.",
    deBeginner: "head -20 shows the first 20 lines of the file. Default is 10. Good for peeking at large files.",
    deExpert: "head -n N: output first N lines (default 10). head -c N for bytes. Stops reading when done. Common in pipes. No random access."
  }),
  (_i: number) => ({
    q: "What does `tail -20 file.txt` do?",
    o: ["Shows last 20 lines", "Shows first 20 lines", "Shows 20th line", "Shows last 20 bytes"],
    c: 0,
    e: "tail shows the end of a file. Default is 10 lines.",
    de: "tail -f follows the file (useful for logs). tail -n 20 is equivalent.",
    deBeginner: "tail -20 shows the last 20 lines. tail -f keeps watching the file (great for logs).",
    deExpert: "tail -n N: last N lines. tail -f: follow file (inotify/poll). tail -F for rotated files. Essential for log monitoring. Reads from end efficiently."
  }),
  (_i: number) => ({
    q: "What does `wc -l file.txt` show?",
    o: ["Line count", "Word count", "Character count", "File size"],
    c: 0,
    e: "wc -l counts lines. wc -w counts words, wc -c counts bytes.",
    de: "wc = word count. wc without options shows lines, words, bytes.",
    deBeginner: "wc -l counts lines in the file. wc -w counts words; wc -c counts bytes. wc with no option shows all three.",
    deExpert: "wc -l: count newlines. wc -w words (whitespace-separated). wc -c bytes. wc -m chars. No -l = lines words bytes. Often in pipes (e.g. cat file | wc -l)."
  }),
  (_i: number) => ({
    q: "What does `sort file.txt` do?",
    o: ["Sorts lines alphabetically", "Reverses order", "Removes duplicates", "Counts lines"],
    c: 0,
    e: "sort orders lines. Default is alphabetical. Use -n for numbers.",
    de: "sort -n for numeric sort. sort -r for reverse. sort -u to remove duplicates.",
    deBeginner: "sort file.txt sorts the lines alphabetically. sort -n for numbers; sort -r for reverse; sort -u to remove duplicate lines.",
    deExpert: "sort: sort lines. Default lexicographic. -n numeric, -r reverse, -u unique, -k key. -t for field sep. LC_COLLATE affects order. Stable sort."
  }),
  (_i: number) => ({
    q: "What does `uniq` require to work correctly?",
    o: ["Sorted input (adjacent duplicates)", "Unique file", "Single column", "Small file"],
    c: 0,
    e: "uniq removes adjacent duplicate lines. Sort first for full deduplication.",
    de: "sort file | uniq removes all duplicates. uniq alone only removes adjacent ones.",
    deBeginner: "uniq only removes duplicate lines that are next to each other. So sort the file first, then uniq, to remove all duplicates.",
    deExpert: "uniq: collapse adjacent identical lines. Requires sorted input for full dedup. sort | uniq. -c count; -d only duplicates; -u only unique. Compares full lines unless -f/-s."
  }),
  (_i: number) => ({
    q: "What does `cut -d',' -f1 file.csv` do?",
    o: ["Extracts first column (comma-delimited)", "Deletes first column", "Sorts by first column", "Counts columns"],
    c: 0,
    e: "cut extracts columns. -d sets delimiter, -f selects fields.",
    de: "cut -d',' -f1,3 gets columns 1 and 3. Useful for CSV/TSV.",
    deBeginner: "cut -d',' -f1 takes the first column from a comma-separated file. -d is the delimiter; -f is which column(s).",
    deExpert: "cut -d DELIM -f N: extract field N (or list). One-based. No regex; fixed delimiter. For CSV prefer awk or dedicated parsers. cut -c for character positions."
  }),
  (_i: number) => ({
    q: "What does `tr 'a-z' 'A-Z'` do?",
    o: ["Translates lowercase to uppercase", "Replaces a with z", "Transposes characters", "Trims spaces"],
    c: 0,
    e: "tr translates or deletes characters. Reads from stdin.",
    de: "tr ' ' '\n' replaces spaces with newlines. tr -d 'x' deletes x.",
    deBeginner: "tr 'a-z' 'A-Z' converts lowercase letters to uppercase. tr reads from stdin. tr -d 'x' deletes the character x.",
    deExpert: "tr SET1 SET2: translate chars. tr -d SET1 deletes. Ranges (a-z) locale-dependent. No regex. tr ' ' '\n' for word-per-line. Single-byte oriented."
  }),
  (_i: number) => ({
    q: "What does `tee file.txt` do?",
    o: ["Writes stdin to file and stdout", "Creates a pipe", "Appends to file", "Reads from file"],
    c: 0,
    e: "tee copies stdin to both a file and stdout. Like a T-junction.",
    de: "cmd | tee file.txt saves output while displaying it. tee -a appends.",
    deBeginner: "tee sends its input to both a file and the screen. cmd | tee file.txt saves output and shows it. tee -a appends to the file.",
    deExpert: "tee: duplicate stdin to file and stdout. O_CREAT|O_WRONLY (or O_APPEND with -a). Useful for capturing pipeline output while viewing. Doesn't buffer full input."
  }),
  (_i: number) => ({
    q: "What does `true` return as exit code?",
    o: ["0", "1", "-1", "255"],
    c: 0,
    e: "true always succeeds with exit code 0.",
    de: "true and false are builtins. while true; do ... done runs forever.",
    deBeginner: "true always returns exit code 0 (success). Used in loops: while true; do ... done runs forever until you break.",
    deExpert: "true: builtin, exit 0. false: exit 1. No-op for success/failure. Used in while true loops, testing (false && cmd), and default cases."
  }),
  (_i: number) => ({
    q: "What does `false` return as exit code?",
    o: ["1 (or non-zero)", "0", "-1", "255"],
    c: 0,
    e: "false always fails with non-zero exit code.",
    de: "Useful for testing: false && echo 'no' (won't print). true || echo 'yes' (will print).",
    deBeginner: "false always returns a non-zero exit code (failure). false && echo 'no' won't run echo; true || echo 'yes' will run echo.",
    deExpert: "false: builtin, exit 1. Used with && and || for control flow. Testing: cmd || echo fail. Default branch in case."
  }),
  (_i: number) => ({
    q: "What does `command1 && command2` do?",
    o: ["Runs command2 only if command1 succeeds", "Runs both in parallel", "Runs command2 only if command1 fails", "Runs command1 then always command2"],
    c: 0,
    e: "&& runs the second command only if the first exits with 0.",
    de: "Short-circuit evaluation. cmd1 && cmd2 && cmd3 runs left to right until one fails.",
    deBeginner: "&& runs the second command only if the first succeeds (exit 0). If the first fails, the second is skipped.",
    deExpert: "&&: short-circuit AND. Run right side only if left exit 0. Used for chained checks: mkdir -p dir && cd dir && cmd. set -e runs after each command."
  }),
  (_i: number) => ({
    q: "What does `command1 || command2` do?",
    o: ["Runs command2 only if command1 fails", "Runs both in parallel", "Runs command2 only if command1 succeeds", "Runs whichever is faster"],
    c: 0,
    e: "|| runs the second command only if the first exits with non-zero.",
    de: "Fallback pattern: cmd || echo 'failed'. Stops at first success.",
    deBeginner: "|| runs the second command only if the first fails. Use for fallbacks: cmd || echo 'Error'.",
    deExpert: "||: short-circuit OR. Run right only if left non-zero. Fallback: cmd || exit 1. Combined: cmd && success || failure. Exit status is last command's."
  }),
  (_i: number) => ({
    q: "What does `#` start in a shell script?",
    o: ["A comment", "A variable", "A command", "A pipe"],
    c: 0,
    e: "Everything after # on a line is a comment (except in shebang).",
    de: "Comments are ignored by the shell. Use them to document scripts.",
    deBeginner: "# starts a comment: the rest of the line is ignored. Exception: #! on the first line is the shebang.",
    deExpert: "# to EOL = comment. Ignored by shell. #! on line 1 = shebang. No block comments; use : or # for multi-line."
  }),
  (_i: number) => ({
    q: "What does `$?` contain?",
    o: ["Exit code of last command", "Process ID", "Number of args", "Current shell PID"],
    c: 0,
    e: "$? is the exit status of the last foreground command.",
    de: "Essential for scripts: if some_cmd; then ... fi. Or: some_cmd && echo success.",
    deBeginner: "$? is the exit code of the last command. Check it right after a command; the next command overwrites it.",
    deExpert: "$?: exit status of last foreground command. Overwritten each command. Save to var if needed later. Used in conditionals and set -e."
  }),
  (_i: number) => ({
    q: "What does `$0` typically contain in a script?",
    o: ["Script name", "First argument", "Last argument", "Argument count"],
    c: 0,
    e: "$0 is the name used to invoke the script.",
    de: "$0 = script name. $1, $2, ... = arguments. $# = number of arguments.",
    deBeginner: "$0 is the script's name (how you ran it). $1, $2 are the first, second arguments; $# is how many arguments.",
    deExpert: "$0: argv[0], script name or shell name. $1..$9 positional params; ${10} etc. $# count. $@ and $* all args (differ when quoted)."
  }),
  (_i: number) => ({
    q: "What does `$1` contain in a script?",
    o: ["First argument", "Script name", "All arguments", "Last argument"],
    c: 0,
    e: "$1 is the first command-line argument passed to the script.",
    de: "myscript.sh foo bar: $1=foo, $2=bar. $@ = all args. $* = all args as one string.",
    deBeginner: "$1 is the first argument you pass to the script. ./script.sh foo bar gives $1=foo, $2=bar.",
    deExpert: "$1: first positional parameter. set shifts; $1 becomes next arg. Quote \"$1\" for spaces. ${1:-default} for default value."
  }),
  (_i: number) => ({
    q: "What does `$#` contain in a script?",
    o: ["Number of arguments", "Script name", "Last argument", "All arguments"],
    c: 0,
    e: "$# is the count of positional parameters (arguments).",
    de: "if [ $# -eq 0 ]; then echo 'usage: ...'; fi checks for no arguments.",
    deBeginner: "$# is how many arguments were passed. [ $# -eq 0 ] checks for no arguments.",
    deExpert: "$#: number of positional parameters. if [ $# -lt 2 ]; then usage; fi. Decremented by shift. $0 not counted."
  }),
  (_i: number) => ({
    q: "What does `source script.sh` do?",
    o: ["Runs script in current shell (affects env)", "Runs in subshell", "Compiles script", "Checks syntax"],
    c: 0,
    e: "source (or .) runs the script in the current shell, so variables/aliases persist.",
    de: "source .bashrc reloads config. ./script runs in subshell, changes don't persist.",
    deBeginner: "source runs the script in the current shell, so variables and aliases you set there stay. Use source .bashrc to reload config.",
    deExpert: "source/. : execute script in current shell. No subshell; vars/aliases/functions persist. Use for config (source .bashrc). ./script runs in child."
  }),
  (_i: number) => ({
    q: "What does `basename /path/to/file.txt` output?",
    o: ["file.txt", "/path/to/file.txt", "file", ".txt"],
    c: 0,
    e: "basename strips directory and returns just the filename.",
    de: "basename /path/to/file.txt .txt gives 'file'. dirname gives the directory part.",
    deBeginner: "basename gives just the filename: basename /path/to/file.txt is file.txt. basename path .txt strips the suffix.",
    deExpert: "basename path [suffix]: strip directory, optionally remove suffix. Pure string ops. dirname gives directory. Used in scripts for path parts."
  }),
  (_i: number) => ({
    q: "What does `dirname /path/to/file.txt` output?",
    o: ["/path/to", "file.txt", "/path/to/file", "."],
    c: 0,
    e: "dirname returns the directory part of a path.",
    de: "dirname and basename are useful for path manipulation in scripts.",
    deBeginner: "dirname gives the directory part: dirname /path/to/file.txt is /path/to. Pair with basename for path handling.",
    deExpert: "dirname path: strip last component. /path/to/file -> /path/to. Edge cases: / -> /, file -> . . Used with basename for path logic."
  }),
  (_i: number) => ({
    q: "What does `readlink -f /path/to/link` do?",
    o: ["Resolves to absolute real path", "Shows link target", "Creates link", "Deletes link"],
    c: 0,
    e: "readlink -f resolves symlinks to the canonical absolute path.",
    de: "Useful when you need the real path. -f = follow recursively, canonicalize.",
    deBeginner: "readlink -f resolves symlinks and gives the final absolute path. -f follows all links and normalizes.",
    deExpert: "readlink -f: canonicalize path, resolve symlinks recursively. realpath(3) equivalent. GNU. Use for absolute real path in scripts."
  }),
  (_i: number) => ({
    q: "What does `file document.pdf` show?",
    o: ["File type (e.g. PDF document)", "File size", "File permissions", "File contents"],
    c: 0,
    e: "file determines file type by examining contents (magic numbers).",
    de: "file uses magic numbers, not extensions. file * shows types of all files.",
    deBeginner: "file looks at the file contents (magic bytes) and reports the type—e.g. PDF, text, executable. Doesn't rely on the extension.",
    deExpert: "file: reads magic (libmagic). Identifies type from content. file * for directory. Used before opening binary; avoids cat to terminal."
  }),
  (_i: number) => ({
    q: "What does `stat file.txt` show?",
    o: ["Detailed file metadata", "File contents", "File type only", "File size only"],
    c: 0,
    e: "stat displays inode, permissions, size, timestamps, etc.",
    de: "stat gives access, modify, change times. Useful for debugging and scripts.",
    deBeginner: "stat shows detailed info: size, permissions, access/modify times, inode. Better than ls -l when you need one file's metadata.",
    deExpert: "stat: stat(2) output. Size, blocks, mode, uid, gid, atime, mtime, ctime. stat -c FORMAT for scriptable output. stat -L follow symlinks."
  }),
  (_i: number) => ({
    q: "What does `chmod u+x file` do?",
    o: ["Adds execute permission for owner", "Adds execute for all", "Removes execute", "Sets mode 755"],
    c: 0,
    e: "u+x adds execute (x) for the user (owner).",
    de: "u=user, g=group, o=others, a=all. + add, - remove, = set exactly.",
    deBeginner: "chmod u+x adds execute permission for the owner (user). u=user, g=group, o=others. + add, - remove.",
    deExpert: "chmod u+x: add x for owner. u/g/o/a, +/-/=. chmod(2). No effect on dirs for execution (x = enter). setuid/setgid need +s."
  }),
  (_i: number) => ({
    q: "What does `chmod 644 file` set?",
    o: ["rw-r--r-- (owner rw, others r)", "rwxr-xr-x", "r--r--r--", "rwxrwxrwx"],
    c: 0,
    e: "644: owner read+write, group and others read only.",
    de: "6=rw, 4=r, 0=---. Common for regular files. 755 for executables.",
    deBeginner: "chmod 644 gives owner read+write (6), group and others read only (4). Common for normal files. 755 for scripts.",
    deExpert: "644 = 110 100 100 = rw-r--r--. Owner rw, group/other r. Umask often 022 so new files are 644. 755 for executables."
  }),
  (_i: number) => ({
    q: "What is a hard link?",
    o: ["Another name for same inode", "A type of symlink", "A copy", "A directory entry"],
    c: 0,
    e: "Hard links are multiple directory entries pointing to the same inode.",
    de: "ln file link creates hard link. Both names refer to same data. Can't link directories.",
    deBeginner: "A hard link is another name for the same file (same inode). ln file link creates one. Deleting one name doesn't delete the data until no links remain.",
    deExpert: "Hard link: link(2). Same inode, two+ names. ln src link. No cross-FS. Can't hard-link dirs. unlink removes one name; data freed when nlink=0."
  }),
  (_i: number) => ({
    q: "What does `du -sh dir` show?",
    o: ["Total disk usage of dir", "File count", "Largest file", "Directory depth"],
    c: 0,
    e: "-s = summary (total), -h = human-readable (K, M, G).",
    de: "du = disk usage. du -sh * shows size of each item in current dir.",
    deBeginner: "du -sh dir shows the total size of dir (and everything in it). -s summary, -h human-readable (K, M, G). du -sh * for each item.",
    deExpert: "du: disk usage. -s summary (one total). -h human. Sums file sizes (st_blocks). du -sh * per entry. Excludes mount points unless specified."
  }),
  (_i: number) => ({
    q: "What does `df -h` show?",
    o: ["Disk space of filesystems (human-readable)", "Directory sizes", "File count", "Inode usage"],
    c: 0,
    e: "df = disk free. Shows total, used, available for each mounted filesystem.",
    de: "df -h uses K, M, G. df -i shows inode usage. Essential for monitoring.",
    deBeginner: "df -h shows how much space is used and free on each disk/filesystem. -h in K, M, G. Use df -i for inode usage.",
    deExpert: "df: statvfs(2). Total, used, avail per mount. -h human. -i inodes. Essential for monitoring full filesystems. NFS and local."
  }),
  (_i: number) => ({
    q: "What does `grep -v pattern` do?",
    o: ["Inverts match (lines NOT matching)", "Shows line numbers", "Verbose mode", "Recursive search"],
    c: 0,
    e: "-v prints lines that do NOT match the pattern.",
    de: "grep -v '^#' file shows lines that don't start with # (filter comments).",
    deBeginner: "grep -v prints lines that do NOT match. grep -v '^#' shows lines that don't start with # (e.g. filter comments).",
    deExpert: "grep -v: invert match. Print lines not matching. Exit 0 if no match (all printed). Useful: grep -v '^#' to strip comments, grep -v '^$' to strip blanks."
  }),
  (_i: number) => ({
    q: "What does `grep -n pattern` do?",
    o: ["Shows line numbers", "Counts matches", "Non-matching lines", "Recursive search"],
    c: 0,
    e: "-n prefixes each line with its line number.",
    de: "Useful for finding where matches occur. grep -n 'error' log.txt",
    deBeginner: "grep -n adds the line number before each matching line. Handy to find where something appears (e.g. grep -n 'error' log.txt).",
    deExpert: "grep -n: prefix each line with 1-based line number. Useful for editors, fixing specific lines. Combine with -r for recursive line numbers."
  }),
  (_i: number) => ({
    q: "What does `grep -c pattern file` do?",
    o: ["Counts matching lines", "Shows matching lines", "Shows context", "Shows line numbers"],
    c: 0,
    e: "-c outputs only the count of matching lines.",
    de: "grep -c 'TODO' *.py counts TODOs per file. Suppresses actual line output.",
    deBeginner: "grep -c prints only how many lines matched, not the lines. grep -c 'TODO' *.py counts TODOs per file.",
    deExpert: "grep -c: output count of matching lines only. Exit 0 if count>0. Useful for thresholds. No line content; combine with -l for files with matches."
  }),
  (_i: number) => ({
    q: "What does `wc -w file` show?",
    o: ["Word count", "Line count", "Character count", "Byte count"],
    c: 0,
    e: "wc -w counts words (whitespace-separated).",
    de: "wc = word count. wc -l lines, -w words, -c bytes, -m characters.",
    deBeginner: "wc -w counts words in the file (split by whitespace). wc -l lines, -w words, -c bytes.",
    deExpert: "wc -w: count words (whitespace-separated tokens). -l newlines, -c bytes, -m chars. Locale affects word boundaries."
  }),
  (_i: number) => ({
    q: "What does `sort -n` do?",
    o: ["Numeric sort", "Reverse sort", "Unique lines only", "Case-insensitive sort"],
    c: 0,
    e: "-n sorts numerically (2 before 10) instead of alphabetically.",
    de: "Without -n, 10 comes before 2 (string sort). sort -n for numbers.",
    deBeginner: "sort -n sorts by number value so 2 comes before 10. Without -n, sort is alphabetical and 10 comes before 2.",
    deExpert: "sort -n: numeric sort. Compares as numbers. -h for human (K,M,G). Essential for version or size. Default is lexicographic."
  }),
  (_i: number) => ({
    q: "What does `sort -r` do?",
    o: ["Reverse order", "Remove duplicates", "Random order", "Recursive sort"],
    c: 0,
    e: "-r reverses the sort order (descending).",
    de: "sort -rn sorts numbers in descending order. Combine -r with other options.",
    deBeginner: "sort -r reverses the order (descending). sort -rn = numeric descending. Combine with -n, -u as needed.",
    deExpert: "sort -r: reverse order. sort -rn descending numeric. Stable sort reversed. Combine with -k for key-based reverse."
  }),
  (_i: number) => ({
    q: "What does `sort -u` do?",
    o: ["Unique lines only (removes duplicates)", "Reverse order", "Case-insensitive", "Numeric sort"],
    c: 0,
    e: "-u outputs only unique lines (like sort | uniq).",
    de: "sort -u is equivalent to sort | uniq. Removes all duplicates after sorting.",
    deBeginner: "sort -u outputs each line once (removes duplicates after sorting). Same as sort | uniq.",
    deExpert: "sort -u: output unique lines. Equivalent to sort | uniq. Dedup after sort. Slightly more efficient than pipe. -u with -k for unique by key."
  }),
  (_i: number) => ({
    q: "What does `paste file1 file2` do?",
    o: ["Merges lines side-by-side", "Concatenates files", "Compares files", "Removes duplicates"],
    c: 0,
    e: "paste joins corresponding lines from files with tab (default).",
    de: "paste -d',' uses comma. Inverse of cut for combining columns.",
    deBeginner: "paste puts lines from two files side by side (line 1 of file1, line 1 of file2, etc.). Default separator is tab; -d',' uses comma.",
    deExpert: "paste: merge lines of files. Line N from each file on one line. -d delimiter. Inverse of cut. paste -s serializes one file's lines."
  }),
  (_i: number) => ({
    q: "What does `diff file1 file2` show?",
    o: ["Differences between files", "Same lines", "Merged content", "File sizes"],
    c: 0,
    e: "diff shows line-by-line differences. < means file1, > means file2.",
    de: "diff -u gives unified format. diff -r for directories. patch applies diff output.",
    deBeginner: "diff compares two files and shows what's different. Lines from file1 have <, from file2 have >. diff -u gives a nicer unified format.",
    deExpert: "diff: compare files line-by-line. -u unified. -r recursive dirs. patch applies diff. Exit 0 same, 1 diff, 2 error. LC_COLLATE for sort order."
  }),
  (_i: number) => ({
    q: "What does `find . -name '*.txt'` do?",
    o: ["Finds .txt files in current dir and subdirs", "Finds only in current dir", "Renames files", "Deletes files"],
    c: 0,
    e: "find searches the directory tree. -name matches filename.",
    de: "find . -type f -name '*.txt'. -type d for directories. -mtime for modification time.",
    deBeginner: "find . -name '*.txt' searches from the current directory downward for any file whose name ends in .txt. -name is a pattern.",
    deExpert: "find path tests: -name (glob), -type f/d, -mtime -n (modified n*24h ago). -exec cmd {} \\; or -exec cmd {} +. -print0 | xargs -0 for safe names."
  }),
  (_i: number) => ({
    q: "What does `xargs` do?",
    o: ["Converts stdin to command arguments", "Runs commands in parallel", "Expands arguments", "Splits input"],
    c: 0,
    e: "xargs reads items from stdin and passes them as arguments to a command.",
    de: "find . -name '*.txt' | xargs grep pattern. Handles long argument lists.",
    deBeginner: "xargs takes lines from stdin and turns them into arguments for a command. find ... | xargs rm runs rm on each found file. Handles long lists.",
    deExpert: "xargs: build argv from stdin. find | xargs cmd. -0 for NUL-separated (find -print0). -I {} replace. -P n parallel. ARG_MAX limits; xargs splits."
  }),
  (_i: number) => ({
    q: "What does `man ls` do?",
    o: ["Shows manual page for ls", "Runs ls", "Lists manual pages", "Searches manuals"],
    c: 0,
    e: "man displays the manual (help) page for a command.",
    de: "man -k keyword searches manual descriptions. q to quit. / to search in man.",
    deBeginner: "man ls opens the manual page for ls. Use arrow keys to scroll, q to quit. man -k keyword searches all man pages by description.",
    deExpert: "man: display man pages (roff). man -k/apropos search. MANPATH, MANWIDTH. / and n in pager. man 1 ls vs man 2 open. Sections 1=user, 2=syscalls."
  }),
  (_i: number) => ({
    q: "What does `help` show in bash?",
    o: ["Builtin command help", "General help", "External command help", "Error messages"],
    c: 0,
    e: "help lists or describes shell builtins. help cd shows cd help.",
    de: "Builtins (cd, echo, export) don't have man pages; use help. help -s cmd shows syntax.",
    deBeginner: "help shows help for shell built-in commands (cd, echo, export). help cd gives help for cd. Builtins don't have man pages.",
    deExpert: "help: bash builtin docs. help -s shows syntax. help with no args lists builtins. For external commands use man. type cmd shows if builtin."
  }),
  (_i: number) => ({
    q: "What does `type ls` show?",
    o: ["How ls would be resolved (alias/function/path)", "File type of ls", "ls manual", "ls version"],
    c: 0,
    e: "type shows whether a name is alias, function, builtin, or file path.",
    de: "type -a shows all matches. type cd shows 'cd is a shell builtin'.",
    deBeginner: "type ls tells you what ls is: an alias, a function, a builtin, or the path to a program. type -a shows all matches (e.g. alias and binary).",
    deExpert: "type: show how name is resolved. type -a all. alias/function/builtin/file. which only shows path; type is builtin and sees aliases."
  }),
  (_i: number) => ({
    q: "What does `hash` do in bash?",
    o: ["Shows or manages command path cache", "Creates a hash table", "Hashes a file", "Encrypts input"],
    c: 0,
    e: "hash remembers command locations for faster lookup. hash -r clears cache.",
    de: "After you run a command, the shell caches its path. hash shows the cache.",
    deBeginner: "hash shows or manages the shell's cache of command paths. After you run a command, its path is cached. hash -r clears the cache.",
    deExpert: "hash: bash path cache. Speeds up repeated lookups. hash -r clear. hash -d cmd remove one. If PATH or binary changes, hash -r."
  }),
  (_i: number) => ({
    q: "What does `ulimit` control?",
    o: ["Resource limits for the shell", "Disk usage", "Network speed", "CPU count"],
    c: 0,
    e: "ulimit sets or displays limits (open files, stack size, etc.).",
    de: "ulimit -n shows max open files. ulimit -u shows max processes. -a shows all.",
    deBeginner: "ulimit sets or shows resource limits for the shell (and its children): open files, process count, etc. ulimit -a shows all limits.",
    deExpert: "ulimit: getrlimit/setrlimit. -n open files, -u processes, -s stack. -a all. Soft/hard; -H hard. Child inherits. systemd may override."
  }),
  (_i: number) => ({
    q: "What does `umask` set?",
    o: ["Default permission mask for new files", "User mask", "File mode", "Directory mode"],
    c: 0,
    e: "umask specifies which permissions to turn OFF for new files.",
    de: "umask 022: new files get 644, dirs get 755. umask 077: more restrictive.",
    deBeginner: "umask sets which permissions are turned off for new files. umask 022 gives new files 644 and dirs 755. umask 077 is more private.",
    deExpert: "umask: octal mask of bits to clear on create. 022 -> files 644, dirs 755. 077 -> 600/700. Applied at open(2)/mkdir(2). Inherited by children."
  }),
  (_i: number) => ({
    q: "What does `env` display?",
    o: ["Environment variables", "Current directory", "Command path", "Shell options"],
    c: 0,
    e: "env shows the current environment. env VAR=val cmd runs cmd with VAR set.",
    de: "env -i cmd runs with empty environment. Useful for clean subshells.",
    deBeginner: "env with no arguments prints all environment variables. env VAR=value command runs command with VAR set (only for that command).",
    deExpert: "env: print or modify environment. env -i cmd empty env. env VAR=val cmd adds/overrides. Used in shebangs: #!/usr/bin/env python3."
  }),
  (_i: number) => ({
    q: "What does `printenv VAR` do?",
    o: ["Prints value of VAR", "Sets VAR", "Exports VAR", "Unsets VAR"],
    c: 0,
    e: "printenv prints the value of an environment variable.",
    de: "printenv with no args prints all. echo $VAR is similar but VAR can be unset.",
    deBeginner: "printenv VAR prints the value of that environment variable. printenv with no args prints all. echo $VAR is similar.",
    deExpert: "printenv: print env vars. printenv [VAR]. No args = all. Exit 1 if VAR unset. echo $VAR expands in shell; printenv is external."
  }),
  (_i: number) => ({
    q: "What does `set` show in bash?",
    o: ["Shell options and variables", "Environment only", "Aliases only", "Functions only"],
    c: 0,
    e: "set displays all shell options and variables. set -e exits on error.",
    de: "set -x for debug (echo commands). set -e for fail-fast. set -u for unset error.",
    deBeginner: "set with no options shows all shell variables and options. set -e makes the shell exit if a command fails. set -x prints each command before running.",
    deExpert: "set: without args list vars/options. set -e errexit, -u nounset, -x xtrace, -o pipefail. set -- clears positional params. set +e disables."
  }),
  (_i: number) => ({
    q: "What does `unset VAR` do?",
    o: ["Removes the variable VAR", "Sets VAR to empty", "Exports VAR", "Prints VAR"],
    c: 0,
    e: "unset removes a variable or function from the shell.",
    de: "unset -f removes a function. After unset, variable is gone (not just empty).",
    deBeginner: "unset VAR removes the variable completely (not just empty). The variable no longer exists. unset -f removes a function.",
    deExpert: "unset: remove variable or function. unset -f name for function. Variable gone (unset vs VAR=). Read-only vars can't be unset. Export removed."
  }),
];

export const level1Patterns = beginner;
export const level1IntermediateA = level1Intermediate.slice(0, 50);
export const level1IntermediateB = level1Intermediate.slice(50, 100);
export const level1ExpertA = level1Expert.slice(0, 50);
export const level1ExpertB = level1Expert.slice(50, 103);
