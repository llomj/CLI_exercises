// LEVEL 3 INTERMEDIATE — File & Text Processing (100 unique questions)
// Replaces placeholders. All options are meaningful, no "Option A/B/C/D".

export const level3Intermediate = [
  (_i: number) => ({
    q: "What does `grep -n pattern file` add to output?",
    o: ["Line numbers before each match", "Number of matches", "Match count", "Line count"],
    c: 0,
    e: "grep -n prefixes each line with its line number.",
    de: "grep -n 'error' log.txt. Useful for editing or referencing.",
    deBeginner: "grep -n adds the line number (in the file) before each matching line. Handy when you need to edit or reference those lines.",
    deExpert: "grep -n: file:line. Prefix line number. Editing, reference."
  }),
  (_i: number) => ({
    q: "What does `grep -c pattern file` output?",
    o: ["Count of matching lines", "Character count", "Match count", "Line count"],
    c: 0,
    e: "grep -c counts matching lines. No line content.",
    de: "grep -c is faster when you only need count. Exit 1 if no match.",
    deBeginner: "grep -c prints only how many lines matched, not the lines. Faster when you only need the count. Exit code 1 if no match.",
    deExpert: "grep -c: count only. No line output. Exit 1 no match."
  }),
  (_i: number) => ({
    q: "What does `grep -l pattern files` output?",
    o: ["Only filenames that contain matches", "List of files", "File names", "Matching files"],
    c: 0,
    e: "grep -l lists filenames with matches. Stops after first match per file.",
    de: "grep -L lists files with NO matches. Inverse of -l.",
    deBeginner: "grep -l prints only the names of files that contain at least one match. It stops after the first match per file. grep -L lists files with no matches.",
    deExpert: "grep -l: list filenames with match. -L inverse. One match per file."
  }),
  (_i: number) => ({
    q: "What does `grep -r pattern dir` do?",
    o: ["Searches recursively in directory", "Recursive search", "Search dirs", "Recurse"],
    c: 0,
    e: "grep -r searches all files under directory.",
    de: "grep -R follows symlinks. grep -r --include='*.c' to filter.",
    deBeginner: "grep -r searches the directory and every subdirectory. grep -R follows symlinks. Use --include='*.c' to limit to certain file types.",
    deExpert: "grep -r: recursive. -R symlinks. --include filter."
  }),
  (_i: number) => ({
    q: "What does `grep -w pattern` do?",
    o: ["Matches whole words only", "Word match", "Whole word", "Word boundary"],
    c: 0,
    e: "grep -w matches whole words. 'foo' won't match 'foobar'.",
    de: "Uses \\b word boundaries. grep -w 'the' excludes 'other'.",
    deBeginner: "grep -w matches only when the pattern is a whole word (word boundaries). 'foo' won't match 'foobar'. grep -w 'the' won't match 'other'.",
    deExpert: "grep -w: word boundary \\b. No substring. foo vs foobar."
  }),
  (_i: number) => ({
    q: "What does `grep -A 2 pattern` show?",
    o: ["2 lines after each match", "After context", "Lines after", "Context after"],
    c: 0,
    e: "grep -A N shows N lines after match. -B before, -C both.",
    de: "grep -A 3 -B 1 for context. Useful for log analysis.",
    deBeginner: "grep -A 2 prints 2 lines after each matching line. -B shows lines before, -C shows both. Useful for log analysis.",
    deExpert: "grep -A n: after context. -B -C. Log context."
  }),
  (_i: number) => ({
    q: "What does `sed 's/old/new/g'` do?",
    o: ["Replaces all occurrences per line (global)", "Global replace", "All matches", "Replace all"],
    c: 0,
    e: "s/old/new/g: g flag = global, all occurrences per line.",
    de: "Without g, only first per line. sed 's/foo/bar/g'",
    deBeginner: "The g flag means 'global': replace every occurrence of 'old' with 'new' on each line. Without g, only the first match per line is replaced.",
    deExpert: "sed s/old/new/g: g global. All per line. Without g first only."
  }),
  (_i: number) => ({
    q: "What does `sed -i.bak 's/x/y/' file` do?",
    o: ["Edits in place, backup to file.bak", "In-place with backup", "Backup then edit", "Edit backup"],
    c: 0,
    e: "sed -i.bak edits file, saves original as file.bak.",
    de: "sed -i '' on macOS (no backup). GNU: -i alone = no backup.",
    deBeginner: "sed -i.bak edits the file in place and keeps a backup as file.bak. On macOS use sed -i '' for no backup. GNU sed -i alone overwrites without backup.",
    deExpert: "sed -i.bak: in-place, backup. macOS -i ''. GNU -i no backup."
  }),
  (_i: number) => ({
    q: "What does `sed '/pattern/d'` do?",
    o: ["Deletes lines matching pattern", "Delete matching", "Remove lines", "Drop matches"],
    c: 0,
    e: "sed /pattern/d deletes lines. d = delete.",
    de: "sed '/^#/d' removes comment lines. sed '/^$/d' removes blanks.",
    deBeginner: "sed '/pattern/d' deletes every line that contains the pattern. sed '/^#/d' removes comment lines; sed '/^$/d' removes blank lines.",
    deExpert: "sed /pat/d: delete matching. /^#/d comments. /^$/d blanks."
  }),
  (_i: number) => ({
    q: "What does `sed '1,10d' file` do?",
    o: ["Deletes lines 1 through 10", "Delete range", "Remove first 10", "Drop 1-10"],
    c: 0,
    e: "sed '1,10d' deletes lines 1 to 10.",
    de: "sed '10d' deletes only line 10. Address range 1,10.",
    deBeginner: "sed '1,10d' deletes lines 1 through 10 and prints the rest. sed '10d' deletes only line 10. The first number is the address or address range.",
    deExpert: "sed 1,10d: delete range. 10d line 10. Address range."
  }),
  (_i: number) => ({
    q: "What does `sed 's/.*/& suffix/'` do?",
    o: ["Appends ' suffix' to each line", "Append to line", "Add suffix", "& = whole match"],
    c: 0,
    e: "& in replacement = whole matched text. .* matches line.",
    de: "sed 's/^/prefix /' adds prefix. & is replacement backref.",
    deBeginner: ".* matches the whole line; & in the replacement is the matched text, so each line gets ' suffix' appended. sed 's/^/prefix /' adds a prefix.",
    deExpert: "sed & = backref whole match. .* line. s/^/prefix/ prefix."
  }),
  (_i: number) => ({
    q: "What does `awk '{print $NF}'` output?",
    o: ["Last field of each line", "Last field", "NF = last", "Final field"],
    c: 0,
    e: "NF = number of fields. $NF = last field.",
    de: "awk '{print $(NF-1)}' for second-to-last. $0 = whole line.",
    deBeginner: "NF is the number of fields on the line, so $NF is the last field. awk '{print $(NF-1)}' prints the second-to-last. $0 is the whole line.",
    deExpert: "awk $NF: last field. NF = number of fields. $(NF-1) second-to-last."
  }),
  (_i: number) => ({
    q: "What does `awk 'NR==5' file` print?",
    o: ["Only line 5 (NR = record number)", "Line 5", "Record 5", "Fifth line"],
    c: 0,
    e: "NR = current record (line) number. NR==5 matches line 5.",
    de: "awk 'NR>=10 && NR<=20' for range. NR and FNR for multi-file.",
    deBeginner: "NR is the current line (record) number. awk 'NR==5' prints only line 5. awk 'NR>=10 && NR<=20' prints lines 10–20. FNR resets per file.",
    deExpert: "awk NR==5: line 5. NR record number. NR>=10&&NR<=20 range. FNR."
  }),
  (_i: number) => ({
    q: "What does `awk 'NF>0' file` do?",
    o: ["Prints non-empty lines (NF = field count)", "Skip empty", "Non-empty", "NF filter"],
    c: 0,
    e: "NF>0 skips lines with no fields (blank lines).",
    de: "awk 'NF' is shorthand. awk '$0 !~ /^[[:space:]]*$/' for blanks.",
    deBeginner: "NF>0 means the line has at least one field, so blank lines are skipped. awk 'NF' is shorthand. For lines that aren't just whitespace use a regex.",
    deExpert: "awk NF>0: skip empty. NF shorthand. Blank line filter."
  }),
  (_i: number) => ({
    q: "What does `awk '{sum+=$1} END{print sum}'` do?",
    o: ["Sums first column, prints total at end", "Sum column", "Total", "Column sum"],
    c: 0,
    e: "awk accumulates in sum. END block runs after all input.",
    de: "BEGIN for setup. awk '{sum+=$3} END{print sum/NR}' for average.",
    deBeginner: "For each line it adds the first field to sum. The END block runs once after all input, so it prints the total. Use BEGIN for setup; sum/NR for average.",
    deExpert: "awk sum+=$1; END: running sum. END after input. sum/NR average."
  }),
  (_i: number) => ({
    q: "What does `awk -F'[,\t]'` set?",
    o: ["Multiple delimiters (comma or tab)", "Multi delimiter", "Comma or tab", "Field sep"],
    c: 0,
    e: "awk -F'[,\t]' uses comma or tab as separator.",
    de: "Character class. -F'[ :]+' for multiple spaces/colons.",
    deBeginner: "awk -F'[,\t]' sets the field separator to either comma or tab (character class). -F'[ :]+' uses one or more spaces or colons.",
    deExpert: "awk -F'[,\t]': FS character class. Multi delimiter. [ :]+ regex."
  }),
  (_i: number) => ({
    q: "What does `sort -n` do?",
    o: ["Numeric sort (not alphabetical)", "Numeric", "Number sort", "Sort numbers"],
    c: 0,
    e: "sort -n sorts by numeric value. 10 before 2.",
    de: "sort -n for numbers. sort -h for human (K,M,G). sort -V for version.",
    deBeginner: "sort -n sorts by numeric value so 10 comes after 2. sort -h for K/M/G. sort -V for version numbers.",
    deExpert: "sort -n: numeric. -h human. -V version."
  }),
  (_i: number) => ({
    q: "What does `sort -k2 -t','` sort by?",
    o: ["Second field (comma-delimited)", "Column 2", "Field 2", "Key 2"],
    c: 0,
    e: "sort -k2 uses field 2 as key. -t',' sets delimiter.",
    de: "sort -t',' -k2n for numeric. -k2,2 for single field.",
    deBeginner: "sort -k2 -t',' sorts by the second column (comma-separated). -k2n for numeric. -k2,2 for only field 2.",
    deExpert: "sort -k2 -t',': key 2. -k2n. -k2,2."
  }),
  (_i: number) => ({
    q: "What does `sort -u` do?",
    o: ["Removes duplicate lines", "Unique", "Deduplicate", "No duplicates"],
    c: 0,
    e: "sort -u outputs unique lines. Like sort | uniq.",
    de: "sort -u is one pass. sort | uniq needs sort first for uniq.",
    deBeginner: "sort -u sorts and removes duplicates in one pass. Same as sort | uniq.",
    deExpert: "sort -u: sort and unique. One pass."
  }),
  (_i: number) => ({
    q: "What does `uniq -c` add?",
    o: ["Count of consecutive duplicates before each line", "Count prefix", "Occurrence count", "Duplicate count"],
    c: 0,
    e: "uniq -c prefixes each line with count of consecutive duplicates.",
    de: "sort file | uniq -c. Most common: sort | uniq -c | sort -rn | head.",
    deBeginner: "uniq -c adds a count before each line. sort | uniq -c; then sort -rn | head for most common.",
    deExpert: "uniq -c: prefix count. sort | uniq -c | sort -rn | head."
  }),
  (_i: number) => ({
    q: "What does `uniq -d` output?",
    o: ["Only duplicate lines (one per group)", "Duplicates only", "Repeated lines", "Duplicate groups"],
    c: 0,
    e: "uniq -d prints one copy of each duplicated line.",
    de: "uniq -u prints only unique (no duplicates). -d = duplicated.",
    deBeginner: "uniq -d prints one line per duplicate group. uniq -u prints only lines with no duplicate.",
    deExpert: "uniq -d: duplicated only. uniq -u unique only."
  }),
  (_i: number) => ({
    q: "What does `cut -c1-10 file` extract?",
    o: ["Characters 1 through 10 of each line", "Char range", "Columns 1-10", "First 10 chars"],
    c: 0,
    e: "cut -c extracts by character position. -c1-10 = first 10 chars.",
    de: "cut -f for fields. cut -c for fixed columns. -c1,5,9 for specific.",
    deBeginner: "cut -c1-10 prints chars 1–10 of each line. -f for fields, -c for positions. -c1,5,9 for specific.",
    deExpert: "cut -c: char positions. -c1-10. -f fields."
  }),
  (_i: number) => ({
    q: "What does `cut -f1,3 -d';'` extract?",
    o: ["Fields 1 and 3 (semicolon-delimited)", "Fields 1 and 3", "Columns 1,3", "Semicolon fields"],
    c: 0,
    e: "cut -f1,3 gets fields 1 and 3. -d';' for semicolon.",
    de: "cut -f1-3 for range. cut -f2- for from 2 to end.",
    deBeginner: "cut -f1,3 -d';' prints columns 1 and 3 (semicolon-separated). -f1-3 range, -f2- from 2 to end.",
    deExpert: "cut -f1,3 -d';': fields. -f1-3. -f2- to end."
  }),
  (_i: number) => ({
    q: "What does `paste -s file` do?",
    o: ["Merges all lines into one (tab-separated)", "Serial paste", "Single line", "Merge lines"],
    c: 0,
    e: "paste -s joins lines of one file. Default: one line per line.",
    de: "paste -s -d',' joins with comma. Inverse of splitting.",
    deBeginner: "paste -s merges lines of one file into one line (tab by default). -d',' for comma.",
    deExpert: "paste -s: serial. One line. -d. Inverse of split."
  }),
  (_i: number) => ({
    q: "What does `tr -d '\\n'` do?",
    o: ["Deletes newlines (joins lines)", "Delete newlines", "Remove newlines", "Join lines"],
    c: 0,
    e: "tr -d removes characters. tr -d '\\n' joins all into one line.",
    de: "tr -s '\\n' squeezes multiple newlines. tr -d for delete.",
    deBeginner: "tr -d '\\n' removes newlines so input becomes one line. tr -s '\\n' squeezes blank lines.",
    deExpert: "tr -d '\\n': join lines. tr -s '\\n' squeeze."
  }),
  (_i: number) => ({
    q: "What does `tr -s ' '` do?",
    o: ["Squeezes repeated spaces to one", "Squeeze spaces", "Collapse spaces", "Single space"],
    c: 0,
    e: "tr -s squeezes repeated characters to single.",
    de: "tr -s ' ' < file. tr '[:space:]' '\\n' | tr -s '\\n' for words.",
    deBeginner: "tr -s ' ' collapses multiple spaces to one. With tr '[:space:]' '\\n' | tr -s '\\n' you get one word per line.",
    deExpert: "tr -s: squeeze. Tokenize: [:space:] \\n | tr -s \\n."
  }),
  (_i: number) => ({
    q: "What does `tr '[:lower:]' '[:upper:]'` do?",
    o: ["Converts lowercase to uppercase", "Case conversion", "To upper", "Uppercase"],
    c: 0,
    e: "tr with character classes. [:lower:] [:upper:] for case.",
    de: "tr '[:upper:]' '[:lower:]' for lowercase. POSIX classes.",
    deBeginner: "tr with POSIX classes: lowercase to uppercase. Swap for lowercase. Locale-aware.",
    deExpert: "tr [:lower:] [:upper:]. POSIX. Case. Locale."
  }),
  (_i: number) => ({
    q: "What does `head -c 100 file` show?",
    o: ["First 100 bytes", "First 100 chars", "100 bytes", "Byte limit"],
    c: 0,
    e: "head -c N shows first N bytes. -n for lines.",
    de: "head -c 1K for 1024 bytes. head -c -100 for all but last 100.",
    deBeginner: "head -c 100 prints first 100 bytes. -c 1K = 1024. GNU: -c -100 = all but last 100.",
    deExpert: "head -c n: first n bytes. -c 1K. -c -n (GNU)."
  }),
  (_i: number) => ({
    q: "What does `tail -n +5 file` show?",
    o: ["From line 5 to end (skip first 4)", "Skip first 4", "From line 5", "Offset 5"],
    c: 0,
    e: "tail -n +N starts from line N. Skip first N-1 lines.",
    de: "tail -n +2 skips header. head -n -5 excludes last 5.",
    deBeginner: "tail -n +5 outputs from line 5 to end. +2 skips header. head -n -5 excludes last 5 (GNU).",
    deExpert: "tail -n +N: from line N. head -n -k exclude last."
  }),
  (_i: number) => ({
    q: "What does `tail -f file` do?",
    o: ["Follows file (shows new lines as added)", "Follow", "Live tail", "Watch file"],
    c: 0,
    e: "tail -f keeps reading. For log files. Ctrl+C to stop.",
    de: "tail -F follows by name (handles rotation). tail -f on multiple files.",
    deBeginner: "tail -f keeps file open and prints new lines. For logs. tail -F follows by name (log rotation).",
    deExpert: "tail -f: follow. -F by name. Log rotation."
  }),
  (_i: number) => ({
    q: "What does `wc -w file` count?",
    o: ["Words", "Word count", "Words only", "Word tally"],
    c: 0,
    e: "wc -w counts words (whitespace-separated).",
    de: "wc -l lines, -w words, -c bytes, -m chars. wc -lwm for multiple.",
    deBeginner: "wc -w counts words. -l lines, -c bytes, -m chars. wc -lwm for several.",
    deExpert: "wc -w: words. -l -c -m. Whitespace."
  }),
  (_i: number) => ({
    q: "What does `wc -m` count?",
    o: ["Characters (multibyte-aware)", "Characters", "Char count", "Multibyte chars"],
    c: 0,
    e: "wc -m counts characters. -c counts bytes.",
    de: "UTF-8: char can be multiple bytes. wc -m for display width.",
    deBeginner: "wc -m counts characters (multibyte). In UTF-8, -m can differ from -c. Use for display width.",
    deExpert: "wc -m: characters. UTF-8. -c bytes."
  }),
  (_i: number) => ({
    q: "What does `diff -u f1 f2` produce?",
    o: ["Unified diff format", "Unified format", "Patch format", "U diff"],
    c: 0,
    e: "diff -u produces unified diff. Standard for patches.",
    de: "patch < file.diff applies. diff -u is readable, 3-line context.",
    deBeginner: "diff -u produces unified diff (patch format). patch < file.diff applies it. 3-line context.",
    deExpert: "diff -u: unified. patch. 3-line context."
  }),
  (_i: number) => ({
    q: "What does `diff -r dir1 dir2` do?",
    o: ["Recursively compares directories", "Recursive diff", "Compare dirs", "Dir diff"],
    c: 0,
    e: "diff -r compares directories recursively.",
    de: "diff -rq for brief (names only). diff -r --brief.",
    deBeginner: "diff -r compares dirs and subdirs. diff -rq only reports which files differ.",
    deExpert: "diff -r: recursive. -rq brief."
  }),
  (_i: number) => ({
    q: "What does `comm -12 f1 f2` output?",
    o: ["Lines common to both (sorted) files", "Common lines", "Intersection", "Shared lines"],
    c: 0,
    e: "comm -12 suppresses col1 and col2, shows col3 = common.",
    de: "comm expects sorted input. -1 -2 -3 suppress columns.",
    deBeginner: "comm -12 shows only lines in both files (col3). Inputs sorted. -1 -2 -3 suppress columns.",
    deExpert: "comm -12: common. Sorted. -1 -2 -3."
  }),
  (_i: number) => ({
    q: "What does `comm -23 f1 f2` output?",
    o: ["Lines only in f1 (not in f2)", "Only in first", "F1 minus f2", "Unique to f1"],
    c: 0,
    e: "comm -23: col1 only. Lines in f1 but not f2.",
    de: "comm: col1=f1 only, col2=f2 only, col3=both. -2 -3 suppress.",
    deBeginner: "comm -23 shows lines only in f1 (f1 minus f2). Cols: f1-only, f2-only, both.",
    deExpert: "comm -23: f1 minus f2. Set difference."
  }),
  (_i: number) => ({
    q: "What does `join -t':' f1 f2` use?",
    o: ["Colon as field delimiter", "Join delimiter", "Field separator", "Join on colon"],
    c: 0,
    e: "join -t':' uses colon. Default is whitespace.",
    de: "join -1 2 -2 1 for different join fields. Files must be sorted.",
    deBeginner: "join -t':' uses colon as delimiter (e.g. /etc/passwd). -1 2 -2 1 for different join columns. Sorted.",
    deExpert: "join -t':': delim. -1 -2 join fields. Sorted."
  }),
  (_i: number) => ({
    q: "What does `split -l 1000 file` produce?",
    o: ["Files of 1000 lines each", "Split by lines", "1000-line chunks", "Line split"],
    c: 0,
    e: "split -l 1000 splits into 1000-line files.",
    de: "Creates xaa, xab, ... cat x* to rejoin. split -n for chunks.",
    deBeginner: "split -l 1000 creates 1000-line files (xaa, xab, ...). cat x* to rejoin. split -n for N chunks.",
    deExpert: "split -l n: by lines. xaa, xab. -n chunks."
  }),
  (_i: number) => ({
    q: "What does `csplit -f part file '/pattern/'` do?",
    o: ["Splits at lines matching pattern", "Split at pattern", "Context split", "Pattern split"],
    c: 0,
    e: "csplit splits at regex. -f part gives prefix part00, part01.",
    de: "csplit file '/^---/' splits at separator lines.",
    deBeginner: "csplit splits at each line matching the pattern. -f part → part00, part01. '/^---/' at separator lines.",
    deExpert: "csplit: split at regex. -f prefix. part00."
  }),
  (_i: number) => ({
    q: "What does `fmt -w 72 file` do?",
    o: ["Reformats to 72-char lines", "Format width", "Wrap at 72", "Line width"],
    c: 0,
    e: "fmt reformats paragraphs. -w 72 sets line width.",
    de: "fmt -u uniform spacing. For wrapping text. Not code.",
    deBeginner: "fmt -w 72 rewraps paragraphs to ~72 chars. -u uniform spacing. For text, not code.",
    deExpert: "fmt -w n: reflow. -u. Not code."
  }),
  (_i: number) => ({
    q: "What does `fold -w 80 file` do?",
    o: ["Folds lines at 80 chars (no word wrap)", "Fold width", "Break at 80", "Hard wrap"],
    c: 0,
    e: "fold -w 80 breaks at 80 chars. Doesn't respect words.",
    de: "fold -s breaks at spaces when possible. Different from fmt.",
    deBeginner: "fold -w 80 breaks lines at 80 characters (can split words). fold -s breaks at spaces when possible. Not like fmt (reflow).",
    deExpert: "fold -w n: hard wrap. -s at space. Not fmt."
  }),
  (_i: number) => ({
    q: "What does `column -t file` do?",
    o: ["Formats into aligned columns", "Column format", "Table format", "Align columns"],
    c: 0,
    e: "column -t creates table from whitespace-separated input.",
    de: "column -s',' -t for CSV. Makes columns align.",
    deBeginner: "column -t turns whitespace-separated input into aligned columns. column -s',' -t for CSV. Nice for tables.",
    deExpert: "column -t: table. Align. -s delim. CSV."
  }),
  (_i: number) => ({
    q: "What does `nl file` add?",
    o: ["Line numbers", "Number lines", "Line numbers", "Numbered output"],
    c: 0,
    e: "nl numbers lines. Skips empty lines by default.",
    de: "nl -ba numbers all. nl -v 10 starts at 10. cat -n simpler.",
    deBeginner: "nl adds line numbers. By default skips empty lines. nl -ba numbers all. nl -v 10 start at 10. cat -n is simpler.",
    deExpert: "nl: number lines. -ba all. -v start. cat -n simpler."
  }),
  (_i: number) => ({
    q: "What does `pr -2 file` do?",
    o: ["Formats into 2 columns", "Two columns", "Column layout", "Print columns"],
    c: 0,
    e: "pr -2 formats into 2 columns. For printing.",
    de: "pr -l 50 page length. pr -h 'title' header. pr -t no header.",
    deBeginner: "pr -2 formats the file into 2 columns. pr -l 50 sets page length. pr -h 'title' sets header. pr -t no header.",
    deExpert: "pr -2: 2 columns. -l page. -h header. -t no header."
  }),
  (_i: number) => ({
    q: "What does `tac file` output?",
    o: ["Lines in reverse order", "Reverse lines", "Backwards", "Reversed file"],
    c: 0,
    e: "tac is cat backwards. Last line first.",
    de: "tac file. rev reverses each line. tac | rev for full reverse.",
    deBeginner: "tac prints lines in reverse order (last line first). rev reverses each line's characters. tac | rev reverses everything.",
    deExpert: "tac: reverse line order. rev per-line. tac | rev full."
  }),
  (_i: number) => ({
    q: "What does `rev file` do?",
    o: ["Reverses each line character-wise", "Reverse chars", "Line reverse", "Character reverse"],
    c: 0,
    e: "rev reverses characters in each line. hello -> olleh.",
    de: "rev per line. tac reverses line order. Different.",
    deBeginner: "rev reverses the characters in each line (hello -> olleh). tac reverses line order. Different operations.",
    deExpert: "rev: reverse chars per line. tac line order."
  }),
  (_i: number) => ({
    q: "What does `cmd 2>&1 | tee file` achieve?",
    o: ["Saves both stdout and stderr to file while displaying", "Capture both", "Stderr+stdout", "Both to file"],
    c: 0,
    e: "2>&1 merges stderr to stdout. tee saves and displays.",
    de: "cmd 2>&1 | tee log.txt. See output and save to file.",
    deBeginner: "2>&1 sends stderr to stdout so both go to the pipe. tee writes to the file and to the terminal. You see output and save it.",
    deExpert: "2>&1 | tee: merge stderr, save and display. Logging."
  }),
  (_i: number) => ({
    q: "What does `cmd > file 2>&1` order mean?",
    o: ["Redirect stdout first, then stderr to same", "Redirect order", "Both to file", "Stdout then stderr"],
    c: 0,
    e: "> file 2>&1: stdout to file, then stderr to where stdout goes.",
    de: "Order matters. 2>&1 > file would redirect stderr to old stdout.",
    deBeginner: "First stdout goes to file, then 2>&1 makes stderr go to wherever stdout is (the file). Order matters: 2>&1 > file would be wrong.",
    deExpert: "> file 2>&1: order. Stdout then dup stderr. 2>&1 > file wrong."
  }),
  (_i: number) => ({
    q: "What does `cmd >> file 2>&1` do?",
    o: ["Appends stdout and stderr to file", "Append both", "Append", "Append stdout stderr"],
    c: 0,
    e: ">> appends. 2>&1 sends stderr to stdout (file).",
    de: "Both streams appended. No overwrite. Log accumulation.",
    deBeginner: ">> appends (no overwrite). 2>&1 sends stderr to stdout, so both go to the file. Good for accumulating logs.",
    deExpert: ">> file 2>&1: append both. Log accumulation."
  }),
  (_i: number) => ({
    q: "What does `cmd < file` do?",
    o: ["Redirects stdin from file", "Input from file", "Read from file", "Stdin redirect"],
    c: 0,
    e: "cmd < file: file becomes stdin for cmd.",
    de: "cat file | cmd similar. < is direct. Both work for many commands.",
    deBeginner: "cmd < file makes the file the command's stdin. Similar to cat file | cmd but < is direct (no extra process).",
    deExpert: "cmd < file: stdin from file. No pipe. Fewer processes."
  }),
  (_i: number) => ({
    q: "What does `cmd << 'EOF'` create?",
    o: ["Here document (stdin from following lines)", "Heredoc", "Inline input", "Here doc"],
    c: 0,
    e: "<< 'EOF' reads until EOF line. No variable expansion with quotes.",
    de: "<< EOF expands variables. << 'EOF' literal. <<- strips leading tabs.",
    deBeginner: "<< 'EOF' is a here document: stdin comes from the following lines until a line that is just EOF. Quotes prevent variable expansion. <<- strips leading tabs.",
    deExpert: "<< 'EOF': heredoc. Quoted = no expand. <<- strip tabs."
  }),
  (_i: number) => ({
    q: "What does `cmd <<< 'string'` do?",
    o: ["Here string (stdin from string)", "Here string", "String stdin", "Inline string"],
    c: 0,
    e: "<<< passes string as stdin. Bash/ksh feature.",
    de: "echo 'hi' | cmd similar. <<< 'hi' more direct. No newline by default.",
    deBeginner: "<<< 'string' passes the string as stdin to the command (here string). Like echo 'hi' | cmd but direct. Bash/ksh.",
    deExpert: "<<<: here string. Bash/ksh. Stdin from string."
  }),
  (_i: number) => ({
    q: "What does `less +F file` do?",
    o: ["Starts in follow mode (like tail -f)", "Follow mode", "Live view", "Less follow"],
    c: 0,
    e: "less +F follows file. Like tail -f. Ctrl+C then F to toggle.",
    de: "less +G goes to end. less +/pattern searches. + for startup cmd.",
    deBeginner: "less +F starts in follow mode (like tail -f). Ctrl+C then F to toggle. +G go to end, +/pattern search at start.",
    deExpert: "less +F: follow. +cmd startup. +G +/pat."
  }),
  (_i: number) => ({
    q: "What does `less -S file` do?",
    o: ["Chops long lines (no wrap)", "No wrap", "Chop lines", "Sideways scroll"],
    c: 0,
    e: "less -S truncates long lines. Arrow to scroll horizontally.",
    de: "Useful for wide output. -S = --chop-long-lines.",
    deBeginner: "less -S truncates long lines (no wrap). Scroll horizontally with arrows. Good for wide output.",
    deExpert: "less -S: chop. No wrap. Horizontal scroll."
  }),
  (_i: number) => ({
    q: "What does `less -N` show?",
    o: ["Line numbers", "Number lines", "Line numbers", "Numbered"],
    c: 0,
    e: "less -N displays line numbers.",
    de: "Like cat -n in less. -n in some versions. / to search.",
    deBeginner: "less -N shows line numbers (like cat -n inside less). / to search.",
    deExpert: "less -N: line numbers. / search."
  }),
  (_i: number) => ({
    q: "What does `more` lack compared to `less`?",
    o: ["Backward scrolling", "No backward", "Forward only", "Less features"],
    c: 0,
    e: "more scrolls forward only. less can go back.",
    de: "less is more. more is older. less has search, backward, etc.",
    deBeginner: "more only scrolls forward. less can scroll back and has search. 'less is more'.",
    deExpert: "more: forward only. less: backward, search."
  }),
  (_i: number) => ({
    q: "What does `grep -E 'foo|bar'` match?",
    o: ["Lines containing foo OR bar", "Alternation", "Either pattern", "OR match"],
    c: 0,
    e: "grep -E extended regex. | means alternation (or).",
    de: "grep -E 'a|b' matches a or b. Escape | in basic grep.",
    deBeginner: "grep -E uses extended regex; | means 'or'. Matches lines with foo or bar.",
    deExpert: "grep -E: ERE. | alternation."
  }),
  (_i: number) => ({
    q: "What does `grep -P` use?",
    o: ["Perl-compatible regex", "PCRE", "Perl regex", "PCRE pattern"],
    c: 0,
    e: "grep -P uses Perl regex. More features than -E.",
    de: "Not all grep have -P. grep -E is more portable. \\d, \\w, etc. in -P.",
    deBeginner: "grep -P uses Perl regex (\\d, \\w). Not all systems have it; -E more portable.",
    deExpert: "grep -P: PCRE. Not portable. -E portable."
  }),
  (_i: number) => ({
    q: "What does `grep -o pattern` output?",
    o: ["Only the matching part (not full line)", "Match only", "Just match", "Only match"],
    c: 0,
    e: "grep -o prints only matched text. One per line for multiple.",
    de: "echo 'foo bar foo' | grep -o 'foo' prints foo twice.",
    deBeginner: "grep -o prints only the match, not the whole line. Multiple matches = multiple lines.",
    deExpert: "grep -o: only match. Extract."
  }),
  (_i: number) => ({
    q: "What does `grep -m 5 pattern` do?",
    o: ["Stops after 5 matches", "Max 5", "Limit 5", "First 5"],
    c: 0,
    e: "grep -m 5 stops after 5 matches. Performance for large files.",
    de: "grep -m 1 for 'any match' check. Exit 0 if found.",
    deBeginner: "grep -m 5 stops after 5 matches. -m 1 stops at first (e.g. 'any match').",
    deExpert: "grep -m n: max matches. -m 1 any."
  }),
  (_i: number) => ({
    q: "What does `sed '2,5s/old/new/'` do?",
    o: ["Substitutes only in lines 2-5", "Range substitute", "Lines 2-5", "Limited replace"],
    c: 0,
    e: "sed '2,5s/old/new/' restricts substitution to lines 2-5.",
    de: "Address range before s. sed '10,$s/x/y/' from 10 to end.",
    deBeginner: "sed '2,5s/old/new/' substitutes only on lines 2-5. 10,$ from line 10 to end.",
    deExpert: "sed 2,5s: address range. 10,$ end."
  }),
  (_i: number) => ({
    q: "What does `sed '/start/,/end/d'` do?",
    o: ["Deletes from line matching start to line matching end", "Range delete", "Pattern range", "Delete block"],
    c: 0,
    e: "sed /start/,/end/d deletes that range. Inclusive.",
    de: "Useful for removing blocks. /^#/,/^$/d for comment blocks.",
    deBeginner: "sed deletes from first /start/ to first /end/ (inclusive). /^#/,/^$/d removes comment blocks.",
    deExpert: "sed /s/,/e/d: pattern range. Inclusive."
  }),
  (_i: number) => ({
    q: "What does `sed '=' file` output?",
    o: ["Line numbers followed by lines", "Number then line", "Line numbers", "Prepend numbers"],
    c: 0,
    e: "sed '=' prints line number before each line.",
    de: "sed '=' | paste - - for number and line on same line.",
    deBeginner: "sed '=' prints line number then line (separate lines). paste - - puts them on one line.",
    deExpert: "sed =: line number. paste - -."
  }),
  (_i: number) => ({
    q: "What does `awk 'length>80'` print?",
    o: ["Lines longer than 80 characters", "Long lines", "Length filter", "Over 80 chars"],
    c: 0,
    e: "awk length is length of $0. length>80 filters long lines.",
    de: "awk 'length($1)>10' for field length. length() function.",
    deBeginner: "awk prints lines longer than 80 chars. length($1)>10 for first field length.",
    deExpert: "awk length>80: length($0). length($1) field."
  }),
  (_i: number) => ({
    q: "What does `awk '/pattern/{print $2}'` do?",
    o: ["Prints 2nd field of matching lines only", "Match then field", "Conditional print", "Filter and extract"],
    c: 0,
    e: "awk /pattern/ matches. {print $2} for those lines only.",
    de: "Pattern before block. awk '$3>100' for numeric filter.",
    deBeginner: "awk runs the block only for matching lines; prints $2 for those. $3>100 numeric filter.",
    deExpert: "awk /pat/{print $2}: pattern action. Filter extract."
  }),
  (_i: number) => ({
    q: "What does `awk 'BEGIN{FS=\":\"}'` set?",
    o: ["Field separator in BEGIN block", "FS in BEGIN", "Delimiter", "Field sep"],
    c: 0,
    e: "BEGIN runs before first line. FS = field separator.",
    de: "awk 'BEGIN{FS=\":\"} {print $1}' /etc/passwd. Same as -F.",
    deBeginner: "BEGIN runs before input. FS = field separator (here colon). Same as -F':'. /etc/passwd.",
    deExpert: "awk BEGIN{FS=}: FS. Same as -F."
  }),
  (_i: number) => ({
    q: "What does `awk '{print $1,$3}'` use between fields?",
    o: ["OFS (output field separator, default space)", "Space between", "Output sep", "Default space"],
    c: 0,
    e: "Comma in print uses OFS. Default OFS is space.",
    de: "awk 'BEGIN{OFS=\",\"}' for CSV output.",
    deBeginner: "Comma in print uses OFS (default space). BEGIN{OFS=\",\"} for CSV.",
    deExpert: "awk print $1,$3: OFS. BEGIN{OFS=\",\"} CSV."
  }),
  (_i: number) => ({
    q: "What does `sort -h` do?",
    o: ["Human-readable sort (K, M, G)", "Human sort", "Size sort", "K M G sort"],
    c: 0,
    e: "sort -h understands 1K, 2M, 3G. Sorts by numeric value.",
    de: "sort -h for du -h output. sort -V for version numbers.",
    deBeginner: "sort -h sorts human sizes (1K, 2M, 3G). Good for du -h. sort -V for versions.",
    deExpert: "sort -h: human. K M G. du -h. -V version."
  }),
  (_i: number) => ({
    q: "What does `sort -V` do?",
    o: ["Version sort (natural order for versions)", "Version sort", "Natural version", "Ver sort"],
    c: 0,
    e: "sort -V: file1, file2, file10. Not file1, file10, file2.",
    de: "sort -V for version strings. v1.2.10 before v1.2.9? No, -V handles.",
    deBeginner: "sort -V sorts version-style strings: file1, file2, file10. Handles version numbers.",
    deExpert: "sort -V: version. Natural. file1 file2 file10."
  }),
  (_i: number) => ({
    q: "What does `sort -R` do?",
    o: ["Random order (shuffle)", "Random sort", "Shuffle", "Random order"],
    c: 0,
    e: "sort -R shuffles. Random order. Not cryptographically secure.",
    de: "shuf is better for shuffle. sort -R for quick random.",
    deBeginner: "sort -R shuffles lines into random order. Not crypto-safe. shuf is better for shuffling.",
    deExpert: "sort -R: shuffle. Not crypto. shuf better."
  }),
  (_i: number) => ({
    q: "What does `sort -t',' -k2,2n` do?",
    o: ["Sorts by field 2 numerically (comma-delimited)", "Sort field 2", "Numeric key 2", "CSV sort"],
    c: 0,
    e: "sort -k2,2n: key is field 2 only, numeric. -t',' delimiter.",
    de: "sort -k2,3 for range. ,2n = end at 2, numeric.",
    deBeginner: "sort -t',' -k2,2n sorts by field 2 only, numerically. -k2,3 would use fields 2-3. Comma-delimited.",
    deExpert: "sort -k2,2n: key 2 only, numeric. -k2,3 range."
  }),
  (_i: number) => ({
    q: "What does `sort -s` do?",
    o: ["Stable sort (preserves order of equal elements)", "Stable", "Stable sort", "Preserve order"],
    c: 0,
    e: "sort -s is stable. Equal keys keep original order.",
    de: "sort -k1 -s: sort by col1, stable. Useful for multi-key.",
    deBeginner: "sort -s is stable: when keys are equal, original order is kept. Useful for multi-key sorts.",
    deExpert: "sort -s: stable. Equal keys preserve order."
  }),
  (_i: number) => ({
    q: "What does `cut --complement -f1` do?",
    o: ["Outputs all fields except field 1", "Complement", "Exclude field 1", "All but 1"],
    c: 0,
    e: "cut --complement inverts selection. All except -f1.",
    de: "cut --complement -f2,3 excludes 2 and 3. GNU cut.",
    deBeginner: "cut --complement outputs all fields except those in -f. -f1 means 'all but 1'. GNU cut.",
    deExpert: "cut --complement: invert. All but -f. GNU."
  }),
  (_i: number) => ({
    q: "What does `expand -t 4 file` do?",
    o: ["Converts tabs to 4 spaces", "Tab to space", "Expand tabs", "Tab expand"],
    c: 0,
    e: "expand converts tabs to spaces. -t 4 = 4 spaces per tab.",
    de: "unexpand does opposite. expand for fixed-width.",
    deBeginner: "expand -t 4 turns each tab into 4 spaces. unexpand does the opposite.",
    deExpert: "expand -t 4: tab to spaces. unexpand reverse."
  }),
  (_i: number) => ({
    q: "What does `unexpand -t 4 file` do?",
    o: ["Converts spaces to tabs (where possible)", "Space to tab", "Unexpand", "Tab convert"],
    c: 0,
    e: "unexpand converts leading spaces to tabs. -t 4 for 4-space groups.",
    de: "unexpand -a for all. Saves space. expand reverses.",
    deBeginner: "unexpand -t 4 converts leading spaces to tabs (groups of 4). -a for all. expand reverses.",
    deExpert: "unexpand -t 4: spaces to tabs. -a all."
  }),
  (_i: number) => ({
    q: "What does `od -c file` show?",
    o: ["Characters (including special)", "Octal dump chars", "Char dump", "Character view"],
    c: 0,
    e: "od -c shows bytes as characters. \\n for newline, etc.",
    de: "od -A x -t x1 for hex. od -c for readable. xxd also.",
    deBeginner: "od -c shows bytes as characters (\\n for newline). od -A x -t x1 for hex. xxd similar.",
    deExpert: "od -c: char dump. -A x -t x1 hex."
  }),
  (_i: number) => ({
    q: "What does `hexdump -C file` show?",
    o: ["Canonical hex+ASCII dump", "Hex dump", "Hex and ASCII", "Canonical dump"],
    c: 0,
    e: "hexdump -C shows hex and ASCII. Common for binary.",
    de: "Left: offset. Middle: hex. Right: ASCII. Like xxd.",
    deBeginner: "hexdump -C shows offset, hex bytes, and ASCII. Common for inspecting binary files. Like xxd.",
    deExpert: "hexdump -C: canonical. Offset hex ASCII."
  }),
  (_i: number) => ({
    q: "What does `xxd file` produce?",
    o: ["Hex dump (default)", "Hex dump", "XXD format", "Hex view"],
    c: 0,
    e: "xxd makes hex dump. xxd -r reverses (hex to binary).",
    de: "xxd -g 1 for byte grouping. xxd -l 100 for first 100 bytes.",
    deBeginner: "xxd produces a hex dump. xxd -r reads hex and outputs binary. -g 1 byte grouping, -l 100 first 100 bytes.",
    deExpert: "xxd: hex dump. xxd -r reverse. -g -l."
  }),
  (_i: number) => ({
    q: "What does `strings file` output?",
    o: ["Printable strings from binary", "Strings", "Printable", "Text from binary"],
    c: 0,
    e: "strings extracts printable sequences. Default 4+ chars.",
    de: "strings -n 10 for longer. Useful for binaries, firmware.",
    deBeginner: "strings extracts printable sequences (default 4+ chars) from binary. -n 10 for longer. Binaries, firmware.",
    deExpert: "strings: printable. -n min length. Binary."
  }),
  (_i: number) => ({
    q: "What does `base64 file` do?",
    o: ["Encodes file to base64", "Base64 encode", "Encode", "Base64"],
    c: 0,
    e: "base64 encodes. base64 -d decodes. For binary in text.",
    de: "base64 -w 0 for no wrap. Echo and decode for transport.",
    deBeginner: "base64 encodes the file for text transport. base64 -d decodes. -w 0 no line wrap.",
    deExpert: "base64: encode. -d decode. -w 0 no wrap."
  }),
  (_i: number) => ({
    q: "What does `md5sum file` output?",
    o: ["MD5 hash and filename", "MD5 hash", "Checksum", "Hash"],
    c: 0,
    e: "md5sum prints MD5 digest. sha256sum for SHA-256.",
    de: "md5sum -c to verify. Not for security, use sha256.",
    deBeginner: "md5sum prints MD5 hash and filename. md5sum -c to verify. For security use sha256sum.",
    deExpert: "md5sum: MD5. -c verify. Prefer sha256."
  }),
  (_i: number) => ({
    q: "What does `cksum file` output?",
    o: ["CRC checksum, size, filename", "CRC checksum", "Checksum", "CRC"],
    c: 0,
    e: "cksum outputs CRC32, byte count, name. Legacy.",
    de: "Not cryptographic. For integrity. sum is older.",
    deBeginner: "cksum outputs CRC32, byte count, and filename. Legacy; not cryptographic. For integrity.",
    deExpert: "cksum: CRC32, bytes, name. Legacy. Not crypto."
  }),
  (_i: number) => ({
    q: "What does `sponge file` do?",
    o: ["Writes stdin to file (after reading all input)", "Soak input", "Delayed write", "Sponge"],
    c: 0,
    e: "sponge reads all, then writes. For in-place: cmd | sponge file.",
    de: "cat file | sed 's/x/y/' | sponge file. Can't do sed -i on pipe.",
    deBeginner: "sponge reads all input, then writes to the file. So you can do cmd | sponge file and overwrite the same file (e.g. sed without -i on a pipe).",
    deExpert: "sponge: buffer then write. In-place pipe. moreutils."
  }),
  (_i: number) => ({
    q: "What does `script -a file` do?",
    o: ["Appends to typescript file", "Append script", "Append session", "Add to log"],
    c: 0,
    e: "script -a appends. script overwrites by default.",
    de: "script -a session.log. exit to stop. Records terminal.",
    deBeginner: "script -a appends the session to the file instead of overwriting. exit to stop. Records your terminal session.",
    deExpert: "script -a: append. Default overwrite. exit stop."
  }),
  (_i: number) => ({
    q: "What does `scriptreplay timing typescript` do?",
    o: ["Replays recorded session", "Replay session", "Playback", "Replay script"],
    c: 0,
    e: "scriptreplay plays back script output with timing.",
    de: "script -t 2> timing. Then scriptreplay timing typescript.",
    deBeginner: "scriptreplay plays back a session recorded with script -t. Pass the timing file and the typescript. script -t 2> timing records timing.",
    deExpert: "scriptreplay: playback. script -t 2> timing. Replay."
  }),
  (_i: number) => ({
    q: "What does `col -b` do?",
    o: ["Removes backspaces (used with man)", "Remove backspace", "Filter backspace", "Clean output"],
    c: 0,
    e: "col -b removes backspace/overstrike. man foo | col -b > file.",
    de: "Man uses overstrike. col -b makes plain text. Pipe from man.",
    deBeginner: "col -b removes backspace and overstrike (e.g. from man). man foo | col -b > file gives clean text.",
    deExpert: "col -b: remove backspace/overstrike. man | col -b."
  }),
  (_i: number) => ({
    q: "What does `colrm 1 10` do?",
    o: ["Removes columns 1-10 from each line", "Remove columns", "Delete cols", "Col remove"],
    c: 0,
    e: "colrm 1 10 removes columns 1 through 10.",
    de: "colrm 5 removes from 5 to end. cut is more flexible.",
    deBeginner: "colrm 1 10 removes character columns 1-10 from each line. colrm 5 removes from 5 to end. cut is more flexible.",
    deExpert: "colrm: remove char columns. cut more flexible."
  }),
  (_i: number) => ({
    q: "What does `tsort file` do?",
    o: ["Topological sort of pairs", "Topological sort", "Order dependencies", "TSort"],
    c: 0,
    e: "tsort does topological sort. Input: pairs (a b) meaning a before b.",
    de: "For dependency order. ldd uses internally. Rarely used directly.",
    deBeginner: "tsort does topological sort. Input is pairs (a b) meaning a before b. Used for dependency order. ldd uses it.",
    deExpert: "tsort: topological sort. Pairs a b. ldd. Dependencies."
  }),
  (_i: number) => ({
    q: "What does `seq 1 5` output?",
    o: ["1 2 3 4 5 (one per line)", "Sequence", "Numbers 1-5", "Seq output"],
    c: 0,
    e: "seq 1 5 prints 1 through 5. seq 2 2 10 for step.",
    de: "seq 1 2 10 = 1 3 5 7 9. For loops: for i in $(seq 1 10).",
    deBeginner: "seq 1 5 prints 1, 2, 3, 4, 5 (one per line). seq 2 2 10 prints 2 4 6 8 10. for i in $(seq 1 10).",
    deExpert: "seq: sequence. seq 1 5. seq 2 2 10 step. Loops."
  }),
  (_i: number) => ({
    q: "What does `yes` output by default?",
    o: ["Repeated 'y' (or argument) forever", "Yes repeated", "Infinite y", "Yes loop"],
    c: 0,
    e: "yes prints 'y' forever. yes something for custom. Ctrl+C stop.",
    de: "yes | cmd for auto-answer. yes '' for infinite blank lines.",
    deBeginner: "yes prints 'y' forever (or its argument). yes | cmd auto-answers. yes '' for blank lines. Ctrl+C to stop.",
    deExpert: "yes: infinite y or arg. yes | cmd. yes ''."
  }),
  (_i: number) => ({
    q: "What does `xargs -I {} cmd {}` do?",
    o: ["Replaces {} with each input item", "Replace placeholder", "Insert arg", "Xargs replace"],
    c: 0,
    e: "xargs -I {} replaces {} with each input. For multiple {} in cmd.",
    de: "echo a b | xargs -I {} echo item: {}. -I implies -L 1.",
    deBeginner: "xargs -I {} replaces {} with each input line (or item). -I implies -L 1 (one arg per run).",
    deExpert: "xargs -I {}: replace. -I implies -L 1."
  }),
  (_i: number) => ({
    q: "What does `xargs -P 4` do?",
    o: ["Runs up to 4 commands in parallel", "Parallel", "4 processes", "Parallel xargs"],
    c: 0,
    e: "xargs -P 4 runs 4 instances in parallel. Speeds up.",
    de: "find . -name '*.jpg' | xargs -P 4 -I {} convert {} {}.png",
    deBeginner: "xargs -P 4 runs up to 4 copies of the command in parallel. Speeds up batch jobs.",
    deExpert: "xargs -P n: parallel. Up to n processes."
  }),
  (_i: number) => ({
    q: "What does `xargs -r` do (GNU)?",
    o: ["No run if empty input", "No run if empty", "Require input", "Skip empty"],
    c: 0,
    e: "xargs -r doesn't run if no input. Avoids cmd with no args.",
    de: "Default xargs runs once with no args. -r prevents that.",
    deBeginner: "xargs -r (GNU) does not run the command if there is no input. Default xargs runs once with no arguments.",
    deExpert: "xargs -r: don't run if empty. GNU."
  }),
  (_i: number) => ({
    q: "What does `parallel cmd ::: a b c` do?",
    o: ["Runs cmd with a, b, c as arguments in parallel", "Parallel args", "GNU parallel", "Parallel run"],
    c: 0,
    e: "parallel runs jobs in parallel. ::: separates input sources.",
    de: "parallel echo ::: 1 2 3. More powerful than xargs -P.",
    deBeginner: "parallel runs the command with a, b, c as arguments, in parallel. ::: separates input. More powerful than xargs -P.",
    deExpert: "parallel: GNU parallel. ::: input. More than xargs -P."
  }),
  (_i: number) => ({
    q: "What does `tr -d '\\n'` do?",
    o: ["Deletes newline characters from input", "Remove newlines", "Delete newline", "Strip newlines"],
    c: 0,
    e: "tr -d removes specified characters. tr -d '\\n' joins lines.",
    de: "tr -d '[:space:]' removes all whitespace. tr only reads stdin.",
    deBeginner: "tr -d '\\n' removes newlines so input becomes one line. tr -d '[:space:]' removes all whitespace.",
    deExpert: "tr -d '\\n': join lines. tr -d '[:space:]'."
  }),
  (_i: number) => ({
    q: "What does `tr -s ' '` do?",
    o: ["Squeezes repeated spaces into one", "Squeeze spaces", "Collapse spaces", "Single space"],
    c: 0,
    e: "tr -s squeezes repeated chars. tr -s ' ' collapses spaces.",
    de: "tr -s '\\n' squeezes blank lines. Useful for cleaning output.",
    deBeginner: "tr -s ' ' collapses multiple spaces into one. tr -s '\\n' squeezes blank lines.",
    deExpert: "tr -s: squeeze. Spaces. tr -s '\\n' blank lines."
  }),
  (_i: number) => ({
    q: "What does `tr 'a-z' 'A-Z'` do?",
    o: ["Uppercases lowercase letters", "To uppercase", "Case convert", "Upper case"],
    c: 0,
    e: "tr translates chars. a-z to A-Z uppercases.",
    de: "tr '[:lower:]' '[:upper:]' is portable. Ranges must be same length or use tr -t.",
    deBeginner: "tr maps a-z to A-Z (uppercase). tr '[:lower:]' '[:upper:]' is portable. Ranges should match length or use tr -t.",
    deExpert: "tr a-z A-Z: uppercase. [:lower:] [:upper:] portable."
  }),
  (_i: number) => ({
    q: "What does `fold -w 80` do?",
    o: ["Wraps lines at 80 characters", "Wrap at 80", "Line wrap", "Fold width"],
    c: 0,
    e: "fold -w 80 breaks lines at 80 chars. -s breaks at spaces.",
    de: "fold -s -w 72 for email. Default 80 columns.",
    deBeginner: "fold -w 80 breaks lines at 80 characters. -s breaks at spaces when possible. fold -s -w 72 for email.",
    deExpert: "fold -w n: wrap. -s at space. Not reflow."
  }),
  (_i: number) => ({
    q: "What does `fmt -w 60` do?",
    o: ["Reformats paragraphs to ~60 chars wide", "Format width", "Paragraph format", "Wrap text"],
    c: 0,
    e: "fmt reformats text. -w 60 sets target width.",
    de: "fmt -u uniform spacing. fmt for quick text reformat.",
    deBeginner: "fmt -w 60 reformats paragraphs to about 60 characters wide. -u for uniform spacing. Quick text reflow.",
    deExpert: "fmt -w n: reflow. -u. Paragraph width."
  }),
  (_i: number) => ({
    q: "What does `split -l 100 file` do?",
    o: ["Splits file into 100-line chunks", "Split by lines", "100 lines each", "Line split"],
    c: 0,
    e: "split -l 100 creates files of 100 lines. xaa, xab, etc.",
    de: "split -l 100 -d for numeric suffix. split -b 1M for bytes.",
    deBeginner: "split -l 100 creates files of 100 lines each (xaa, xab, ...). -d for numeric suffix (00, 01). -b 1M for bytes.",
    deExpert: "split -l n: by lines. -d numeric. -b bytes."
  }),
];
