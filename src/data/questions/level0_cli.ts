// LEVEL 0: TADPOLE — Absolute beginner, assumes no terminal knowledge (100 questions)
// Very easy: what is a terminal, what is a command, what key to press, etc.

const beginner = [
  (_i: number) => ({
    q: "What is a terminal?",
    o: ["A window where you type text commands for the computer", "A type of computer", "A programming language", "A kind of cable"],
    c: 0,
    e: "A terminal is a text-based window where you type commands instead of clicking with a mouse.",
    de: "The terminal is a window where you control the computer by typing text instructions instead of clicking icons.\n\nKey ideas:\n• It is also called the command line or CLI (Command Line Interface).\n• You type a command and press Enter; the computer runs it and may show text output.\n• It is different from a graphical interface (windows, icons, mouse).\n\nExample: When you open an app named Terminal, Command Prompt, or similar, you get a terminal. Learning to use it helps you run powerful tools and automate tasks."
  }),
  (_i: number) => ({
    q: "What do we call an instruction you type for the computer to run?",
    o: ["A command", "A click", "A file", "A window"],
    c: 0,
    e: "A command is the instruction you type. The computer then runs it.",
    de: "A command is the instruction you type so the computer does something.\n\nKey ideas:\n• Commands are usually short words or phrases (e.g. ls, cd, pwd) that you type and then press Enter.\n• The computer runs the command and may print output or change something (e.g. open a folder, list files).\n• If you type something that is not a valid command, you may see an error like 'command not found'.\n\nExample: Typing ls and pressing Enter is one command. You will learn many commands step by step in this app."
  }),
  (_i: number) => ({
    q: "Which key do you usually press to run the command you just typed?",
    o: ["Enter (or Return)", "Space", "Escape", "Tab"],
    c: 0,
    e: "Pressing Enter tells the computer to run the command you typed.",
    de: "You press Enter (or Return) to run the command you just typed.\n\nKey ideas:\n• Until you press Enter, the command is not run—you can still edit or delete what you typed.\n• After you press Enter, the computer runs the command and may show output on the next lines.\n• On most keyboards the key is labeled Enter or has a bent arrow.\n\nExample: Type a command, then press Enter once. Do not hold the key; one press is enough."
  }),
  (_i: number) => ({
    q: "What is a directory?",
    o: ["A folder that can hold files and other folders", "A type of file", "A command", "A key on the keyboard"],
    c: 0,
    e: "A directory is the same as a folder—a place that can contain files and other folders.",
    de: "A directory is a place that can hold files and other directories (subfolders). It is the same as a folder.\n\nKey ideas:\n• In the terminal we usually say 'directory' instead of 'folder,' but they mean the same thing.\n• Directories can be nested: a directory can contain other directories, which can contain more files and directories.\n• Commands like ls list the contents of a directory; cd lets you move into a directory.\n\nExample: Your Documents folder is a directory. Inside it you might have more folders (directories) and files."
  }),
  (_i: number) => ({
    q: "What is a file?",
    o: ["Data saved with a name (e.g. document, image)", "A command", "The blinking line in the terminal", "A key"],
    c: 0,
    e: "A file is data stored with a name, like a document or a picture.",
    de: "A file is data saved under a name on the computer (e.g. a document, a picture, or a script).\n\nKey ideas:\n• Files live inside directories. Each file has a name and often an extension (e.g. .txt, .jpg).\n• In the terminal you can list files, read them, create them, copy them, move them, or delete them using commands.\n• A file is different from a directory: a directory contains other items; a file holds the actual data.\n\nExample: report.txt is a file. The terminal can show it in a listing, open it, or change it with the right commands."
  }),
  (_i: number) => ({
    q: "What is the prompt?",
    o: ["The text that appears before the place where you type", "A command to run", "An error message", "The title of the window"],
    c: 0,
    e: "The prompt is the short text (often ending with $ or %) that shows where you type.",
    de: "The prompt is the short text that appears at the start of the line where you type. It often ends with $ or %.\n\nKey ideas:\n• It means 'the computer is ready for your next command.' You type after the prompt.\n• It may show your username, the current directory, or the computer name—depending on how the terminal is set up.\n• You do not type the prompt itself; you type your command after it.\n\nExample: If you see user@machine:~$ then user@machine:~$ is the prompt. You type your command after the space."
  }),
  (_i: number) => ({
    q: "If you see 'command not found' after typing something, what does it usually mean?",
    o: ["The computer does not recognize the word you typed as a command", "The command worked", "The file was deleted", "You need to press Enter"],
    c: 0,
    e: "It means the name you typed is not a known command—maybe a typo or a command that is not installed.",
    de: "'Command not found' means the computer does not recognize what you typed as a valid command.\n\nKey ideas:\n• Common causes: a typo (e.g. ls vs ls), a wrong command name, or a command that is not installed on your system.\n• The computer only runs commands it knows. Check your spelling and that you are using a real command name.\n• In this app you will learn correct command names (e.g. ls, cd, pwd) so you can avoid this error.\n\nExample: If you type lls instead of ls, you may see 'command not found.' Fix the typo and try again."
  }),
  (_i: number) => ({
    q: "What is the cursor in the terminal?",
    o: ["The blinking line or block where your typing appears", "The mouse pointer", "The first line of text", "A command"],
    c: 0,
    e: "The cursor is the blinking spot that shows where the next character will appear when you type.",
    de: "The cursor is the blinking line or block that shows where the next character will appear when you type.\n\nKey ideas:\n• You type at the cursor. It moves to the right as you type and moves when you use the arrow keys.\n• It is not the mouse pointer; it stays on the line where you are entering text.\n• Before you press Enter, you can move the cursor to fix typos or add more text.\n\nExample: When you see a blinking line after the prompt, that is the cursor. Everything you type appears at that spot."
  }),
  (_i: number) => ({
    q: "Is the terminal the same as a web browser?",
    o: ["No", "Yes", "Only on Windows", "Only on Mac"],
    c: 0,
    e: "No. A browser shows web pages; the terminal is for typing commands.",
    de: "No. The terminal and a web browser are different.\n\nKey ideas:\n• A web browser (e.g. Chrome, Firefox) is for opening web pages and clicking links. You use it to surf the internet.\n• The terminal is for typing commands to control the computer: run programs, manage files, and use tools that do not have a graphical interface.\n• You open the terminal as a separate app (e.g. Terminal, Command Prompt, or an app named 'terminal').\n\nExample: To use the terminal, open the Terminal or Command Prompt app—not the browser."
  }),
  (_i: number) => ({
    q: "What do we call the place where you type commands?",
    o: ["The command line (or terminal)", "The desktop", "The menu bar", "The taskbar"],
    c: 0,
    e: "The command line is the line in the terminal where you type; the whole window is the terminal.",
    de: "The place where you type commands is called the command line. The whole window is the terminal.\n\nKey ideas:\n• The command line is the line where you see the prompt and type your command. The terminal is the full window (prompt, your typing, and output).\n• People often use 'command line' and 'terminal' to mean the same thing: the text interface where you run commands.\n• You interact by typing on the command line and reading the output that appears below.\n\nExample: When someone says 'use the command line,' they mean: open the terminal and type commands there."
  }),
  (_i: number) => ({
    q: "What is the 'current directory'?",
    o: ["The folder you are in right now", "The first folder on the computer", "The desktop", "A file you just opened"],
    c: 0,
    e: "The current directory is the folder the terminal is 'in' at the moment. Commands often apply to this folder.",
    de: "The current directory is the folder the terminal is 'in' right now. Many commands use it by default.\n\nKey ideas:\n• When you open a terminal it starts in a default folder (often your home folder). You can change the current directory with commands like cd.\n• Commands that list or create files often do so in the current directory unless you specify another path.\n• Knowing where you are (current directory) helps you understand where files will be created or listed.\n\nExample: If you are 'in' Documents, the current directory is Documents. A command that lists files will list the contents of Documents."
  }),
  (_i: number) => ({
    q: "What is the home directory?",
    o: ["Your personal folder (often for your documents and files)", "The main folder of the computer", "The desktop", "A temporary folder"],
    c: 0,
    e: "The home directory is your personal main folder, usually where your documents and settings live.",
    de: "The home directory is your personal main folder on the computer. It is usually where your documents and settings are stored.\n\nKey ideas:\n• On many systems it has a path like /home/username (Linux) or C:\\Users\\YourName (Windows). The terminal often starts there when you open it.\n• Each user has one home directory. It is the top-level place for your own files.\n• You will learn a command to go back to your home directory from anywhere (e.g. cd with no arguments).\n\nExample: When you open a new terminal, you are often already in your home directory."
  }),
  (_i: number) => ({
    q: "What does 'to list' mean when we talk about files?",
    o: ["To show the names of files and folders", "To delete them", "To copy them", "To create them"],
    c: 0,
    e: "ToList means to show the names of files and folders in a directory.",
    de: "'To list' means to show the names of files and folders in a directory so you can see what is there.\n\nKey ideas:\n• You do not open or run each file—you just see their names (and sometimes details like size or date).\n• In the terminal you will use a command called ls (list) to do this. It is one of the first commands you will learn.\n• Listing is read-only: it does not change, delete, or move anything.\n\nExample: Listing a folder shows you something like: file1.txt, file2.txt, MyFolder. That is a list of what is inside."
  }),
  (_i: number) => ({
    q: "What does 'to navigate' mean in the context of folders?",
    o: ["To move from one folder to another", "To delete folders", "To rename files", "To create files"],
    c: 0,
    e: "To navigate means to move from folder to folder (e.g. going 'into' or 'up' from a folder).",
    de: "To navigate means to move from one folder to another—for example, going 'into' a subfolder or 'up' to the parent folder.\n\nKey ideas:\n• You are always 'in' one directory at a time (the current directory). Navigating changes which directory that is.\n• In the terminal you use a command like cd (change directory) to navigate: cd folderName goes in, cd .. goes up.\n• Navigating does not move or copy files; it only changes where you are in the folder tree.\n\nExample: Going from Documents into Documents/Projects is navigating. You are now 'in' Projects."
  }),
  (_i: number) => ({
    q: "What is a path?",
    o: ["The location of a file or folder (e.g. which folders it is inside)", "A command", "A type of file", "The prompt"],
    c: 0,
    e: "A path describes where something is—for example, which folders you go through to reach a file.",
    de: "A path is the 'address' of a file or folder—it describes where it is in the folder tree.\n\nKey ideas:\n• Paths look like folder1/folder2/file.txt or C:\\Users\\Name\\file.txt. They uniquely identify one file or folder.\n• A path can be absolute (from the root of the disk) or relative (from your current directory).\n• When you run commands, you often give a path to say which file or folder to use.\n\nExample: Documents/report.txt is a path. It means the file report.txt inside the Documents folder."
  }),
  (_i: number) => ({
    q: "What is the keyboard used for in the terminal?",
    o: ["Typing commands and text", "Only for Enter", "Only for Escape", "Nothing"],
    c: 0,
    e: "You use the keyboard to type commands, fix typos, and press Enter to run them.",
    de: "In the terminal you use the keyboard to type commands and text, fix typos, and press Enter to run commands.\n\nKey ideas:\n• The terminal is keyboard-driven: you type, then press Enter. The mouse is less important for basic use.\n• Arrow keys move the cursor so you can edit the line before pressing Enter. Backspace deletes the character before the cursor.\n• Special keys: Enter runs the command, Tab can complete words, Escape may cancel the line (depending on the terminal).\n\nExample: To run a command you type it with the keyboard and press Enter. No need to click a 'Run' button."
  }),
  (_i: number) => ({
    q: "What is the difference between a file and a folder (directory)?",
    o: ["A folder can contain files and other folders; a file holds data", "They are the same", "A file is bigger", "A folder is always empty"],
    c: 0,
    e: "A folder (directory) can contain files and other folders. A file is a single named piece of data.",
    de: "A folder (directory) can contain files and other folders. A file is a single named piece of data—it does not contain other files or folders.\n\nKey ideas:\n• Think of folders as drawers or boxes: they hold things (files and other folders). A file is the actual document or data.\n• In the terminal, commands often treat them differently: for example, you might list the contents of a directory but read or edit a file.\n• Both have names and paths; the difference is that a directory 'contains' while a file 'holds data'.\n\nExample: Documents is a folder; report.txt inside it is a file. The folder contains the file."
  }),
  (_i: number) => ({
    q: "What does 'to run' or 'to execute' a command mean?",
    o: ["To tell the computer to do what the command says", "To type it again", "To delete it", "To copy it"],
    c: 0,
    e: "To run (or execute) a command means to press Enter so the computer performs that instruction.",
    de: "To run (or execute) a command means to tell the computer to do what the command says—usually by pressing Enter after typing it.\n\nKey ideas:\n• Typing the command only prepares it. Running it happens when you press Enter; then the computer carries it out.\n• After you run a command, the computer may print output, change files, or do something else. If something goes wrong, you may see an error message.\n• You can run the same command many times; each time you press Enter, it runs again.\n\nExample: You type ls and press Enter. Pressing Enter is what 'runs' the command. The computer then lists the files."
  }),
  (_i: number) => ({
    q: "What is 'output' in the terminal?",
    o: ["The text the computer prints after you run a command", "The command you type", "An error", "The prompt"],
    c: 0,
    e: "Output is the text that appears on the screen as a result of running a command.",
    de: "Output is the text (or other result) the computer prints or shows after you run a command.\n\nKey ideas:\n• It usually appears on the next lines in the same terminal window, below the line where you typed the command.\n• Output can be a list of files, a message, an error, or any text the command produces.\n• Reading the output tells you what the command did. Sometimes there is no output—that can still mean the command succeeded.\n\nExample: If you run a command that lists files, the list of names is the output. You read it on the screen."
  }),
  (_i: number) => ({
    q: "What is 'input' in the terminal?",
    o: ["What you type (your commands and key presses)", "What the computer prints", "The prompt", "A file"],
    c: 0,
    e: "Input is what you give to the computer—the commands and text you type.",
    de: "Input is what you give to the computer—the commands and text you type with the keyboard.\n\nKey ideas:\n• You provide input by typing. The computer then uses that input (e.g. to run a command) and may produce output in response.\n• Input is your side; output is the computer's side. You type input, the computer prints output.\n• Input can be a single command, or later you will see commands that read input from a file or from another command (pipes).\n\nExample: When you type ls and press Enter, 'ls' and the Enter key are your input. The list of files the computer prints is the output."
  }),
  (_i: number) => ({
    q: "What is a program?",
    o: ["Software that does a specific job (e.g. list files, edit text)", "A file only", "A folder", "The terminal"],
    c: 0,
    e: "A program is software that performs a task. Commands in the terminal often run programs.",
    de: "A program is software that does a specific job—for example, list files, edit text, or search the web.\n\nKey ideas:\n• When you type a command like ls, you are running a small program that lists files. Each command is usually a program.\n• Programs can show text, change files, or do other work. The terminal is a way to start programs by typing their name instead of clicking an icon.\n• Many tools you will learn (ls, cd, grep, etc.) are programs. The terminal runs them when you type the command and press Enter.\n\nExample: The ls command is a program. When you run it, you start that program and see its output on the screen."
  }),
  (_i: number) => ({
    q: "What is an operating system?",
    o: ["The main software that runs the computer (e.g. Windows, macOS, Linux)", "A single program", "A type of file", "The terminal app"],
    c: 0,
    e: "The operating system (OS) is the core software that manages the computer. Windows, macOS, and Linux are examples.",
    de: "The terminal is a program that runs on the OS. It lets you run other programs and work with files."
  }),
  (_i: number) => ({
    q: "What does 'CLI' stand for?",
    o: ["Command Line Interface", "Computer List Input", "Central Line Index", "Click List Item"],
    c: 0,
    e: "CLI means Command Line Interface—you type commands instead of clicking.",
    de: "A CLI is text-based: you type commands and read text output. The opposite is a GUI (graphical user interface)."
  }),
  (_i: number) => ({
    q: "What is a GUI?",
    o: ["A graphical interface with windows, icons, and mouse clicks", "A type of command", "A kind of file", "The prompt"],
    c: 0,
    e: "GUI means Graphical User Interface—windows, icons, menus, and mouse instead of only text.",
    de: "Most apps use a GUI. The terminal is a CLI. Both let you control the same computer in different ways."
  }),
  (_i: number) => ({
    q: "What does 'case-sensitive' mean?",
    o: ["Capital and small letters are different (e.g. A vs a)", "Everything must be capitals", "Spaces do not matter", "Only numbers are allowed"],
    c: 0,
    e: "Case-sensitive means the computer treats A and a as different characters.",
    de: "In the terminal and on many systems, File.txt and file.txt can be two different files. Spelling and case matter."
  }),
  (_i: number) => ({
    q: "What is a typo?",
    o: ["A typing mistake (e.g. wrong letter or missing character)", "A kind of file", "A command", "The prompt"],
    c: 0,
    e: "A typo is a mistake in what you typed—wrong letter, extra letter, or missing character.",
    de: "Typos in commands often lead to 'command not found.' Check your spelling and try again."
  }),
  (_i: number) => ({
    q: "What is an error message?",
    o: ["Text from the computer saying something went wrong", "A successful result", "The prompt", "A command"],
    c: 0,
    e: "An error message is text the computer shows when something failed (e.g. command not found, file not found).",
    de: "Error messages help you fix the problem. Read them to see what went wrong."
  }),
  (_i: number) => ({
    q: "When we say a command 'succeeded', what do we mean?",
    o: ["It ran without an error and did what it was supposed to do", "It printed a lot of text", "You pressed Enter", "The window closed"],
    c: 0,
    e: "Succeeded means the command ran correctly and did its job (even if it did not print anything).",
    de: "Many commands print nothing when they succeed. Errors usually produce an error message."
  }),
  (_i: number) => ({
    q: "What is a filename?",
    o: ["The name of a file (e.g. report.txt, photo.jpg)", "A command", "The path", "The prompt"],
    c: 0,
    e: "The filename is the name of the file. It often has an extension like .txt or .jpg.",
    de: "Examples: report.txt, data.csv. The extension can indicate the type of file."
  }),
  (_i: number) => ({
    q: "What is a file extension?",
    o: ["The part after the dot in a filename (e.g. .txt in report.txt)", "The full path", "A command", "The folder name"],
    c: 0,
    e: "The extension is the part after the last dot, like .txt or .jpg. It often indicates the file type.",
    de: "Common extensions: .txt (text), .jpg (image), .pdf (document). The computer may use them to choose how to open the file."
  }),
  (_i: number) => ({
    q: "What is the 'root' of the filesystem?",
    o: ["The top-level folder that contains all other folders and files", "Your home folder", "The desktop", "A temporary folder"],
    c: 0,
    e: "The root is the very top of the folder tree—the one folder that contains everything else on the disk.",
    de: "On Linux and macOS it is written as /. On Windows it is often C:\\. All paths start from there."
  }),
  (_i: number) => ({
    q: "What is a subfolder?",
    o: ["A folder that is inside another folder", "The main folder", "A file", "The desktop"],
    c: 0,
    e: "A subfolder is a folder inside another folder. Example: Documents/Projects is a subfolder of Documents.",
    de: "Folders can contain subfolders, which can contain more subfolders, forming a tree."
  }),
  (_i: number) => ({
    q: "What is the 'parent' folder?",
    o: ["The folder that contains the folder you are in", "The root", "The home folder", "The desktop"],
    c: 0,
    e: "The parent is the folder one level up—the one that contains your current folder.",
    de: "If you are in Documents/Projects, the parent is Documents. You will use this idea with commands like cd .."
  }),
  (_i: number) => ({
    q: "What does 'to display' or 'to show' mean for the terminal?",
    o: ["To print or show text on the screen", "To hide something", "To delete something", "To run in the background"],
    c: 0,
    e: "To display (or show) means to print text so you can see it in the terminal.",
    de: "Many commands display their result: for example, listing files shows their names on the screen."
  }),
  (_i: number) => ({
    q: "What is the shell?",
    o: ["The program that reads your commands and runs them", "The terminal window", "The operating system", "A type of file"],
    c: 0,
    e: "The shell is the program that takes what you type, interprets it as commands, and runs them.",
    de: "The shell is the program that reads what you type, interprets it as commands, and runs them.\n\nKey ideas:\n• The terminal window runs a shell (e.g. Bash or Zsh). You type; the shell runs the commands and shows output.\n• The shell understands command names, arguments, and special characters (like * for globbing or | for pipes).\n• It is the 'interpreter' between you and the system: you type in human-like commands, the shell turns them into actions.\n\nExample: When you type ls and press Enter, the shell runs the ls program and prints the list of files. Without the shell, your typing would do nothing."
  }),
  (_i: number) => ({
    q: "What is the terminal window?",
    o: ["The application window where you see the prompt and type commands", "The whole operating system", "A file", "The desktop"],
    c: 0,
    e: "The terminal window is the app window that shows the prompt, your typing, and the output.",
    de: "The terminal window is the application window where you see the prompt, type commands, and see the output.\n\nKey ideas:\n• You open it from the system menu or by running an app named Terminal, Command Prompt, or similar. It is one window among others (browser, editor, etc.).\n• It contains the shell: the window is the 'frame,' the shell is the program inside that runs your commands.\n• You can have several terminal windows or tabs open, each with its own prompt and current directory.\n\nExample: On Mac you might open 'Terminal' from Applications/Utilities. The window that opens is the terminal window."
  }),
  (_i: number) => ({
    q: "What key is often used to delete the character before the cursor?",
    o: ["Backspace", "Enter", "Escape", "Tab"],
    c: 0,
    e: "Backspace (or Delete on some keyboards) deletes the character before the cursor.",
    de: "Backspace (or Delete on some keyboards) deletes the character before the cursor.\n\nKey ideas:\n• Use Backspace to fix typos before you press Enter. After Enter, the command has already run and you cannot 'undo' the line.\n• The cursor shows where the next character will go; Backspace removes the character to the left of the cursor.\n• On some keyboards the key is labeled Delete or has a left-pointing arrow. It does not delete the whole line—only one character at a time.\n\nExample: If you type lls by mistake, move the cursor after the extra l and press Backspace once to get ls."
  }),
  (_i: number) => ({
    q: "What does 'to open' a file usually mean?",
    o: ["To load it so you can view or edit it", "To create it", "To delete it", "To copy it"],
    c: 0,
    e: "To open a file means to load it—for example, to view its contents or edit it in a program.",
    de: "To open a file means to load it so you can view or edit it—for example, in a text editor or another program.\n\nKey ideas:\n• In a graphical environment you double-click a file to open it. In the terminal you might run a command or program that reads the file and shows or edits it.\n• Opening does not change the file unless you save changes. It just makes the contents available to view or edit.\n• Some terminal commands 'open' a file in the sense of reading it: for example, a command that prints the file contents is a way to 'open' and view it.\n\nExample: You might type a command like cat file.txt to open (view) the file in the terminal, or open file.txt to open it in the default app."
  }),
  (_i: number) => ({
    q: "What does 'to create' a file mean?",
    o: ["To make a new file that did not exist before", "To open it", "To delete it", "To rename it"],
    c: 0,
    e: "To create a file means to make a new file (with a name and optional content).",
    de: "To create a file means to make a new file that did not exist before—with a name and optional content.\n\nKey ideas:\n• The file appears on disk (or in the current directory) with the name you give it. Until you create it, that name does not refer to anything.\n• You can create a file from the terminal with commands or with a text editor. Some commands create empty files; others write content.\n• Creating does not overwrite an existing file unless the command is designed to do so—be careful with names so you do not overwrite by mistake.\n\nExample: Later you will use commands or editors to create files from the terminal. The new file then appears when you list the directory."
  }),
  (_i: number) => ({
    q: "What does 'to delete' a file mean?",
    o: ["To remove it so it is no longer on the disk", "To hide it", "To move it", "To copy it"],
    c: 0,
    e: "To delete means to remove the file. Usually it is gone for good unless you have a backup.",
    de: "To delete a file means to remove it so it is no longer on the disk. Usually it is gone for good unless you have a backup.\n\nKey ideas:\n• Terminal commands can delete files. There is often no 'undo' or recycle bin like in a graphical interface—deletion is immediate and permanent.\n• Be careful: double-check the file name and path before deleting. It is easy to delete the wrong file by a typo.\n• You will learn a command (e.g. rm) that deletes files. Some systems have options to ask for confirmation or move to a trash.\n\nExample: Deleting report.txt removes it from the folder. You cannot get it back unless you have a copy elsewhere."
  }),
  (_i: number) => ({
    q: "What does 'to copy' a file mean?",
    o: ["To make a duplicate with a new name or location", "To delete the original", "To move it", "To open it"],
    c: 0,
    e: "To copy means to make a duplicate. The original stays; you have two copies.",
    de: "To copy a file means to make a duplicate. The original stays where it is; you have two copies (the original and the new one).\n\nKey ideas:\n• You might copy to another folder or give the copy a new name in the same folder. The terminal has commands (e.g. cp) for this.\n• Copying does not remove or change the original. Both the old and the new file exist after the copy.\n• If you copy to a path that already has a file with that name, the existing file may be overwritten—check before copying.\n\nExample: Copying report.txt to backup.txt gives you two files: report.txt and backup.txt with the same content."
  }),
  (_i: number) => ({
    q: "What does 'to move' a file mean?",
    o: ["To change its location (or rename it); the file no longer stays in the old place)", "To copy it", "To delete it", "To open it"],
    c: 0,
    e: "To move means to put the file somewhere else (or give it a new name). The old location no longer has it.",
    de: "To move a file means to change its location (or rename it). The file no longer stays in the old place—it is now in the new place or under the new name.\n\nKey ideas:\n• Moving is like cut-and-paste: one file, new location. The same file exists in one place only after the move.\n• On many systems the same command (e.g. mv) is used for both move and rename. Renaming is moving to the same folder with a new name.\n• Moving within the same disk is usually fast (just the name/location is updated). Moving to another disk may copy then delete the original.\n\nExample: Moving file.txt from Documents to Downloads means file.txt is now in Downloads and no longer in Documents."
  }),
  (_i: number) => ({
    q: "What does 'to rename' a file mean?",
    o: ["To change its name but keep it in the same place", "To move it", "To copy it", "To delete it"],
    c: 0,
    e: "To rename means to change the file's name. It stays in the same folder.",
    de: "To rename a file means to change its name but keep it in the same place (same folder).\n\nKey ideas:\n• The file content does not change—only the name. The old name no longer exists; the new name refers to the same file.\n• In the terminal, renaming and moving are often done with the same command (e.g. mv oldname newname). If you use a new name in the same folder, that is a rename.\n• Be careful with case: on case-sensitive systems, File.txt and file.txt are different names. Renaming between them can be tricky.\n\nExample: Renaming report.txt to report_old.txt leaves one file in the same folder, now called report_old.txt."
  }),
  (_i: number) => ({
    q: "What is uppercase?",
    o: ["Capital letters (A, B, C)", "Small letters (a, b, c)", "Numbers", "Symbols"],
    c: 0,
    e: "Uppercase means capital letters: A, B, C, etc.",
    de: "Uppercase means capital letters: A, B, C, … (as opposed to lowercase a, b, c).\n\nKey ideas:\n• In a case-sensitive system, FILE and file are different. The terminal and many systems treat uppercase and lowercase as different characters.\n• Commands and filenames often use lowercase by convention. Using the wrong case can lead to 'command not found' or 'file not found'.\n• When typing commands, pay attention to case. For example, LS is not the same as ls on Linux and macOS.\n\nExample: The word 'Hello' has one uppercase letter (H) and four lowercase (ello)."
  }),
  (_i: number) => ({
    q: "What is lowercase?",
    o: ["Small letters (a, b, c)", "Capital letters", "Numbers only", "The first letter of a sentence"],
    c: 0,
    e: "Lowercase means small letters: a, b, c, etc.",
    de: "Lowercase means small letters: a, b, c, … (as opposed to uppercase A, B, C).\n\nKey ideas:\n• Many terminal commands and file names use only lowercase. Using lowercase consistently avoids case-sensitivity mistakes.\n• On a case-sensitive system, file and File are two different names. Sticking to lowercase for commands and filenames helps avoid 'file not found' or 'command not found'.\n• When you type commands, check the case: often everything is lowercase (e.g. ls, cd, pwd).\n\nExample: The command ls is lowercase. Typing LS may give 'command not found' on Linux and macOS."
  }),
  (_i: number) => ({
    q: "What is a character?",
    o: ["A single letter, digit, or symbol (e.g. A, 5, @)", "A whole word", "A command", "A file"],
    c: 0,
    e: "A character is one unit of text: a letter, a number, a space, or a symbol like @ or #.",
    de: "A character is one unit of text: a letter, a number, a space, or a symbol like @ or #.\n\nKey ideas:\n• Everything you type is a sequence of characters. Commands are case-sensitive, so each character matters.\n• A character can be a letter (a, B), a digit (5), a space, or a symbol (., @, #). The terminal treats text character by character.\n• Getting one character wrong (a typo) can make a command fail or open the wrong file.\n\nExample: The word 'ls' has two characters: l and s. If you type 'lls' (three characters), the command may not be recognized."
  }),
  (_i: number) => ({
    q: "What is a space?",
    o: ["The gap between words (produced by the Space key)", "The key that runs a command", "An empty file", "The cursor"],
    c: 0,
    e: "A space is the empty character between words. You get it by pressing the Space key.",
    de: "In commands, spaces often separate the command name from its options and arguments. They matter."
  }),
  (_i: number) => ({
    q: "What is a newline?",
    o: ["The 'end of line' that starts a new line (e.g. when you press Enter)", "A space", "A tab", "A dot"],
    c: 0,
    e: "A newline is the character that ends a line and starts the next. Pressing Enter usually inserts it.",
    de: "When you press Enter after a command, you send a newline and the shell runs the command."
  }),
  (_i: number) => ({
    q: "What is text?",
    o: ["Readable characters (letters, numbers, symbols) that form words and lines", "Only numbers", "Only code", "Binary data"],
    c: 0,
    e: "Text is readable content: letters, numbers, punctuation, and symbols that humans can read.",
    de: "Text files store text. The terminal mostly works with text: you type text and see text output."
  }),
  (_i: number) => ({
    q: "What is a hidden file?",
    o: ["A file that is not shown in normal listings (often starts with a dot)", "A deleted file", "An empty file", "A system file only"],
    c: 0,
    e: "A hidden file is one that normal listing does not show. On many systems, names starting with a dot are hidden.",
    de: "Examples: .bashrc, .gitignore. They are still there; you need a special option to list them."
  }),
  (_i: number) => ({
    q: "What is the 'working directory'?",
    o: ["Same as current directory—the folder you are in", "The root folder", "The home folder", "The desktop"],
    c: 0,
    e: "Working directory is another name for the current directory—where you are in the folder tree.",
    de: "Commands often use the working directory as the default place to look for or create files."
  }),
  (_i: number) => ({
    q: "What is an absolute path?",
    o: ["A path that starts from the root and uniquely identifies a file or folder", "A short path", "A relative path", "A filename only"],
    c: 0,
    e: "An absolute path starts from the root (e.g. / or C:\\) and works no matter which folder you are in.",
    de: "Example: /home/user/Documents/file.txt. It always points to the same file from anywhere."
  }),
  (_i: number) => ({
    q: "What is a relative path?",
    o: ["A path that is relative to your current directory (e.g. subfolder/file.txt)", "A path from root", "A full path", "A URL"],
    c: 0,
    e: "A relative path describes a location from where you are now (e.g. docs/report.txt means report.txt inside docs).",
    de: "If you are in /home/user, then docs/report.txt means /home/user/docs/report.txt. It is shorter and depends on current directory."
  }),
  (_i: number) => ({
    q: "What is a user?",
    o: ["Someone (or an account) that can log in and use the computer", "A program", "A file", "A folder"],
    c: 0,
    e: "A user is an account on the computer. Each user has a name, a home folder, and often a password.",
    de: "The terminal often shows your username in the prompt. Different users have different files and permissions."
  }),
  (_i: number) => ({
    q: "What is a username?",
    o: ["The name that identifies a user account (e.g. for login)", "A filename", "A command", "The computer name"],
    c: 0,
    e: "The username is the name of the account—what you type when you log in.",
    de: "It often appears in the prompt and in paths like /home/username. No spaces; usually letters and numbers."
  }),
  (_i: number) => ({
    q: "What is software?",
    o: ["Programs and applications that run on the computer", "The hardware", "Only the OS", "Only the terminal"],
    c: 0,
    e: "Software is the set of programs and apps—everything that runs as instructions on the computer.",
    de: "The terminal, the shell, and the commands you run are all software. The OS is also software."
  }),
  (_i: number) => ({
    q: "What is hardware?",
    o: ["The physical parts of the computer (screen, keyboard, disk)", "Programs", "Files", "Commands"],
    c: 0,
    e: "Hardware is the physical machine: keyboard, screen, disk, memory, etc.",
    de: "You use hardware (keyboard, screen) to run software (terminal, commands). Software tells hardware what to do."
  }),
  (_i: number) => ({
    q: "What is a window?",
    o: ["A rectangular area on the screen that shows an application", "A file", "A command", "The desktop"],
    c: 0,
    e: "A window is one of the rectangular areas on the screen—for example, the terminal window.",
    de: "You can have many windows open. The terminal is usually one window where you type commands."
  }),
  (_i: number) => ({
    q: "What does 'local' mean when we talk about the computer?",
    o: ["On this machine (your own computer)", "On the internet", "On a server", "In the cloud"],
    c: 0,
    e: "Local means on the computer you are using right now—not on another machine over the network.",
    de: "Local files are on your disk. Local commands run on your machine. Opposite of 'remote.'"
  }),
  (_i: number) => ({
    q: "What is the desktop?",
    o: ["The main screen area where you see icons and folders when you start", "The terminal", "The root folder", "A single file"],
    c: 0,
    e: "The desktop is the background you see when you log in—often with icons and a taskbar.",
    de: "It is usually a special folder. The terminal can work with files on the desktop if you navigate there."
  }),
  (_i: number) => ({
    q: "What does 'to scroll' mean?",
    o: ["To move the view up or down to see more text", "To run a command", "To delete text", "To type faster"],
    c: 0,
    e: "To scroll is to move the visible part of the terminal so you can see earlier or later output.",
    de: "Use the scrollbar, mouse wheel, or keyboard (e.g. Shift+Page Up) to scroll in the terminal."
  }),
  (_i: number) => ({
    q: "What is a session?",
    o: ["A period of using the computer (from login until you close or log out)", "A single command", "A file", "A folder"],
    c: 0,
    e: "A session is the time from when you open the terminal (or log in) until you close it or log out.",
    de: "During a session, your current directory and history of commands are kept. Closing the window ends the session."
  }),
  (_i: number) => ({
    q: "What does 'to log in' mean?",
    o: ["To identify yourself to the computer (e.g. username and password) to start using it", "To open a file", "To run a command", "To turn on the computer"],
    c: 0,
    e: "To log in is to enter your username (and usually password) so the system knows who you are.",
    de: "After login you get your home folder and permissions. The terminal session is tied to your logged-in user."
  }),
  (_i: number) => ({
    q: "What is a beginner?",
    o: ["Someone who is new to a topic and still learning", "An expert", "A program", "A type of file"],
    c: 0,
    e: "A beginner is someone who is just starting to learn—for example, learning the terminal.",
    de: "Level 0 is for beginners. As you learn more commands and concepts, you move to higher levels."
  }),
  (_i: number) => ({
    q: "What is the Tab key often used for in the terminal?",
    o: ["To complete a command or filename you started typing", "To run the command", "To delete the line", "To open a menu"],
    c: 0,
    e: "In many terminals, Tab completes the word you are typing (command or path) if there is only one match.",
    de: "Type the first few letters and press Tab to save typing and reduce typos. Try it when you learn real commands."
  }),
  (_i: number) => ({
    q: "What does 'to clear' the screen mean?",
    o: ["To remove the visible text so you have a clean area (the content is gone from view)", "To delete files", "To close the terminal", "To log out"],
    c: 0,
    e: "To clear the screen is to wipe the visible output so you see a blank area. Your session and history stay.",
    de: "There is a command (e.g. clear) that does this. Useful when the screen is full of old output."
  }),
  (_i: number) => ({
    q: "What does 'to exit' mean in the context of the terminal?",
    o: ["To close the terminal or end the current session", "To go to the previous folder", "To cancel a command", "To log out of the computer"],
    c: 0,
    e: "To exit usually means to close the terminal window or run a command that ends the shell.",
    de: "You can type exit or close the window. Any running command in that window will stop."
  }),
  (_i: number) => ({
    q: "What is documentation?",
    o: ["Written instructions and explanations for how to use something", "A type of file", "A command", "The prompt"],
    c: 0,
    e: "Documentation is the text that explains how to use a program, command, or system.",
    de: "Commands often have built-in help or manual pages (e.g. man commandname) that are documentation."
  }),
  (_i: number) => ({
    q: "What is a manual (in computing)?",
    o: ["A help document that explains how to use a command or program", "A keyboard", "A type of command", "The terminal"],
    c: 0,
    e: "A manual is documentation—often one page per command—that describes what it does and how to use it.",
    de: "On many systems you can type man ls to read the manual for the ls command. Very useful as you learn."
  }),
  (_i: number) => ({
    q: "What is practice?",
    o: ["Doing something repeatedly to get better at it", "Reading only", "A single try", "A test"],
    c: 0,
    e: "Practice means doing the same kind of task again and again to improve your skills.",
    de: "Using the terminal and doing quizzes like this is practice. The more you do it, the easier it gets."
  }),
  (_i: number) => ({
    q: "What is a quiz?",
    o: ["Questions you answer to check or improve your understanding", "A command", "A file", "A type of terminal"],
    c: 0,
    e: "A quiz is a set of questions you answer. It helps you see what you know and what to learn.",
    de: "This app is a quiz: you answer questions about the terminal and get explanations to learn step by step."
  }),
  (_i: number) => ({
    q: "What does 'correct' mean for an answer?",
    o: ["Right—the answer that matches what was asked", "The first option", "Any answer", "A guess"],
    c: 0,
    e: "Correct means the answer is right—it matches the question and the facts.",
    de: "In a quiz, one option is correct and the others are wrong (distractors). Learning the correct one builds your knowledge."
  }),
  (_i: number) => ({
    q: "What is a beginner-friendly interface?",
    o: ["One that is designed to be easy for new users", "One that has no help", "One that is only for experts", "A command line only"],
    c: 0,
    e: "Beginner-friendly means it is made to be easy to understand and use when you are new.",
    de: "Level 0 is beginner-friendly: simple words and concepts. Higher levels add more detail and harder questions."
  }),
  (_i: number) => ({
    q: "What is progress (in learning)?",
    o: ["Getting better or moving forward (e.g. completing more questions)", "Staying the same", "Going backward", "Skipping steps"],
    c: 0,
    e: "Progress means moving forward—doing more, understanding more, and getting better over time.",
    de: "Completing Level 0 and earning stars is progress. Then you can move on to Level 1 and beyond."
  }),
  (_i: number) => ({
    q: "What is a level (in this app)?",
    o: ["A stage of difficulty with its own set of questions (e.g. Level 0, Level 1)", "A folder", "A command", "A file"],
    c: 0,
    e: "A level is a stage in the app. Level 0 is the easiest; higher numbers are harder.",
    de: "Each level has 300 questions and sub-levels (Beginner, Intermediate, Expert). You progress by completing them."
  }),
  (_i: number) => ({
    q: "What are stars used for in this app?",
    o: ["To show how much of a level you have completed (e.g. 1, 2, or 3 stars)", "To rate commands", "To mark favorites", "To count files"],
    c: 0,
    e: "Stars show your progress within a level—one star per sub-level (Beginner, Intermediate, Expert) you complete.",
    de: "Earn stars by answering questions in each sub-level. They show at a glance how far you are in that level."
  }),
  (_i: number) => ({
    q: "What does 'to select' an option mean?",
    o: ["To choose it (e.g. by clicking or tapping)", "To delete it", "To type it", "To ignore it"],
    c: 0,
    e: "To select means to choose one option from the list—usually by clicking it in the quiz.",
    de: "In the quiz you select one answer. Then you can see if it was correct and read the explanation."
  }),
  (_i: number) => ({
    q: "What is an explanation?",
    o: ["Text that describes why something is true or how something works", "A command", "A question", "An error"],
    c: 0,
    e: "An explanation is the text that tells you why the answer is correct and helps you understand.",
    de: "After each question you get a short explanation (and sometimes a detailed one) to learn from."
  }),
  (_i: number) => ({
    q: "Why might the terminal feel confusing at first?",
    o: ["You type instead of clicking, and you need to learn command names", "It is broken", "It is only for experts", "It has no output"],
    c: 0,
    e: "It is different from clicking icons. Once you learn a few commands and concepts, it gets easier.",
    de: "Level 0 teaches the basics. Level 1 and beyond introduce real commands. Take your time and practice."
  }),
  (_i: number) => ({
    q: "What is the main way you interact with the terminal?",
    o: ["By typing commands and reading the output", "By clicking icons", "By touching the screen only", "By speaking only"],
    c: 0,
    e: "You type commands and read the text the computer prints back. That is the main interaction.",
    de: "Keyboard for input, screen for output. No mouse needed for basic commands, though you can use it to select text."
  }),
  (_i: number) => ({
    q: "What should you do if you are not sure what a command does?",
    o: ["Look it up in help or documentation (e.g. man commandname) before or after trying", "Never use it", "Always run it", "Ignore it"],
    c: 0,
    e: "Check the manual (man) or help. In this app, read the explanations. Later you will learn real commands and their help.",
    de: "Documentation and explanations are there to help. When you get to Level 1, you will see commands like ls and pwd and their help."
  }),
  (_i: number) => ({
    q: "What is the first step to run a command?",
    o: ["Type the command (and any arguments) in the terminal", "Restart the computer", "Open a browser", "Click the desktop"],
    c: 0,
    e: "First you type the command at the prompt. Then you press Enter to run it.",
    de: "So the steps are: 1) Make sure you see the prompt, 2) Type the command, 3) Press Enter. Output appears below."
  }),
  (_i: number) => ({
    q: "Where does the output of a command usually appear?",
    o: ["On the next lines in the same terminal window, below what you typed", "In a pop-up", "In a new window only", "Nowhere"],
    c: 0,
    e: "Output usually appears in the same window, on the lines below your command.",
    de: "You type on the line with the prompt. The computer's response (output) is printed below. You can scroll to see more."
  }),
  (_i: number) => ({
    q: "What is a 'command name'?",
    o: ["The word that identifies the command (e.g. the first word you type)", "The whole line", "The output", "The prompt"],
    c: 0,
    e: "The command name is the first word you type—for example ls or cd. It tells the computer which program to run.",
    de: "Later you will learn names like ls (list), cd (change directory), pwd (print working directory). They are the command names."
  }),
  (_i: number) => ({
    q: "What does 'to press a key' mean?",
    o: ["To push a key on the keyboard and release it", "To hold it forever", "To ignore it", "To type a word"],
    c: 0,
    e: "To press a key means to push it down and then release. One press usually produces one character or one action.",
    de: "Enter runs the command. Backspace deletes one character. Keys are how you give input to the terminal."
  }),
  (_i: number) => ({
    q: "What is the difference between the terminal and a text editor?",
    o: ["The terminal runs commands and shows output; a text editor is for editing files", "They are the same", "The terminal cannot type", "The editor runs commands"],
    c: 0,
    e: "In the terminal you type commands and see output. In a text editor you mainly create or edit the contents of files.",
    de: "You can use the terminal to open a text editor, or to run commands that create or change files. They work together."
  }),
  (_i: number) => ({
    q: "What is learning?",
    o: ["Gaining new knowledge or skills over time", "Only reading once", "Only taking a test", "Copying without understanding"],
    c: 0,
    e: "Learning is building your knowledge and skills by reading, practicing, and correcting mistakes.",
    de: "This app helps you learn the terminal step by step. Start with Level 0, then move to Level 1 and beyond."
  }),
  (_i: number) => ({
    q: "What is a shortcut (in computing)?",
    o: ["A quicker way to do something (e.g. a key combination or alias)", "A short path", "A small file", "A command"],
    c: 0,
    e: "A shortcut is a faster way to do an action—for example, Ctrl+C to copy or a short command name.",
    de: "In the terminal you might create aliases (short names for long commands) as shortcuts. Keys like Tab also shortcut typing."
  }),
  (_i: number) => ({
    q: "What does 'to try' mean when learning?",
    o: ["To attempt something (e.g. type a command) to see what happens", "To give up", "To skip it", "To copy only"],
    c: 0,
    e: "To try means to attempt—for example, type a command and see the result. Mistakes are part of learning.",
    de: "Trying commands in a safe environment (or in this quiz) helps you learn. You can always read the explanation after."
  }),
  (_i: number) => ({
    q: "What is a mistake?",
    o: ["An error or wrong action (e.g. a typo or wrong command)", "A correct answer", "A file", "The prompt"],
    c: 0,
    e: "A mistake is something wrong—like a typo or choosing the wrong option. Fixing mistakes helps you learn.",
    de: "Everyone makes mistakes. In the terminal, 'command not found' often means a typo. Correct it and try again."
  }),
  (_i: number) => ({
    q: "What is the screen (in the terminal context)?",
    o: ["The display area where you see the prompt, your typing, and the output", "Only the desktop", "A file", "A command"],
    c: 0,
    e: "The screen is the visible part of the terminal window where text appears.",
    de: "You look at the screen to see the prompt, what you type, and the output. Scrolling moves what is on the screen."
  }),
  (_i: number) => ({
    q: "What does 'to repeat' mean when practicing?",
    o: ["To do something again (e.g. run a command or answer more questions)", "To delete something", "To skip", "To exit"],
    c: 0,
    e: "To repeat means to do the same kind of action again. Repeating helps you remember and get faster.",
    de: "Repeating commands and quiz questions builds muscle memory and understanding. Level 0 is a safe place to repeat."
  }),
  (_i: number) => ({
    q: "What is a result?",
    o: ["What you get after doing something (e.g. the output of a command)", "The command you typed", "The prompt", "An error only"],
    c: 0,
    e: "The result is what happens or what you get—for example, the output or message after running a command.",
    de: "A command produces a result: maybe a list of files, a message, or an error. Reading the result tells you what happened."
  }),
  (_i: number) => ({
    q: "What is a message?",
    o: ["Text that the computer shows you (e.g. output, error, or prompt)", "A file", "A command", "A key"],
    c: 0,
    e: "A message is any text the computer displays—output, errors, or prompts. You read messages to understand what is going on.",
    de: "The terminal is full of messages: the prompt, command output, and error messages. Learning to read them is part of using the terminal."
  }),
  (_i: number) => ({
    q: "What does 'to close' the terminal mean?",
    o: ["To end the terminal window or session (e.g. close the window or type exit)", "To clear the screen", "To minimize", "To log out of the computer"],
    c: 0,
    e: "To close the terminal means to end that window or session—for example, by closing the window or typing exit.",
    de: "Closing stops any command running in that window. Your files and the computer stay on; only that terminal session ends."
  }),
  (_i: number) => ({
    q: "What is a default?",
    o: ["The normal or built-in choice when you do not specify something else", "An error", "A custom setting", "A command"],
    c: 0,
    e: "Default means the usual behavior or value—for example, the default folder when you open the terminal might be your home folder.",
    de: "Many commands have defaults: if you do not say which folder, they use the current directory. Learning defaults saves time."
  }),
  (_i: number) => ({
    q: "What is a step (in learning)?",
    o: ["One small part of a process (e.g. 'first step: type the command')", "A folder level", "A command", "A key"],
    c: 0,
    e: "A step is one part of doing something. Learning in steps means doing one thing at a time.",
    de: "Level 0 is the first step. Then Level 1, 2, and so on. Each step builds on the previous one."
  }),
  (_i: number) => ({
    q: "What does 'to start' mean in the context of the terminal?",
    o: ["To open the terminal or begin a session", "To run a command", "To turn on the computer", "To log in only"],
    c: 0,
    e: "To start the terminal means to open the terminal application so you can type commands.",
    de: "You start the terminal from your system menu or by running the Terminal (or similar) app. Then you see the prompt and can type."
  }),
  (_i: number) => ({
    q: "What is a concept?",
    o: ["An idea or notion (e.g. 'command', 'directory', 'path')", "A command only", "A file", "A key"],
    c: 0,
    e: "A concept is an idea you need to understand—like command, directory, or path. Level 0 teaches basic concepts.",
    de: "Once you understand concepts like 'terminal' and 'command,' you can learn real commands (Level 1 and beyond) more easily."
  }),
  (_i: number) => ({
    q: "Why is Level 0 easier than Level 1?",
    o: ["Level 0 assumes no prior knowledge and uses only simple words and ideas", "Level 0 has fewer questions", "Level 1 is broken", "Level 0 has no explanations"],
    c: 0,
    e: "Level 0 is for complete beginners: no terminal experience assumed. Level 1 starts introducing real commands.",
    de: "Level 0 teaches what a terminal is, what a command is, and basic vocabulary. Level 1 adds actual commands like ls and cd."
  }),
];

import { level0Intermediate } from './level0_intermediate_cli';
import { level0Expert } from './level0_expert_cli';

export const level0Patterns = beginner;
export const level0IntermediateA = level0Intermediate.slice(0, 50);
export const level0IntermediateB = level0Intermediate.slice(50, 100);
export const level0ExpertA = level0Expert.slice(0, 50);
export const level0ExpertB = level0Expert.slice(50, 100);
