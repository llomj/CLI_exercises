// LEVEL 0: TADPOLE — Absolute beginner, assumes no terminal knowledge (100 questions)
// Very easy: what is a terminal, what is a command, what key to press, etc.

const beginner = [
  (_i: number) => ({
    q: "What is a terminal?",
    o: ["A window where you type text commands for the computer", "A type of computer", "A programming language", "A kind of cable"],
    c: 0,
    e: "A terminal is a text-based window where you type commands instead of clicking with a mouse.",
    de: "The terminal is a window where you control the computer by typing text instructions instead of clicking icons.\n\nKey ideas:\n• It is also called the command line or CLI (Command Line Interface).\n• You type a command and press Enter; the computer runs it and may show text output.\n• It is different from a graphical interface (windows, icons, mouse).\n\nExample: When you open an app named Terminal, Command Prompt, or similar, you get a terminal. Learning to use it helps you run powerful tools and automate tasks.",
    deBeginner: "A terminal is a window where you type words (commands) to tell the computer what to do, instead of clicking with the mouse.",
    deExpert: "The terminal (also called command line or CLI) is a text-based interface where you control the computer by typing commands and reading text output. Unlike a GUI (graphical user interface), there are no icons or menus to click—you type instructions and press Enter. The shell (e.g. Bash, Zsh) runs inside the terminal and interprets your commands. This interface is essential for scripting, server administration, development tools (Git, npm, make), and any workflow that benefits from repeatability and automation. On Unix-like systems the terminal is the primary way to compose powerful one-liners and pipelines."
  }),
  (_i: number) => ({
    q: "What do we call an instruction you type for the computer to run?",
    o: ["A command", "A click", "A file", "A window"],
    c: 0,
    e: "A command is the instruction you type. The computer then runs it.",
    de: "A command is the instruction you type so the computer does something.\n\nKey ideas:\n• Commands are usually short words or phrases (e.g. ls, cd, pwd) that you type and then press Enter.\n• The computer runs the command and may print output or change something (e.g. open a folder, list files).\n• If you type something that is not a valid command, you may see an error like 'command not found'.\n\nExample: Typing ls and pressing Enter is one command. You will learn many commands step by step in this app.",
    deBeginner: "A command is the word or short phrase you type so the computer does something. You press Enter to run it.",
    deExpert: "A command is a discrete instruction you type (e.g. ls, cd, pwd); the shell looks it up in PATH, executes the corresponding program, and may produce stdout/stderr and an exit code. Commands can take arguments and options (flags). Invalid names or typos yield 'command not found' because the shell finds no executable with that name. In scripts, commands are often chained with pipes and redirects; understanding commands as programs with stdin/stdout/stderr is key to CLI fluency."
  }),
  (_i: number) => ({
    q: "Which key do you usually press to run the command you just typed?",
    o: ["Enter (or Return)", "Space", "Escape", "Tab"],
    c: 0,
    e: "Pressing Enter tells the computer to run the command you typed.",
    de: "You press Enter (or Return) to run the command you just typed.\n\nKey ideas:\n• Until you press Enter, the command is not run—you can still edit or delete what you typed.\n• After you press Enter, the computer runs the command and may show output on the next lines.\n• On most keyboards the key is labeled Enter or has a bent arrow.\n\nExample: Type a command, then press Enter once. Do not hold the key; one press is enough.",
    deBeginner: "You press Enter (or Return) to run the command. Until you press it, nothing happens.",
    deExpert: "Enter (or Return) sends the current line to the shell; the shell then parses and executes it. Until then, the line is only in the edit buffer—you can use Backspace, arrow keys, or Ctrl+U/Ctrl+W to edit. In many shells, Ctrl+C cancels the line without running it. Multi-line input (e.g. in bash with unclosed quotes) waits for the closing quote before executing. Understanding 'line discipline' helps with scripting and interactive use."
  }),
  (_i: number) => ({
    q: "What is a directory?",
    o: ["A folder that can hold files and other folders", "A type of file", "A command", "A key on the keyboard"],
    c: 0,
    e: "A directory is the same as a folder—a place that can contain files and other folders.",
    de: "A directory is a place that can hold files and other directories (subfolders). It is the same as a folder.\n\nKey ideas:\n• In the terminal we usually say 'directory' instead of 'folder,' but they mean the same thing.\n• Directories can be nested: a directory can contain other directories, which can contain more files and directories.\n• Commands like ls list the contents of a directory; cd lets you move into a directory.\n\nExample: Your Documents folder is a directory. Inside it you might have more folders (directories) and files.",
    deBeginner: "A directory is the same as a folder. It can hold files and other folders inside it.",
    deExpert: "A directory is an inode that maps names to other inodes (files or subdirectories), forming a hierarchy. The term 'directory' is standard in Unix/CLI; 'folder' is the GUI metaphor. Paths like /home/user/docs are directory paths. Commands such as ls, cd, mkdir, and rmdir operate on directories. The current directory (.) and parent (..) are special entries in every directory. Understanding the directory tree is essential for paths, globbing, and tools like find."
  }),
  (_i: number) => ({
    q: "What is a file?",
    o: ["Data saved with a name (e.g. document, image)", "A command", "The blinking line in the terminal", "A key"],
    c: 0,
    e: "A file is data stored with a name, like a document or a picture.",
    de: "A file is data saved under a name on the computer (e.g. a document, a picture, or a script).\n\nKey ideas:\n• Files live inside directories. Each file has a name and often an extension (e.g. .txt, .jpg).\n• In the terminal you can list files, read them, create them, copy them, move them, or delete them using commands.\n• A file is different from a directory: a directory contains other items; a file holds the actual data.\n\nExample: report.txt is a file. The terminal can show it in a listing, open it, or change it with the right commands.",
    deBeginner: "A file is something saved with a name, like a document or a picture. It lives inside a folder (directory).",
    deExpert: "A file is an inode that holds data (bytes); it has a name within a directory and optionally an extension. Files can be regular files, device nodes, sockets, or symlinks (the latter are directory entries pointing to other inodes). CLI tools (cat, grep, sed, redirects) operate on file contents or metadata. Permissions, ownership, and timestamps are stored in the inode. Understanding files vs. directories and how paths resolve is fundamental to shell scripting and system administration."
  }),
  (_i: number) => ({
    q: "What is the prompt?",
    o: ["The text that appears before the place where you type", "A command to run", "An error message", "The title of the window"],
    c: 0,
    e: "The prompt is the short text (often ending with $ or %) that shows where you type.",
    de: "The prompt is the short text that appears at the start of the line where you type. It often ends with $ or %.\n\nKey ideas:\n• It means 'the computer is ready for your next command.' You type after the prompt.\n• It may show your username, the current directory, or the computer name—depending on how the terminal is set up.\n• You do not type the prompt itself; you type your command after it.\n\nExample: If you see user@machine:~$ then user@machine:~$ is the prompt. You type your command after the space.",
    deBeginner: "The prompt is the short text at the start of the line (often ending with $). It means the computer is ready; you type your command after it.",
    deExpert: "The prompt is the string the shell prints (via PS1) to indicate readiness for input. It often includes user, hostname, and cwd (e.g. user@host:~$). You do not type it; you type after it. Customizing PS1/PS2 is common for showing git branch, exit code, or time. The prompt is part of the readline/edit buffer line; understanding this helps with scripting and terminal control."
  }),
  (_i: number) => ({
    q: "If you see 'command not found' after typing something, what does it usually mean?",
    o: ["The computer does not recognize the word you typed as a command", "The command worked", "The file was deleted", "You need to press Enter"],
    c: 0,
    e: "It means the name you typed is not a known command—maybe a typo or a command that is not installed.",
    de: "'Command not found' means the computer does not recognize what you typed as a valid command.\n\nKey ideas:\n• Common causes: a typo (e.g. ls vs ls), a wrong command name, or a command that is not installed on your system.\n• The computer only runs commands it knows. Check your spelling and that you are using a real command name.\n• In this app you will learn correct command names (e.g. ls, cd, pwd) so you can avoid this error.\n\nExample: If you type lls instead of ls, you may see 'command not found.' Fix the typo and try again.",
    deBeginner: "It means the computer doesn't know that word as a command. Check for typos or use a command you've learned.",
    deExpert: "'Command not found' is printed by the shell when the first word of the line is not a builtin and no executable of that name is found in PATH. Causes: typo, wrong name, command not installed, or PATH missing the binary's directory. Use 'which' or 'type' to see what would run; check PATH (echo $PATH) and install the package if needed. In scripts, avoid relying on commands that may not be in PATH."
  }),
  (_i: number) => ({
    q: "What is the cursor in the terminal?",
    o: ["The blinking line or block where your typing appears", "The mouse pointer", "The first line of text", "A command"],
    c: 0,
    e: "The cursor is the blinking spot that shows where the next character will appear when you type.",
    de: "The cursor is the blinking line or block that shows where the next character will appear when you type.\n\nKey ideas:\n• You type at the cursor. It moves to the right as you type and moves when you use the arrow keys.\n• It is not the mouse pointer; it stays on the line where you are entering text.\n• Before you press Enter, you can move the cursor to fix typos or add more text.\n\nExample: When you see a blinking line after the prompt, that is the cursor. Everything you type appears at that spot.",
    deBeginner: "The cursor is the blinking line or block where what you type appears. Use the arrow keys to move it to fix mistakes.",
    deExpert: "The cursor marks the insertion point in the current line (managed by readline or the terminal's line discipline). It is distinct from the mouse pointer. Arrow keys, Home/End, and readline shortcuts (Ctrl+A/E, Ctrl+U/K) move or edit. In raw terminal mode, applications control the cursor (e.g. vim, less); in line-editing mode, the shell does. Understanding this avoids confusion when piping or redirecting."
  }),
  (_i: number) => ({
    q: "Is the terminal the same as a web browser?",
    o: ["No", "Yes", "Only on Windows", "Only on Mac"],
    c: 0,
    e: "No. A browser shows web pages; the terminal is for typing commands.",
    de: "No. The terminal and a web browser are different.\n\nKey ideas:\n• A web browser (e.g. Chrome, Firefox) is for opening web pages and clicking links. You use it to surf the internet.\n• The terminal is for typing commands to control the computer: run programs, manage files, and use tools that do not have a graphical interface.\n• You open the terminal as a separate app (e.g. Terminal, Command Prompt, or an app named 'terminal').\n\nExample: To use the terminal, open the Terminal or Command Prompt app—not the browser.",
    deBeginner: "No. A browser is for websites. The terminal is for typing commands to control your computer. They are different apps.",
    deExpert: "No. A browser is a GUI application that renders HTML/CSS/JS and handles HTTP(S). The terminal is a character-oriented interface (often a PTY) to a shell, which runs local commands and has no built-in notion of web pages. Server work, DevOps, and many dev tools (Git, Docker, npm) are driven from the terminal, not the browser. Some web-based terminals (e.g. in IDEs) embed a terminal in a browser window but the concepts remain distinct."
  }),
  (_i: number) => ({
    q: "What do we call the place where you type commands?",
    o: ["The command line (or terminal)", "The desktop", "The menu bar", "The taskbar"],
    c: 0,
    e: "The command line is the line in the terminal where you type; the whole window is the terminal.",
    de: "The place where you type commands is called the command line. The whole window is the terminal.\n\nKey ideas:\n• The command line is the line where you see the prompt and type your command. The terminal is the full window (prompt, your typing, and output).\n• People often use 'command line' and 'terminal' to mean the same thing: the text interface where you run commands.\n• You interact by typing on the command line and reading the output that appears below.\n\nExample: When someone says 'use the command line,' they mean: open the terminal and type commands there.",
    deBeginner: "The place where you type is the command line. The whole window is the terminal. People often say 'command line' to mean both.",
    deExpert: "Strictly: the command line is the current input line (where you type); the terminal is the emulator (e.g. iTerm2, GNOME Terminal) providing a PTY. Colloquially both are used for the CLI. The shell reads from the terminal's stdout and writes to it; stdin/stdout/stderr are the three streams. Scripts run without an interactive command line but still use the same streams when invoked from a terminal."
  }),
  (_i: number) => ({
    q: "What is the 'current directory'?",
    o: ["The folder you are in right now", "The first folder on the computer", "The desktop", "A file you just opened"],
    c: 0,
    e: "The current directory is the folder the terminal is 'in' at the moment. Commands often apply to this folder.",
    de: "The current directory is the folder the terminal is 'in' right now. Many commands use it by default.\n\nKey ideas:\n• When you open a terminal it starts in a default folder (often your home folder). You can change the current directory with commands like cd.\n• Commands that list or create files often do so in the current directory unless you specify another path.\n• Knowing where you are (current directory) helps you understand where files will be created or listed.\n\nExample: If you are 'in' Documents, the current directory is Documents. A command that lists files will list the contents of Documents.",
    deBeginner: "The current directory is the folder you are 'in' right now. Many commands work on this folder unless you say otherwise.",
    deExpert: "The current (working) directory is the process's idea of 'where you are'; the shell maintains it in the PWD variable (and cwd in the kernel). Commands that take paths resolve relative paths from it; creation (e.g. touch, mkdir) uses it when no path is given. cd changes it; each shell/subshell has its own. Scripts should not assume a particular cwd—use absolute paths or set it explicitly. pwd prints it."
  }),
  (_i: number) => ({
    q: "What is the home directory?",
    o: ["Your personal folder (often for your documents and files)", "The main folder of the computer", "The desktop", "A temporary folder"],
    c: 0,
    e: "The home directory is your personal main folder, usually where your documents and settings live.",
    de: "The home directory is your personal main folder on the computer. It is usually where your documents and settings are stored.\n\nKey ideas:\n• On many systems it has a path like /home/username (Linux) or C:\\Users\\YourName (Windows). The terminal often starts there when you open it.\n• Each user has one home directory. It is the top-level place for your own files.\n• You will learn a command to go back to your home directory from anywhere (e.g. cd with no arguments).\n\nExample: When you open a new terminal, you are often already in your home directory.",
    deBeginner: "The home directory is your main personal folder (e.g. where your documents live). The terminal often starts there.",
    deExpert: "The home directory is the user's default login directory, set in /etc/passwd (getpwuid); the shell exposes it as $HOME (and ~ in word expansion). Typical paths: /home/user (Linux), /Users/name (macOS), C:\\Users\\Name (Windows). Dotfiles (.bashrc, .ssh) live here. cd with no args goes to $HOME. Many tools (git, npm) use it for config; portable scripts use $HOME rather than hardcoding paths."
  }),
  (_i: number) => ({
    q: "What does 'to list' mean when we talk about files?",
    o: ["To show the names of files and folders", "To delete them", "To copy them", "To create them"],
    c: 0,
    e: "ToList means to show the names of files and folders in a directory.",
    de: "'To list' means to show the names of files and folders in a directory so you can see what is there.\n\nKey ideas:\n• You do not open or run each file—you just see their names (and sometimes details like size or date).\n• In the terminal you will use a command called ls (list) to do this. It is one of the first commands you will learn.\n• Listing is read-only: it does not change, delete, or move anything.\n\nExample: Listing a folder shows you something like: file1.txt, file2.txt, MyFolder. That is a list of what is inside.",
    deBeginner: "To list means to show the names of files and folders in a folder. You don't open them—you just see the names.",
    deExpert: "Listing means reading directory entries (getdents/readdir) and presenting names (and optionally metadata). ls is the canonical command; it does not open file contents. Listing is read-only on the directory inode. Options like -l show metadata (permissions, owner, size, mtime); -a shows dotfiles. Scripts often use ls with globs or find instead of parsing ls output (use readdir or find -print0)."
  }),
  (_i: number) => ({
    q: "What does 'to navigate' mean in the context of folders?",
    o: ["To move from one folder to another", "To delete folders", "To rename files", "To create files"],
    c: 0,
    e: "To navigate means to move from folder to folder (e.g. going 'into' or 'up' from a folder).",
    de: "To navigate means to move from one folder to another—for example, going 'into' a subfolder or 'up' to the parent folder.\n\nKey ideas:\n• You are always 'in' one directory at a time (the current directory). Navigating changes which directory that is.\n• In the terminal you use a command like cd (change directory) to navigate: cd folderName goes in, cd .. goes up.\n• Navigating does not move or copy files; it only changes where you are in the folder tree.\n\nExample: Going from Documents into Documents/Projects is navigating. You are now 'in' Projects.",
    deBeginner: "To navigate means to move from one folder to another—going 'into' a folder or 'up' to the folder that contains the one you're in.",
    deExpert: "Navigating means changing the shell's current working directory (e.g. cd path). cd dir enters dir (relative to cwd); cd .. goes to the parent; cd with no args goes to $HOME. Paths are resolved at cd time; symlinks are followed. There is no 'movement' of files—only the shell's cwd changes. pushd/popd (in bash) maintain a directory stack for toggling between locations."
  }),
  (_i: number) => ({
    q: "What is a path?",
    o: ["The location of a file or folder (e.g. which folders it is inside)", "A command", "A type of file", "The prompt"],
    c: 0,
    e: "A path describes where something is—for example, which folders you go through to reach a file.",
    de: "A path is the 'address' of a file or folder—it describes where it is in the folder tree.\n\nKey ideas:\n• Paths look like folder1/folder2/file.txt or C:\\Users\\Name\\file.txt. They uniquely identify one file or folder.\n• A path can be absolute (from the root of the disk) or relative (from your current directory).\n• When you run commands, you often give a path to say which file or folder to use.\n\nExample: Documents/report.txt is a path. It means the file report.txt inside the Documents folder.",
    deBeginner: "A path is the 'address' of a file or folder—like folder/subfolder/file.txt. It says where the file lives.",
    deExpert: "A path is a string that identifies a file or directory in the hierarchy. Absolute paths start from root (/ on Unix, or C:\\ on Windows); relative paths are resolved from the current directory. Components are separated by / (or \\ on Windows). . and .. are special. The kernel resolves paths via namei; symlinks are followed. Path length limits (PATH_MAX) and normalization (resolving . and ..) matter for portable scripts. Quoting is important when paths contain spaces."
  }),
  (_i: number) => ({
    q: "What is the keyboard used for in the terminal?",
    o: ["Typing commands and text", "Only for Enter", "Only for Escape", "Nothing"],
    c: 0,
    e: "You use the keyboard to type commands, fix typos, and press Enter to run them.",
    de: "In the terminal you use the keyboard to type commands and text, fix typos, and press Enter to run commands.\n\nKey ideas:\n• The terminal is keyboard-driven: you type, then press Enter. The mouse is less important for basic use.\n• Arrow keys move the cursor so you can edit the line before pressing Enter. Backspace deletes the character before the cursor.\n• Special keys: Enter runs the command, Tab can complete words, Escape may cancel the line (depending on the terminal).\n\nExample: To run a command you type it with the keyboard and press Enter. No need to click a 'Run' button.",
    deBeginner: "You use the keyboard to type commands and press Enter to run them. Arrow keys and Backspace help you fix typos.",
    deExpert: "The terminal is keyboard-centric: input is via stdin (keyboard by default). The shell uses readline for line editing (Ctrl+A/E, Ctrl+U/K, Tab completion). Special keys (Enter, Ctrl+C, Ctrl+D) have semantic meaning. Scripts read from stdin; redirects and pipes replace keyboard input with files or other commands' output. Understanding stdin/stdout/stderr is essential for pipelines and automation."
  }),
  (_i: number) => ({
    q: "What is the difference between a file and a folder (directory)?",
    o: ["A folder can contain files and other folders; a file holds data", "They are the same", "A file is bigger", "A folder is always empty"],
    c: 0,
    e: "A folder (directory) can contain files and other folders. A file is a single named piece of data.",
    de: "A folder (directory) can contain files and other folders. A file is a single named piece of data—it does not contain other files or folders.\n\nKey ideas:\n• Think of folders as drawers or boxes: they hold things (files and other folders). A file is the actual document or data.\n• In the terminal, commands often treat them differently: for example, you might list the contents of a directory but read or edit a file.\n• Both have names and paths; the difference is that a directory 'contains' while a file 'holds data'.\n\nExample: Documents is a folder; report.txt inside it is a file. The folder contains the file.",
    deBeginner: "A folder (directory) can hold files and other folders. A file holds data (like a document) and cannot hold other files.",
    deExpert: "A directory is an inode with type S_IFDIR whose data is a table of name→inode mappings. A regular file is an inode with type S_IFREG holding opaque bytes. Directories contain entries (including . and ..); files do not. Commands like ls operate on directory inodes; cat, grep on file contents. Symlinks are a third type (S_IFLNK). The distinction is fundamental to path resolution and tools (rm -r vs rm)."
  }),
  (_i: number) => ({
    q: "What does 'to run' or 'to execute' a command mean?",
    o: ["To tell the computer to do what the command says", "To type it again", "To delete it", "To copy it"],
    c: 0,
    e: "To run (or execute) a command means to press Enter so the computer performs that instruction.",
    de: "To run (or execute) a command means to tell the computer to do what the command says—usually by pressing Enter after typing it.\n\nKey ideas:\n• Typing the command only prepares it. Running it happens when you press Enter; then the computer carries it out.\n• After you run a command, the computer may print output, change files, or do something else. If something goes wrong, you may see an error message.\n• You can run the same command many times; each time you press Enter, it runs again.\n\nExample: You type ls and press Enter. Pressing Enter is what 'runs' the command. The computer then lists the files.",
    deBeginner: "To run a command means to press Enter so the computer does what the command says. Typing alone is not enough—you must press Enter.",
    deExpert: "To run (execute) a command: the shell parses the line, performs expansions (variable, glob, command substitution), then either runs a builtin or fork/execs an external program with argv and environment. The process gets stdin/stdout/stderr (often the terminal). Exit status is captured in $?. Pipes and redirects set up file descriptors before exec. Understanding this model is key to scripting, subshells, and process control."
  }),
  (_i: number) => ({
    q: "What is 'output' in the terminal?",
    o: ["The text the computer prints after you run a command", "The command you type", "An error", "The prompt"],
    c: 0,
    e: "Output is the text that appears on the screen as a result of running a command.",
    de: "Output is the text (or other result) the computer prints or shows after you run a command.\n\nKey ideas:\n• It usually appears on the next lines in the same terminal window, below the line where you typed the command.\n• Output can be a list of files, a message, an error, or any text the command produces.\n• Reading the output tells you what the command did. Sometimes there is no output—that can still mean the command succeeded.\n\nExample: If you run a command that lists files, the list of names is the output. You read it on the screen.",
    deBeginner: "Output is the text the computer prints after you run a command. It appears below the line where you typed.",
    deExpert: "Output typically means stdout (fd 1): the stream a command writes its normal results to. By default it goes to the terminal; it can be redirected (>, >>) or piped (|) to another command. stderr (fd 2) is for errors and diagnostics. Exit code (echo $?) is separate from output. In pipelines, one command's stdout becomes the next's stdin. Buffering (line vs full buffering) affects when output appears."
  }),
  (_i: number) => ({
    q: "What is 'input' in the terminal?",
    o: ["What you type (your commands and key presses)", "What the computer prints", "The prompt", "A file"],
    c: 0,
    e: "Input is what you give to the computer—the commands and text you type.",
    de: "Input is what you give to the computer—the commands and text you type with the keyboard.\n\nKey ideas:\n• You provide input by typing. The computer then uses that input (e.g. to run a command) and may produce output in response.\n• Input is your side; output is the computer's side. You type input, the computer prints output.\n• Input can be a single command, or later you will see commands that read input from a file or from another command (pipes).\n\nExample: When you type ls and press Enter, 'ls' and the Enter key are your input. The list of files the computer prints is the output.",
    deBeginner: "Input is what you type—your commands and key presses. The computer uses your input and may print output in return.",
    deExpert: "Input typically means stdin (fd 0): the stream a command reads from. Interactively it is the keyboard; in pipelines it is the previous command's stdout. Redirects (<, <<) provide input from files or heredocs. Many tools (grep, sort, cat) read stdin when given no file args. Understanding stdin is essential for pipes (cmd1 | cmd2) and scripting (while read line)."
  }),
  (_i: number) => ({
    q: "What is a program?",
    o: ["Software that does a specific job (e.g. list files, edit text)", "A file only", "A folder", "The terminal"],
    c: 0,
    e: "A program is software that performs a task. Commands in the terminal often run programs.",
    de: "A program is software that does a specific job—for example, list files, edit text, or search the web.\n\nKey ideas:\n• When you type a command like ls, you are running a small program that lists files. Each command is usually a program.\n• Programs can show text, change files, or do other work. The terminal is a way to start programs by typing their name instead of clicking an icon.\n• Many tools you will learn (ls, cd, grep, etc.) are programs. The terminal runs them when you type the command and press Enter.\n\nExample: The ls command is a program. When you run it, you start that program and see its output on the screen.",
    deBeginner: "A program is software that does a job. When you type a command like ls, you are running a program. The terminal lets you start programs by typing their name.",
    deExpert: "A program is an executable (binary or script) the shell runs via exec. The shell looks up the name in PATH and executes the file; arguments become argv[1..n]. Builtins (cd, echo) run in the shell process; external commands run in a forked child. Environment variables are inherited. Understanding processes, PATH, and exec is key to debugging 'command not found' and writing portable scripts."
  }),
  (_i: number) => ({
    q: "What is an operating system?",
    o: ["The main software that runs the computer (e.g. Windows, macOS, Linux)", "A single program", "A type of file", "The terminal app"],
    c: 0,
    e: "The operating system (OS) is the core software that manages the computer. Windows, macOS, and Linux are examples.",
    de: "The terminal is a program that runs on the OS. It lets you run other programs and work with files.",
    deBeginner: "The operating system (OS) is the main software that runs the computer. The terminal is a program that runs on the OS.",
    deExpert: "The OS (kernel + userspace) manages hardware, processes, and the filesystem. The terminal and shell are userspace programs; they use OS APIs (e.g. open, read, exec). Unix-like systems (Linux, macOS) share a common CLI culture; Windows has its own (cmd, PowerShell). Cross-platform scripts must account for path and tool differences."
  }),
  (_i: number) => ({
    q: "What does 'CLI' stand for?",
    o: ["Command Line Interface", "Computer List Input", "Central Line Index", "Click List Item"],
    c: 0,
    e: "CLI means Command Line Interface—you type commands instead of clicking.",
    de: "A CLI is text-based: you type commands and read text output. The opposite is a GUI (graphical user interface).",
    deBeginner: "CLI means Command Line Interface. You type commands and see text. The opposite is a GUI (clicking with the mouse).",
    deExpert: "CLI: Command Line Interface—interaction via text commands and line-oriented I/O (stdin/stdout/stderr). Contrast with GUI (graphical). CLIs are scriptable, automatable, and standard in servers and dev tools. Many programs offer both (e.g. git has git commit and GUI frontends)."
  }),
  (_i: number) => ({
    q: "What is a GUI?",
    o: ["A graphical interface with windows, icons, and mouse clicks", "A type of command", "A kind of file", "The prompt"],
    c: 0,
    e: "GUI means Graphical User Interface—windows, icons, menus, and mouse instead of only text.",
    de: "Most apps use a GUI. The terminal is a CLI. Both let you control the same computer in different ways.",
    deBeginner: "GUI means Graphical User Interface—windows, icons, and mouse. Most apps use a GUI; the terminal is a CLI.",
    deExpert: "GUI: Graphical User Interface—windows, widgets, mouse, and visual feedback. The terminal/CLI is character-based. Headless servers often have no GUI; automation and scripting favor CLI. Hybrid workflows (IDE + terminal, browser + curl) are common."
  }),
  (_i: number) => ({
    q: "What does 'case-sensitive' mean?",
    o: ["Capital and small letters are different (e.g. A vs a)", "Everything must be capitals", "Spaces do not matter", "Only numbers are allowed"],
    c: 0,
    e: "Case-sensitive means the computer treats A and a as different characters.",
    de: "In the terminal and on many systems, File.txt and file.txt can be two different files. Spelling and case matter.",
    deBeginner: "Case-sensitive means capital and small letters are different. File.txt and file.txt can be two different files.",
    deExpert: "Case-sensitive: distinct treatment of letter case (A vs a). Unix filesystems and most CLI tools are case-sensitive; Windows is often case-insensitive. Command names (LS vs ls), variables ($PATH), and file paths are all case-sensitive on Linux/macOS. Scripts must use exact case."
  }),
  (_i: number) => ({
    q: "What is a typo?",
    o: ["A typing mistake (e.g. wrong letter or missing character)", "A kind of file", "A command", "The prompt"],
    c: 0,
    e: "A typo is a mistake in what you typed—wrong letter, extra letter, or missing character.",
    de: "Typos in commands often lead to 'command not found.' Check your spelling and try again.",
    deBeginner: "A typo is a typing mistake—wrong or missing letter. Typos in commands often cause 'command not found.'",
    deExpert: "A typo is an unintentional character error. In commands it causes wrong or non-existent names (command not found). Use readline (arrow keys, Ctrl+U) to edit before Enter. In scripts, typos can cause subtle bugs; linting and tests help catch them."
  }),
  (_i: number) => ({
    q: "What is an error message?",
    o: ["Text from the computer saying something went wrong", "A successful result", "The prompt", "A command"],
    c: 0,
    e: "An error message is text the computer shows when something failed (e.g. command not found, file not found).",
    de: "Error messages help you fix the problem. Read them to see what went wrong.",
    deBeginner: "An error message is text the computer shows when something went wrong. Read it to understand and fix the problem.",
    deExpert: "Error messages are typically written to stderr (fd 2) by programs when something fails. They may include errno-based strings (e.g. 'No such file or directory'). Exit code (non-zero) indicates failure. Parsing stderr is common in scripting; redirect 2>&1 to merge with stdout when needed."
  }),
  (_i: number) => ({
    q: "When we say a command 'succeeded', what do we mean?",
    o: ["It ran without an error and did what it was supposed to do", "It printed a lot of text", "You pressed Enter", "The window closed"],
    c: 0,
    e: "Succeeded means the command ran correctly and did its job (even if it did not print anything).",
    de: "Many commands print nothing when they succeed. Errors usually produce an error message.",
    deBeginner: "Succeeded means the command did its job correctly. Many commands print nothing when they succeed; that's normal.",
    deExpert: "Success is indicated by exit status 0 (convention). The shell stores it in $?. Non-zero means failure; 1–255 are used for different error conditions. Scripts should check $? or use set -e. Silent success (no stdout) is common (e.g. touch, mkdir); don't assume output means success."
  }),
  (_i: number) => ({
    q: "What is a filename?",
    o: ["The name of a file (e.g. report.txt, photo.jpg)", "A command", "The path", "The prompt"],
    c: 0,
    e: "The filename is the name of the file. It often has an extension like .txt or .jpg.",
    de: "Examples: report.txt, data.csv. The extension can indicate the type of file.",
    deBeginner: "The filename is the name of the file, e.g. report.txt. The part after the dot (.txt) is the extension.",
    deExpert: "Filename: the name component in a path (the last segment). May contain any bytes except / and NUL; avoid leading dots if not intentional (hidden files). Extensions are convention, not enforced. Quoting is required when names contain spaces or glob characters."
  }),
  (_i: number) => ({
    q: "What is a file extension?",
    o: ["The part after the dot in a filename (e.g. .txt in report.txt)", "The full path", "A command", "The folder name"],
    c: 0,
    e: "The extension is the part after the last dot, like .txt or .jpg. It often indicates the file type.",
    de: "Common extensions: .txt (text), .jpg (image), .pdf (document). The computer may use them to choose how to open the file.",
    deBeginner: "The extension is the part after the dot in the filename (e.g. .txt in report.txt). It often shows the file type.",
    deExpert: "Extension: the suffix after the last dot (e.g. .txt, .tar.gz). Purely conventional on Unix; the kernel does not enforce types. Some tools (compilers, open) use it for heuristics. Hidden files often have no extension (e.g. .bashrc). Don't rely on extensions for security or type checks—use file or magic bytes."
  }),
  (_i: number) => ({
    q: "What is the 'root' of the filesystem?",
    o: ["The top-level folder that contains all other folders and files", "Your home folder", "The desktop", "A temporary folder"],
    c: 0,
    e: "The root is the very top of the folder tree—the one folder that contains everything else on the disk.",
    de: "On Linux and macOS it is written as /. On Windows it is often C:\\. All paths start from there.",
    deBeginner: "The root is the top folder of the disk. On Linux and Mac it is written /. All other folders are inside it.",
    deExpert: "Root (/) is the single top-level directory in the Unix hierarchy; all absolute paths start there. On Windows, each volume has a root (e.g. C:\\)). The root inode is fixed; path resolution starts there for absolute paths. / is also the path separator in Unix; Windows uses \\ (and often accepts /)."
  }),
  (_i: number) => ({
    q: "What is a subfolder?",
    o: ["A folder that is inside another folder", "The main folder", "A file", "The desktop"],
    c: 0,
    e: "A subfolder is a folder inside another folder. Example: Documents/Projects is a subfolder of Documents.",
    de: "Folders can contain subfolders, which can contain more subfolders, forming a tree.",
    deBeginner: "A subfolder is a folder that is inside another folder. Example: Projects inside Documents.",
    deExpert: "A subfolder is any directory that is a direct child of another; the parent's directory entry points to it. The hierarchy forms a tree. Paths like a/b/c denote c as a subfolder of b, b of a. Recursive operations (find, rm -r) traverse subfolders."
  }),
  (_i: number) => ({
    q: "What is the 'parent' folder?",
    o: ["The folder that contains the folder you are in", "The root", "The home folder", "The desktop"],
    c: 0,
    e: "The parent is the folder one level up—the one that contains your current folder.",
    de: "If you are in Documents/Projects, the parent is Documents. You will use this idea with commands like cd ..",
    deBeginner: "The parent folder is the one that contains the folder you're in. From Documents/Projects, the parent is Documents.",
    deExpert: "The parent directory is the one that contains the current directory; it is represented by .. in every directory. cd .. changes to the parent. Path resolution uses .. to go up. The root (/) has no parent (.. points to itself)."
  }),
  (_i: number) => ({
    q: "What does 'to display' or 'to show' mean for the terminal?",
    o: ["To print or show text on the screen", "To hide something", "To delete something", "To run in the background"],
    c: 0,
    e: "To display (or show) means to print text so you can see it in the terminal.",
    de: "Many commands display their result: for example, listing files shows their names on the screen.",
    deBeginner: "To display or show means to print text on the screen so you can see it. Listing files 'shows' their names.",
    deExpert: "Display/show here means writing to stdout (fd 1), which by default is the terminal (the PTY). Programs printf/write to stdout; the terminal emulator renders it. Redirecting stdout (>) sends output to a file instead. stderr is a separate stream for diagnostics."
  }),
  (_i: number) => ({
    q: "What is the shell?",
    o: ["The program that reads your commands and runs them", "The terminal window", "The operating system", "A type of file"],
    c: 0,
    e: "The shell is the program that takes what you type, interprets it as commands, and runs them.",
    de: "The shell is the program that reads what you type, interprets it as commands, and runs them.\n\nKey ideas:\n• The terminal window runs a shell (e.g. Bash or Zsh). You type; the shell runs the commands and shows output.\n• The shell understands command names, arguments, and special characters (like * for globbing or | for pipes).\n• It is the 'interpreter' between you and the system: you type in human-like commands, the shell turns them into actions.\n\nExample: When you type ls and press Enter, the shell runs the ls program and prints the list of files. Without the shell, your typing would do nothing.",
    deBeginner: "The shell is the program that reads what you type and runs the commands. The terminal window runs a shell (e.g. Bash).",
    deExpert: "The shell (sh, bash, zsh, etc.) is the command interpreter: it reads lines, parses them (words, operators, redirects), performs expansions (variables, globs, command substitution), and either runs builtins or fork/execs external programs. It manages job control, pipelines, and the environment. Scripts are sequences of commands the shell executes."
  }),
  (_i: number) => ({
    q: "What is the terminal window?",
    o: ["The application window where you see the prompt and type commands", "The whole operating system", "A file", "The desktop"],
    c: 0,
    e: "The terminal window is the app window that shows the prompt, your typing, and the output.",
    de: "The terminal window is the application window where you see the prompt, type commands, and see the output.\n\nKey ideas:\n• You open it from the system menu or by running an app named Terminal, Command Prompt, or similar. It is one window among others (browser, editor, etc.).\n• It contains the shell: the window is the 'frame,' the shell is the program inside that runs your commands.\n• You can have several terminal windows or tabs open, each with its own prompt and current directory.\n\nExample: On Mac you might open 'Terminal' from Applications/Utilities. The window that opens is the terminal window.",
    deBeginner: "The terminal window is the app window where you see the prompt and type commands. You open it with an app named Terminal or similar.",
    deExpert: "The terminal (emulator) is the GUI application that provides a PTY (pseudo-terminal): it renders character I/O and sends keyboard input to the shell. Examples: iTerm2, GNOME Terminal, Windows Terminal. Each window/tab has its own PTY and thus its own shell process and cwd. SSH and serial connections also use PTYs."
  }),
  (_i: number) => ({
    q: "What key is often used to delete the character before the cursor?",
    o: ["Backspace", "Enter", "Escape", "Tab"],
    c: 0,
    e: "Backspace (or Delete on some keyboards) deletes the character before the cursor.",
    de: "Backspace (or Delete on some keyboards) deletes the character before the cursor.\n\nKey ideas:\n• Use Backspace to fix typos before you press Enter. After Enter, the command has already run and you cannot 'undo' the line.\n• The cursor shows where the next character will go; Backspace removes the character to the left of the cursor.\n• On some keyboards the key is labeled Delete or has a left-pointing arrow. It does not delete the whole line—only one character at a time.\n\nExample: If you type lls by mistake, move the cursor after the extra l and press Backspace once to get ls.",
    deBeginner: "Backspace deletes the character before the cursor. Use it to fix typos before you press Enter.",
    deExpert: "Backspace sends a backward-delete character to the line editor (readline); it removes the character before the cursor. Ctrl+D (EOF) and Ctrl+U (kill line) are other editing keys. After Enter, the line is already submitted—editing only affects the current line buffer."
  }),
  (_i: number) => ({
    q: "What does 'to open' a file usually mean?",
    o: ["To load it so you can view or edit it", "To create it", "To delete it", "To copy it"],
    c: 0,
    e: "To open a file means to load it—for example, to view its contents or edit it in a program.",
    de: "To open a file means to load it so you can view or edit it—for example, in a text editor or another program.\n\nKey ideas:\n• In a graphical environment you double-click a file to open it. In the terminal you might run a command or program that reads the file and shows or edits it.\n• Opening does not change the file unless you save changes. It just makes the contents available to view or edit.\n• Some terminal commands 'open' a file in the sense of reading it: for example, a command that prints the file contents is a way to 'open' and view it.\n\nExample: You might type a command like cat file.txt to open (view) the file in the terminal, or open file.txt to open it in the default app.",
    deBeginner: "To open a file means to load it so you can see or edit it. In the terminal you might use a command to show its contents.",
    deExpert: "Opening a file means acquiring a file descriptor (open(2)) and optionally reading bytes. cat, less, and editors open files to read; redirects and editors open for write. The kernel resolves the path and checks permissions. No implicit 'open in default app' in pure CLI—that is a desktop integration (xdg-open, open)."
  }),
  (_i: number) => ({
    q: "What does 'to create' a file mean?",
    o: ["To make a new file that did not exist before", "To open it", "To delete it", "To rename it"],
    c: 0,
    e: "To create a file means to make a new file (with a name and optional content).",
    de: "To create a file means to make a new file that did not exist before—with a name and optional content.\n\nKey ideas:\n• The file appears on disk (or in the current directory) with the name you give it. Until you create it, that name does not refer to anything.\n• You can create a file from the terminal with commands or with a text editor. Some commands create empty files; others write content.\n• Creating does not overwrite an existing file unless the command is designed to do so—be careful with names so you do not overwrite by mistake.\n\nExample: Later you will use commands or editors to create files from the terminal. The new file then appears when you list the directory.",
    deBeginner: "To create a file means to make a new file that didn't exist before. You give it a name and can add content.",
    deExpert: "Creating a file means creating a new directory entry and inode (e.g. open with O_CREAT, or touch). The file is empty unless written. Overwrite behavior depends on flags (O_EXCL prevents overwrite). touch creates or updates mtime; echo > file truncates and writes. Scripts should check existence or use noclobber to avoid accidental overwrites."
  }),
  (_i: number) => ({
    q: "What does 'to delete' a file mean?",
    o: ["To remove it so it is no longer on the disk", "To hide it", "To move it", "To copy it"],
    c: 0,
    e: "To delete means to remove the file. Usually it is gone for good unless you have a backup.",
    de: "To delete a file means to remove it so it is no longer on the disk. Usually it is gone for good unless you have a backup.\n\nKey ideas:\n• Terminal commands can delete files. There is often no 'undo' or recycle bin like in a graphical interface—deletion is immediate and permanent.\n• Be careful: double-check the file name and path before deleting. It is easy to delete the wrong file by a typo.\n• You will learn a command (e.g. rm) that deletes files. Some systems have options to ask for confirmation or move to a trash.\n\nExample: Deleting report.txt removes it from the folder. You cannot get it back unless you have a copy elsewhere.",
    deBeginner: "To delete means to remove the file so it's gone. There is usually no undo in the terminal—so be careful.",
    deExpert: "Deleting means removing the directory entry (unlink(2)); the inode is freed when no references remain. rm does this. No standard CLI recycle bin; some GUIs provide trash. rm -r removes directories recursively. Data may remain on disk until overwritten; secure deletion requires overwriting. Always verify paths (e.g. ls first) to avoid rm -rf mistakes."
  }),
  (_i: number) => ({
    q: "What does 'to copy' a file mean?",
    o: ["To make a duplicate with a new name or location", "To delete the original", "To move it", "To open it"],
    c: 0,
    e: "To copy means to make a duplicate. The original stays; you have two copies.",
    de: "To copy a file means to make a duplicate. The original stays where it is; you have two copies (the original and the new one).\n\nKey ideas:\n• You might copy to another folder or give the copy a new name in the same folder. The terminal has commands (e.g. cp) for this.\n• Copying does not remove or change the original. Both the old and the new file exist after the copy.\n• If you copy to a path that already has a file with that name, the existing file may be overwritten—check before copying.\n\nExample: Copying report.txt to backup.txt gives you two files: report.txt and backup.txt with the same content.",
    deBeginner: "To copy means to make a duplicate. The original stays; you end up with two files (same content).",
    deExpert: "Copying means reading the source and writing to a new path (cp does this). Two distinct inodes result; changes to one do not affect the other. cp -r copies directories recursively. Overwrite behavior: cp overwrites by default; use -i or noclobber for safety. For directories, rsync or cp -a preserves metadata."
  }),
  (_i: number) => ({
    q: "What does 'to move' a file mean?",
    o: ["To change its location (or rename it); the file no longer stays in the old place)", "To copy it", "To delete it", "To open it"],
    c: 0,
    e: "To move means to put the file somewhere else (or give it a new name). The old location no longer has it.",
    de: "To move a file means to change its location (or rename it). The file no longer stays in the old place—it is now in the new place or under the new name.\n\nKey ideas:\n• Moving is like cut-and-paste: one file, new location. The same file exists in one place only after the move.\n• On many systems the same command (e.g. mv) is used for both move and rename. Renaming is moving to the same folder with a new name.\n• Moving within the same disk is usually fast (just the name/location is updated). Moving to another disk may copy then delete the original.\n\nExample: Moving file.txt from Documents to Downloads means file.txt is now in Downloads and no longer in Documents.",
    deBeginner: "To move means to put the file in a new place (or give it a new name). The file is only in one place afterward.",
    deExpert: "Moving is renaming (rename(2)): same filesystem updates the directory entry only; cross-filesystem move is copy then unlink. mv does both. The inode (and data) stays the same on the same filesystem. Rename is atomic within a directory. Use mv for renames; same semantics as move."
  }),
  (_i: number) => ({
    q: "What does 'to rename' a file mean?",
    o: ["To change its name but keep it in the same place", "To move it", "To copy it", "To delete it"],
    c: 0,
    e: "To rename means to change the file's name. It stays in the same folder.",
    de: "To rename a file means to change its name but keep it in the same place (same folder).\n\nKey ideas:\n• The file content does not change—only the name. The old name no longer exists; the new name refers to the same file.\n• In the terminal, renaming and moving are often done with the same command (e.g. mv oldname newname). If you use a new name in the same folder, that is a rename.\n• Be careful with case: on case-sensitive systems, File.txt and file.txt are different names. Renaming between them can be tricky.\n\nExample: Renaming report.txt to report_old.txt leaves one file in the same folder, now called report_old.txt.",
    deBeginner: "To rename means to change the file's name. The file stays in the same folder; only the name changes.",
    deExpert: "Renaming is updating the directory entry to point the same inode under a new name (rename(2)). mv old new does this. Same inode, same data; only the name changes. On case-sensitive filesystems, renaming File to file requires a two-step mv (e.g. File to File.tmp then to file) because the name is updated in place."
  }),
  (_i: number) => ({
    q: "What is uppercase?",
    o: ["Capital letters (A, B, C)", "Small letters (a, b, c)", "Numbers", "Symbols"],
    c: 0,
    e: "Uppercase means capital letters: A, B, C, etc.",
    de: "Uppercase means capital letters: A, B, C, … (as opposed to lowercase a, b, c).\n\nKey ideas:\n• In a case-sensitive system, FILE and file are different. The terminal and many systems treat uppercase and lowercase as different characters.\n• Commands and filenames often use lowercase by convention. Using the wrong case can lead to 'command not found' or 'file not found'.\n• When typing commands, pay attention to case. For example, LS is not the same as ls on Linux and macOS.\n\nExample: The word 'Hello' has one uppercase letter (H) and four lowercase (ello).",
    deBeginner: "Uppercase means capital letters (A, B, C). On the terminal, A and a are different.",
    deExpert: "Uppercase (capital) letters have distinct character codes from lowercase (e.g. ASCII 65 vs 97). Unix and CLI are case-sensitive; FILE and file are different. Environment variables are often UPPERCASE by convention; commands and filenames are usually lowercase. Locale (e.g. LC_CTYPE) affects case conversion (tr, sort)."
  }),
  (_i: number) => ({
    q: "What is lowercase?",
    o: ["Small letters (a, b, c)", "Capital letters", "Numbers only", "The first letter of a sentence"],
    c: 0,
    e: "Lowercase means small letters: a, b, c, etc.",
    de: "Lowercase means small letters: a, b, c, … (as opposed to uppercase A, B, C).\n\nKey ideas:\n• Many terminal commands and file names use only lowercase. Using lowercase consistently avoids case-sensitivity mistakes.\n• On a case-sensitive system, file and File are two different names. Sticking to lowercase for commands and filenames helps avoid 'file not found' or 'command not found'.\n• When you type commands, check the case: often everything is lowercase (e.g. ls, cd, pwd).\n\nExample: The command ls is lowercase. Typing LS may give 'command not found' on Linux and macOS.",
    deBeginner: "Lowercase means small letters (a, b, c). Most commands use lowercase; typing LS instead of ls can cause errors.",
    deExpert: "Lowercase (small) letters. CLI convention: command names and most filenames are lowercase for portability and to avoid case-sensitivity errors. Bash variables can be lowercase; avoid conflicting with env vars (UPPERCASE). Regex and globs can be case-insensitive with options (grep -i, shopt -s nocaseglob on some shells)."
  }),
  (_i: number) => ({
    q: "What is a character?",
    o: ["A single letter, digit, or symbol (e.g. A, 5, @)", "A whole word", "A command", "A file"],
    c: 0,
    e: "A character is one unit of text: a letter, a number, a space, or a symbol like @ or #.",
    de: "A character is one unit of text: a letter, a number, a space, or a symbol like @ or #.\n\nKey ideas:\n• Everything you type is a sequence of characters. Commands are case-sensitive, so each character matters.\n• A character can be a letter (a, B), a digit (5), a space, or a symbol (., @, #). The terminal treats text character by character.\n• Getting one character wrong (a typo) can make a command fail or open the wrong file.\n\nExample: The word 'ls' has two characters: l and s. If you type 'lls' (three characters), the command may not be recognized.",
    deBeginner: "A character is one letter, number, space, or symbol. Everything you type is a string of characters; one wrong character can break a command.",
    deExpert: "A character is a single code unit (e.g. ASCII/UTF-8). Shells and CLI tools are character-oriented; quoting and escaping matter. Unicode and locale (LC_CTYPE) affect what counts as a character. Tools like wc -c count bytes; wc -m count characters. One typo can change command semantics (e.g. rm file vs rm * )."
  }),
  (_i: number) => ({
    q: "What is a space?",
    o: ["The gap between words (produced by the Space key)", "The key that runs a command", "An empty file", "The cursor"],
    c: 0,
    e: "A space is the empty character between words. You get it by pressing the Space key.",
    de: "In commands, spaces often separate the command name from its options and arguments. They matter.",
    deBeginner: "A space is the gap between words. In commands, spaces separate the command name from the rest. They matter.",
    deExpert: "Space (ASCII 32) is a word separator in shell parsing. The shell splits the line on whitespace (unless quoted) to build the argument vector. Multiple spaces collapse in many contexts. Filenames with spaces must be quoted or escaped. IFS controls word splitting in the shell."
  }),
  (_i: number) => ({
    q: "What is a newline?",
    o: ["The 'end of line' that starts a new line (e.g. when you press Enter)", "A space", "A tab", "A dot"],
    c: 0,
    e: "A newline is the character that ends a line and starts the next. Pressing Enter usually inserts it.",
    de: "When you press Enter after a command, you send a newline and the shell runs the command.",
    deBeginner: "A newline is the character that ends a line. When you press Enter you send a newline, and the shell runs your command.",
    deExpert: "Newline (\\n, LF, ASCII 10) terminates a line. Enter sends it to the shell; the shell then parses and executes the line. Line-based tools (grep, sed) use newlines as record separators. Windows uses CRLF (\\r\\n); Unix uses LF. Many tools normalize or accept both."
  }),
  (_i: number) => ({
    q: "What is text?",
    o: ["Readable characters (letters, numbers, symbols) that form words and lines", "Only numbers", "Only code", "Binary data"],
    c: 0,
    e: "Text is readable content: letters, numbers, punctuation, and symbols that humans can read.",
    de: "Text files store text. The terminal mostly works with text: you type text and see text output.",
    deBeginner: "Text is readable content: letters, numbers, and symbols. The terminal works with text—you type it and see it.",
    deExpert: "Text is character data (usually UTF-8) that can be displayed and edited as lines. Text files use newlines to separate lines. CLI tools (cat, grep, sed) are line-oriented. Binary data (images, executables) is not text; displaying it in the terminal can produce control characters or garbage. Use file to detect type."
  }),
  (_i: number) => ({
    q: "What is a hidden file?",
    o: ["A file that is not shown in normal listings (often starts with a dot)", "A deleted file", "An empty file", "A system file only"],
    c: 0,
    e: "A hidden file is one that normal listing does not show. On many systems, names starting with a dot are hidden.",
    de: "Examples: .bashrc, .gitignore. They are still there; you need a special option to list them.",
    deBeginner: "A hidden file is not shown by a normal list. On Unix, names starting with a dot (e.g. .bashrc) are hidden. Use a special option to see them.",
    deExpert: "Convention on Unix: files whose name starts with . are hidden—ls omits them unless -a or -A. Dotfiles (.bashrc, .gitignore) store config. They are normal inodes; only the listing convention differs. Glob * does not match them unless dotglob is set. Backup files often use a trailing ~."
  }),
  (_i: number) => ({
    q: "What is the 'working directory'?",
    o: ["Same as current directory—the folder you are in", "The root folder", "The home folder", "The desktop"],
    c: 0,
    e: "Working directory is another name for the current directory—where you are in the folder tree.",
    de: "Commands often use the working directory as the default place to look for or create files.",
    deBeginner: "Working directory is the same as current directory—the folder you're in. Commands use it as the default place for files.",
    deExpert: "Working directory (cwd, PWD) is the process's current directory; the kernel maintains it per process. getcwd(2) returns it; cd changes it in the shell. Relative paths and many commands (touch, mkdir) resolve from it. Scripts should not assume cwd—use absolute paths or cd explicitly."
  }),
  (_i: number) => ({
    q: "What is an absolute path?",
    o: ["A path that starts from the root and uniquely identifies a file or folder", "A short path", "A relative path", "A filename only"],
    c: 0,
    e: "An absolute path starts from the root (e.g. / or C:\\) and works no matter which folder you are in.",
    de: "Example: /home/user/Documents/file.txt. It always points to the same file from anywhere.",
    deBeginner: "An absolute path starts from the root (e.g. / on Linux). It always points to the same file no matter where you are.",
    deExpert: "An absolute path starts with / (Unix) or a drive (e.g. C:\\) and uniquely identifies a file. Resolution does not depend on cwd. realpath(3) canonicalizes. Use absolute paths in scripts and cron when you must not depend on the caller's cwd."
  }),
  (_i: number) => ({
    q: "What is a relative path?",
    o: ["A path that is relative to your current directory (e.g. subfolder/file.txt)", "A path from root", "A full path", "A URL"],
    c: 0,
    e: "A relative path describes a location from where you are now (e.g. docs/report.txt means report.txt inside docs).",
    de: "If you are in /home/user, then docs/report.txt means /home/user/docs/report.txt. It is shorter and depends on current directory.",
    deBeginner: "A relative path is from where you are now. For example docs/report.txt means 'report.txt inside docs' in your current folder.",
    deExpert: "A relative path does not start with /; it is resolved from the current working directory. ./ is current dir, ../ is parent. Portable scripts often cd to a known dir first, then use relative paths. Symlinks can make resolution subtle (use realpath when needed)."
  }),
  (_i: number) => ({
    q: "What is a user?",
    o: ["Someone (or an account) that can log in and use the computer", "A program", "A file", "A folder"],
    c: 0,
    e: "A user is an account on the computer. Each user has a name, a home folder, and often a password.",
    de: "The terminal often shows your username in the prompt. Different users have different files and permissions.",
    deBeginner: "A user is an account on the computer. Each user has a name and a home folder. The terminal shows your username in the prompt.",
    deExpert: "A user is a system identity (uid) with an entry in /etc/passwd: username, uid, gid, home, shell. Processes have effective uid/gid; file access is checked against them. whoami, id; su and sudo change user. Multi-user systems rely on this for isolation and permissions."
  }),
  (_i: number) => ({
    q: "What is a username?",
    o: ["The name that identifies a user account (e.g. for login)", "A filename", "A command", "The computer name"],
    c: 0,
    e: "The username is the name of the account—what you type when you log in.",
    de: "It often appears in the prompt and in paths like /home/username. No spaces; usually letters and numbers.",
    deBeginner: "The username is the name of your account—what you type when you log in. It often appears in the prompt.",
    deExpert: "Username is the login name (getpwuid, $USER). Used in /etc/passwd, home paths (/home/username), and prompts. Typically alphanumeric; avoid spaces. SSH and sudo use it (user@host, sudo -u user)."
  }),
  (_i: number) => ({
    q: "What is software?",
    o: ["Programs and applications that run on the computer", "The hardware", "Only the OS", "Only the terminal"],
    c: 0,
    e: "Software is the set of programs and apps—everything that runs as instructions on the computer.",
    de: "The terminal, the shell, and the commands you run are all software. The OS is also software.",
    deBeginner: "Software is programs and apps—everything that runs on the computer. The terminal, shell, and commands are all software.",
    deExpert: "Software is executable code and data (programs, libraries, scripts). The OS kernel runs on hardware; userspace (shell, CLI tools) is software. Package managers install software; the shell runs it via exec. Open source vs proprietary is a licensing distinction, not a technical one."
  }),
  (_i: number) => ({
    q: "What is hardware?",
    o: ["The physical parts of the computer (screen, keyboard, disk)", "Programs", "Files", "Commands"],
    c: 0,
    e: "Hardware is the physical machine: keyboard, screen, disk, memory, etc.",
    de: "You use hardware (keyboard, screen) to run software (terminal, commands). Software tells hardware what to do.",
    deBeginner: "Hardware is the physical parts: keyboard, screen, disk. You use hardware to run software (like the terminal).",
    deExpert: "Hardware is physical components: CPU, memory, disk, keyboard, display. The OS abstracts them (device files, syscalls). The terminal is software that talks to keyboard and display drivers. Understanding the stack (hardware → kernel → userspace) helps with drivers, /dev, and performance."
  }),
  (_i: number) => ({
    q: "What is a window?",
    o: ["A rectangular area on the screen that shows an application", "A file", "A command", "The desktop"],
    c: 0,
    e: "A window is one of the rectangular areas on the screen—for example, the terminal window.",
    de: "You can have many windows open. The terminal is usually one window where you type commands.",
    deBeginner: "A window is a rectangular area on the screen for an app. The terminal runs in one window where you type commands.",
    deExpert: "A window is a GUI abstraction (X11/Wayland window, or host OS equivalent). The terminal emulator creates a window and a PTY; the shell runs in that PTY. Multiple windows mean multiple PTYs and shell processes. No window in headless/server environments—only PTYs or serial."
  }),
  (_i: number) => ({
    q: "What does 'local' mean when we talk about the computer?",
    o: ["On this machine (your own computer)", "On the internet", "On a server", "In the cloud"],
    c: 0,
    e: "Local means on the computer you are using right now—not on another machine over the network.",
    de: "Local files are on your disk. Local commands run on your machine. Opposite of 'remote.'",
    deBeginner: "Local means on this computer—your machine. Local files are on your disk. The opposite is 'remote' (another machine).",
    deExpert: "Local means on the current host (localhost). Localhost (127.0.0.1) is this machine. Remote means another host (SSH, network). Many CLI tools have local vs remote modes (e.g. git remote, docker). File paths are local to the machine unless accessed via NFS/SSFS."
  }),
  (_i: number) => ({
    q: "What is the desktop?",
    o: ["The main screen area where you see icons and folders when you start", "The terminal", "The root folder", "A single file"],
    c: 0,
    e: "The desktop is the background you see when you log in—often with icons and a taskbar.",
    de: "It is usually a special folder. The terminal can work with files on the desktop if you navigate there.",
    deBeginner: "The desktop is the main screen with icons. It is usually a folder; you can open the terminal and go to that folder.",
    deExpert: "The desktop is a GUI concept—often a folder (e.g. ~/Desktop) displayed as the background. The terminal has no notion of desktop; you cd to that directory. XDG_USER_DIRS may define its path. CLI workflows typically ignore the desktop."
  }),
  (_i: number) => ({
    q: "What does 'to scroll' mean?",
    o: ["To move the view up or down to see more text", "To run a command", "To delete text", "To type faster"],
    c: 0,
    e: "To scroll is to move the visible part of the terminal so you can see earlier or later output.",
    de: "Use the scrollbar, mouse wheel, or keyboard (e.g. Shift+Page Up) to scroll in the terminal.",
    deBeginner: "To scroll is to move the view up or down so you can see more of the output. Use the scrollbar or mouse wheel.",
    deExpert: "Scrolling is a terminal emulator feature: the scrollback buffer holds past output; you view a window into it. It does not affect the shell or running processes. less and similar tools have their own scroll. No scroll in non-interactive/pipe contexts."
  }),
  (_i: number) => ({
    q: "What is a session?",
    o: ["A period of using the computer (from login until you close or log out)", "A single command", "A file", "A folder"],
    c: 0,
    e: "A session is the time from when you open the terminal (or log in) until you close it or log out.",
    de: "During a session, your current directory and history of commands are kept. Closing the window ends the session.",
    deBeginner: "A session is from when you open the terminal (or log in) until you close it. Your current folder and command history stay during the session.",
    deExpert: "A session is the lifetime of a login or interactive shell. It has its own environment, cwd, history, and job control. tmux/screen create persistent sessions. Logout or exit ends the session; background jobs may be killed (SIGHUP) unless nohup or disown."
  }),
  (_i: number) => ({
    q: "What does 'to log in' mean?",
    o: ["To identify yourself to the computer (e.g. username and password) to start using it", "To open a file", "To run a command", "To turn on the computer"],
    c: 0,
    e: "To log in is to enter your username (and usually password) so the system knows who you are.",
    de: "After login you get your home folder and permissions. The terminal session is tied to your logged-in user.",
    deBeginner: "To log in is to enter your username and password so the computer knows who you are. You then get your files and permissions.",
    deExpert: "Login is authentication (PAM, etc.) that establishes a user session: uid, gid, groups, home, shell. getty/login start the shell. SSH is remote login. The terminal session inherits the user identity; all commands run as that user unless su/sudo."
  }),
  (_i: number) => ({
    q: "What is a beginner?",
    o: ["Someone who is new to a topic and still learning", "An expert", "A program", "A type of file"],
    c: 0,
    e: "A beginner is someone who is just starting to learn—for example, learning the terminal.",
    de: "Level 0 is for beginners. As you learn more commands and concepts, you move to higher levels.",
    deBeginner: "A beginner is someone new to a topic. This app's Level 0 is for beginners; you can then move to harder levels.",
    deExpert: "In this app, 'beginner' is the first sub-level (first 100 questions per level). Pedagogy: simple vocabulary and concepts first, then commands and syntax. Real-world CLI mastery requires practice across all sub-levels and levels."
  }),
  (_i: number) => ({
    q: "What is the Tab key often used for in the terminal?",
    o: ["To complete a command or filename you started typing", "To run the command", "To delete the line", "To open a menu"],
    c: 0,
    e: "In many terminals, Tab completes the word you are typing (command or path) if there is only one match.",
    de: "Type the first few letters and press Tab to save typing and reduce typos. Try it when you learn real commands.",
    deBeginner: "Tab is used to complete what you're typing—command or path. Type a few letters and press Tab; if only one match exists, it fills in.",
    deExpert: "Tab triggers readline completion: the shell (or application) completes the current word from commands, filenames, or custom completions. Tab twice lists possibilities. Completion is configurable (bash-completion, zsh compsys). Reduces typing and typos."
  }),
  (_i: number) => ({
    q: "What does 'to clear' the screen mean?",
    o: ["To remove the visible text so you have a clean area (the content is gone from view)", "To delete files", "To close the terminal", "To log out"],
    c: 0,
    e: "To clear the screen is to wipe the visible output so you see a blank area. Your session and history stay.",
    de: "There is a command (e.g. clear) that does this. Useful when the screen is full of old output.",
    deBeginner: "To clear the screen means to wipe the visible text so you see a blank area. Your session and history are unchanged. There is a command for it.",
    deExpert: "clear (or Ctrl+L) sends control sequences so the terminal emulator clears the visible buffer or scrolls content away. The shell and scrollback are unaffected. Useful for a clean view; script output is still in scrollback. clear is often just tput clear or equivalent."
  }),
  (_i: number) => ({
    q: "What does 'to exit' mean in the context of the terminal?",
    o: ["To close the terminal or end the current session", "To go to the previous folder", "To cancel a command", "To log out of the computer"],
    c: 0,
    e: "To exit usually means to close the terminal window or run a command that ends the shell.",
    de: "You can type exit or close the window. Any running command in that window will stop.",
    deBeginner: "To exit means to close the terminal or end the shell (e.g. type exit or close the window). Any command running in that window will stop.",
    deExpert: "exit is a shell builtin that terminates the shell (with optional exit code). Closing the terminal sends SIGHUP to the shell and its job. Scripts end when the last command completes or on exit. exit N sets the process exit status for the parent."
  }),
  (_i: number) => ({
    q: "What is documentation?",
    o: ["Written instructions and explanations for how to use something", "A type of file", "A command", "The prompt"],
    c: 0,
    e: "Documentation is the text that explains how to use a program, command, or system.",
    de: "Commands often have built-in help or manual pages (e.g. man commandname) that are documentation.",
    deBeginner: "Documentation is written help—how to use a program or command. Many commands have built-in help or manual pages (man).",
    deExpert: "Documentation: man pages (man 1, 2, 3), info, --help, and external docs. man commandname is standard. Section numbers: 1=user commands, 2=syscalls, 3=libs. Good CLI practice: check docs before guessing. man -k keyword searches descriptions."
  }),
  (_i: number) => ({
    q: "What is a manual (in computing)?",
    o: ["A help document that explains how to use a command or program", "A keyboard", "A type of command", "The terminal"],
    c: 0,
    e: "A manual is documentation—often one page per command—that describes what it does and how to use it.",
    de: "On many systems you can type man ls to read the manual for the ls command. Very useful as you learn.",
    deBeginner: "A manual is a help document for a command or program. Type man commandname (e.g. man ls) to read it.",
    deExpert: "Manual pages (man) are the standard Unix documentation format. man ls shows the ls(1) page. Sections: 1=commands, 2=syscalls, 3=libs, 5=file formats, 8=admin. man -k keyword searches. info and --help complement man. Reading man pages is essential for CLI fluency."
  }),
  (_i: number) => ({
    q: "What is practice?",
    o: ["Doing something repeatedly to get better at it", "Reading only", "A single try", "A test"],
    c: 0,
    e: "Practice means doing the same kind of task again and again to improve your skills.",
    de: "Using the terminal and doing quizzes like this is practice. The more you do it, the easier it gets.",
    deBeginner: "Practice is doing something again and again to get better. Using the terminal and doing quizzes is practice.",
    deExpert: "Deliberate practice (repeated execution with feedback) builds fluency. For CLI: run commands, read output, fix errors, script repetitive tasks. This app provides structured practice with explanations; real-world use reinforces it."
  }),
  (_i: number) => ({
    q: "What is a quiz?",
    o: ["Questions you answer to check or improve your understanding", "A command", "A file", "A type of terminal"],
    c: 0,
    e: "A quiz is a set of questions you answer. It helps you see what you know and what to learn.",
    de: "This app is a quiz: you answer questions about the terminal and get explanations to learn step by step.",
    deBeginner: "A quiz is a set of questions you answer. This app is a quiz about the terminal—you answer and get explanations.",
    deExpert: "This app is a formative quiz: multiple choice with immediate feedback and layered explanations (short, detailed, beginner/intermediate/expert). Designed for spaced repetition and level-based progression through CLI concepts."
  }),
  (_i: number) => ({
    q: "What does 'correct' mean for an answer?",
    o: ["Right—the answer that matches what was asked", "The first option", "Any answer", "A guess"],
    c: 0,
    e: "Correct means the answer is right—it matches the question and the facts.",
    de: "In a quiz, one option is correct and the others are wrong (distractors). Learning the correct one builds your knowledge.",
    deBeginner: "Correct means the answer is right. In the quiz, one option is correct; the others are wrong. Learning the right one helps you learn.",
    deExpert: "In assessment, 'correct' means the chosen option matches the intended answer key. Distractors are plausible wrong options. Feedback on correct vs incorrect reinforces learning. In CLI, 'correct' can also mean exit code 0 or expected output."
  }),
  (_i: number) => ({
    q: "What is a beginner-friendly interface?",
    o: ["One that is designed to be easy for new users", "One that has no help", "One that is only for experts", "A command line only"],
    c: 0,
    e: "Beginner-friendly means it is made to be easy to understand and use when you are new.",
    de: "Level 0 is beginner-friendly: simple words and concepts. Higher levels add more detail and harder questions.",
    deBeginner: "Beginner-friendly means easy for new users. Level 0 in this app is beginner-friendly; higher levels get harder.",
    deExpert: "UX design for low expertise: simple vocabulary, minimal jargon, clear feedback. This app's Level 0 is beginner-friendly; later levels introduce real commands and complexity. CLI in general has a steep learning curve; good docs and man pages help."
  }),
  (_i: number) => ({
    q: "What is progress (in learning)?",
    o: ["Getting better or moving forward (e.g. completing more questions)", "Staying the same", "Going backward", "Skipping steps"],
    c: 0,
    e: "Progress means moving forward—doing more, understanding more, and getting better over time.",
    de: "Completing Level 0 and earning stars is progress. Then you can move on to Level 1 and beyond.",
    deBeginner: "Progress means moving forward—completing more questions, earning stars, and moving to higher levels.",
    deExpert: "Progress here is operational: questions completed, stars earned, levels unlocked. Learning progress is implicit (improved accuracy, faster recall). The app tracks completion; retention and transfer depend on practice and use outside the app."
  }),
  (_i: number) => ({
    q: "What is a level (in this app)?",
    o: ["A stage of difficulty with its own set of questions (e.g. Level 0, Level 1)", "A folder", "A command", "A file"],
    c: 0,
    e: "A level is a stage in the app. Level 0 is the easiest; higher numbers are harder.",
    de: "Each level has 300 questions and sub-levels (Beginner, Intermediate, Expert). You progress by completing them.",
    deBeginner: "A level is a stage in the app (Level 0, 1, 2, …). Level 0 is easiest; each level has many questions and sub-levels.",
    deExpert: "Levels 0–10 map to persona stages (Tadpole to God Whale). Each level has 300 questions (100 per sub-level: Beginner, Intermediate, Expert). Difficulty and topic scope increase. Level 0 = no prior CLI; Level 10 = containers, Git, kernel, philosophy."
  }),
  (_i: number) => ({
    q: "What are stars used for in this app?",
    o: ["To show how much of a level you have completed (e.g. 1, 2, or 3 stars)", "To rate commands", "To mark favorites", "To count files"],
    c: 0,
    e: "Stars show your progress within a level—one star per sub-level (Beginner, Intermediate, Expert) you complete.",
    de: "Earn stars by answering questions in each sub-level. They show at a glance how far you are in that level.",
    deBeginner: "Stars show how much of a level you've completed. You earn one star per sub-level (Beginner, Intermediate, Expert) you finish.",
    deExpert: "Stars are completion badges: 1 star = Beginner sub-level done, 2 = Intermediate, 3 = Expert (full level). Used for gamification and at-a-glance progress. Stored in user state; no server-side persistence in the base app."
  }),
  (_i: number) => ({
    q: "What does 'to select' an option mean?",
    o: ["To choose it (e.g. by clicking or tapping)", "To delete it", "To type it", "To ignore it"],
    c: 0,
    e: "To select means to choose one option from the list—usually by clicking it in the quiz.",
    de: "In the quiz you select one answer. Then you can see if it was correct and read the explanation.",
    deBeginner: "To select means to choose one option (e.g. click it). In the quiz you select one answer, then see if it's correct.",
    deExpert: "Selection is choosing one of N options (UI interaction). In the quiz it commits an answer and triggers feedback. In CLI, 'select' might mean choosing from a menu (e.g. select in bash, or tools like fzf)."
  }),
  (_i: number) => ({
    q: "What is an explanation?",
    o: ["Text that describes why something is true or how something works", "A command", "A question", "An error"],
    c: 0,
    e: "An explanation is the text that tells you why the answer is correct and helps you understand.",
    de: "After each question you get a short explanation (and sometimes a detailed one) to learn from.",
    deBeginner: "An explanation is text that says why the answer is right and how it works. You get a short one after each question (and sometimes a detailed one).",
    deExpert: "Explanations here are pedagogical: short (e), detailed (de), and tiered (beginner/intermediate/expert). They justify the correct answer and teach concepts. In CLI, 'explanation' could be man text, --help, or comments in scripts."
  }),
  (_i: number) => ({
    q: "Why might the terminal feel confusing at first?",
    o: ["You type instead of clicking, and you need to learn command names", "It is broken", "It is only for experts", "It has no output"],
    c: 0,
    e: "It is different from clicking icons. Once you learn a few commands and concepts, it gets easier.",
    de: "Level 0 teaches the basics. Level 1 and beyond introduce real commands. Take your time and practice.",
    deBeginner: "The terminal is different from clicking—you type and need to know command names. Level 0 teaches the basics; it gets easier with practice.",
    deExpert: "CLI has high initial cognitive load: no discoverable UI, opaque errors, and many commands. Fluency requires vocabulary (commands, flags), syntax (pipes, redirects), and mental model (processes, streams). Level 0 reduces load by teaching concepts before commands."
  }),
  (_i: number) => ({
    q: "What is the main way you interact with the terminal?",
    o: ["By typing commands and reading the output", "By clicking icons", "By touching the screen only", "By speaking only"],
    c: 0,
    e: "You type commands and read the text the computer prints back. That is the main interaction.",
    de: "Keyboard for input, screen for output. No mouse needed for basic commands, though you can use it to select text.",
    deBeginner: "You type commands and read the text the computer prints. Keyboard in, screen out. No mouse needed for basic use.",
    deExpert: "Primary interaction is line-oriented: type a line, Enter, read stdout/stderr. No WIMP metaphor. Mouse is optional (selection, paste). Scripting and pipes extend the model to non-interactive use. Accessibility: screen readers and braille terminals work with text."
  }),
  (_i: number) => ({
    q: "What should you do if you are not sure what a command does?",
    o: ["Look it up in help or documentation (e.g. man commandname) before or after trying", "Never use it", "Always run it", "Ignore it"],
    c: 0,
    e: "Check the manual (man) or help. In this app, read the explanations. Later you will learn real commands and their help.",
    de: "Documentation and explanations are there to help. When you get to Level 1, you will see commands like ls and pwd and their help.",
    deBeginner: "Look it up: use the manual (man commandname) or help. In this app, read the explanations after each question.",
    deExpert: "Consult docs: man, info, --help, -h, or online. man -k keyword finds commands. Never run unknown commands as root. In scripts, document non-obvious commands. Safe exploration: use harmless commands first (e.g. echo, ls)."
  }),
  (_i: number) => ({
    q: "What is the first step to run a command?",
    o: ["Type the command (and any arguments) in the terminal", "Restart the computer", "Open a browser", "Click the desktop"],
    c: 0,
    e: "First you type the command at the prompt. Then you press Enter to run it.",
    de: "So the steps are: 1) Make sure you see the prompt, 2) Type the command, 3) Press Enter. Output appears below.",
    deBeginner: "First step: type the command at the prompt. Then press Enter. The prompt means the shell is ready for your input.",
    deExpert: "Sequence: 1) prompt indicates readiness, 2) type command (and args), 3) Enter sends the line to the shell, 4) shell parses and execs, 5) output on stdout/stderr. Scripts skip step 1–2 (commands come from the script file)."
  }),
  (_i: number) => ({
    q: "Where does the output of a command usually appear?",
    o: ["On the next lines in the same terminal window, below what you typed", "In a pop-up", "In a new window only", "Nowhere"],
    c: 0,
    e: "Output usually appears in the same window, on the lines below your command.",
    de: "You type on the line with the prompt. The computer's response (output) is printed below. You can scroll to see more.",
    deBeginner: "Output appears in the same window, on the lines below what you typed. You can scroll to see more.",
    deExpert: "By default stdout and stderr are attached to the terminal (PTY). Output appears in the same window, often interleaved. Redirects (>, 2>) send output to files or pipes. Buffering (line vs block) affects when output appears."
  }),
  (_i: number) => ({
    q: "What is a 'command name'?",
    o: ["The word that identifies the command (e.g. the first word you type)", "The whole line", "The output", "The prompt"],
    c: 0,
    e: "The command name is the first word you type—for example ls or cd. It tells the computer which program to run.",
    de: "Later you will learn names like ls (list), cd (change directory), pwd (print working directory). They are the command names.",
    deBeginner: "The command name is the first word you type (e.g. ls, cd). It tells the computer which program to run.",
    deExpert: "The command name is argv[0]—the first token after word-splitting. The shell uses it to look up a builtin or a file in PATH. Case-sensitive. Common names: ls, cd, pwd, grep, cat. which and type show what would run."
  }),
  (_i: number) => ({
    q: "What does 'to press a key' mean?",
    o: ["To push a key on the keyboard and release it", "To hold it forever", "To ignore it", "To type a word"],
    c: 0,
    e: "To press a key means to push it down and then release. One press usually produces one character or one action.",
    de: "Enter runs the command. Backspace deletes one character. Keys are how you give input to the terminal.",
    deBeginner: "To press a key means to push it down and release. Enter runs the command; Backspace deletes a character.",
    deExpert: "Keypress sends a scancode/keycode; the terminal driver and readline map it to a character or action. Enter = newline (run line). Control keys (Ctrl+C, Ctrl+D) have special meaning. Key repeat and modifier state matter for shortcuts."
  }),
  (_i: number) => ({
    q: "What is the difference between the terminal and a text editor?",
    o: ["The terminal runs commands and shows output; a text editor is for editing files", "They are the same", "The terminal cannot type", "The editor runs commands"],
    c: 0,
    e: "In the terminal you type commands and see output. In a text editor you mainly create or edit the contents of files.",
    de: "You can use the terminal to open a text editor, or to run commands that create or change files. They work together.",
    deBeginner: "The terminal runs commands and shows output. A text editor is for creating and editing files. You can open an editor from the terminal.",
    deExpert: "Terminal: shell runs commands, line-oriented, stdout/stderr. Editor: edits file buffers, character/screen-oriented, may run in terminal (vim, nano) or as GUI. Workflow: terminal to run editor or scripts; editor to edit scripts and configs. Many devs use both (e.g. terminal + VS Code)."
  }),
  (_i: number) => ({
    q: "What is learning?",
    o: ["Gaining new knowledge or skills over time", "Only reading once", "Only taking a test", "Copying without understanding"],
    c: 0,
    e: "Learning is building your knowledge and skills by reading, practicing, and correcting mistakes.",
    de: "This app helps you learn the terminal step by step. Start with Level 0, then move to Level 1 and beyond.",
    deBeginner: "Learning is gaining knowledge and skills over time. This app helps you learn the terminal step by step.",
    deExpert: "Learning here is structured: levels, feedback, and tiered explanations. Transfer to real CLI use requires practice outside the app (actual shell, scripting, man pages). Spaced repetition and retrieval practice improve retention."
  }),
  (_i: number) => ({
    q: "What is a shortcut (in computing)?",
    o: ["A quicker way to do something (e.g. a key combination or alias)", "A short path", "A small file", "A command"],
    c: 0,
    e: "A shortcut is a faster way to do an action—for example, Ctrl+C to copy or a short command name.",
    de: "In the terminal you might create aliases (short names for long commands) as shortcuts. Keys like Tab also shortcut typing.",
    deBeginner: "A shortcut is a quicker way to do something—e.g. a key combo or a short name for a long command (alias). Tab shortcuts typing.",
    deExpert: "Shortcuts: key bindings (Ctrl+L = clear, Ctrl+C = interrupt) and aliases (alias ll='ls -la'). Shell config (.bashrc) persists aliases. Functions and scripts extend the idea. Tab completion is a form of shortcut (fewer keystrokes)."
  }),
  (_i: number) => ({
    q: "What does 'to try' mean when learning?",
    o: ["To attempt something (e.g. type a command) to see what happens", "To give up", "To skip it", "To copy only"],
    c: 0,
    e: "To try means to attempt—for example, type a command and see the result. Mistakes are part of learning.",
    de: "Trying commands in a safe environment (or in this quiz) helps you learn. You can always read the explanation after.",
    deBeginner: "To try means to attempt something—e.g. type a command and see what happens. Mistakes are normal when learning.",
    deExpert: "Trial and feedback: run a command, observe output and exit code, adjust. Safe experimentation (sandbox, this quiz) reduces risk. In production, prefer reading docs and testing in dev first. Version control and backups mitigate mistakes."
  }),
  (_i: number) => ({
    q: "What is a mistake?",
    o: ["An error or wrong action (e.g. a typo or wrong command)", "A correct answer", "A file", "The prompt"],
    c: 0,
    e: "A mistake is something wrong—like a typo or choosing the wrong option. Fixing mistakes helps you learn.",
    de: "Everyone makes mistakes. In the terminal, 'command not found' often means a typo. Correct it and try again.",
    deBeginner: "A mistake is something wrong—a typo or wrong choice. In the terminal, 'command not found' often means a typo. Fix it and try again.",
    deExpert: "Mistakes: typos (command not found), wrong path (no such file), wrong flags, or logic errors in scripts. Error messages and exit codes help diagnose. Prevention: tab completion, aliases, scripts, and double-checking destructive commands (rm, mv)."
  }),
  (_i: number) => ({
    q: "What is the screen (in the terminal context)?",
    o: ["The display area where you see the prompt, your typing, and the output", "Only the desktop", "A file", "A command"],
    c: 0,
    e: "The screen is the visible part of the terminal window where text appears.",
    de: "You look at the screen to see the prompt, what you type, and the output. Scrolling moves what is on the screen.",
    deBeginner: "The screen is the part of the terminal window where you see the prompt, your typing, and the output. You scroll to see more.",
    deExpert: "The 'screen' is the terminal emulator's display buffer (often a scrollback). It renders the PTY output. No direct programmatic 'screen' in CLI—programs write to stdout/stderr; the terminal draws them. headless = no screen (e.g. cron, SSH command)."
  }),
  (_i: number) => ({
    q: "What does 'to repeat' mean when practicing?",
    o: ["To do something again (e.g. run a command or answer more questions)", "To delete something", "To skip", "To exit"],
    c: 0,
    e: "To repeat means to do the same kind of action again. Repeating helps you remember and get faster.",
    de: "Repeating commands and quiz questions builds muscle memory and understanding. Level 0 is a safe place to repeat.",
    deBeginner: "To repeat means to do the same thing again. Repeating commands and questions helps you remember and get faster.",
    deExpert: "Repetition reinforces learning (spaced repetition). In CLI: re-run commands, loop in scripts (for, while), or use history (!!, !$). Automation replaces manual repetition. This app encourages repeating levels for mastery."
  }),
  (_i: number) => ({
    q: "What is a result?",
    o: ["What you get after doing something (e.g. the output of a command)", "The command you typed", "The prompt", "An error only"],
    c: 0,
    e: "The result is what happens or what you get—for example, the output or message after running a command.",
    de: "A command produces a result: maybe a list of files, a message, or an error. Reading the result tells you what happened.",
    deBeginner: "The result is what you get after doing something—e.g. the output or message after a command. Reading it tells you what happened.",
    deExpert: "Result: observable outcome of a command—stdout, stderr, exit code, and side effects (files created, processes started). Scripts use $? and capture output with $(...) or pipes. Interpreting results is key to debugging and automation."
  }),
  (_i: number) => ({
    q: "What is a message?",
    o: ["Text that the computer shows you (e.g. output, error, or prompt)", "A file", "A command", "A key"],
    c: 0,
    e: "A message is any text the computer displays—output, errors, or prompts. You read messages to understand what is going on.",
    de: "The terminal is full of messages: the prompt, command output, and error messages. Learning to read them is part of using the terminal.",
    deBeginner: "A message is any text the computer shows—the prompt, output, or errors. You read messages to understand what's going on.",
    deExpert: "Message: any text emitted by the system or a program. Sources: prompt (PS1), stdout (normal output), stderr (diagnostics, errors). Logging writes messages to files or syslog. Parsing messages (grep, awk) is common in scripting and monitoring."
  }),
  (_i: number) => ({
    q: "What does 'to close' the terminal mean?",
    o: ["To end the terminal window or session (e.g. close the window or type exit)", "To clear the screen", "To minimize", "To log out of the computer"],
    c: 0,
    e: "To close the terminal means to end that window or session—for example, by closing the window or typing exit.",
    de: "Closing stops any command running in that window. Your files and the computer stay on; only that terminal session ends.",
    deBeginner: "To close the terminal means to end that window or session (close the window or type exit). Any command running there will stop.",
    deExpert: "Closing the terminal window sends SIGHUP to the shell and foreground process; they typically exit. exit is a clean way to end the shell. nohup and disown allow processes to outlive the terminal. tmux/screen sessions persist across close."
  }),
  (_i: number) => ({
    q: "What is a default?",
    o: ["The normal or built-in choice when you do not specify something else", "An error", "A custom setting", "A command"],
    c: 0,
    e: "Default means the usual behavior or value—for example, the default folder when you open the terminal might be your home folder.",
    de: "Many commands have defaults: if you do not say which folder, they use the current directory. Learning defaults saves time.",
    deBeginner: "Default is the normal choice when you don't specify something else. For example, many commands use the current folder by default.",
    deExpert: "Default: the value or behavior when an option or argument is omitted. Examples: default cwd, default stdin/stdout, default file permissions (umask). Man pages list defaults. Override with flags or env vars. Scripts should not rely on defaults when portability matters."
  }),
  (_i: number) => ({
    q: "What is a step (in learning)?",
    o: ["One small part of a process (e.g. 'first step: type the command')", "A folder level", "A command", "A key"],
    c: 0,
    e: "A step is one part of doing something. Learning in steps means doing one thing at a time.",
    de: "Level 0 is the first step. Then Level 1, 2, and so on. Each step builds on the previous one.",
    deBeginner: "A step is one small part of doing something. Level 0 is the first step; then Level 1, 2, and so on.",
    deExpert: "Pedagogically, a step is one unit of instruction or action. This app sequences steps as levels and sub-levels. In scripting, a step might be one command or one line; debugging is often step-wise (echo, set -x, breakpoints)."
  }),
  (_i: number) => ({
    q: "What does 'to start' mean in the context of the terminal?",
    o: ["To open the terminal or begin a session", "To run a command", "To turn on the computer", "To log in only"],
    c: 0,
    e: "To start the terminal means to open the terminal application so you can type commands.",
    de: "You start the terminal from your system menu or by running the Terminal (or similar) app. Then you see the prompt and can type.",
    deBeginner: "To start the terminal means to open the terminal app (from the menu or by running it). Then you see the prompt and can type.",
    deExpert: "Starting the terminal: launch the terminal emulator (e.g. gnome-terminal, iTerm2). It allocates a PTY and runs the login shell (from getty or display manager). Startup files (.bashrc, .profile) run. In headless contexts, 'start' might mean start a daemon or service (systemctl start)."
  }),
  (_i: number) => ({
    q: "What is a concept?",
    o: ["An idea or notion (e.g. 'command', 'directory', 'path')", "A command only", "A file", "A key"],
    c: 0,
    e: "A concept is an idea you need to understand—like command, directory, or path. Level 0 teaches basic concepts.",
    de: "Once you understand concepts like 'terminal' and 'command,' you can learn real commands (Level 1 and beyond) more easily.",
    deBeginner: "A concept is an idea you need to understand—like 'command' or 'directory'. Level 0 teaches basic concepts before real commands.",
    deExpert: "Concepts are mental models: terminal, shell, process, file, path, stream, etc. Level 0 establishes vocabulary and concepts; later levels add syntax and tools. Transfer to real CLI depends on mapping concepts to commands and workflows."
  }),
  (_i: number) => ({
    q: "Why is Level 0 easier than Level 1?",
    o: ["Level 0 assumes no prior knowledge and uses only simple words and ideas", "Level 0 has fewer questions", "Level 1 is broken", "Level 0 has no explanations"],
    c: 0,
    e: "Level 0 is for complete beginners: no terminal experience assumed. Level 1 starts introducing real commands.",
    de: "Level 0 teaches what a terminal is, what a command is, and basic vocabulary. Level 1 adds actual commands like ls and cd.",
    deBeginner: "Level 0 assumes you know nothing and uses simple words. Level 1 starts teaching real commands (like ls and cd), so it's harder.",
    deExpert: "Level 0 is pre-command: vocabulary and concepts only (terminal, command, directory, path). Level 1 introduces real syntax (ls, cd, pwd) and shell behavior. Cognitive load increases with syntax and options; scaffolding (Level 0) reduces initial load."
  }),
];

import { level0Intermediate } from './level0_intermediate_cli';
import { level0Expert } from './level0_expert_cli';

export const level0Patterns = beginner;
export const level0IntermediateA = level0Intermediate.slice(0, 50);
export const level0IntermediateB = level0Intermediate.slice(50, 100);
export const level0ExpertA = level0Expert.slice(0, 50);
export const level0ExpertB = level0Expert.slice(50, 100);
