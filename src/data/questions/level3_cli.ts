// LEVEL 3: CRAB — File & Text Processing (CLI)
// 100 Beginner + 100 Intermediate + 100 Expert. All real content.

const beginner = [
  (_i: number) => ({
    q: "What does `cat file` do?",
    o: ["Outputs file contents to stdout", "Creates file", "Copies file", "Catalogs file"],
    c: 0,
    e: "cat concatenates and outputs files to stdout.",
    de: "cat file1 file2 outputs both. With one file, just displays it. Use less for large files."
  }),
  (_i: number) => ({
    q: "What does `less` allow that `cat` does not?",
    o: ["Scroll backward and forward", "Only forward scroll", "No difference", "Faster output"],
    c: 0,
    e: "less is a pager: scroll, search, navigate. cat dumps all at once.",
    de: "less file. / to search, n for next, q to quit. more is older, less capable."
  }),
  (_i: number) => ({
    q: "What does `head -5 file` show?",
    o: ["First 5 lines", "First 5 bytes", "Lines 1-5 only", "Top 5 words"],
    c: 0,
    e: "head shows the beginning. Default 10 lines. -n 5 or -5.",
    de: "head -c 100 for bytes. head -n 20 file."
  }),
  (_i: number) => ({
    q: "What does `tail -5 file` show?",
    o: ["Last 5 lines", "Last 5 bytes", "Bottom 5", "Lines from 5"],
    c: 0,
    e: "tail shows the end. tail -f follows (live updates).",
    de: "tail -f log.txt for logs. tail -n 20 or -20."
  }),
  (_i: number) => ({
    q: "What does `wc -l file` output?",
    o: ["Line count", "Word count", "Character count", "Byte count"],
    c: 0,
    e: "wc -l counts lines. wc -w words, wc -c bytes, wc -m chars.",
    de: "wc without options shows lines, words, bytes. cat file | wc -l."
  }),
  (_i: number) => ({
    q: "What does `sort file` do by default?",
    o: ["Sort lines alphabetically", "Sort numerically", "Reverse sort", "Random sort"],
    c: 0,
    e: "sort orders lines. Default: alphabetical. -n for numbers.",
    de: "sort -n for numeric. sort -r reverse. sort -u unique."
  }),
  (_i: number) => ({
    q: "What does `uniq` require to remove duplicates?",
    o: ["Sorted input (adjacent duplicates)", "Unique file", "Single column", "Small file"],
    c: 0,
    e: "uniq removes adjacent duplicates. Sort first for full dedup.",
    de: "sort file | uniq. uniq -c counts occurrences. uniq -d shows duplicates only."
  }),
  (_i: number) => ({
    q: "What does `cut -d',' -f1 file` do?",
    o: ["First column (comma-delimited)", "Deletes first column", "Cuts at comma", "Field 1 only"],
    c: 0,
    e: "cut extracts columns. -d delimiter, -f fields.",
    de: "cut -d':' -f1 /etc/passwd gets usernames. -f1,3 for multiple."
  }),
  (_i: number) => ({
    q: "What does `paste file1 file2` do?",
    o: ["Merges lines side-by-side", "Concatenates vertically", "Compares files", "Pastes clipboard"],
    c: 0,
    e: "paste joins corresponding lines. Default delimiter: tab.",
    de: "paste -d',' uses comma. Inverse of cut for combining columns."
  }),
  (_i: number) => ({
    q: "What does `tr 'a-z' 'A-Z'` do?",
    o: ["Translates lowercase to uppercase", "Transposes chars", "Replaces a-z", "Trims spaces"],
    c: 0,
    e: "tr translates or deletes characters. Reads stdin.",
    de: "tr ' ' '\\n' replaces spaces with newlines. tr -d 'x' deletes x."
  }),
  (_i: number) => ({
    q: "What does `tee file` do?",
    o: ["Writes stdin to file and stdout", "Creates pipe", "Appends to file", "Reads file"],
    c: 0,
    e: "tee copies stdin to file and stdout (T-junction).",
    de: "cmd | tee out.txt saves while displaying. tee -a appends."
  }),
  (_i: number) => ({
    q: "What does `diff file1 file2` show?",
    o: ["Line-by-line differences", "Same lines", "Merged content", "File sizes"],
    c: 0,
    e: "diff shows differences. < from file1, > from file2.",
    de: "diff -u unified format. patch applies diff output. diff -r for dirs."
  }),
  (_i: number) => ({
    q: "What does `grep 'pattern' file` do?",
    o: ["Prints lines matching pattern", "Replaces pattern", "Counts pattern", "Deletes matching lines"],
    c: 0,
    e: "grep searches for lines matching the pattern.",
    de: "grep -i case insensitive. grep -r recursive. grep -n line numbers."
  }),
  (_i: number) => ({
    q: "What does `grep -v pattern` do?",
    o: ["Inverts match (lines NOT matching)", "Verbose", "Variable", "Version"],
    c: 0,
    e: "grep -v prints lines that do NOT match.",
    de: "grep -v '^#' filters comments. Invert match."
  }),
  (_i: number) => ({
    q: "What does `egrep` support that `grep` may not?",
    o: ["Extended regex (alternation, etc.)", "Only basic regex", "Nothing different", "Echo grep"],
    c: 0,
    e: "egrep = grep -E. Extended regex: |, +, ?, (), {}.",
    de: "grep -E is equivalent. egrep 'foo|bar' matches either."
  }),
  (_i: number) => ({
    q: "What does `fgrep` do differently?",
    o: ["Fixed strings (no regex)", "Fast grep", "File grep", "Full grep"],
    c: 0,
    e: "fgrep = grep -F. Treats pattern as literal string.",
    de: "No regex metachars. Safer for user input. grep -F."
  }),
  (_i: number) => ({
    q: "What does `sed 's/old/new/' file` do?",
    o: ["Substitutes first old with new per line", "Substitutes all", "Saves to new file", "Shows diff"],
    c: 0,
    e: "sed s/old/new/ replaces first occurrence per line.",
    de: "sed 's/old/new/g' replaces all. sed -i edits in place (GNU)."
  }),
  (_i: number) => ({
    q: "What does `sed -n '10p' file` do?",
    o: ["Prints only line 10", "Prints 10 lines", "Prints pattern 10", "Prints to line 10"],
    c: 0,
    e: "sed -n '10p' prints only line 10. -n suppresses default print.",
    de: "sed -n '1,5p' lines 1-5. sed -n '10,20p' range."
  }),
  (_i: number) => ({
    q: "What does `awk '{print $1}' file` do?",
    o: ["Prints first field of each line", "Prints line 1", "Prints field 1", "Prints first word"],
    c: 0,
    e: "awk prints first field (whitespace-delimited by default).",
    de: "awk -F':' for different delimiter. $0 is whole line, $NF last field."
  }),
  (_i: number) => ({
    q: "What does `awk -F':'` set?",
    o: ["Field separator to colon", "File to read", "Format", "Flag"],
    c: 0,
    e: "awk -F':' sets field separator. awk -F',' for CSV.",
    de: "awk -F'[ :]' for multiple delimiters. FS variable."
  }),
  (_i: number) => ({
    q: "What does `cmd > file` do?",
    o: ["Redirects stdout to file (overwrite)", "Appends to file", "Reads from file", "Pipes to file"],
    c: 0,
    e: "> redirects stdout, overwriting file.",
    de: "> truncates. >> appends. 2> for stderr. 2>&1 merge."
  }),
  (_i: number) => ({
    q: "What does `cmd >> file` do?",
    o: ["Appends stdout to file", "Overwrites file", "Reads file", "Redirects stderr"],
    c: 0,
    e: ">> appends stdout to file.",
    de: "Use for logs. echo 'line' >> file. No truncation."
  }),
  (_i: number) => ({
    q: "What does `cmd < file` do?",
    o: ["Redirects file to stdin", "Reads file", "Input from file", "Loads file"],
    c: 0,
    e: "< redirects file contents to stdin.",
    de: "cmd < input.txt. Same as cat input.txt | cmd but more efficient."
  }),
  (_i: number) => ({
    q: "What does `cmd1 | cmd2` do?",
    o: ["Pipes stdout of cmd1 to stdin of cmd2", "Runs in parallel", "Runs sequentially", "Compares output"],
    c: 0,
    e: "| connects stdout of left to stdin of right.",
    de: "ls | grep txt | wc -l. Pipes enable composition."
  }),
  (_i: number) => ({
    q: "What is a here document?",
    o: ["Inline input delimited by a marker", "Document here", "Here string", "Input document"],
    c: 0,
    e: "Here doc: <<MARKER ... MARKER provides multiline stdin.",
    de: "cat << EOF\nline1\nline2\nEOF. Useful in scripts."
  }),
  (_i: number) => ({
    q: "What does `<<< \"text\"` do?",
    o: ["Here string: passes text as stdin", "Redirects text", "Echoes text", "Input text"],
    c: 0,
    e: "`<<< string` passes string as stdin (here string).",
    de: "grep foo <<< 'hello foo world'. Single line here doc."
  }),
  (_i: number) => ({
    q: "What does `grep -c pattern file` do?",
    o: ["Counts matching lines", "Shows matches", "Shows context", "Shows line numbers"],
    c: 0,
    e: "grep -c outputs only the count of matching lines.",
    de: "Suppresses line output. grep -c 'error' log.txt."
  }),
  (_i: number) => ({
    q: "What does `grep -n pattern file` do?",
    o: ["Shows line numbers with matches", "Numbers only", "No output", "New format"],
    c: 0,
    e: "grep -n prefixes each line with its line number.",
    de: "Useful for finding where matches occur."
  }),
  (_i: number) => ({
    q: "What does `grep -r pattern dir` do?",
    o: ["Searches recursively in directories", "Reverse", "Raw", "Read"],
    c: 0,
    e: "grep -r searches recursively through subdirectories.",
    de: "grep -r 'TODO' . finds in all files. Often with -l for filenames only."
  }),
  (_i: number) => ({
    q: "What does `grep -l pattern files` do?",
    o: ["Lists only filenames with matches", "Long format", "Line numbers", "Last match"],
    c: 0,
    e: "grep -l outputs only filenames, not matching lines.",
    de: "grep -rl 'pattern' . finds which files contain it."
  }),
  (_i: number) => ({
    q: "What does `sed 'd' file` do?",
    o: ["Deletes all lines (output empty)", "Deletes file", "Duplicates", "Displays"],
    c: 0,
    e: "sed 'd' deletes lines. sed '5d' deletes line 5.",
    de: "sed '/pattern/d' deletes matching lines. Default: print all."
  }),
  (_i: number) => ({
    q: "What does `sed '1,5d' file` do?",
    o: ["Deletes lines 1 through 5", "Deletes first 5", "Deletes to 5", "Deletes 1 and 5"],
    c: 0,
    e: "sed '1,5d' deletes lines 1 to 5.",
    de: "sed '$d' deletes last line. sed '2,4d' deletes 2-4."
  }),
  (_i: number) => ({
    q: "What does `awk 'NR==1' file` do?",
    o: ["Prints first line only", "Prints line 1", "Numbers line 1", "No record 1"],
    c: 0,
    e: "awk 'NR==1' prints when record number is 1 (first line).",
    de: "NR = number of records (lines). NR==10 for line 10."
  }),
  (_i: number) => ({
    q: "What does `awk '{sum+=$1} END {print sum}'` do?",
    o: ["Sums first column, prints at end", "Prints sum", "Adds column", "End sum"],
    c: 0,
    e: "awk sums $1, prints total in END block.",
    de: "BEGIN/END run once. Common for totals, averages."
  }),
  (_i: number) => ({
    q: "What does `sort -t',' -k2 file` do?",
    o: ["Sorts by second field (comma-delimited)", "Sorts by key 2", "Sorts 2 columns", "Tab sort"],
    c: 0,
    e: "sort -t',' -k2 sorts by second column (comma-separated).",
    de: "sort -t':' -k3 -n for numeric sort on field 3."
  }),
  (_i: number) => ({
    q: "What does `comm file1 file2` require?",
    o: ["Sorted input files", "Common files", "Command files", "Compact files"],
    c: 0,
    e: "comm requires sorted input. Shows lines unique to each or common.",
    de: "comm -12 shows common. comm -23 shows only in file1."
  }),
  (_i: number) => ({
    q: "What does `join file1 file2` require?",
    o: ["Sorted files on join field", "Same length", "Same format", "Joint files"],
    c: 0,
    e: "join merges on matching field. Inputs must be sorted on join field.",
    de: "join -t':' -1 1 -2 1 f1 f2. Like SQL join."
  }),
  (_i: number) => ({
    q: "What does `column -t file` do?",
    o: ["Formats into aligned columns", "Creates columns", "Tabs only", "Table format"],
    c: 0,
    e: "column -t formats input into aligned columns.",
    de: "cat data | column -t -s $'\\t'. Nice for tabular data."
  }),
  (_i: number) => ({
    q: "What does `expand file` do?",
    o: ["Converts tabs to spaces", "Expands file", "Extends lines", "Explodes file"],
    c: 0,
    e: "expand converts tabs to spaces. unexpand does the reverse.",
    de: "expand -t 4 for 4-space tabs. Useful for consistent formatting."
  }),
  (_i: number) => ({
    q: "What does `fold -w 80 file` do?",
    o: ["Wraps lines at 80 characters", "Folds at 80", "Width 80", "Wraps 80 lines"],
    c: 0,
    e: "fold wraps lines to specified width.",
    de: "fold -s breaks at spaces when possible. -w sets width."
  }),
  (_i: number) => ({
    q: "What does `fmt file` do?",
    o: ["Formats paragraphs (reflow text)", "Formats file", "Formats mode", "Formats table"],
    c: 0,
    e: "fmt reformats paragraphs to roughly equal line length.",
    de: "fmt -w 72 for 72-char width. Simple text formatter."
  }),
  (_i: number) => ({
    q: "What does `nl file` do?",
    o: ["Numbers lines", "New lines", "No lines", "Null lines"],
    c: 0,
    e: "nl numbers lines. More options than cat -n.",
    de: "nl -ba numbers all. nl -bt numbers non-empty. For formatted numbering."
  }),
  (_i: number) => ({
    q: "What does `pr file` do?",
    o: ["Formats for printing (paginate)", "Prints file", "Process file", "Preview file"],
    c: 0,
    e: "pr formats for printing: headers, columns, page breaks.",
    de: "pr -2 for 2 columns. pr -l 50 for 50 lines per page."
  }),
  (_i: number) => ({
    q: "What does `split -l 100 file` do?",
    o: ["Splits file into 100-line chunks", "Splits 100 files", "Splits at line 100", "Splits 100 ways"],
    c: 0,
    e: "split -l 100 creates files of 100 lines each.",
    de: "split -b 1M for byte size. Creates xaa, xab, ... or custom prefix."
  }),
  (_i: number) => ({
    q: "What does `csplit file /pattern/` do?",
    o: ["Splits at pattern matches", "Character split", "Context split", "Column split"],
    c: 0,
    e: "csplit splits file at lines matching pattern.",
    de: "csplit file '/^---$/' '{*}' splits at --- lines."
  }),
  (_i: number) => ({
    q: "What does `tac file` do?",
    o: ["Reverses line order (cat backward)", "Concatenates", "Tabs and cats", "Total cat"],
    c: 0,
    e: "tac outputs lines in reverse order (cat backwards).",
    de: "tac file. Useful with pipes. rev reverses characters per line."
  }),
  (_i: number) => ({
    q: "What does `rev file` do?",
    o: ["Reverses characters per line", "Reverses lines", "Revisions", "Reverts file"],
    c: 0,
    e: "rev reverses each line character by character.",
    de: "echo hello | rev gives olleh. Per-line, not whole file."
  }),
  (_i: number) => ({
    q: "What does `od -c file` show?",
    o: ["Octal dump with visible chars", "Output dump", "Octal decimal", "Only chars"],
    c: 0,
    e: "od dumps file in various formats. -c shows characters.",
    de: "od -c for chars. od -x for hex. od -A x -t x1 for hex dump."
  }),
  (_i: number) => ({
    q: "What does `hexdump -C file` show?",
    o: ["Hex and ASCII dump", "Hex only", "Dump hex", "Hex format"],
    c: 0,
    e: "hexdump -C shows canonical hex+ASCII (like xxd).",
    de: "Left: offset. Middle: hex bytes. Right: ASCII. Good for binary."
  }),
  (_i: number) => ({
    q: "What does `xxd file` show?",
    o: ["Hex dump (or create from hex)", "Extended hex", "Hex dump", "Hex data"],
    c: 0,
    e: "xxd makes hex dump. xxd -r reverses (hex to binary).",
    de: "xxd -g 1 for byte grouping. Common for binary inspection."
  }),
  (_i: number) => ({
    q: "What does `strings file` do?",
    o: ["Extracts printable strings", "Shows strings", "String search", "String file"],
    c: 0,
    e: "strings extracts printable character sequences from binary.",
    de: "strings /bin/ls. Min length 4 by default. -n for length."
  }),
  (_i: number) => ({
    q: "What does `base64 file` do?",
    o: ["Encodes to base64", "Base 64 format", "Encodes file", "64-bit encode"],
    c: 0,
    e: "base64 encodes to base64. base64 -d decodes.",
    de: "base64 < file. For binary in text (email, JSON)."
  }),
  (_i: number) => ({
    q: "What does `patch file < diff.patch` do?",
    o: ["Applies patch to file", "Creates patch", "Patches diff", "Updates file"],
    c: 0,
    e: "patch applies diff output to file(s).",
    de: "diff -u old new > patch. patch old < patch. -p1 for strip level."
  }),
  (_i: number) => ({
    q: "What does `cmp file1 file2` do?",
    o: ["Compares bytes, reports first difference", "Compares files", "Copies diff", "Checks match"],
    c: 0,
    e: "cmp compares two files byte by byte. Exits at first diff.",
    de: "cmp -l shows byte numbers. diff for text, cmp for binary."
  }),
  (_i: number) => ({
    q: "What does `md5sum file` output?",
    o: ["MD5 hash and filename", "Checksum", "Hash", "MD5 sum"],
    c: 0,
    e: "md5sum computes MD5 checksum. sha256sum for SHA-256.",
    de: "md5sum -c checks against list. For integrity verification."
  }),
  (_i: number) => ({
    q: "What does `sha256sum file` output?",
    o: ["SHA-256 hash and filename", "SHA sum", "256-bit hash", "Checksum"],
    c: 0,
    e: "sha256sum computes SHA-256. More secure than MD5.",
    de: "sha256sum -c to verify. Standard for file integrity."
  }),
  (_i: number) => ({
    q: "What does `cksum file` output?",
    o: ["CRC checksum and byte count", "Checksum", "CRC", "Sum"],
    c: 0,
    e: "cksum outputs CRC32 and byte count. POSIX standard.",
    de: "Less secure than SHA. For quick integrity check."
  }),
  (_i: number) => ({
    q: "What does `sponge file` do?",
    o: ["Reads stdin, writes to file (soaks up)", "Sponges file", "Saves output", "Buffer file"],
    c: 0,
    e: "sponge reads all stdin, then writes to file. From moreutils.",
    de: "cmd | sponge file. Allows overwriting same file: sed -i alternative."
  }),
  (_i: number) => ({
    q: "What does `tail -f log` do?",
    o: ["Follows file (live updates)", "First lines", "Format", "Full file"],
    c: 0,
    e: "tail -f keeps file open, shows new lines as appended.",
    de: "Essential for log monitoring. Ctrl+C to stop."
  }),
  (_i: number) => ({
    q: "What does `head -c 100 file` show?",
    o: ["First 100 bytes", "First 100 chars", "100 columns", "100 lines"],
    c: 0,
    e: "head -c 100 outputs first 100 bytes.",
    de: "head -c 1K for 1024 bytes. -c for bytes, -n for lines."
  }),
  (_i: number) => ({
    q: "What does `wc -c file` show?",
    o: ["Byte count", "Character count", "Column count", "Line count"],
    c: 0,
    e: "wc -c counts bytes. wc -m counts characters (Unicode).",
    de: "For ASCII, -c and -m same. UTF-8: -m can differ."
  }),
  (_i: number) => ({
    q: "What does `sort -u file` do?",
    o: ["Sorts and removes duplicates", "Unique sort", "Unsorted unique", "Sort unique"],
    c: 0,
    e: "sort -u outputs unique lines (like sort | uniq).",
    de: "sort -u is one pass. sort | uniq equivalent."
  }),
  (_i: number) => ({
    q: "What does `sort -R file` do?",
    o: ["Randomizes line order", "Reverse sort", "Recursive", "Raw sort"],
    c: 0,
    e: "sort -R shuffles lines randomly. GNU sort.",
    de: "shuf is alternative. sort -R for random order."
  }),
  (_i: number) => ({
    q: "What does `uniq -c` do?",
    o: ["Prefixes count of occurrences", "Count only", "Compact", "Count lines"],
    c: 0,
    e: "uniq -c adds count of consecutive duplicates.",
    de: "sort file | uniq -c. Shows how many times each line appeared."
  }),
  (_i: number) => ({
    q: "What does `uniq -d` do?",
    o: ["Outputs only duplicate lines", "Delete duplicates", "Double lines", "Duplicate count"],
    c: 0,
    e: "uniq -d outputs only lines that were duplicated.",
    de: "sort file | uniq -d. Find lines that appear more than once."
  }),
  (_i: number) => ({
    q: "What does `cut -c1-5 file` do?",
    o: ["Extracts characters 1-5 per line", "Cuts columns 1-5", "First 5 chars", "Characters 1 to 5"],
    c: 0,
    e: "cut -c1-5 extracts character positions 1 through 5.",
    de: "cut -c1,3,5 for specific positions. -c for chars, -f for fields."
  }),
  (_i: number) => ({
    q: "What does `tr -d 'x'` do?",
    o: ["Deletes character x from input", "Deletes x", "Trims x", "Drops x"],
    c: 0,
    e: "tr -d deletes specified characters.",
    de: "echo hello | tr -d 'l' gives heo. tr -d '\\n' removes newlines."
  }),
  (_i: number) => ({
    q: "What does `tr -s ' '` do?",
    o: ["Squeezes repeated spaces to one", "Squeeze spaces", "Single space", "Space squeeze"],
    c: 0,
    e: "tr -s squeezes repeated characters to single.",
    de: "echo 'a    b' | tr -s ' ' gives 'a b'. -s = squeeze."
  }),
  (_i: number) => ({
    q: "What does `sed -n '2,4p' file` do?",
    o: ["Prints lines 2, 3, 4", "Prints 2 to 4", "Prints lines 2-4", "Prints 4 lines from 2"],
    c: 0,
    e: "sed -n '2,4p' prints lines 2 through 4.",
    de: "Range in sed. sed -n '10,$p' from 10 to end."
  }),
  (_i: number) => ({
    q: "What does `awk 'length>80' file` do?",
    o: ["Prints lines longer than 80 chars", "Prints length", "Prints 80", "Length 80"],
    c: 0,
    e: "awk 'length>80' prints lines where length exceeds 80.",
    de: "length is length($0). awk condition without action prints whole line."
  }),
  (_i: number) => ({
    q: "What does `grep -E 'foo|bar'` match?",
    o: ["Lines with foo OR bar", "Lines with both", "Extended regex", "Either pattern"],
    c: 0,
    e: "grep -E allows | for alternation (OR).",
    de: "grep -E 'a|b' matches a or b. Basic grep needs \\|."
  }),
  (_i: number) => ({
    q: "What does `grep -w word` do?",
    o: ["Matches whole word only", "Word match", "Wide match", "Word boundary"],
    c: 0,
    e: "grep -w matches whole words (word boundaries).",
    de: "grep -w 'cat' won't match 'category'. Prevents partial matches."
  }),
  (_i: number) => ({
    q: "What does `grep -x line file` do?",
    o: ["Matches whole line only", "Exact line", "Line match", "Full line"],
    c: 0,
    e: "grep -x matches only when entire line equals pattern.",
    de: "grep -x 'hello' matches line that is exactly 'hello'."
  }),
  (_i: number) => ({
    q: "What does `grep -A 2 pattern` do?",
    o: ["Shows 2 lines after match", "After context", "Append 2", "Add 2 lines"],
    c: 0,
    e: "grep -A 2 shows 2 lines of context after each match.",
    de: "-B before, -A after, -C both. grep -C 2 for 2 lines each side."
  }),
  (_i: number) => ({
    q: "What does `grep -B 2 pattern` do?",
    o: ["Shows 2 lines before match", "Before context", "Back 2", "Before 2"],
    c: 0,
    e: "grep -B 2 shows 2 lines before each match.",
    de: "Context options. -A, -B, -C. Useful for log analysis."
  }),
  (_i: number) => ({
    q: "What does `sed 's/old/new/g'` do?",
    o: ["Replaces all occurrences per line", "Global replace", "General replace", "Replace all"],
    c: 0,
    e: "s/old/new/g replaces every occurrence on each line.",
    de: "Without g, only first per line. g = global."
  }),
  (_i: number) => ({
    q: "What does `sed '3s/old/new/'` do?",
    o: ["Replaces only on line 3", "Substitutes line 3", "Third line only", "Line 3 replace"],
    c: 0,
    e: "sed '3s/old/new/' applies substitution only to line 3.",
    de: "Address + command. sed '2,5s/x/y/' for lines 2-5."
  }),
  (_i: number) => ({
    q: "What does `awk 'NF>5' file` do?",
    o: ["Prints lines with more than 5 fields", "Number of fields", "Fields > 5", "NF greater 5"],
    c: 0,
    e: "awk 'NF>5' prints lines with more than 5 fields.",
    de: "NF = number of fields. NF==0 for empty lines."
  }),
  (_i: number) => ({
    q: "What does `awk 'END {print NR}'` do?",
    o: ["Prints total line count", "Prints last line", "Prints NR", "End line count"],
    c: 0,
    e: "awk 'END {print NR}' prints total number of lines.",
    de: "NR in END block = total records. Like wc -l."
  }),
  (_i: number) => ({
    q: "What does `sort -k2 -n` do?",
    o: ["Sorts by field 2 numerically", "Key 2 numeric", "Second column numeric", "Numeric sort key 2"],
    c: 0,
    e: "sort -k2 -n sorts by second field as numbers.",
    de: "sort -t',' -k2 -n for CSV. -n critical for 2 before 10."
  }),
  (_i: number) => ({
    q: "What does `sort -k1,1 -u` do?",
    o: ["Unique by first field only", "Unique key 1", "First field unique", "Unique on column 1"],
    c: 0,
    e: "sort -k1,1 -u keeps first occurrence when first field is duplicate.",
    de: "Key range 1,1 = only field 1. -u keeps one per unique key."
  }),
  (_i: number) => ({
    q: "What does `paste -s file` do?",
    o: ["Merges all lines into one (serial)", "Serial paste", "Single line", "Paste serial"],
    c: 0,
    e: "paste -s merges lines of one file into single line(s).",
    de: "paste -s -d',' joins lines with comma. One line per 'paragraph'."
  }),
  (_i: number) => ({
    q: "What does `diff -q file1 file2` do?",
    o: ["Reports only if files differ", "Quick diff", "Quiet diff", "Only report difference"],
    c: 0,
    e: "diff -q only reports whether files differ, not how.",
    de: "Exit 0 if same, 1 if different. Useful in scripts."
  }),
  (_i: number) => ({
    q: "What does `diff -r dir1 dir2` do?",
    o: ["Recursively compares directories", "Recursive diff", "Compare dirs", "Dir diff"],
    c: 0,
    e: "diff -r compares directories recursively.",
    de: "Shows file-by-file differences. diff -rq for brief."
  }),
  (_i: number) => ({
    q: "What does `comm -12 file1 file2` show?",
    o: ["Lines common to both files", "Common lines", "Intersection", "Shared lines"],
    c: 0,
    e: "comm -12 suppresses unique to file1 and file2, shows common.",
    de: "comm requires sorted input. -1 -2 -3 suppress columns 1, 2, 3."
  }),
  (_i: number) => ({
    q: "What does `join -1 1 -2 1 f1 f2` do?",
    o: ["Joins on field 1 of both files", "Join field 1", "Join on column 1", "Merge on field 1"],
    c: 0,
    e: "join -1 1 -2 1 joins on first field of each file.",
    de: "Files must be sorted on join field. -t for delimiter."
  }),
  (_i: number) => ({
    q: "What does `cat file1 file2 > out` do?",
    o: ["Concatenates file1 and file2 into out", "Copies both", "Combines files", "Cats to out"],
    c: 0,
    e: "cat file1 file2 > out writes both files to out.",
    de: "Order matters. file1 first, then file2 in output."
  }),
  (_i: number) => ({
    q: "What does `script` do?",
    o: ["Records terminal session to file", "Runs script", "Script file", "Records session"],
    c: 0,
    e: "script records your session. script -a appends. exit to stop.",
    de: "Creates typescript file. Useful for logging terminal work."
  }),
  (_i: number) => ({
    q: "What does `tr -c 'a-z' '\\n'` do?",
    o: ["Replaces non-letters with newlines (tokenize)", "Complement replace", "Tokenize", "Split non-alpha"],
    c: 0,
    e: "-c complements the set. Non-[a-z] becomes newline.",
    de: "Splits on non-letters. Useful for word extraction."
  }),
  (_i: number) => ({
    q: "What does `comm -12 file1 file2` show?",
    o: ["Lines in both files (intersection)", "Common lines", "Intersection", "In both"],
    c: 0,
    e: "comm -12 suppresses col1 and col2, keeps col3 (common).",
    de: "comm requires sorted input. -1 -2 -3 suppress columns."
  }),
  (_i: number) => ({
    q: "What does `head -c 100 file` output?",
    o: ["First 100 bytes", "First 100 chars", "100 bytes", "Byte limit"],
    c: 0,
    e: "-c limits by bytes. head -c 1K for 1024 bytes.",
    de: "head -n 10 for lines. -c for binary or byte count."
  }),
  (_i: number) => ({
    q: "What does `tail -c +100 file` output?",
    o: ["From byte 100 to end (skip first 99)", "Skip first 99 bytes", "From byte 100", "Offset 100"],
    c: 0,
    e: "tail -c +N starts from byte N. Skips first N-1.",
    de: "tail -n +5 from line 5. + means start from."
  }),
  (_i: number) => ({
    q: "What does `od -c file` show?",
    o: ["Octal dump with visible chars", "Char dump", "Octal and chars", "Character view"],
    c: 0,
    e: "od -c shows bytes as chars. \\n for newline.",
    de: "od -A x -t x1 for hex. od for binary inspection."
  }),
  (_i: number) => ({
    q: "What does `strings file` output?",
    o: ["Printable strings from binary", "Extract strings", "Printable only", "String extract"],
    c: 0,
    e: "strings finds 4+ char printable sequences. For binaries.",
    de: "strings /bin/ls. -n for min length. Forensics."
  }),
  (_i: number) => ({
    q: "What does `base64 file` do?",
    o: ["Encodes file to base64", "Base64 encode", "Encode binary", "Base64 output"],
    c: 0,
    e: "base64 encodes. base64 -d decodes.",
    de: "For binary in text. Email attachments. base64 -w 0 no wrap."
  }),
  (_i: number) => ({
    q: "What does `md5sum file` output?",
    o: ["MD5 hash and filename", "MD5 checksum", "Hash of file", "MD5 digest"],
    c: 0,
    e: "md5sum prints 32-char hash. For integrity check.",
    de: "md5sum -c to verify. sha256sum for stronger."
  }),
  (_i: number) => ({
    q: "What does `shasum -a 256 file` do?",
    o: ["SHA-256 hash of file", "SHA256", "SHA-256 checksum", "256-bit hash"],
    c: 0,
    e: "shasum -a 256 uses SHA-256. -a 1 for SHA-1.",
    de: "sha256sum on Linux. shasum on macOS. Verify downloads."
  }),
  (_i: number) => ({
    q: "What does `cksum file` output?",
    o: ["CRC checksum and byte count", "CRC checksum", "Checksum", "CRC32"],
    c: 0,
    e: "cksum prints CRC, bytes, filename. POSIX standard.",
    de: "Older than md5/sha. Still used for compatibility."
  }),
  (_i: number) => ({
    q: "What does `expand -t 4 file` do?",
    o: ["Converts tabs to 4 spaces", "Tab to spaces", "Expand tabs", "Tab width 4"],
    c: 0,
    e: "expand converts tabs to spaces. -t 4 sets tab stop.",
    de: "unexpand does reverse. -t 4,8,12 for multiple stops."
  }),
  (_i: number) => ({
    q: "What does `unexpand -t 4 file` do?",
    o: ["Converts spaces to tabs", "Spaces to tabs", "Unexpand", "Tab convert"],
    c: 0,
    e: "unexpand converts leading spaces to tabs. -t 4 sets tab width.",
    de: "unexpand -t 4. Opposite of expand. For consistent indentation."
  }),
];

import { level3Intermediate } from './level3_intermediate_cli';
import { level3Expert } from './level3_expert_cli';

export const level3Patterns = beginner;
export const level3IntermediateA = level3Intermediate.slice(0, 50);
export const level3IntermediateB = level3Intermediate.slice(50, 100);
export const level3ExpertA = level3Expert.slice(0, 50);
export const level3ExpertB = level3Expert.slice(50, 100);
