// LEVEL 1 INTERMEDIATE — Terminal & Shell Foundations (100 unique questions)
// Replaces placeholders. All options are meaningful, no "Option A/B/C/D".

export const level1Intermediate = [
  (_i: number) => ({
    q: "What does `ls -A` show compared to `ls -a`?",
    o: ["All files except . and ..", "Only directories", "Alphabetically sorted", "Access times"],
    c: 0,
    e: "ls -A shows all including hidden, but omits . and ..",
    de: "ls -a includes . and ..; ls -A omits them. Useful in scripts to avoid listing . and .."
  }),
  (_i: number) => ({
    q: "What does `ls -R` do?",
    o: ["Lists recursively into subdirectories", "Reverse sort order", "Read-only mode", "Refresh display"],
    c: 0,
    e: "-R lists contents of subdirectories recursively.",
    de: "ls -R descends into each subdirectory. tree is often clearer for hierarchy."
  }),
  (_i: number) => ({
    q: "What does `ls -t` do?",
    o: ["Sorts by modification time (newest first)", "Shows file types", "Tab-separated output", "Total size"],
    c: 0,
    e: "-t sorts by modification time, newest first.",
    de: "ls -lt combines long format with time sort. ls -ltr reverses (oldest first)."
  }),
  (_i: number) => ({
    q: "What does `ls -S` do?",
    o: ["Sorts by file size (largest first)", "Shows only symlinks", "Single-column output", "Summary only"],
    c: 0,
    e: "-S sorts by size, largest first. Use with -h for human-readable.",
    de: "ls -lS shows long format sorted by size. Useful to find large files."
  }),
  (_i: number) => ({
    q: "What does `ls -h` do?",
    o: ["Human-readable sizes (K, M, G)", "Show hidden files", "Highlight matches", "Hexadecimal mode"],
    c: 0,
    e: "-h shows sizes as 1K, 234M, 2G instead of raw bytes.",
    de: "ls -lh is common. -h works with du and df too."
  }),
  (_i: number) => ({
    q: "What does `ls -d` do?",
    o: ["Lists directories as entries, not their contents", "Shows only directories", "Debug mode", "Delete empty dirs"],
    c: 0,
    e: "-d lists the directory itself, not its contents.",
    de: "ls -d */ lists directory names. ls -d . shows current dir path."
  }),
  (_i: number) => ({
    q: "What does `!!` expand to in bash history?",
    o: ["The entire previous command", "Last argument only", "Last command's exit code", "Nothing"],
    c: 0,
    e: "!! is replaced by the full previous command line.",
    de: "sudo !! re-runs last command with sudo. !$ is last argument."
  }),
  (_i: number) => ({
    q: "What does `!$` expand to?",
    o: ["Last argument of previous command", "Last command", "Last exit code", "Last directory"],
    c: 0,
    e: "!$ is the last word (argument) of the previous command.",
    de: "mkdir foo && cd !$ creates foo and cds into it. !* is all args."
  }),
  (_i: number) => ({
    q: "What does `fc -l` do?",
    o: ["Lists recent command history", "Loads a file", "Locks the terminal", "Lists files"],
    c: 0,
    e: "fc -l lists recent history. fc -l -10 shows last 10.",
    de: "fc is a builtin for editing/re-running commands. fc -e - runs previous."
  }),
  (_i: number) => ({
    q: "In bash, what does single-quote `'` prevent?",
    o: ["All expansion (variables, commands, etc.)", "Only variable expansion", "Only globbing", "Only history expansion"],
    c: 0,
    e: "Single quotes preserve everything literally. No $VAR, no $(cmd).",
    de: "echo '$HOME' prints $HOME. Use double quotes for selective expansion."
  }),
  (_i: number) => ({
    q: "What does `$(cmd)` do?",
    o: ["Runs cmd and substitutes its output", "Runs cmd in background", "Defines a variable", "Comments out cmd"],
    c: 0,
    e: "Command substitution: output of cmd replaces $(cmd) in the line.",
    de: "echo $(date) prints current date. Prefer $( ) over backticks."
  }),
  (_i: number) => ({
    q: "What does `$((1+2))` evaluate to?",
    o: ["3", "1+2", "12", "Error"],
    c: 0,
    e: "Arithmetic expansion. $((expr)) evaluates the expression.",
    de: "echo $((2*3)) prints 6. Variables allowed: $((x+y))."
  }),
  (_i: number) => ({
    q: "What does `echo {1..5}` expand to?",
    o: ["1 2 3 4 5", "{1..5}", "1 5", "Error"],
    c: 0,
    e: "Brace expansion. {1..5} generates 1 2 3 4 5.",
    de: "mkdir dir{1..3} creates dir1 dir2 dir3. {a..z} for letters."
  }),
  (_i: number) => ({
    q: "What does `command -v ls` show?",
    o: ["Path to ls or 'ls is a shell builtin'", "ls version", "Whether ls exists (0/1)", "ls manual"],
    c: 0,
    e: "command -v shows how a command would be resolved.",
    de: "Preferred over which for scripts. command -v foo || { echo 'not found'; exit 1; }"
  }),
  (_i: number) => ({
    q: "What does `set -e` do in a script?",
    o: ["Exit immediately if any command fails", "Enable debugging", "Echo commands", "Enable errexit display"],
    c: 0,
    e: "set -e makes the script exit on first non-zero exit code.",
    de: "Fail-fast. Use set +e to disable. Often combined with set -u."
  }),
  (_i: number) => ({
    q: "What does `set -u` do?",
    o: ["Treat unset variables as errors", "Enable Unicode", "Unset all variables", "Update PATH"],
    c: 0,
    e: "set -u causes error on use of unset variable.",
    de: "Prevents typos like $FILENAME when you meant $FILENAM. set +u disables."
  }),
  (_i: number) => ({
    q: "What does `set -x` do?",
    o: ["Print each command before executing", "Export all variables", "Enable extra options", "Expand globs"],
    c: 0,
    e: "set -x prints commands as they are executed (debug mode).",
    de: "Useful for debugging scripts. set +x turns it off."
  }),
  (_i: number) => ({
    q: "What does `read -r line` do?",
    o: ["Reads a line without treating \\ specially", "Reads in reverse", "Reads raw bytes", "Reads recursively"],
    c: 0,
    e: "-r prevents backslash from escaping the next character.",
    de: "Always use read -r in scripts. read -r prevents \\n from becoming newline."
  }),
  (_i: number) => ({
    q: "What does `cmd &` do?",
    o: ["Runs cmd in background", "Runs cmd and waits", "Runs cmd with & as arg", "Runs cmd in subshell"],
    c: 0,
    e: "& at end runs the command in the background.",
    de: "You get the prompt back. Use fg to bring to foreground, jobs to list."
  }),
  (_i: number) => ({
    q: "What does `jobs` show?",
    o: ["List of background and stopped jobs", "List of all processes", "Job queue", "Completed jobs"],
    c: 0,
    e: "jobs lists jobs started in the current shell.",
    de: "jobs -l shows PIDs. fg %1 brings job 1 to foreground."
  }),
  (_i: number) => ({
    q: "What does `nohup cmd` do?",
    o: ["Runs cmd immune to hangup signal", "Runs cmd with no output", "Runs cmd once", "Runs cmd in nohup mode"],
    c: 0,
    e: "nohup keeps cmd running after you log out.",
    de: "Output goes to nohup.out by default. nohup cmd & for background."
  }),
  (_i: number) => ({
    q: "What is the exit code of `true`?",
    o: ["0", "1", "-1", "255"],
    c: 0,
    e: "true always exits with 0 (success).",
    de: "while true; do ...; done for infinite loops. false exits 1."
  }),
  (_i: number) => ({
    q: "What does `[ -f file ]` test?",
    o: ["Whether file exists and is regular", "Whether file is full", "Whether file is formatted", "Whether file is first"],
    c: 0,
    e: "-f tests: exists and is a regular file (not dir, not symlink to dir).",
    de: "[ -d dir ] for directory. [ -e path ] for any existence."
  }),
  (_i: number) => ({
    q: "What does `[[ a == b ]]` do in bash?",
    o: ["Tests if a equals b (no word splitting)", "Runs a command", "Assigns b to a", "Compares files"],
    c: 0,
    e: "[[ ]] is bash keyword; no word splitting, supports =~ for regex.",
    de: "Prefer [[ ]] over [ ] in bash. [[ $x == *.txt ]] does pattern match."
  }),
  (_i: number) => ({
    q: "What does `$?` contain after a command?",
    o: ["Exit code of last command", "Process ID", "Number of args", "Current shell PID"],
    c: 0,
    e: "$? is the exit status of the most recently executed command.",
    de: "0 = success. if cmd; then ... checks $? implicitly."
  }),
  (_i: number) => ({
    q: "What does `$$` expand to?",
    o: ["PID of current shell", "Parent PID", "Last background PID", "Process count"],
    c: 0,
    e: "$$ is the process ID of the current shell.",
    de: "Use for temp files: /tmp/script.$$.tmp"
  }),
  (_i: number) => ({
    q: "What does `$!` contain?",
    o: ["PID of last background process", "Last exit code", "Last argument", "Last command"],
    c: 0,
    e: "$! is the PID of the most recently started background job.",
    de: "wait $! waits for last background job. Useful for parallel scripts."
  }),
  (_i: number) => ({
    q: "What does `$#` contain in a script?",
    o: ["Number of positional parameters", "Number of lines", "Hash of args", "Last argument index"],
    c: 0,
    e: "$# is the count of arguments passed to the script.",
    de: "./script a b c gives $# = 3. $1, $2, $3 are the args."
  }),
  (_i: number) => ({
    q: "What does `$@` expand to (in double quotes)?",
    o: ["Each argument as separate quoted word", "All args as one string", "First argument", "Last argument"],
    c: 0,
    e: '"$@" expands to "$1" "$2" "$3" ... preserving each as separate.',
    de: 'Use "$@" to pass args through. "$*" joins with first char of IFS.'
  }),
  (_i: number) => ({
    q: "What does `shift` do in a script?",
    o: ["Drops $1 and shifts remaining args down", "Shifts to next directory", "Shifts output", "Shifts variable"],
    c: 0,
    e: "shift removes $1; $2 becomes $1, $3 becomes $2, etc.",
    de: "while [ $# -gt 0 ]; do ...; shift; done to process args."
  }),
  (_i: number) => ({
    q: "What does `source script.sh` do?",
    o: ["Runs script in current shell (affects env)", "Runs in subshell", "Loads script as library", "Compiles script"],
    c: 0,
    e: "source (or .) runs the script in the current shell.",
    de: "Variables and cd persist. . script.sh is equivalent."
  }),
  (_i: number) => ({
    q: "What does `trap 'cmd' EXIT` do?",
    o: ["Runs cmd when script exits (normal or signal)", "Traps errors only", "Traps signals only", "Runs cmd on error"],
    c: 0,
    e: "trap runs the command when the script exits.",
    de: "trap 'rm -f /tmp/foo' EXIT cleans up. trap - EXIT removes."
  }),
  (_i: number) => ({
    q: "What does `exec cmd` do?",
    o: ["Replaces shell with cmd (no return)", "Runs cmd and returns", "Executes cmd in subshell", "Exports cmd"],
    c: 0,
    e: "exec replaces the current process with cmd. Script ends when cmd ends.",
    de: "exec ls runs ls in place of shell. No return to script."
  }),
  (_i: number) => ({
    q: "What does `local x=1` do?",
    o: ["Creates a local variable in a function", "Sets global x", "Creates x in subshell", "Locks variable x"],
    c: 0,
    e: "local restricts the variable to the current function scope.",
    de: "Without local, function vars leak to global. Must be inside function."
  }),
  (_i: number) => ({
    q: "What does `return 1` do in a function?",
    o: ["Exits function with exit code 1", "Returns value 1", "Goes to line 1", "Restarts function"],
    c: 0,
    e: "return sets the function's exit status (like exit for scripts).",
    de: "Use return for status. For output, use echo and capture with $(func)."
  }),
  (_i: number) => ({
    q: "What does `: ${VAR:=default}` do?",
    o: ["Sets VAR to default if unset or empty", "Unsets VAR", "Exports VAR", "Prints VAR"],
    c: 0,
    e: ":= assigns default when VAR is unset or empty. : is no-op that evaluates.",
    de: ": ${EDITOR:=nano} ensures EDITOR has a value."
  }),
  (_i: number) => ({
    q: "What does `${var#pattern}` do?",
    o: ["Removes shortest prefix matching pattern", "Removes suffix", "Searches for pattern", "Replaces pattern"],
    c: 0,
    e: "var#pattern removes shortest prefix. ## removes longest. file.txt with #.* -> txt",
    de: "# removes shortest; ## removes longest. % and %% for suffix."
  }),
  (_i: number) => ({
    q: "What does `${var%.txt}` do?",
    o: ["Removes .txt suffix if present", "Adds .txt", "Searches for .txt", "Replaces .txt"],
    c: 0,
    e: "% removes shortest suffix. file.txt -> file.",
    de: "base=${file%.*} gets name without extension. %% for longest match."
  }),
  (_i: number) => ({
    q: "What does `${#var}` give?",
    o: ["Length of var (character count)", "Number of words", "Hash of var", "Index of var"],
    c: 0,
    e: "${#var} is the length of the string in var.",
    de: "echo ${#s} for string length. ${#array[@]} for array length."
  }),
  (_i: number) => ({
    q: "What does `[[ -z $var ]]` test?",
    o: ["Whether var is empty or unset", "Whether var is zero", "Whether var exists", "Whether var is numeric"],
    c: 0,
    e: "-z is true if string has zero length.",
    de: "[[ -n $var ]] is true if non-empty. -z and -n for string tests."
  }),
  (_i: number) => ({
    q: "What does `[[ -n $var ]]` test?",
    o: ["Whether var is non-empty", "Whether var is numeric", "Whether var is new", "Whether var is set"],
    c: 0,
    e: "-n is true if string has non-zero length.",
    de: "Prefer [[ -n $var ]] over [[ $var != '' ]]."
  }),
  (_i: number) => ({
    q: "What does `[ -d path ]` test?",
    o: ["Whether path exists and is a directory", "Whether path is empty", "Whether path is default", "Whether path is deleted"],
    c: 0,
    e: "-d tests: exists and is a directory.",
    de: "if [ -d /tmp ]; then ... Common in install scripts."
  }),
  (_i: number) => ({
    q: "What does `[ -e path ]` test?",
    o: ["Whether path exists (any type)", "Whether path is executable", "Whether path is empty", "Whether path is editable"],
    c: 0,
    e: "-e tests existence of any file/dir/symlink.",
    de: "[ -e file ] is broader than [ -f file ]. -a is deprecated alias."
  }),
  (_i: number) => ({
    q: "What does `[ -x file ]` test?",
    o: ["Whether file exists and is executable", "Whether file is executable by all", "Whether file is exportable", "Whether file is extra"],
    c: 0,
    e: "-x tests: file exists and has execute permission.",
    de: "if [ -x ./script ]; then ./script; fi"
  }),
  (_i: number) => ({
    q: "What does `[ -r file ]` test?",
    o: ["Whether file exists and is readable", "Whether file is recent", "Whether file is root-owned", "Whether file is relative"],
    c: 0,
    e: "-r tests read permission for the current user.",
    de: "Test before reading: [ -r config ] && cat config"
  }),
  (_i: number) => ({
    q: "What does `[ -w file ]` test?",
    o: ["Whether file exists and is writable", "Whether file is wide", "Whether file is a word", "Whether file is watched"],
    c: 0,
    e: "-w tests write permission.",
    de: "[ -w /tmp ] before writing temp files."
  }),
  (_i: number) => ({
    q: "What does `[ -s file ]` test?",
    o: ["Whether file exists and has size > 0", "Whether file is a script", "Whether file is a symlink", "Whether file is secure"],
    c: 0,
    e: "-s is true if file exists and is non-empty.",
    de: "[ -s log ] && tail log vs [ ! -s log ] for empty check."
  }),
  (_i: number) => ({
    q: "What does `[ -L path ]` test?",
    o: ["Whether path is a symbolic link", "Whether path is a log", "Whether path is long", "Whether path is last"],
    c: 0,
    e: "-L tests if path is a symlink (even if broken).",
    de: "[ -L /usr/bin/python ] checks for symlink."
  }),
  (_i: number) => ({
    q: "What does `[ str1 = str2 ]` test?",
    o: ["String equality", "Assignment", "Approximate match", "Pattern match"],
    c: 0,
    e: "= tests if two strings are equal. Use == in [[ ]].",
    de: "[ \"$a\" = \"$b\" ]. Quote variables to avoid word splitting."
  }),
  (_i: number) => ({
    q: "What does `[ 5 -lt 10 ]` test?",
    o: ["5 is less than 10", "5 is greater than 10", "5 equals 10", "5 is not 10"],
    c: 0,
    e: "-lt is less than. -le, -eq, -ne, -gt, -ge for numeric comparison.",
    de: "Use -lt not < in [ ] (redirect). [[ 5 -lt 10 ]] or [[ 5 < 10 ]]."
  }),
  (_i: number) => ({
    q: "What does `[[ $x =~ ^[0-9]+$ ]]` test?",
    o: ["x matches regex (digits only)", "x equals regex", "x is numeric", "x is positive"],
    c: 0,
    e: "=~ is regex match. Right side is extended regex.",
    de: "[[ $num =~ ^[0-9]+$ ]] for integer check. No quotes on regex."
  }),
  (_i: number) => ({
    q: "What does `ls -1` do?",
    o: ["One entry per line (single column)", "List one file", "First file only", "One directory level"],
    c: 0,
    e: "-1 forces one file per line (default when not a terminal).",
    de: "ls -1 is like ls | cat. Useful for piping to xargs."
  }),
  (_i: number) => ({
    q: "What does `ls -F` add?",
    o: ["Type indicators (/ * @ etc.)", "Full path", "File sizes", "Format codes"],
    c: 0,
    e: "-F appends / for dirs, * for executables, @ for symlinks.",
    de: "ls -F is like ls --indicator-style=classify."
  }),
  (_i: number) => ({
    q: "What does `ls -i` show?",
    o: ["Inode number for each file", "Index", "File ID", "Instance count"],
    c: 0,
    e: "-i prints the inode number before each filename.",
    de: "Hard links share inode. ls -i shows which files are linked."
  }),
  (_i: number) => ({
    q: "What does `ls -m` do?",
    o: ["Comma-separated list", "Month only", "Minimal output", "Merge directories"],
    c: 0,
    e: "-m fills width with comma-separated names.",
    de: "ls -m for compact horizontal listing."
  }),
  (_i: number) => ({
    q: "What does `ls -r` do?",
    o: ["Reverse sort order", "Recursive", "Read-only", "Relative paths"],
    c: 0,
    e: "-r reverses the sort order.",
    de: "ls -lr reverses long listing. ls -ltr by time reversed."
  }),
  (_i: number) => ({
    q: "What does `ls -u` use for sorting with -t?",
    o: ["Access time instead of modification time", "User sort", "Unique only", "Unicode sort"],
    c: 0,
    e: "-u with -t sorts by access time (atime).",
    de: "ls -ltu sorts by atime. touch updates mtime."
  }),
  (_i: number) => ({
    q: "What does `ls -X` do?",
    o: ["Sort by extension", "Exclude pattern", "Extra info", "Export format"],
    c: 0,
    e: "-X sorts alphabetically by extension.",
    de: "file.c, file.h, file.o grouped together."
  }),
  (_i: number) => ({
    q: "What does `ls -B` do?",
    o: ["Ignore backups (files ending with ~)", "Brief format", "Block size", "Binary mode"],
    c: 0,
    e: "-B (GNU) ignores files ending with ~.",
    de: "ls -B excludes emacs backup files."
  }),
  (_i: number) => ({
    q: "What does `ls -C` do?",
    o: ["Column format (default for terminal)", "Clear screen", "Count only", "Case-sensitive"],
    c: 0,
    e: "-C lists in columns (default when output is a terminal).",
    de: "ls -C vs ls -1. -x fills by row."
  }),
  (_i: number) => ({
    q: "What does `ls -U` do?",
    o: ["Unsorted (directory order)", "Uppercase only", "Unique", "User format"],
    c: 0,
    e: "-U leaves order as in directory (no sort).",
    de: "Faster. Order may vary by filesystem."
  }),
  (_i: number) => ({
    q: "What does `ls -N` do (GNU)?",
    o: ["Don't quote names", "Numeric sort", "No color", "New format"],
    c: 0,
    e: "-N (GNU) prints raw names without quoting.",
    de: "Useful when piping to other commands."
  }),
  (_i: number) => ({
    q: "What does `ls -Z` do (SELinux)?",
    o: ["Shows SELinux security context", "Zero size only", "Compressed", "Zulu time"],
    c: 0,
    e: "-Z displays SELinux context (user:role:type).",
    de: "On SELinux systems. ls -lZ for context with long format."
  }),
  (_i: number) => ({
    q: "What does `ls --color=auto` do?",
    o: ["Colors output when to a terminal", "Always color", "Never color", "Auto-detect terminal"],
    c: 0,
    e: "Colors only when output goes to a terminal.",
    de: "ls | cat loses color. Default on many distros."
  }),
  (_i: number) => ({
    q: "What does `ls -b` do?",
    o: ["Escapes non-printable chars (\\n etc.)", "Brief format", "Block size", "Binary"],
    c: 0,
    e: "-b shows \\n, \\t etc. for special characters in names.",
    de: "Useful for filenames with newlines or control chars."
  }),
  (_i: number) => ({
    q: "What does `ls -q` do?",
    o: ["Print ? for non-printable chars", "Quiet mode", "Quick format", "Quote names"],
    c: 0,
    e: "-q replaces non-printable with ?.",
    de: "Safer for broken terminal or weird filenames."
  }),
  (_i: number) => ({
    q: "What does `HISTFILE` control?",
    o: ["Path to history file", "History size", "History format", "History mode"],
    c: 0,
    e: "HISTFILE is where bash stores command history.",
    de: "Default ~/.bash_history. HISTSIZE limits lines in memory."
  }),
  (_i: number) => ({
    q: "What does `HISTSIZE` control?",
    o: ["Number of commands kept in memory", "File size of history", "History format", "History file path"],
    c: 0,
    e: "HISTSIZE is max number of commands in history list.",
    de: "HISTFILESIZE is for file. Increase for longer history."
  }),
  (_i: number) => ({
    q: "What does `HISTCONTROL=ignorespace` do?",
    o: ["Skips commands starting with space", "Ignores duplicates", "Ignores empty", "Ignores comments"],
    c: 0,
    e: "Lines starting with space are not saved to history.",
    de: "Use for passwords: ' mysql -p' won't be in history."
  }),
  (_i: number) => ({
    q: "What does `HISTCONTROL=ignoredups` do?",
    o: ["Skips consecutive duplicate commands", "Skips all duplicates", "Ignores duplicates in file", "Ignores duplicate args"],
    c: 0,
    e: "Consecutive identical commands are not both saved.",
    de: "ignoreboth = ignorespace + ignoredups."
  }),
  (_i: number) => ({
    q: "What does `!n` expand to (history)?",
    o: ["Command number n from history", "Last n commands", "Command with n args", "Nth argument"],
    c: 0,
    e: "!42 runs command #42 from history.",
    de: "history shows numbers. !-1 is previous, !-2 is before that."
  }),
  (_i: number) => ({
    q: "What does `!?str?` expand to?",
    o: ["Most recent command containing str", "Command starting with str", "Command ending with str", "Command matching str exactly"],
    c: 0,
    e: "!?str? runs the most recent command containing str.",
    de: "!?grep? re-runs last command with grep in it."
  }),
  (_i: number) => ({
    q: "What does `^old^new` do?",
    o: ["Re-runs last command with old replaced by new", "Substitutes in history", "Edits current line", "Replaces in file"],
    c: 0,
    e: "^^ is shorthand: ^old^new runs !!:s/old/new/.",
    de: "echo foo bar -> ^foo^baz -> echo baz bar"
  }),
  (_i: number) => ({
    q: "What does `!!:s/old/new/` do?",
    o: ["Re-runs last command with first old→new", "Saves to history", "Searches history", "Substitutes in file"],
    c: 0,
    e: "!!:s/old/new/ substitutes first occurrence in last command.",
    de: "!!:gs/old/new/ for global (all occurrences)."
  }),
  (_i: number) => ({
    q: "What does `!$:h` give?",
    o: ["Directory part of last argument", "Head of last arg", "History of last", "Home of last"],
    c: 0,
    e: ":h removes the last path component (head of path).",
    de: "cd /a/b/c then !$:h -> /a/b. :t is tail (filename)."
  }),
  (_i: number) => ({
    q: "What does `!$:t` give?",
    o: ["Filename part of last argument", "Tail of last", "Type of last", "Time of last"],
    c: 0,
    e: ":t is the tail (last component) of the path.",
    de: "/a/b/file.txt -> file.txt. :r removes extension."
  }),
  (_i: number) => ({
    q: "What does `!$:r` give?",
    o: ["Last argument with extension removed", "Root of path", "Reverse of last", "Rest of last"],
    c: 0,
    e: ":r removes the extension (file.txt -> file).",
    de: "file.txt -> file. :e would give extension."
  }),
  (_i: number) => ({
    q: "What does `!*` expand to?",
    o: ["All arguments of previous command", "Last argument", "All history", "All matches"],
    c: 0,
    e: "!* is all words from the previous command (excluding the command itself).",
    de: "cp file1 file2 dir then mv !* backup/"
  }),
  (_i: number) => ({
    q: "What does `!^` expand to?",
    o: ["First argument of previous command", "Last command", "First command", "First match"],
    c: 0,
    e: "!^ is the first argument of the previous command.",
    de: "!$ is last, !^ is first, !* is all."
  }),
  (_i: number) => ({
    q: "What does `cd -- -` do?",
    o: ["Go to directory named -", "Go to previous dir", "Go to home", "Invalid"],
    c: 0,
    e: "cd -- - treats - as a literal directory name.",
    de: "-- ends options. cd - is previous dir; cd -- - is dir named -."
  }),
  (_i: number) => ({
    q: "What does `pushd dir` do?",
    o: ["Saves current dir, then cd to dir", "Pushes dir onto stack", "Creates dir", "Prints dir"],
    c: 0,
    e: "pushd saves current directory and changes to dir.",
    de: "dirs shows stack. popd returns. pushd with no arg swaps top two."
  }),
  (_i: number) => ({
    q: "What does `popd` do?",
    o: ["Returns to directory from top of stack", "Pops directory", "Removes current dir", "Prints stack"],
    c: 0,
    e: "popd removes top of dir stack and cds there.",
    de: "pushd/popd for directory stack. dirs to view."
  }),
  (_i: number) => ({
    q: "What does `dirs` show?",
    o: ["Directory stack (pushd/popd)", "All directories", "Current dir only", "Directory size"],
    c: 0,
    e: "dirs lists the directory stack.",
    de: "dirs -v for numbered. pushd +2 goes to that entry."
  }),
  (_i: number) => ({
    q: "What does `hash -r` do?",
    o: ["Clears the command path cache", "Removes a command", "Refreshes hash", "Resets PATH"],
    c: 0,
    e: "hash -r forgets all cached command locations.",
    de: "Use after installing new command or changing PATH."
  }),
  (_i: number) => ({
    q: "What does `hash -t cmd` show?",
    o: ["Cached path for cmd", "Type of cmd", "Time for cmd", "Table for cmd"],
    c: 0,
    e: "hash -t ls shows the cached path for ls.",
    de: "hash with no args shows all cached commands."
  }),
  (_i: number) => ({
    q: "What does `enable -n cmd` do (bash)?",
    o: ["Disables builtin cmd", "Enables cmd", "Names cmd", "Negates cmd"],
    c: 0,
    e: "enable -n disables a builtin so external command is used.",
    de: "enable -n echo uses /bin/echo. enable echo restores."
  }),
  (_i: number) => ({
    q: "What does `enable -a` show?",
    o: ["All builtins (enabled and disabled)", "Active builtins", "All commands", "Aliases"],
    c: 0,
    e: "enable -a lists all builtins with status.",
    de: "enable shows enabled. enable -n disables."
  }),
  (_i: number) => ({
    q: "What does `times` show?",
    o: ["User and system CPU time used by shell", "Current time", "Number of commands", "Time limits"],
    c: 0,
    e: "times prints accumulated user and system times.",
    de: "Useful for benchmarking. time cmd for single command."
  }),
  (_i: number) => ({
    q: "What does `disown` do?",
    o: ["Removes job from shell's job table", "Disowns a file", "Disables job control", "Dismisses job"],
    c: 0,
    e: "disown removes job from list; it won't receive SIGHUP on logout.",
    de: "disown %1 or disown. Job keeps running after shell exits."
  }),
  (_i: number) => ({
    q: "What does `wait` with no args do?",
    o: ["Waits for all background jobs", "Waits forever", "Waits for next job", "Does nothing"],
    c: 0,
    e: "wait waits for all background jobs to complete.",
    de: "wait $! waits for last background. wait 1234 for PID."
  }),
  (_i: number) => ({
    q: "What does `suspend` do?",
    o: ["Stops the shell (like Ctrl+Z)", "Pauses a job", "Suspends output", "Stops script"],
    c: 0,
    e: "suspend stops the current shell until it receives SIGCONT.",
    de: "In subshell (e.g. from script), suspend stops that shell."
  }),
  (_i: number) => ({
    q: "What does `getopts` do?",
    o: ["Parses positional parameters as options", "Gets options from file", "Gets optional args", "Gets opt string"],
    c: 0,
    e: "getopts parses -a -b val style options in scripts.",
    de: "while getopts 'ab:c' opt; do ... OPTIND, OPTARG."
  }),
  (_i: number) => ({
    q: "What does `readonly VAR=1` do?",
    o: ["Creates read-only variable", "Reads VAR from file", "Reads once", "Restricts write"],
    c: 0,
    e: "readonly makes the variable immutable.",
    de: "readonly x=1; x=2 fails. declare -r same effect."
  }),
  (_i: number) => ({
    q: "What does `declare -i x` do?",
    o: ["Makes x an integer (arithmetic in assignments)", "Initializes x to 0", "Imports x", "Indexes x"],
    c: 0,
    e: "declare -i makes variable integer; x=2+3 stores 5.",
    de: "x=hello stores 0. declare -a for arrays."
  }),
  (_i: number) => ({
    q: "What does `declare -a arr` do?",
    o: ["Creates indexed array", "Creates associative array", "Adds to array", "Assigns array"],
    c: 0,
    e: "declare -a creates an indexed array.",
    de: "arr=(a b c). declare -A for associative (bash 4+)."
  }),
  (_i: number) => ({
    q: "What does `arr=(a b c)` create?",
    o: ["Indexed array with 3 elements", "String a b c", "Associative array", "Three variables"],
    c: 0,
    e: "arr=(a b c) creates array: arr[0]=a, arr[1]=b, arr[2]=c.",
    de: "echo ${arr[1]} -> b. ${arr[@]} all elements."
  }),
  (_i: number) => ({
    q: "What does `${arr[@]}` expand to?",
    o: ["All array elements (each quoted separately)", "First element", "Array length", "Last element"],
    c: 0,
    e: '"${arr[@]}" gives each element as separate word.',
    de: '"${arr[*]}" joins with IFS. Use @ for proper word splitting.'
  }),
  (_i: number) => ({
    q: "What does `${!arr[@]}` expand to?",
    o: ["Array indices (keys)", "Array values", "Array length", "Inverted array"],
    c: 0,
    e: "${!arr[@]} lists the indices of set elements.",
    de: "for i in ${!arr[@]}; do echo $i ${arr[$i]}; done"
  }),
  (_i: number) => ({
    q: "What does `mapfile arr < file` do?",
    o: ["Reads file lines into array", "Maps file to array", "Reads file into arr", "Creates array from file"],
    c: 0,
    e: "mapfile (or readarray) reads lines of file into array.",
    de: "mapfile -t arr < file (strip newlines). Each line = one element."
  }),
  (_i: number) => ({
    q: "What does `( cmd )` do?",
    o: ["Runs cmd in subshell", "Groups cmd", "Runs in background", "Runs in foreground"],
    c: 0,
    e: "( ) runs in a subshell. Variables don't affect parent.",
    de: "(cd /tmp; pwd) then pwd still shows original dir."
  }),
  (_i: number) => ({
    q: "What does `{ cmd; }` do?",
    o: ["Runs cmd in current shell (grouping)", "Runs in subshell", "Creates block", "Runs in background"],
    c: 0,
    e: "{ } groups commands in current shell. Need ; before }.",
    de: "{ cd /tmp; ls; } affects current shell. ( ) would not."
  }),
  (_i: number) => ({
    q: "What does `coproc cmd` do (bash 4+)?",
    o: ["Runs cmd as coprocess with pipes", "Runs in background", "Copies process", "Runs in parallel"],
    c: 0,
    e: "coproc creates a two-way pipe to cmd.",
    de: "coproc mycmd; echo to >&${mycmd[1]}; read from <&${mycmd[0]}"
  }),
  (_i: number) => ({
    q: "What does `<(cmd)` do (process substitution)?",
    o: ["Feeds cmd output as a file path", "Runs cmd in subshell", "Redirects to cmd", "Pipes to cmd"],
    c: 0,
    e: "<(cmd) creates a FIFO; path is passed where a filename is expected.",
    de: "diff <(ls dir1) <(ls dir2) compares directory listings."
  }),
  (_i: number) => ({
    q: "What does `>(cmd)` do (process substitution)?",
    o: ["Feeds output to cmd's stdin as if writing to file", "Runs cmd first", "Redirects to file", "Pipes from cmd"],
    c: 0,
    e: ">(cmd) connects stdout to cmd's stdin.",
    de: "echo foo > >(cat) sends foo to cat. Useful for tee-like flows."
  }),
];
