// LEVEL 3 INTERMEDIATE — File & Text Processing (100 unique questions)
// Replaces placeholders. All options are meaningful, no "Option A/B/C/D".

export const level3Intermediate = [
  (_i: number) => ({
    q: "What does `grep -n pattern file` add to output?",
    o: ["Line numbers before each match", "Number of matches", "Match count", "Line count"],
    c: 0,
    e: "grep -n prefixes each line with its line number.",
    de: "grep -n 'error' log.txt. Useful for editing or referencing."
  }),
  (_i: number) => ({
    q: "What does `grep -c pattern file` output?",
    o: ["Count of matching lines", "Character count", "Match count", "Line count"],
    c: 0,
    e: "grep -c counts matching lines. No line content.",
    de: "grep -c is faster when you only need count. Exit 1 if no match."
  }),
  (_i: number) => ({
    q: "What does `grep -l pattern files` output?",
    o: ["Only filenames that contain matches", "List of files", "File names", "Matching files"],
    c: 0,
    e: "grep -l lists filenames with matches. Stops after first match per file.",
    de: "grep -L lists files with NO matches. Inverse of -l."
  }),
  (_i: number) => ({
    q: "What does `grep -r pattern dir` do?",
    o: ["Searches recursively in directory", "Recursive search", "Search dirs", "Recurse"],
    c: 0,
    e: "grep -r searches all files under directory.",
    de: "grep -R follows symlinks. grep -r --include='*.c' to filter."
  }),
  (_i: number) => ({
    q: "What does `grep -w pattern` do?",
    o: ["Matches whole words only", "Word match", "Whole word", "Word boundary"],
    c: 0,
    e: "grep -w matches whole words. 'foo' won't match 'foobar'.",
    de: "Uses \\b word boundaries. grep -w 'the' excludes 'other'."
  }),
  (_i: number) => ({
    q: "What does `grep -A 2 pattern` show?",
    o: ["2 lines after each match", "After context", "Lines after", "Context after"],
    c: 0,
    e: "grep -A N shows N lines after match. -B before, -C both.",
    de: "grep -A 3 -B 1 for context. Useful for log analysis."
  }),
  (_i: number) => ({
    q: "What does `sed 's/old/new/g'` do?",
    o: ["Replaces all occurrences per line (global)", "Global replace", "All matches", "Replace all"],
    c: 0,
    e: "s/old/new/g: g flag = global, all occurrences per line.",
    de: "Without g, only first per line. sed 's/foo/bar/g'"
  }),
  (_i: number) => ({
    q: "What does `sed -i.bak 's/x/y/' file` do?",
    o: ["Edits in place, backup to file.bak", "In-place with backup", "Backup then edit", "Edit backup"],
    c: 0,
    e: "sed -i.bak edits file, saves original as file.bak.",
    de: "sed -i '' on macOS (no backup). GNU: -i alone = no backup."
  }),
  (_i: number) => ({
    q: "What does `sed '/pattern/d'` do?",
    o: ["Deletes lines matching pattern", "Delete matching", "Remove lines", "Drop matches"],
    c: 0,
    e: "sed /pattern/d deletes lines. d = delete.",
    de: "sed '/^#/d' removes comment lines. sed '/^$/d' removes blanks."
  }),
  (_i: number) => ({
    q: "What does `sed '1,10d' file` do?",
    o: ["Deletes lines 1 through 10", "Delete range", "Remove first 10", "Drop 1-10"],
    c: 0,
    e: "sed '1,10d' deletes lines 1 to 10.",
    de: "sed '10d' deletes only line 10. Address range 1,10."
  }),
  (_i: number) => ({
    q: "What does `sed 's/.*/& suffix/'` do?",
    o: ["Appends ' suffix' to each line", "Append to line", "Add suffix", "& = whole match"],
    c: 0,
    e: "& in replacement = whole matched text. .* matches line.",
    de: "sed 's/^/prefix /' adds prefix. & is replacement backref."
  }),
  (_i: number) => ({
    q: "What does `awk '{print $NF}'` output?",
    o: ["Last field of each line", "Last field", "NF = last", "Final field"],
    c: 0,
    e: "NF = number of fields. $NF = last field.",
    de: "awk '{print $(NF-1)}' for second-to-last. $0 = whole line."
  }),
  (_i: number) => ({
    q: "What does `awk 'NR==5' file` print?",
    o: ["Only line 5 (NR = record number)", "Line 5", "Record 5", "Fifth line"],
    c: 0,
    e: "NR = current record (line) number. NR==5 matches line 5.",
    de: "awk 'NR>=10 && NR<=20' for range. NR and FNR for multi-file."
  }),
  (_i: number) => ({
    q: "What does `awk 'NF>0' file` do?",
    o: ["Prints non-empty lines (NF = field count)", "Skip empty", "Non-empty", "NF filter"],
    c: 0,
    e: "NF>0 skips lines with no fields (blank lines).",
    de: "awk 'NF' is shorthand. awk '$0 !~ /^[[:space:]]*$/' for blanks."
  }),
  (_i: number) => ({
    q: "What does `awk '{sum+=$1} END{print sum}'` do?",
    o: ["Sums first column, prints total at end", "Sum column", "Total", "Column sum"],
    c: 0,
    e: "awk accumulates in sum. END block runs after all input.",
    de: "BEGIN for setup. awk '{sum+=$3} END{print sum/NR}' for average."
  }),
  (_i: number) => ({
    q: "What does `awk -F'[,\t]'` set?",
    o: ["Multiple delimiters (comma or tab)", "Multi delimiter", "Comma or tab", "Field sep"],
    c: 0,
    e: "awk -F'[,\t]' uses comma or tab as separator.",
    de: "Character class. -F'[ :]+' for multiple spaces/colons."
  }),
  (_i: number) => ({
    q: "What does `sort -n` do?",
    o: ["Numeric sort (not alphabetical)", "Numeric", "Number sort", "Sort numbers"],
    c: 0,
    e: "sort -n sorts by numeric value. 10 before 2.",
    de: "sort -n for numbers. sort -h for human (K,M,G). sort -V for version."
  }),
  (_i: number) => ({
    q: "What does `sort -k2 -t','` sort by?",
    o: ["Second field (comma-delimited)", "Column 2", "Field 2", "Key 2"],
    c: 0,
    e: "sort -k2 uses field 2 as key. -t',' sets delimiter.",
    de: "sort -t',' -k2n for numeric. -k2,2 for single field."
  }),
  (_i: number) => ({
    q: "What does `sort -u` do?",
    o: ["Removes duplicate lines", "Unique", "Deduplicate", "No duplicates"],
    c: 0,
    e: "sort -u outputs unique lines. Like sort | uniq.",
    de: "sort -u is one pass. sort | uniq needs sort first for uniq."
  }),
  (_i: number) => ({
    q: "What does `uniq -c` add?",
    o: ["Count of consecutive duplicates before each line", "Count prefix", "Occurrence count", "Duplicate count"],
    c: 0,
    e: "uniq -c prefixes each line with count of consecutive duplicates.",
    de: "sort file | uniq -c. Most common: sort | uniq -c | sort -rn | head."
  }),
  (_i: number) => ({
    q: "What does `uniq -d` output?",
    o: ["Only duplicate lines (one per group)", "Duplicates only", "Repeated lines", "Duplicate groups"],
    c: 0,
    e: "uniq -d prints one copy of each duplicated line.",
    de: "uniq -u prints only unique (no duplicates). -d = duplicated."
  }),
  (_i: number) => ({
    q: "What does `cut -c1-10 file` extract?",
    o: ["Characters 1 through 10 of each line", "Char range", "Columns 1-10", "First 10 chars"],
    c: 0,
    e: "cut -c extracts by character position. -c1-10 = first 10 chars.",
    de: "cut -f for fields. cut -c for fixed columns. -c1,5,9 for specific."
  }),
  (_i: number) => ({
    q: "What does `cut -f1,3 -d';'` extract?",
    o: ["Fields 1 and 3 (semicolon-delimited)", "Fields 1 and 3", "Columns 1,3", "Semicolon fields"],
    c: 0,
    e: "cut -f1,3 gets fields 1 and 3. -d';' for semicolon.",
    de: "cut -f1-3 for range. cut -f2- for from 2 to end."
  }),
  (_i: number) => ({
    q: "What does `paste -s file` do?",
    o: ["Merges all lines into one (tab-separated)", "Serial paste", "Single line", "Merge lines"],
    c: 0,
    e: "paste -s joins lines of one file. Default: one line per line.",
    de: "paste -s -d',' joins with comma. Inverse of splitting."
  }),
  (_i: number) => ({
    q: "What does `tr -d '\\n'` do?",
    o: ["Deletes newlines (joins lines)", "Delete newlines", "Remove newlines", "Join lines"],
    c: 0,
    e: "tr -d removes characters. tr -d '\\n' joins all into one line.",
    de: "tr -s '\\n' squeezes multiple newlines. tr -d for delete."
  }),
  (_i: number) => ({
    q: "What does `tr -s ' '` do?",
    o: ["Squeezes repeated spaces to one", "Squeeze spaces", "Collapse spaces", "Single space"],
    c: 0,
    e: "tr -s squeezes repeated characters to single.",
    de: "tr -s ' ' < file. tr '[:space:]' '\\n' | tr -s '\\n' for words."
  }),
  (_i: number) => ({
    q: "What does `tr '[:lower:]' '[:upper:]'` do?",
    o: ["Converts lowercase to uppercase", "Case conversion", "To upper", "Uppercase"],
    c: 0,
    e: "tr with character classes. [:lower:] [:upper:] for case.",
    de: "tr '[:upper:]' '[:lower:]' for lowercase. POSIX classes."
  }),
  (_i: number) => ({
    q: "What does `head -c 100 file` show?",
    o: ["First 100 bytes", "First 100 chars", "100 bytes", "Byte limit"],
    c: 0,
    e: "head -c N shows first N bytes. -n for lines.",
    de: "head -c 1K for 1024 bytes. head -c -100 for all but last 100."
  }),
  (_i: number) => ({
    q: "What does `tail -n +5 file` show?",
    o: ["From line 5 to end (skip first 4)", "Skip first 4", "From line 5", "Offset 5"],
    c: 0,
    e: "tail -n +N starts from line N. Skip first N-1 lines.",
    de: "tail -n +2 skips header. head -n -5 excludes last 5."
  }),
  (_i: number) => ({
    q: "What does `tail -f file` do?",
    o: ["Follows file (shows new lines as added)", "Follow", "Live tail", "Watch file"],
    c: 0,
    e: "tail -f keeps reading. For log files. Ctrl+C to stop.",
    de: "tail -F follows by name (handles rotation). tail -f on multiple files."
  }),
  (_i: number) => ({
    q: "What does `wc -w file` count?",
    o: ["Words", "Word count", "Words only", "Word tally"],
    c: 0,
    e: "wc -w counts words (whitespace-separated).",
    de: "wc -l lines, -w words, -c bytes, -m chars. wc -lwm for multiple."
  }),
  (_i: number) => ({
    q: "What does `wc -m` count?",
    o: ["Characters (multibyte-aware)", "Characters", "Char count", "Multibyte chars"],
    c: 0,
    e: "wc -m counts characters. -c counts bytes.",
    de: "UTF-8: char can be multiple bytes. wc -m for display width."
  }),
  (_i: number) => ({
    q: "What does `diff -u f1 f2` produce?",
    o: ["Unified diff format", "Unified format", "Patch format", "U diff"],
    c: 0,
    e: "diff -u produces unified diff. Standard for patches.",
    de: "patch < file.diff applies. diff -u is readable, 3-line context."
  }),
  (_i: number) => ({
    q: "What does `diff -r dir1 dir2` do?",
    o: ["Recursively compares directories", "Recursive diff", "Compare dirs", "Dir diff"],
    c: 0,
    e: "diff -r compares directories recursively.",
    de: "diff -rq for brief (names only). diff -r --brief."
  }),
  (_i: number) => ({
    q: "What does `comm -12 f1 f2` output?",
    o: ["Lines common to both (sorted) files", "Common lines", "Intersection", "Shared lines"],
    c: 0,
    e: "comm -12 suppresses col1 and col2, shows col3 = common.",
    de: "comm expects sorted input. -1 -2 -3 suppress columns."
  }),
  (_i: number) => ({
    q: "What does `comm -23 f1 f2` output?",
    o: ["Lines only in f1 (not in f2)", "Only in first", "F1 minus f2", "Unique to f1"],
    c: 0,
    e: "comm -23: col1 only. Lines in f1 but not f2.",
    de: "comm: col1=f1 only, col2=f2 only, col3=both. -2 -3 suppress."
  }),
  (_i: number) => ({
    q: "What does `join -t':' f1 f2` use?",
    o: ["Colon as field delimiter", "Join delimiter", "Field separator", "Join on colon"],
    c: 0,
    e: "join -t':' uses colon. Default is whitespace.",
    de: "join -1 2 -2 1 for different join fields. Files must be sorted."
  }),
  (_i: number) => ({
    q: "What does `split -l 1000 file` produce?",
    o: ["Files of 1000 lines each", "Split by lines", "1000-line chunks", "Line split"],
    c: 0,
    e: "split -l 1000 splits into 1000-line files.",
    de: "Creates xaa, xab, ... cat x* to rejoin. split -n for chunks."
  }),
  (_i: number) => ({
    q: "What does `csplit -f part file '/pattern/'` do?",
    o: ["Splits at lines matching pattern", "Split at pattern", "Context split", "Pattern split"],
    c: 0,
    e: "csplit splits at regex. -f part gives prefix part00, part01.",
    de: "csplit file '/^---/' splits at separator lines."
  }),
  (_i: number) => ({
    q: "What does `fmt -w 72 file` do?",
    o: ["Reformats to 72-char lines", "Format width", "Wrap at 72", "Line width"],
    c: 0,
    e: "fmt reformats paragraphs. -w 72 sets line width.",
    de: "fmt -u uniform spacing. For wrapping text. Not code."
  }),
  (_i: number) => ({
    q: "What does `fold -w 80 file` do?",
    o: ["Folds lines at 80 chars (no word wrap)", "Fold width", "Break at 80", "Hard wrap"],
    c: 0,
    e: "fold -w 80 breaks at 80 chars. Doesn't respect words.",
    de: "fold -s breaks at spaces when possible. Different from fmt."
  }),
  (_i: number) => ({
    q: "What does `column -t file` do?",
    o: ["Formats into aligned columns", "Column format", "Table format", "Align columns"],
    c: 0,
    e: "column -t creates table from whitespace-separated input.",
    de: "column -s',' -t for CSV. Makes columns align."
  }),
  (_i: number) => ({
    q: "What does `nl file` add?",
    o: ["Line numbers", "Number lines", "Line numbers", "Numbered output"],
    c: 0,
    e: "nl numbers lines. Skips empty lines by default.",
    de: "nl -ba numbers all. nl -v 10 starts at 10. cat -n simpler."
  }),
  (_i: number) => ({
    q: "What does `pr -2 file` do?",
    o: ["Formats into 2 columns", "Two columns", "Column layout", "Print columns"],
    c: 0,
    e: "pr -2 formats into 2 columns. For printing.",
    de: "pr -l 50 page length. pr -h 'title' header. pr -t no header."
  }),
  (_i: number) => ({
    q: "What does `tac file` output?",
    o: ["Lines in reverse order", "Reverse lines", "Backwards", "Reversed file"],
    c: 0,
    e: "tac is cat backwards. Last line first.",
    de: "tac file. rev reverses each line. tac | rev for full reverse."
  }),
  (_i: number) => ({
    q: "What does `rev file` do?",
    o: ["Reverses each line character-wise", "Reverse chars", "Line reverse", "Character reverse"],
    c: 0,
    e: "rev reverses characters in each line. hello -> olleh.",
    de: "rev per line. tac reverses line order. Different."
  }),
  (_i: number) => ({
    q: "What does `cmd 2>&1 | tee file` achieve?",
    o: ["Saves both stdout and stderr to file while displaying", "Capture both", "Stderr+stdout", "Both to file"],
    c: 0,
    e: "2>&1 merges stderr to stdout. tee saves and displays.",
    de: "cmd 2>&1 | tee log.txt. See output and save to file."
  }),
  (_i: number) => ({
    q: "What does `cmd > file 2>&1` order mean?",
    o: ["Redirect stdout first, then stderr to same", "Redirect order", "Both to file", "Stdout then stderr"],
    c: 0,
    e: "> file 2>&1: stdout to file, then stderr to where stdout goes.",
    de: "Order matters. 2>&1 > file would redirect stderr to old stdout."
  }),
  (_i: number) => ({
    q: "What does `cmd >> file 2>&1` do?",
    o: ["Appends stdout and stderr to file", "Append both", "Append", "Append stdout stderr"],
    c: 0,
    e: ">> appends. 2>&1 sends stderr to stdout (file).",
    de: "Both streams appended. No overwrite. Log accumulation."
  }),
  (_i: number) => ({
    q: "What does `cmd < file` do?",
    o: ["Redirects stdin from file", "Input from file", "Read from file", "Stdin redirect"],
    c: 0,
    e: "cmd < file: file becomes stdin for cmd.",
    de: "cat file | cmd similar. < is direct. Both work for many commands."
  }),
  (_i: number) => ({
    q: "What does `cmd << 'EOF'` create?",
    o: ["Here document (stdin from following lines)", "Heredoc", "Inline input", "Here doc"],
    c: 0,
    e: "<< 'EOF' reads until EOF line. No variable expansion with quotes.",
    de: "<< EOF expands variables. << 'EOF' literal. <<- strips leading tabs."
  }),
  (_i: number) => ({
    q: "What does `cmd <<< 'string'` do?",
    o: ["Here string (stdin from string)", "Here string", "String stdin", "Inline string"],
    c: 0,
    e: "<<< passes string as stdin. Bash/ksh feature.",
    de: "echo 'hi' | cmd similar. <<< 'hi' more direct. No newline by default."
  }),
  (_i: number) => ({
    q: "What does `less +F file` do?",
    o: ["Starts in follow mode (like tail -f)", "Follow mode", "Live view", "Less follow"],
    c: 0,
    e: "less +F follows file. Like tail -f. Ctrl+C then F to toggle.",
    de: "less +G goes to end. less +/pattern searches. + for startup cmd."
  }),
  (_i: number) => ({
    q: "What does `less -S file` do?",
    o: ["Chops long lines (no wrap)", "No wrap", "Chop lines", "Sideways scroll"],
    c: 0,
    e: "less -S truncates long lines. Arrow to scroll horizontally.",
    de: "Useful for wide output. -S = --chop-long-lines."
  }),
  (_i: number) => ({
    q: "What does `less -N` show?",
    o: ["Line numbers", "Number lines", "Line numbers", "Numbered"],
    c: 0,
    e: "less -N displays line numbers.",
    de: "Like cat -n in less. -n in some versions. / to search."
  }),
  (_i: number) => ({
    q: "What does `more` lack compared to `less`?",
    o: ["Backward scrolling", "No backward", "Forward only", "Less features"],
    c: 0,
    e: "more scrolls forward only. less can go back.",
    de: "less is more. more is older. less has search, backward, etc."
  }),
  (_i: number) => ({
    q: "What does `grep -E 'foo|bar'` match?",
    o: ["Lines containing foo OR bar", "Alternation", "Either pattern", "OR match"],
    c: 0,
    e: "grep -E extended regex. | means alternation (or).",
    de: "grep -E 'a|b' matches a or b. Escape | in basic grep."
  }),
  (_i: number) => ({
    q: "What does `grep -P` use?",
    o: ["Perl-compatible regex", "PCRE", "Perl regex", "PCRE pattern"],
    c: 0,
    e: "grep -P uses Perl regex. More features than -E.",
    de: "Not all grep have -P. grep -E is more portable. \\d, \\w, etc. in -P."
  }),
  (_i: number) => ({
    q: "What does `grep -o pattern` output?",
    o: ["Only the matching part (not full line)", "Match only", "Just match", "Only match"],
    c: 0,
    e: "grep -o prints only matched text. One per line for multiple.",
    de: "echo 'foo bar foo' | grep -o 'foo' prints foo twice."
  }),
  (_i: number) => ({
    q: "What does `grep -m 5 pattern` do?",
    o: ["Stops after 5 matches", "Max 5", "Limit 5", "First 5"],
    c: 0,
    e: "grep -m 5 stops after 5 matches. Performance for large files.",
    de: "grep -m 1 for 'any match' check. Exit 0 if found."
  }),
  (_i: number) => ({
    q: "What does `sed '2,5s/old/new/'` do?",
    o: ["Substitutes only in lines 2-5", "Range substitute", "Lines 2-5", "Limited replace"],
    c: 0,
    e: "sed '2,5s/old/new/' restricts substitution to lines 2-5.",
    de: "Address range before s. sed '10,$s/x/y/' from 10 to end."
  }),
  (_i: number) => ({
    q: "What does `sed '/start/,/end/d'` do?",
    o: ["Deletes from line matching start to line matching end", "Range delete", "Pattern range", "Delete block"],
    c: 0,
    e: "sed /start/,/end/d deletes that range. Inclusive.",
    de: "Useful for removing blocks. /^#/,/^$/d for comment blocks."
  }),
  (_i: number) => ({
    q: "What does `sed '=' file` output?",
    o: ["Line numbers followed by lines", "Number then line", "Line numbers", "Prepend numbers"],
    c: 0,
    e: "sed '=' prints line number before each line.",
    de: "sed '=' | paste - - for number and line on same line."
  }),
  (_i: number) => ({
    q: "What does `awk 'length>80'` print?",
    o: ["Lines longer than 80 characters", "Long lines", "Length filter", "Over 80 chars"],
    c: 0,
    e: "awk length is length of $0. length>80 filters long lines.",
    de: "awk 'length($1)>10' for field length. length() function."
  }),
  (_i: number) => ({
    q: "What does `awk '/pattern/{print $2}'` do?",
    o: ["Prints 2nd field of matching lines only", "Match then field", "Conditional print", "Filter and extract"],
    c: 0,
    e: "awk /pattern/ matches. {print $2} for those lines only.",
    de: "Pattern before block. awk '$3>100' for numeric filter."
  }),
  (_i: number) => ({
    q: "What does `awk 'BEGIN{FS=\":\"}'` set?",
    o: ["Field separator in BEGIN block", "FS in BEGIN", "Delimiter", "Field sep"],
    c: 0,
    e: "BEGIN runs before first line. FS = field separator.",
    de: "awk 'BEGIN{FS=\":\"} {print $1}' /etc/passwd. Same as -F."
  }),
  (_i: number) => ({
    q: "What does `awk '{print $1,$3}'` use between fields?",
    o: ["OFS (output field separator, default space)", "Space between", "Output sep", "Default space"],
    c: 0,
    e: "Comma in print uses OFS. Default OFS is space.",
    de: "awk 'BEGIN{OFS=\",\"}' for CSV output."
  }),
  (_i: number) => ({
    q: "What does `sort -h` do?",
    o: ["Human-readable sort (K, M, G)", "Human sort", "Size sort", "K M G sort"],
    c: 0,
    e: "sort -h understands 1K, 2M, 3G. Sorts by numeric value.",
    de: "sort -h for du -h output. sort -V for version numbers."
  }),
  (_i: number) => ({
    q: "What does `sort -V` do?",
    o: ["Version sort (natural order for versions)", "Version sort", "Natural version", "Ver sort"],
    c: 0,
    e: "sort -V: file1, file2, file10. Not file1, file10, file2.",
    de: "sort -V for version strings. v1.2.10 before v1.2.9? No, -V handles."
  }),
  (_i: number) => ({
    q: "What does `sort -R` do?",
    o: ["Random order (shuffle)", "Random sort", "Shuffle", "Random order"],
    c: 0,
    e: "sort -R shuffles. Random order. Not cryptographically secure.",
    de: "shuf is better for shuffle. sort -R for quick random."
  }),
  (_i: number) => ({
    q: "What does `sort -t',' -k2,2n` do?",
    o: ["Sorts by field 2 numerically (comma-delimited)", "Sort field 2", "Numeric key 2", "CSV sort"],
    c: 0,
    e: "sort -k2,2n: key is field 2 only, numeric. -t',' delimiter.",
    de: "sort -k2,3 for range. ,2n = end at 2, numeric."
  }),
  (_i: number) => ({
    q: "What does `sort -s` do?",
    o: ["Stable sort (preserves order of equal elements)", "Stable", "Stable sort", "Preserve order"],
    c: 0,
    e: "sort -s is stable. Equal keys keep original order.",
    de: "sort -k1 -s: sort by col1, stable. Useful for multi-key."
  }),
  (_i: number) => ({
    q: "What does `cut --complement -f1` do?",
    o: ["Outputs all fields except field 1", "Complement", "Exclude field 1", "All but 1"],
    c: 0,
    e: "cut --complement inverts selection. All except -f1.",
    de: "cut --complement -f2,3 excludes 2 and 3. GNU cut."
  }),
  (_i: number) => ({
    q: "What does `expand -t 4 file` do?",
    o: ["Converts tabs to 4 spaces", "Tab to space", "Expand tabs", "Tab expand"],
    c: 0,
    e: "expand converts tabs to spaces. -t 4 = 4 spaces per tab.",
    de: "unexpand does opposite. expand for fixed-width."
  }),
  (_i: number) => ({
    q: "What does `unexpand -t 4 file` do?",
    o: ["Converts spaces to tabs (where possible)", "Space to tab", "Unexpand", "Tab convert"],
    c: 0,
    e: "unexpand converts leading spaces to tabs. -t 4 for 4-space groups.",
    de: "unexpand -a for all. Saves space. expand reverses."
  }),
  (_i: number) => ({
    q: "What does `od -c file` show?",
    o: ["Characters (including special)", "Octal dump chars", "Char dump", "Character view"],
    c: 0,
    e: "od -c shows bytes as characters. \\n for newline, etc.",
    de: "od -A x -t x1 for hex. od -c for readable. xxd also."
  }),
  (_i: number) => ({
    q: "What does `hexdump -C file` show?",
    o: ["Canonical hex+ASCII dump", "Hex dump", "Hex and ASCII", "Canonical dump"],
    c: 0,
    e: "hexdump -C shows hex and ASCII. Common for binary.",
    de: "Left: offset. Middle: hex. Right: ASCII. Like xxd."
  }),
  (_i: number) => ({
    q: "What does `xxd file` produce?",
    o: ["Hex dump (default)", "Hex dump", "XXD format", "Hex view"],
    c: 0,
    e: "xxd makes hex dump. xxd -r reverses (hex to binary).",
    de: "xxd -g 1 for byte grouping. xxd -l 100 for first 100 bytes."
  }),
  (_i: number) => ({
    q: "What does `strings file` output?",
    o: ["Printable strings from binary", "Strings", "Printable", "Text from binary"],
    c: 0,
    e: "strings extracts printable sequences. Default 4+ chars.",
    de: "strings -n 10 for longer. Useful for binaries, firmware."
  }),
  (_i: number) => ({
    q: "What does `base64 file` do?",
    o: ["Encodes file to base64", "Base64 encode", "Encode", "Base64"],
    c: 0,
    e: "base64 encodes. base64 -d decodes. For binary in text.",
    de: "base64 -w 0 for no wrap. Echo and decode for transport."
  }),
  (_i: number) => ({
    q: "What does `md5sum file` output?",
    o: ["MD5 hash and filename", "MD5 hash", "Checksum", "Hash"],
    c: 0,
    e: "md5sum prints MD5 digest. sha256sum for SHA-256.",
    de: "md5sum -c to verify. Not for security, use sha256."
  }),
  (_i: number) => ({
    q: "What does `cksum file` output?",
    o: ["CRC checksum, size, filename", "CRC checksum", "Checksum", "CRC"],
    c: 0,
    e: "cksum outputs CRC32, byte count, name. Legacy.",
    de: "Not cryptographic. For integrity. sum is older."
  }),
  (_i: number) => ({
    q: "What does `sponge file` do?",
    o: ["Writes stdin to file (after reading all input)", "Soak input", "Delayed write", "Sponge"],
    c: 0,
    e: "sponge reads all, then writes. For in-place: cmd | sponge file.",
    de: "cat file | sed 's/x/y/' | sponge file. Can't do sed -i on pipe."
  }),
  (_i: number) => ({
    q: "What does `script -a file` do?",
    o: ["Appends to typescript file", "Append script", "Append session", "Add to log"],
    c: 0,
    e: "script -a appends. script overwrites by default.",
    de: "script -a session.log. exit to stop. Records terminal."
  }),
  (_i: number) => ({
    q: "What does `scriptreplay timing typescript` do?",
    o: ["Replays recorded session", "Replay session", "Playback", "Replay script"],
    c: 0,
    e: "scriptreplay plays back script output with timing.",
    de: "script -t 2> timing. Then scriptreplay timing typescript."
  }),
  (_i: number) => ({
    q: "What does `col -b` do?",
    o: ["Removes backspaces (used with man)", "Remove backspace", "Filter backspace", "Clean output"],
    c: 0,
    e: "col -b removes backspace/overstrike. man foo | col -b > file.",
    de: "Man uses overstrike. col -b makes plain text. Pipe from man."
  }),
  (_i: number) => ({
    q: "What does `colrm 1 10` do?",
    o: ["Removes columns 1-10 from each line", "Remove columns", "Delete cols", "Col remove"],
    c: 0,
    e: "colrm 1 10 removes columns 1 through 10.",
    de: "colrm 5 removes from 5 to end. cut is more flexible."
  }),
  (_i: number) => ({
    q: "What does `tsort file` do?",
    o: ["Topological sort of pairs", "Topological sort", "Order dependencies", "TSort"],
    c: 0,
    e: "tsort does topological sort. Input: pairs (a b) meaning a before b.",
    de: "For dependency order. ldd uses internally. Rarely used directly."
  }),
  (_i: number) => ({
    q: "What does `seq 1 5` output?",
    o: ["1 2 3 4 5 (one per line)", "Sequence", "Numbers 1-5", "Seq output"],
    c: 0,
    e: "seq 1 5 prints 1 through 5. seq 2 2 10 for step.",
    de: "seq 1 2 10 = 1 3 5 7 9. For loops: for i in $(seq 1 10)."
  }),
  (_i: number) => ({
    q: "What does `yes` output by default?",
    o: ["Repeated 'y' (or argument) forever", "Yes repeated", "Infinite y", "Yes loop"],
    c: 0,
    e: "yes prints 'y' forever. yes something for custom. Ctrl+C stop.",
    de: "yes | cmd for auto-answer. yes '' for infinite blank lines."
  }),
  (_i: number) => ({
    q: "What does `xargs -I {} cmd {}` do?",
    o: ["Replaces {} with each input item", "Replace placeholder", "Insert arg", "Xargs replace"],
    c: 0,
    e: "xargs -I {} replaces {} with each input. For multiple {} in cmd.",
    de: "echo a b | xargs -I {} echo item: {}. -I implies -L 1."
  }),
  (_i: number) => ({
    q: "What does `xargs -P 4` do?",
    o: ["Runs up to 4 commands in parallel", "Parallel", "4 processes", "Parallel xargs"],
    c: 0,
    e: "xargs -P 4 runs 4 instances in parallel. Speeds up.",
    de: "find . -name '*.jpg' | xargs -P 4 -I {} convert {} {}.png"
  }),
  (_i: number) => ({
    q: "What does `xargs -r` do (GNU)?",
    o: ["No run if empty input", "No run if empty", "Require input", "Skip empty"],
    c: 0,
    e: "xargs -r doesn't run if no input. Avoids cmd with no args.",
    de: "Default xargs runs once with no args. -r prevents that."
  }),
  (_i: number) => ({
    q: "What does `parallel cmd ::: a b c` do?",
    o: ["Runs cmd with a, b, c as arguments in parallel", "Parallel args", "GNU parallel", "Parallel run"],
    c: 0,
    e: "parallel runs jobs in parallel. ::: separates input sources.",
    de: "parallel echo ::: 1 2 3. More powerful than xargs -P."
  }),
  (_i: number) => ({
    q: "What does `tr -d '\\n'` do?",
    o: ["Deletes newline characters from input", "Remove newlines", "Delete newline", "Strip newlines"],
    c: 0,
    e: "tr -d removes specified characters. tr -d '\\n' joins lines.",
    de: "tr -d '[:space:]' removes all whitespace. tr only reads stdin."
  }),
  (_i: number) => ({
    q: "What does `tr -s ' '` do?",
    o: ["Squeezes repeated spaces into one", "Squeeze spaces", "Collapse spaces", "Single space"],
    c: 0,
    e: "tr -s squeezes repeated chars. tr -s ' ' collapses spaces.",
    de: "tr -s '\\n' squeezes blank lines. Useful for cleaning output."
  }),
  (_i: number) => ({
    q: "What does `tr 'a-z' 'A-Z'` do?",
    o: ["Uppercases lowercase letters", "To uppercase", "Case convert", "Upper case"],
    c: 0,
    e: "tr translates chars. a-z to A-Z uppercases.",
    de: "tr '[:lower:]' '[:upper:]' is portable. Ranges must be same length or use tr -t."
  }),
  (_i: number) => ({
    q: "What does `fold -w 80` do?",
    o: ["Wraps lines at 80 characters", "Wrap at 80", "Line wrap", "Fold width"],
    c: 0,
    e: "fold -w 80 breaks lines at 80 chars. -s breaks at spaces.",
    de: "fold -s -w 72 for email. Default 80 columns."
  }),
  (_i: number) => ({
    q: "What does `fmt -w 60` do?",
    o: ["Reformats paragraphs to ~60 chars wide", "Format width", "Paragraph format", "Wrap text"],
    c: 0,
    e: "fmt reformats text. -w 60 sets target width.",
    de: "fmt -u uniform spacing. fmt for quick text reformat."
  }),
  (_i: number) => ({
    q: "What does `split -l 100 file` do?",
    o: ["Splits file into 100-line chunks", "Split by lines", "100 lines each", "Line split"],
    c: 0,
    e: "split -l 100 creates files of 100 lines. xaa, xab, etc.",
    de: "split -l 100 -d for numeric suffix. split -b 1M for bytes."
  }),
];
