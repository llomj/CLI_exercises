// LEVEL 3 EXPERT — File & Text Processing (100 unique questions)
// Replaces placeholders. All options are meaningful, no "Option A/B/C/D".

export const level3Expert = [
  (_i: number) => ({
    q: "What does `sed ':a;N;$!ba;s/\\n/ /g'` do?",
    o: ["Joins all lines into one (replaces newlines with space)", "Join all lines", "Multi-line to one", "Slurp and join"],
    c: 0,
    e: "sed slurps all lines into pattern space, then replaces \\n.",
    de: ":a label; N append next; $!ba branch if not last. Classic sed slurp."
  }),
  (_i: number) => ({
    q: "What does `sed -n '1~2p'` print?",
    o: ["Every other line starting at 1 (odd lines)", "Odd lines", "Every 2nd", "Step 2"],
    c: 0,
    e: "sed '1~2' matches line 1, 3, 5... (start~step).",
    de: "sed -n '2~2p' for even. first~step address."
  }),
  (_i: number) => ({
    q: "What does `sed 's/\\(.\\).*/\\1/'` do?",
    o: ["Keeps only first character of each line", "First char", "Capture group", "Single char"],
    c: 0,
    e: "\\1 is backreference. \\(.\\) captures first char, .* rest. Replace with \\1.",
    de: "sed backreferences. \\(...\\) captures, \\1 references. Up to \\9."
  }),
  (_i: number) => ({
    q: "What does `awk '!seen[$0]++'` do?",
    o: ["Prints first occurrence of each unique line", "Unique lines", "Dedupe", "First of each"],
    c: 0,
    e: "!seen[$0]++: if not seen, print. seen[$0]++ counts. First time true.",
    de: "One-liner dedup. Faster than sort -u for order preservation."
  }),
  (_i: number) => ({
    q: "What does `awk 'NR==FNR{a[$1];next}$1 in a' f1 f2` do?",
    o: ["Prints lines of f2 whose first field is in f1", "Join on field 1", "Lookup", "Filter by f1"],
    c: 0,
    e: "NR==FNR: first file. Build array. next. Second file: $1 in a.",
    de: "Classic awk two-file pattern. FNR resets per file, NR doesn't."
  }),
  (_i: number) => ({
    q: "What does `awk -v OFS=',' '{$1=$1;print}'` do?",
    o: ["Reformats with comma between fields (rebuilds $0)", "CSV output", "Reformat fields", "OFS reformat"],
    c: 0,
    e: "$1=$1 forces rebuild of $0 with new OFS.",
    de: "Parsing then output with different delimiter. $1=$1 triggers."
  }),
  (_i: number) => ({
    q: "What does `grep -P '\\d+'` match?",
    o: ["One or more digits (Perl regex)", "Digits", "Perl \\d", "Number sequence"],
    c: 0,
    e: "grep -P uses Perl. \\d = digit. + = one or more.",
    de: "grep -E '[0-9]+' equivalent. -P for \\w \\s \\D etc."
  }),
  (_i: number) => ({
    q: "What does `grep -E '^.{10,20}$'` match?",
    o: ["Lines 10-20 chars long", "Length range", "Line length", "10-20 chars"],
    c: 0,
    e: "grep -E. .{10,20} = 10 to 20 of any. ^ $ anchors.",
    de: "Regex quantifier. {n,m} = n to m. {n} = exactly n."
  }),
  (_i: number) => ({
    q: "What does `grep -oP 'pattern'` with -P give?",
    o: ["Only matching part, Perl regex", "Match only PCRE", "Perl match only", "PCRE extract"],
    c: 0,
    e: "grep -oP combines -o and -P. Extract with Perl regex.",
    de: "Useful for parsing. echo 'a1b2' | grep -oP '\\d+' -> 1, 2."
  }),
  (_i: number) => ({
    q: "What does `sed 's/.*/\\L&/'` do (GNU)?",
    o: ["Converts line to lowercase", "Lowercase", "\\L modifier", "To lower"],
    c: 0,
    e: "\\L in replacement = lowercase. & = match. \\U = uppercase.",
    de: "sed 's/.*/\\U&/' uppercase. \\E ends. GNU sed only."
  }),
  (_i: number) => ({
    q: "What does `awk 'BEGIN{RS=\"\"} {print NR}'` use?",
    o: ["Empty RS = paragraph mode (blank line separated)", "Paragraph mode", "RS empty", "Block mode"],
    c: 0,
    e: "RS=\"\" means records are paragraphs. Blank line = separator.",
    de: "awk processes paragraphs. ORS for output. Multi-line records."
  }),
  (_i: number) => ({
    q: "What does `awk '{$0=tolower($0)}1'` do?",
    o: ["Converts line to lowercase and prints", "Lowercase", "tolower", "Convert case"],
    c: 0,
    e: "tolower($0) converts. 1 is true, prints. Pattern 1 = always.",
    de: "awk '{$0=toupper($0)}1' for upper. tr is simpler for case."
  }),
  (_i: number) => ({
    q: "What does `sort -k1,1 -k2,2n` do?",
    o: ["Primary key field 1, secondary key field 2 numeric", "Multi-key sort", "Two keys", "Primary secondary"],
    c: 0,
    e: "sort -k1,1 then -k2,2n. First by field 1, then field 2 numeric.",
    de: "Order matters. -k2,2n = key 2 only, numeric. Stable with -s."
  }),
  (_i: number) => ({
    q: "What does `join -a 1 f1 f2` do?",
    o: ["Includes unpairable lines from f1", "Left join", "Include f1", "All from f1"],
    c: 0,
    e: "join -a 1 prints lines from f1 with no match in f2.",
    de: "-a 1 = file 1 unpaired. -a 2 for file 2. -a 1 -a 2 = full outer."
  }),
  (_i: number) => ({
    q: "What does `paste -d'|' - - -` with three - do?",
    o: ["Reads stdin, groups 3 lines per output line with |", "Triplet paste", "Stdin groups", "3-way paste"],
    c: 0,
    e: "paste - - - reads stdin, outputs 3 lines joined by |.",
    de: "cat file | paste - - - for 3 columns. - = stdin."
  }),
  (_i: number) => ({
    q: "What does `diff -q f1 f2` output?",
    o: ["Only reports if files differ (no details)", "Brief diff", "Quick diff", "Different only"],
    c: 0,
    e: "diff -q only says if different. No line-by-line.",
    de: "diff -qr for dirs. Exit 1 if differ. For scripts."
  }),
  (_i: number) => ({
    q: "What does `diff -w` ignore?",
    o: ["White space changes", "Whitespace", "Space changes", "Ignore space"],
    c: 0,
    e: "diff -w ignores all whitespace differences.",
    de: "diff -b ignores trailing. -w ignores all. For code."
  }),
  (_i: number) => ({
    q: "What does `patch -R` do?",
    o: ["Reverses patch (undo)", "Reverse", "Revert patch", "Undo"],
    c: 0,
    e: "patch -R applies patch in reverse. Undo.",
    de: "patch -R -p1 < file.patch. -R = reverse."
  }),
  (_i: number) => ({
    q: "What does `patch -p1` strip?",
    o: ["One leading path component", "Strip path", "Path level", "Remove prefix"],
    c: 0,
    e: "patch -p1 strips a/ or a from paths in patch.",
    de: "patch -p0 = no strip. -p2 strips a/b/. For different dir structure."
  }),
  (_i: number) => ({
    q: "What does `comm` require of its input?",
    o: ["Sorted lines", "Sorted", "Pre-sorted", "Ordered"],
    c: 0,
    e: "comm expects sorted input. sort first.",
    de: "comm f1 f2. sort f1 f2 | comm -12 - - for common (wrong). comm needs two files."
  }),
  (_i: number) => ({
    q: "What does `tr -c 'a-z' '\\n'` do?",
    o: ["Replaces non-letters with newlines", "Complement replace", "Non-alpha to newline", "Complement"],
    c: 0,
    e: "tr -c: complement of set. Non a-z -> newline.",
    de: "Tokenize. tr -c '[:alnum:]' '\\n' for words. -c = complement."
  }),
  (_i: number) => ({
    q: "What does `tr -d '\\0'` do?",
    o: ["Deletes null bytes", "Remove nulls", "Delete NUL", "Strip null"],
    c: 0,
    e: "tr -d removes characters. \\0 = null byte.",
    de: "tr -d '\\0' < file. For cleaning binary. xargs -0 uses null."
  }),
  (_i: number) => ({
    q: "What does `cut` not handle well?",
    o: ["Variable-width or quoted fields", "Variable fields", "CSV quoted", "Complex delimiters"],
    c: 0,
    e: "cut uses fixed delimiter. Fails on \"a,b\",c style.",
    de: "Use awk -F',' or csv tools for CSV. cut for simple."
  }),
  (_i: number) => ({
    q: "What does `awk 'getline < \"file\"'` do?",
    o: ["Reads next line from file into $0", "Read from file", "Getline", "External read"],
    c: 0,
    e: "getline < file reads from file. Changes $0.",
    de: "getline var < file into var. getline in pipe. Advanced."
  }),
  (_i: number) => ({
    q: "What does `awk 'system(\"cmd\")'` do?",
    o: ["Runs shell command, returns exit code", "System call", "Run command", "Shell exec"],
    c: 0,
    e: "awk system() runs command. Returns exit status.",
    de: "awk '{system(\"echo \" $1)}'. | getline for output capture."
  }),
  (_i: number) => ({
    q: "What does `m4` process?",
    o: ["Macro expansion (preprocessor)", "Macros", "M4 macros", "Preprocessor"],
    c: 0,
    e: "m4 expands macros. define, include, etc.",
    de: "Used by sendmail, autoconf. General macro processor."
  }),
  (_i: number) => ({
    q: "What does `envsubst` do?",
    o: ["Substitutes $VAR from environment", "Env substitute", "Variable sub", "Env expand"],
    c: 0,
    e: "envsubst replaces $VAR with env values. For config templates.",
    de: "echo '$HOME' | envsubst. envsubst '$VAR' for specific. gettext."
  }),
  (_i: number) => ({
    q: "What does `sed 's/.*/\\E&/'` do (GNU)?",
    o: ["\\E ends \\U/\\L; & = match, so no change if no prior", "End case", "\\E modifier", "Reset case"],
    c: 0,
    e: "\\E ends case conversion. In s/old/\\U&\\E/ would uppercase match.",
    de: "sed 's/foo/\\U&\\E/' uppercases foo. \\E stops \\U."
  }),
  (_i: number) => ({
    q: "What does `grep -Z` output?",
    o: ["Null byte after filename (for xargs -0)", "Null terminator", "Zero byte", "Xargs safe"],
    c: 0,
    e: "grep -Z ends filenames with null. For find -print0 | xargs -0.",
    de: "grep -rlZ pattern | xargs -0. Safe for filenames with spaces."
  }),
  (_i: number) => ({
    q: "What does `grep -H` do?",
    o: ["Always print filename (default with multiple files)", "Print filename", "Header", "File name"],
    c: 0,
    e: "grep -H always prefixes with filename. Default with 2+ files.",
    de: "grep -h suppresses. grep -H for single file too."
  }),
  (_i: number) => ({
    q: "What does `sed -z 's/\\n/ /g'` do (GNU)?",
    o: ["Treats file as null-separated lines, joins with space", "Null sep", "Zero byte records", "Slurp mode"],
    c: 0,
    e: "sed -z: null byte = line separator. One big line.",
    de: "find -print0 | sed -z. For filenames. -z = zero-terminated."
  }),
  (_i: number) => ({
    q: "What does `awk 'RT'` contain (GNU)?",
    o: ["Record terminator (text that matched RS)", "Record term", "RS match", "Input terminator"],
    c: 0,
    e: "RT = record terminator. What matched RS. GNU awk.",
    de: "RS as regex: RT is matched text. For parsing."
  }),
  (_i: number) => ({
    q: "What does `awk 'BEGIN{RS=\"[[:space:]]+\"}'` set?",
    o: ["RS to whitespace (fields become records)", "Whitespace RS", "Space separator", "Word mode"],
    c: 0,
    e: "RS = regex. Each word becomes record. NF often 1.",
    de: "Process words. $0 = word. Unusual but powerful."
  }),
  (_i: number) => ({
    q: "What does `sort -M` do?",
    o: ["Sort by month name (Jan, Feb, ...)", "Month sort", "Month order", "Date month"],
    c: 0,
    e: "sort -M understands month names. Jan < Feb < ...",
    de: "sort -M for log files with month. Locale dependent."
  }),
  (_i: number) => ({
    q: "What does `sort -f` do?",
    o: ["Case-insensitive sort", "Ignore case", "Fold case", "Case fold"],
    c: 0,
    e: "sort -f folds case. a and A equal.",
    de: "sort -f for case-insensitive. -i for ignore nonprint."
  }),
  (_i: number) => ({
    q: "What does `uniq -f 2` skip?",
    o: ["First 2 fields when comparing", "Skip fields", "Field skip", "Ignore first 2 fields"],
    c: 0,
    e: "uniq -f 2 ignores first 2 fields for comparison.",
    de: "uniq -s 10 skips first 10 chars. -f for fields. -i for case."
  }),
  (_i: number) => ({
    q: "What does `uniq -w 5` use?",
    o: ["Only first 5 chars for comparison", "Compare first 5", "Width 5", "Char limit"],
    c: 0,
    e: "uniq -w 5 compares only first 5 characters.",
    de: "uniq -w 10. For fixed-width. With -f -s for complex."
  }),
  (_i: number) => ({
    q: "What does `tail -c +100` output?",
    o: ["From byte 100 to end (skip first 99)", "Skip bytes", "From byte 100", "Byte offset"],
    c: 0,
    e: "tail -c +N starts from byte N. Skip first N-1 bytes.",
    de: "tail -c +1 = all. head -c -100 = all but last 100."
  }),
  (_i: number) => ({
    q: "What does `head -n -5` output?",
    o: ["All but last 5 lines", "Exclude last 5", "All except last", "Skip tail"],
    c: 0,
    e: "head -n -5 prints all but last 5 lines.",
    de: "GNU head. head -n -1 removes last line (trailing newline)."
  }),
  (_i: number) => ({
    q: "What does `tee /dev/stderr` do?",
    o: ["Copies stdin to stderr as well as stdout", "Tee to stderr", "Duplicate to stderr", "Stderr copy"],
    c: 0,
    e: "tee writes to file and stdout. /dev/stderr = stderr.",
    de: "cmd | tee /dev/stderr. Both stdout and stderr get copy."
  }),
  (_i: number) => ({
    q: "What does `{ cmd1; cmd2; } > file` do?",
    o: ["Groups commands, redirects both to file", "Group redirect", "Block redirect", "Brace redirect"],
    c: 0,
    e: "{} groups commands. One redirect for both.",
    de: "{ cmd1; cmd2; } > file. Both outputs to file. Subshell with ()."
  }),
  (_i: number) => ({
    q: "What does `exec 3< file` do?",
    o: ["Opens file as fd 3 for reading", "Open fd 3", "Fd 3", "Extra fd"],
    c: 0,
    e: "exec 3< file opens file on fd 3. read -u 3.",
    de: "exec 4> out for write. exec 3<&0 duplicates. Advanced redirection."
  }),
  (_i: number) => ({
    q: "What does `read -u 3 line` do?",
    o: ["Reads from fd 3 into variable", "Read from fd", "Fd read", "Read fd 3"],
    c: 0,
    e: "read -u 3 reads from file descriptor 3.",
    de: "With exec 3< file. read -u 3 line. Multiple fds."
  }),
  (_i: number) => ({
    q: "What does `process substitution <(cmd)` create?",
    o: ["FIFO or fd that reads cmd output", "Process sub", "Named pipe", "Cmd as file"],
    c: 0,
    e: "<(cmd) creates fd. diff <(sort f1) <(sort f2).",
    de: "Bash/ksh. cmd < <(cmd2) for stdin. >(cmd) for stdout."
  }),
  (_i: number) => ({
    q: "What does `cat file | while read line` lose?",
    o: ["Variable changes (runs in subshell)", "Subshell", "Var scope", "Loop in subshell"],
    c: 0,
    e: "Pipeline creates subshell. Variables in while don't persist.",
    de: "while read line; do ... done < file. Avoids subshell."
  }),
  (_i: number) => ({
    q: "What does `sed 's/^/  /'` do?",
    o: ["Indents each line with 2 spaces", "Indent", "Add prefix", "Leading space"],
    c: 0,
    e: "sed s/^/  / adds 2 spaces at start of each line.",
    de: "Indentation. sed 's/^/prefix/' for any prefix."
  }),
  (_i: number) => ({
    q: "What does `sed 's/ *$//'` remove?",
    o: ["Trailing spaces from each line", "Trailing space", "End spaces", "Trim right"],
    c: 0,
    e: "sed s/ *$// removes spaces at end of line.",
    de: "Trim trailing. * = zero or more. $ = end of line."
  }),
  (_i: number) => ({
    q: "What does `awk 'sub(/old/,\"new\")'` return?",
    o: ["1 if substitution made, 0 otherwise", "Sub success", "Replace count", "Sub result"],
    c: 0,
    e: "awk sub() replaces first match. Returns 1 or 0.",
    de: "gsub() replaces all, returns count. sub in $0 by default."
  }),
  (_i: number) => ({
    q: "What does `awk 'gsub(/x/,\"y\")'` do?",
    o: ["Replaces all x with y in $0", "Global sub", "Replace all", "Gsub"],
    c: 0,
    e: "gsub = global substitute. All occurrences.",
    de: "gsub(/x/,\"y\",str) for specific var. Modifies in place."
  }),
  (_i: number) => ({
    q: "What does `awk 'match($0,/pat/){print RSTART,RLENGTH}'` give?",
    o: ["Start position and length of match", "Match position", "RSTART RLENGTH", "Match info"],
    c: 0,
    e: "match() sets RSTART and RLENGTH. Position of match.",
    de: "RSTART=start, RLENGTH=length. substr($0,RSTART,RLENGTH)=match."
  }),
  (_i: number) => ({
    q: "What does `awk 'split($0,a,\":\")'` create?",
    o: ["Array a with fields split by colon", "Split to array", "Array split", "Field array"],
    c: 0,
    e: "split($0,a,\":\") fills array a. a[1], a[2], ...",
    de: "split(str,a,fs). Default fs = FS. Returns count."
  }),
  (_i: number) => ({
    q: "What does `awk 'sprintf(\"%d\",x)'` do?",
    o: ["Formats x as string, doesn't print", "Format string", "Sprintf", "Format only"],
    c: 0,
    e: "sprintf formats to string. Like printf but returns string.",
    de: "var=sprintf(\"%02d\",n) for zero-pad. printf prints."
  }),
  (_i: number) => ({
    q: "What does `grep -E '^(foo|bar)$'` match?",
    o: ["Lines that are exactly foo or bar", "Exact match", "Whole line", "Anchored"],
    c: 0,
    e: "^ $ anchor. (foo|bar) alternation. Exact line match.",
    de: "grep -x for exact line. -E for extended. ^ $ for full line."
  }),
  (_i: number) => ({
    q: "What does `grep -f pattern_file` use?",
    o: ["Patterns from file (one per line)", "File of patterns", "Pattern file", "Multi pattern"],
    c: 0,
    e: "grep -f file uses each line of file as pattern.",
    de: "grep -f patterns.txt data.txt. Multiple patterns."
  }),
  (_i: number) => ({
    q: "What does `grep -F -f patterns` do with special chars in patterns?",
    o: ["Treats patterns as literal (no regex)", "Fixed patterns", "Literal", "No regex"],
    c: 0,
    e: "grep -F -f: patterns from file, all literal.",
    de: "Safe for user input. No . * [ ] etc. as regex."
  }),
  (_i: number) => ({
    q: "What does `sed '1!G;h;$!d'` achieve?",
    o: ["Reverses line order (tac)", "Reverse lines", "Tac equivalent", "Reverse order"],
    c: 0,
    e: "Classic sed reverse. Hold space + get. 1! = not first line.",
    de: "G appends to hold. h copies. $!d deletes non-last. Stack."
  }),
  (_i: number) => ({
    q: "What does `sed 'N;D'` do?",
    o: ["Prints only last line (slurp then delete)", "Last line only", "Slurp delete", "Final line"],
    c: 0,
    e: "N append next. D delete to first newline. Keeps last.",
    de: "tail -1 equivalent. N;D loop. Last line remains."
  }),
  (_i: number) => ({
    q: "What does `awk 'END{print NR}'` output?",
    o: ["Total number of lines (records)", "Line count", "NR at end", "Total records"],
    c: 0,
    e: "END runs after all input. NR = total records.",
    de: "wc -l equivalent. awk 'END{print NR}' file."
  }),
  (_i: number) => ({
    q: "What does `awk 'FNR==1{nextfile}'` do (GNU)?",
    o: ["Skips rest of each file after first line", "First line only", "Nextfile", "Skip file body"],
    c: 0,
    e: "nextfile skips to next file. FNR==1 = first line of each.",
    de: "Prints first line of each file. head -1 each."
  }),
  (_i: number) => ({
    q: "What does `sort -k2.3,2.5` use?",
    o: ["Chars 3-5 of field 2 as sort key", "Subfield", "Char range in field", "Partial field"],
    c: 0,
    e: "sort -k2.3,2.5: field 2, chars 3 to 5.",
    de: "sort -k1.2 for char 2 of field 1. Precise key."
  }),
  (_i: number) => ({
    q: "What does `sort -k1,1 -k2,2n -s` need -s for?",
    o: ["Stable sort for equal first key", "Stable", "Preserve order", "Stable secondary"],
    c: 0,
    e: "sort -s is stable. Equal keys keep original order.",
    de: "Without -s, order of equal first key is undefined for second."
  }),
  (_i: number) => ({
    q: "What does `pr -l 60` set?",
    o: ["Page length to 60 lines", "Page length", "Lines per page", "Page size"],
    c: 0,
    e: "pr -l 60 sets page length. For pagination.",
    de: "pr -l 60 -h title. Headers, page breaks. For printing."
  }),
  (_i: number) => ({
    q: "What does `fmt -c` do?",
    o: ["Crown margin (indent first line less)", "Crown margin", "Indent style", "First line"],
    c: 0,
    e: "fmt -c: first line of paragraph shorter. Crown margin.",
    de: "fmt -p '#' for prefix. fmt -c for letters. Rare."
  }),
  (_i: number) => ({
    q: "What does `csplit -k file 5` do?",
    o: ["Keeps output on error (doesn't remove)", "Keep on error", "No remove", "Keep files"],
    c: 0,
    e: "csplit -k keeps partial output if csplit fails.",
    de: "Default removes on error. -k keeps xx00, xx01, etc."
  }),
  (_i: number) => ({
    q: "What does `split -n r/10` do (GNU)?",
    o: ["Round-robin: every 10th line to each of 10 files", "Round robin", "Distribute", "N-way split"],
    c: 0,
    e: "split -n r/10 distributes round-robin to 10 files.",
    de: "Line 1->f1, 2->f2, ... 10->f10, 11->f1. For parallel."
  }),
  (_i: number) => ({
    q: "What does `shuf -e a b c` do?",
    o: ["Shuffles the arguments", "Shuffle args", "Random order", "Shuf list"],
    c: 0,
    e: "shuf -e shuffles arguments. shuf -i 1-10 for range.",
    de: "shuf file shuffles lines. -n 5 for 5 random. Cryptographically? No."
  }),
  (_i: number) => ({
    q: "What does `shuf -i 1-100 -n 10` output?",
    o: ["10 random numbers from 1-100", "Random sample", "10 from range", "Random 10"],
    c: 0,
    e: "shuf -i 1-100 range. -n 10 picks 10. No replacement.",
    de: "Random sample. shuf -i 1-100 -n 1 for single random."
  }),
  (_i: number) => ({
    q: "What does `xargs -0` expect?",
    o: ["Null-delimited input", "Null input", "Zero byte sep", "Find -print0"],
    c: 0,
    e: "xargs -0 uses null as separator. For find -print0.",
    de: "find . -print0 | xargs -0 rm. Safe for any filename."
  }),
  (_i: number) => ({
    q: "What does `xargs -n 2` pass?",
    o: ["2 arguments per invocation", "2 args", "Max 2", "Two per call"],
    c: 0,
    e: "xargs -n 2 passes 2 args per command. echo 1 2 3 4 | xargs -n 2 echo.",
    de: "Runs echo 1 2, echo 3 4. -n 1 for one per line."
  }),
  (_i: number) => ({
    q: "What does `xargs -L 5` do?",
    o: ["Max 5 lines of input per invocation", "5 lines", "Line limit", "Batch 5 lines"],
    c: 0,
    e: "xargs -L 5 uses up to 5 lines per command.",
    de: "Each line can have multiple args. -L vs -n. -L = lines."
  }),
  (_i: number) => ({
    q: "What does `parallel -j 0` do?",
    o: ["One job per CPU (auto-detect)", "Auto jobs", "CPU count", "Max parallel"],
    c: 0,
    e: "parallel -j 0 runs one per CPU. -j 4 for 4.",
    de: "parallel -j 200% for 2 per CPU. -j 0 = nproc."
  }),
  (_i: number) => ({
    q: "What does `parallel --dry-run` do?",
    o: ["Prints commands without running", "Dry run", "No execute", "Preview"],
    c: 0,
    e: "parallel --dry-run shows what would run.",
    de: "Test before run. --dry-run. Same as -n in some tools."
  }),
  (_i: number) => ({
    q: "What does `rsync --dry-run` do?",
    o: ["Shows what would be transferred", "Dry run", "Simulate", "Preview"],
    c: 0,
    e: "rsync -n or --dry-run. No actual transfer.",
    de: "rsync -avn. Test before sync. -v for verbose."
  }),
  (_i: number) => ({
    q: "What does `sed -e 's/a/b/' -e 's/c/d/'` do?",
    o: ["Applies multiple sed commands in order", "Multiple commands", "Script", "Chain sed"],
    c: 0,
    e: "sed -e adds expression. Multiple -e = multiple commands.",
    de: "sed -e 's/a/b/' -e 's/c/d/' or sed 's/a/b/;s/c/d/'"
  }),
  (_i: number) => ({
    q: "What does `sed -f script.sed` use?",
    o: ["Commands from file", "Script file", "Sed script", "File of commands"],
    c: 0,
    e: "sed -f file reads sed commands from file.",
    de: "sed -f script.sed input. For complex sed. One command per line."
  }),
  (_i: number) => ({
    q: "What does `awk -f script.awk` use?",
    o: ["AWK program from file", "Script file", "Awk file", "Program file"],
    c: 0,
    e: "awk -f file reads program from file.",
    de: "awk -f prog.awk data. For multi-line awk. Shebang #!/usr/bin/awk -f"
  }),
  (_i: number) => ({
    q: "What does `grep -e p1 -e p2` do?",
    o: ["Matches p1 OR p2 (multiple patterns)", "Multiple patterns", "Or pattern", "Two patterns"],
    c: 0,
    e: "grep -e p1 -e p2 matches either pattern.",
    de: "grep -e 'foo' -e 'bar'. Alternative to grep -E 'foo|bar'."
  }),
  (_i: number) => ({
    q: "What does `grep --include='*.c'` do?",
    o: ["Only search .c files (with -r)", "Include pattern", "File filter", "Only c files"],
    c: 0,
    e: "grep -r --include='*.c' limits to .c files.",
    de: "--exclude for skip. --include for only. With -r."
  }),
  (_i: number) => ({
    q: "What does `grep --exclude-dir=.git` do?",
    o: ["Skips .git directory in recursive search", "Exclude dir", "Skip dir", "No git"],
    c: 0,
    e: "grep -r --exclude-dir=.git skips .git.",
    de: "--exclude-dir can repeat. --exclude for files. Performance."
  }),
  (_i: number) => ({
    q: "What does `sort -T /tmp` use?",
    o: ["Temporary directory for sort", "Temp dir", "Sort temp", "Tmp for sort"],
    c: 0,
    e: "sort -T dir uses dir for temp files. For large sorts.",
    de: "sort -T /bigdisk. When /tmp small. TMPDIR also."
  }),
  (_i: number) => ({
    q: "What does `sort -S 50%` do?",
    o: ["Uses 50% of memory for buffer", "Buffer size", "Memory limit", "Sort buffer"],
    c: 0,
    e: "sort -S 50% uses half of RAM. For large files.",
    de: "sort -S 1G for absolute. Default small. Speeds big sorts."
  }),
  (_i: number) => ({
    q: "What does `sort -u` vs `sort | uniq`?",
    o: ["sort -u is one pass, equivalent output", "Same result", "One pass", "Equivalent"],
    c: 0,
    e: "sort -u = sort | uniq. sort -u is single process.",
    de: "sort -u slightly more efficient. uniq needs sorted."
  }),
  (_i: number) => ({
    q: "What does `tail -F file` do vs -f?",
    o: ["Follows by name (handles rotation)", "Follow name", "Rotation safe", "Retry open"],
    c: 0,
    e: "tail -F reopens if inode changes (log rotate).",
    de: "tail -f can lose after rotate. -F tracks by filename."
  }),
  (_i: number) => ({
    q: "What does `less +/pattern` do?",
    o: ["Starts at first match of pattern", "Search at start", "Find pattern", "Initial search"],
    c: 0,
    e: "less +/pattern opens at first match. + for startup cmd.",
    de: "less +/error file. Jumps to first 'error'. n for next."
  }),
  (_i: number) => ({
    q: "What does `wc -L` output (GNU)?",
    o: ["Length of longest line", "Max line length", "Longest line", "Line max"],
    c: 0,
    e: "wc -L prints max line length. Characters.",
    de: "wc -L file. For width check. Not in POSIX."
  }),
  (_i: number) => ({
    q: "What does `nl -v 100 -i 10` do?",
    o: ["Starts at 100, increment 10", "Start and increment", "Number format", "Custom numbering"],
    c: 0,
    e: "nl -v 100 starts at 100. -i 10 increments by 10.",
    de: "nl -v 1 -i 2: 1, 3, 5, 7. For custom line numbers."
  }),
  (_i: number) => ({
    q: "What does `pr -m` do?",
    o: ["Merges files in columns (parallel)", "Merge columns", "Parallel files", "Multi column"],
    c: 0,
    e: "pr -m merges files side by side. Like paste.",
    de: "pr -m f1 f2 f3. Each file becomes column."
  }),
  (_i: number) => ({
    q: "What does `join -e 'NA'` do?",
    o: ["Uses 'NA' for missing fields", "Empty string", "Missing value", "Default for empty"],
    c: 0,
    e: "join -e 'NA' fills missing with NA. For outer join.",
    de: "join -a 1 -a 2 -e 'NA'. When no match, use NA."
  }),
  (_i: number) => ({
    q: "What does `paste -d $'\\n'` use?",
    o: ["Newline as delimiter (one per line)", "Newline delim", "Line delim", "\\n between"],
    c: 0,
    e: "paste -d $'\\n' uses newline. Interleaves lines.",
    de: "paste -d $'\\t' for tab. $'\\n' = literal newline in bash."
  }),
  (_i: number) => ({
    q: "What does `awk 'NR==1' file` print?",
    o: ["First line only", "Line 1", "Header", "First record"],
    c: 0,
    e: "NR is record number. NR==1 is first line.",
    de: "awk 'NR<=5' first 5. awk 'NR%2==0' even lines."
  }),
  (_i: number) => ({
    q: "What does `awk 'END{print NR}'` output?",
    o: ["Total number of lines", "Line count", "Record count", "Total lines"],
    c: 0,
    e: "END runs after all input. NR is final count.",
    de: "wc -l equivalent. awk 'END{print}' for last line."
  }),
  (_i: number) => ({
    q: "What does `awk -F','` set?",
    o: ["Field separator to comma", "Comma delimiter", "CSV mode", "Field delimiter"],
    c: 0,
    e: "-F sets FS (field separator). -F',' for CSV.",
    de: "awk -F':' for /etc/passwd. OFS for output separator."
  }),
  (_i: number) => ({
    q: "What does `awk '{print $NF}'` output?",
    o: ["Last field of each line", "Last column", "NF = last", "Final field"],
    c: 0,
    e: "NF = number of fields. $NF = last field.",
    de: "awk '{print $(NF-1)}' for second-to-last. Dynamic."
  }),
  (_i: number) => ({
    q: "What does `cut --output-delimiter='|'` set?",
    o: ["Output field delimiter", "Output delim", "Output sep", "Print delimiter"],
    c: 0,
    e: "cut --output-delimiter for output. Input -d can differ.",
    de: "cut -d',' --output-delimiter='|' -f1,2. Change delimiter."
  }),
  (_i: number) => ({
    q: "What does `tr '[:upper:]' '[:lower:]'` use?",
    o: ["POSIX character classes", "Char classes", "POSIX classes", "Upper lower"],
    c: 0,
    e: "[:upper:] [:lower:] are POSIX classes. Portable.",
    de: "tr '[:digit:]' 'x' replaces digits. [:alpha:] [:alnum:] etc."
  }),
  (_i: number) => ({
    q: "What does `od -A n -t x1` produce?",
    o: ["Hex bytes, no address", "Hex no addr", "Raw hex", "Hex dump minimal"],
    c: 0,
    e: "od -A n no address. -t x1 hex, 1 byte. Compact hex.",
    de: "od -A x -t x1z for hex with ASCII. xxd similar."
  }),
  (_i: number) => ({
    q: "What does `xxd -r` do?",
    o: ["Reverses hex dump to binary", "Reverse xxd", "Hex to binary", "Decode hex"],
    c: 0,
    e: "xxd -r converts hex back to binary. Inverse of xxd.",
    de: "xxd file > hex; xxd -r hex > restored. For binary edit."
  }),
  (_i: number) => ({
    q: "What does `base64 -w 0` do?",
    o: ["No line wrapping (single line)", "No wrap", "Single line", "Zero wrap"],
    c: 0,
    e: "base64 -w 0 outputs single line. No 76-char wrap.",
    de: "base64 -w 0 for embedding. Default wraps. -w 0 disables."
  }),
  (_i: number) => ({
    q: "What does `sha256sum -c file` do?",
    o: ["Verifies checksums from file", "Verify checksums", "Check file", "Validate"],
    c: 0,
    e: "sha256sum -c reads checksums, verifies files.",
    de: "sha256sum files > sums; sha256sum -c sums. Exit 0 if OK."
  }),
  (_i: number) => ({
    q: "What does `sponge` require to work?",
    o: ["Reads all input before writing (from moreutils)", "Full read first", "Buffer all", "Moreutils"],
    c: 0,
    e: "sponge buffers all input. Then writes. For in-place.",
    de: "cat file | cmd | sponge file. Can't do cmd < file > file."
  }),
];
