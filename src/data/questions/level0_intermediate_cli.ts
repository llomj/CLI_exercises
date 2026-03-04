// LEVEL 0 INTERMEDIATE — Slightly more specific beginner concepts (100 questions)
// Still no prior terminal knowledge assumed; introduces simple command names and symbols.

export const level0Intermediate = [
  (_i: number) => ({
    q: "What might the symbol $ at the end of the prompt mean?",
    o: ["The shell is ready for your command (common in Linux/macOS)", "You must type a dollar sign", "An error occurred", "The computer is off"],
    c: 0,
    e: "The $ (or % in some shells) is part of the prompt and means 'ready for input.'",
    de: "Different systems use different prompt symbols. $ and % are common. You type after the prompt."
  }),
  (_i: number) => ({
    q: "What does the abbreviation 'pwd' often stand for in terminal guides?",
    o: ["Print working directory (show current folder)", "Password", "Print word document", "Path with data"],
    c: 0,
    e: "pwd usually means 'print working directory'—a command that shows which folder you are in.",
    de: "You will learn the pwd command in Level 1. It prints the full path of your current directory."
  }),
  (_i: number) => ({
    q: "What does 'ls' usually stand for in terminal guides?",
    o: ["List (list files and folders in the current directory)", "Load system", "Line save", "List screen"],
    c: 0,
    e: "ls stands for 'list'—it lists the contents of the current directory.",
    de: "In Level 1 you will use ls to see file and folder names in the folder you are in."
  }),
  (_i: number) => ({
    q: "What does 'cd' often stand for in terminal guides?",
    o: ["Change directory (move to another folder)", "Create directory", "Copy data", "Clear display"],
    c: 0,
    e: "cd usually means 'change directory'—you use it to move to another folder.",
    de: "You will learn cd in Level 1. For example, cd Documents moves you into the Documents folder."
  }),
  (_i: number) => ({
    q: "In paths, what does '..' (two dots) usually mean?",
    o: ["The parent folder (one level up)", "The current folder", "The root", "A hidden file"],
    c: 0,
    e: ".. means the parent directory—the folder that contains the one you are in.",
    de: "So cd .. would mean 'go up one folder.' You will see this in Level 1."
  }),
  (_i: number) => ({
    q: "In paths, what does '.' (one dot) usually mean?",
    o: ["The current directory (the folder you are in)", "The parent folder", "The root", "A hidden file"],
    c: 0,
    e: "A single dot . means 'current directory.'",
    de: "Some commands use . to mean 'here.' For example, listing . lists the current folder's contents."
  }),
  (_i: number) => ({
    q: "What does the symbol ~ (tilde) often mean in paths?",
    o: ["Your home directory (your main user folder)", "The root", "Current directory", "A temporary folder"],
    c: 0,
    e: "~ is shorthand for your home directory. So ~/Documents means Documents inside your home folder.",
    de: "Typing cd ~ or cd ~/Documents is a quick way to go to your home or a folder inside it."
  }),
  (_i: number) => ({
    q: "What is a 'dotfile'?",
    o: ["A file whose name starts with a dot (often hidden by default)", "A very small file", "A system file only", "A backup file"],
    c: 0,
    e: "A dotfile is a file whose name starts with a dot, like .bashrc. Many systems hide them in normal listings.",
    de: "Dotfiles are often used for configuration. You can list them with a special option (e.g. ls -a) that you will learn later."
  }),
  (_i: number) => ({
    q: "What does 'mkdir' usually stand for?",
    o: ["Make directory (create a new folder)", "Move directory", "Merge directory", "Mark directory"],
    c: 0,
    e: "mkdir means 'make directory'—it creates a new folder.",
    de: "You will learn mkdir in Level 1. Example: mkdir myfolder creates a folder named myfolder."
  }),
  (_i: number) => ({
    q: "What does 'rm' often stand for in terminal guides?",
    o: ["Remove (delete files or folders)", "Rename", "Read more", "Run command"],
    c: 0,
    e: "rm usually means 'remove'—it deletes files (and with options, folders). Use with care.",
    de: "In Level 1 you will learn rm. Deleted files often cannot be recovered, so be careful."
  }),
  (_i: number) => ({
    q: "What does 'cp' usually stand for?",
    o: ["Copy (duplicate a file or folder)", "Change path", "Create file", "Clear prompt"],
    c: 0,
    e: "cp means 'copy'—it copies files or folders to another location or name.",
    de: "You will use cp in Level 1 to duplicate files. Example: cp file.txt backup.txt."
  }),
  (_i: number) => ({
    q: "What does 'mv' usually stand for?",
    o: ["Move (move or rename files or folders)", "Make variable", "Merge file", "More view"],
    c: 0,
    e: "mv means 'move'—it moves files to another folder or renames them.",
    de: "In Level 1 you will learn mv. Same command for 'move to another folder' and 'rename here.'"
  }),
  (_i: number) => ({
    q: "What does 'cat' often stand for in terminal guides?",
    o: ["Concatenate / display file contents", "Create file", "Copy all text", "Clear and type"],
    c: 0,
    e: "cat is used to display the contents of a file (originally 'concatenate').",
    de: "You will learn cat in Level 1. Typing cat filename shows the file's text in the terminal."
  }),
  (_i: number) => ({
    q: "What does 'echo' usually do in the terminal?",
    o: ["Print (display) the text you give it", "Delete text", "Run a command", "Clear the screen"],
    c: 0,
    e: "echo prints whatever you type after it. Example: echo Hello shows Hello.",
    de: "echo is useful for showing messages or the value of variables. You will see it in Level 1."
  }),
  (_i: number) => ({
    q: "What is the purpose of the 'clear' command?",
    o: ["To clear the visible screen so you have a clean area", "To delete all files", "To close the terminal", "To clear the clipboard"],
    c: 0,
    e: "clear clears the terminal display. Your session and history stay; you just get a blank view.",
    de: "Useful when the screen is full of old output. The prompt appears at the top again."
  }),
  (_i: number) => ({
    q: "What does 'exit' do when you type it in the terminal?",
    o: ["Ends the terminal session (closes the shell)", "Goes to the previous folder", "Clears the screen", "Logs out of the computer"],
    c: 0,
    e: "exit closes the current terminal session. The window may close or you may see a message.",
    de: "Typing exit is a polite way to end the shell. Any program running in that window will stop."
  }),
  (_i: number) => ({
    q: "What is 'help' in the context of the terminal?",
    o: ["Information or a command that explains how to use something", "A type of file", "An error", "The prompt"],
    c: 0,
    e: "Help is documentation—either a command (e.g. help) or text that explains usage.",
    de: "Many commands have a --help option or a man page. Use them when you forget how a command works."
  }),
  (_i: number) => ({
    q: "What is 'man' in the context of the terminal?",
    o: ["Manual—a command that shows the manual page for another command", "A filename", "Short for 'many'", "An error message"],
    c: 0,
    e: "man stands for manual. Typing man commandname shows the official manual page for that command.",
    de: "Example: man ls shows the manual for ls. Press q to quit. Very useful when learning."
  }),
  (_i: number) => ({
    q: "What is a 'flag' or 'option' for a command?",
    o: ["An extra part that changes how the command behaves (e.g. -l or --all)", "A type of file", "The command name", "The output"],
    c: 0,
    e: "A flag (or option) is something you add to a command to change its behavior, often starting with - or --.",
    de: "Example: ls -l lists in long format. You will learn common flags in Level 1 and beyond."
  }),
  (_i: number) => ({
    q: "What is an 'argument' for a command?",
    o: ["Extra information you give to the command (e.g. a filename or path)", "An error", "The command name", "The prompt"],
    c: 0,
    e: "An argument is the extra information you type after the command—for example, a file or folder name.",
    de: "In cp file.txt backup.txt, file.txt and backup.txt are arguments. They tell cp what to copy and where."
  }),
  (_i: number) => ({
    q: "What does 'output' mean when we talk about a command?",
    o: ["The text (or result) the command prints to the screen", "What you type", "The prompt", "An error only"],
    c: 0,
    e: "Output is what the command produces—the text that appears after you run it.",
    de: "Commands send their result to 'standard output' (stdout), which you see in the terminal. Errors may go to 'stderr.'"
  }),
  (_i: number) => ({
    q: "What does 'input' mean for a command?",
    o: ["What the command reads (e.g. what you type or a file)", "The output", "The prompt", "The command name"],
    c: 0,
    e: "Input is what the command receives—your typing, a file, or data from another command.",
    de: "Some commands read from 'standard input' (keyboard or a pipe). You will learn redirection and pipes in later levels."
  }),
  (_i: number) => ({
    q: "What is 'stdout' in simple terms?",
    o: ["The normal place where a command sends its output (usually the screen)", "An error message", "The input", "A type of file"],
    c: 0,
    e: "stdout (standard output) is where normal output goes—typically the terminal screen.",
    de: "When a command prints a list of files, that list goes to stdout. You can later redirect it to a file."
  }),
  (_i: number) => ({
    q: "What is 'stderr' in simple terms?",
    o: ["Where error messages are sent (usually the screen)", "The normal output", "The input", "A command"],
    c: 0,
    e: "stderr (standard error) is where error messages go—also usually the screen, but separate from normal output.",
    de: "So the terminal has two streams: normal output (stdout) and errors (stderr). Both often appear in the same window."
  }),
  (_i: number) => ({
    q: "What is a 'script' in the context of the terminal?",
    o: ["A file that contains a sequence of commands to run", "A single command", "The prompt", "An error log"],
    c: 0,
    e: "A script is a file with commands in it. When you run the script, those commands run one after another.",
    de: "Scripts automate tasks. You will learn more about them in later levels. They are just text files with commands."
  }),
  (_i: number) => ({
    q: "What does 'to redirect' mean in the terminal?",
    o: ["To send output (or input) to a file or another command instead of the screen", "To delete output", "To run a command again", "To change directory"],
    c: 0,
    e: "Redirecting means sending output to a file (or reading input from a file) instead of the default screen/keyboard.",
    de: "You will learn > and < for redirection in Level 1. For example, ls > files.txt saves the list to a file."
  }),
  (_i: number) => ({
    q: "What is a 'pipe' in the terminal?",
    o: ["A way to send one command's output as input to the next command", "A type of file", "A folder", "An error"],
    c: 0,
    e: "A pipe connects two commands: the output of the first becomes the input of the second.",
    de: "You type a vertical bar | between commands. Example: ls | grep txt (you will learn this in later levels)."
  }),
  (_i: number) => ({
    q: "What does 'case-sensitive' mean for filenames?",
    o: ["Upper- and lowercase letters are different (File.txt ≠ file.txt)", "Only capitals are allowed", "Spaces are not allowed", "Numbers are not allowed"],
    c: 0,
    e: "Case-sensitive means the system treats A and a as different. So File.txt and file.txt can both exist.",
    de: "On Linux and macOS, filenames are case-sensitive. On Windows often not. In the terminal, command names are usually lowercase."
  }),
  (_i: number) => ({
    q: "What is a 'wildcard' in the context of files?",
    o: ["A character that stands for other characters (e.g. * for 'any')", "A type of file", "An error", "A folder"],
    c: 0,
    e: "A wildcard is a symbol that matches other characters. For example * often means 'any string.'",
    de: "You will learn * and ? in Level 1. ls *.txt would list all files whose names end with .txt."
  }),
  (_i: number) => ({
    q: "What does 'permission' mean for a file?",
    o: ["Who is allowed to read, write, or run the file", "The file size", "The file type", "The filename"],
    c: 0,
    e: "Permissions control who can read, change, or execute the file. The system enforces them.",
    de: "You will learn about read (r), write (w), and execute (x) in later levels. They protect your files."
  }),
  (_i: number) => ({
    q: "What does 'to read' a file mean?",
    o: ["To open it and see its contents (not change it)", "To delete it", "To copy it", "To run it"],
    c: 0,
    e: "To read a file means to look at its contents without changing them.",
    de: "Commands like cat read a file and display its contents. Reading does not modify the file."
  }),
  (_i: number) => ({
    q: "What does 'to write' to a file mean?",
    o: ["To change or create the file's contents", "To only read it", "To delete it", "To rename it"],
    c: 0,
    e: "To write means to change or create the contents of the file. The file may be overwritten or created.",
    de: "Redirecting with > writes to a file (and can overwrite it). You need write permission to change a file."
  }),
  (_i: number) => ({
    q: "What does 'to execute' a file mean?",
    o: ["To run it as a program or script", "To read it", "To delete it", "To copy it"],
    c: 0,
    e: "To execute means to run the file as a program. The system runs the instructions inside it.",
    de: "Scripts and programs are executed. The file needs execute permission. You will learn how to run them in later levels."
  }),
  (_i: number) => ({
    q: "What is the 'current directory' used for by many commands?",
    o: ["As the default place to look for or create files", "Nothing", "Only for cd", "Only for ls"],
    c: 0,
    e: "Many commands use the current directory as the default—for example, ls lists it, and paths without / start from it.",
    de: "When you type a filename with no path, the command usually looks in the current directory. So 'where you are' matters."
  }),
  (_i: number) => ({
    q: "What is a 'path separator'?",
    o: ["The character that separates folder names in a path (e.g. / or \\)", "A type of file", "A command", "The prompt"],
    c: 0,
    e: "The path separator is the character between folder names—/ on Linux and macOS, often \\ on Windows.",
    de: "Example: home/user/docs has / as the separator. One path can have several separators."
  }),
  (_i: number) => ({
    q: "What does 'empty' mean for a directory?",
    o: ["It has no files or folders inside it", "It does not exist", "It is hidden", "It is the root"],
    c: 0,
    e: "An empty directory has nothing inside it—no files and no subfolders.",
    de: "Some commands only work on empty directories (e.g. removing a directory). You will learn this in Level 1."
  }),
  (_i: number) => ({
    q: "What is a 'subdirectory'?",
    o: ["A folder inside another folder", "The root folder", "The home folder", "A file"],
    c: 0,
    e: "A subdirectory is a directory that is inside another directory.",
    de: "Same as subfolder. The path Documents/Projects has Projects as a subdirectory of Documents."
  }),
  (_i: number) => ({
    q: "What does 'to overwrite' a file mean?",
    o: ["To replace its contents with new content (the old content is lost)", "To add to the end", "To read it", "To copy it"],
    c: 0,
    e: "To overwrite means to write new content that replaces the old. The previous contents are gone unless you have a backup.",
    de: "Redirecting with > overwrites the file. Some commands ask for confirmation; in the terminal, overwriting can be immediate."
  }),
  (_i: number) => ({
    q: "What does 'to append' mean?",
    o: ["To add new content to the end of a file without deleting the old", "To overwrite", "To read", "To delete"],
    c: 0,
    e: "To append means to add to the end. The existing content stays; new content is added after it.",
    de: "You will learn >> for appending output to a file. Useful for logs—each new line goes at the end."
  }),
  (_i: number) => ({
    q: "What is a 'line' in a text file?",
    o: ["A row of text that usually ends with a newline character", "The whole file", "A single character", "A command"],
    c: 0,
    e: "A line is one row of text, typically ending when you press Enter (newline).",
    de: "Many terminal tools work line by line. A file with 10 lines has 10 such rows."
  }),
  (_i: number) => ({
    q: "What is a 'word' in the context of typing a command?",
    o: ["A sequence of characters separated by spaces (e.g. command name or argument)", "A single letter", "The whole line", "A file"],
    c: 0,
    e: "A word is a chunk of text separated by spaces. The first word is often the command name; the rest are arguments.",
    de: "In ls -l file.txt there are three 'words': ls, -l, and file.txt. The shell splits the line by spaces to get these words."
  }),
  (_i: number) => ({
    q: "What is 'syntax' in the context of commands?",
    o: ["The correct way to write a command (order and punctuation)", "The output", "The prompt", "An error"],
    c: 0,
    e: "Syntax is the correct form of a command—what order to put words in and what symbols to use.",
    de: "Wrong syntax often causes 'command not found' or other errors. Documentation and man pages describe the syntax."
  }),
  (_i: number) => ({
    q: "What does 'to fail' or 'failure' mean for a command?",
    o: ["The command did not succeed (e.g. error or wrong result)", "It ran slowly", "It produced output", "It asked for input"],
    c: 0,
    e: "Failure means the command did not do what it was supposed to—often an error message and a non-zero exit code.",
    de: "Commands report success or failure. You will learn about exit codes in Level 1. Failure does not always mean you did something wrong—sometimes the file is missing or permission is denied."
  }),
  (_i: number) => ({
    q: "What is an 'exit code' (in simple terms)?",
    o: ["A number the command leaves behind to say if it succeeded (often 0) or failed (non-zero)", "The last line of output", "The command name", "The prompt"],
    c: 0,
    e: "The exit code is a small number: usually 0 means success, and a non-zero number means some kind of failure.",
    de: "Scripts and the shell use this to decide what to do next. You will see how to check it (e.g. with $?) in Level 1."
  }),
  (_i: number) => ({
    q: "What is a 'variable' in the context of the terminal?",
    o: ["A named value the shell remembers (e.g. HOME for your home path)", "A type of file", "A command", "An error"],
    c: 0,
    e: "A variable has a name and a value. The shell stores them; for example, HOME might be the path to your home folder.",
    de: "You will learn to use variables like $HOME in Level 1. They make commands shorter and reusable."
  }),
  (_i: number) => ({
    q: "What is 'environment' in the context of the terminal?",
    o: ["The set of variables and settings that affect how commands run", "The desktop", "The current directory only", "The output"],
    c: 0,
    e: "The environment is the collection of variables (and sometimes other settings) that programs can see when they run.",
    de: "PATH, HOME, and USER are common environment variables. They tell commands where to find programs and who you are."
  }),
  (_i: number) => ({
    q: "What is the 'PATH' variable used for?",
    o: ["A list of directories where the shell looks for programs when you type a command", "The current path", "A single file path", "The prompt"],
    c: 0,
    e: "PATH is a list of folders. When you type ls, the shell looks in those folders for a program named ls.",
    de: "If the program is in one of the PATH folders, you can run it by typing its name. Otherwise you get 'command not found.'"
  }),
  (_i: number) => ({
    q: "What does 'case-insensitive' mean?",
    o: ["Capital and small letters are treated the same (A = a)", "Only capitals matter", "No letters allowed", "Spaces matter"],
    c: 0,
    e: "Case-insensitive means the system does not distinguish between A and a. File.txt and file.txt would be the same.",
    de: "Windows filenames are often case-insensitive. Linux and macOS are usually case-sensitive. Commands are typically lowercase."
  }),
  (_i: number) => ({
    q: "What is a 'backup'?",
    o: ["A copy of a file or data kept in case the original is lost or changed", "A type of command", "The root folder", "An error"],
    c: 0,
    e: "A backup is a copy you keep so you can restore if something goes wrong.",
    de: "Before deleting or overwriting important files, making a backup (e.g. with cp) is a good habit."
  }),
  (_i: number) => ({
    q: "What does 'to restore' mean?",
    o: ["To bring back something from a backup or previous state", "To delete", "To run a command", "To exit"],
    c: 0,
    e: "To restore means to put back—for example, copy a file from a backup to replace a lost or broken one.",
    de: "If you have a backup, you can restore by copying it over the damaged or missing file."
  }),
  (_i: number) => ({
    q: "What is a 'log' or 'log file'?",
    o: ["A file that records what happened (e.g. messages or errors over time)", "A command", "The prompt", "A type of folder"],
    c: 0,
    e: "A log is a file that stores a record of events—often one line per event, with timestamps.",
    de: "Programs and scripts often write to log files. Appending (>>) is common so new lines go at the end."
  }),
  (_i: number) => ({
    q: "What does 'verbose' mean for a command?",
    o: ["It prints more detail about what it is doing", "It runs faster", "It deletes things", "It asks many questions"],
    c: 0,
    e: "Verbose mode means the command gives more output—extra messages so you can see what it is doing.",
    de: "Many commands have a -v or --verbose flag. Useful when debugging or learning."
  }),
  (_i: number) => ({
    q: "What does 'quiet' or 'silent' mean for a command?",
    o: ["It produces little or no output (only errors maybe)", "It runs slowly", "It deletes output", "It asks no questions"],
    c: 0,
    e: "Quiet (or silent) means the command prints little or nothing—maybe only errors.",
    de: "Useful in scripts when you do not want to clutter the output. Often a -q or --quiet flag."
  }),
  (_i: number) => ({
    q: "What is a 'default value'?",
    o: ["The value used when you do not specify something yourself", "An error value", "The only value", "A random value"],
    c: 0,
    e: "The default is what the program uses if you do not give an option or argument.",
    de: "Example: if you do not say which directory, ls uses the current directory. That is the default."
  }),
  (_i: number) => ({
    q: "What does 'to specify' something mean?",
    o: ["To state it explicitly (e.g. give a path or option)", "To guess it", "To delete it", "To run it"],
    c: 0,
    e: "To specify means to give an explicit value—for example, the path to a file or the name of a folder.",
    de: "When you type ls /home, you are specifying the directory /home. When you type just ls, you use the default (current directory)."
  }),
  (_i: number) => ({
    q: "What is a 'configuration file'?",
    o: ["A file that stores settings for a program (how it should behave)", "A program", "A command", "The prompt"],
    c: 0,
    e: "A configuration file holds settings—options and values that the program reads when it starts.",
    de: "Many programs use dotfiles in your home folder (e.g. .bashrc) as configuration. You edit the file to change behavior."
  }),
  (_i: number) => ({
    q: "What does 'to edit' a file mean?",
    o: ["To change its contents (add, delete, or modify text)", "To only read it", "To run it", "To copy it"],
    c: 0,
    e: "To edit means to modify the file—change, add, or remove content.",
    de: "You can edit with a text editor (e.g. nano, vim) or by redirecting output. Editing changes the file permanently (unless you have a backup)."
  }),
  (_i: number) => ({
    q: "What is a 'text editor'?",
    o: ["A program for creating and editing plain text files", "The terminal", "A type of file", "A command that only reads"],
    c: 0,
    e: "A text editor is a program for writing and changing text files. Not for rich formatting like a word processor.",
    de: "Examples: Notepad, nano, vim. You use them to write scripts, config files, and any plain text."
  }),
  (_i: number) => ({
    q: "What is 'plain text'?",
    o: ["Text with no formatting (just letters, numbers, symbols)—no bold or colors stored", "Encrypted text", "Binary data", "A script"],
    c: 0,
    e: "Plain text is simple text—characters only, no hidden formatting. What you see in the terminal or a basic editor.",
    de: "Config files and scripts are plain text. Word processor documents (.docx) are not plain text; they store formatting."
  }),
  (_i: number) => ({
    q: "What does 'binary' mean for a file?",
    o: ["Data that is not plain text (e.g. images, compiled programs)—not meant to be read as text", "A file with two parts", "A backup", "A script"],
    c: 0,
    e: "A binary file contains data that is not human-readable text—for example, an image or an executable program.",
    de: "Opening a binary file in the terminal or a text editor often shows garbage. Use the right program (e.g. image viewer) for binary files."
  }),
  (_i: number) => ({
    q: "What is a 'link' in the context of files?",
    o: ["A reference that points to another file or folder (shortcut-like)", "A URL", "A chain of commands", "A backup"],
    c: 0,
    e: "A link is a special file that points to another file or folder. Opening the link opens the target.",
    de: "You will learn symbolic links (symlinks) in later levels. They are like shortcuts—one name, another location."
  }),
  (_i: number) => ({
    q: "What does 'to run in the background' mean?",
    o: ["To start a command so it keeps running while you can type more commands", "To run it slowly", "To run it once", "To run it at night"],
    c: 0,
    e: "A command run in the background does not block the terminal—you get the prompt back and can run other commands.",
    de: "You will learn to put & at the end to run in the background. Useful for long-running tasks."
  }),
  (_i: number) => ({
    q: "What is a 'process'?",
    o: ["A running instance of a program (one execution of a command)", "A file", "A folder", "The prompt"],
    c: 0,
    e: "A process is a program that is currently running. Each time you run a command, you start a process.",
    de: "The shell is a process. When you run ls, that starts another process that runs and then exits. You will learn more in later levels."
  }),
  (_i: number) => ({
    q: "What does 'to cancel' or 'interrupt' a command mean?",
    o: ["To stop it before it finishes (e.g. with Ctrl+C)", "To run it again", "To pause it only", "To delete its output"],
    c: 0,
    e: "To cancel (interrupt) means to stop the running command. Usually done with Ctrl+C.",
    de: "If a command is taking too long or you typed the wrong one, Ctrl+C sends an interrupt and the command stops."
  }),
  (_i: number) => ({
    q: "What is a 'keyboard shortcut'?",
    o: ["A key or key combination that does something (e.g. Ctrl+C to copy or interrupt)", "A short command", "A small key", "The Tab key only"],
    c: 0,
    e: "A keyboard shortcut is pressing one or more keys to trigger an action—e.g. Ctrl+C to interrupt, Tab to complete.",
    de: "In the terminal, Ctrl+C interrupts, Ctrl+L may clear the screen, Tab completes. Shortcuts speed you up."
  }),
  (_i: number) => ({
    q: "What does 'to complete' or 'completion' mean in the terminal?",
    o: ["The shell finishes a word you started typing (e.g. command or path) when you press Tab", "To finish a command", "To run a command", "To close the terminal"],
    c: 0,
    e: "Completion means the shell suggests or fills in the rest of a word—usually when you press Tab.",
    de: "Type the first few letters of a command or path and press Tab. If there is only one match, the shell completes it. Saves typing and reduces typos."
  }),
  (_i: number) => ({
    q: "What is 'history' in the context of the terminal?",
    o: ["The list of commands you have typed in this session (or saved from past sessions)", "A log file", "The output", "The prompt"],
    c: 0,
    e: "History is the list of previous commands. You can recall, edit, and run them again.",
    de: "Use the Up/Down arrow keys to scroll through history. You can also search it. Very useful to repeat or fix a command."
  }),
  (_i: number) => ({
    q: "What does 'to recall' a command mean?",
    o: ["To bring back a previous command from history (e.g. with Up arrow) so you can run or edit it", "To remember it by heart", "To delete it", "To run it in the background"],
    c: 0,
    e: "To recall means to fetch a previous command from history—usually with the Up arrow—then run or change it.",
    de: "Recall, edit if needed, then press Enter. Faster than typing the same command again."
  }),
  (_i: number) => ({
    q: "What is a 'session' in the context of the terminal?",
    o: ["The time from when you open the terminal until you close it (or exit)", "A single command", "A login", "A file"],
    c: 0,
    e: "A session is one continuous period of using the terminal—from opening it until you close it or type exit.",
    de: "Your current directory, variables, and command history are kept for the session. Closing the window ends the session."
  }),
  (_i: number) => ({
    q: "What does 'to log out' mean?",
    o: ["To end your login so the system no longer considers you the current user", "To close the terminal only", "To clear the screen", "To turn off the computer"],
    c: 0,
    e: "To log out is to stop being the logged-in user. All your programs and sessions may end.",
    de: "Logging out is broader than closing the terminal—it ends your entire login. The terminal exit command only ends that shell."
  }),
  (_i: number) => ({
    q: "What is 'authentication'?",
    o: ["Proving who you are (e.g. with a password or key) so the system can log you in", "Running a command", "Editing a file", "Listing files"],
    c: 0,
    e: "Authentication is the process of proving your identity—usually with a password or key when you log in.",
    de: "The terminal runs as the user who is logged in. Commands that need higher privileges may ask for your password (e.g. sudo)."
  }),
  (_i: number) => ({
    q: "What is a 'password'?",
    o: ["A secret string you type to prove your identity (not shown on screen)", "A path", "A command", "A file"],
    c: 0,
    e: "A password is a secret you enter to authenticate. When you type it, nothing (or dots) usually appears on the screen.",
    de: "Never share your password. When the terminal asks for a password, it often will not show what you type—that is normal."
  }),
  (_i: number) => ({
    q: "What does 'remote' mean when we talk about a computer?",
    o: ["Another machine you connect to over a network (not the one in front of you)", "The same machine", "A backup server only", "The cloud only"],
    c: 0,
    e: "Remote means a different computer that you reach over a network—for example, via the internet or a local network.",
    de: "You can open a terminal session on a remote machine with tools like SSH. Then your commands run on that other computer."
  }),
  (_i: number) => ({
    q: "What is a 'network'?",
    o: ["A connection between computers so they can share data and resources", "The internet only", "A cable only", "A single computer"],
    c: 0,
    e: "A network links computers so they can talk to each other—send files, run remote commands, etc.",
    de: "The internet is a big network. Your home Wi-Fi is a small network. The terminal can use the network (e.g. SSH, curl) in later levels."
  }),
  (_i: number) => ({
    q: "What is the 'internet'?",
    o: ["The global network that connects millions of computers worldwide", "A single website", "A browser", "A cable"],
    c: 0,
    e: "The internet is the worldwide network. Your computer can connect to it to reach other machines and services.",
    de: "From the terminal you can use the internet (e.g. download files, run remote commands) with the right tools and commands."
  }),
  (_i: number) => ({
    q: "What is a 'browser'?",
    o: ["A program for viewing web pages (e.g. Chrome, Firefox)—different from the terminal", "The terminal", "A file", "A command"],
    c: 0,
    e: "A browser is an application for opening web pages. It is not the terminal, though both can use the network.",
    de: "You are reading this in a browser or an app. The terminal is separate—you use it to type commands, not to browse the web."
  }),
  (_i: number) => ({
    q: "What does 'to download' mean?",
    o: ["To copy something from another computer or the internet to your computer", "To delete something", "To run something", "To upload"],
    c: 0,
    e: "To download is to get a file or data from somewhere else (e.g. the internet) and save it on your machine.",
    de: "You can download from the terminal with commands like curl or wget. You will learn them in later levels."
  }),
  (_i: number) => ({
    q: "What does 'to upload' mean?",
    o: ["To send data from your computer to another computer or server", "To download", "To delete", "To run"],
    c: 0,
    e: "To upload is to send your file or data to another machine (e.g. a server or cloud).",
    de: "Opposite of download. Terminal tools like scp or rsync can upload files. You will see them in later levels."
  }),
  (_i: number) => ({
    q: "What is a 'server'?",
    o: ["A computer or program that provides services or data to other computers", "Your own computer only", "A type of file", "A command"],
    c: 0,
    e: "A server is a machine or program that serves others—for example, a web server or file server.",
    de: "You might connect to a server from your terminal (e.g. SSH). Your computer is then the 'client'; the server is 'remote.'"
  }),
  (_i: number) => ({
    q: "What is a 'client'?",
    o: ["A program or computer that requests services or data from a server", "The server", "A type of file", "The terminal only"],
    c: 0,
    e: "A client is what connects to a server and asks for something—for example, your terminal when you SSH to a server.",
    de: "Client and server work together: the client asks, the server responds. Your browser is a client when it loads a web page."
  }),
  (_i: number) => ({
    q: "What does 'to connect' mean in a network context?",
    o: ["To establish a link to another computer or service so you can send and receive data", "To plug a cable", "To run a command only", "To open a file"],
    c: 0,
    e: "To connect means to set up a link—e.g. to a remote machine or the internet—so you can exchange data.",
    de: "From the terminal you might connect to a remote server (e.g. SSH). Then your commands run on that server."
  }),
  (_i: number) => ({
    q: "What is a 'tool' in the context of the terminal?",
    o: ["A program or command that does a specific job (e.g. list files, search text)", "A physical device", "A file only", "The prompt"],
    c: 0,
    e: "A tool is a small program or command that does one job—ls, grep, cat are tools.",
    de: "The terminal gives you many small tools. You combine them (e.g. with pipes) to do bigger tasks. Unix philosophy: small tools, combine as needed."
  }),
  (_i: number) => ({
    q: "What is a 'utility'?",
    o: ["A small program or command that performs a useful task (similar to 'tool')", "A big application", "A file", "The shell"],
    c: 0,
    e: "A utility is a handy program—often a command-line tool that does one thing well.",
    de: "ls, cp, mv, grep are utilities. They are the building blocks of terminal work."
  }),
  (_i: number) => ({
    q: "What does 'to combine' commands mean?",
    o: ["To use several commands together (e.g. with pipes or in sequence) to do a bigger task", "To merge files only", "To run one command", "To delete output"],
    c: 0,
    e: "To combine commands means to use more than one—e.g. ls | grep txt—so the output of one feeds into the next.",
    de: "Pipes (|) and chaining (;) let you combine commands. You will learn this in Level 1 and beyond."
  }),
  (_i: number) => ({
    q: "What is a 'sequence' of commands?",
    o: ["Several commands run one after another (e.g. in a script or separated by ;)", "A single command", "A pipe only", "An error"],
    c: 0,
    e: "A sequence is multiple commands run in order. In a script they run one after another.",
    de: "You can type command1; command2 in the shell to run one then the other. Scripts are files full of such sequences."
  }),
  (_i: number) => ({
    q: "What does 'to automate' mean?",
    o: ["To have the computer do a task without doing every step by hand (e.g. with a script)", "To run one command", "To delete something", "To log in"],
    c: 0,
    e: "To automate is to set up the computer to do a task on its own—often by writing a script.",
    de: "Scripts automate: you run one command (the script), and it runs many steps. Saves time and reduces mistakes."
  }),
  (_i: number) => ({
    q: "What is a 'task' in the context of the terminal?",
    o: ["Something you want to do (e.g. list files, find a file, run a program)", "A single key press", "A file", "The prompt"],
    c: 0,
    e: "A task is a job you want to accomplish—listing files, changing directory, running a program, etc.",
    de: "You use one or more commands to complete a task. Learning the right commands for each task is what this app teaches."
  }),
  (_i: number) => ({
    q: "What does 'to search' mean in the context of files or text?",
    o: ["To look for something that matches (e.g. a filename or a word inside a file)", "To delete", "To run", "To copy"],
    c: 0,
    e: "To search is to find things that match—e.g. files with a certain name or lines containing a word.",
    de: "You will learn commands like find (for filenames) and grep (for text inside files) in later levels."
  }),
  (_i: number) => ({
    q: "What is a 'match' when searching?",
    o: ["Something that fits what you searched for (e.g. a file or line that matches the pattern)", "An error", "The first file only", "The command output"],
    c: 0,
    e: "A match is a result that fits your search—e.g. a file whose name matches, or a line that contains the text.",
    de: "When you search, the command lists matches. No matches often means no output (or a message)."
  }),
  (_i: number) => ({
    q: "What is a 'pattern' in the context of searching?",
    o: ["A description of what you are looking for (e.g. *.txt or a word)", "A type of file", "The output", "A command"],
    c: 0,
    e: "A pattern describes what to search for—e.g. *.txt for filenames ending in .txt, or a word for grep.",
    de: "Patterns can be simple (a word) or use wildcards and regular expressions. You will learn them step by step."
  }),
  (_i: number) => ({
    q: "What does 'to filter' mean?",
    o: ["To keep only what matches and hide the rest (e.g. only lines containing 'error')", "To delete everything", "To sort only", "To copy everything"],
    c: 0,
    e: "To filter is to show only part of the data—e.g. only lines that contain a certain word.",
    de: "grep filters lines. ls *.txt filters filenames. Filtering narrows down output to what you care about."
  }),
  (_i: number) => ({
    q: "What does 'to sort' mean?",
    o: ["To put items in order (e.g. alphabetical or by date)", "To delete duplicates", "To filter", "To randomize"],
    c: 0,
    e: "To sort is to arrange items in a order—alphabetical, by date, by size, etc.",
    de: "Commands can sort the output (e.g. ls -t for time, sort for lines). You will see sorting options in Level 1."
  }),
  (_i: number) => ({
    q: "What is 'alphabetical order'?",
    o: ["Order from A to Z (or Z to A) by letter", "Random order", "By date only", "By size only"],
    c: 0,
    e: "Alphabetical order is A–Z (or Z–A) by the first letter, then the second, and so on.",
    de: "Many listing and sort commands use alphabetical order by default. Case can matter (capital vs small letters) on some systems."
  }),
  (_i: number) => ({
    q: "What is a 'timestamp'?",
    o: ["A value that records when something happened (date and often time)", "A type of file", "A command", "The current time only"],
    c: 0,
    e: "A timestamp is a time value—when a file was modified, when a log entry was written, etc.",
    de: "Files have modification time. Logs often have timestamps. Commands like ls -l show them. You will learn to use and sort by time."
  }),
  (_i: number) => ({
    q: "What does 'size' mean for a file?",
    o: ["How much space the file uses (usually in bytes, or KB/MB/GB)", "The number of lines", "The number of words", "The age"],
    c: 0,
    e: "Size is how much storage the file takes—usually in bytes (or kilobytes, megabytes, etc.).",
    de: "ls -l shows file size. Large files take more space and may be slower to copy or open. You will see size in Level 1."
  }),
  (_i: number) => ({
    q: "What is a 'byte'?",
    o: ["A unit of data (often one character of text; 8 bits)", "A type of file", "A command", "A folder"],
    c: 0,
    e: "A byte is a small unit of data. Roughly one character in a text file is one byte. 1024 bytes = 1 KB.",
    de: "File sizes are in bytes (or KB, MB, GB). Understanding bytes helps when you talk about disk space and file sizes."
  }),
  (_i: number) => ({
    q: "What does 'to exist' mean for a file or folder?",
    o: ["It is present on the disk (you can open or use it)", "It is empty", "It is hidden", "It is large"],
    c: 0,
    e: "A file or folder exists if it is there—you can list it, open it, or use it in commands.",
    de: "If you refer to a file that does not exist, commands often give 'No such file or directory.' Check the path and name."
  }),
  (_i: number) => ({
    q: "What does 'no such file or directory' mean?",
    o: ["The path or name you gave does not exist (typo, wrong path, or deleted)", "The file is empty", "The file is hidden", "You have no permission"],
    c: 0,
    e: "The system could not find a file or folder with that name at that path. Check spelling and path.",
    de: "Common causes: typo in the name, wrong directory, or the file was moved/deleted. Use pwd and ls to see where you are and what is there."
  }),
  (_i: number) => ({
    q: "What does 'permission denied' mean?",
    o: ["You are not allowed to do that (e.g. read, write, or run)—the system blocked it", "The file does not exist", "The disk is full", "The command is wrong"],
    c: 0,
    e: "Permission denied means the system refused the action—you do not have the right to do that to this file or folder.",
    de: "You may need to change permissions (chmod) or run as another user (e.g. sudo). Do not force it without understanding; you could break things."
  }),
  (_i: number) => ({
    q: "What does 'to allow' or 'to permit' mean?",
    o: ["To give permission—to let someone or something do an action", "To forbid", "To delete", "To run"],
    c: 0,
    e: "To allow (permit) means to grant the right to do something—e.g. read, write, or execute a file.",
    de: "Permissions control what is allowed. The owner, group, and others can have different permissions. You will learn this in later levels."
  }),
  (_i: number) => ({
    q: "What is the 'owner' of a file?",
    o: ["The user who is considered to 'own' the file (often has full control)", "The computer", "The root user only", "The group"],
    c: 0,
    e: "The owner is the user account that owns the file. Usually the user who created it. The owner can change permissions.",
    de: "ls -l shows the owner. Only the owner (or root) can normally change permissions. You will see owner in Level 1."
  }),
  (_i: number) => ({
    q: "What is a 'group' in the context of files?",
    o: ["A set of users that share the same permissions on a file or folder", "A folder", "A type of file", "The owner"],
    c: 0,
    e: "A group is a set of users. A file can have an owner and a group; the group has its own set of permissions.",
    de: "So there are three permission sets: owner, group, and others. You will learn to set and change them in later levels."
  }),
  (_i: number) => ({
    q: "What does 'read-only' mean?",
    o: ["You can read the file but not change or delete it", "You cannot read it", "You can only run it", "It is empty"],
    c: 0,
    e: "Read-only means you can open and read the file, but you cannot modify or delete it.",
    de: "Some files are read-only on purpose (e.g. system files). You can copy them to a new file and edit the copy."
  }),
  (_i: number) => ({
    q: "What does 'executable' mean for a file?",
    o: ["The file can be run as a program or script", "It can only be read", "It is a document", "It is large"],
    c: 0,
    e: "Executable means the system allows you to run the file as a program. It needs execute permission.",
    de: "Scripts and programs are made executable (e.g. chmod +x). Then you can run them by name. You will learn this in Level 1."
  }),
  (_i: number) => ({
    q: "What is a 'directory tree' or 'folder tree'?",
    o: ["The structure of folders and subfolders (like a tree: root, branches, leaves)", "A single folder", "A list of files only", "A command"],
    c: 0,
    e: "The directory tree is the hierarchy: root at the top, then folders, then subfolders and files.",
    de: "You navigate the tree with cd. Paths describe a path through the tree—e.g. /home/user/Documents/file.txt."
  }),
  (_i: number) => ({
    q: "What is 'hierarchy'?",
    o: ["A structure of levels (e.g. top to bottom: root → folders → subfolders → files)", "A single level", "A flat list", "A command"],
    c: 0,
    e: "Hierarchy means levels—something contains something else. The filesystem is a hierarchy of directories and files.",
    de: "Understanding hierarchy helps with paths: .. goes up one level, and / separates levels in a path."
  }),
  (_i: number) => ({
    q: "What does 'to navigate' the filesystem mean?",
    o: ["To move from folder to folder (e.g. with cd) to reach the place you want", "To search only", "To list only", "To delete"],
    c: 0,
    e: "To navigate is to move through folders—going into subfolders or up to the parent—until you are where you need to be.",
    de: "You use cd path to navigate. pwd shows where you are. Navigation is one of the first skills in Level 1."
  }),
  (_i: number) => ({
    q: "What is the 'top' of the directory tree called?",
    o: ["The root (often written /)", "The home directory", "The desktop", "The current directory"],
    c: 0,
    e: "The top is the root—the one directory that contains everything else. On Linux/macOS it is /.",
    de: "All absolute paths start from root. Your home directory is somewhere under root, e.g. /home/username."
  }),
  (_i: number) => ({
    q: "What does 'nested' mean for folders?",
    o: ["One folder is inside another (e.g. A/B/C has C nested in B, B nested in A)", "Empty", "Hidden", "At the root"],
    c: 0,
    e: "Nested means one inside another. Nested folders are subfolders within subfolders.",
    de: "Path like /home/user/docs/2024 has 2024 nested in docs, docs in user, user in home. Nested = deeper in the tree."
  }),
  (_i: number) => ({
    q: "What is a 'full path' or 'absolute path'?",
    o: ["A path that starts from the root and uniquely identifies a file or folder", "A short path", "A relative path", "A filename only"],
    c: 0,
    e: "A full (absolute) path starts at the root (e.g. /) and lists every folder down to the file. It works from any directory.",
    de: "Example: /home/user/Documents/report.txt. No matter where you are, this path points to the same file."
  }),
  (_i: number) => ({
    q: "What is a 'relative path'?",
    o: ["A path that is relative to your current directory (e.g. docs/file.txt)", "A path from root", "A full path", "A URL"],
    c: 0,
    e: "A relative path is from 'here'—your current directory. So docs/file.txt means file.txt inside the docs folder that is here.",
    de: "If you are in /home/user, then docs/file.txt means /home/user/docs/file.txt. Shorter and depends on where you are."
  }),
];
