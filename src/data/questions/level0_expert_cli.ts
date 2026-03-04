// LEVEL 0 EXPERT — Still beginner-level; slightly deeper concepts (100 questions)
// Introduces quoting, variables, comments, and simple "which command" / "what happens" scenarios.

export const level0Expert = [
  (_i: number) => ({
    q: "What is a 'comment' in a script or config file?",
    o: ["Text that is ignored by the computer (explains the code to humans)", "A command", "The output", "An error"],
    c: 0,
    e: "A comment is text that the shell or program ignores. It is for humans to read.",
    de: "In shell scripts, a line starting with # is usually a comment. Comments explain what the script does."
  }),
  (_i: number) => ({
    q: "What does the symbol # often mean at the start of a line in a script?",
    o: ["The rest of the line is a comment (ignored)", "Run as root", "A variable", "A command"],
    c: 0,
    e: "In many scripts, # starts a comment. Everything after # on that line is ignored.",
    de: "So you can write # This is a comment. The shell skips it. Exception: #! on the very first line is the shebang."
  }),
  (_i: number) => ({
    q: "What is a 'shebang'?",
    o: ["The first line of a script (e.g. #!/bin/bash) that says which program runs it", "A comment", "A variable", "A command"],
    c: 0,
    e: "The shebang is the first line #!... that tells the system which interpreter (e.g. bash) should run the script.",
    de: "Example: #!/bin/bash. When you run the script, the system uses that program. You will see this in later levels."
  }),
  (_i: number) => ({
    q: "What does $ in front of a name often mean in the terminal?",
    o: ["The value of a variable (e.g. $HOME is the content of HOME)", "A dollar sign to type", "The prompt only", "An error"],
    c: 0,
    e: "$name means 'the value of the variable name.' So $HOME is your home directory path.",
    de: "You type $HOME, and the shell replaces it with the actual path before running the command. That is variable expansion."
  }),
  (_i: number) => ({
    q: "What is 'quoting' in the terminal?",
    o: ["Using quotes to group characters so the shell does not split or interpret them in the usual way", "Typing a quote key only", "A comment", "An error"],
    c: 0,
    e: "Quoting means putting text in single or double quotes so spaces and special characters are preserved.",
    de: "Without quotes, the shell splits by spaces. With quotes, 'my file.txt' is one argument. You will learn ' and \" in Level 1."
  }),
  (_i: number) => ({
    q: "What is 'escaping' a character?",
    o: ["Putting a backslash before it so the shell treats it literally (e.g. \\*)", "Deleting it", "Quoting the whole line", "Ignoring it"],
    c: 0,
    e: "Escaping is putting \\ before a character so it is not interpreted specially. \\* is a literal asterisk.",
    de: "Some characters are special (*, $, spaces). \\ before them means 'this one is normal.' You will see this in Level 1."
  }),
  (_i: number) => ({
    q: "What is a 'literal' character or string?",
    o: ["Exactly what you typed—no special meaning (e.g. * as a star, not 'any')", "A variable value", "A command", "The output"],
    c: 0,
    e: "Literal means 'as written'—no interpretation. So a literal * is just the character *, not a wildcard.",
    de: "Quotes and escaping make things literal. Important when you have filenames with spaces or symbols like *."
  }),
  (_i: number) => ({
    q: "What does 'to expand' mean for the shell?",
    o: ["To replace something (e.g. $VAR or *) with its value or list of matches before running the command", "To grow a file", "To open a folder", "To run a command"],
    c: 0,
    e: "The shell expands variables ($VAR) and wildcards (*) into actual values or filenames before running the command.",
    de: "So when you type echo $HOME, the shell expands $HOME to the path first, then runs echo with that path. Expansion happens before the command runs."
  }),
  (_i: number) => ({
    q: "What is a 'special character' in the shell?",
    o: ["A character the shell treats specially (e.g. *, $, space, |) unless quoted or escaped", "A rare letter", "A number", "A space only"],
    c: 0,
    e: "Special characters have meaning: * matches files, $ starts variables, space separates words, etc.",
    de: "To use them as normal characters, you quote or escape them. You will learn the main ones in Level 1."
  }),
  (_i: number) => ({
    q: "What is 'standard input' (stdin)?",
    o: ["Where a command normally reads its input from (usually the keyboard or a pipe)", "A file only", "The output", "The prompt"],
    c: 0,
    e: "stdin is the default source of input—often what you type, or what is piped from the previous command.",
    de: "When you run a command that reads input, it usually reads from stdin. You can redirect a file to stdin with <."
  }),
  (_i: number) => ({
    q: "What does 'redirect' mean in one sentence?",
    o: ["Sending input or output to or from a file (or command) instead of the default keyboard/screen", "To delete output", "To run again", "To change directory"],
    c: 0,
    e: "Redirect means changing where input comes from or where output goes—e.g. to a file.",
    de: "> sends output to a file. < reads input from a file. You will learn >, >>, and < in Level 1."
  }),
  (_i: number) => ({
    q: "What is a 'pipe' used for?",
    o: ["Connecting the output of one command to the input of the next (e.g. cmd1 | cmd2)", "Saving to a file", "Running in background", "Changing directory"],
    c: 0,
    e: "A pipe (|) sends the output of the left command as the input of the right command.",
    de: "Example: ls | grep txt. The list from ls becomes the input of grep. You will use pipes in Level 1 and beyond."
  }),
  (_i: number) => ({
    q: "What does 'to chain' commands mean?",
    o: ["To run several commands in sequence (e.g. with ; or &&)", "To pipe them only", "To run in background", "To merge output"],
    c: 0,
    e: "Chaining means running one command after another—e.g. cmd1; cmd2 runs both in order.",
    de: "; runs the second after the first regardless. && runs the second only if the first succeeded. You will see this in Level 1."
  }),
  (_i: number) => ({
    q: "What is a 'return value' or 'exit status'?",
    o: ["A number the command leaves when it finishes (0 = success, non-zero = failure)", "The last line of output", "The command name", "The prompt"],
    c: 0,
    e: "The return value (exit status) is a small number: 0 usually means success; non-zero means an error or failure.",
    de: "Scripts use this to decide what to do next. You can check it in the shell (e.g. $? in bash). You will learn this in Level 1."
  }),
  (_i: number) => ({
    q: "What does 'success' mean for a command's exit code?",
    o: ["Exit code 0 (by convention)", "Any output", "No output", "Exit code 1"],
    c: 0,
    e: "By convention, exit code 0 means the command succeeded. Any other number usually means some kind of failure.",
    de: "So 0 = success is a universal convention. Scripts and the shell rely on it to know if a command worked."
  }),
  (_i: number) => ({
    q: "What does 'failure' mean for a command's exit code?",
    o: ["A non-zero exit code (e.g. 1, 2)—something went wrong", "Exit code 0", "No output", "Any output"],
    c: 0,
    e: "A non-zero exit code (1, 2, etc.) usually means the command failed or could not complete.",
    de: "Different numbers can mean different errors. Checking the exit code (e.g. $?) lets scripts react to failures."
  }),
  (_i: number) => ({
    q: "What is a 'subdirectory'?",
    o: ["A directory that is inside another directory", "The root", "The home directory", "A file"],
    c: 0,
    e: "A subdirectory is a folder inside another folder. Same as subfolder.",
    de: "Path docs/2024 has 2024 as a subdirectory of docs. You navigate into subdirectories with cd."
  }),
  (_i: number) => ({
    q: "What does 'parent directory' mean?",
    o: ["The directory that contains the current one (one level up)", "The root", "The home directory", "The current directory"],
    c: 0,
    e: "The parent directory is the one that contains your current directory. You go up with cd ..",
    de: "If you are in /home/user/docs, the parent is /home/user. .. always means parent in paths."
  }),
  (_i: number) => ({
    q: "What is the 'home directory' used for?",
    o: ["Your personal files and often the default starting folder when you open a terminal", "System files only", "Temporary files only", "Programs only"],
    c: 0,
    e: "The home directory is your personal space—documents, settings, and often where the terminal starts.",
    de: "cd with no arguments usually goes to your home. ~ is shorthand for it. Your config files (e.g. .bashrc) often live there."
  }),
  (_i: number) => ({
    q: "What does 'current working directory' mean?",
    o: ["The directory the shell is 'in' right now—default for many commands", "The root", "The home directory", "The desktop"],
    c: 0,
    e: "The current working directory is where you are. Commands like ls use it when you do not give a path.",
    de: "pwd shows it. cd changes it. Relative paths are relative to the current working directory."
  }),
  (_i: number) => ({
    q: "What is a 'command-line argument'?",
    o: ["Extra text you pass to the command after its name (e.g. a filename or option)", "The command name", "The output", "The prompt"],
    c: 0,
    e: "Arguments are the words you type after the command name. They tell the command what to work on.",
    de: "In cp file.txt backup.txt, file.txt and backup.txt are arguments. Options like -l are also a kind of argument."
  }),
  (_i: number) => ({
    q: "What is an 'option' or 'flag'?",
    o: ["A modifier that changes how a command behaves (often -x or --long-name)", "The command name", "A file", "The output"],
    c: 0,
    e: "An option (flag) is something like -l or --all that changes the command's behavior.",
    de: "ls -l lists in long format. The -l is an option. Many commands have several options; see man command to list them."
  }),
  (_i: number) => ({
    q: "What does 'long format' mean for a listing?",
    o: ["One line per file with details (permissions, owner, size, date)", "Only filenames", "Only directories", "Only sizes"],
    c: 0,
    e: "Long format shows one line per file with extra info—permissions, owner, size, date—not just the name.",
    de: "ls -l gives long format. You will use it in Level 1 to see permissions and sizes."
  }),
  (_i: number) => ({
    q: "What is 'recursive' in the context of commands?",
    o: ["The command works on a directory and everything inside it (and inside those, etc.)", "Only the top level", "Only files", "Only one file"],
    c: 0,
    e: "Recursive means 'include subdirectories and their contents'—going down the whole tree.",
    de: "Example: rm -r dir removes dir and everything in it. cp -r copies a folder and all its contents. The -r often means recursive."
  }),
  (_i: number) => ({
    q: "What does 'to create' a directory mean?",
    o: ["To make a new folder (e.g. with mkdir)", "To open it", "To list it", "To delete it"],
    c: 0,
    e: "To create a directory is to make a new empty folder. The command is usually mkdir.",
    de: "mkdir myfolder creates myfolder. You can then cd into it and create files or more directories inside."
  }),
  (_i: number) => ({
    q: "What does 'to remove' a file or directory mean?",
    o: ["To delete it (e.g. with rm or rmdir)", "To move it", "To rename it", "To hide it"],
    c: 0,
    e: "To remove is to delete. rm removes files; rmdir removes empty directories; rm -r removes directories and contents.",
    de: "Removal is usually permanent. There is often no trash in the terminal. Be careful with rm -r."
  }),
  (_i: number) => ({
    q: "What is an 'empty directory'?",
    o: ["A directory with no files and no subdirectories inside it", "A directory that does not exist", "A hidden directory", "The root"],
    c: 0,
    e: "An empty directory has nothing inside—no files, no subfolders.",
    de: "rmdir only removes empty directories. To remove a non-empty one you need rm -r (recursive)."
  }),
  (_i: number) => ({
    q: "What does 'to copy' mean in the terminal?",
    o: ["To duplicate a file or directory to another name or location (e.g. with cp)", "To move", "To delete", "To open"],
    c: 0,
    e: "To copy is to make a duplicate. cp file.txt backup.txt creates backup.txt with the same content.",
    de: "cp is the command. For directories you need cp -r. The original stays; you have two copies."
  }),
  (_i: number) => ({
    q: "What does 'to move' mean in the terminal?",
    o: ["To change a file's location or name (e.g. with mv); the old location no longer has it", "To copy", "To delete only", "To open"],
    c: 0,
    e: "To move is to put the file somewhere else (or give it a new name). The file is no longer in the old place.",
    de: "mv does both move and rename. mv old.txt new.txt renames. mv file.txt otherdir/ moves. One command, two uses."
  }),
  (_i: number) => ({
    q: "What does 'to rename' mean?",
    o: ["To change the name of a file or directory (often with mv)", "To move to another folder", "To copy", "To delete"],
    c: 0,
    e: "To rename is to change the name. On many systems, mv oldname newname renames when both are in the same directory.",
    de: "mv report.txt report_2024.txt renames. The file stays in the same folder; only the name changes."
  }),
  (_i: number) => ({
    q: "What is 'concatenate' in simple terms?",
    o: ["To join things in sequence (e.g. show one file after another)", "To delete", "To copy", "To move"],
    c: 0,
    e: "Concatenate means to put one thing after another. The cat command was originally for concatenating files.",
    de: "cat file1 file2 outputs file1 then file2. With one file, cat just displays it. Hence 'cat' for viewing file contents."
  }),
  (_i: number) => ({
    q: "What does 'to display' a file mean?",
    o: ["To print its contents to the terminal (e.g. with cat)", "To open it in an editor", "To list its name only", "To run it"],
    c: 0,
    e: "To display is to show the file's contents in the terminal—usually with cat or similar.",
    de: "cat filename prints the whole file. For long files you might use less or more to scroll. You will learn these in Level 1."
  }),
  (_i: number) => ({
    q: "What is 'overwrite' in the context of redirecting output?",
    o: ["Replacing the file's contents with the new output (e.g. > file truncates then writes)", "Adding to the end", "Reading the file", "Deleting the file"],
    c: 0,
    e: "Overwrite means replacing. Using > file sends output to the file and replaces whatever was there.",
    de: "> overwrites. >> appends. So the first time you use > you lose the old content. Be careful with important files."
  }),
  (_i: number) => ({
    q: "What is 'append' in the context of output?",
    o: ["Adding new output to the end of the file without removing the old (e.g. >>)", "Overwriting", "Reading", "Deleting"],
    c: 0,
    e: "Append means add to the end. >> sends output to the file but keeps the existing content and adds after it.",
    de: "Useful for logs: each run adds new lines. echo 'new line' >> log.txt adds that line to log.txt without removing previous lines."
  }),
  (_i: number) => ({
    q: "What is a 'stream' in the context of input/output?",
    o: ["A flow of data (e.g. stdin, stdout, stderr)—input or output as a sequence", "A river", "A file only", "A command"],
    c: 0,
    e: "A stream is a flow of data—characters or bytes in order. stdin, stdout, and stderr are streams.",
    de: "Commands read from streams and write to streams. Pipes and redirects connect streams to files or other commands."
  }),
  (_i: number) => ({
    q: "What does 'to merge' streams mean?",
    o: ["To combine two streams into one (e.g. stderr into stdout with 2>&1)", "To delete one", "To run two commands", "To append"],
    c: 0,
    e: "To merge is to combine. For example, 2>&1 sends stderr into stdout so both go to the same place.",
    de: "Useful when you want all output (including errors) in one file or one pipe. You will see 2>&1 in later levels."
  }),
  (_i: number) => ({
    q: "What is a 'file descriptor' in simple terms?",
    o: ["A number the system uses to refer to an open stream (0=stdin, 1=stdout, 2=stderr)", "A filename", "A path", "A command"],
    c: 0,
    e: "File descriptors are numbers: 0 is stdin, 1 is stdout, 2 is stderr. Redirects use them (e.g. 2> for stderr).",
    de: "When you see 2>&1 or 2>errors.txt, the 2 means stderr. You will learn redirects in Level 1 and beyond."
  }),
  (_i: number) => ({
    q: "What does 'to run' a script mean?",
    o: ["To execute the script file so the commands inside it run one after another", "To open it in an editor", "To copy it", "To delete it"],
    c: 0,
    e: "To run a script is to execute it—the shell reads the file and runs each command in order.",
    de: "You run it by typing its path (e.g. ./myscript.sh) or bash myscript.sh. The file usually needs execute permission."
  }),
  (_i: number) => ({
    q: "What is an 'interpreter'?",
    o: ["A program that reads and runs a script (e.g. bash for shell scripts)", "A translator", "A compiler only", "A text editor"],
    c: 0,
    e: "An interpreter reads the script and runs it step by step. Bash is an interpreter for shell scripts.",
    de: "The shebang (#!/bin/bash) tells the system which interpreter to use. The interpreter runs each line of the script."
  }),
  (_i: number) => ({
    q: "What is a 'script file'?",
    o: ["A text file that contains commands for the shell (or another interpreter) to run", "A binary program", "A config file only", "A log file"],
    c: 0,
    e: "A script file is a text file full of commands. When you run it, the interpreter executes those commands.",
    de: "Shell scripts often end in .sh but don't have to. The content is what matters. Make it executable with chmod +x."
  }),
  (_i: number) => ({
    q: "What does 'executable' mean for a script?",
    o: ["The file has permission to be run as a program (e.g. chmod +x)", "It can be read", "It is a program", "It is large"],
    c: 0,
    e: "Executable means the system allows you to run the file. You set this with chmod +x script.sh.",
    de: "Without execute permission, you can still run it with bash script.sh. With execute permission, you can run ./script.sh."
  }),
  (_i: number) => ({
    q: "What is a 'binary' in the context of programs?",
    o: ["A compiled program (not a text script)—machine code the system runs directly", "A file with two parts", "A backup", "A script"],
    c: 0,
    e: "A binary is a program in machine code—not human-readable text. Commands like ls are often binaries.",
    de: "Scripts are text; binaries are compiled. When you run ls, you are running a binary. When you run ./myscript.sh, you run a script (via an interpreter)."
  }),
  (_i: number) => ({
    q: "What does 'to invoke' a command mean?",
    o: ["To run or call it (e.g. you invoke ls by typing ls and pressing Enter)", "To delete it", "To edit it", "To copy it"],
    c: 0,
    e: "To invoke means to run or call. When you type a command and press Enter, you invoke that command.",
    de: "The shell finds the program (using PATH), runs it, and waits for it to finish. That is invoking the command."
  }),
  (_i: number) => ({
    q: "What is the 'prompt' for?",
    o: ["To show that the shell is ready and where you should type the next command", "To run a command", "To show output", "To show errors only"],
    c: 0,
    e: "The prompt indicates 'ready for input.' You type your command after it and press Enter.",
    de: "The prompt can show user, hostname, current directory, etc. Customizing it is possible in your shell config."
  }),
  (_i: number) => ({
    q: "What does 'to customize' mean?",
    o: ["To change settings or appearance to your preference (e.g. prompt, aliases)", "To delete", "To run", "To copy"],
    c: 0,
    e: "To customize is to set things up the way you like—e.g. prompt style, shortcuts, default options.",
    de: "You customize the shell by editing config files like .bashrc. You can set variables, aliases, and prompt format."
  }),
  (_i: number) => ({
    q: "What is an 'alias'?",
    o: ["A short name you define for a longer command (e.g. ll for ls -l)", "A path", "A variable", "A file"],
    c: 0,
    e: "An alias is a shortcut: you type a short name and the shell replaces it with a longer command.",
    de: "Example: alias ll='ls -l'. Then typing ll runs ls -l. You define aliases in your shell config (.bashrc, .zshrc)."
  }),
  (_i: number) => ({
    q: "What is a 'config file'?",
    o: ["A file that holds settings for a program (read when the program starts)", "A script", "A log", "A binary"],
    c: 0,
    e: "A config file stores options and settings. The program reads it at startup to know how to behave.",
    de: "Shell config: .bashrc, .zshrc. Many programs use dotfiles in your home directory. Edit with a text editor."
  }),
  (_i: number) => ({
    q: "What does 'to load' or 'to source' a file mean (in the shell)?",
    o: ["To run the file's commands in the current shell (e.g. . script or source script)", "To open it in an editor", "To copy it", "To delete it"],
    c: 0,
    e: "To source (or load) is to run the file in the current shell—so variables and aliases defined there apply to your session.",
    de: "After editing .bashrc you can run source ~/.bashrc to apply changes without opening a new terminal. . file is the same as source file."
  }),
  (_i: number) => ({
    q: "What is a 'session'?",
    o: ["One continuous period of using the terminal (from open to close/exit)", "A single command", "A login", "A file"],
    c: 0,
    e: "A session is from when you open the terminal until you close it or type exit. Your cwd and variables persist in that session.",
    de: "Closing the window ends the session. New terminal = new session. Sourcing a config file updates the current session."
  }),
  (_i: number) => ({
    q: "What does 'to persist' mean?",
    o: ["To last across sessions or reboots (e.g. saving settings in a config file)", "To run once", "To disappear", "To print"],
    c: 0,
    e: "To persist means to stay—e.g. variables in .bashrc persist because the file is read each time you start a shell.",
    de: "Things you type only in the terminal are lost when you close it. Things you put in config files persist for future sessions."
  }),
  (_i: number) => ({
    q: "What is 'globbing'?",
    o: ["The shell expanding wildcards (*, ?) into matching filenames before running the command", "A type of file", "A command", "An error"],
    c: 0,
    e: "Globbing is when the shell replaces *.txt with the list of files whose names match that pattern.",
    de: "You type ls *.txt; the shell finds all .txt files and passes them to ls. That is globbing. You will learn patterns in Level 1."
  }),
  (_i: number) => ({
    q: "What does the wildcard * typically match?",
    o: ["Any string of characters (including nothing) in a filename", "A single character only", "Only digits", "Only letters"],
    c: 0,
    e: "In globbing, * matches any sequence of characters. So *.txt matches any name ending in .txt.",
    de: "file* matches file, file1, file_backup, etc. ? usually matches exactly one character. You will use these in Level 1."
  }),
  (_i: number) => ({
    q: "What does the wildcard ? typically match?",
    o: ["Exactly one character in a filename", "Any string", "Zero or one character", "Only digits"],
    c: 0,
    e: "? matches exactly one character. So file?.txt matches file1.txt, fileA.txt, but not file10.txt (two characters).",
    de: "Use * for 'any string' and ? for 'one character.' Combined with ls and other commands for flexible matching."
  }),
  (_i: number) => ({
    q: "What is a 'match' in globbing?",
    o: ["A file (or name) that fits the pattern (e.g. report.txt matches *.txt)", "An error", "The command", "The output"],
    c: 0,
    e: "A match is a filename that fits the pattern. ls *.txt lists all matches in the current directory.",
    de: "If nothing matches, the shell might pass the literal * to the command (depending on settings). You will learn nullglob and failglob later."
  }),
  (_i: number) => ({
    q: "What does 'literal' mean when we say 'literal *'?",
    o: ["The actual character * with no special meaning (not a wildcard)", "A variable", "A comment", "An error"],
    c: 0,
    e: "Literal * means the asterisk character itself—not 'any string.' You get it by quoting: '*' or \\*.",
    de: "If no files match *.txt, the shell might leave *.txt as is (literal) and pass it to the command, which can cause confusion. Quoting prevents expansion."
  }),
  (_i: number) => ({
    q: "What is 'single quoting' (')?",
    o: ["Quotes that prevent all expansion—everything inside is literal", "Quotes that allow variables", "A comment", "An error"],
    c: 0,
    e: "Inside single quotes ', everything is literal. No $VAR expansion, no globbing. '$HOME' prints $HOME, not the path.",
    de: "Use single quotes when you want the exact characters. Use double quotes when you want variables expanded but not globbing (often)."
  }),
  (_i: number) => ({
    q: "What is 'double quoting' (\")?",
    o: ["Quotes that allow variable expansion ($VAR) but often protect spaces and some special chars", "Quotes that allow globbing", "A comment", "Same as single quotes"],
    c: 0,
    e: "Inside double quotes \", $VAR is expanded but * is usually not. Spaces and many symbols are kept as one argument.",
    de: "So \"$HOME\" becomes your home path. \"file *.txt\" is one argument containing a space and *. You will use both ' and \" in Level 1."
  }),
  (_i: number) => ({
    q: "What does 'to protect' a character mean (in quoting)?",
    o: ["To prevent the shell from interpreting it specially (e.g. space inside quotes)", "To delete it", "To run it", "To copy it"],
    c: 0,
    e: "To protect (or quote) a character means the shell treats it as normal—e.g. a space inside quotes does not split the argument.",
    de: "Without quotes, hello world is two arguments. With \"hello world\" it is one. The quotes protect the space."
  }),
  (_i: number) => ({
    q: "What is 'word splitting'?",
    o: ["The shell splitting a line into words (arguments) by spaces and tabs (before running the command)", "Splitting a file", "Splitting output", "An error"],
    c: 0,
    e: "Word splitting is when the shell breaks the line into words at spaces/tabs. Each word becomes an argument.",
    de: "Quotes prevent word splitting inside them. So one quoted string stays one argument even if it has spaces."
  }),
  (_i: number) => ({
    q: "What is 'variable expansion'?",
    o: ["Replacing $VAR (or ${VAR}) with the value of that variable before the command runs", "Growing a variable", "Creating a variable", "Deleting a variable"],
    c: 0,
    e: "Variable expansion is when the shell replaces $HOME with the actual path (or whatever HOME is set to).",
    de: "Expansion happens before the command runs. So the command never sees $HOME—it sees the expanded value. Single quotes stop expansion."
  }),
  (_i: number) => ({
    q: "What does 'to set' a variable mean?",
    o: ["To give it a value (e.g. name=value in the shell)", "To read it", "To delete it", "To run it"],
    c: 0,
    e: "To set a variable is to assign a value. In the shell: MYVAR=hello. Then $MYVAR is hello.",
    de: "Variables you set in the terminal last until the session ends. Put them in .bashrc to set them in every new shell."
  }),
  (_i: number) => ({
    q: "What does 'to export' a variable mean?",
    o: ["To make it available to programs you run from the shell (they inherit it)", "To delete it", "To print it", "To save to file"],
    c: 0,
    e: "Export makes the variable visible to child processes. Without export, only the shell sees it.",
    de: "export MYVAR=value. Then when you run a command, that command can see MYVAR. Important for PATH and other env vars."
  }),
  (_i: number) => ({
    q: "What is 'environment' again?",
    o: ["The set of exported variables (and sometimes other settings) that programs inherit", "The current directory", "The prompt", "The output"],
    c: 0,
    e: "The environment is what programs see when they start—variables like PATH, HOME, USER.",
    de: "When you run ls, it inherits your environment. So it knows PATH and can find the ls program. Export adds variables to the environment."
  }),
  (_i: number) => ({
    q: "What is a 'child process'?",
    o: ["A program that was started by another (e.g. the command you run is a child of the shell)", "A subdirectory", "A file", "The shell"],
    c: 0,
    e: "When you run a command, that command is a child process of the shell. The shell is the parent.",
    de: "The child inherits the environment. When the child exits, the shell gets its exit code. You will learn more about processes in later levels."
  }),
  (_i: number) => ({
    q: "What does 'to inherit' mean (for a process)?",
    o: ["To receive a copy of the parent's environment (variables, cwd, etc.) when it starts", "To delete", "To overwrite", "To run"],
    c: 0,
    e: "A child process inherits the parent's environment—so it sees the same PATH, HOME, and other exported variables.",
    de: "That is why setting PATH in the shell affects commands you run. They inherit it. Changes in the child do not affect the parent."
  }),
  (_i: number) => ({
    q: "What is a 'builtin' (or built-in command)?",
    o: ["A command that is part of the shell itself (e.g. cd, echo)—not a separate program", "A binary", "A script", "An alias"],
    c: 0,
    e: "A builtin is implemented inside the shell. cd and echo are often builtins. They don't run a separate program.",
    de: "Builtins can change the shell state (e.g. cd changes current directory). They are fast because there is no separate process. help lists them."
  }),
  (_i: number) => ({
    q: "What is an 'external command'?",
    o: ["A command that runs a separate program (e.g. ls runs the ls binary)", "A builtin", "An alias", "A variable"],
    c: 0,
    e: "An external command is a separate program. When you type ls, the shell finds the ls program and runs it.",
    de: "The shell looks in PATH for the program. External commands run in a child process. man works for them; builtins often use help."
  }),
  (_i: number) => ({
    q: "What does 'to look up' a command mean?",
    o: ["To find documentation or help (e.g. man command or command --help)", "To search for a file", "To run it", "To delete it"],
    c: 0,
    e: "To look up is to check the manual or help. man ls or ls --help shows how to use the command.",
    de: "When you forget the syntax or options, look up the command. It is a good habit before using something destructive like rm -r."
  }),
  (_i: number) => ({
    q: "What is 'documentation'?",
    o: ["Written explanation of how to use something (man pages, --help, tutorials)", "A file only", "The output", "An error"],
    c: 0,
    e: "Documentation is the written guide—man pages, --help output, and tutorials. Read it to learn commands.",
    de: "Good documentation explains syntax, options, and examples. This app is documentation too—it teaches concepts and commands step by step."
  }),
  (_i: number) => ({
    q: "What is a 'tutorial'?",
    o: ["A step-by-step guide that teaches you how to do something", "A single command", "A man page only", "An error message"],
    c: 0,
    e: "A tutorial is a guided lesson—often step by step—to learn a skill or a set of commands.",
    de: "This app is like an interactive tutorial: you answer questions, get explanations, and progress through levels. Level 0 is the first tutorial step."
  }),
  (_i: number) => ({
    q: "What does 'to progress' mean in this app?",
    o: ["To move forward (e.g. complete questions, earn stars, unlock the next level)", "To run a command", "To go back", "To skip"],
    c: 0,
    e: "To progress is to advance—finishing Level 0, then Level 1, earning stars, and unlocking harder content.",
    de: "Progress is saved. You can repeat questions for practice. The goal is to progress from Level 0 (newbie) to Level 10 (expert)."
  }),
  (_i: number) => ({
    q: "What is a 'sub-level' in this app?",
    o: ["A part of a level (Beginner, Intermediate, Expert) with its own set of questions and star", "A folder", "A command", "A file"],
    c: 0,
    e: "Each level has three sub-levels: Beginner, Intermediate, Expert. Each has about 100 questions and one star.",
    de: "Complete Beginner for one star, then Intermediate for two stars, then Expert for three stars. Same for Level 0 and all other levels."
  }),
  (_i: number) => ({
    q: "What does 'unlock' mean in this app?",
    o: ["To make the next level or content available (e.g. after completing the current level)", "To run a command", "To delete progress", "To skip"],
    c: 0,
    e: "Unlock means to make something available. Completing Level 0 unlocks Level 1; completing a level unlocks the next.",
    de: "You start with Level 0 (and usually Level 1) unlocked. As you finish levels, more levels unlock so you can progress in order."
  }),
  (_i: number) => ({
    q: "What is 'difficulty' in this app?",
    o: ["How hard the questions are—Level 0 is easiest, Level 10 hardest", "The number of questions", "The length of the explanation", "The topic only"],
    c: 0,
    e: "Difficulty increases with level. Level 0 assumes no knowledge; higher levels assume more and ask harder questions.",
    de: "Level 0 = very easy (what is a terminal?). Level 10 = advanced (containers, Git, boot process). Each level builds on the previous."
  }),
  (_i: number) => ({
    q: "What does 'to assume' mean in 'assumes no prior knowledge'?",
    o: ["We do not expect you to know anything about the topic before starting", "We guess something", "We ignore something", "We require experience"],
    c: 0,
    e: "Assumes no prior knowledge means we don't expect you to know anything. We explain from zero.",
    de: "Level 0 assumes you have never used a terminal. Level 1 assumes you know what a terminal and command are (from Level 0)."
  }),
  (_i: number) => ({
    q: "What is 'prior knowledge'?",
    o: ["What you already know before starting (e.g. before Level 0 we assume none)", "What you learn later", "What the app teaches", "What is in the manual"],
    c: 0,
    e: "Prior knowledge is what you knew before. Level 0 needs no prior knowledge; later levels build on what you learned earlier.",
    de: "After Level 0 you have prior knowledge: terminal, command, directory, path, etc. That is enough to start Level 1."
  }),
  (_i: number) => ({
    q: "What is a 'newbie'?",
    o: ["Someone who is new to a topic (same idea as beginner)", "An expert", "A program", "A type of file"],
    c: 0,
    e: "Newbie means someone who is new—a beginner. Level 0 is for newbies.",
    de: "Everyone is a newbie at first. This app is designed so newbies can start at Level 0 and become confident enough for Level 1 and beyond."
  }),
  (_i: number) => ({
    q: "What does 'to build on' mean?",
    o: ["To use what you learned before as a base for the next step (e.g. Level 1 builds on Level 0)", "To construct a file", "To run a command", "To delete something"],
    c: 0,
    e: "To build on means each step uses the previous one. Level 1 builds on Level 0; Level 2 builds on Level 1.",
    de: "So you need the concepts from Level 0 (terminal, command, path) before Level 1's commands (ls, cd, pwd) make full sense. That is why order matters."
  }),
  (_i: number) => ({
    q: "What is 'order' in the context of levels?",
    o: ["The sequence Level 0 → 1 → 2 → … so you learn in a logical order", "A command", "Sort order", "Alphabetical order"],
    c: 0,
    e: "Order means the sequence. Doing Level 0 first, then 1, then 2, etc., is the intended order.",
    de: "You can jump to an unlocked level, but doing them in order (0, 1, 2, …) usually makes learning easier because each builds on the last."
  }),
  (_i: number) => ({
    q: "What does 'to earn' a star mean?",
    o: ["To complete enough questions in a sub-level so the app gives you that star", "To buy something", "To run a command", "To skip questions"],
    c: 0,
    e: "You earn a star by completing the questions in that sub-level (Beginner, Intermediate, or Expert).",
    de: "Three stars per level = you finished all three sub-levels. Stars show your progress at a glance."
  }),
  (_i: number) => ({
    q: "What is 'at a glance'?",
    o: ["Quickly, with a quick look (e.g. stars show progress at a glance)", "In detail", "After a long time", "Only in the manual"],
    c: 0,
    e: "At a glance means you can see it quickly—e.g. three stars means you completed that level's sub-levels.",
    de: "The level selector and progress views use stars so you can see how far you are without opening each level."
  }),
  (_i: number) => ({
    q: "What does 'to complete' a level or sub-level mean?",
    o: ["To finish all (or enough) questions in it—e.g. earn the star", "To run one command", "To open it", "To skip it"],
    c: 0,
    e: "To complete is to finish—answer enough questions in that sub-level to earn the star and move on.",
    de: "You can still redo questions for practice after completing. Completing unlocks the next sub-level or level and shows your progress."
  }),
  (_i: number) => ({
    q: "What is 'practice'?",
    o: ["Doing something repeatedly to get better (e.g. answering questions or typing commands)", "Reading once", "Taking a test only", "Skipping"],
    c: 0,
    e: "Practice is doing the activity again and again to improve. This app and the real terminal are both practice.",
    de: "Level 0 gives you safe practice with concepts. When you use a real terminal, that is practice too. The more you do, the easier it gets."
  }),
  (_i: number) => ({
    q: "What does 'to reinforce' mean?",
    o: ["To strengthen by repeating (e.g. seeing the same idea again in another question)", "To delete", "To run", "To skip"],
    c: 0,
    e: "To reinforce is to make an idea stronger by encountering it again. Repeated questions and explanations reinforce learning.",
    de: "Level 0 has many questions about 'what is a terminal,' 'what is a command,' etc. That repetition reinforces the basics."
  }),
  (_i: number) => ({
    q: "What is a 'distractor' in a multiple-choice question?",
    o: ["A wrong answer that looks plausible (to make you think)", "The correct answer", "The question", "The explanation"],
    c: 0,
    e: "A distractor is an incorrect option that seems possible. Choosing it helps you see what you got wrong.",
    de: "Good distractors are wrong but reasonable. When you pick one, the explanation tells you why it's wrong and what the right idea is."
  }),
  (_i: number) => ({
    q: "What does 'plausible' mean?",
    o: ["Seeming reasonable or possible (e.g. a wrong but plausible answer)", "Certainly correct", "Random", "Wrong and obvious"],
    c: 0,
    e: "Plausible means it could seem right. Distractors are plausible wrong answers so you really have to think.",
    de: "If wrong answers were silly, the quiz would be too easy. Plausible wrong answers make you learn the correct concept better."
  }),
  (_i: number) => ({
    q: "What is the 'correct option'?",
    o: ["The right answer to the question (the one that matches the facts)", "The first option", "Any option", "The longest option"],
    c: 0,
    e: "The correct option is the one that is right. The app tells you after you answer and shows the explanation.",
    de: "In each question exactly one option is correct. The explanation explains why it is correct and often why others are wrong."
  }),
  (_i: number) => ({
    q: "What does 'to select' mean in the quiz?",
    o: ["To choose one option (e.g. by clicking it) as your answer", "To run a command", "To delete", "To skip"],
    c: 0,
    e: "To select is to pick one of the options. Click (or tap) the option you think is correct.",
    de: "After you select, you see whether you were right and get the explanation. Then you can go to the next question."
  }),
  (_i: number) => ({
    q: "What is the 'short explanation'?",
    o: ["The brief text that says why the answer is correct (shown after you answer)", "The question", "The detailed explanation only", "An error"],
    c: 0,
    e: "The short explanation is the one-line (or short) reason the answer is correct. It appears right after you answer.",
    de: "There is also often a detailed explanation (longer) with more context. Both help you learn. Read them to reinforce."
  }),
  (_i: number) => ({
    q: "What is the 'detailed explanation'?",
    o: ["A longer explanation with more context and detail (for deeper learning)", "The question", "The short explanation only", "A command"],
    c: 0,
    e: "The detailed explanation goes deeper—extra context, how it fits with other ideas, and sometimes what you will learn next.",
    de: "Use it when you want to understand fully. It often connects the concept to real commands you will see in Level 1 and beyond."
  }),
  (_i: number) => ({
    q: "What does 'to move on' mean?",
    o: ["To go to the next question or level after finishing the current one", "To run a command", "To skip without answering", "To go back"],
    c: 0,
    e: "To move on is to proceed—next question, next sub-level, or next level. You move on after answering or completing.",
    de: "After each question you can move on to the next. After completing a sub-level you move on to the next sub-level or level. Progress is saved."
  }),
  (_i: number) => ({
    q: "What is 'saved progress'?",
    o: ["The app remembers what you completed (questions, stars, level) so you can continue later", "A file on disk", "A command", "The output"],
    c: 0,
    e: "Saved progress means the app stores your answers and stars (often in the browser). When you return, you continue where you left off.",
    de: "So you can close the app and come back. Your level, stars, and completed questions are still there (as long as you use the same device/storage)."
  }),
  (_i: number) => ({
    q: "What does 'to continue' mean?",
    o: ["To keep going from where you stopped (e.g. next question or same level)", "To run a command", "To start over", "To delete progress"],
    c: 0,
    e: "To continue is to resume—pick up with the next question or the same level when you come back.",
    de: "When you open the app again, you continue from your saved progress. No need to redo everything."
  }),
  (_i: number) => ({
    q: "Why is Level 0 useful before Level 1?",
    o: ["It teaches basic words and ideas (terminal, command, path) so Level 1 commands make sense", "Level 1 is broken", "Level 0 has more questions", "Level 1 has no explanations"],
    c: 0,
    e: "Level 0 gives you the vocabulary and concepts. Then in Level 1 you can focus on real commands (ls, cd, pwd) without confusion.",
    de: "If you skip Level 0, Level 1 might feel harder because terms like 'current directory' and 'command' are used without introduction. Level 0 fixes that."
  }),
  (_i: number) => ({
    q: "What is 'vocabulary' in this context?",
    o: ["The set of words and terms (terminal, command, path, directory) you need to understand", "A single word", "A dictionary", "The output"],
    c: 0,
    e: "Vocabulary is the set of terms—terminal, command, directory, path, etc. Level 0 teaches this vocabulary.",
    de: "Once you know the vocabulary, the explanations in Level 1 and beyond will make more sense. You will recognize the words."
  }),
  (_i: number) => ({
    q: "What does 'to focus on' mean?",
    o: ["To concentrate on something (e.g. focus on learning real commands in Level 1)", "To run a command", "To skip", "To delete"],
    c: 0,
    e: "To focus on means to pay attention mainly to that. After Level 0 you can focus on commands instead of basic definitions.",
    de: "Level 0 = focus on what things mean. Level 1 = focus on what commands do (ls, cd, pwd, etc.). Each level has a focus."
  }),
  (_i: number) => ({
    q: "What is a 'real command'?",
    o: ["An actual command you type in a terminal (e.g. ls, cd)—not just the word 'command'", "A practice question", "A variable", "An explanation"],
    c: 0,
    e: "A real command is one you can type and run—ls, cd, pwd, mkdir, etc. Level 1 introduces these.",
    de: "Level 0 teaches the idea of a command. Level 1 teaches real command names and what they do. Then you can use a real terminal."
  }),
  (_i: number) => ({
    q: "What does 'to introduce' mean (in teaching)?",
    o: ["To present something for the first time (e.g. Level 1 introduces ls and cd)", "To run it", "To delete it", "To skip it"],
    c: 0,
    e: "To introduce is to present for the first time. Level 1 introduces real commands; Level 0 introduces only the concepts.",
    de: "Each level introduces new commands and ideas. By Level 10 you will have been introduced to a wide range of terminal and system topics."
  }),
  (_i: number) => ({
    q: "What is the 'next step' after Level 0?",
    o: ["Level 1—learning real commands like ls, cd, pwd with the vocabulary you have now", "To quit", "To skip Level 1", "To repeat Level 0 only"],
    c: 0,
    e: "The next step is Level 1. There you will use the words you learned (directory, path, command) with actual commands.",
    de: "Complete Level 0's sub-levels, earn your stars, then start Level 1. You will feel more confident because you know the basics."
  }),
  (_i: number) => ({
    q: "What does 'confident' mean in learning?",
    o: ["Feeling sure you understand and can do something (e.g. use basic terms)", "Knowing everything", "Skipping levels", "Never making mistakes"],
    c: 0,
    e: "Confident means you feel you understand and can use it. Level 0 aims to make you confident with basic terminal vocabulary.",
    de: "You do not need to know everything. Confidence here means: I know what a terminal is, what a command is, and I am ready to type real commands in Level 1."
  }),
];
