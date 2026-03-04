// LEVEL 1 EXPERT — Advanced Terminal & Shell (103 unique questions)
// Replaces placeholders. All options are meaningful, no "Option A/B/C/D".

export const level1Expert = [
  (_i: number) => ({
    q: "What does `shopt -s extglob` enable?",
    o: ["Extended glob patterns (@(*.txt) etc.)", "Extended globbing", "Extra glob options", "External glob"],
    c: 0,
    e: "extglob enables ?(pattern), *(pattern), +(pattern), @(pattern), !(pattern).",
    de: "!(*.bak) matches all except .bak. Requires shopt -s extglob.",
    deBeginner: "shopt -s extglob turns on extended globs: ?() optional, *() zero or more, +() one or more, @() one of, !() not. !(*.bak) = all except .bak.",
    deExpert: "shopt -s extglob: ? * + @ ! patterns. !(pat) negation. @(a|b) one of. +(pat) one+. *(pat) zero+. fnmatch extension. Bash-specific."
  }),
  (_i: number) => ({
    q: "What does `@(a|b)` match with extglob?",
    o: ["Exactly one of a or b", "Both a and b", "a or b repeated", "a then b"],
    c: 0,
    e: "@(pattern) matches exactly one of the alternatives.",
    de: "ls @(a|b).txt matches a.txt or b.txt. | is alternation.",
    deBeginner: "With extglob, @(a|b) matches exactly one of a or b. ls @(a|b).txt matches a.txt or b.txt. The | means 'or'.",
    deExpert: "@(pat1|pat2|...): exactly one alternative. extglob. | inside is alternation. ls @(a|b).txt. Like regex (a|b)."
  }),
  (_i: number) => ({
    q: "What does `+(pattern)` match with extglob?",
    o: ["One or more occurrences of pattern", "Zero or more", "Exactly one", "Two or more"],
    c: 0,
    e: "+(pattern) matches one or more occurrences.",
    de: "+(a|b) matches a, b, aa, ab, ba, etc. Like regex +.",
    deBeginner: "+(pattern) matches one or more times. +(a|b) matches a, b, aa, ab, ba, bbb, etc. Like the + in regex.",
    deExpert: "+(pat): one or more. +(a|b) = a, b, aa, ab, ba, ... Like regex +. extglob. *(pat) is zero or more."
  }),
  (_i: number) => ({
    q: "What does `!(pattern)` match with extglob?",
    o: ["Anything except pattern", "Nothing", "Pattern negation", "Optional pattern"],
    c: 0,
    e: "!(pattern) matches anything that does not match pattern.",
    de: "rm !(*.txt) removes all except .txt. !(a|b) excludes a and b.",
    deBeginner: "!(pattern) matches anything that does NOT match the pattern. rm !(*.txt) deletes everything except .txt files. Need shopt -s extglob.",
    deExpert: "!(pat): negation. Matches if pat does not. rm !(*.txt). !(a|b) exclude a and b. extglob. Powerful for exclude lists."
  }),
  (_i: number) => ({
    q: "What does `shopt -s nullglob` do?",
    o: ["Expands to nothing when no matches", "Null glob pattern", "Empty glob", "No glob"],
    c: 0,
    e: "nullglob: if no files match, expand to nothing (not literal *).",
    de: "for f in *.xyz; do ... without nullglob: runs once with f=*.xyz.",
    deBeginner: "With nullglob, if *.xyz matches no files, the glob becomes nothing (zero words) instead of the literal *.xyz. So 'for f in *.xyz' doesn't run with f=*.xyz.",
    deExpert: "nullglob: no match -> expand to nothing. for f in *.xyz without: one iteration f=*.xyz. With: zero iterations. Safer loops."
  }),
  (_i: number) => ({
    q: "What does `shopt -s failglob` do?",
    o: ["Error when glob has no matches", "Fail on glob", "Fail glob expansion", "Fatal glob"],
    c: 0,
    e: "failglob: if no matches, command fails and error is printed.",
    de: "Opposite of nullglob. Safer for typos: ls *.tx fails.",
    deBeginner: "failglob makes the command fail if a glob matches nothing. ls *.tx would error instead of showing '*.tx'. Catches typos.",
    deExpert: "failglob: no match -> command fails. Opposite of nullglob. Catches typos. ls *.tx fails. Script safety."
  }),
  (_i: number) => ({
    q: "What does `shopt -s dotglob` do?",
    o: ["* matches hidden files (dotfiles)", "Dot in glob", "Glob dots", "Dot files only"],
    c: 0,
    e: "dotglob: * includes files starting with .",
    de: "cp * /backup with dotglob includes .bashrc.",
    deBeginner: "dotglob makes * include hidden files (names starting with .). cp * /backup would then copy .bashrc too.",
    deExpert: "dotglob: * includes dotfiles. Default * skips . and .. and dotfiles. cp * with dotglob includes .bashrc."
  }),
  (_i: number) => ({
    q: "What does `shopt -s globstar` do?",
    o: ["** matches any depth of directories", "Global star", "Recursive glob", "Star glob"],
    c: 0,
    e: "** matches zero or more directories. ls **/*.txt finds all .txt.",
    de: "find . -name '*.txt' equivalent. Requires bash 4+.",
    deBeginner: "globstar makes ** match any depth of directories. ls **/*.txt finds every .txt under the current dir. Like find . -name '*.txt'. Bash 4+.",
    deExpert: "globstar: ** zero or more dirs. **/*.txt recursive. Bash 4+. Slower than find for huge trees. Follows symlinks to dirs."
  }),
  (_i: number) => ({
    q: "What does `BASH_SOURCE[0]` contain?",
    o: ["Path to the script being executed", "Source of bash", "First script", "Bash source"],
    c: 0,
    e: "BASH_SOURCE[0] is the path of the current script (like $0 but reliable when sourced).",
    de: "dirname ${BASH_SOURCE[0]} for script dir. $0 can be wrong when sourced.",
    deBeginner: "BASH_SOURCE[0] is the path of the script that's running. When you source a script, $0 can be the wrong name; BASH_SOURCE[0] is correct. Use dirname ${BASH_SOURCE[0]} for the script's directory.",
    deExpert: "BASH_SOURCE: array, [0] current script. Reliable when sourced ($0 is caller). dirname ${BASH_SOURCE[0]} for script dir. Stack of source names."
  }),
  (_i: number) => ({
    q: "What does `FUNCNAME[0]` contain?",
    o: ["Name of current function", "First function", "Function name", "Current func"],
    c: 0,
    e: "FUNCNAME[0] is the name of the current function.",
    de: "Useful in debug: echo 'In ${FUNCNAME[0]}'",
    deBeginner: "FUNCNAME[0] is the name of the function you're currently in. Useful for debug messages: echo 'In ${FUNCNAME[0]}'.",
    deExpert: "FUNCNAME[0]: current function name. Stack. Empty in main. Debug: echo In ${FUNCNAME[0]}. BASH_LINENO pairs for line."
  }),
  (_i: number) => ({
    q: "What does `BASH_LINENO` contain?",
    o: ["Line numbers in call stack", "Current line", "Bash line", "Line number"],
    c: 0,
    e: "BASH_LINENO is array of line numbers in call stack.",
    de: "For debugging. ${BASH_LINENO[0]} is line that called current function.",
    deBeginner: "BASH_LINENO is an array of line numbers in the call stack. ${BASH_LINENO[0]} is the line that called the current function. Good for debugging.",
    deExpert: "BASH_LINENO: line numbers in call stack. [0] line that invoked current. With FUNCNAME, BASH_SOURCE for stack trace."
  }),
  (_i: number) => ({
    q: "What does `$BASH_REMATCH` contain after `[[ x =~ (a)(b) ]]`?",
    o: ["Array of regex match groups", "Full match", "Match result", "Regex match"],
    c: 0,
    e: "BASH_REMATCH[0] is full match, [1], [2] are captured groups.",
    de: "[[ abc =~ (.)(.) ]]; echo ${BASH_REMATCH[1]} -> a",
    deBeginner: "After [[ str =~ (group1)(group2) ]], BASH_REMATCH[0] is the full match, [1] and [2] are the captured groups. [[ abc =~ (.)(.) ]]; echo ${BASH_REMATCH[1]} prints a.",
    deExpert: "BASH_REMATCH: [0] full match, [1]...[n] capture groups. Set by =~. [[ abc =~ (.)(.) ]]; ${BASH_REMATCH[1]}=a. Read-only array."
  }),
  (_i: number) => ({
    q: "What does `trap '' SIGINT` do?",
    o: ["Ignores Ctrl+C (SIGINT)", "Traps SIGINT", "Disables trap", "Clears SIGINT"],
    c: 0,
    e: "trap '' SIGINT ignores the signal (empty string = no action).",
    de: "trap 'handler' SIGINT runs handler. trap - SIGINT restores default.",
    deBeginner: "trap '' SIGINT means ignore Ctrl+C (do nothing). Empty string = no handler. trap 'handler' SIGINT would run handler. trap - SIGINT restores default (exit).",
    deExpert: "trap '' SIGINT: ignore signal. '' = no-op. trap 'cmd' run cmd. trap - SIGINT restore default. SIG_IGN. Critical sections."
  }),
  (_i: number) => ({
    q: "What does `trap - EXIT` do?",
    o: ["Removes EXIT trap", "Traps exit", "Exits trap", "Clears exit trap"],
    c: 0,
    e: "trap - EXIT removes the EXIT trap.",
    de: "trap '' EXIT removes. trap 'cleanup' EXIT sets.",
    deBeginner: "trap - EXIT removes the EXIT trap (the command that runs when the script exits). Use trap 'cleanup' EXIT to set one.",
    deExpert: "trap - EXIT: clear EXIT trap. trap 'cmd' EXIT set. EXIT runs on normal exit or signal. Cleanup temp files."
  }),
  (_i: number) => ({
    q: "What does `kill -0 $pid` do?",
    o: ["Checks if process exists (no signal sent)", "Kills process 0", "Sends signal 0", "Tests PID"],
    c: 0,
    e: "kill -0 checks if process exists. Exit 0 if yes, non-zero if not.",
    de: "if kill -0 $pid 2>/dev/null; then echo 'running'; fi",
    deBeginner: "kill -0 $pid doesn't send a signal; it only checks if the process exists. Exit 0 if it exists, non-zero if not. if kill -0 $pid 2>/dev/null; then echo running; fi",
    deExpert: "kill -0 pid: signal 0, no signal sent. kill(2) checks existence. Exit 0 if exists. EPERM/ESRCH. Process alive check."
  }),
  (_i: number) => ({
    q: "What does `exec 3>&1` do?",
    o: ["Duplicates fd 1 (stdout) to fd 3", "Exec redirect", "Opens fd 3", "Redirects to 3"],
    c: 0,
    e: "3>&1 makes fd 3 a copy of stdout. Later: >&3 writes to original stdout.",
    de: "Save stdout before redirecting: exec 3>&1; exec > file; ...; exec >&3",
    deBeginner: "exec 3>&1 makes fd 3 a copy of stdout. You can then redirect stdout to a file (exec > file) and later restore it with exec >&3. Saves original stdout.",
    deExpert: "exec 3>&1: dup2(1, 3). Fd 3 = copy of stdout. Save before redirect. exec > file; ...; exec >&3 restore. Fd 3 must be open."
  }),
  (_i: number) => ({
    q: "What does `exec 3<&0` do?",
    o: ["Duplicates fd 0 (stdin) to fd 3", "Exec redirect", "Opens fd 3 for read", "Redirects stdin"],
    c: 0,
    e: "3<&0 makes fd 3 a copy of stdin.",
    de: "Save stdin before redirecting. exec 0<&3 restores.",
    deBeginner: "exec 3<&0 makes fd 3 a copy of stdin. Save it before redirecting stdin (exec < file). Later exec 0<&3 restores stdin.",
    deExpert: "exec 3<&0: dup(0) to 3. Save stdin. exec 0<file; ...; exec 0<&3 restore. Same pattern as stdout."
  }),
  (_i: number) => ({
    q: "What does `read -u 3 line` do?",
    o: ["Reads from fd 3 instead of stdin", "Reads 3 lines", "Reads until 3", "Reads unit 3"],
    c: 0,
    e: "-u 3 reads from file descriptor 3.",
    de: "Use with exec 3<file. read -u 3 reads from that file.",
    deBeginner: "read -u 3 reads from file descriptor 3 instead of stdin. Use after exec 3<file so you read from that file.",
    deExpert: "read -u fd: read from fd instead of 0. exec 3<file; read -u 3. For multiple fds, multiplexed read. Close with exec 3<&-."
  }),
  (_i: number) => ({
    q: "What does `exec 3>&-` do?",
    o: ["Closes fd 3", "Exec and close", "Closes fd 3", "Redirects to close"],
    c: 0,
    e: "3>&- closes file descriptor 3.",
    de: "Always close fds when done. exec 3>&- or exec 3<&-",
    deBeginner: "exec 3>&- closes file descriptor 3. Close fds when you're done so you don't leak them. exec 3<&- closes for read side.",
    deExpert: "exec n>&-: close fd n. 3<&- for read. Always close saved fds. Leaked fds can exhaust limit (ulimit -n)."
  }),
  (_i: number) => ({
    q: "What does `{ cmd; } 3>&1` do?",
    o: ["Runs cmd with fd 3 copied from stdout", "Redirects block", "Opens fd 3", "Redirects to 3"],
    c: 0,
    e: "3>&1 in the block applies to cmd. fd 3 = copy of stdout.",
    de: "Capture both stdout and stderr: { cmd 2>&1; } 3>&1",
    deBeginner: "The block runs cmd with fd 3 set to a copy of stdout. So inside the block you can use >&3 to write to original stdout. Used to capture both stdout and stderr.",
    deExpert: "Redirect applies to block. { cmd; } 3>&1: fd 3 = stdout for block. Capture: { cmd 2>&1; } 3>&1. Subshell vs current shell for { }."
  }),
  (_i: number) => ({
    q: "What does `IFS= read -r line` do?",
    o: ["Reads line without trimming (IFS empty)", "Reads with IFS", "Reads raw", "Reads IFS"],
    c: 0,
    e: "IFS= prevents trimming of leading/trailing whitespace.",
    de: "read normally trims. IFS= read -r preserves spaces.",
    deBeginner: "IFS= read -r line reads one line and does not trim leading or trailing spaces (empty IFS). read -r avoids treating backslash specially.",
    deExpert: "IFS= read -r: IFS empty for this command only. No word splitting of leading/trailing space. read -r no backslash escape. Preserve exact line."
  }),
  (_i: number) => ({
    q: "What does `read -d ''` do?",
    o: ["Reads until NUL (\\0)", "Reads until empty", "Reads delimiter", "Reads default"],
    c: 0,
    e: "-d '' sets delimiter to NUL. Reads until first \\0.",
    de: "find -print0 | while IFS= read -r -d '' f; do ...",
    deBeginner: "read -d '' uses NUL (\\0) as the line end instead of newline. Safe for filenames: find -print0 | while IFS= read -r -d '' f; do ...",
    deExpert: "read -d '': delimiter NUL. find -print0; while IFS= read -r -d '' f. Safe for any filename. No newline in path assumption."
  }),
  (_i: number) => ({
    q: "What does `read -a arr` do?",
    o: ["Reads words into array arr", "Reads array", "Reads all", "Reads args"],
    c: 0,
    e: "read -a arr reads a line and splits into array by IFS.",
    de: "read -a words; echo ${words[0]}",
    deBeginner: "read -a arr reads one line and splits it by IFS into the array arr. read -a words; echo ${words[0]} prints the first word.",
    deExpert: "read -a: split by IFS into array. read -a arr. arr[0], arr[1]... Like $@ from one line. IFS affects split."
  }),
  (_i: number) => ({
    q: "What does `read -t 5` do?",
    o: ["Times out after 5 seconds", "Reads 5 chars", "Reads 5 lines", "Reads type 5"],
    c: 0,
    e: "read -t 5 waits for input max 5 seconds. Exit 1 if timeout.",
    de: "if read -t 5 -p 'Continue? '; then ...",
    deBeginner: "read -t 5 waits up to 5 seconds for input. If nothing is entered in time, read exits with 1. if read -t 5 -p 'Continue? '; then ...",
    deExpert: "read -t n: timeout n seconds. Exit 1 on timeout. SIGALRM or select. read -t 5 -p 'y/n?'. Non-zero exit on timeout."
  }),
  (_i: number) => ({
    q: "What does `read -N 1` do?",
    o: ["Reads exactly 1 character", "Reads 1 line", "Reads N chars", "Reads 1 byte"],
    c: 0,
    e: "read -N 1 reads exactly 1 character (no delimiter needed).",
    de: "read -N 1 -p 'Press any key' for single key press.",
    deBeginner: "read -N 1 reads exactly one character; no need to press Enter. read -N 1 -p 'Press any key' for a single key press.",
    deExpert: "read -N n: read exactly n chars. No delimiter. read -N 1 one char. For raw key. -n reads until n chars or newline."
  }),
  (_i: number) => ({
    q: "What does `select x in a b c` do?",
    o: ["Shows menu, sets x to choice", "Selects from list", "Picks x", "Chooses from a b c"],
    c: 0,
    e: "select displays numbered menu. User picks; x gets the choice.",
    de: "select f in *.txt; do cat \"$f\"; break; done",
    deBeginner: "select shows a numbered menu (a, b, c). The user types a number; x gets the chosen word. select f in *.txt; do cat \"$f\"; break; done",
    deExpert: "select name in list; do ...; done. Menu, REPLY=choice number, name=word. PS3 prompt. Loop until break. Interactive menus."
  }),
  (_i: number) => ({
    q: "What does `PS3` control?",
    o: ["Prompt for select statement", "Third prompt", "Select prompt", "PS3 variable"],
    c: 0,
    e: "PS3 is the prompt for select (default: #?)",
    de: "PS3='Choose: '; select x in a b; do ...",
    deBeginner: "PS3 is the prompt shown by select (e.g. 'Choose: '). Default is #?. Set PS3='Choose: ' before your select.",
    deExpert: "PS3: prompt for select. Default #?. Shown before each menu. PS3='Pick: '; select x in a b; do ..."
  }),
  (_i: number) => ({
    q: "What does `read -e` do?",
    o: ["Uses readline (editing, history)", "Reads with echo", "Reads exactly", "Reads env"],
    c: 0,
    e: "read -e enables line editing (arrow keys, backspace).",
    de: "Interactive mode. -e is default when not in script.",
    deBeginner: "read -e turns on readline: you can use arrow keys, backspace, and history when typing. Default when you're at an interactive prompt, not in a script.",
    deExpert: "read -e: use readline. Editing, history. Default when interactive. In script often no -e. readline lib."
  }),
  (_i: number) => ({
    q: "What does `printf -v var '%s' x` do?",
    o: ["Stores result in var instead of printing", "Prints to var", "Assigns to var", "Var format"],
    c: 0,
    e: "printf -v var stores output in variable var.",
    de: "printf -v hex '%04x' 255 -> hex=00ff",
    deBeginner: "printf -v var stores the printf output in the variable var instead of printing it. printf -v hex '%04x' 255 puts '00ff' in hex.",
    deExpert: "printf -v var: assign output to var. No stdout. printf -v hex '%04x' 255. For formatted assignment. Bash builtin."
  }),
  (_i: number) => ({
    q: "What does `printf '%q' \"$var\"` do?",
    o: ["Escapes for safe reuse as shell input", "Quotes var", "Prints quoted", "Safe format"],
    c: 0,
    e: "%q escapes for safe shell use. eval \"$(printf '%q' \"$var\")\"",
    de: "Useful for debugging: see exactly how var would be parsed.",
    deBeginner: "printf '%q' prints the value escaped so it could be safely used as shell input. Good for debugging and for building safe eval strings.",
    deExpert: "printf '%q': shell-quote. Safe for eval. Escapes spaces, quotes, etc. eval \"$(printf '%q' \"$var\")\". Debug: show parseable form."
  }),
  (_i: number) => ({
    q: "What does `printf '%b' '\\n'` output?",
    o: ["A newline (interpret backslash)", "Literal \\n", "Backspace", "Binary"],
    c: 0,
    e: "%b interprets backslash escapes (\\n, \\t etc.).",
    de: "printf '%b' '\\n' same as echo -e '\\n'",
    deBeginner: "printf '%b' interprets backslash escapes in the argument. printf '%b' '\\n' prints a newline. Like echo -e.",
    deExpert: "printf '%b': interpret \\n \\t etc. in string. printf '%b' '\\n'. echo -e equivalent. POSIX."
  }),
  (_i: number) => ({
    q: "What does `echo -e '\\t'` output?",
    o: ["A tab character", "Literal \\t", "Escape t", "Empty"],
    c: 0,
    e: "-e enables interpretation of backslash escapes.",
    de: "echo -e '\\n' newline. echo -n no trailing newline.",
    deBeginner: "echo -e turns on backslash escapes. echo -e '\\t' prints a tab. echo -e '\\n' prints a newline. echo -n omits the trailing newline.",
    deExpert: "echo -e: interpret \\n \\t \\\\ etc. -n no newline. Not POSIX; printf preferred. echo -e '\\t' tab."
  }),
  (_i: number) => ({
    q: "What does `echo -n` do?",
    o: ["Omits trailing newline", "No output", "Number mode", "Null"],
    c: 0,
    e: "echo -n suppresses the final newline.",
    de: "printf is more portable. echo -n 'foo'",
    deBeginner: "echo -n prints the text without a newline at the end. echo -n 'foo' then echo 'bar' gives foobar on one line. printf is more portable.",
    deExpert: "echo -n: no trailing newline. printf '%s' same. Portable: printf. echo -n 'prompt: '"
  }),
  (_i: number) => ({
    q: "What does `eval 'cmd arg'` do?",
    o: ["Runs cmd arg as parsed by shell", "Evaluates string", "Runs eval", "Executes cmd"],
    c: 0,
    e: "eval parses and executes the string as shell code.",
    de: "Dangerous with user input. Use for dynamic construction.",
    deBeginner: "eval runs the string as shell commands. eval 'cmd arg' runs cmd arg. Very dangerous with user input; use only for controlled dynamic code.",
    deExpert: "eval: parse and execute argument as shell code. Two passes: expand then execute. Dangerous with unsanitized input. For dynamic code only."
  }),
  (_i: number) => ({
    q: "What does `caller` show?",
    o: ["Call stack (line, func, file)", "Caller info", "Who called", "Call stack"],
    c: 0,
    e: "caller prints line number and function name of caller.",
    de: "caller 0 for current. caller 1 for caller's caller.",
    deBeginner: "caller shows who called the current function: line number and name. caller 0 is current frame, caller 1 is the caller's caller. For stack traces.",
    deExpert: "caller [n]: stack frame. Line, func, file. caller 0 current. For stack traces, debug. BASH_SOURCE, FUNCNAME, BASH_LINENO related."
  }),
  (_i: number) => ({
    q: "What does `builtin cmd` do?",
    o: ["Runs builtin even if alias/function exists", "Runs builtin", "Forces builtin", "Builtin command"],
    c: 0,
    e: "builtin cmd bypasses alias and function for cmd.",
    de: "alias ls='ls -la'; builtin ls runs original ls.",
    deBeginner: "builtin cmd runs the shell built-in version of cmd, not an alias or function. alias ls='ls -la'; builtin ls runs the plain ls builtin.",
    deExpert: "builtin: bypass alias/function, run builtin. alias ls='ls -la'; builtin ls. For wrappers that need to call original."
  }),
  (_i: number) => ({
    q: "What does `command cmd` do?",
    o: ["Runs cmd, skipping alias/function", "Runs command", "Forces external", "Command only"],
    c: 0,
    e: "command cmd bypasses alias and function.",
    de: "command ls runs real ls. command -v for path.",
    deBeginner: "command cmd runs the real command, skipping any alias or function. command ls runs the actual ls. command -v shows the path.",
    deExpert: "command: bypass alias/function. command ls. command -v path. POSIX. For scripts that need unaliased behavior."
  }),
  (_i: number) => ({
    q: "What does `type -a ls` show?",
    o: ["All definitions of ls (alias, function, path)", "All types", "All matches", "All paths"],
    c: 0,
    e: "type -a shows all places ls would be found.",
    de: "Shows alias, then function, then /usr/bin/ls etc.",
    deBeginner: "type -a ls lists every way ls could be run: alias, function, then path(s). So you see alias first, then /usr/bin/ls.",
    deExpert: "type -a: all resolutions. Alias, function, builtin, path. Order of lookup. type -a ls. For debugging override."
  }),
  (_i: number) => ({
    q: "What does `typeset -f` show?",
    o: ["All function definitions", "Function types", "All functions", "Function list"],
    c: 0,
    e: "typeset -f (or declare -f) lists all function definitions.",
    de: "typeset -f funcname shows just that function.",
    deBeginner: "typeset -f (or declare -f) prints all function definitions. typeset -f funcname prints only that function. Same as declare -f.",
    deExpert: "typeset -f / declare -f: list function defs. typeset -f name just that. Output is re-sourcable. Ksh heritage."
  }),
  (_i: number) => ({
    q: "What does `export -f func` do?",
    o: ["Exports function to child processes", "Exports function", "Makes func global", "Function export"],
    c: 0,
    e: "export -f makes the function available in subshells.",
    de: "bash -c 'func' works if func is exported.",
    deBeginner: "export -f func puts the function in the environment so child shells (e.g. bash -c 'func') can use it. Only in bash.",
    deExpert: "export -f: export function to children. bash -c 'func' sees it. Environment serialization. Bash-specific."
  }),
  (_i: number) => ({
    q: "What does `declare -p var` show?",
    o: ["Declaration that would recreate var", "Var value", "Var type", "Var declaration"],
    c: 0,
    e: "declare -p outputs a declare statement that recreates the variable.",
    de: "declare -p PATH shows declare -x PATH=...",
    deBeginner: "declare -p var prints a declare command that would recreate that variable. declare -p PATH shows declare -x PATH=... So you can see type and value.",
    deExpert: "declare -p: show declaration. declare -p var. Recreates var. -x export, -i integer, -a array. For serialization, debug."
  }),
  (_i: number) => ({
    q: "What does `readonly -p` show?",
    o: ["All readonly variables", "Readonly list", "Readonly vars", "Readonly print"],
    c: 0,
    e: "readonly -p lists all readonly variables.",
    de: "readonly (no args) also lists them.",
    deBeginner: "readonly -p lists all readonly variables (and their values). readonly with no arguments does the same.",
    deExpert: "readonly -p: list readonly vars. declare -p form. readonly alone also lists. For audit."
  }),
  (_i: number) => ({
    q: "What does `compgen -c` show?",
    o: ["All commands (completion)", "Commands only", "Completions", "Commands list"],
    c: 0,
    e: "compgen -c lists commands that could complete.",
    de: "compgen -c grep | head -5",
    deBeginner: "compgen -c lists command names that could be used in completion (aliases, functions, PATH). compgen -c grep | head -5.",
    deExpert: "compgen -c: generate command completions. -c commands, -v vars, -f files. Used by completion system. compgen -c | head."
  }),
  (_i: number) => ({
    q: "What does `compgen -v` show?",
    o: ["All variable names", "Variables only", "Var completions", "Variable list"],
    c: 0,
    e: "compgen -v lists variable names.",
    de: "Used by completion system.",
    deBeginner: "compgen -v lists variable names (for completion). Used by the tab-completion system.",
    deExpert: "compgen -v: variable name completions. Used by complete. For custom completion scripts."
  }),
  (_i: number) => ({
    q: "What does `complete -p cmd` show?",
    o: ["Completion spec for cmd", "Complete cmd", "cmd completion", "Completion for cmd"],
    c: 0,
    e: "complete -p shows the completion specification for cmd.",
    de: "complete -p git shows how git completion is configured.",
    deBeginner: "complete -p cmd shows the completion setup for cmd. complete -p git shows how git completion is defined.",
    deExpert: "complete -p: print completion spec. complete -p git. -p print. For debug, see how completion is bound."
  }),
  (_i: number) => ({
    q: "What does `bind -l` show?",
    o: ["List of key binding names", "Bind list", "Key bindings", "Binding list"],
    c: 0,
    e: "bind -l lists all readline function names.",
    de: "bind -p shows current bindings.",
    deBeginner: "bind -l lists the names of readline functions (things you can bind keys to). bind -p shows the current key bindings.",
    deExpert: "bind -l: list readline function names. bind -p current bindings. bind -x '\\C-l': clear. readline config."
  }),
  (_i: number) => ({
    q: "What does `bind -x '\\C-l':clear` do?",
    o: ["Binds Ctrl+L to run clear command", "Binds key", "Ctrl+L binding", "Key binding"],
    c: 0,
    e: "bind -x runs a command when key is pressed.",
    de: "\\C-l is Ctrl+L. \\C-a is Ctrl+A.",
    deBeginner: "bind -x '\\C-l':clear makes Ctrl+L run the clear command. \\C-l is Ctrl+L, \\C-a is Ctrl+A. -x runs a shell command.",
    deExpert: "bind -x 'keys': cmd. Run shell command on key. \\C-l Ctrl+L. readline. For custom key behavior."
  }),
  (_i: number) => ({
    q: "What does `fc -e vim` do?",
    o: ["Opens last command in vim for editing", "Edit with vim", "Vim edit", "FC edit"],
    c: 0,
    e: "fc -e vim uses vim to edit and re-run last command.",
    de: "FCEDIT=vim; fc to set default editor.",
    deBeginner: "fc -e vim opens the last command in vim so you can edit it; when you save and quit, that command runs. FCEDIT=vim sets the default editor for fc.",
    deExpert: "fc -e editor: edit history with editor. fc -e vim. On save/exit, run. FCEDIT default. Histfile not modified until run."
  }),
  (_i: number) => ({
    q: "What does `fc -s old=new` do?",
    o: ["Re-runs last command with old replaced by new", "Substitutes", "FC substitute", "Replace and run"],
    c: 0,
    e: "fc -s old=new is like ^old^new.",
    de: "fc -s runs last command. fc -s old=new substitutes.",
    deBeginner: "fc -s old=new re-runs the last command but with the first 'old' replaced by 'new'. Same idea as ^old^new. fc -s alone re-runs last command.",
    deExpert: "fc -s [pat=repl]: re-run with substitute. fc -s old=new. Like ^old^new. fc -s runs last. No editor."
  }),
  (_i: number) => ({
    q: "What does `PROMPT_COMMAND` run?",
    o: ["Before each primary prompt", "Before prompt", "Prompt command", "Pre-prompt"],
    c: 0,
    e: "PROMPT_COMMAND is executed before prompt is displayed.",
    de: "PROMPT_COMMAND='history -a' appends to history on each prompt.",
    deBeginner: "PROMPT_COMMAND is run before each primary prompt. PROMPT_COMMAND='history -a' appends history to the file after every command. Good for keeping history in sync.",
    deExpert: "PROMPT_COMMAND: run before $PS1. Each prompt. history -a sync. Can be array in bash 4+. Runs in current shell."
  }),
  (_i: number) => ({
    q: "What does `DEBUG` trap run?",
    o: ["Before each simple command", "On debug", "Debug trap", "Before command"],
    c: 0,
    e: "trap 'cmd' DEBUG runs before each command.",
    de: "set -T or shopt -s extdebug. Can modify BASH_COMMAND.",
    deBeginner: "trap 'cmd' DEBUG runs your command before each simple command. With set -T or extdebug it runs before every command in a pipeline. You can change BASH_COMMAND.",
    deExpert: "trap DEBUG: before each command. set -T: inherit in functions. extdebug: every command in pipeline. BASH_COMMAND modifiable. Debugger base."
  }),
  (_i: number) => ({
    q: "What does `RETURN` trap run?",
    o: ["When function or sourced script returns", "On return", "Return trap", "Function return"],
    c: 0,
    e: "trap 'cmd' RETURN runs when function or . script returns.",
    de: "Useful for cleanup in functions.",
    deBeginner: "trap 'cmd' RETURN runs when a function returns or when a sourced script finishes. Good for cleanup that must run on every return.",
    deExpert: "trap RETURN: on return from function or sourced file. Not on script exit. For cleanup per function. Runs in context of returning frame."
  }),
  (_i: number) => ({
    q: "What does `ERR` trap run?",
    o: ["When command fails (with set -e)", "On error", "Error trap", "Command failure"],
    c: 0,
    e: "trap 'cmd' ERR runs when command fails (with set -e or E).",
    de: "Requires set -e or set -o errtrace. BASH_LINENO available.",
    deBeginner: "trap 'cmd' ERR runs when a command fails. Usually used with set -e. set -o errtrace makes it run in functions too. BASH_LINENO tells you the line.",
    deExpert: "trap ERR: on command failure. set -e or set -E errtrace. BASH_LINENO, BASH_SOURCE in trap. For error handling, logging."
  }),
  (_i: number) => ({
    q: "What does `$BASH_COMMAND` contain in trap?",
    o: ["Command being executed when trap ran", "Bash command", "Current command", "Command string"],
    c: 0,
    e: "In trap, BASH_COMMAND is the command being executed.",
    de: "trap 'echo $BASH_COMMAND' DEBUG",
    deBeginner: "Inside a trap, BASH_COMMAND is the command that was about to run (or just failed). trap 'echo $BASH_COMMAND' DEBUG prints each command before it runs.",
    deExpert: "BASH_COMMAND: in trap, the command being executed. DEBUG/ERR. Can modify in DEBUG (extdebug). For logging, debug."
  }),
  (_i: number) => ({
    q: "What does `$LINENO` contain?",
    o: ["Current line number in script", "Line number", "Script line", "Current line"],
    c: 0,
    e: "LINENO is the current line number in the script or function.",
    de: "echo \"Error at line $LINENO\"",
    deBeginner: "LINENO is the current line number in the script (or function). echo \"Error at line $LINENO\" for error messages.",
    deExpert: "LINENO: current line. Dynamic. In function, line in function. For error reporting. BASH_LINENO for call stack."
  }),
  (_i: number) => ({
    q: "What does `$SECONDS` contain?",
    o: ["Seconds since shell started", "Elapsed time", "Shell seconds", "Current seconds"],
    c: 0,
    e: "SECONDS increments each second. Can be set to start countdown.",
    de: "SECONDS=0; sleep 5; echo $SECONDS -> 5",
    deBeginner: "SECONDS is how many seconds the shell has been running. Set SECONDS=0 then later echo $SECONDS to time something. SECONDS=0; sleep 5; echo $SECONDS gives 5.",
    deExpert: "SECONDS: seconds since shell start. Read/write. SECONDS=0 reset. Increments each second. For simple timing. EPOCHSECONDS bash 5+."
  }),
  (_i: number) => ({
    q: "What does `$RANDOM` produce?",
    o: ["Random 0-32767", "Random number", "Random int", "Random value"],
    c: 0,
    e: "RANDOM gives 0-32767. Assigning seeds it.",
    de: "echo $((RANDOM % 100)) for 0-99.",
    deBeginner: "RANDOM gives a random number from 0 to 32767. Each read gives a new one. echo $((RANDOM % 100)) for 0-99. Assigning to RANDOM seeds it.",
    deExpert: "RANDOM: 0-32767. Pseudo-random. Assign to seed. $((RANDOM % n)) for 0..n-1. Not crypto. Bash."
  }),
  (_i: number) => ({
    q: "What does `$PPID` contain?",
    o: ["Parent process ID", "Parent PID", "Process parent", "Parent process"],
    c: 0,
    e: "PPID is the PID of the shell's parent.",
    de: "ps -p $PPID shows parent process.",
    deBeginner: "PPID is the process ID of the shell's parent. ps -p $PPID shows the parent process. Read-only.",
    deExpert: "PPID: parent PID. getppid(2). Read-only. ps -p $PPID. For daemons, init check."
  }),
  (_i: number) => ({
    q: "What does `$OLDPWD` contain?",
    o: ["Previous working directory", "Old dir", "Last dir", "Previous dir"],
    c: 0,
    e: "OLDPWD is set by cd. cd - uses it.",
    de: "cd - is equivalent to cd $OLDPWD",
    deBeginner: "OLDPWD is the directory you were in before the last cd. cd - goes there (same as cd $OLDPWD).",
    deExpert: "OLDPWD: previous cwd. Set by cd. cd - uses it. For toggle, back-navigation."
  }),
  (_i: number) => ({
    q: "What does `$PIPESTATUS` contain (bash)?",
    o: ["Exit codes of last pipeline", "Pipeline status", "Pipe status", "Last pipe exits"],
    c: 0,
    e: "PIPESTATUS is array of exit codes from last pipeline.",
    de: "ls | grep x | wc; echo ${PIPESTATUS[@]}",
    deBeginner: "PIPESTATUS is an array of the exit codes from the last pipeline. ls | grep x | wc; echo ${PIPESTATUS[@]} shows all three. Combine with set -o pipefail.",
    deExpert: "PIPESTATUS: array of pipeline exit codes. [0] first cmd, [1] second... Overwritten each pipeline. With pipefail, any non-zero. Bash."
  }),
  (_i: number) => ({
    q: "What does `$REPLY` contain after `read` without var?",
    o: ["The line read", "Read result", "Reply var", "Input line"],
    c: 0,
    e: "read without variable stores result in REPLY.",
    de: "read; echo $REPLY",
    deBeginner: "If you run read without a variable name, the line is stored in REPLY. read; echo $REPLY",
    deExpert: "read with no var: store in REPLY. Default var. read; echo $REPLY. Overwritten each read."
  }),
  (_i: number) => ({
    q: "What does `$OPTARG` contain in getopts?",
    o: ["Argument for option that takes value", "Option arg", "Opt argument", "Option value"],
    c: 0,
    e: "OPTARG is the value for options that take arguments.",
    de: "getopts 'a:b' opt; case $opt in b) echo $OPTARG;; esac",
    deBeginner: "When getopts parses an option that takes a value (e.g. -b value), OPTARG holds that value. getopts 'a:b' opt; case $opt in b) echo $OPTARG;; esac",
    deExpert: "OPTARG: value for option that takes argument. getopts 'a:b' opt; b) echo $OPTARG. Colon in optstring = takes arg."
  }),
  (_i: number) => ({
    q: "What does `$OPTIND` contain?",
    o: ["Index of next argument to process", "Option index", "Opt index", "Next arg index"],
    c: 0,
    e: "OPTIND is index of next arg. shift $((OPTIND-1)) to skip args.",
    de: "After getopts loop, OPTIND points past options.",
    deBeginner: "OPTIND is the index of the next argument to process. After the getopts loop, shift $((OPTIND-1)) drops the options so $1 is the first non-option argument.",
    deExpert: "OPTIND: index of next argv. After getopts, shift $((OPTIND-1)) to remove options. 1-based. For parsing rest of args."
  }),
  (_i: number) => ({
    q: "What does `[[ -v var ]]` test?",
    o: ["Whether var is set", "Whether var has value", "Whether var is valid", "Whether var exists"],
    c: 0,
    e: "[[ -v var ]] is true if var is set (even to empty).",
    de: "Bash 4.2+. Distinguishes unset from empty.",
    deBeginner: "[[ -v var ]] is true if var has been set (even to empty). So you can tell 'unset' from 'set to empty'. Bash 4.2+.",
    deExpert: "[[ -v var ]]: true if var set. Unset vs empty. Bash 4.2+. No $ before var. For optional params."
  }),
  (_i: number) => ({
    q: "What does `[[ -R var ]]` test?",
    o: ["Whether var is a nameref", "Whether var is ref", "Whether var is readonly", "Whether var is remote"],
    c: 0,
    e: "[[ -R var ]] is true if var is a nameref.",
    de: "declare -n x=y; [[ -R x ]] is true.",
    deBeginner: "[[ -R var ]] is true if var is a nameref (declare -n). declare -n x=y; [[ -R x ]] is true. No $ before var.",
    deExpert: "[[ -R var ]]: true if nameref. declare -n x=y. For reflection, generic code."
  }),
  (_i: number) => ({
    q: "What does `declare -n var=other` do?",
    o: ["Makes var a nameref to other", "Names var", "References other", "Nameref"],
    c: 0,
    e: "declare -n makes var an alias for other. ${!var} = value of other.",
    de: "var=other; declare -n x=var; x=foo changes var.",
    deBeginner: "declare -n var=other makes var a reference to other: reading or writing var uses other. var=other; declare -n x=var; x=foo changes var.",
    deExpert: "declare -n: nameref. var=other; declare -n x=var; x=foo -> other=foo. ${!var} value. For indirect assign. Bash 4.3+."
  }),
  (_i: number) => ({
    q: "What does `${var:-default}` expand to?",
    o: ["default if var unset or empty", "var or default", "Default value", "var default"],
    c: 0,
    e: ":- uses default when var is unset or empty.",
    de: ":- for empty too. - uses default only when unset.",
    deBeginner: "${var:-default} expands to default if var is unset or empty; otherwise to var. Use :- for 'unset or empty'. Use - for 'unset only'.",
    deExpert: "${var:-default}: substitute if unset or null. :- both, - unset only. ${var:=default} also assign. Common default pattern."
  }),
  (_i: number) => ({
    q: "What does `${var:+default}` expand to?",
    o: ["default if var is set and non-empty", "Default if set", "Alternate", "var or default"],
    c: 0,
    e: "+ expands to default when var is set and non-empty.",
    de: "Opposite of :-. ${var:+alt} gives alt when var has value.",
    deBeginner: "${var:+default} expands to default only when var is set and non-empty; otherwise to nothing. Opposite of :-. Useful for optional suffix.",
    deExpert: "${var:+alt}: expand alt if set and non-empty. Else empty. Opposite of :-. For conditional suffix, optional args."
  }),
  (_i: number) => ({
    q: "What does `${var:offset:len}` expand to?",
    o: ["Substring of var", "Slice of var", "Substring", "Var slice"],
    c: 0,
    e: "Substring: offset chars, len length. ${var:2:3} = chars 2-4.",
    de: "0-based. ${s: -3} last 3 chars. Negative offset from end.",
    deBeginner: "${var:offset:len} is the substring: len characters starting at offset (0-based). ${s: -3} is the last 3 characters. Omit len for rest of string.",
    deExpert: "${var:off:len}: substring. 0-based. Negative off from end. ${s: -3} last 3. len optional. Bash, ksh."
  }),
  (_i: number) => ({
    q: "What does `${var/pattern/repl}` do?",
    o: ["Replaces first match of pattern", "Substitute", "Replace pattern", "Var replace"],
    c: 0,
    e: "Replaces first match. ${var//pattern/repl} for all.",
    de: "x=hello; echo ${x/l/k} -> heklo",
    deBeginner: "${var/pattern/repl} replaces the first match of pattern in var with repl. x=hello; ${x/l/k} is heklo. Use // for replace all.",
    deExpert: "${var/pat/repl}: replace first. // all. /# anchor start, /% end. Globbing. x=hello; ${x/l/k} heklo. Bash."
  }),
  (_i: number) => ({
    q: "What does `${var/#pattern/repl}` do?",
    o: ["Replaces pattern only at start", "Prefix replace", "Start replace", "Anchor start"],
    c: 0,
    e: "# anchors to beginning. ${var/#x/y} -> y if starts with x.",
    de: "% anchors to end. ${var/%x/y} for suffix.",
    deBeginner: "${var/#pattern/repl} replaces pattern only at the start of var. # = anchor to start. ${var/%pattern/repl} anchors to end.",
    deExpert: "${var/#pat/repl}: replace at start. % at end. # prefix, % suffix. For strip prefix/suffix. Globbing."
  }),
  (_i: number) => ({
    q: "What does `${!prefix*}` expand to?",
    o: ["Names of variables with prefix", "Indirect prefix", "Var names", "Prefix vars"],
    c: 0,
    e: "!prefix* and !prefix@ list variable names starting with prefix.",
    de: "x1=1 x2=2; echo ${!x*} -> x1 x2",
    deBeginner: "${!prefix*} (or ${!prefix@}) expands to the names of variables that start with prefix. x1=1 x2=2; echo ${!x*} gives x1 x2.",
    deExpert: "${!prefix*}: indirect expansion, var names with prefix. ${!x*} x1 x2. @ quoted. For iterate over prefixed vars."
  }),
  (_i: number) => ({
    q: "What does `${var^}` do?",
    o: ["Uppercases first character", "Capitalize", "Upper first", "Title case"],
    c: 0,
    e: "^ uppercases first char. ^^ uppercases all. , and ,, for lowercase.",
    de: "x=hello; echo ${x^} -> Hello",
    deBeginner: "${var^} uppercases the first character. ${var^^} uppercases all. ${var,} and ${var,,} for lowercase. x=hello; ${x^} is Hello.",
    deExpert: "${var^}: upper first. ^^ all. , lower first. ,, all. Locale. x=hello; ${x^} Hello. Bash 4+."
  }),
  (_i: number) => ({
    q: "What does `${var,,}` do?",
    o: ["Lowercases all characters", "Lowercase", "Lower all", "To lower"],
    c: 0,
    e: ",, lowercases all. , for first char only.",
    de: "x=HELLO; echo ${x,,} -> hello",
    deBeginner: "${var,,} lowercases every character. ${var,} lowercases only the first. x=HELLO; ${x,,} is hello. Locale-dependent.",
    deExpert: "${var,,}: lowercase all. , first only. ^^ ,, for case. Locale. Bash 4+."
  }),
  (_i: number) => ({
    q: "What does `[[ a < b ]]` do (lexicographic)?",
    o: ["True if a sorts before b", "ASCII comparison", "String less", "Lexicographic order"],
    c: 0,
    e: "[[ ]] uses lexicographic (ASCII) comparison for < and >.",
    de: "[[ aa < ab ]] is true. Use -lt for numeric.",
    deBeginner: "[[ a < b ]] does string (lexicographic) comparison: true if a sorts before b. [[ aa < ab ]] is true. For numbers use -lt.",
    deExpert: "[[ a < b ]]: lexicographic. ASCII/collation. [[ aa < ab ]]. For numbers use (( )) or -lt. No word split in [[ ]]."
  }),
  (_i: number) => ({
    q: "What does `[[ a == b* ]]` do?",
    o: ["Pattern match: a matches b*", "Glob match", "Pattern match", "Wildcard match"],
    c: 0,
    e: "== with unquoted right side does pattern matching.",
    de: "[[ foo == f* ]] is true. [[ foo == 'f*' ]] is literal.",
    deBeginner: "When the right side of == is unquoted, it's a pattern. [[ foo == f* ]] is true. [[ foo == 'f*' ]] is literal (asterisk only).",
    deExpert: "[[ a == b* ]]: pattern match if right unquoted. * glob. Quote for literal. [[ foo == f* ]] true. [[ foo == 'f*' ]] literal *."
  }),
  (_i: number) => ({
    q: "What does `[[ a == b ]]` do with quoted b?",
    o: ["Literal string equality", "Exact match", "No glob", "Literal match"],
    c: 0,
    e: "Quoted right side: literal match, no pattern.",
    de: "[[ x == * ]] matches any. [[ x == '*' ]] matches asterisk.",
    deBeginner: "If b is quoted, [[ a == b ]] is literal equality: no glob. [[ x == * ]] matches any string; [[ x == '*' ]] matches only the character *.",
    deExpert: "Quoted right: literal. No pattern. [[ x == '*' ]] asterisk only. [[ x == * ]] any (unquoted *)."
  }),
  (_i: number) => ({
    q: "What does `(( x ))` return when x is 0?",
    o: ["Exit 1 (false)", "Exit 0", "0", "1"],
    c: 0,
    e: "(( expr )) exits 1 if expr is 0, else 0.",
    de: "(( 0 )) is false. (( 1 )) is true. if (( x )); then",
    deBeginner: "(( x )) returns exit 1 when x is 0 (false), exit 0 when non-zero (true). So (( 0 )) is false; if (( x )); then ...",
    deExpert: "(( expr )): arithmetic. Exit 0 if expr non-zero, 1 if zero. (( 0 )) false. For conditionals. $? from last expression."
  }),
  (_i: number) => ({
    q: "What does `let x=1+2` do?",
    o: ["Sets x to 3 (arithmetic)", "Let assignment", "Arithmetic let", "Let x"],
    c: 0,
    e: "let is equivalent to (( )) for arithmetic.",
    de: "let x+=1; let 'x=1+2' for arithmetic assignment.",
    deBeginner: "let does arithmetic. let x=1+2 sets x to 3. let x+=1 increments x. let 'x=1+2' when you need quotes. Same idea as (( )).",
    deExpert: "let expr: arithmetic. let x=1+2. Exit like (( )). let 'x=1+2' for spaces. Ksh heritage. (( )) preferred in bash."
  }),
  (_i: number) => ({
    q: "What does `[[ -o option ]]` test?",
    o: ["Whether shell option is set", "Option test", "Shell option", "Option enabled"],
    c: 0,
    e: "[[ -o option ]] tests if option is enabled.",
    de: "[[ -o errexit ]] for set -e. [[ -o pipefail ]]",
    deBeginner: "[[ -o option ]] is true if the shell option is set. [[ -o errexit ]] for set -e. [[ -o pipefail ]] for pipefail. Option name without -o.",
    deExpert: "[[ -o opt ]]: test set option. [[ -o errexit ]] set -e. Option names: errexit, pipefail, noclobber... For conditional behavior."
  }),
  (_i: number) => ({
    q: "What does `[[ -t 0 ]]` test?",
    o: ["Whether stdin is a terminal", "Terminal test", "Stdin is tty", "Interactive"],
    c: 0,
    e: "[[ -t 0 ]] is true if stdin is a terminal.",
    de: "[[ -t 1 ]] for stdout. [[ -t 2 ]] for stderr.",
    deBeginner: "[[ -t 0 ]] is true if stdin is a terminal (interactive). [[ -t 1 ]] for stdout, [[ -t 2 ]] for stderr. Use to detect 'am I in a script or at a prompt?'",
    deExpert: "[[ -t fd ]]: is fd a tty? isatty(3). [[ -t 0 ]] stdin. For interactive vs script. -t 1 stdout, -t 2 stderr."
  }),
  (_i: number) => ({
    q: "What does `[[ -p file ]]` test?",
    o: ["Whether file is a named pipe (FIFO)", "Pipe test", "Named pipe", "FIFO test"],
    c: 0,
    e: "-p tests if path is a FIFO.",
    de: "mkfifo f; [[ -p f ]] is true.",
    deBeginner: "[[ -p file ]] is true if file is a named pipe (FIFO). mkfifo f; [[ -p f ]] is true. -S for socket.",
    deExpert: "[[ -p path ]]: FIFO. mkfifo. stat S_ISFIFO. -S socket. For pipe/socket checks."
  }),
  (_i: number) => ({
    q: "What does `[[ -S file ]]` test?",
    o: ["Whether file is a socket", "Socket test", "Unix socket", "Socket file"],
    c: 0,
    e: "-S tests if path is a socket.",
    de: "/var/run/docker.sock is a socket.",
    deBeginner: "[[ -S file ]] is true if file is a Unix socket. /var/run/docker.sock is a socket. -p is FIFO, -S is socket.",
    deExpert: "[[ -S path ]]: socket. S_ISSOCK. Unix domain. /var/run/*.sock. Docker, X11. For socket detection."
  }),
  (_i: number) => ({
    q: "What does `[[ -O file ]]` test?",
    o: ["Whether file is owned by effective uid", "Owner test", "Owned by me", "Owner check"],
    c: 0,
    e: "-O is true if file is owned by current user.",
    de: "[[ -O file ]] && chmod 600 file",
    deBeginner: "[[ -O file ]] is true if the file is owned by you (effective uid). [[ -O file ]] && chmod 600 file. -G for group.",
    deExpert: "[[ -O path ]]: owned by effective uid. stat uid. -G effective gid. For permission checks before chmod."
  }),
  (_i: number) => ({
    q: "What does `[[ -G file ]]` test?",
    o: ["Whether file's group matches effective gid", "Group test", "Group match", "Group check"],
    c: 0,
    e: "-G tests if file's group matches your effective group.",
    de: "[[ -G file ]] for group-writable check.",
    deBeginner: "[[ -G file ]] is true if the file's group is your effective group. Useful with -w for group-writable checks.",
    deExpert: "[[ -G path ]]: group matches effective gid. stat gid. With -w for group write. For permission logic."
  }),
  (_i: number) => ({
    q: "What does `[[ -N file ]]` test?",
    o: ["Whether file is modified since last read", "Newer test", "Modified since read", "File modified"],
    c: 0,
    e: "-N is true if file was modified since last read.",
    de: "Useful for 'has file changed' checks.",
    deBeginner: "[[ -N file ]] is true if the file was modified since it was last read (mtime newer than atime in effect). Good for 'has this file changed?'",
    deExpert: "[[ -N path ]]: modified since last read. mtime > atime typically. For change detection. Not all systems."
  }),
  (_i: number) => ({
    q: "What does `[[ file1 -nt file2 ]]` test?",
    o: ["file1 is newer than file2", "Newer than", "Modification time", "File newer"],
    c: 0,
    e: "-nt is newer than (modification time). -ot is older than.",
    de: "[[ script -nt cache ]] && echo 'rebuild'",
    deBeginner: "[[ file1 -nt file2 ]] is true if file1's modification time is newer than file2's. [[ script -nt cache ]] && echo 'rebuild'. -ot is older than.",
    deExpert: "[[ f1 -nt f2 ]]: f1 mtime > f2. -ot older. stat mtime. For rebuild, staleness. Symlinks followed."
  }),
  (_i: number) => ({
    q: "What does `[[ a -ef b ]]` test?",
    o: ["a and b are same file (same inode)", "Same file", "Equal file", "Hard link"],
    c: 0,
    e: "-ef tests if same inode (hard link or same path).",
    de: "[[ $PWD -ef /tmp ]] for same directory.",
    deBeginner: "[[ a -ef b ]] is true if a and b are the same file (same inode): same path or hard links. [[ $PWD -ef /tmp ]] for same directory.",
    deExpert: "[[ a -ef b ]]: same file. stat inode/dev. Hard links, same path. For dedup, same file check."
  }),
  (_i: number) => ({
    q: "What does `[[ a == b ]]` do when b is unquoted?",
    o: ["Pattern match (glob)", "Glob match", "Pattern match", "Wildcard match"],
    c: 0,
    e: "Unquoted right side: pattern match. * matches any string.",
    de: "Quote to disable: [[ x == '*' ]] matches asterisk.",
    deBeginner: "When b is unquoted, == does pattern matching. [[ x == * ]] matches any x. [[ x == '*' ]] matches only the character *. Quote to get literal.",
    deExpert: "Unquoted right: glob. * any. [[ x == * ]] true for any x. [[ x == '*' ]] literal *. Quote to disable pattern."
  }),
  (_i: number) => ({
    q: "What does `set -o pipefail` do?",
    o: ["Pipeline fails if any command fails", "Pipe on fail", "Fail on pipe", "Pipe fail mode"],
    c: 0,
    e: "pipefail: pipeline exit code is failure if any command fails.",
    de: "cmd1 | cmd2: without pipefail, only cmd2 exit matters. With it, any fail fails.",
    deBeginner: "set -o pipefail makes the pipeline's exit code non-zero if any command in the pipeline fails. Without it, only the last command's exit matters.",
    deExpert: "set -o pipefail: pipeline exit = last non-zero if any fail. Default: last cmd only. Essential for fail-fast in pipelines. Bash, not POSIX."
  }),
  (_i: number) => ({
    q: "What does `set -o noclobber` do?",
    o: ["Prevents > from overwriting existing files", "No overwrite", "Clobber protection", "Overwrite protection"],
    c: 0,
    e: "noclobber: > file fails if file exists. Use >| to override.",
    de: "Prevents accidental overwrites. >| file forces overwrite.",
    deBeginner: "set -o noclobber makes > file fail if the file already exists, so you don't overwrite by accident. Use >| file to force overwrite.",
    deExpert: "set -o noclobber: > fails if file exists. >| override. O_EXCL. Prevents accidental overwrite. Interactive safety."
  }),
  (_i: number) => ({
    q: "What does `shopt -s lastpipe` do (bash 4.2+)?",
    o: ["Last pipeline command runs in current shell", "Last pipe in shell", "Pipeline in shell", "Last command in shell"],
    c: 0,
    e: "lastpipe: last command of pipeline runs in current shell, not subshell.",
    de: "echo foo | read x; echo $x works with lastpipe. Otherwise x is empty.",
    deBeginner: "With lastpipe, the last command in a pipeline runs in the current shell (not a subshell). So echo foo | read x; echo $x works and $x is foo. Otherwise $x is empty. Bash 4.2+.",
    deExpert: "shopt -s lastpipe: last cmd in pipeline in current shell. echo foo | read x; $x set. Default: subshell, $x empty. Bash 4.2+. Job control interaction."
  }),
  (_i: number) => ({
    q: "What does `?(pattern)` match with extglob?",
    o: ["Zero or one occurrence of pattern", "Optional pattern", "One or zero", "Maybe pattern"],
    c: 0,
    e: "?(pattern) matches zero or one occurrence. Like regex ?.",
    de: "?(debug) matches empty, or debug. file?(.bak) matches file or file.bak.",
    deBeginner: "?(pattern) matches zero or one time. file?(.bak) matches file or file.bak. ?(debug) matches nothing or debug. Like regex ?. Need extglob.",
    deExpert: "?(pat): zero or one. extglob. file?(.bak) file or file.bak. Like regex ?. Optional part."
  }),
  (_i: number) => ({
    q: "What does `*(pattern)` match with extglob?",
    o: ["Zero or more occurrences of pattern", "Any number", "Zero or more", "Repeated pattern"],
    c: 0,
    e: "*(pattern) matches zero or more. Like regex *.",
    de: "*(.txt) matches empty, .txt, .txt.txt, etc.",
    deBeginner: "*(pattern) matches zero or more occurrences. *(.txt) matches empty, .txt, .txt.txt, etc. Like regex *. Need extglob.",
    deExpert: "*(pat): zero or more. extglob. *(.txt). Like regex *. +() one or more. @() exactly one."
  }),
  (_i: number) => ({
    q: "What does `$BASH_SUBSHELL` contain?",
    o: ["Nesting level of subshells", "Subshell depth", "Subshell level", "Current subshell"],
    c: 0,
    e: "BASH_SUBSHELL is 0 in main shell, 1 in first subshell, etc.",
    de: "Useful for debugging. ( ( echo $BASH_SUBSHELL ) ) -> 2",
    deBeginner: "BASH_SUBSHELL is 0 in the main shell and increases in subshells. ( ( echo $BASH_SUBSHELL ) ) prints 2. Good for debugging.",
    deExpert: "BASH_SUBSHELL: subshell depth. 0 main, 1 in ( ), pipe. ( ( echo $BASH_SUBSHELL ) ) -> 2. For debug, pipe context."
  }),
  (_i: number) => ({
    q: "What does `$BASH_ARGC` contain?",
    o: ["Number of args in current call stack frame", "Arg count", "Arguments", "Stack args"],
    c: 0,
    e: "BASH_ARGC is array of argument counts for each stack frame.",
    de: "Used with BASH_ARGV. Debugging call stack.",
    deBeginner: "BASH_ARGC is an array of how many arguments each stack frame has. Used with BASH_ARGV for debugging the call stack.",
    deExpert: "BASH_ARGC: array of arg counts per frame. With BASH_ARGV for stack. Debugging. [0] current frame."
  }),
  (_i: number) => ({
    q: "What does `$BASH_ARGV` contain?",
    o: ["Arguments in reverse order for call stack", "Arg values", "Stack args", "Arguments array"],
    c: 0,
    e: "BASH_ARGV has all args from current and outer frames, reversed.",
    de: "BASH_ARGV[0] is last arg of current. Pairs with BASH_ARGC.",
    deBeginner: "BASH_ARGV holds the arguments from the call stack in reverse order. BASH_ARGV[0] is the last argument of the current frame. Pairs with BASH_ARGC.",
    deExpert: "BASH_ARGV: args in reverse, all frames. [0] last arg of current. With BASH_ARGC. For stack introspection."
  }),
  (_i: number) => ({
    q: "What does `$EPOCHREALTIME` contain (bash 5+)?",
    o: ["Seconds since epoch with microsecond precision", "High-res time", "Epoch realtime", "Timestamp"],
    c: 0,
    e: "EPOCHREALTIME is seconds.microseconds since 1970-01-01.",
    de: "For timing: start=$EPOCHREALTIME; cmd; echo $EPOCHREALTIME - start",
    deBeginner: "EPOCHREALTIME (bash 5+) is seconds since 1970 with decimal (e.g. 1234567890.123456). Good for precise timing: start=$EPOCHREALTIME; cmd; echo $EPOCHREALTIME - start",
    deExpert: "EPOCHREALTIME: seconds since epoch, fractional. Microsecond. Bash 5+. For high-res timing. gettimeofday."
  }),
  (_i: number) => ({
    q: "What does `$EPOCHSECONDS` contain (bash 5+)?",
    o: ["Integer seconds since epoch", "Epoch seconds", "Unix timestamp", "Seconds since 1970"],
    c: 0,
    e: "EPOCHSECONDS is whole seconds since 1970-01-01 UTC.",
    de: "date +%s equivalent. Updates each time accessed.",
    deBeginner: "EPOCHSECONDS (bash 5+) is whole seconds since 1970-01-01 UTC, like date +%s. Updates when you read it (dynamic).",
    deExpert: "EPOCHSECONDS: integer seconds since epoch. date +%s. Bash 5+. Dynamic. time(2). For timestamps."
  }),
  (_i: number) => ({
    q: "What does `[[ file1 -ot file2 ]]` test?",
    o: ["file1 is older than file2", "Older than", "Modification time", "File older"],
    c: 0,
    e: "-ot is older than (modification time). Opposite of -nt.",
    de: "[[ backup -ot data ]] && echo 'backup is stale'",
    deBeginner: "[[ file1 -ot file2 ]] is true if file1 is older than file2 (modification time). [[ backup -ot data ]] && echo 'backup is stale'. -ot is the opposite of -nt.",
    deExpert: "[[ f1 -ot f2 ]]: f1 mtime < f2. Older than. Opposite of -nt. For staleness, backup checks."
  }),
  (_i: number) => ({
    q: "What does `[[ -k file ]]` test?",
    o: ["Whether file has sticky bit set", "Sticky bit", "Sticky", "Restricted deletion"],
    c: 0,
    e: "-k tests if sticky bit is set (e.g. /tmp).",
    de: "Sticky bit: only owner can delete. chmod +t sets it.",
    deBeginner: "[[ -k file ]] is true if the sticky bit is set (e.g. /tmp). With sticky bit, only the owner can delete the file. chmod +t sets it.",
    deExpert: "[[ -k path ]]: sticky bit. S_ISVTX. /tmp. Only owner can delete. chmod +t. For dirs."
  }),
  (_i: number) => ({
    q: "What does `[[ -g file ]]` test?",
    o: ["Whether file has setgid bit set", "Setgid bit", "Setgid", "Group id"],
    c: 0,
    e: "-g tests if setgid bit is set.",
    de: "Setgid on dir: new files inherit group. chmod g+s.",
    deBeginner: "[[ -g file ]] is true if the setgid bit is set. On a directory, new files inherit the directory's group. chmod g+s sets it.",
    deExpert: "[[ -g path ]]: setgid. S_ISGID. Dir: new files inherit group. chmod g+s. For shared dirs."
  }),
  (_i: number) => ({
    q: "What does `[[ -u file ]]` test?",
    o: ["Whether file has setuid bit set", "Setuid bit", "Setuid", "User id"],
    c: 0,
    e: "-u tests if setuid bit is set.",
    de: "Setuid: run as owner. chmod u+s. /usr/bin/passwd example.",
    deBeginner: "[[ -u file ]] is true if the setuid bit is set. Setuid programs run as the file owner (e.g. /usr/bin/passwd). chmod u+s sets it.",
    deExpert: "[[ -u path ]]: setuid. S_ISUID. Run as owner. chmod u+s. passwd, sudo. Security-sensitive."
  }),
];
