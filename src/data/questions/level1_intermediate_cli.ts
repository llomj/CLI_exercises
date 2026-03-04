// LEVEL 1 INTERMEDIATE — Terminal & Shell Foundations (100 unique questions)
// Replaces placeholders. All options are meaningful, no "Option A/B/C/D".

export const level1Intermediate = [
  (_i: number) => ({
    q: "What does `ls -A` show compared to `ls -a`?",
    o: ["All files except . and ..", "Only directories", "Alphabetically sorted", "Access times"],
    c: 0,
    e: "ls -A shows all including hidden, but omits . and ..",
    de: "ls -a includes . and ..; ls -A omits them. Useful in scripts to avoid listing . and ..",
    deBeginner: "ls -A shows all files including hidden ones, but does not list . and .. (current and parent dir). Handy in scripts.",
    deExpert: "ls -a includes . and ..; -A omits them. Scripts often use -A to avoid . and .. in loops. POSIX -a; -A is common extension."
  }),
  (_i: number) => ({
    q: "What does `ls -R` do?",
    o: ["Lists recursively into subdirectories", "Reverse sort order", "Read-only mode", "Refresh display"],
    c: 0,
    e: "-R lists contents of subdirectories recursively.",
    de: "ls -R descends into each subdirectory. tree is often clearer for hierarchy.",
    deBeginner: "ls -R lists the current directory and then every subdirectory inside it. tree is another command that shows a nicer tree view.",
    deExpert: "ls -R: recursive. Walks directory tree, prints each dir's contents. Order depth-first. tree(1) gives clearer hierarchy. Large dirs can be slow."
  }),
  (_i: number) => ({
    q: "What does `ls -t` do?",
    o: ["Sorts by modification time (newest first)", "Shows file types", "Tab-separated output", "Total size"],
    c: 0,
    e: "-t sorts by modification time, newest first.",
    de: "ls -lt combines long format with time sort. ls -ltr reverses (oldest first).",
    deBeginner: "ls -t sorts by time: newest files first. ls -lt shows long format with time sort. ls -ltr reverses to oldest first.",
    deExpert: "ls -t: sort by mtime, newest first. -u with -t uses atime. -lt common. -ltr oldest first. Useful for recent files."
  }),
  (_i: number) => ({
    q: "What does `ls -S` do?",
    o: ["Sorts by file size (largest first)", "Shows only symlinks", "Single-column output", "Summary only"],
    c: 0,
    e: "-S sorts by size, largest first. Use with -h for human-readable.",
    de: "ls -lS shows long format sorted by size. Useful to find large files.",
    deBeginner: "ls -S sorts by file size, largest first. Use with -l and -h: ls -lhS to see biggest files at the top.",
    deExpert: "ls -S: sort by size descending. -lS for long format. Find large files. -h for human-readable. Block size vs apparent size in some ls."
  }),
  (_i: number) => ({
    q: "What does `ls -h` do?",
    o: ["Human-readable sizes (K, M, G)", "Show hidden files", "Highlight matches", "Hexadecimal mode"],
    c: 0,
    e: "-h shows sizes as 1K, 234M, 2G instead of raw bytes.",
    de: "ls -lh is common. -h works with du and df too.",
    deBeginner: "ls -h shows file sizes in human form: 1K, 234M, 2G instead of big numbers. ls -lh is very common.",
    deExpert: "ls -h: human-readable sizes (K,M,G,T). -lh standard. SI units. du -h, df -h same. -h only affects display, not sort."
  }),
  (_i: number) => ({
    q: "What does `ls -d` do?",
    o: ["Lists directories as entries, not their contents", "Shows only directories", "Debug mode", "Delete empty dirs"],
    c: 0,
    e: "-d lists the directory itself, not its contents.",
    de: "ls -d */ lists directory names. ls -d . shows current dir path.",
    deBeginner: "ls -d shows the directory as an entry, not what's inside it. ls -d */ lists just directory names in the current folder.",
    deExpert: "ls -d: list dirs as names, don't descend. ls -d */ for dir names. ls -d . for cwd. Used in scripts to avoid listing contents."
  }),
  (_i: number) => ({
    q: "What does `!!` expand to in bash history?",
    o: ["The entire previous command", "Last argument only", "Last command's exit code", "Nothing"],
    c: 0,
    e: "!! is replaced by the full previous command line.",
    de: "sudo !! re-runs last command with sudo. !$ is last argument.",
    deBeginner: "!! is replaced by your last full command. Forgot sudo? Type sudo !! to run the last command with sudo.",
    deExpert: "!!: history expansion, last command. !-1 same. sudo !! re-run with sudo. Part of fc; expands before execution."
  }),
  (_i: number) => ({
    q: "What does `!$` expand to?",
    o: ["Last argument of previous command", "Last command", "Last exit code", "Last directory"],
    c: 0,
    e: "!$ is the last word (argument) of the previous command.",
    de: "mkdir foo && cd !$ creates foo and cds into it. !* is all args.",
    deBeginner: "!$ is the last argument of the previous command. mkdir mydir && cd !$ creates mydir and cds into it.",
    deExpert: "!$: last word of previous command. !* all words. !^ first. Word from designator. Useful for mkdir dir && cd !$."
  }),
  (_i: number) => ({
    q: "What does `fc -l` do?",
    o: ["Lists recent command history", "Loads a file", "Locks the terminal", "Lists files"],
    c: 0,
    e: "fc -l lists recent history. fc -l -10 shows last 10.",
    de: "fc is a builtin for editing/re-running commands. fc -e - runs previous.",
    deBeginner: "fc -l lists your recent commands (history). fc -l -10 shows the last 10. fc is the fix/run-history builtin.",
    deExpert: "fc -l: list history. fc -l -10 last 10. fc -e - re-run previous. fc [first] [last] edit range. HISTFILE stores; fc is builtin interface."
  }),
  (_i: number) => ({
    q: "In bash, what does single-quote `'` prevent?",
    o: ["All expansion (variables, commands, etc.)", "Only variable expansion", "Only globbing", "Only history expansion"],
    c: 0,
    e: "Single quotes preserve everything literally. No $VAR, no $(cmd).",
    de: "echo '$HOME' prints $HOME. Use double quotes for selective expansion.",
    deBeginner: "Inside single quotes, nothing is expanded: $HOME stays as $HOME, not your home path. Use double quotes when you want expansion.",
    deExpert: "Single quotes: no expansion. $VAR, $(cmd), `cmd`, ! all literal. No escape except '. Double quotes allow $, `, \\."
  }),
  (_i: number) => ({
    q: "What does `$(cmd)` do?",
    o: ["Runs cmd and substitutes its output", "Runs cmd in background", "Defines a variable", "Comments out cmd"],
    c: 0,
    e: "Command substitution: output of cmd replaces $(cmd) in the line.",
    de: "echo $(date) prints current date. Prefer $( ) over backticks.",
    deBeginner: "$(cmd) runs the command and puts its output in place. echo $(date) shows the current date. Prefer $( ) over backticks.",
    deExpert: "$(cmd): command substitution. Run cmd in subshell; stdout replaces construct. echo $(date). Prefer over backticks (nesting, readability). Trailing newlines stripped."
  }),
  (_i: number) => ({
    q: "What does `$((1+2))` evaluate to?",
    o: ["3", "1+2", "12", "Error"],
    c: 0,
    e: "Arithmetic expansion. $((expr)) evaluates the expression.",
    de: "echo $((2*3)) prints 6. Variables allowed: $((x+y)).",
    deBeginner: "$((1+2)) is arithmetic: the shell computes 3. You can use * and variables: x=2; echo $((x*3)) prints 6.",
    deExpert: "$((expr)): arithmetic expansion. Integer only. Variables without $. echo $((2*3)). Exit status from last expression. No floating point in POSIX."
  }),
  (_i: number) => ({
    q: "What does `echo {1..5}` expand to?",
    o: ["1 2 3 4 5", "{1..5}", "1 5", "Error"],
    c: 0,
    e: "Brace expansion. {1..5} generates 1 2 3 4 5.",
    de: "mkdir dir{1..3} creates dir1 dir2 dir3. {a..z} for letters.",
    deBeginner: "Brace expansion: {1..5} becomes 1 2 3 4 5. mkdir dir{1..3} creates dir1, dir2, dir3. {a..z} for letters.",
    deExpert: "Brace expansion: {1..5} -> 1 2 3 4 5. {a..z}, {01..10}. Prefix/suffix: dir{1..3}. Expands before other expansions. Bash; not all shells."
  }),
  (_i: number) => ({
    q: "What does `command -v ls` show?",
    o: ["Path to ls or 'ls is a shell builtin'", "ls version", "Whether ls exists (0/1)", "ls manual"],
    c: 0,
    e: "command -v shows how a command would be resolved.",
    de: "Preferred over which for scripts. command -v foo || { echo 'not found'; exit 1; }",
    deBeginner: "command -v ls shows how ls would be run: path to the program or 'ls is a shell builtin'. Use in scripts to check if a command exists.",
    deExpert: "command -v: output command name/path. Builtin; sees aliases/functions. Prefer over which in scripts. command -v foo || exit 1."
  }),
  (_i: number) => ({
    q: "What does `set -e` do in a script?",
    o: ["Exit immediately if any command fails", "Enable debugging", "Echo commands", "Enable errexit display"],
    c: 0,
    e: "set -e makes the script exit on first non-zero exit code.",
    de: "Fail-fast. Use set +e to disable. Often combined with set -u.",
    deBeginner: "set -e makes the script exit as soon as any command fails (non-zero exit). Use set +e to turn it off. Good for safe scripts.",
    deExpert: "set -e: errexit. Exit on first non-zero. Ignored in conditionals, and/or, etc. set +e disable. Often with set -u, set -o pipefail."
  }),
  (_i: number) => ({
    q: "What does `set -u` do?",
    o: ["Treat unset variables as errors", "Enable Unicode", "Unset all variables", "Update PATH"],
    c: 0,
    e: "set -u causes error on use of unset variable.",
    de: "Prevents typos like $FILENAME when you meant $FILENAM. set +u disables.",
    deBeginner: "set -u makes the shell report an error if you use a variable that was never set. Catches typos like $FILENAME when you meant $FILENAM.",
    deExpert: "set -u: nounset. Reference to unset var is error. ${var:-default} still ok. Catches typos. set +u to disable."
  }),
  (_i: number) => ({
    q: "What does `set -x` do?",
    o: ["Print each command before executing", "Export all variables", "Enable extra options", "Expand globs"],
    c: 0,
    e: "set -x prints commands as they are executed (debug mode).",
    de: "Useful for debugging scripts. set +x turns it off.",
    deBeginner: "set -x prints each command before it runs (debug mode). Great for finding script bugs. set +x turns it off.",
    deExpert: "set -x: xtrace. Print expanded command before execution. set +x off. PS4 prefix. Useful for debugging pipelines and expansions."
  }),
  (_i: number) => ({
    q: "What does `read -r line` do?",
    o: ["Reads a line without treating \\ specially", "Reads in reverse", "Reads raw bytes", "Reads recursively"],
    c: 0,
    e: "-r prevents backslash from escaping the next character.",
    de: "Always use read -r in scripts. read -r prevents \\n from becoming newline.",
    deBeginner: "read -r reads one line and stores it in line. -r means backslash is not special (no \\n conversion). Use -r in scripts.",
    deExpert: "read -r: raw; backslash not escape. read alone treats \\ as escape. read -r line. IFS affects word splitting. Use -r in scripts."
  }),
  (_i: number) => ({
    q: "What does `cmd &` do?",
    o: ["Runs cmd in background", "Runs cmd and waits", "Runs cmd with & as arg", "Runs cmd in subshell"],
    c: 0,
    e: "& at end runs the command in the background.",
    de: "You get the prompt back. Use fg to bring to foreground, jobs to list.",
    deBeginner: "Putting & at the end runs the command in the background. You get your prompt back. Use fg to bring it back, jobs to list background jobs.",
    deExpert: "&: run in background. Job control. fg, bg, jobs. SIGHUP on shell exit unless nohup or disown. Pipeline in background: cmd1 | cmd2 &"
  }),
  (_i: number) => ({
    q: "What does `jobs` show?",
    o: ["List of background and stopped jobs", "List of all processes", "Job queue", "Completed jobs"],
    c: 0,
    e: "jobs lists jobs started in the current shell.",
    de: "jobs -l shows PIDs. fg %1 brings job 1 to foreground.",
    deBeginner: "jobs lists the background and stopped jobs in this shell. jobs -l also shows PIDs. fg %1 brings job 1 to the foreground.",
    deExpert: "jobs: list active jobs. jobs -l PIDs. fg %n, bg %n. %+ or %% current, %- previous. Stopped vs running. SIGHUP to jobs when shell exits."
  }),
  (_i: number) => ({
    q: "What does `nohup cmd` do?",
    o: ["Runs cmd immune to hangup signal", "Runs cmd with no output", "Runs cmd once", "Runs cmd in nohup mode"],
    c: 0,
    e: "nohup keeps cmd running after you log out.",
    de: "Output goes to nohup.out by default. nohup cmd & for background.",
    deBeginner: "nohup runs a command so it keeps running after you log out. Output goes to nohup.out. nohup cmd & runs it in background too.",
    deExpert: "nohup: ignore SIGHUP, redirect stdout/stderr to nohup.out. nohup cmd & for detach. disown alternative. Child survives shell exit."
  }),
  (_i: number) => ({
    q: "What is the exit code of `true`?",
    o: ["0", "1", "-1", "255"],
    c: 0,
    e: "true always exits with 0 (success).",
    de: "while true; do ...; done for infinite loops. false exits 1.",
    deBeginner: "true always returns 0 (success). Used in loops: while true; do ... done. false returns 1.",
    deExpert: "true/false builtins; exit 0 and 1. Used in conditionals and loops. No arguments."
  }),
  (_i: number) => ({
    q: "What does `[ -f file ]` test?",
    o: ["Whether file exists and is regular", "Whether file is full", "Whether file is formatted", "Whether file is first"],
    c: 0,
    e: "-f tests: exists and is a regular file (not dir, not symlink to dir).",
    de: "[ -d dir ] for directory. [ -e path ] for any existence.",
    deBeginner: "[ -f file ] is true if file exists and is a regular file (not a directory). Use [ -d dir ] for directories.",
    deExpert: "test -f / [ -f ]: stat(2), true if regular file. -d dir, -e any existence. Symlinks followed. [[ ]] in bash for no split."
  }),
  (_i: number) => ({
    q: "What does `[[ a == b ]]` do in bash?",
    o: ["Tests if a equals b (no word splitting)", "Runs a command", "Assigns b to a", "Compares files"],
    c: 0,
    e: "[[ ]] is bash keyword; no word splitting, supports =~ for regex.",
    de: "Prefer [[ ]] over [ ] in bash. [[ $x == *.txt ]] does pattern match.",
    deBeginner: "[[ a == b ]] tests if a equals b. No word splitting, so safer with variables. [[ $x == *.txt ]] does pattern matching.",
    deExpert: "[[ ]]: bash conditional. No word split, no pathname expansion. ==, !=, =~ regex. [[ $x == *.txt ]] pattern. Prefer over [ ]."
  }),
  (_i: number) => ({
    q: "What does `$?` contain after a command?",
    o: ["Exit code of last command", "Process ID", "Number of args", "Current shell PID"],
    c: 0,
    e: "$? is the exit status of the most recently executed command.",
    de: "0 = success. if cmd; then ... checks $? implicitly.",
    deBeginner: "$? holds the exit code of the last command (0 = success). if cmd; then ... uses it implicitly.",
    deExpert: "$?: exit status of last foreground command. Overwritten each command. 0 success; 1-255 failure. Used in if, while, set -e."
  }),
  (_i: number) => ({
    q: "What does `$$` expand to?",
    o: ["PID of current shell", "Parent PID", "Last background PID", "Process count"],
    c: 0,
    e: "$$ is the process ID of the current shell.",
    de: "Use for temp files: /tmp/script.$$.tmp",
    deBeginner: "$$ is the process ID of the current shell. Often used for unique temp files: /tmp/script.$$.tmp",
    deExpert: "$$: PID of current shell. Not subshell-safe. Use for temp names: /tmp/foo.$$. Prefer mktemp for security."
  }),
  (_i: number) => ({
    q: "What does `$!` contain?",
    o: ["PID of last background process", "Last exit code", "Last argument", "Last command"],
    c: 0,
    e: "$! is the PID of the most recently started background job.",
    de: "wait $! waits for last background job. Useful for parallel scripts.",
    deBeginner: "$! is the PID of the last command you ran in the background. wait $! waits for that job to finish.",
    deExpert: "$!: PID of last background job. wait $! to wait. Unset if no bg job. Used in job control and parallel scripts."
  }),
  (_i: number) => ({
    q: "What does `$#` contain in a script?",
    o: ["Number of positional parameters", "Number of lines", "Hash of args", "Last argument index"],
    c: 0,
    e: "$# is the count of arguments passed to the script.",
    de: "./script a b c gives $# = 3. $1, $2, $3 are the args.",
    deBeginner: "$# is how many arguments were passed. ./script a b c gives $# = 3. $1, $2, $3 are the arguments.",
    deExpert: "$#: number of positional parameters. $0 not counted. shift decrements. if [ $# -lt 1 ]; then usage; fi."
  }),
  (_i: number) => ({
    q: "What does `$@` expand to (in double quotes)?",
    o: ["Each argument as separate quoted word", "All args as one string", "First argument", "Last argument"],
    c: 0,
    e: '"$@" expands to "$1" "$2" "$3" ... preserving each as separate.',
    de: 'Use "$@" to pass args through. "$*" joins with first char of IFS.',
    deBeginner: '"$@" becomes "$1" "$2" "$3" ... so each argument stays separate. Use it to pass all arguments to another command.',
    deExpert: '"$@": each positional param as separate quoted word. "$*" joins with IFS. Always quote "$@" when forwarding args.'
  }),
  (_i: number) => ({
    q: "What does `shift` do in a script?",
    o: ["Drops $1 and shifts remaining args down", "Shifts to next directory", "Shifts output", "Shifts variable"],
    c: 0,
    e: "shift removes $1; $2 becomes $1, $3 becomes $2, etc.",
    de: "while [ $# -gt 0 ]; do ...; shift; done to process args.",
    deBeginner: "shift removes the first argument; what was $2 becomes $1, and so on. $# goes down by one. Used in loops to process arguments.",
    deExpert: "shift: drop $1, $2->$1, ... $# decrements. shift n drops n. while [ $# -gt 0 ]; do ...; shift; done."
  }),
  (_i: number) => ({
    q: "What does `source script.sh` do?",
    o: ["Runs script in current shell (affects env)", "Runs in subshell", "Loads script as library", "Compiles script"],
    c: 0,
    e: "source (or .) runs the script in the current shell.",
    de: "Variables and cd persist. . script.sh is equivalent.",
    deBeginner: "source runs the script in the current shell, so variables and directory changes stay. . script.sh does the same.",
    deExpert: "source/. : execute in current shell. No subshell; env changes persist. source .bashrc. ./script runs in child."
  }),
  (_i: number) => ({
    q: "What does `trap 'cmd' EXIT` do?",
    o: ["Runs cmd when script exits (normal or signal)", "Traps errors only", "Traps signals only", "Runs cmd on error"],
    c: 0,
    e: "trap runs the command when the script exits.",
    de: "trap 'rm -f /tmp/foo' EXIT cleans up. trap - EXIT removes.",
    deBeginner: "trap 'cmd' EXIT runs cmd when the script exits (normally or by signal). Use for cleanup: trap 'rm -f /tmp/foo' EXIT.",
    deExpert: "trap 'cmd' EXIT: run cmd on shell exit (normal or signal). trap - EXIT clear. Cleanup temp files, restore state."
  }),
  (_i: number) => ({
    q: "What does `exec cmd` do?",
    o: ["Replaces shell with cmd (no return)", "Runs cmd and returns", "Executes cmd in subshell", "Exports cmd"],
    c: 0,
    e: "exec replaces the current process with cmd. Script ends when cmd ends.",
    de: "exec ls runs ls in place of shell. No return to script.",
    deBeginner: "exec runs the command in place of the shell: the shell is gone, only the command runs. The script does not continue after exec.",
    deExpert: "exec: execve(2). Replace current process. exec ls: no return. exec 3< file: redirect. Used in wrappers, login shells."
  }),
  (_i: number) => ({
    q: "What does `local x=1` do?",
    o: ["Creates a local variable in a function", "Sets global x", "Creates x in subshell", "Locks variable x"],
    c: 0,
    e: "local restricts the variable to the current function scope.",
    de: "Without local, function vars leak to global. Must be inside function.",
    deBeginner: "local x=1 creates a variable that exists only inside the current function. Without local, variables in functions affect the rest of the script.",
    deExpert: "local: variable visible only in function. Must be inside function body. Same name can shadow global. local preserves exit status in some shells."
  }),
  (_i: number) => ({
    q: "What does `return 1` do in a function?",
    o: ["Exits function with exit code 1", "Returns value 1", "Goes to line 1", "Restarts function"],
    c: 0,
    e: "return sets the function's exit status (like exit for scripts).",
    de: "Use return for status. For output, use echo and capture with $(func).",
    deBeginner: "return 1 exits the function and sets its exit status to 1. For returning text, use echo and capture with $(func).",
    deExpert: "return [n]: exit function with status n. Like exit for scripts. For data use echo; capture with $(func). return without n uses last command status."
  }),
  (_i: number) => ({
    q: "What does `: ${VAR:=default}` do?",
    o: ["Sets VAR to default if unset or empty", "Unsets VAR", "Exports VAR", "Prints VAR"],
    c: 0,
    e: ":= assigns default when VAR is unset or empty. : is no-op that evaluates.",
    de: ": ${EDITOR:=nano} ensures EDITOR has a value.",
    deBeginner: ": ${VAR:=default} sets VAR to default if VAR is unset or empty. The : is a no-op that just runs the expansion. Good for defaults.",
    deExpert: ": ${var:=default}: parameter expansion; assign default if unset or null. : is true builtin, evaluates args. : ${EDITOR:=nano}. :- for substitute without assign."
  }),
  (_i: number) => ({
    q: "What does `${var#pattern}` do?",
    o: ["Removes shortest prefix matching pattern", "Removes suffix", "Searches for pattern", "Replaces pattern"],
    c: 0,
    e: "var#pattern removes shortest prefix. ## removes longest. file.txt with #.* -> txt",
    de: "# removes shortest; ## removes longest. % and %% for suffix.",
    deBeginner: "${var#pattern} removes the shortest prefix of var that matches pattern. ${var##pattern} removes the longest. Use % and %% for suffix.",
    deExpert: "${var#pattern}: remove shortest prefix match. ## longest. % %% for suffix. Globbing, not regex. base=${file%.*} name without extension."
  }),
  (_i: number) => ({
    q: "What does `${var%.txt}` do?",
    o: ["Removes .txt suffix if present", "Adds .txt", "Searches for .txt", "Replaces .txt"],
    c: 0,
    e: "% removes shortest suffix. file.txt -> file.",
    de: "base=${file%.*} gets name without extension. %% for longest match.",
    deBeginner: "${var%.txt} removes .txt from the end of var if present. file.txt becomes file. Use %% for longest match.",
    deExpert: "${var%pattern}: remove shortest suffix. %% longest. base=${file%.*}. Globbing. Used for extension stripping."
  }),
  (_i: number) => ({
    q: "What does `${#var}` give?",
    o: ["Length of var (character count)", "Number of words", "Hash of var", "Index of var"],
    c: 0,
    e: "${#var} is the length of the string in var.",
    de: "echo ${#s} for string length. ${#array[@]} for array length.",
    deBeginner: "${#var} is the number of characters in var. ${#array[@]} is the number of elements in an array.",
    deExpert: "${#var}: character length. ${#arr[@]} array element count. Multibyte in bash depends on locale."
  }),
  (_i: number) => ({
    q: "What does `[[ -z $var ]]` test?",
    o: ["Whether var is empty or unset", "Whether var is zero", "Whether var exists", "Whether var is numeric"],
    c: 0,
    e: "-z is true if string has zero length.",
    de: "[[ -n $var ]] is true if non-empty. -z and -n for string tests.",
    deBeginner: "[[ -z $var ]] is true if var is empty or unset. Use -n for non-empty. Handy for checking if user gave input.",
    deExpert: "[[ -z $var ]]: true if length zero (unset or empty). [[ -n $var ]] non-empty. Prefer [[ ]] over [ ] in bash; no quoting issues."
  }),
  (_i: number) => ({
    q: "What does `[[ -n $var ]]` test?",
    o: ["Whether var is non-empty", "Whether var is numeric", "Whether var is new", "Whether var is set"],
    c: 0,
    e: "-n is true if string has non-zero length.",
    de: "Prefer [[ -n $var ]] over [[ $var != '' ]].",
    deBeginner: "[[ -n $var ]] is true if var has at least one character. Use for 'did the user provide something?' checks.",
    deExpert: "[[ -n $var ]]: true if var has non-zero length. Safer than [[ $var ]] with set -u. -z opposite."
  }),
  (_i: number) => ({
    q: "What does `[ -d path ]` test?",
    o: ["Whether path exists and is a directory", "Whether path is empty", "Whether path is default", "Whether path is deleted"],
    c: 0,
    e: "-d tests: exists and is a directory.",
    de: "if [ -d /tmp ]; then ... Common in install scripts.",
    deBeginner: "[ -d path ] is true if path exists and is a directory. Use in scripts: if [ -d /tmp ]; then ...",
    deExpert: "test -d: true if path is directory. stat(2). -e any existence. Symlinks followed. Common in install and config scripts."
  }),
  (_i: number) => ({
    q: "What does `[ -e path ]` test?",
    o: ["Whether path exists (any type)", "Whether path is executable", "Whether path is empty", "Whether path is editable"],
    c: 0,
    e: "-e tests existence of any file/dir/symlink.",
    de: "[ -e file ] is broader than [ -f file ]. -a is deprecated alias.",
    deBeginner: "[ -e path ] is true if path exists (file, directory, or symlink). Broader than -f (file only) or -d (dir only).",
    deExpert: "test -e: true if path exists. Any type. -a deprecated. Use -e for existence, -f/-d for type when needed."
  }),
  (_i: number) => ({
    q: "What does `[ -x file ]` test?",
    o: ["Whether file exists and is executable", "Whether file is executable by all", "Whether file is exportable", "Whether file is extra"],
    c: 0,
    e: "-x tests: file exists and has execute permission.",
    de: "if [ -x ./script ]; then ./script; fi",
    deBeginner: "[ -x file ] is true if file exists and you can execute it. if [ -x ./script ]; then ./script; fi",
    deExpert: "test -x: executable by effective uid/gid. access(2) X_OK. For dirs, x means search (enter). Check before running scripts."
  }),
  (_i: number) => ({
    q: "What does `[ -r file ]` test?",
    o: ["Whether file exists and is readable", "Whether file is recent", "Whether file is root-owned", "Whether file is relative"],
    c: 0,
    e: "-r tests read permission for the current user.",
    de: "Test before reading: [ -r config ] && cat config",
    deBeginner: "[ -r file ] is true if file exists and you can read it. Use before reading: [ -r config ] && cat config",
    deExpert: "test -r: readable by effective uid/gid. access(2) R_OK. Test before cat/read. Symlinks followed."
  }),
  (_i: number) => ({
    q: "What does `[ -w file ]` test?",
    o: ["Whether file exists and is writable", "Whether file is wide", "Whether file is a word", "Whether file is watched"],
    c: 0,
    e: "-w tests write permission.",
    de: "[ -w /tmp ] before writing temp files.",
    deBeginner: "[ -w file ] is true if file exists and you can write to it. Check [ -w /tmp ] before writing temp files.",
    deExpert: "test -w: writable. access(2) W_OK. For dirs, w means can create/remove. Check before redirecting or appending."
  }),
  (_i: number) => ({
    q: "What does `[ -s file ]` test?",
    o: ["Whether file exists and has size > 0", "Whether file is a script", "Whether file is a symlink", "Whether file is secure"],
    c: 0,
    e: "-s is true if file exists and is non-empty.",
    de: "[ -s log ] && tail log vs [ ! -s log ] for empty check.",
    deBeginner: "[ -s file ] is true if file exists and has size greater than zero. Use [ ! -s file ] to check for empty.",
    deExpert: "test -s: file exists and size > 0. stat(2) st_size. [ -s log ] before tail. [ ! -s file ] for empty. Symlinks followed."
  }),
  (_i: number) => ({
    q: "What does `[ -L path ]` test?",
    o: ["Whether path is a symbolic link", "Whether path is a log", "Whether path is long", "Whether path is last"],
    c: 0,
    e: "-L tests if path is a symlink (even if broken).",
    de: "[ -L /usr/bin/python ] checks for symlink.",
    deBeginner: "[ -L path ] is true if path is a symbolic link. True even if the link target is missing (broken link).",
    deExpert: "test -L: path is symlink. lstat(2). True even if target missing. -f is regular file (follows symlink). Check before readlink."
  }),
  (_i: number) => ({
    q: "What does `[ str1 = str2 ]` test?",
    o: ["String equality", "Assignment", "Approximate match", "Pattern match"],
    c: 0,
    e: "= tests if two strings are equal. Use == in [[ ]].",
    de: "[ \"$a\" = \"$b\" ]. Quote variables to avoid word splitting.",
    deBeginner: "[ str1 = str2 ] tests if the two strings are equal. Always quote variables: [ \"$a\" = \"$b\" ] to avoid word splitting.",
    deExpert: "test = / [ = ]: string equality. Quote both: [ \"$a\" = \"$b\" ]. In [[ ]] use ==. = in [ ] is comparison, not assignment."
  }),
  (_i: number) => ({
    q: "What does `[ 5 -lt 10 ]` test?",
    o: ["5 is less than 10", "5 is greater than 10", "5 equals 10", "5 is not 10"],
    c: 0,
    e: "-lt is less than. -le, -eq, -ne, -gt, -ge for numeric comparison.",
    de: "Use -lt not < in [ ] (redirect). [[ 5 -lt 10 ]] or [[ 5 < 10 ]].",
    deBeginner: "[ 5 -lt 10 ] is true (5 is less than 10). Use -lt, -le, -eq, -ne, -gt, -ge. In [ ] don't use < (it's redirect).",
    deExpert: "test -lt: arithmetic less than. -le -eq -ne -gt -ge. In [ ] use -lt not <. [[ 5 < 10 ]] works in bash (lexicographic unless shopt -s nocasematch)."
  }),
  (_i: number) => ({
    q: "What does `[[ $x =~ ^[0-9]+$ ]]` test?",
    o: ["x matches regex (digits only)", "x equals regex", "x is numeric", "x is positive"],
    c: 0,
    e: "=~ is regex match. Right side is extended regex.",
    de: "[[ $num =~ ^[0-9]+$ ]] for integer check. No quotes on regex.",
    deBeginner: "[[ $x =~ pattern ]] is true if x matches the regex. [[ $num =~ ^[0-9]+$ ]] checks 'only digits'. Don't quote the pattern.",
    deExpert: "[[ var =~ re ]]: ERE match. No quotes on re (or match literal). BASH_REMATCH array. ^[0-9]+$ for integer. Quoting changes behavior."
  }),
  (_i: number) => ({
    q: "What does `ls -1` do?",
    o: ["One entry per line (single column)", "List one file", "First file only", "One directory level"],
    c: 0,
    e: "-1 forces one file per line (default when not a terminal).",
    de: "ls -1 is like ls | cat. Useful for piping to xargs.",
    deBeginner: "ls -1 prints one file per line (single column). Handy when piping to xargs or other commands that expect one name per line.",
    deExpert: "ls -1: one per line. Default when stdout not a tty. ls | cat. Piping to xargs, while read. -C is column default to tty."
  }),
  (_i: number) => ({
    q: "What does `ls -F` add?",
    o: ["Type indicators (/ * @ etc.)", "Full path", "File sizes", "Format codes"],
    c: 0,
    e: "-F appends / for dirs, * for executables, @ for symlinks.",
    de: "ls -F is like ls --indicator-style=classify.",
    deBeginner: "ls -F adds symbols: / after directories, * after executables, @ after symlinks. Quick way to see file types.",
    deExpert: "ls -F: classify. / dir, * exec, @ symlink, | FIFO, = socket. --indicator-style=classify. No stat for type; name/symlink only."
  }),
  (_i: number) => ({
    q: "What does `ls -i` show?",
    o: ["Inode number for each file", "Index", "File ID", "Instance count"],
    c: 0,
    e: "-i prints the inode number before each filename.",
    de: "Hard links share inode. ls -i shows which files are linked.",
    deBeginner: "ls -i prints the inode number before each file. Hard links show the same inode; that's how you see they're the same file.",
    deExpert: "ls -i: inode number. Same inode = same file (hard links). st_ino. Useful for find -samefile, dedup, and link detection."
  }),
  (_i: number) => ({
    q: "What does `ls -m` do?",
    o: ["Comma-separated list", "Month only", "Minimal output", "Merge directories"],
    c: 0,
    e: "-m fills width with comma-separated names.",
    de: "ls -m for compact horizontal listing.",
    deBeginner: "ls -m lists names in a row, separated by commas. Compact when you want names on one line.",
    deExpert: "ls -m: comma-separated, fill width. Single line output. For scripts parsing one line."
  }),
  (_i: number) => ({
    q: "What does `ls -r` do?",
    o: ["Reverse sort order", "Recursive", "Read-only", "Relative paths"],
    c: 0,
    e: "-r reverses the sort order.",
    de: "ls -lr reverses long listing. ls -ltr by time reversed.",
    deBeginner: "ls -r reverses the sort order. ls -ltr sorts by time with newest last (oldest first).",
    deExpert: "ls -r: reverse sort. -ltr time ascending (oldest first). -lr reverse long. Combines with -t -S -U etc."
  }),
  (_i: number) => ({
    q: "What does `ls -u` use for sorting with -t?",
    o: ["Access time instead of modification time", "User sort", "Unique only", "Unicode sort"],
    c: 0,
    e: "-u with -t sorts by access time (atime).",
    de: "ls -ltu sorts by atime. touch updates mtime.",
    deBeginner: "With -t, ls -u sorts by access time (when file was last read) instead of modification time. ls -ltu.",
    deExpert: "ls -u with -t: sort by atime not mtime. -ltu. atime updated on read (depending on mount noatime). touch updates mtime."
  }),
  (_i: number) => ({
    q: "What does `ls -X` do?",
    o: ["Sort by extension", "Exclude pattern", "Extra info", "Export format"],
    c: 0,
    e: "-X sorts alphabetically by extension.",
    de: "file.c, file.h, file.o grouped together.",
    deBeginner: "ls -X sorts by file extension. file.c, file.h, file.o get grouped together.",
    deExpert: "ls -X: sort by extension. Alphabetically by suffix. file.a, file.b grouped. GNU."
  }),
  (_i: number) => ({
    q: "What does `ls -B` do?",
    o: ["Ignore backups (files ending with ~)", "Brief format", "Block size", "Binary mode"],
    c: 0,
    e: "-B (GNU) ignores files ending with ~.",
    de: "ls -B excludes emacs backup files.",
    deBeginner: "ls -B (GNU) hides backup files that end with ~, like emacs creates. Cleaner listing.",
    deExpert: "ls -B: skip names ending with ~. Emacs backup convention. GNU extension."
  }),
  (_i: number) => ({
    q: "What does `ls -C` do?",
    o: ["Column format (default for terminal)", "Clear screen", "Count only", "Case-sensitive"],
    c: 0,
    e: "-C lists in columns (default when output is a terminal).",
    de: "ls -C vs ls -1. -x fills by row.",
    deBeginner: "ls -C lists in columns (default when you're at a terminal). ls -1 is one column. -x fills by row.",
    deExpert: "ls -C: column format. Default to tty. -x row-major. -1 one per line. COLUMNS affects width."
  }),
  (_i: number) => ({
    q: "What does `ls -U` do?",
    o: ["Unsorted (directory order)", "Uppercase only", "Unique", "User format"],
    c: 0,
    e: "-U leaves order as in directory (no sort).",
    de: "Faster. Order may vary by filesystem.",
    deBeginner: "ls -U shows files in the order the filesystem returns them (no sorting). Can be faster; order may vary.",
    deExpert: "ls -U: no sort, directory order. getdents order. Faster. Order filesystem-dependent, not reproducible."
  }),
  (_i: number) => ({
    q: "What does `ls -N` do (GNU)?",
    o: ["Don't quote names", "Numeric sort", "No color", "New format"],
    c: 0,
    e: "-N (GNU) prints raw names without quoting.",
    de: "Useful when piping to other commands.",
    deBeginner: "ls -N (GNU) prints filenames as-is without adding quotes. Useful when piping to other commands.",
    deExpert: "ls -N: no quoting. Raw names. For pipelines. GNU. Default quoting when needed for special chars."
  }),
  (_i: number) => ({
    q: "What does `ls -Z` do (SELinux)?",
    o: ["Shows SELinux security context", "Zero size only", "Compressed", "Zulu time"],
    c: 0,
    e: "-Z displays SELinux context (user:role:type).",
    de: "On SELinux systems. ls -lZ for context with long format.",
    deBeginner: "ls -Z (on SELinux systems) shows the security context for each file: user:role:type. ls -lZ for long format with context.",
    deExpert: "ls -Z: SELinux context. user:role:type:range. getxattr. -lZ. Only on SELinux-enabled systems."
  }),
  (_i: number) => ({
    q: "What does `ls --color=auto` do?",
    o: ["Colors output when to a terminal", "Always color", "Never color", "Auto-detect terminal"],
    c: 0,
    e: "Colors only when output goes to a terminal.",
    de: "ls | cat loses color. Default on many distros.",
    deBeginner: "ls --color=auto uses colors only when output goes to a terminal. ls | cat has no color. Default on many systems.",
    deExpert: "ls --color=auto: color if stdout tty. ls | cat no color. TERM, LS_COLORS. --color=never/always. Default often auto."
  }),
  (_i: number) => ({
    q: "What does `ls -b` do?",
    o: ["Escapes non-printable chars (\\n etc.)", "Brief format", "Block size", "Binary"],
    c: 0,
    e: "-b shows \\n, \\t etc. for special characters in names.",
    de: "Useful for filenames with newlines or control chars.",
    deBeginner: "ls -b shows non-printable characters in names as escape sequences (e.g. \\n, \\t). For filenames with newlines or control chars.",
    deExpert: "ls -b: escape non-printable. \\n \\t etc. C-style. For names with newlines, control chars. -q uses ?."
  }),
  (_i: number) => ({
    q: "What does `ls -q` do?",
    o: ["Print ? for non-printable chars", "Quiet mode", "Quick format", "Quote names"],
    c: 0,
    e: "-q replaces non-printable with ?.",
    de: "Safer for broken terminal or weird filenames.",
    deBeginner: "ls -q shows ? for any non-printable character in filenames. Safer when the terminal or names are weird.",
    deExpert: "ls -q: replace non-printable with ?. Prevents terminal issues. -b for C escapes. Safe output for broken names."
  }),
  (_i: number) => ({
    q: "What does `HISTFILE` control?",
    o: ["Path to history file", "History size", "History format", "History mode"],
    c: 0,
    e: "HISTFILE is where bash stores command history.",
    de: "Default ~/.bash_history. HISTSIZE limits lines in memory.",
    deBeginner: "HISTFILE is the file where bash saves your command history. Default is ~/.bash_history. HISTSIZE is how many commands are kept in memory.",
    deExpert: "HISTFILE: path to history file. Default ~/.bash_history. HISTSIZE in-memory count; HISTFILESIZE file lines. Unset to disable history."
  }),
  (_i: number) => ({
    q: "What does `HISTSIZE` control?",
    o: ["Number of commands kept in memory", "File size of history", "History format", "History file path"],
    c: 0,
    e: "HISTSIZE is max number of commands in history list.",
    de: "HISTFILESIZE is for file. Increase for longer history.",
    deBeginner: "HISTSIZE is how many commands are kept in the history list in memory. HISTFILESIZE controls how many are written to the file.",
    deExpert: "HISTSIZE: max lines in history list (memory). HISTFILESIZE: lines in file. Truncation on exit. Increase for long history."
  }),
  (_i: number) => ({
    q: "What does `HISTCONTROL=ignorespace` do?",
    o: ["Skips commands starting with space", "Ignores duplicates", "Ignores empty", "Ignores comments"],
    c: 0,
    e: "Lines starting with space are not saved to history.",
    de: "Use for passwords: ' mysql -p' won't be in history.",
    deBeginner: "With ignorespace, any command that starts with a space is not saved to history. Good for secrets: ' mysql -p' won't appear in history.",
    deExpert: "HISTCONTROL=ignorespace: lines starting with space not saved. ignoredups: skip consecutive duplicate. ignoreboth: both. Protects sensitive commands."
  }),
  (_i: number) => ({
    q: "What does `HISTCONTROL=ignoredups` do?",
    o: ["Skips consecutive duplicate commands", "Skips all duplicates", "Ignores duplicates in file", "Ignores duplicate args"],
    c: 0,
    e: "Consecutive identical commands are not both saved.",
    de: "ignoreboth = ignorespace + ignoredups.",
    deBeginner: "ignoredups means if you run the same command twice in a row, the second one is not added to history. ignoreboth = ignorespace + ignoredups.",
    deExpert: "HISTCONTROL=ignoredups: don't save if same as previous. Consecutive only. ignoreboth combines with ignorespace."
  }),
  (_i: number) => ({
    q: "What does `!n` expand to (history)?",
    o: ["Command number n from history", "Last n commands", "Command with n args", "Nth argument"],
    c: 0,
    e: "!42 runs command #42 from history.",
    de: "history shows numbers. !-1 is previous, !-2 is before that.",
    deBeginner: "!n runs command number n from history. Run history to see numbers. !-1 is the previous command, !-2 the one before.",
    deExpert: "!n: expand to history line n. !-1 previous, !-2 before that. history shows numbers. Part of event designators."
  }),
  (_i: number) => ({
    q: "What does `!?str?` expand to?",
    o: ["Most recent command containing str", "Command starting with str", "Command ending with str", "Command matching str exactly"],
    c: 0,
    e: "!?str? runs the most recent command containing str.",
    de: "!?grep? re-runs last command with grep in it.",
    deBeginner: "!?str? runs the most recent command that contains str. !?grep? re-runs the last command that had grep in it.",
    deExpert: "!?str?: event containing str. !?grep? last line with grep. ?...? substring; !str prefix. Quick re-run by content."
  }),
  (_i: number) => ({
    q: "What does `^old^new` do?",
    o: ["Re-runs last command with old replaced by new", "Substitutes in history", "Edits current line", "Replaces in file"],
    c: 0,
    e: "^^ is shorthand: ^old^new runs !!:s/old/new/.",
    de: "echo foo bar -> ^foo^baz -> echo baz bar",
    deBeginner: "^old^new re-runs the last command but replaces the first occurrence of old with new. echo foo bar then ^foo^baz gives echo baz bar.",
    deExpert: "^old^new: quick substitute. Same as !!:s/old/new/. Only first occurrence. echo foo -> ^foo^baz -> echo baz. History modified."
  }),
  (_i: number) => ({
    q: "What does `!!:s/old/new/` do?",
    o: ["Re-runs last command with first old→new", "Saves to history", "Searches history", "Substitutes in file"],
    c: 0,
    e: "!!:s/old/new/ substitutes first occurrence in last command.",
    de: "!!:gs/old/new/ for global (all occurrences).",
    deBeginner: "!!:s/old/new/ re-runs the last command with the first 'old' replaced by 'new'. Use !!:gs/old/new/ to replace all.",
    deExpert: "!!:s/old/new/: word modifier, substitute first. !!:gs/old/new/ global. !!:s/old/new/g same. History expansion modifier."
  }),
  (_i: number) => ({
    q: "What does `!$:h` give?",
    o: ["Directory part of last argument", "Head of last arg", "History of last", "Home of last"],
    c: 0,
    e: ":h removes the last path component (head of path).",
    de: "cd /a/b/c then !$:h -> /a/b. :t is tail (filename).",
    deBeginner: "!$:h is the directory part of the last argument. cd /a/b/c then !$:h gives /a/b. :t is the filename (tail).",
    deExpert: "!$:h: head of path (dirname). /a/b/file -> /a/b. :t tail (basename). :r remove extension. :e extension. History word modifiers."
  }),
  (_i: number) => ({
    q: "What does `!$:t` give?",
    o: ["Filename part of last argument", "Tail of last", "Type of last", "Time of last"],
    c: 0,
    e: ":t is the tail (last component) of the path.",
    de: "/a/b/file.txt -> file.txt. :r removes extension.",
    deBeginner: "!$:t is the filename part of the last argument. /a/b/file.txt -> file.txt. :r removes the extension.",
    deExpert: "!$:t: tail (basename). /a/b/file -> file. :h head. :r root (no ext). :e extension. Path manipulation from history."
  }),
  (_i: number) => ({
    q: "What does `!$:r` give?",
    o: ["Last argument with extension removed", "Root of path", "Reverse of last", "Rest of last"],
    c: 0,
    e: ":r removes the extension (file.txt -> file).",
    de: "file.txt -> file. :e would give extension.",
    deBeginner: "!$:r is the last argument with the extension removed. file.txt -> file. :e would give just the extension.",
    deExpert: "!$:r: remove extension. file.txt -> file. :e extension only. :h :t :r :e path modifiers. Useful for derived names."
  }),
  (_i: number) => ({
    q: "What does `!*` expand to?",
    o: ["All arguments of previous command", "Last argument", "All history", "All matches"],
    c: 0,
    e: "!* is all words from the previous command (excluding the command itself).",
    de: "cp file1 file2 dir then mv !* backup/",
    deBeginner: "!* is all the arguments from the previous command (not the command name). cp a b dir then mv !* backup/ moves a b dir to backup/.",
    deExpert: "!*: all words of previous command (no command name). !$ last, !^ first. Word designators. cp a b d; mv !* dest."
  }),
  (_i: number) => ({
    q: "What does `!^` expand to?",
    o: ["First argument of previous command", "Last command", "First command", "First match"],
    c: 0,
    e: "!^ is the first argument of the previous command.",
    de: "!$ is last, !^ is first, !* is all.",
    deBeginner: "!^ is the first argument of the previous command. !$ last, !^ first, !* all arguments.",
    deExpert: "!^: first word of previous command. !$ last, !* all. Word designators. Useful for repeating first arg."
  }),
  (_i: number) => ({
    q: "What does `cd -- -` do?",
    o: ["Go to directory named -", "Go to previous dir", "Go to home", "Invalid"],
    c: 0,
    e: "cd -- - treats - as a literal directory name.",
    de: "-- ends options. cd - is previous dir; cd -- - is dir named -.",
    deBeginner: "cd -- - goes to a directory literally named -. -- means 'end of options'. cd - (no --) goes to the previous directory.",
    deExpert: "cd -- -: -- ends options, - is literal path. cd - without -- is OLDPWD (previous dir). For dir named -."
  }),
  (_i: number) => ({
    q: "What does `pushd dir` do?",
    o: ["Saves current dir, then cd to dir", "Pushes dir onto stack", "Creates dir", "Prints dir"],
    c: 0,
    e: "pushd saves current directory and changes to dir.",
    de: "dirs shows stack. popd returns. pushd with no arg swaps top two.",
    deBeginner: "pushd dir saves your current directory on a stack and then cds to dir. popd goes back. dirs shows the stack.",
    deExpert: "pushd: push cwd, cd to arg. DIRSTACK. popd pop and cd. dirs list. pushd with no arg swap top two. Bash/optional."
  }),
  (_i: number) => ({
    q: "What does `popd` do?",
    o: ["Returns to directory from top of stack", "Pops directory", "Removes current dir", "Prints stack"],
    c: 0,
    e: "popd removes top of dir stack and cds there.",
    de: "pushd/popd for directory stack. dirs to view.",
    deBeginner: "popd removes the top directory from the stack and cds to it (going back where you were). Use after pushd.",
    deExpert: "popd: pop DIRSTACK, cd to it. Removes top. popd +n remove nth. Paired with pushd. dirs -v numbered."
  }),
  (_i: number) => ({
    q: "What does `dirs` show?",
    o: ["Directory stack (pushd/popd)", "All directories", "Current dir only", "Directory size"],
    c: 0,
    e: "dirs lists the directory stack.",
    de: "dirs -v for numbered. pushd +2 goes to that entry.",
    deBeginner: "dirs shows the directory stack used by pushd/popd. dirs -v adds numbers. pushd +2 jumps to entry 2.",
    deExpert: "dirs: print DIRSTACK. dirs -v with indices. pushd +n rotate to nth. Current dir is stack[0]. -c clear."
  }),
  (_i: number) => ({
    q: "What does `hash -r` do?",
    o: ["Clears the command path cache", "Removes a command", "Refreshes hash", "Resets PATH"],
    c: 0,
    e: "hash -r forgets all cached command locations.",
    de: "Use after installing new command or changing PATH.",
    deBeginner: "hash -r clears the shell's cache of command paths. Use it after installing a new command or changing PATH so the shell finds the new path.",
    deExpert: "hash -r: clear path cache. Shell re-lookups. After PATH change or new install. hash -d cmd remove one."
  }),
  (_i: number) => ({
    q: "What does `hash -t cmd` show?",
    o: ["Cached path for cmd", "Type of cmd", "Time for cmd", "Table for cmd"],
    c: 0,
    e: "hash -t ls shows the cached path for ls.",
    de: "hash with no args shows all cached commands.",
    deBeginner: "hash -t cmd shows the cached path for that command. hash with no arguments lists all cached commands.",
    deExpert: "hash -t cmd: print cached path for cmd. hash alone lists all. Path from last lookup. hash -r clears."
  }),
  (_i: number) => ({
    q: "What does `enable -n cmd` do (bash)?",
    o: ["Disables builtin cmd", "Enables cmd", "Names cmd", "Negates cmd"],
    c: 0,
    e: "enable -n disables a builtin so external command is used.",
    de: "enable -n echo uses /bin/echo. enable echo restores.",
    deBeginner: "enable -n cmd turns off the built-in version of cmd so the shell uses the external program. enable -n echo then echo uses /bin/echo. enable echo turns it back on.",
    deExpert: "enable -n: disable builtin. External cmd then used. enable -n echo -> /bin/echo. enable cmd restores. For testing external."
  }),
  (_i: number) => ({
    q: "What does `enable -a` show?",
    o: ["All builtins (enabled and disabled)", "Active builtins", "All commands", "Aliases"],
    c: 0,
    e: "enable -a lists all builtins with status.",
    de: "enable shows enabled. enable -n disables.",
    deBeginner: "enable -a lists all built-in commands and whether they're enabled or disabled. enable alone lists only enabled ones.",
    deExpert: "enable -a: list all builtins with enabled/disabled. enable alone enabled only. enable -n disables; enable restores."
  }),
  (_i: number) => ({
    q: "What does `times` show?",
    o: ["User and system CPU time used by shell", "Current time", "Number of commands", "Time limits"],
    c: 0,
    e: "times prints accumulated user and system times.",
    de: "Useful for benchmarking. time cmd for single command.",
    deBeginner: "times prints total user and system CPU time used by the shell and its children. time cmd times a single command.",
    deExpert: "times: accumulated user+system time for shell and children. getrusage. time cmd for single command timing. Builtin."
  }),
  (_i: number) => ({
    q: "What does `disown` do?",
    o: ["Removes job from shell's job table", "Disowns a file", "Disables job control", "Dismisses job"],
    c: 0,
    e: "disown removes job from list; it won't receive SIGHUP on logout.",
    de: "disown %1 or disown. Job keeps running after shell exits.",
    deBeginner: "disown removes a background job from the shell's list. That job won't get SIGHUP when you log out, so it can keep running. disown %1 or disown (current job).",
    deExpert: "disown: remove job from table. No SIGHUP on shell exit. disown %n or disown. Job becomes orphaned. nohup alternative."
  }),
  (_i: number) => ({
    q: "What does `wait` with no args do?",
    o: ["Waits for all background jobs", "Waits forever", "Waits for next job", "Does nothing"],
    c: 0,
    e: "wait waits for all background jobs to complete.",
    de: "wait $! waits for last background. wait 1234 for PID.",
    deBeginner: "wait with no arguments waits until all background jobs have finished. wait $! waits for the last background job. wait 1234 waits for that PID.",
    deExpert: "wait: wait for job(s). wait all bg jobs. wait $! last bg. wait PID. Returns exit status of job. Blocks until done."
  }),
  (_i: number) => ({
    q: "What does `suspend` do?",
    o: ["Stops the shell (like Ctrl+Z)", "Pauses a job", "Suspends output", "Stops script"],
    c: 0,
    e: "suspend stops the current shell until it receives SIGCONT.",
    de: "In subshell (e.g. from script), suspend stops that shell.",
    deBeginner: "suspend stops the current shell (like Ctrl+Z for a job) until it gets SIGCONT. In a subshell, it stops that shell.",
    deExpert: "suspend: send self SIGSTOP. Shell stops until SIGCONT. In subshell (e.g. script) suspends that shell. Job control."
  }),
  (_i: number) => ({
    q: "What does `getopts` do?",
    o: ["Parses positional parameters as options", "Gets options from file", "Gets optional args", "Gets opt string"],
    c: 0,
    e: "getopts parses -a -b val style options in scripts.",
    de: "while getopts 'ab:c' opt; do ... OPTIND, OPTARG.",
    deBeginner: "getopts parses command-line options in scripts. while getopts 'ab:c' opt; do ... Options -a, -b with value, -c. OPTARG has the value.",
    deExpert: "getopts optstring name: parse positional params. -a -b val. OPTIND, OPTARG. Only single-letter. Silent error handling. getopt(3) for long options."
  }),
  (_i: number) => ({
    q: "What does `readonly VAR=1` do?",
    o: ["Creates read-only variable", "Reads VAR from file", "Reads once", "Restricts write"],
    c: 0,
    e: "readonly makes the variable immutable.",
    de: "readonly x=1; x=2 fails. declare -r same effect.",
    deBeginner: "readonly VAR=1 creates a variable that can't be changed. readonly x=1; x=2 will fail. declare -r is the same.",
    deExpert: "readonly: make var immutable. readonly x=1. unset fails. declare -r same. Often for constants, config. Cannot be undone."
  }),
  (_i: number) => ({
    q: "What does `declare -i x` do?",
    o: ["Makes x an integer (arithmetic in assignments)", "Initializes x to 0", "Imports x", "Indexes x"],
    c: 0,
    e: "declare -i makes variable integer; x=2+3 stores 5.",
    de: "x=hello stores 0. declare -a for arrays.",
    deBeginner: "declare -i x makes x an integer. x=2+3 stores 5, not '2+3'. x=hello becomes 0. declare -a for arrays.",
    deExpert: "declare -i: integer attribute. Arithmetic on assign. x=2+3 -> 5. x=hello -> 0. declare -a array, -A associative. Typeset in ksh."
  }),
  (_i: number) => ({
    q: "What does `declare -a arr` do?",
    o: ["Creates indexed array", "Creates associative array", "Adds to array", "Assigns array"],
    c: 0,
    e: "declare -a creates an indexed array.",
    de: "arr=(a b c). declare -A for associative (bash 4+).",
    deBeginner: "declare -a arr creates an indexed array. arr=(a b c) then ${arr[1]} is b. declare -A for associative (key-value) arrays (bash 4+).",
    deExpert: "declare -a: indexed array. arr=(a b c). declare -A associative (bash 4+). ${arr[@]}, ${!arr[@]} indices. Sparse."
  }),
  (_i: number) => ({
    q: "What does `arr=(a b c)` create?",
    o: ["Indexed array with 3 elements", "String a b c", "Associative array", "Three variables"],
    c: 0,
    e: "arr=(a b c) creates array: arr[0]=a, arr[1]=b, arr[2]=c.",
    de: "echo ${arr[1]} -> b. ${arr[@]} all elements.",
    deBeginner: "arr=(a b c) creates an array with arr[0]=a, arr[1]=b, arr[2]=c. echo ${arr[1]} prints b. ${arr[@]} is all elements.",
    deExpert: "arr=(a b c): compound assignment. Indexed array. 0-based. ${arr[n]}, ${arr[@]}. IFS splits. No comma; space-separated."
  }),
  (_i: number) => ({
    q: "What does `${arr[@]}` expand to?",
    o: ["All array elements (each quoted separately)", "First element", "Array length", "Last element"],
    c: 0,
    e: '"${arr[@]}" gives each element as separate word.',
    de: '"${arr[*]}" joins with IFS. Use @ for proper word splitting.',
    deBeginner: '"${arr[@]}" expands to each array element as a separate word (correct for args). "${arr[*]}" joins them with IFS. Use @ when passing to commands.',
    deExpert: '"${arr[@]}": each element separate quoted word. "${arr[*]}" one word, IFS-separated. Same as $@ vs $*. Always quote @.'
  }),
  (_i: number) => ({
    q: "What does `${!arr[@]}` expand to?",
    o: ["Array indices (keys)", "Array values", "Array length", "Inverted array"],
    c: 0,
    e: "${!arr[@]} lists the indices of set elements.",
    de: "for i in ${!arr[@]}; do echo $i ${arr[$i]}; done",
    deBeginner: "${!arr[@]} gives the indices of the array (0, 1, 2 for a full array). for i in ${!arr[@]}; do echo $i ${arr[$i]}; done",
    deExpert: "${!arr[@]}: indirect expansion, array indices. For sparse arrays. for i in ${!arr[@]}; do ... ${arr[$i]}; done. ! = keys."
  }),
  (_i: number) => ({
    q: "What does `mapfile arr < file` do?",
    o: ["Reads file lines into array", "Maps file to array", "Reads file into arr", "Creates array from file"],
    c: 0,
    e: "mapfile (or readarray) reads lines of file into array.",
    de: "mapfile -t arr < file (strip newlines). Each line = one element.",
    deBeginner: "mapfile arr < file reads each line of the file into the array arr (one line per element). mapfile -t strips the newlines.",
    deExpert: "mapfile/readarray: read lines into array. mapfile -t arr < file (strip newline). -O start index. -n count. -s skip. BASH_BUFFER."
  }),
  (_i: number) => ({
    q: "What does `( cmd )` do?",
    o: ["Runs cmd in subshell", "Groups cmd", "Runs in background", "Runs in foreground"],
    c: 0,
    e: "( ) runs in a subshell. Variables don't affect parent.",
    de: "(cd /tmp; pwd) then pwd still shows original dir.",
    deBeginner: "( cmd ) runs the command in a subshell. Changes there don't affect the current shell. (cd /tmp; pwd) then pwd is still your original dir.",
    deExpert: "( ): subshell. fork(). cd, vars don't persist. (cd /tmp; pwd). Use for isolation. Slower than { }."
  }),
  (_i: number) => ({
    q: "What does `{ cmd; }` do?",
    o: ["Runs cmd in current shell (grouping)", "Runs in subshell", "Creates block", "Runs in background"],
    c: 0,
    e: "{ } groups commands in current shell. Need ; before }.",
    de: "{ cd /tmp; ls; } affects current shell. ( ) would not.",
    deBeginner: "{ cmd; } runs the commands in the current shell (no subshell). Need ; before }. { cd /tmp; ls; } changes your directory; ( ) would not.",
    deExpert: "{ }; }: group in current shell. No subshell. ; or newline before }. { cd /tmp; ls; } dir change persists. Redirection applies to group."
  }),
  (_i: number) => ({
    q: "What does `coproc cmd` do (bash 4+)?",
    o: ["Runs cmd as coprocess with pipes", "Runs in background", "Copies process", "Runs in parallel"],
    c: 0,
    e: "coproc creates a two-way pipe to cmd.",
    de: "coproc mycmd; echo to >&${mycmd[1]}; read from <&${mycmd[0]}",
    deBeginner: "coproc runs a command as a coprocess with pipes to it. You can write to ${COPROC[1]} and read from ${COPROC[0]}. Bash 4+.",
    deExpert: "coproc: run as coprocess. COPROC array: [0] read fd [1] write fd. Two-way pipe. coproc cmd; echo x >&${COPROC[1]}. Bash 4+."
  }),
  (_i: number) => ({
    q: "What does `<(cmd)` do (process substitution)?",
    o: ["Feeds cmd output as a file path", "Runs cmd in subshell", "Redirects to cmd", "Pipes to cmd"],
    c: 0,
    e: "<(cmd) creates a FIFO; path is passed where a filename is expected.",
    de: "diff <(ls dir1) <(ls dir2) compares directory listings.",
    deBeginner: "<(cmd) runs cmd and gives you a 'file' path that contains its output. diff <(ls dir1) <(ls dir2) compares two directory listings. Bash/Ksh.",
    deExpert: "<(cmd): process substitution. FIFO or /dev/fd. Path where filename expected. diff <(ls d1) <(ls d2). cmd in subshell. Bash, ksh."
  }),
  (_i: number) => ({
    q: "What does `>(cmd)` do (process substitution)?",
    o: ["Feeds output to cmd's stdin as if writing to file", "Runs cmd first", "Redirects to file", "Pipes from cmd"],
    c: 0,
    e: ">(cmd) connects stdout to cmd's stdin.",
    de: "echo foo > >(cat) sends foo to cat. Useful for tee-like flows.",
    deBeginner: ">(cmd) is like a file you can write to; what you write goes to cmd's stdin. echo foo > >(cat) sends foo to cat. Good for tee-like patterns.",
    deExpert: ">(cmd): process substitution for output. Write side. Connects to cmd stdin. echo x > >(cat). Tee to multiple: >(cmd1) >(cmd2). Bash, ksh."
  }),
];
