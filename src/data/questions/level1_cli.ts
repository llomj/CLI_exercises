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
    de: "pwd (print working directory) outputs the absolute path of the current directory. It's essential for knowing where you are in the filesystem when writing scripts or navigating."
  }),
  (_i: number) => ({
    q: "What does `ls` display?",
    o: ["Directory contents", "File contents", "Current path", "Environment variables"],
    c: 0,
    e: "ls lists files and folders in the current directory.",
    de: "ls lists directory contents. Use -l for long format, -a for hidden files, -la for both."
  }),
  (_i: number) => ({
    q: "What does `cd ..` do?",
    o: ["Go up one directory", "Go to home", "Create a directory", "Delete current directory"],
    c: 0,
    e: "cd .. moves to the parent directory.",
    de: ".. means parent directory. cd .. changes to the folder above the current one."
  }),
  (_i: number) => ({
    q: "What is the conventional exit code for success?",
    o: ["0", "1", "-1", "255"],
    c: 0,
    e: "Exit code 0 means the command succeeded.",
    de: "By convention, 0 indicates success; any non-zero value indicates failure. Check with echo $?."
  }),
  (_i: number) => ({
    q: "What does `mkdir mydir` do?",
    o: ["Creates a directory named mydir", "Removes mydir", "Moves into mydir", "Lists mydir"],
    c: 0,
    e: "mkdir creates a new directory.",
    de: "mkdir creates directories. Use mkdir -p to create parent directories as needed."
  }),
  (_i: number) => ({
    q: "What does the `*` wildcard match in globbing?",
    o: ["Any string of characters", "A single character", "Only digits", "Only letters"],
    c: 0,
    e: "* matches any sequence of characters (including none).",
    de: "Globbing: * matches any string; ? matches one character; [abc] matches one of a, b, or c."
  }),
  (_i: number) => ({
    q: "What does `ls -l` add to the output?",
    o: ["Long format with permissions and details", "Only hidden files", "Recursive listing", "Reverse order"],
    c: 0,
    e: "-l shows long format: permissions, owner, size, date.",
    de: "ls -l shows permissions (rwx), link count, owner, group, size, and modification time."
  }),
  (_i: number) => ({
    q: "What does `echo $HOME` display?",
    o: ["Your home directory path", "Current directory", "The word HOME", "Environment count"],
    c: 0,
    e: "HOME is an environment variable containing your home directory path.",
    de: "Environment variables like HOME, PATH, and USER are set by the shell and inherited by child processes."
  }),
  (_i: number) => ({
    q: "What does `ls -a` show that normal `ls` hides?",
    o: ["Hidden files (dotfiles)", "Large files only", "Executable files only", "Recent files only"],
    c: 0,
    e: "-a shows all files including hidden ones (names starting with .).",
    de: "Files starting with . are hidden by default. ls -a reveals them."
  }),
  (_i: number) => ({
    q: "What does `cd` with no arguments do?",
    o: ["Go to home directory", "Stay in current directory", "Show current path", "List directories"],
    c: 0,
    e: "cd with no args changes to $HOME.",
    de: "cd alone is equivalent to cd $HOME."
  }),
  (_i: number) => ({
    q: "What does `rm file.txt` do?",
    o: ["Deletes file.txt", "Renames file.txt", "Moves file.txt", "Copies file.txt"],
    c: 0,
    e: "rm removes (deletes) files. Deletion is permanent.",
    de: "rm unlinks the file. Use rm -r for directories. There is no undo."
  }),
  (_i: number) => ({
    q: "What does `cp src.txt dst.txt` do?",
    o: ["Copies src.txt to dst.txt", "Moves src.txt to dst.txt", "Compares the two files", "Deletes both"],
    c: 0,
    e: "cp copies the source file to the destination.",
    de: "cp creates a new file. Use cp -r for directories."
  }),
  (_i: number) => ({
    q: "What does `mv old.txt new.txt` do when new.txt does not exist?",
    o: ["Renames old.txt to new.txt", "Copies old.txt to new.txt", "Fails with error", "Creates a link"],
    c: 0,
    e: "mv renames the file when the destination doesn't exist.",
    de: "mv can rename or move. Same filesystem: fast rename. Different filesystem: copy + delete."
  }),
  (_i: number) => ({
    q: "What does `2>&1` in a command do?",
    o: ["Redirects stderr to stdout", "Redirects stdout to stderr", "Appends to file", "Creates a pipe"],
    c: 0,
    e: "2>&1 sends stderr (2) to wherever stdout (1) goes.",
    de: "File descriptors: 0=stdin, 1=stdout, 2=stderr. 2>&1 merges stderr into stdout."
  }),
  (_i: number) => ({
    q: "What does the `|` (pipe) operator do?",
    o: ["Sends stdout of left command to stdin of right", "Runs commands in parallel", "Redirects to file", "Creates a background job"],
    c: 0,
    e: "| connects the output of one command to the input of the next.",
    de: "Pipes enable composition: ls | grep txt | wc -l."
  }),
  (_i: number) => ({
    q: "What is the first line `#!/bin/bash` called?",
    o: ["Shebang", "Comment", "Variable", "Alias"],
    c: 0,
    e: "The shebang tells the system which interpreter to use for the script.",
    de: "#!/bin/bash or #!/usr/bin/env bash specifies the interpreter. Must be the first line."
  }),
  (_i: number) => ({
    q: "What does `alias ll='ls -la'` do?",
    o: ["Creates shortcut ll for ls -la", "Runs ls -la immediately", "Exports a variable", "Defines a function"],
    c: 0,
    e: "alias creates a shortcut. Typing ll will run ls -la.",
    de: "Aliases are expanded by the shell before the command runs. Save in .bashrc or .zshrc."
  }),
  (_i: number) => ({
    q: "What does `cd -` do?",
    o: ["Go to previous directory", "Go to home", "Go to root", "Stay in place"],
    c: 0,
    e: "cd - switches to the directory you were in before the last cd.",
    de: "OLDPWD is set by cd. cd - is equivalent to cd $OLDPWD."
  }),
  (_i: number) => ({
    q: "What does `ls *.txt` expand to before running?",
    o: ["All .txt files in current directory", "The literal *.txt", "Only the first .txt file", "Nothing"],
    c: 0,
    e: "The shell expands * to matching filenames (globbing).",
    de: "Globbing happens in the shell. * matches any string. Quote to prevent expansion."
  }),
  (_i: number) => ({
    q: "What does `>` do in `ls > output.txt`?",
    o: ["Redirects stdout to output.txt (overwrite)", "Appends to output.txt", "Reads from output.txt", "Pipes to output.txt"],
    c: 0,
    e: "> redirects stdout to a file, overwriting it.",
    de: "> truncates and writes. >> appends. < reads from file."
  }),
  (_i: number) => ({
    q: "What is the shell?",
    o: ["Program that interprets and runs commands", "The terminal window", "The operating system", "A text editor"],
    c: 0,
    e: "The shell reads your input, parses it, and executes commands.",
    de: "Bash, Zsh, and sh are shells. They handle variables, globbing, pipes, and scripting."
  }),
  (_i: number) => ({
    q: "What is PATH used for?",
    o: ["List of directories to search for executables", "Current directory path", "File permissions", "Command history"],
    c: 0,
    e: "PATH tells the shell where to find programs when you type a command.",
    de: "When you type ls, the shell searches each directory in PATH for an executable named ls."
  }),
  (_i: number) => ({
    q: "What does `cat file.txt` do?",
    o: ["Displays file contents", "Creates file.txt", "Copies file.txt", "Deletes file.txt"],
    c: 0,
    e: "cat reads files and writes them to stdout.",
    de: "cat concatenates files. With one file, it just displays it. Use less for large files."
  }),
  (_i: number) => ({
    q: "What does `rm -r dirname` do?",
    o: ["Removes directory and its contents recursively", "Removes only empty directories", "Renames the directory", "Creates the directory"],
    c: 0,
    e: "-r makes rm recursive; it deletes the directory and everything inside.",
    de: "rm -r is dangerous. rm -rf forces without prompt. Never run rm -rf /."
  }),
  (_i: number) => ({
    q: "What does `mkdir -p a/b/c` do?",
    o: ["Creates a, a/b, and a/b/c as needed", "Creates only c", "Fails if a exists", "Creates with permissions 755"],
    c: 0,
    e: "-p creates parent directories and does not error if they exist.",
    de: "mkdir -p is idempotent for existing directories. Essential for scripts."
  }),
  (_i: number) => ({
    q: "What does `?` match in shell globbing?",
    o: ["Exactly one character", "Any string", "Zero or one character", "Only digits"],
    c: 0,
    e: "? matches any single character.",
    de: "file?.txt matches file1.txt, fileA.txt, etc. * matches any string including empty."
  }),
  (_i: number) => ({
    q: "What does `echo $?` show after a command?",
    o: ["Exit code of the last command", "Process ID", "Number of arguments", "Current directory"],
    c: 0,
    e: "$? holds the exit status of the last executed command.",
    de: "0 = success, non-zero = failure. Essential for scripting and conditionals."
  }),
  (_i: number) => ({
    q: "What does `>>` do compared to `>`?",
    o: ["Appends instead of overwriting", "Reads instead of writes", "Redirects stderr", "Runs in background"],
    c: 0,
    e: ">> appends to the file; > overwrites it.",
    de: "Both redirect stdout. > truncates; >> appends. Use >> for log files."
  }),
  (_i: number) => ({
    q: "What is the terminal?",
    o: ["Text interface for running commands", "A type of computer", "A programming language", "A file format"],
    c: 0,
    e: "The terminal is a window where you type commands instead of using a GUI.",
    de: "Terminal emulators (GNOME Terminal, iTerm2) provide the interface; the shell runs inside."
  }),
  (_i: number) => ({
    q: "What does `~` expand to?",
    o: ["Home directory path", "Current directory", "Root directory", "Temporary directory"],
    c: 0,
    e: "~ is shorthand for your home directory ($HOME).",
    de: "cd ~ or cd ~/docs goes to your home. ~user goes to user's home."
  }),
  (_i: number) => ({
    q: "What does `chmod 755 script.sh` do?",
    o: ["Makes script executable: rwxr-xr-x", "Makes it read-only", "Deletes the file", "Changes owner"],
    c: 0,
    e: "755 gives owner rwx, group and others r-x (read and execute).",
    de: "Octal: 7=rwx, 5=r-x, 0=---. 755 is common for executables."
  }),
  (_i: number) => ({
    q: "What does `ls -i` show?",
    o: ["Inode numbers", "File sizes only", "Permissions only", "Creation dates"],
    c: 0,
    e: "-i shows the inode number for each file.",
    de: "Inodes store file metadata. Hard links share the same inode."
  }),
  (_i: number) => ({
    q: "What does `ln -s target linkname` create?",
    o: ["Symbolic link", "Hard link", "Copy", "Directory"],
    c: 0,
    e: "ln -s creates a symbolic link (symlink) pointing to target.",
    de: "Symlinks can point to directories and across filesystems. If target is deleted, link breaks."
  }),
  (_i: number) => ({
    q: "What is an absolute path?",
    o: ["Path starting from root (/)", "Path with no spaces", "Shortest path", "Path to a symlink"],
    c: 0,
    e: "Absolute paths start with / and work from any directory.",
    de: "/home/user/file.txt is absolute. file.txt or ./file.txt is relative."
  }),
  (_i: number) => ({
    q: "What does `grep 'error' log.txt` do?",
    o: ["Prints lines containing 'error'", "Replaces 'error' in file", "Counts 'error' occurrences", "Deletes lines with 'error'"],
    c: 0,
    e: "grep searches for lines matching the pattern and prints them.",
    de: "grep -i ignores case. grep -r searches recursively. grep -n shows line numbers."
  }),
  (_i: number) => ({
    q: "What does `./script.sh` mean?",
    o: ["Run script.sh in current directory", "List script.sh", "Copy script.sh", "Edit script.sh"],
    c: 0,
    e: "./ means current directory. ./script.sh runs the script.",
    de: "The script needs execute permission (chmod +x). ./ is required when . is not in PATH."
  }),
  (_i: number) => ({
    q: "What does `export VAR=value` do?",
    o: ["Sets VAR for current and child processes", "Only for current command", "Unsets VAR", "Prints VAR"],
    c: 0,
    e: "export makes the variable available to programs you run.",
    de: "Without export, child processes don't see the variable. Use in .bashrc for persistence."
  }),
  (_i: number) => ({
    q: "What does `[abc]` match in globbing?",
    o: ["One character: a, b, or c", "The string abc", "Any three characters", "a, b, c in sequence"],
    c: 0,
    e: "Brackets match exactly one character from the set.",
    de: "[a-z] matches one lowercase letter. [!0-9] matches one non-digit."
  }),
  (_i: number) => ({
    q: "What does `touch file.txt` do?",
    o: ["Creates empty file or updates timestamp", "Displays file", "Deletes file", "Moves file"],
    c: 0,
    e: "touch creates an empty file if it doesn't exist, or updates its modification time.",
    de: "touch is often used to create placeholder files or update timestamps for make."
  }),
  (_i: number) => ({
    q: "What does `clear` do?",
    o: ["Clears the terminal screen", "Clears environment", "Deletes files", "Clears history"],
    c: 0,
    e: "clear clears the visible terminal output.",
    de: "Often bound to Ctrl+L. The scrollback may still contain old output."
  }),
  (_i: number) => ({
    q: "What does `whoami` display?",
    o: ["Current username", "Hostname", "Current directory", "Shell name"],
    c: 0,
    e: "whoami prints the effective username of the current user.",
    de: "Useful in scripts. id gives more detail (uid, gid, groups)."
  }),
  (_i: number) => ({
    q: "What does `which ls` show?",
    o: ["Path to the ls executable", "ls manual page", "Files named ls", "ls version"],
    c: 0,
    e: "which shows the path of the command that would be executed.",
    de: "which searches PATH. type ls gives more info including aliases."
  }),
  (_i: number) => ({
    q: "What does `uname` display?",
    o: ["System information (e.g. Linux)", "Username", "Current time", "Disk usage"],
    c: 0,
    e: "uname prints system information. uname -a shows all.",
    de: "uname -s = kernel name, -n = hostname, -r = release, -m = machine."
  }),
  (_i: number) => ({
    q: "What does `date` display?",
    o: ["Current date and time", "File modification date", "User creation date", "System uptime"],
    c: 0,
    e: "date shows the current date and time.",
    de: "date +%Y-%m-%d formats output. date is useful in scripts for timestamps."
  }),
  (_i: number) => ({
    q: "What does `history` show?",
    o: ["List of previously run commands", "File history", "Login history", "Error history"],
    c: 0,
    e: "history lists the command history. Use !n to repeat command n.",
    de: "History is stored in ~/.bash_history or ~/.zsh_history. !! repeats last command."
  }),
  (_i: number) => ({
    q: "What does `exit` do?",
    o: ["Closes the current shell", "Logs out", "Stops a process", "Clears screen"],
    c: 0,
    e: "exit terminates the shell. Exit code can be passed: exit 1.",
    de: "exit [n] exits with code n. Closing the terminal also exits the shell."
  }),
  (_i: number) => ({
    q: "What does `grep -i` do?",
    o: ["Ignore case when matching", "Show line numbers", "Search recursively", "Invert match"],
    c: 0,
    e: "-i makes grep case-insensitive.",
    de: "grep -i 'error' finds ERROR, error, Error, etc."
  }),
  (_i: number) => ({
    q: "What does `grep -r` do?",
    o: ["Search recursively in directories", "Reverse order", "Read from file", "Raw output"],
    c: 0,
    e: "-r makes grep search recursively through subdirectories.",
    de: "grep -r 'pattern' . searches all files in current directory and below."
  }),
  (_i: number) => ({
    q: "What does `head -20 file.txt` do?",
    o: ["Shows first 20 lines", "Shows first 20 bytes", "Shows last 20 lines", "Shows 20th line"],
    c: 0,
    e: "head shows the beginning of a file. Default is 10 lines.",
    de: "head -n 20 is equivalent. Useful for peeking at large files."
  }),
  (_i: number) => ({
    q: "What does `tail -20 file.txt` do?",
    o: ["Shows last 20 lines", "Shows first 20 lines", "Shows 20th line", "Shows last 20 bytes"],
    c: 0,
    e: "tail shows the end of a file. Default is 10 lines.",
    de: "tail -f follows the file (useful for logs). tail -n 20 is equivalent."
  }),
  (_i: number) => ({
    q: "What does `wc -l file.txt` show?",
    o: ["Line count", "Word count", "Character count", "File size"],
    c: 0,
    e: "wc -l counts lines. wc -w counts words, wc -c counts bytes.",
    de: "wc = word count. wc without options shows lines, words, bytes."
  }),
  (_i: number) => ({
    q: "What does `sort file.txt` do?",
    o: ["Sorts lines alphabetically", "Reverses order", "Removes duplicates", "Counts lines"],
    c: 0,
    e: "sort orders lines. Default is alphabetical. Use -n for numbers.",
    de: "sort -n for numeric sort. sort -r for reverse. sort -u to remove duplicates."
  }),
  (_i: number) => ({
    q: "What does `uniq` require to work correctly?",
    o: ["Sorted input (adjacent duplicates)", "Unique file", "Single column", "Small file"],
    c: 0,
    e: "uniq removes adjacent duplicate lines. Sort first for full deduplication.",
    de: "sort file | uniq removes all duplicates. uniq alone only removes adjacent ones."
  }),
  (_i: number) => ({
    q: "What does `cut -d',' -f1 file.csv` do?",
    o: ["Extracts first column (comma-delimited)", "Deletes first column", "Sorts by first column", "Counts columns"],
    c: 0,
    e: "cut extracts columns. -d sets delimiter, -f selects fields.",
    de: "cut -d',' -f1,3 gets columns 1 and 3. Useful for CSV/TSV."
  }),
  (_i: number) => ({
    q: "What does `tr 'a-z' 'A-Z'` do?",
    o: ["Translates lowercase to uppercase", "Replaces a with z", "Transposes characters", "Trims spaces"],
    c: 0,
    e: "tr translates or deletes characters. Reads from stdin.",
    de: "tr ' ' '\n' replaces spaces with newlines. tr -d 'x' deletes x."
  }),
  (_i: number) => ({
    q: "What does `tee file.txt` do?",
    o: ["Writes stdin to file and stdout", "Creates a pipe", "Appends to file", "Reads from file"],
    c: 0,
    e: "tee copies stdin to both a file and stdout. Like a T-junction.",
    de: "cmd | tee file.txt saves output while displaying it. tee -a appends."
  }),
  (_i: number) => ({
    q: "What does `true` return as exit code?",
    o: ["0", "1", "-1", "255"],
    c: 0,
    e: "true always succeeds with exit code 0.",
    de: "true and false are builtins. while true; do ... done runs forever."
  }),
  (_i: number) => ({
    q: "What does `false` return as exit code?",
    o: ["1 (or non-zero)", "0", "-1", "255"],
    c: 0,
    e: "false always fails with non-zero exit code.",
    de: "Useful for testing: false && echo 'no' (won't print). true || echo 'yes' (will print)."
  }),
  (_i: number) => ({
    q: "What does `command1 && command2` do?",
    o: ["Runs command2 only if command1 succeeds", "Runs both in parallel", "Runs command2 only if command1 fails", "Runs command1 then always command2"],
    c: 0,
    e: "&& runs the second command only if the first exits with 0.",
    de: "Short-circuit evaluation. cmd1 && cmd2 && cmd3 runs left to right until one fails."
  }),
  (_i: number) => ({
    q: "What does `command1 || command2` do?",
    o: ["Runs command2 only if command1 fails", "Runs both in parallel", "Runs command2 only if command1 succeeds", "Runs whichever is faster"],
    c: 0,
    e: "|| runs the second command only if the first exits with non-zero.",
    de: "Fallback pattern: cmd || echo 'failed'. Stops at first success."
  }),
  (_i: number) => ({
    q: "What does `#` start in a shell script?",
    o: ["A comment", "A variable", "A command", "A pipe"],
    c: 0,
    e: "Everything after # on a line is a comment (except in shebang).",
    de: "Comments are ignored by the shell. Use them to document scripts."
  }),
  (_i: number) => ({
    q: "What does `$?` contain?",
    o: ["Exit code of last command", "Process ID", "Number of args", "Current shell PID"],
    c: 0,
    e: "$? is the exit status of the last foreground command.",
    de: "Essential for scripts: if some_cmd; then ... fi. Or: some_cmd && echo success."
  }),
  (_i: number) => ({
    q: "What does `$0` typically contain in a script?",
    o: ["Script name", "First argument", "Last argument", "Argument count"],
    c: 0,
    e: "$0 is the name used to invoke the script.",
    de: "$0 = script name. $1, $2, ... = arguments. $# = number of arguments."
  }),
  (_i: number) => ({
    q: "What does `$1` contain in a script?",
    o: ["First argument", "Script name", "All arguments", "Last argument"],
    c: 0,
    e: "$1 is the first command-line argument passed to the script.",
    de: "myscript.sh foo bar: $1=foo, $2=bar. $@ = all args. $* = all args as one string."
  }),
  (_i: number) => ({
    q: "What does `$#` contain in a script?",
    o: ["Number of arguments", "Script name", "Last argument", "All arguments"],
    c: 0,
    e: "$# is the count of positional parameters (arguments).",
    de: "if [ $# -eq 0 ]; then echo 'usage: ...'; fi checks for no arguments."
  }),
  (_i: number) => ({
    q: "What does `source script.sh` do?",
    o: ["Runs script in current shell (affects env)", "Runs in subshell", "Compiles script", "Checks syntax"],
    c: 0,
    e: "source (or .) runs the script in the current shell, so variables/aliases persist.",
    de: "source .bashrc reloads config. ./script runs in subshell, changes don't persist."
  }),
  (_i: number) => ({
    q: "What does `basename /path/to/file.txt` output?",
    o: ["file.txt", "/path/to/file.txt", "file", ".txt"],
    c: 0,
    e: "basename strips directory and returns just the filename.",
    de: "basename /path/to/file.txt .txt gives 'file'. dirname gives the directory part."
  }),
  (_i: number) => ({
    q: "What does `dirname /path/to/file.txt` output?",
    o: ["/path/to", "file.txt", "/path/to/file", "."],
    c: 0,
    e: "dirname returns the directory part of a path.",
    de: "dirname and basename are useful for path manipulation in scripts."
  }),
  (_i: number) => ({
    q: "What does `readlink -f /path/to/link` do?",
    o: ["Resolves to absolute real path", "Shows link target", "Creates link", "Deletes link"],
    c: 0,
    e: "readlink -f resolves symlinks to the canonical absolute path.",
    de: "Useful when you need the real path. -f = follow recursively, canonicalize."
  }),
  (_i: number) => ({
    q: "What does `file document.pdf` show?",
    o: ["File type (e.g. PDF document)", "File size", "File permissions", "File contents"],
    c: 0,
    e: "file determines file type by examining contents (magic numbers).",
    de: "file uses magic numbers, not extensions. file * shows types of all files."
  }),
  (_i: number) => ({
    q: "What does `stat file.txt` show?",
    o: ["Detailed file metadata", "File contents", "File type only", "File size only"],
    c: 0,
    e: "stat displays inode, permissions, size, timestamps, etc.",
    de: "stat gives access, modify, change times. Useful for debugging and scripts."
  }),
  (_i: number) => ({
    q: "What does `chmod u+x file` do?",
    o: ["Adds execute permission for owner", "Adds execute for all", "Removes execute", "Sets mode 755"],
    c: 0,
    e: "u+x adds execute (x) for the user (owner).",
    de: "u=user, g=group, o=others, a=all. + add, - remove, = set exactly."
  }),
  (_i: number) => ({
    q: "What does `chmod 644 file` set?",
    o: ["rw-r--r-- (owner rw, others r)", "rwxr-xr-x", "r--r--r--", "rwxrwxrwx"],
    c: 0,
    e: "644: owner read+write, group and others read only.",
    de: "6=rw, 4=r, 0=---. Common for regular files. 755 for executables."
  }),
  (_i: number) => ({
    q: "What is a hard link?",
    o: ["Another name for same inode", "A type of symlink", "A copy", "A directory entry"],
    c: 0,
    e: "Hard links are multiple directory entries pointing to the same inode.",
    de: "ln file link creates hard link. Both names refer to same data. Can't link directories."
  }),
  (_i: number) => ({
    q: "What does `du -sh dir` show?",
    o: ["Total disk usage of dir", "File count", "Largest file", "Directory depth"],
    c: 0,
    e: "-s = summary (total), -h = human-readable (K, M, G).",
    de: "du = disk usage. du -sh * shows size of each item in current dir."
  }),
  (_i: number) => ({
    q: "What does `df -h` show?",
    o: ["Disk space of filesystems (human-readable)", "Directory sizes", "File count", "Inode usage"],
    c: 0,
    e: "df = disk free. Shows total, used, available for each mounted filesystem.",
    de: "df -h uses K, M, G. df -i shows inode usage. Essential for monitoring."
  }),
  (_i: number) => ({
    q: "What does `grep -v pattern` do?",
    o: ["Inverts match (lines NOT matching)", "Shows line numbers", "Verbose mode", "Recursive search"],
    c: 0,
    e: "-v prints lines that do NOT match the pattern.",
    de: "grep -v '^#' file shows lines that don't start with # (filter comments)."
  }),
  (_i: number) => ({
    q: "What does `grep -n pattern` do?",
    o: ["Shows line numbers", "Counts matches", "Non-matching lines", "Recursive search"],
    c: 0,
    e: "-n prefixes each line with its line number.",
    de: "Useful for finding where matches occur. grep -n 'error' log.txt"
  }),
  (_i: number) => ({
    q: "What does `grep -c pattern file` do?",
    o: ["Counts matching lines", "Shows matching lines", "Shows context", "Shows line numbers"],
    c: 0,
    e: "-c outputs only the count of matching lines.",
    de: "grep -c 'TODO' *.py counts TODOs per file. Suppresses actual line output."
  }),
  (_i: number) => ({
    q: "What does `wc -w file` show?",
    o: ["Word count", "Line count", "Character count", "Byte count"],
    c: 0,
    e: "wc -w counts words (whitespace-separated).",
    de: "wc = word count. wc -l lines, -w words, -c bytes, -m characters."
  }),
  (_i: number) => ({
    q: "What does `sort -n` do?",
    o: ["Numeric sort", "Reverse sort", "Unique lines only", "Case-insensitive sort"],
    c: 0,
    e: "-n sorts numerically (2 before 10) instead of alphabetically.",
    de: "Without -n, 10 comes before 2 (string sort). sort -n for numbers."
  }),
  (_i: number) => ({
    q: "What does `sort -r` do?",
    o: ["Reverse order", "Remove duplicates", "Random order", "Recursive sort"],
    c: 0,
    e: "-r reverses the sort order (descending).",
    de: "sort -rn sorts numbers in descending order. Combine -r with other options."
  }),
  (_i: number) => ({
    q: "What does `sort -u` do?",
    o: ["Unique lines only (removes duplicates)", "Reverse order", "Case-insensitive", "Numeric sort"],
    c: 0,
    e: "-u outputs only unique lines (like sort | uniq).",
    de: "sort -u is equivalent to sort | uniq. Removes all duplicates after sorting."
  }),
  (_i: number) => ({
    q: "What does `paste file1 file2` do?",
    o: ["Merges lines side-by-side", "Concatenates files", "Compares files", "Removes duplicates"],
    c: 0,
    e: "paste joins corresponding lines from files with tab (default).",
    de: "paste -d',' uses comma. Inverse of cut for combining columns."
  }),
  (_i: number) => ({
    q: "What does `diff file1 file2` show?",
    o: ["Differences between files", "Same lines", "Merged content", "File sizes"],
    c: 0,
    e: "diff shows line-by-line differences. < means file1, > means file2.",
    de: "diff -u gives unified format. diff -r for directories. patch applies diff output."
  }),
  (_i: number) => ({
    q: "What does `find . -name '*.txt'` do?",
    o: ["Finds .txt files in current dir and subdirs", "Finds only in current dir", "Renames files", "Deletes files"],
    c: 0,
    e: "find searches the directory tree. -name matches filename.",
    de: "find . -type f -name '*.txt'. -type d for directories. -mtime for modification time."
  }),
  (_i: number) => ({
    q: "What does `xargs` do?",
    o: ["Converts stdin to command arguments", "Runs commands in parallel", "Expands arguments", "Splits input"],
    c: 0,
    e: "xargs reads items from stdin and passes them as arguments to a command.",
    de: "find . -name '*.txt' | xargs grep pattern. Handles long argument lists."
  }),
  (_i: number) => ({
    q: "What does `man ls` do?",
    o: ["Shows manual page for ls", "Runs ls", "Lists manual pages", "Searches manuals"],
    c: 0,
    e: "man displays the manual (help) page for a command.",
    de: "man -k keyword searches manual descriptions. q to quit. / to search in man."
  }),
  (_i: number) => ({
    q: "What does `help` show in bash?",
    o: ["Builtin command help", "General help", "External command help", "Error messages"],
    c: 0,
    e: "help lists or describes shell builtins. help cd shows cd help.",
    de: "Builtins (cd, echo, export) don't have man pages; use help. help -s cmd shows syntax."
  }),
  (_i: number) => ({
    q: "What does `type ls` show?",
    o: ["How ls would be resolved (alias/function/path)", "File type of ls", "ls manual", "ls version"],
    c: 0,
    e: "type shows whether a name is alias, function, builtin, or file path.",
    de: "type -a shows all matches. type cd shows 'cd is a shell builtin'."
  }),
  (_i: number) => ({
    q: "What does `hash` do in bash?",
    o: ["Shows or manages command path cache", "Creates a hash table", "Hashes a file", "Encrypts input"],
    c: 0,
    e: "hash remembers command locations for faster lookup. hash -r clears cache.",
    de: "After you run a command, the shell caches its path. hash shows the cache."
  }),
  (_i: number) => ({
    q: "What does `ulimit` control?",
    o: ["Resource limits for the shell", "Disk usage", "Network speed", "CPU count"],
    c: 0,
    e: "ulimit sets or displays limits (open files, stack size, etc.).",
    de: "ulimit -n shows max open files. ulimit -u shows max processes. -a shows all."
  }),
  (_i: number) => ({
    q: "What does `umask` set?",
    o: ["Default permission mask for new files", "User mask", "File mode", "Directory mode"],
    c: 0,
    e: "umask specifies which permissions to turn OFF for new files.",
    de: "umask 022: new files get 644, dirs get 755. umask 077: more restrictive."
  }),
  (_i: number) => ({
    q: "What does `env` display?",
    o: ["Environment variables", "Current directory", "Command path", "Shell options"],
    c: 0,
    e: "env shows the current environment. env VAR=val cmd runs cmd with VAR set.",
    de: "env -i cmd runs with empty environment. Useful for clean subshells."
  }),
  (_i: number) => ({
    q: "What does `printenv VAR` do?",
    o: ["Prints value of VAR", "Sets VAR", "Exports VAR", "Unsets VAR"],
    c: 0,
    e: "printenv prints the value of an environment variable.",
    de: "printenv with no args prints all. echo $VAR is similar but VAR can be unset."
  }),
  (_i: number) => ({
    q: "What does `set` show in bash?",
    o: ["Shell options and variables", "Environment only", "Aliases only", "Functions only"],
    c: 0,
    e: "set displays all shell options and variables. set -e exits on error.",
    de: "set -x for debug (echo commands). set -e for fail-fast. set -u for unset error."
  }),
  (_i: number) => ({
    q: "What does `unset VAR` do?",
    o: ["Removes the variable VAR", "Sets VAR to empty", "Exports VAR", "Prints VAR"],
    c: 0,
    e: "unset removes a variable or function from the shell.",
    de: "unset -f removes a function. After unset, variable is gone (not just empty)."
  }),
];

export const level1Patterns = beginner;
export const level1IntermediateA = level1Intermediate.slice(0, 50);
export const level1IntermediateB = level1Intermediate.slice(50, 100);
export const level1ExpertA = level1Expert.slice(0, 50);
export const level1ExpertB = level1Expert.slice(50, 103);
