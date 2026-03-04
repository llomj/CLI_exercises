// LEVEL 1 EXPERT — Advanced Terminal & Shell (103 unique questions)
// Replaces placeholders. All options are meaningful, no "Option A/B/C/D".

export const level1Expert = [
  (_i: number) => ({
    q: "What does `shopt -s extglob` enable?",
    o: ["Extended glob patterns (@(*.txt) etc.)", "Extended globbing", "Extra glob options", "External glob"],
    c: 0,
    e: "extglob enables ?(pattern), *(pattern), +(pattern), @(pattern), !(pattern).",
    de: "!(*.bak) matches all except .bak. Requires shopt -s extglob."
  }),
  (_i: number) => ({
    q: "What does `@(a|b)` match with extglob?",
    o: ["Exactly one of a or b", "Both a and b", "a or b repeated", "a then b"],
    c: 0,
    e: "@(pattern) matches exactly one of the alternatives.",
    de: "ls @(a|b).txt matches a.txt or b.txt. | is alternation."
  }),
  (_i: number) => ({
    q: "What does `+(pattern)` match with extglob?",
    o: ["One or more occurrences of pattern", "Zero or more", "Exactly one", "Two or more"],
    c: 0,
    e: "+(pattern) matches one or more occurrences.",
    de: "+(a|b) matches a, b, aa, ab, ba, etc. Like regex +."
  }),
  (_i: number) => ({
    q: "What does `!(pattern)` match with extglob?",
    o: ["Anything except pattern", "Nothing", "Pattern negation", "Optional pattern"],
    c: 0,
    e: "!(pattern) matches anything that does not match pattern.",
    de: "rm !(*.txt) removes all except .txt. !(a|b) excludes a and b."
  }),
  (_i: number) => ({
    q: "What does `shopt -s nullglob` do?",
    o: ["Expands to nothing when no matches", "Null glob pattern", "Empty glob", "No glob"],
    c: 0,
    e: "nullglob: if no files match, expand to nothing (not literal *).",
    de: "for f in *.xyz; do ... without nullglob: runs once with f=*.xyz."
  }),
  (_i: number) => ({
    q: "What does `shopt -s failglob` do?",
    o: ["Error when glob has no matches", "Fail on glob", "Fail glob expansion", "Fatal glob"],
    c: 0,
    e: "failglob: if no matches, command fails and error is printed.",
    de: "Opposite of nullglob. Safer for typos: ls *.tx fails."
  }),
  (_i: number) => ({
    q: "What does `shopt -s dotglob` do?",
    o: ["* matches hidden files (dotfiles)", "Dot in glob", "Glob dots", "Dot files only"],
    c: 0,
    e: "dotglob: * includes files starting with .",
    de: "cp * /backup with dotglob includes .bashrc."
  }),
  (_i: number) => ({
    q: "What does `shopt -s globstar` do?",
    o: ["** matches any depth of directories", "Global star", "Recursive glob", "Star glob"],
    c: 0,
    e: "** matches zero or more directories. ls **/*.txt finds all .txt.",
    de: "find . -name '*.txt' equivalent. Requires bash 4+."
  }),
  (_i: number) => ({
    q: "What does `BASH_SOURCE[0]` contain?",
    o: ["Path to the script being executed", "Source of bash", "First script", "Bash source"],
    c: 0,
    e: "BASH_SOURCE[0] is the path of the current script (like $0 but reliable when sourced).",
    de: "dirname ${BASH_SOURCE[0]} for script dir. $0 can be wrong when sourced."
  }),
  (_i: number) => ({
    q: "What does `FUNCNAME[0]` contain?",
    o: ["Name of current function", "First function", "Function name", "Current func"],
    c: 0,
    e: "FUNCNAME[0] is the name of the current function.",
    de: "Useful in debug: echo 'In ${FUNCNAME[0]}'"
  }),
  (_i: number) => ({
    q: "What does `BASH_LINENO` contain?",
    o: ["Line numbers in call stack", "Current line", "Bash line", "Line number"],
    c: 0,
    e: "BASH_LINENO is array of line numbers in call stack.",
    de: "For debugging. ${BASH_LINENO[0]} is line that called current function."
  }),
  (_i: number) => ({
    q: "What does `$BASH_REMATCH` contain after `[[ x =~ (a)(b) ]]`?",
    o: ["Array of regex match groups", "Full match", "Match result", "Regex match"],
    c: 0,
    e: "BASH_REMATCH[0] is full match, [1], [2] are captured groups.",
    de: "[[ abc =~ (.)(.) ]]; echo ${BASH_REMATCH[1]} -> a"
  }),
  (_i: number) => ({
    q: "What does `trap '' SIGINT` do?",
    o: ["Ignores Ctrl+C (SIGINT)", "Traps SIGINT", "Disables trap", "Clears SIGINT"],
    c: 0,
    e: "trap '' SIGINT ignores the signal (empty string = no action).",
    de: "trap 'handler' SIGINT runs handler. trap - SIGINT restores default."
  }),
  (_i: number) => ({
    q: "What does `trap - EXIT` do?",
    o: ["Removes EXIT trap", "Traps exit", "Exits trap", "Clears exit trap"],
    c: 0,
    e: "trap - EXIT removes the EXIT trap.",
    de: "trap '' EXIT removes. trap 'cleanup' EXIT sets."
  }),
  (_i: number) => ({
    q: "What does `kill -0 $pid` do?",
    o: ["Checks if process exists (no signal sent)", "Kills process 0", "Sends signal 0", "Tests PID"],
    c: 0,
    e: "kill -0 checks if process exists. Exit 0 if yes, non-zero if not.",
    de: "if kill -0 $pid 2>/dev/null; then echo 'running'; fi"
  }),
  (_i: number) => ({
    q: "What does `exec 3>&1` do?",
    o: ["Duplicates fd 1 (stdout) to fd 3", "Exec redirect", "Opens fd 3", "Redirects to 3"],
    c: 0,
    e: "3>&1 makes fd 3 a copy of stdout. Later: >&3 writes to original stdout.",
    de: "Save stdout before redirecting: exec 3>&1; exec > file; ...; exec >&3"
  }),
  (_i: number) => ({
    q: "What does `exec 3<&0` do?",
    o: ["Duplicates fd 0 (stdin) to fd 3", "Exec redirect", "Opens fd 3 for read", "Redirects stdin"],
    c: 0,
    e: "3<&0 makes fd 3 a copy of stdin.",
    de: "Save stdin before redirecting. exec 0<&3 restores."
  }),
  (_i: number) => ({
    q: "What does `read -u 3 line` do?",
    o: ["Reads from fd 3 instead of stdin", "Reads 3 lines", "Reads until 3", "Reads unit 3"],
    c: 0,
    e: "-u 3 reads from file descriptor 3.",
    de: "Use with exec 3<file. read -u 3 reads from that file."
  }),
  (_i: number) => ({
    q: "What does `exec 3>&-` do?",
    o: ["Closes fd 3", "Exec and close", "Closes fd 3", "Redirects to close"],
    c: 0,
    e: "3>&- closes file descriptor 3.",
    de: "Always close fds when done. exec 3>&- or exec 3<&-"
  }),
  (_i: number) => ({
    q: "What does `{ cmd; } 3>&1` do?",
    o: ["Runs cmd with fd 3 copied from stdout", "Redirects block", "Opens fd 3", "Redirects to 3"],
    c: 0,
    e: "3>&1 in the block applies to cmd. fd 3 = copy of stdout.",
    de: "Capture both stdout and stderr: { cmd 2>&1; } 3>&1"
  }),
  (_i: number) => ({
    q: "What does `IFS= read -r line` do?",
    o: ["Reads line without trimming (IFS empty)", "Reads with IFS", "Reads raw", "Reads IFS"],
    c: 0,
    e: "IFS= prevents trimming of leading/trailing whitespace.",
    de: "read normally trims. IFS= read -r preserves spaces."
  }),
  (_i: number) => ({
    q: "What does `read -d ''` do?",
    o: ["Reads until NUL (\\0)", "Reads until empty", "Reads delimiter", "Reads default"],
    c: 0,
    e: "-d '' sets delimiter to NUL. Reads until first \\0.",
    de: "find -print0 | while IFS= read -r -d '' f; do ..."
  }),
  (_i: number) => ({
    q: "What does `read -a arr` do?",
    o: ["Reads words into array arr", "Reads array", "Reads all", "Reads args"],
    c: 0,
    e: "read -a arr reads a line and splits into array by IFS.",
    de: "read -a words; echo ${words[0]}"
  }),
  (_i: number) => ({
    q: "What does `read -t 5` do?",
    o: ["Times out after 5 seconds", "Reads 5 chars", "Reads 5 lines", "Reads type 5"],
    c: 0,
    e: "read -t 5 waits for input max 5 seconds. Exit 1 if timeout.",
    de: "if read -t 5 -p 'Continue? '; then ..."
  }),
  (_i: number) => ({
    q: "What does `read -N 1` do?",
    o: ["Reads exactly 1 character", "Reads 1 line", "Reads N chars", "Reads 1 byte"],
    c: 0,
    e: "read -N 1 reads exactly 1 character (no delimiter needed).",
    de: "read -N 1 -p 'Press any key' for single key press."
  }),
  (_i: number) => ({
    q: "What does `select x in a b c` do?",
    o: ["Shows menu, sets x to choice", "Selects from list", "Picks x", "Chooses from a b c"],
    c: 0,
    e: "select displays numbered menu. User picks; x gets the choice.",
    de: "select f in *.txt; do cat \"$f\"; break; done"
  }),
  (_i: number) => ({
    q: "What does `PS3` control?",
    o: ["Prompt for select statement", "Third prompt", "Select prompt", "PS3 variable"],
    c: 0,
    e: "PS3 is the prompt for select (default: #?)",
    de: "PS3='Choose: '; select x in a b; do ..."
  }),
  (_i: number) => ({
    q: "What does `read -e` do?",
    o: ["Uses readline (editing, history)", "Reads with echo", "Reads exactly", "Reads env"],
    c: 0,
    e: "read -e enables line editing (arrow keys, backspace).",
    de: "Interactive mode. -e is default when not in script."
  }),
  (_i: number) => ({
    q: "What does `printf -v var '%s' x` do?",
    o: ["Stores result in var instead of printing", "Prints to var", "Assigns to var", "Var format"],
    c: 0,
    e: "printf -v var stores output in variable var.",
    de: "printf -v hex '%04x' 255 -> hex=00ff"
  }),
  (_i: number) => ({
    q: "What does `printf '%q' \"$var\"` do?",
    o: ["Escapes for safe reuse as shell input", "Quotes var", "Prints quoted", "Safe format"],
    c: 0,
    e: "%q escapes for safe shell use. eval \"$(printf '%q' \"$var\")\"",
    de: "Useful for debugging: see exactly how var would be parsed."
  }),
  (_i: number) => ({
    q: "What does `printf '%b' '\\n'` output?",
    o: ["A newline (interpret backslash)", "Literal \\n", "Backspace", "Binary"],
    c: 0,
    e: "%b interprets backslash escapes (\\n, \\t etc.).",
    de: "printf '%b' '\\n' same as echo -e '\\n'"
  }),
  (_i: number) => ({
    q: "What does `echo -e '\\t'` output?",
    o: ["A tab character", "Literal \\t", "Escape t", "Empty"],
    c: 0,
    e: "-e enables interpretation of backslash escapes.",
    de: "echo -e '\\n' newline. echo -n no trailing newline."
  }),
  (_i: number) => ({
    q: "What does `echo -n` do?",
    o: ["Omits trailing newline", "No output", "Number mode", "Null"],
    c: 0,
    e: "echo -n suppresses the final newline.",
    de: "printf is more portable. echo -n 'foo'"
  }),
  (_i: number) => ({
    q: "What does `eval 'cmd arg'` do?",
    o: ["Runs cmd arg as parsed by shell", "Evaluates string", "Runs eval", "Executes cmd"],
    c: 0,
    e: "eval parses and executes the string as shell code.",
    de: "Dangerous with user input. Use for dynamic construction."
  }),
  (_i: number) => ({
    q: "What does `caller` show?",
    o: ["Call stack (line, func, file)", "Caller info", "Who called", "Call stack"],
    c: 0,
    e: "caller prints line number and function name of caller.",
    de: "caller 0 for current. caller 1 for caller's caller."
  }),
  (_i: number) => ({
    q: "What does `builtin cmd` do?",
    o: ["Runs builtin even if alias/function exists", "Runs builtin", "Forces builtin", "Builtin command"],
    c: 0,
    e: "builtin cmd bypasses alias and function for cmd.",
    de: "alias ls='ls -la'; builtin ls runs original ls."
  }),
  (_i: number) => ({
    q: "What does `command cmd` do?",
    o: ["Runs cmd, skipping alias/function", "Runs command", "Forces external", "Command only"],
    c: 0,
    e: "command cmd bypasses alias and function.",
    de: "command ls runs real ls. command -v for path."
  }),
  (_i: number) => ({
    q: "What does `type -a ls` show?",
    o: ["All definitions of ls (alias, function, path)", "All types", "All matches", "All paths"],
    c: 0,
    e: "type -a shows all places ls would be found.",
    de: "Shows alias, then function, then /usr/bin/ls etc."
  }),
  (_i: number) => ({
    q: "What does `typeset -f` show?",
    o: ["All function definitions", "Function types", "All functions", "Function list"],
    c: 0,
    e: "typeset -f (or declare -f) lists all function definitions.",
    de: "typeset -f funcname shows just that function."
  }),
  (_i: number) => ({
    q: "What does `export -f func` do?",
    o: ["Exports function to child processes", "Exports function", "Makes func global", "Function export"],
    c: 0,
    e: "export -f makes the function available in subshells.",
    de: "bash -c 'func' works if func is exported."
  }),
  (_i: number) => ({
    q: "What does `declare -p var` show?",
    o: ["Declaration that would recreate var", "Var value", "Var type", "Var declaration"],
    c: 0,
    e: "declare -p outputs a declare statement that recreates the variable.",
    de: "declare -p PATH shows declare -x PATH=..."
  }),
  (_i: number) => ({
    q: "What does `readonly -p` show?",
    o: ["All readonly variables", "Readonly list", "Readonly vars", "Readonly print"],
    c: 0,
    e: "readonly -p lists all readonly variables.",
    de: "readonly (no args) also lists them."
  }),
  (_i: number) => ({
    q: "What does `compgen -c` show?",
    o: ["All commands (completion)", "Commands only", "Completions", "Commands list"],
    c: 0,
    e: "compgen -c lists commands that could complete.",
    de: "compgen -c grep | head -5"
  }),
  (_i: number) => ({
    q: "What does `compgen -v` show?",
    o: ["All variable names", "Variables only", "Var completions", "Variable list"],
    c: 0,
    e: "compgen -v lists variable names.",
    de: "Used by completion system."
  }),
  (_i: number) => ({
    q: "What does `complete -p cmd` show?",
    o: ["Completion spec for cmd", "Complete cmd", "cmd completion", "Completion for cmd"],
    c: 0,
    e: "complete -p shows the completion specification for cmd.",
    de: "complete -p git shows how git completion is configured."
  }),
  (_i: number) => ({
    q: "What does `bind -l` show?",
    o: ["List of key binding names", "Bind list", "Key bindings", "Binding list"],
    c: 0,
    e: "bind -l lists all readline function names.",
    de: "bind -p shows current bindings."
  }),
  (_i: number) => ({
    q: "What does `bind -x '\\C-l':clear` do?",
    o: ["Binds Ctrl+L to run clear command", "Binds key", "Ctrl+L binding", "Key binding"],
    c: 0,
    e: "bind -x runs a command when key is pressed.",
    de: "\\C-l is Ctrl+L. \\C-a is Ctrl+A."
  }),
  (_i: number) => ({
    q: "What does `fc -e vim` do?",
    o: ["Opens last command in vim for editing", "Edit with vim", "Vim edit", "FC edit"],
    c: 0,
    e: "fc -e vim uses vim to edit and re-run last command.",
    de: "FCEDIT=vim; fc to set default editor."
  }),
  (_i: number) => ({
    q: "What does `fc -s old=new` do?",
    o: ["Re-runs last command with old replaced by new", "Substitutes", "FC substitute", "Replace and run"],
    c: 0,
    e: "fc -s old=new is like ^old^new.",
    de: "fc -s runs last command. fc -s old=new substitutes."
  }),
  (_i: number) => ({
    q: "What does `PROMPT_COMMAND` run?",
    o: ["Before each primary prompt", "Before prompt", "Prompt command", "Pre-prompt"],
    c: 0,
    e: "PROMPT_COMMAND is executed before prompt is displayed.",
    de: "PROMPT_COMMAND='history -a' appends to history on each prompt."
  }),
  (_i: number) => ({
    q: "What does `DEBUG` trap run?",
    o: ["Before each simple command", "On debug", "Debug trap", "Before command"],
    c: 0,
    e: "trap 'cmd' DEBUG runs before each command.",
    de: "set -T or shopt -s extdebug. Can modify BASH_COMMAND."
  }),
  (_i: number) => ({
    q: "What does `RETURN` trap run?",
    o: ["When function or sourced script returns", "On return", "Return trap", "Function return"],
    c: 0,
    e: "trap 'cmd' RETURN runs when function or . script returns.",
    de: "Useful for cleanup in functions."
  }),
  (_i: number) => ({
    q: "What does `ERR` trap run?",
    o: ["When command fails (with set -e)", "On error", "Error trap", "Command failure"],
    c: 0,
    e: "trap 'cmd' ERR runs when command fails (with set -e or E).",
    de: "Requires set -e or set -o errtrace. BASH_LINENO available."
  }),
  (_i: number) => ({
    q: "What does `$BASH_COMMAND` contain in trap?",
    o: ["Command being executed when trap ran", "Bash command", "Current command", "Command string"],
    c: 0,
    e: "In trap, BASH_COMMAND is the command being executed.",
    de: "trap 'echo $BASH_COMMAND' DEBUG"
  }),
  (_i: number) => ({
    q: "What does `$LINENO` contain?",
    o: ["Current line number in script", "Line number", "Script line", "Current line"],
    c: 0,
    e: "LINENO is the current line number in the script or function.",
    de: "echo \"Error at line $LINENO\""
  }),
  (_i: number) => ({
    q: "What does `$SECONDS` contain?",
    o: ["Seconds since shell started", "Elapsed time", "Shell seconds", "Current seconds"],
    c: 0,
    e: "SECONDS increments each second. Can be set to start countdown.",
    de: "SECONDS=0; sleep 5; echo $SECONDS -> 5"
  }),
  (_i: number) => ({
    q: "What does `$RANDOM` produce?",
    o: ["Random 0-32767", "Random number", "Random int", "Random value"],
    c: 0,
    e: "RANDOM gives 0-32767. Assigning seeds it.",
    de: "echo $((RANDOM % 100)) for 0-99."
  }),
  (_i: number) => ({
    q: "What does `$PPID` contain?",
    o: ["Parent process ID", "Parent PID", "Process parent", "Parent process"],
    c: 0,
    e: "PPID is the PID of the shell's parent.",
    de: "ps -p $PPID shows parent process."
  }),
  (_i: number) => ({
    q: "What does `$OLDPWD` contain?",
    o: ["Previous working directory", "Old dir", "Last dir", "Previous dir"],
    c: 0,
    e: "OLDPWD is set by cd. cd - uses it.",
    de: "cd - is equivalent to cd $OLDPWD"
  }),
  (_i: number) => ({
    q: "What does `$PIPESTATUS` contain (bash)?",
    o: ["Exit codes of last pipeline", "Pipeline status", "Pipe status", "Last pipe exits"],
    c: 0,
    e: "PIPESTATUS is array of exit codes from last pipeline.",
    de: "ls | grep x | wc; echo ${PIPESTATUS[@]}"
  }),
  (_i: number) => ({
    q: "What does `$REPLY` contain after `read` without var?",
    o: ["The line read", "Read result", "Reply var", "Input line"],
    c: 0,
    e: "read without variable stores result in REPLY.",
    de: "read; echo $REPLY"
  }),
  (_i: number) => ({
    q: "What does `$OPTARG` contain in getopts?",
    o: ["Argument for option that takes value", "Option arg", "Opt argument", "Option value"],
    c: 0,
    e: "OPTARG is the value for options that take arguments.",
    de: "getopts 'a:b' opt; case $opt in b) echo $OPTARG;; esac"
  }),
  (_i: number) => ({
    q: "What does `$OPTIND` contain?",
    o: ["Index of next argument to process", "Option index", "Opt index", "Next arg index"],
    c: 0,
    e: "OPTIND is index of next arg. shift $((OPTIND-1)) to skip args.",
    de: "After getopts loop, OPTIND points past options."
  }),
  (_i: number) => ({
    q: "What does `[[ -v var ]]` test?",
    o: ["Whether var is set", "Whether var has value", "Whether var is valid", "Whether var exists"],
    c: 0,
    e: "[[ -v var ]] is true if var is set (even to empty).",
    de: "Bash 4.2+. Distinguishes unset from empty."
  }),
  (_i: number) => ({
    q: "What does `[[ -R var ]]` test?",
    o: ["Whether var is a nameref", "Whether var is ref", "Whether var is readonly", "Whether var is remote"],
    c: 0,
    e: "[[ -R var ]] is true if var is a nameref.",
    de: "declare -n x=y; [[ -R x ]] is true."
  }),
  (_i: number) => ({
    q: "What does `declare -n var=other` do?",
    o: ["Makes var a nameref to other", "Names var", "References other", "Nameref"],
    c: 0,
    e: "declare -n makes var an alias for other. ${!var} = value of other.",
    de: "var=other; declare -n x=var; x=foo changes var."
  }),
  (_i: number) => ({
    q: "What does `${var:-default}` expand to?",
    o: ["default if var unset or empty", "var or default", "Default value", "var default"],
    c: 0,
    e: ":- uses default when var is unset or empty.",
    de: ":- for empty too. - uses default only when unset."
  }),
  (_i: number) => ({
    q: "What does `${var:+default}` expand to?",
    o: ["default if var is set and non-empty", "Default if set", "Alternate", "var or default"],
    c: 0,
    e: "+ expands to default when var is set and non-empty.",
    de: "Opposite of :-. ${var:+alt} gives alt when var has value."
  }),
  (_i: number) => ({
    q: "What does `${var:offset:len}` expand to?",
    o: ["Substring of var", "Slice of var", "Substring", "Var slice"],
    c: 0,
    e: "Substring: offset chars, len length. ${var:2:3} = chars 2-4.",
    de: "0-based. ${s: -3} last 3 chars. Negative offset from end."
  }),
  (_i: number) => ({
    q: "What does `${var/pattern/repl}` do?",
    o: ["Replaces first match of pattern", "Substitute", "Replace pattern", "Var replace"],
    c: 0,
    e: "Replaces first match. ${var//pattern/repl} for all.",
    de: "x=hello; echo ${x/l/k} -> heklo"
  }),
  (_i: number) => ({
    q: "What does `${var/#pattern/repl}` do?",
    o: ["Replaces pattern only at start", "Prefix replace", "Start replace", "Anchor start"],
    c: 0,
    e: "# anchors to beginning. ${var/#x/y} -> y if starts with x.",
    de: "% anchors to end. ${var/%x/y} for suffix."
  }),
  (_i: number) => ({
    q: "What does `${!prefix*}` expand to?",
    o: ["Names of variables with prefix", "Indirect prefix", "Var names", "Prefix vars"],
    c: 0,
    e: "!prefix* and !prefix@ list variable names starting with prefix.",
    de: "x1=1 x2=2; echo ${!x*} -> x1 x2"
  }),
  (_i: number) => ({
    q: "What does `${var^}` do?",
    o: ["Uppercases first character", "Capitalize", "Upper first", "Title case"],
    c: 0,
    e: "^ uppercases first char. ^^ uppercases all. , and ,, for lowercase.",
    de: "x=hello; echo ${x^} -> Hello"
  }),
  (_i: number) => ({
    q: "What does `${var,,}` do?",
    o: ["Lowercases all characters", "Lowercase", "Lower all", "To lower"],
    c: 0,
    e: ",, lowercases all. , for first char only.",
    de: "x=HELLO; echo ${x,,} -> hello"
  }),
  (_i: number) => ({
    q: "What does `[[ a < b ]]` do (lexicographic)?",
    o: ["True if a sorts before b", "ASCII comparison", "String less", "Lexicographic order"],
    c: 0,
    e: "[[ ]] uses lexicographic (ASCII) comparison for < and >.",
    de: "[[ aa < ab ]] is true. Use -lt for numeric."
  }),
  (_i: number) => ({
    q: "What does `[[ a == b* ]]` do?",
    o: ["Pattern match: a matches b*", "Glob match", "Pattern match", "Wildcard match"],
    c: 0,
    e: "== with unquoted right side does pattern matching.",
    de: "[[ foo == f* ]] is true. [[ foo == 'f*' ]] is literal."
  }),
  (_i: number) => ({
    q: "What does `[[ a == b ]]` do with quoted b?",
    o: ["Literal string equality", "Exact match", "No glob", "Literal match"],
    c: 0,
    e: "Quoted right side: literal match, no pattern.",
    de: "[[ x == * ]] matches any. [[ x == '*' ]] matches asterisk."
  }),
  (_i: number) => ({
    q: "What does `(( x ))` return when x is 0?",
    o: ["Exit 1 (false)", "Exit 0", "0", "1"],
    c: 0,
    e: "(( expr )) exits 1 if expr is 0, else 0.",
    de: "(( 0 )) is false. (( 1 )) is true. if (( x )); then"
  }),
  (_i: number) => ({
    q: "What does `let x=1+2` do?",
    o: ["Sets x to 3 (arithmetic)", "Let assignment", "Arithmetic let", "Let x"],
    c: 0,
    e: "let is equivalent to (( )) for arithmetic.",
    de: "let x+=1; let 'x=1+2' for arithmetic assignment."
  }),
  (_i: number) => ({
    q: "What does `[[ -o option ]]` test?",
    o: ["Whether shell option is set", "Option test", "Shell option", "Option enabled"],
    c: 0,
    e: "[[ -o option ]] tests if option is enabled.",
    de: "[[ -o errexit ]] for set -e. [[ -o pipefail ]]"
  }),
  (_i: number) => ({
    q: "What does `[[ -t 0 ]]` test?",
    o: ["Whether stdin is a terminal", "Terminal test", "Stdin is tty", "Interactive"],
    c: 0,
    e: "[[ -t 0 ]] is true if stdin is a terminal.",
    de: "[[ -t 1 ]] for stdout. [[ -t 2 ]] for stderr."
  }),
  (_i: number) => ({
    q: "What does `[[ -p file ]]` test?",
    o: ["Whether file is a named pipe (FIFO)", "Pipe test", "Named pipe", "FIFO test"],
    c: 0,
    e: "-p tests if path is a FIFO.",
    de: "mkfifo f; [[ -p f ]] is true."
  }),
  (_i: number) => ({
    q: "What does `[[ -S file ]]` test?",
    o: ["Whether file is a socket", "Socket test", "Unix socket", "Socket file"],
    c: 0,
    e: "-S tests if path is a socket.",
    de: "/var/run/docker.sock is a socket."
  }),
  (_i: number) => ({
    q: "What does `[[ -O file ]]` test?",
    o: ["Whether file is owned by effective uid", "Owner test", "Owned by me", "Owner check"],
    c: 0,
    e: "-O is true if file is owned by current user.",
    de: "[[ -O file ]] && chmod 600 file"
  }),
  (_i: number) => ({
    q: "What does `[[ -G file ]]` test?",
    o: ["Whether file's group matches effective gid", "Group test", "Group match", "Group check"],
    c: 0,
    e: "-G tests if file's group matches your effective group.",
    de: "[[ -G file ]] for group-writable check."
  }),
  (_i: number) => ({
    q: "What does `[[ -N file ]]` test?",
    o: ["Whether file is modified since last read", "Newer test", "Modified since read", "File modified"],
    c: 0,
    e: "-N is true if file was modified since last read.",
    de: "Useful for 'has file changed' checks."
  }),
  (_i: number) => ({
    q: "What does `[[ file1 -nt file2 ]]` test?",
    o: ["file1 is newer than file2", "Newer than", "Modification time", "File newer"],
    c: 0,
    e: "-nt is newer than (modification time). -ot is older than.",
    de: "[[ script -nt cache ]] && echo 'rebuild'"
  }),
  (_i: number) => ({
    q: "What does `[[ a -ef b ]]` test?",
    o: ["a and b are same file (same inode)", "Same file", "Equal file", "Hard link"],
    c: 0,
    e: "-ef tests if same inode (hard link or same path).",
    de: "[[ $PWD -ef /tmp ]] for same directory."
  }),
  (_i: number) => ({
    q: "What does `[[ a == b ]]` do when b is unquoted?",
    o: ["Pattern match (glob)", "Glob match", "Pattern match", "Wildcard match"],
    c: 0,
    e: "Unquoted right side: pattern match. * matches any string.",
    de: "Quote to disable: [[ x == '*' ]] matches asterisk."
  }),
  (_i: number) => ({
    q: "What does `set -o pipefail` do?",
    o: ["Pipeline fails if any command fails", "Pipe on fail", "Fail on pipe", "Pipe fail mode"],
    c: 0,
    e: "pipefail: pipeline exit code is failure if any command fails.",
    de: "cmd1 | cmd2: without pipefail, only cmd2 exit matters. With it, any fail fails."
  }),
  (_i: number) => ({
    q: "What does `set -o noclobber` do?",
    o: ["Prevents > from overwriting existing files", "No overwrite", "Clobber protection", "Overwrite protection"],
    c: 0,
    e: "noclobber: > file fails if file exists. Use >| to override.",
    de: "Prevents accidental overwrites. >| file forces overwrite."
  }),
  (_i: number) => ({
    q: "What does `shopt -s lastpipe` do (bash 4.2+)?",
    o: ["Last pipeline command runs in current shell", "Last pipe in shell", "Pipeline in shell", "Last command in shell"],
    c: 0,
    e: "lastpipe: last command of pipeline runs in current shell, not subshell.",
    de: "echo foo | read x; echo $x works with lastpipe. Otherwise x is empty."
  }),
  (_i: number) => ({
    q: "What does `?(pattern)` match with extglob?",
    o: ["Zero or one occurrence of pattern", "Optional pattern", "One or zero", "Maybe pattern"],
    c: 0,
    e: "?(pattern) matches zero or one occurrence. Like regex ?.",
    de: "?(debug) matches empty, or debug. file?(.bak) matches file or file.bak."
  }),
  (_i: number) => ({
    q: "What does `*(pattern)` match with extglob?",
    o: ["Zero or more occurrences of pattern", "Any number", "Zero or more", "Repeated pattern"],
    c: 0,
    e: "*(pattern) matches zero or more. Like regex *.",
    de: "*(.txt) matches empty, .txt, .txt.txt, etc."
  }),
  (_i: number) => ({
    q: "What does `$BASH_SUBSHELL` contain?",
    o: ["Nesting level of subshells", "Subshell depth", "Subshell level", "Current subshell"],
    c: 0,
    e: "BASH_SUBSHELL is 0 in main shell, 1 in first subshell, etc.",
    de: "Useful for debugging. ( ( echo $BASH_SUBSHELL ) ) -> 2"
  }),
  (_i: number) => ({
    q: "What does `$BASH_ARGC` contain?",
    o: ["Number of args in current call stack frame", "Arg count", "Arguments", "Stack args"],
    c: 0,
    e: "BASH_ARGC is array of argument counts for each stack frame.",
    de: "Used with BASH_ARGV. Debugging call stack."
  }),
  (_i: number) => ({
    q: "What does `$BASH_ARGV` contain?",
    o: ["Arguments in reverse order for call stack", "Arg values", "Stack args", "Arguments array"],
    c: 0,
    e: "BASH_ARGV has all args from current and outer frames, reversed.",
    de: "BASH_ARGV[0] is last arg of current. Pairs with BASH_ARGC."
  }),
  (_i: number) => ({
    q: "What does `$EPOCHREALTIME` contain (bash 5+)?",
    o: ["Seconds since epoch with microsecond precision", "High-res time", "Epoch realtime", "Timestamp"],
    c: 0,
    e: "EPOCHREALTIME is seconds.microseconds since 1970-01-01.",
    de: "For timing: start=$EPOCHREALTIME; cmd; echo $EPOCHREALTIME - start"
  }),
  (_i: number) => ({
    q: "What does `$EPOCHSECONDS` contain (bash 5+)?",
    o: ["Integer seconds since epoch", "Epoch seconds", "Unix timestamp", "Seconds since 1970"],
    c: 0,
    e: "EPOCHSECONDS is whole seconds since 1970-01-01 UTC.",
    de: "date +%s equivalent. Updates each time accessed."
  }),
  (_i: number) => ({
    q: "What does `[[ file1 -ot file2 ]]` test?",
    o: ["file1 is older than file2", "Older than", "Modification time", "File older"],
    c: 0,
    e: "-ot is older than (modification time). Opposite of -nt.",
    de: "[[ backup -ot data ]] && echo 'backup is stale'"
  }),
  (_i: number) => ({
    q: "What does `[[ -k file ]]` test?",
    o: ["Whether file has sticky bit set", "Sticky bit", "Sticky", "Restricted deletion"],
    c: 0,
    e: "-k tests if sticky bit is set (e.g. /tmp).",
    de: "Sticky bit: only owner can delete. chmod +t sets it."
  }),
  (_i: number) => ({
    q: "What does `[[ -g file ]]` test?",
    o: ["Whether file has setgid bit set", "Setgid bit", "Setgid", "Group id"],
    c: 0,
    e: "-g tests if setgid bit is set.",
    de: "Setgid on dir: new files inherit group. chmod g+s."
  }),
  (_i: number) => ({
    q: "What does `[[ -u file ]]` test?",
    o: ["Whether file has setuid bit set", "Setuid bit", "Setuid", "User id"],
    c: 0,
    e: "-u tests if setuid bit is set.",
    de: "Setuid: run as owner. chmod u+s. /usr/bin/passwd example."
  }),
];
