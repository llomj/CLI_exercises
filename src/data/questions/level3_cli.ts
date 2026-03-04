// LEVEL 3: CRAB — File & Text Processing (CLI)
// 100 Beginner + 100 Intermediate + 100 Expert. All real content.

const beginner = [
  (_i: number) => ({
    q: "What does `cat file` do?",
    o: ["Outputs file contents to stdout", "Creates file", "Copies file", "Catalogs file"],
    c: 0,
    e: "cat concatenates and outputs files to stdout.",
    de: "cat file1 file2 outputs both. With one file, just displays it. Use less for large files.",
    deBeginner: "cat reads the file and prints its contents to the terminal. cat file1 file2 prints both one after the other. For big files use less so you can scroll.",
    deExpert: "cat: read files, write to stdout. Concatenate. No pagination. less for large."
  }),
  (_i: number) => ({
    q: "What does `less` allow that `cat` does not?",
    o: ["Scroll backward and forward", "Only forward scroll", "No difference", "Faster output"],
    c: 0,
    e: "less is a pager: scroll, search, navigate. cat dumps all at once.",
    de: "less file. / to search, n for next, q to quit. more is older, less capable.",
    deBeginner: "less lets you scroll up and down, search with /, jump with n, and quit with q. cat prints everything at once with no way to scroll back.",
    deExpert: "less: pager. Bidirectional scroll. / search, n next. more is forward-only."
  }),
  (_i: number) => ({
    q: "What does `head -5 file` show?",
    o: ["First 5 lines", "First 5 bytes", "Lines 1-5 only", "Top 5 words"],
    c: 0,
    e: "head shows the beginning. Default 10 lines. -n 5 or -5.",
    de: "head -c 100 for bytes. head -n 20 file.",
    deBeginner: "head -5 shows the first 5 lines of the file. Default is 10 lines. head -c 100 shows the first 100 bytes.",
    deExpert: "head -n 5 / -5: first N lines. -c bytes. Default 10 lines."
  }),
  (_i: number) => ({
    q: "What does `tail -5 file` show?",
    o: ["Last 5 lines", "Last 5 bytes", "Bottom 5", "Lines from 5"],
    c: 0,
    e: "tail shows the end. tail -f follows (live updates).",
    de: "tail -f log.txt for logs. tail -n 20 or -20.",
    deBeginner: "tail -5 shows the last 5 lines. tail -f keeps the file open and prints new lines as they are added (great for log files).",
    deExpert: "tail -n 5 / -5: last N lines. tail -f: follow. inotify. Logs."
  }),
  (_i: number) => ({
    q: "What does `wc -l file` output?",
    o: ["Line count", "Word count", "Character count", "Byte count"],
    c: 0,
    e: "wc -l counts lines. wc -w words, wc -c bytes, wc -m chars.",
    de: "wc without options shows lines, words, bytes. cat file | wc -l.",
    deBeginner: "wc -l counts the number of lines in the file. wc -w counts words, wc -c bytes. With no option wc shows all three.",
    deExpert: "wc -l: line count. -w words, -c bytes, -m chars. Newline-defined lines."
  }),
  (_i: number) => ({
    q: "What does `sort file` do by default?",
    o: ["Sort lines alphabetically", "Sort numerically", "Reverse sort", "Random sort"],
    c: 0,
    e: "sort orders lines. Default: alphabetical. -n for numbers.",
    de: "sort -n for numeric. sort -r reverse. sort -u unique.",
    deBeginner: "sort prints the lines in alphabetical order. For numbers use sort -n. sort -r reverses the order; sort -u removes duplicate lines.",
    deExpert: "sort: lexicographic by default. -n numeric, -r reverse, -u unique. Stable sort."
  }),
  (_i: number) => ({
    q: "What does `uniq` require to remove duplicates?",
    o: ["Sorted input (adjacent duplicates)", "Unique file", "Single column", "Small file"],
    c: 0,
    e: "uniq removes adjacent duplicates. Sort first for full dedup.",
    de: "sort file | uniq. uniq -c counts occurrences. uniq -d shows duplicates only.",
    deBeginner: "uniq only removes duplicate lines when they are next to each other. So you usually run sort first: sort file | uniq. uniq -c counts how many times each line appears.",
    deExpert: "uniq: adjacent duplicates only. sort | uniq for full dedup. -c count, -d dup only."
  }),
  (_i: number) => ({
    q: "What does `cut -d',' -f1 file` do?",
    o: ["First column (comma-delimited)", "Deletes first column", "Cuts at comma", "Field 1 only"],
    c: 0,
    e: "cut extracts columns. -d delimiter, -f fields.",
    de: "cut -d':' -f1 /etc/passwd gets usernames. -f1,3 for multiple.",
    deBeginner: "cut -d',' -f1 prints the first column when the delimiter is a comma. cut -d':' -f1 /etc/passwd gets usernames. -f1,3 gives columns 1 and 3.",
    deExpert: "cut -d delim -f list: extract fields. -d',' -f1. /etc/passwd -d':' -f1."
  }),
  (_i: number) => ({
    q: "What does `paste file1 file2` do?",
    o: ["Merges lines side-by-side", "Concatenates vertically", "Compares files", "Pastes clipboard"],
    c: 0,
    e: "paste joins corresponding lines. Default delimiter: tab.",
    de: "paste -d',' uses comma. Inverse of cut for combining columns.",
    deBeginner: "paste takes line 1 of file1 and line 1 of file2 and puts them on one line (with tab by default). paste -d',' uses a comma. Like combining columns.",
    deExpert: "paste: merge lines side-by-side. Default tab. -d delimiter. Inverse of cut."
  }),
  (_i: number) => ({
    q: "What does `tr 'a-z' 'A-Z'` do?",
    o: ["Translates lowercase to uppercase", "Transposes chars", "Replaces a-z", "Trims spaces"],
    c: 0,
    e: "tr translates or deletes characters. Reads stdin.",
    de: "tr ' ' '\\n' replaces spaces with newlines. tr -d 'x' deletes x.",
    deBeginner: "tr reads from stdin and translates characters: here it turns lowercase letters into uppercase. tr ' ' '\\n' turns spaces into newlines; tr -d 'x' deletes x.",
    deExpert: "tr set1 set2: translate. tr -d set1 delete. From stdin. POSIX."
  }),
  (_i: number) => ({
    q: "What does `tee file` do?",
    o: ["Writes stdin to file and stdout", "Creates pipe", "Appends to file", "Reads file"],
    c: 0,
    e: "tee copies stdin to file and stdout (T-junction).",
    de: "cmd | tee out.txt saves while displaying. tee -a appends.",
    deBeginner: "tee sends its input both to a file and to the screen. cmd | tee out.txt shows output and saves it. tee -a appends to the file instead of overwriting.",
    deExpert: "tee: stdin -> file and stdout. T-junction. tee -a append. Pipeline copy."
  }),
  (_i: number) => ({
    q: "What does `diff file1 file2` show?",
    o: ["Line-by-line differences", "Same lines", "Merged content", "File sizes"],
    c: 0,
    e: "diff shows differences. < from file1, > from file2.",
    de: "diff -u unified format. patch applies diff output. diff -r for dirs.",
    deBeginner: "diff compares two files and shows which lines differ. Lines only in file1 are marked with <, only in file2 with >. diff -u gives a unified format; patch can apply it.",
    deExpert: "diff: line diff. < file1, > file2. diff -u unified. patch. diff -r dirs."
  }),
  (_i: number) => ({
    q: "What does `grep 'pattern' file` do?",
    o: ["Prints lines matching pattern", "Replaces pattern", "Counts pattern", "Deletes matching lines"],
    c: 0,
    e: "grep searches for lines matching the pattern.",
    de: "grep -i case insensitive. grep -r recursive. grep -n line numbers.",
    deBeginner: "grep prints every line in the file that contains the pattern. grep -i ignores case, grep -r searches in directories, grep -n adds line numbers.",
    deExpert: "grep: lines matching regex. -i case, -r recursive, -n line numbers. POSIX/ERE."
  }),
  (_i: number) => ({
    q: "What does `grep -v pattern` do?",
    o: ["Inverts match (lines NOT matching)", "Verbose", "Variable", "Version"],
    c: 0,
    e: "grep -v prints lines that do NOT match.",
    de: "grep -v '^#' filters comments. Invert match.",
    deBeginner: "grep -v prints lines that do not contain the pattern. Useful to filter out comments: grep -v '^#' shows lines that don't start with #.",
    deExpert: "grep -v: invert. Lines not matching. Filter comments, headers."
  }),
  (_i: number) => ({
    q: "What does `egrep` support that `grep` may not?",
    o: ["Extended regex (alternation, etc.)", "Only basic regex", "Nothing different", "Echo grep"],
    c: 0,
    e: "egrep = grep -E. Extended regex: |, +, ?, (), {}.",
    de: "grep -E is equivalent. egrep 'foo|bar' matches either.",
    deBeginner: "egrep is the same as grep -E: it uses extended regular expressions so you can use | for 'or', + for one or more, () for groups. egrep 'foo|bar' matches lines with foo or bar.",
    deExpert: "egrep = grep -E. ERE: |, +, ?, (), {}. Alternation, grouping."
  }),
  (_i: number) => ({
    q: "What does `fgrep` do differently?",
    o: ["Fixed strings (no regex)", "Fast grep", "File grep", "Full grep"],
    c: 0,
    e: "fgrep = grep -F. Treats pattern as literal string.",
    de: "No regex metachars. Safer for user input. grep -F.",
    deBeginner: "fgrep (grep -F) treats the pattern as a plain string, not a regex. Special characters like . or * are not special. Safer when the pattern comes from user input.",
    deExpert: "fgrep = grep -F. Fixed string. No regex. Safe for user input."
  }),
  (_i: number) => ({
    q: "What does `sed 's/old/new/' file` do?",
    o: ["Substitutes first old with new per line", "Substitutes all", "Saves to new file", "Shows diff"],
    c: 0,
    e: "sed s/old/new/ replaces first occurrence per line.",
    de: "sed 's/old/new/g' replaces all. sed -i edits in place (GNU).",
    deBeginner: "sed replaces the first occurrence of 'old' with 'new' on each line. Add g at the end to replace all: sed 's/old/new/g'. sed -i edits the file in place (GNU).",
    deExpert: "sed s/old/new/: first per line. g flag all. sed -i in-place. Stream editor."
  }),
  (_i: number) => ({
    q: "What does `sed -n '10p' file` do?",
    o: ["Prints only line 10", "Prints 10 lines", "Prints pattern 10", "Prints to line 10"],
    c: 0,
    e: "sed -n '10p' prints only line 10. -n suppresses default print.",
    de: "sed -n '1,5p' lines 1-5. sed -n '10,20p' range.",
    deBeginner: "sed -n '10p' prints only line 10. -n means 'don't print lines by default'; the 10p command prints line 10. sed -n '1,5p' prints lines 1 through 5.",
    deExpert: "sed -n '10p': print line 10. -n no default print. 1,5p range."
  }),
  (_i: number) => ({
    q: "What does `awk '{print $1}' file` do?",
    o: ["Prints first field of each line", "Prints line 1", "Prints field 1", "Prints first word"],
    c: 0,
    e: "awk prints first field (whitespace-delimited by default).",
    de: "awk -F':' for different delimiter. $0 is whole line, $NF last field.",
    deBeginner: "awk prints the first column (field) of each line. By default fields are separated by spaces. awk -F':' uses colon; $0 is the whole line, $NF is the last field.",
    deExpert: "awk '{print $1}': first field. Default FS whitespace. -F delim. $0, $NF."
  }),
  (_i: number) => ({
    q: "What does `awk -F':'` set?",
    o: ["Field separator to colon", "File to read", "Format", "Flag"],
    c: 0,
    e: "awk -F':' sets field separator. awk -F',' for CSV.",
    de: "awk -F'[ :]' for multiple delimiters. FS variable.",
    deBeginner: "awk -F':' tells awk to split each line on colons instead of spaces. awk -F',' for comma-separated. You can use -F'[ :]' for space or colon.",
    deExpert: "awk -F: field separator. FS. -F'[ :]' regex. CSV -F','."
  }),
  (_i: number) => ({
    q: "What does `cmd > file` do?",
    o: ["Redirects stdout to file (overwrite)", "Appends to file", "Reads from file", "Pipes to file"],
    c: 0,
    e: "> redirects stdout, overwriting file.",
    de: "> truncates. >> appends. 2> for stderr. 2>&1 merge.",
    deBeginner: "> sends the command's output (stdout) to the file and overwrites it. Use >> to add to the end. 2> redirects errors (stderr).",
    deExpert: ">: redirect stdout, truncate. >> append. 2> stderr. 2>&1 merge. open(2) O_TRUNC."
  }),
  (_i: number) => ({
    q: "What does `cmd >> file` do?",
    o: ["Appends stdout to file", "Overwrites file", "Reads file", "Redirects stderr"],
    c: 0,
    e: ">> appends stdout to file.",
    de: "Use for logs. echo 'line' >> file. No truncation.",
    deBeginner: ">> sends the command's output to the end of the file without erasing what's there. Good for log files. echo 'line' >> file adds a line.",
    deExpert: ">>: redirect stdout, append. O_APPEND. Logs. No truncation."
  }),
  (_i: number) => ({
    q: "What does `cmd < file` do?",
    o: ["Redirects file to stdin", "Reads file", "Input from file", "Loads file"],
    c: 0,
    e: "< redirects file contents to stdin.",
    de: "cmd < input.txt. Same as cat input.txt | cmd but more efficient.",
    deBeginner: "< makes the file the command's input (stdin). cmd < input.txt is like typing the file into the command. Often better than cat file | cmd.",
    deExpert: "<: redirect stdin from file. No pipe. Fewer processes. dup2(2)."
  }),
  (_i: number) => ({
    q: "What does `cmd1 | cmd2` do?",
    o: ["Pipes stdout of cmd1 to stdin of cmd2", "Runs in parallel", "Runs sequentially", "Compares output"],
    c: 0,
    e: "| connects stdout of left to stdin of right.",
    de: "ls | grep txt | wc -l. Pipes enable composition.",
    deBeginner: "The pipe | sends the first command's output as input to the second. Example: ls | grep txt | wc -l lists files, keeps those with 'txt', then counts lines.",
    deExpert: "|: pipe. stdout cmd1 -> stdin cmd2. pipe(2). Composition. ls | grep | wc."
  }),
  (_i: number) => ({
    q: "What is a here document?",
    o: ["Inline input delimited by a marker", "Document here", "Here string", "Input document"],
    c: 0,
    e: "Here doc: <<MARKER ... MARKER provides multiline stdin.",
    de: "cat << EOF\nline1\nline2\nEOF. Useful in scripts.",
    deBeginner: "A here document (<<MARKER ... MARKER) is a way to type several lines of input in a script. The shell sends everything between the markers to the command's stdin.",
    deExpert: "Here doc <<MARKER: multiline stdin. Marker quoted = no expand. Scripts."
  }),
  (_i: number) => ({
    q: "What does `<<< \"text\"` do?",
    o: ["Here string: passes text as stdin", "Redirects text", "Echoes text", "Input text"],
    c: 0,
    e: "`<<< string` passes string as stdin (here string).",
    de: "grep foo <<< 'hello foo world'. Single line here doc.",
    deBeginner: "<<< sends the string as input to the command (a one-line here document). Example: grep foo <<< 'hello foo world' searches that string.",
    deExpert: "<<<: here string. Single line stdin. Bash. grep foo <<< 'text'."
  }),
  (_i: number) => ({
    q: "What does `grep -c pattern file` do?",
    o: ["Counts matching lines", "Shows matches", "Shows context", "Shows line numbers"],
    c: 0,
    e: "grep -c outputs only the count of matching lines.",
    de: "Suppresses line output. grep -c 'error' log.txt.",
    deBeginner: "grep -c prints only how many lines matched, not the lines themselves. Handy when you only need the count, e.g. grep -c 'error' log.txt.",
    deExpert: "grep -c: count matching lines. No line output. Exit 1 if no match."
  }),
  (_i: number) => ({
    q: "What does `grep -n pattern file` do?",
    o: ["Shows line numbers with matches", "Numbers only", "No output", "New format"],
    c: 0,
    e: "grep -n prefixes each line with its line number.",
    de: "Useful for finding where matches occur.",
    deBeginner: "grep -n prints each matching line with its line number in the file (e.g. 5:match). Useful to see where matches are.",
    deExpert: "grep -n: prefix line number. file:line. For editing, reference."
  }),
  (_i: number) => ({
    q: "What does `grep -r pattern dir` do?",
    o: ["Searches recursively in directories", "Reverse", "Raw", "Read"],
    c: 0,
    e: "grep -r searches recursively through subdirectories.",
    de: "grep -r 'TODO' . finds in all files. Often with -l for filenames only.",
    deBeginner: "grep -r searches in the directory and every subdirectory. grep -r 'TODO' . finds 'TODO' in all files. Combine with -l to get only filenames.",
    deExpert: "grep -r: recursive. Descend dirs. grep -r --include filter. Often -l."
  }),
  (_i: number) => ({
    q: "What does `grep -l pattern files` do?",
    o: ["Lists only filenames with matches", "Long format", "Line numbers", "Last match"],
    c: 0,
    e: "grep -l outputs only filenames, not matching lines.",
    de: "grep -rl 'pattern' . finds which files contain it.",
    deBeginner: "grep -l prints only the names of files that contain a match, not the matching lines. grep -rl 'pattern' . lists all files under the current dir that contain the pattern.",
    deExpert: "grep -l: list files with match. No line output. -L inverse."
  }),
  (_i: number) => ({
    q: "What does `sed 'd' file` do?",
    o: ["Deletes all lines (output empty)", "Deletes file", "Duplicates", "Displays"],
    c: 0,
    e: "sed 'd' deletes lines. sed '5d' deletes line 5.",
    de: "sed '/pattern/d' deletes matching lines. Default: print all.",
    deBeginner: "sed 'd' deletes every line (so you get no output). sed '5d' deletes only line 5. sed '/pattern/d' deletes lines that match the pattern.",
    deExpert: "sed d: delete. sed '5d' line 5. sed '/pat/d' matching. -n no default print."
  }),
  (_i: number) => ({
    q: "What does `sed '1,5d' file` do?",
    o: ["Deletes lines 1 through 5", "Deletes first 5", "Deletes to 5", "Deletes 1 and 5"],
    c: 0,
    e: "sed '1,5d' deletes lines 1 to 5.",
    de: "sed '$d' deletes last line. sed '2,4d' deletes 2-4.",
    deBeginner: "sed '1,5d' deletes lines 1 through 5 and prints the rest. sed '$d' deletes the last line. sed '2,4d' deletes lines 2, 3, and 4.",
    deExpert: "sed addr d: 1,5 range. $ last line. 2,4 etc. Address range."
  }),
  (_i: number) => ({
    q: "What does `awk 'NR==1' file` do?",
    o: ["Prints first line only", "Prints line 1", "Numbers line 1", "No record 1"],
    c: 0,
    e: "awk 'NR==1' prints when record number is 1 (first line).",
    de: "NR = number of records (lines). NR==10 for line 10.",
    deBeginner: "NR is the current line number. awk 'NR==1' runs the (empty) action only on line 1, so it prints the first line. NR==10 would print line 10.",
    deExpert: "awk NR==1: first record. NR = current record number. NR==10 line 10."
  }),
  (_i: number) => ({
    q: "What does `awk '{sum+=$1} END {print sum}'` do?",
    o: ["Sums first column, prints at end", "Prints sum", "Adds column", "End sum"],
    c: 0,
    e: "awk sums $1, prints total in END block.",
    de: "BEGIN/END run once. Common for totals, averages.",
    deBeginner: "For each line awk adds the first field to sum. The END block runs after all lines, so it prints the total. BEGIN runs before any line.",
    deExpert: "awk sum+=$1; END print: running sum. END after all records. BEGIN/END once."
  }),
  (_i: number) => ({
    q: "What does `sort -t',' -k2 file` do?",
    o: ["Sorts by second field (comma-delimited)", "Sorts by key 2", "Sorts 2 columns", "Tab sort"],
    c: 0,
    e: "sort -t',' -k2 sorts by second column (comma-separated).",
    de: "sort -t':' -k3 -n for numeric sort on field 3.",
    deBeginner: "sort -t',' uses comma as the column separator and -k2 sorts by the second column. sort -t':' -k3 -n sorts by the third column numerically.",
    deExpert: "sort -t delim -k n: field delimiter, key field. -k3 -n numeric. -k2,2 single field."
  }),
  (_i: number) => ({
    q: "What does `comm file1 file2` require?",
    o: ["Sorted input files", "Common files", "Command files", "Compact files"],
    c: 0,
    e: "comm requires sorted input. Shows lines unique to each or common.",
    de: "comm -12 shows common. comm -23 shows only in file1.",
    deBeginner: "comm compares two sorted files and shows lines only in file1, only in file2, or in both. Inputs must be sorted. comm -12 shows only common lines; comm -23 only in file1.",
    deExpert: "comm: compare sorted. Three columns. -12 common, -23 file1 only. Sorted."
  }),
  (_i: number) => ({
    q: "What does `join file1 file2` require?",
    o: ["Sorted files on join field", "Same length", "Same format", "Joint files"],
    c: 0,
    e: "join merges on matching field. Inputs must be sorted on join field.",
    de: "join -t':' -1 1 -2 1 f1 f2. Like SQL join.",
    deBeginner: "join combines two files on a common field (like a database join). Both files must be sorted on that field. join -t':' -1 1 -2 1 uses colon and the first column of each.",
    deExpert: "join: merge on key field. Sorted. -t -1 -2 columns. SQL-like."
  }),
  (_i: number) => ({
    q: "What does `column -t file` do?",
    o: ["Formats into aligned columns", "Creates columns", "Tabs only", "Table format"],
    c: 0,
    e: "column -t formats input into aligned columns.",
    de: "cat data | column -t -s $'\\t'. Nice for tabular data.",
    deBeginner: "column -t turns input into a table by aligning columns. Often used with tab-separated data: cat data | column -t -s $'\\t' makes a readable table.",
    deExpert: "column -t: table format. Align columns. -s separator. Tabular display."
  }),
  (_i: number) => ({
    q: "What does `expand file` do?",
    o: ["Converts tabs to spaces", "Expands file", "Extends lines", "Explodes file"],
    c: 0,
    e: "expand converts tabs to spaces. unexpand does the reverse.",
    de: "expand -t 4 for 4-space tabs. Useful for consistent formatting.",
    deBeginner: "expand replaces tab characters with spaces so each tab stop is in the right place. expand -t 4 uses 4 spaces per tab. unexpand does the opposite.",
    deExpert: "expand: tab to spaces. -t tabstops. unexpand reverse. Formatting."
  }),
  (_i: number) => ({
    q: "What does `fold -w 80 file` do?",
    o: ["Wraps lines at 80 characters", "Folds at 80", "Width 80", "Wraps 80 lines"],
    c: 0,
    e: "fold wraps lines to specified width.",
    de: "fold -s breaks at spaces when possible. -w sets width.",
    deBeginner: "fold -w 80 breaks long lines so no line is longer than 80 characters. fold -s tries to break at spaces so words aren't split.",
    deExpert: "fold -w n: wrap at width. -s break at space. No reflow. POSIX."
  }),
  (_i: number) => ({
    q: "What does `fmt file` do?",
    o: ["Formats paragraphs (reflow text)", "Formats file", "Formats mode", "Formats table"],
    c: 0,
    e: "fmt reformats paragraphs to roughly equal line length.",
    de: "fmt -w 72 for 72-char width. Simple text formatter.",
    deBeginner: "fmt rewraps paragraphs so lines are about the same length (roughly 72 characters by default). fmt -w 72 sets the width. Simple paragraph formatter.",
    deExpert: "fmt: reflow paragraphs. -w width. Simple formatter. No TeX."
  }),
  (_i: number) => ({
    q: "What does `nl file` do?",
    o: ["Numbers lines", "New lines", "No lines", "Null lines"],
    c: 0,
    e: "nl numbers lines. More options than cat -n.",
    de: "nl -ba numbers all. nl -bt numbers non-empty. For formatted numbering.",
    deBeginner: "nl adds line numbers to the file. nl -ba numbers every line; nl -bt skips empty lines. More control than cat -n.",
    deExpert: "nl: number lines. -ba all, -bt non-empty. Sections. cat -n simpler."
  }),
  (_i: number) => ({
    q: "What does `pr file` do?",
    o: ["Formats for printing (paginate)", "Prints file", "Process file", "Preview file"],
    c: 0,
    e: "pr formats for printing: headers, columns, page breaks.",
    de: "pr -2 for 2 columns. pr -l 50 for 50 lines per page.",
    deBeginner: "pr prepares a file for printing: it can add headers, split into columns (pr -2 for 2 columns), and use page length (pr -l 50 for 50 lines per page).",
    deExpert: "pr: paginate, columns, header. -2 columns. -l page length. Print prep."
  }),
  (_i: number) => ({
    q: "What does `split -l 100 file` do?",
    o: ["Splits file into 100-line chunks", "Splits 100 files", "Splits at line 100", "Splits 100 ways"],
    c: 0,
    e: "split -l 100 creates files of 100 lines each.",
    de: "split -b 1M for byte size. Creates xaa, xab, ... or custom prefix.",
    deBeginner: "split -l 100 breaks the file into pieces of 100 lines each. Default names are xaa, xab, xac, .... split -b 1M splits by size (1 MB).",
    deExpert: "split -l n: by lines. -b size bytes. xaa, xab. Prefix optional."
  }),
  (_i: number) => ({
    q: "What does `csplit file /pattern/` do?",
    o: ["Splits at pattern matches", "Character split", "Context split", "Column split"],
    c: 0,
    e: "csplit splits file at lines matching pattern.",
    de: "csplit file '/^---$/' '{*}' splits at --- lines.",
    deBeginner: "csplit splits the file at lines that match the pattern. csplit file '/^---$/' '{*}' creates separate files for each section between --- lines.",
    deExpert: "csplit: split at regex. /pattern/ or line numbers. {*} repeat. Sections."
  }),
  (_i: number) => ({
    q: "What does `tac file` do?",
    o: ["Reverses line order (cat backward)", "Concatenates", "Tabs and cats", "Total cat"],
    c: 0,
    e: "tac outputs lines in reverse order (cat backwards).",
    de: "tac file. Useful with pipes. rev reverses characters per line.",
    deBeginner: "tac prints the lines of the file in reverse order (last line first). Like 'cat' backwards. rev reverses the characters on each line, not the line order.",
    deExpert: "tac: reverse line order. cat backwards. rev per-line char reverse."
  }),
  (_i: number) => ({
    q: "What does `rev file` do?",
    o: ["Reverses characters per line", "Reverses lines", "Revisions", "Reverts file"],
    c: 0,
    e: "rev reverses each line character by character.",
    de: "echo hello | rev gives olleh. Per-line, not whole file.",
    deBeginner: "rev reverses each line: hello becomes olleh. It works on each line separately, not the whole file. echo hello | rev gives olleh.",
    deExpert: "rev: reverse chars per line. echo hello | rev -> olleh. Not line order."
  }),
  (_i: number) => ({
    q: "What does `od -c file` show?",
    o: ["Octal dump with visible chars", "Output dump", "Octal decimal", "Only chars"],
    c: 0,
    e: "od dumps file in various formats. -c shows characters.",
    de: "od -c for chars. od -x for hex. od -A x -t x1 for hex dump.",
    deBeginner: "od dumps the file in a readable form. od -c shows bytes as characters (with escapes for non-printable). od -x for hex; od -A x -t x1 for a hex dump with offset.",
    deExpert: "od: octal dump. -c chars, -x hex. -A x -t x1 hex+offset. POSIX."
  }),
  (_i: number) => ({
    q: "What does `hexdump -C file` show?",
    o: ["Hex and ASCII dump", "Hex only", "Dump hex", "Hex format"],
    c: 0,
    e: "hexdump -C shows canonical hex+ASCII (like xxd).",
    de: "Left: offset. Middle: hex bytes. Right: ASCII. Good for binary.",
    deBeginner: "hexdump -C shows each byte in hex with the same bytes as ASCII on the right (non-printable as .). Left column is the offset. Good for inspecting binary files.",
    deExpert: "hexdump -C: canonical hex+ASCII. Offset, hex bytes, ASCII. Binary view."
  }),
  (_i: number) => ({
    q: "What does `xxd file` show?",
    o: ["Hex dump (or create from hex)", "Extended hex", "Hex dump", "Hex data"],
    c: 0,
    e: "xxd makes hex dump. xxd -r reverses (hex to binary).",
    de: "xxd -g 1 for byte grouping. Common for binary inspection.",
    deBeginner: "xxd shows a hex dump of the file. xxd -r reads a hex dump and turns it back into binary. xxd -g 1 groups by 1 byte. Common for binary inspection.",
    deExpert: "xxd: hex dump. xxd -r reverse hex->binary. -g group. vim binary."
  }),
  (_i: number) => ({
    q: "What does `strings file` do?",
    o: ["Extracts printable strings", "Shows strings", "String search", "String file"],
    c: 0,
    e: "strings extracts printable character sequences from binary.",
    de: "strings /bin/ls. Min length 4 by default. -n for length.",
    deBeginner: "strings prints sequences of printable characters from a file (often a binary). Handy to find text inside programs. strings /bin/ls. Default minimum length is 4; -n changes it.",
    deExpert: "strings: extract printable sequences. Binary. -n min length. Default 4."
  }),
  (_i: number) => ({
    q: "What does `base64 file` do?",
    o: ["Encodes to base64", "Base 64 format", "Encodes file", "64-bit encode"],
    c: 0,
    e: "base64 encodes to base64. base64 -d decodes.",
    de: "base64 < file. For binary in text (email, JSON).",
    deBeginner: "base64 encodes the file so it uses only letters, numbers, and a few symbols. Good for sending binary in text (email, JSON). base64 -d decodes.",
    deExpert: "base64: encode binary to ASCII. base64 -d decode. RFC 4648. Email, JSON."
  }),
  (_i: number) => ({
    q: "What does `patch file < diff.patch` do?",
    o: ["Applies patch to file", "Creates patch", "Patches diff", "Updates file"],
    c: 0,
    e: "patch applies diff output to file(s).",
    de: "diff -u old new > patch. patch old < patch. -p1 for strip level.",
    deBeginner: "patch reads a diff and applies the changes to the file. Create with diff -u old new > patch; apply with patch old < patch. -p1 strips one path component.",
    deExpert: "patch: apply diff. diff -u > patch; patch < patch. -p strip. Unified diff."
  }),
  (_i: number) => ({
    q: "What does `cmp file1 file2` do?",
    o: ["Compares bytes, reports first difference", "Compares files", "Copies diff", "Checks match"],
    c: 0,
    e: "cmp compares two files byte by byte. Exits at first diff.",
    de: "cmp -l shows byte numbers. diff for text, cmp for binary.",
    deBeginner: "cmp compares two files byte by byte and stops at the first difference. cmp -l shows byte positions and values. Use diff for text, cmp for binary.",
    deExpert: "cmp: byte compare. First diff. cmp -l byte numbers. diff text, cmp binary."
  }),
  (_i: number) => ({
    q: "What does `md5sum file` output?",
    o: ["MD5 hash and filename", "Checksum", "Hash", "MD5 sum"],
    c: 0,
    e: "md5sum computes MD5 checksum. sha256sum for SHA-256.",
    de: "md5sum -c checks against list. For integrity verification.",
    deBeginner: "md5sum prints a 32-character MD5 hash and the filename. md5sum -c verifies files against a list. Prefer sha256sum for security.",
    deExpert: "md5sum: MD5 digest. -c verify. Weakened; sha256sum preferred."
  }),
  (_i: number) => ({
    q: "What does `sha256sum file` output?",
    o: ["SHA-256 hash and filename", "SHA sum", "256-bit hash", "Checksum"],
    c: 0,
    e: "sha256sum computes SHA-256. More secure than MD5.",
    de: "sha256sum -c to verify. Standard for file integrity.",
    deBeginner: "sha256sum prints a 64-character SHA-256 hash and the filename. sha256sum -c verifies against a list. Standard for file integrity; prefer over MD5.",
    deExpert: "sha256sum: SHA-256. -c verify. Standard integrity. Prefer over MD5."
  }),
  (_i: number) => ({
    q: "What does `cksum file` output?",
    o: ["CRC checksum and byte count", "Checksum", "CRC", "Sum"],
    c: 0,
    e: "cksum outputs CRC32 and byte count. POSIX standard.",
    de: "Less secure than SHA. For quick integrity check.",
    deBeginner: "cksum prints a CRC32 checksum, the byte count, and the filename. POSIX. Less secure than SHA; used for quick checks or portability.",
    deExpert: "cksum: CRC32, bytes, name. POSIX. Less secure. Portability."
  }),
  (_i: number) => ({
    q: "What does `sponge file` do?",
    o: ["Reads stdin, writes to file (soaks up)", "Sponges file", "Saves output", "Buffer file"],
    c: 0,
    e: "sponge reads all stdin, then writes to file. From moreutils.",
    de: "cmd | sponge file. Allows overwriting same file: sed -i alternative.",
    deBeginner: "sponge reads all the input first, then writes to the file. So you can do cmd | sponge file and overwrite the same file (e.g. sed without -i). From moreutils.",
    deExpert: "sponge: buffer stdin then write. Overwrite same file. moreutils. sed -i alternative."
  }),
  (_i: number) => ({
    q: "What does `tail -f log` do?",
    o: ["Follows file (live updates)", "First lines", "Format", "Full file"],
    c: 0,
    e: "tail -f keeps file open, shows new lines as appended.",
    de: "Essential for log monitoring. Ctrl+C to stop.",
    deBeginner: "tail -f keeps the file open and prints new lines as they are written. Essential for watching logs. Press Ctrl+C to stop.",
    deExpert: "tail -f: follow. inotify. Append only. Log monitoring. Ctrl+C stop."
  }),
  (_i: number) => ({
    q: "What does `head -c 100 file` show?",
    o: ["First 100 bytes", "First 100 chars", "100 columns", "100 lines"],
    c: 0,
    e: "head -c 100 outputs first 100 bytes.",
    de: "head -c 1K for 1024 bytes. -c for bytes, -n for lines.",
    deBeginner: "head -c 100 prints the first 100 bytes of the file. head -c 1K uses 1024 bytes. Use -c for bytes, -n for lines.",
    deExpert: "head -c n: first n bytes. -c 1K 1024. -n lines."
  }),
  (_i: number) => ({
    q: "What does `wc -c file` show?",
    o: ["Byte count", "Character count", "Column count", "Line count"],
    c: 0,
    e: "wc -c counts bytes. wc -m counts characters (Unicode).",
    de: "For ASCII, -c and -m same. UTF-8: -m can differ.",
    deBeginner: "wc -c counts bytes in the file. wc -m counts characters (important for UTF-8 where one character can be several bytes). For ASCII, -c and -m are the same.",
    deExpert: "wc -c: bytes. wc -m: characters (Unicode). UTF-8 -c vs -m differ."
  }),
  (_i: number) => ({
    q: "What does `sort -u file` do?",
    o: ["Sorts and removes duplicates", "Unique sort", "Unsorted unique", "Sort unique"],
    c: 0,
    e: "sort -u outputs unique lines (like sort | uniq).",
    de: "sort -u is one pass. sort | uniq equivalent.",
    deBeginner: "sort -u sorts the file and removes duplicate lines in one pass. Same effect as sort | uniq.",
    deExpert: "sort -u: sort and unique. One pass. sort | uniq equivalent."
  }),
  (_i: number) => ({
    q: "What does `sort -R file` do?",
    o: ["Randomizes line order", "Reverse sort", "Recursive", "Raw sort"],
    c: 0,
    e: "sort -R shuffles lines randomly. GNU sort.",
    de: "shuf is alternative. sort -R for random order.",
    deBeginner: "sort -R shuffles the lines into random order (GNU sort). shuf is another way to randomize lines.",
    deExpert: "sort -R: random order. GNU. shuf alternative. Shuffle."
  }),
  (_i: number) => ({
    q: "What does `uniq -c` do?",
    o: ["Prefixes count of occurrences", "Count only", "Compact", "Count lines"],
    c: 0,
    e: "uniq -c adds count of consecutive duplicates.",
    de: "sort file | uniq -c. Shows how many times each line appeared.",
    deBeginner: "uniq -c adds a count in front of each line (how many consecutive copies). sort file | uniq -c shows how many times each line appeared.",
    deExpert: "uniq -c: prefix count. Consecutive only. sort | uniq -c."
  }),
  (_i: number) => ({
    q: "What does `uniq -d` do?",
    o: ["Outputs only duplicate lines", "Delete duplicates", "Double lines", "Duplicate count"],
    c: 0,
    e: "uniq -d outputs only lines that were duplicated.",
    de: "sort file | uniq -d. Find lines that appear more than once.",
    deBeginner: "uniq -d prints only lines that had at least one duplicate next to them. sort file | uniq -d finds lines that appear more than once.",
    deExpert: "uniq -d: output only duplicated lines. sort | uniq -d. One per group."
  }),
  (_i: number) => ({
    q: "What does `cut -c1-5 file` do?",
    o: ["Extracts characters 1-5 per line", "Cuts columns 1-5", "First 5 chars", "Characters 1 to 5"],
    c: 0,
    e: "cut -c1-5 extracts character positions 1 through 5.",
    de: "cut -c1,3,5 for specific positions. -c for chars, -f for fields.",
    deBeginner: "cut -c1-5 prints characters 1 through 5 of each line. cut -c1,3,5 prints positions 1, 3, and 5. Use -c for character positions, -f for fields.",
    deExpert: "cut -c list: character positions. -c1-5 range. -f fields. POSIX."
  }),
  (_i: number) => ({
    q: "What does `tr -d 'x'` do?",
    o: ["Deletes character x from input", "Deletes x", "Trims x", "Drops x"],
    c: 0,
    e: "tr -d deletes specified characters.",
    de: "echo hello | tr -d 'l' gives heo. tr -d '\\n' removes newlines.",
    deBeginner: "tr -d removes the given characters from the input. echo hello | tr -d 'l' gives heo. tr -d '\\n' removes newlines.",
    deExpert: "tr -d set: delete chars. echo hello | tr -d l. tr -d '\\n'."
  }),
  (_i: number) => ({
    q: "What does `tr -s ' '` do?",
    o: ["Squeezes repeated spaces to one", "Squeeze spaces", "Single space", "Space squeeze"],
    c: 0,
    e: "tr -s squeezes repeated characters to single.",
    de: "echo 'a    b' | tr -s ' ' gives 'a b'. -s = squeeze.",
    deBeginner: "tr -s squeezes repeated characters into one. echo 'a    b' | tr -s ' ' gives 'a b'. -s = squeeze.",
    deExpert: "tr -s set: squeeze repeats. -s. Multiple spaces -> one."
  }),
  (_i: number) => ({
    q: "What does `sed -n '2,4p' file` do?",
    o: ["Prints lines 2, 3, 4", "Prints 2 to 4", "Prints lines 2-4", "Prints 4 lines from 2"],
    c: 0,
    e: "sed -n '2,4p' prints lines 2 through 4.",
    de: "Range in sed. sed -n '10,$p' from 10 to end.",
    deBeginner: "sed -n '2,4p' prints only lines 2, 3, and 4. -n means no default printing. sed -n '10,$p' prints from line 10 to the end.",
    deExpert: "sed -n '2,4p': range. 10,$ to end. Address range. -n."
  }),
  (_i: number) => ({
    q: "What does `awk 'length>80' file` do?",
    o: ["Prints lines longer than 80 chars", "Prints length", "Prints 80", "Length 80"],
    c: 0,
    e: "awk 'length>80' prints lines where length exceeds 80.",
    de: "length is length($0). awk condition without action prints whole line.",
    deBeginner: "awk prints lines longer than 80 characters. length is the length of the line ($0). In awk, a condition with no action means print the line.",
    deExpert: "awk length>80: length($0). Condition only -> print. Filter long lines."
  }),
  (_i: number) => ({
    q: "What does `grep -E 'foo|bar'` match?",
    o: ["Lines with foo OR bar", "Lines with both", "Extended regex", "Either pattern"],
    c: 0,
    e: "grep -E allows | for alternation (OR).",
    de: "grep -E 'a|b' matches a or b. Basic grep needs \\|.",
    deBeginner: "grep -E uses extended regex so | means 'or'. grep -E 'foo|bar' matches lines containing foo or bar. In basic grep you need \\|.",
    deExpert: "grep -E: ERE. | alternation. foo|bar. Basic grep \\|."
  }),
  (_i: number) => ({
    q: "What does `grep -w word` do?",
    o: ["Matches whole word only", "Word match", "Wide match", "Word boundary"],
    c: 0,
    e: "grep -w matches whole words (word boundaries).",
    de: "grep -w 'cat' won't match 'category'. Prevents partial matches.",
    deBeginner: "grep -w matches only when the pattern is a whole word. grep -w 'cat' won't match 'category' or 'scat'. Uses word boundaries.",
    deExpert: "grep -w: word boundary. \\b. No substring. cat vs category."
  }),
  (_i: number) => ({
    q: "What does `grep -x line file` do?",
    o: ["Matches whole line only", "Exact line", "Line match", "Full line"],
    c: 0,
    e: "grep -x matches only when entire line equals pattern.",
    de: "grep -x 'hello' matches line that is exactly 'hello'.",
    deBeginner: "grep -x matches only when the whole line is exactly the pattern. grep -x 'hello' matches a line that is just 'hello' and nothing else.",
    deExpert: "grep -x: full line match. ^pattern$ implied. Exact line."
  }),
  (_i: number) => ({
    q: "What does `grep -A 2 pattern` do?",
    o: ["Shows 2 lines after match", "After context", "Append 2", "Add 2 lines"],
    c: 0,
    e: "grep -A 2 shows 2 lines of context after each match.",
    de: "-B before, -A after, -C both. grep -C 2 for 2 lines each side.",
    deBeginner: "grep -A 2 prints 2 lines after each matching line. -B 2 prints 2 lines before. -C 2 prints 2 lines on each side.",
    deExpert: "grep -A n: after context. -B before, -C both. Log context."
  }),
  (_i: number) => ({
    q: "What does `grep -B 2 pattern` do?",
    o: ["Shows 2 lines before match", "Before context", "Back 2", "Before 2"],
    c: 0,
    e: "grep -B 2 shows 2 lines before each match.",
    de: "Context options. -A, -B, -C. Useful for log analysis.",
    deBeginner: "grep -B 2 prints 2 lines before each matching line. Use with -A and -C for context. Handy for log analysis.",
    deExpert: "grep -B n: before context. -A -C. Log analysis."
  }),
  (_i: number) => ({
    q: "What does `sed 's/old/new/g'` do?",
    o: ["Replaces all occurrences per line", "Global replace", "General replace", "Replace all"],
    c: 0,
    e: "s/old/new/g replaces every occurrence on each line.",
    de: "Without g, only first per line. g = global.",
    deBeginner: "The g (global) flag makes sed replace every occurrence of 'old' with 'new' on each line. Without g, only the first match per line is replaced.",
    deExpert: "sed s/old/new/g: g = global, all per line. Without g first only."
  }),
  (_i: number) => ({
    q: "What does `sed '3s/old/new/'` do?",
    o: ["Replaces only on line 3", "Substitutes line 3", "Third line only", "Line 3 replace"],
    c: 0,
    e: "sed '3s/old/new/' applies substitution only to line 3.",
    de: "Address + command. sed '2,5s/x/y/' for lines 2-5.",
    deBeginner: "sed '3s/old/new/' does the substitution only on line 3. The 3 is an address. sed '2,5s/x/y/' would do it on lines 2 through 5.",
    deExpert: "sed address s/old/new/: 3 line 3. 2,5 range. Address+command."
  }),
  (_i: number) => ({
    q: "What does `awk 'NF>5' file` do?",
    o: ["Prints lines with more than 5 fields", "Number of fields", "Fields > 5", "NF greater 5"],
    c: 0,
    e: "awk 'NF>5' prints lines with more than 5 fields.",
    de: "NF = number of fields. NF==0 for empty lines.",
    deBeginner: "NF is the number of fields on the line. awk 'NF>5' prints lines that have more than 5 fields. NF==0 would match empty lines.",
    deExpert: "awk NF>5: NF = number of fields. Filter by field count."
  }),
  (_i: number) => ({
    q: "What does `awk 'END {print NR}'` do?",
    o: ["Prints total line count", "Prints last line", "Prints NR", "End line count"],
    c: 0,
    e: "awk 'END {print NR}' prints total number of lines.",
    de: "NR in END block = total records. Like wc -l.",
    deBeginner: "The END block runs after all lines. NR is the total number of lines read, so this prints the line count (like wc -l).",
    deExpert: "awk END {print NR}: total records. NR in END. Like wc -l."
  }),
  (_i: number) => ({
    q: "What does `sort -k2 -n` do?",
    o: ["Sorts by field 2 numerically", "Key 2 numeric", "Second column numeric", "Numeric sort key 2"],
    c: 0,
    e: "sort -k2 -n sorts by second field as numbers.",
    de: "sort -t',' -k2 -n for CSV. -n critical for 2 before 10.",
    deBeginner: "sort -k2 -n sorts by the second column and treats it as numbers (so 2 comes before 10). sort -t',' -k2 -n for comma-separated. -n is important for numeric order.",
    deExpert: "sort -k2 -n: key field 2, numeric. -t delim. -n 2 before 10."
  }),
  (_i: number) => ({
    q: "What does `sort -k1,1 -u` do?",
    o: ["Unique by first field only", "Unique key 1", "First field unique", "Unique on column 1"],
    c: 0,
    e: "sort -k1,1 -u keeps first occurrence when first field is duplicate.",
    de: "Key range 1,1 = only field 1. -u keeps one per unique key.",
    deBeginner: "sort -k1,1 -u sorts by the first field only (-k1,1) and keeps one line per unique value of that field. So you get unique by first column.",
    deExpert: "sort -k1,1 -u: unique by key field 1. Key range 1,1."
  }),
  (_i: number) => ({
    q: "What does `paste -s file` do?",
    o: ["Merges all lines into one (serial)", "Serial paste", "Single line", "Paste serial"],
    c: 0,
    e: "paste -s merges lines of one file into single line(s).",
    de: "paste -s -d',' joins lines with comma. One line per 'paragraph'.",
    deBeginner: "paste -s (serial) merges the lines of one file into one line (or one per paragraph). paste -s -d',' joins lines with commas.",
    deExpert: "paste -s: serial. One file -> one line. -d delimiter."
  }),
  (_i: number) => ({
    q: "What does `diff -q file1 file2` do?",
    o: ["Reports only if files differ", "Quick diff", "Quiet diff", "Only report difference"],
    c: 0,
    e: "diff -q only reports whether files differ, not how.",
    de: "Exit 0 if same, 1 if different. Useful in scripts.",
    deBeginner: "diff -q only says whether the files are different or not; it doesn't show the actual changes. Exit 0 if same, 1 if different. Good for scripts.",
    deExpert: "diff -q: brief. Same/different only. Exit 0/1. Scripts."
  }),
  (_i: number) => ({
    q: "What does `diff -r dir1 dir2` do?",
    o: ["Recursively compares directories", "Recursive diff", "Compare dirs", "Dir diff"],
    c: 0,
    e: "diff -r compares directories recursively.",
    de: "Shows file-by-file differences. diff -rq for brief.",
    deBeginner: "diff -r compares the two directories and all subdirectories, showing file-by-file differences. diff -rq gives a brief summary (which files differ).",
    deExpert: "diff -r: recursive dir compare. File-by-file. -rq brief."
  }),
  (_i: number) => ({
    q: "What does `comm -12 file1 file2` show?",
    o: ["Lines common to both files", "Common lines", "Intersection", "Shared lines"],
    c: 0,
    e: "comm -12 suppresses unique to file1 and file2, shows common.",
    de: "comm requires sorted input. -1 -2 -3 suppress columns 1, 2, 3.",
    deBeginner: "comm -12 hides column 1 (only in file1) and column 2 (only in file2), so you see only column 3 (lines in both). Inputs must be sorted.",
    deExpert: "comm -12: suppress col 1 and 2, show common. Sorted. Intersection."
  }),
  (_i: number) => ({
    q: "What does `join -1 1 -2 1 f1 f2` do?",
    o: ["Joins on field 1 of both files", "Join field 1", "Join on column 1", "Merge on field 1"],
    c: 0,
    e: "join -1 1 -2 1 joins on first field of each file.",
    de: "Files must be sorted on join field. -t for delimiter.",
    deBeginner: "join -1 1 -2 1 uses field 1 of the first file and field 1 of the second file as the join key. Both files must be sorted on that field. -t sets the delimiter.",
    deExpert: "join -1 1 -2 1: join on field 1 of each. Sorted. -t delim."
  }),
  (_i: number) => ({
    q: "What does `cat file1 file2 > out` do?",
    o: ["Concatenates file1 and file2 into out", "Copies both", "Combines files", "Cats to out"],
    c: 0,
    e: "cat file1 file2 > out writes both files to out.",
    de: "Order matters. file1 first, then file2 in output.",
    deBeginner: "cat file1 file2 > out writes the contents of file1 followed by file2 into out. Order matters: file1's content comes first in out.",
    deExpert: "cat f1 f2 > out: concatenate to out. Order. Redirect overwrites."
  }),
  (_i: number) => ({
    q: "What does `script` do?",
    o: ["Records terminal session to file", "Runs script", "Script file", "Records session"],
    c: 0,
    e: "script records your session. script -a appends. exit to stop.",
    de: "Creates typescript file. Useful for logging terminal work.",
    deBeginner: "script starts recording your terminal session to a file (default typescript). script -a appends. Type exit to stop. Useful for logging what you did.",
    deExpert: "script: record session. typescript. script -a append. exit stop."
  }),
  (_i: number) => ({
    q: "What does `tr -c 'a-z' '\\n'` do?",
    o: ["Replaces non-letters with newlines (tokenize)", "Complement replace", "Tokenize", "Split non-alpha"],
    c: 0,
    e: "-c complements the set. Non-[a-z] becomes newline.",
    de: "Splits on non-letters. Useful for word extraction.",
    deBeginner: "tr -c uses the complement of the set: every character that is not a-z is replaced with newline. So you split the input on non-letters and get one word per line.",
    deExpert: "tr -c set1 set2: complement. Non-[a-z] -> \\n. Tokenize words."
  }),
  (_i: number) => ({
    q: "What does `comm -12 file1 file2` show?",
    o: ["Lines in both files (intersection)", "Common lines", "Intersection", "In both"],
    c: 0,
    e: "comm -12 suppresses col1 and col2, keeps col3 (common).",
    de: "comm requires sorted input. -1 -2 -3 suppress columns.",
    deBeginner: "comm -12 hides the first two columns (lines only in file1, only in file2) and shows only the third (lines in both). Both files must be sorted.",
    deExpert: "comm -12: suppress col 1 and 2. Col 3 = common. Sorted."
  }),
  (_i: number) => ({
    q: "What does `head -c 100 file` output?",
    o: ["First 100 bytes", "First 100 chars", "100 bytes", "Byte limit"],
    c: 0,
    e: "-c limits by bytes. head -c 1K for 1024 bytes.",
    de: "head -n 10 for lines. -c for binary or byte count.",
    deBeginner: "head -c 100 prints the first 100 bytes of the file. head -c 1K uses 1024 bytes. Use -n for lines, -c for bytes.",
    deExpert: "head -c n: first n bytes. -c 1K. -n lines."
  }),
  (_i: number) => ({
    q: "What does `tail -c +100 file` output?",
    o: ["From byte 100 to end (skip first 99)", "Skip first 99 bytes", "From byte 100", "Offset 100"],
    c: 0,
    e: "tail -c +N starts from byte N. Skips first N-1.",
    de: "tail -n +5 from line 5. + means start from.",
    deBeginner: "tail -c +100 outputs from byte 100 to the end (skips the first 99 bytes). The + means 'start from'. tail -n +5 does the same for lines (from line 5 to end).",
    deExpert: "tail -c +N: from byte N to end. + = start from. tail -n +5 lines."
  }),
  (_i: number) => ({
    q: "What does `od -c file` show?",
    o: ["Octal dump with visible chars", "Char dump", "Octal and chars", "Character view"],
    c: 0,
    e: "od -c shows bytes as chars. \\n for newline.",
    de: "od -A x -t x1 for hex. od for binary inspection.",
    deBeginner: "od -c dumps the file with bytes shown as characters (non-printable as escapes like \\n). od -A x -t x1 gives a hex dump with offset. Good for binary inspection.",
    deExpert: "od -c: char dump. -A x -t x1 hex. Binary inspection."
  }),
  (_i: number) => ({
    q: "What does `strings file` output?",
    o: ["Printable strings from binary", "Extract strings", "Printable only", "String extract"],
    c: 0,
    e: "strings finds 4+ char printable sequences. For binaries.",
    de: "strings /bin/ls. -n for min length. Forensics.",
    deBeginner: "strings prints sequences of 4 or more printable characters from the file (often a binary). strings /bin/ls. -n sets minimum length. Used in forensics and reverse engineering.",
    deExpert: "strings: 4+ printable. Binary. -n min length. Forensics."
  }),
  (_i: number) => ({
    q: "What does `base64 file` do?",
    o: ["Encodes file to base64", "Base64 encode", "Encode binary", "Base64 output"],
    c: 0,
    e: "base64 encodes. base64 -d decodes.",
    de: "For binary in text. Email attachments. base64 -w 0 no wrap.",
    deBeginner: "base64 encodes the file into base64 text (letters, numbers, +, /). Used for binary in email or JSON. base64 -d decodes. base64 -w 0 avoids line wrapping.",
    deExpert: "base64: encode. -d decode. -w 0 no wrap. RFC 4648."
  }),
  (_i: number) => ({
    q: "What does `md5sum file` output?",
    o: ["MD5 hash and filename", "MD5 checksum", "Hash of file", "MD5 digest"],
    c: 0,
    e: "md5sum prints 32-char hash. For integrity check.",
    de: "md5sum -c to verify. sha256sum for stronger.",
    deBeginner: "md5sum prints a 32-character MD5 hash and the filename. md5sum -c verifies files against a list. For security-sensitive use prefer sha256sum.",
    deExpert: "md5sum: 32-char MD5. -c verify. Weakened; prefer sha256sum."
  }),
  (_i: number) => ({
    q: "What does `shasum -a 256 file` do?",
    o: ["SHA-256 hash of file", "SHA256", "SHA-256 checksum", "256-bit hash"],
    c: 0,
    e: "shasum -a 256 uses SHA-256. -a 1 for SHA-1.",
    de: "sha256sum on Linux. shasum on macOS. Verify downloads.",
    deBeginner: "shasum -a 256 computes the SHA-256 hash (like sha256sum on Linux). -a 1 uses SHA-1. On macOS use shasum; on Linux sha256sum. Good for verifying downloads.",
    deExpert: "shasum -a 256: SHA-256. macOS. Linux: sha256sum. -a 1 SHA-1."
  }),
  (_i: number) => ({
    q: "What does `cksum file` output?",
    o: ["CRC checksum and byte count", "CRC checksum", "Checksum", "CRC32"],
    c: 0,
    e: "cksum prints CRC, bytes, filename. POSIX standard.",
    de: "Older than md5/sha. Still used for compatibility.",
    deBeginner: "cksum prints a CRC32 checksum, the byte count, and the filename. POSIX. Older than md5/sha; still used for compatibility.",
    deExpert: "cksum: CRC32, bytes, name. POSIX. Compatibility."
  }),
  (_i: number) => ({
    q: "What does `expand -t 4 file` do?",
    o: ["Converts tabs to 4 spaces", "Tab to spaces", "Expand tabs", "Tab width 4"],
    c: 0,
    e: "expand converts tabs to spaces. -t 4 sets tab stop.",
    de: "unexpand does reverse. -t 4,8,12 for multiple stops.",
    deBeginner: "expand -t 4 turns each tab into 4 spaces. unexpand does the opposite. -t 4,8,12 sets multiple tab stops.",
    deExpert: "expand -t n: tab to spaces. unexpand reverse. -t 4,8,12."
  }),
  (_i: number) => ({
    q: "What does `unexpand -t 4 file` do?",
    o: ["Converts spaces to tabs", "Spaces to tabs", "Unexpand", "Tab convert"],
    c: 0,
    e: "unexpand converts leading spaces to tabs. -t 4 sets tab width.",
    de: "unexpand -t 4. Opposite of expand. For consistent indentation.",
    deBeginner: "unexpand -t 4 converts leading spaces to tabs (each 4 spaces can become a tab). Opposite of expand. Used for consistent indentation.",
    deExpert: "unexpand -t n: leading spaces to tabs. Opposite of expand."
  }),
];

import { level3Intermediate } from './level3_intermediate_cli';
import { level3Expert } from './level3_expert_cli';

export const level3Patterns = beginner;
export const level3IntermediateA = level3Intermediate.slice(0, 50);
export const level3IntermediateB = level3Intermediate.slice(50, 100);
export const level3ExpertA = level3Expert.slice(0, 50);
export const level3ExpertB = level3Expert.slice(50, 100);
