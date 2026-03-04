// LEVEL 4: SMALL FISH — Process Management (CLI)
// 100 Beginner questions. Intermediate/Expert use placeholders.

const beginner = [
  (_i: number) => ({
    q: "What does `ps` display?",
    o: ["Snapshot of running processes", "Process status only", "CPU usage", "Memory usage"],
    c: 0,
    e: "ps shows a snapshot of current processes.",
    de: "ps lists processes. ps aux (BSD) or ps -ef (SysV) for full listing. PID, user, CPU, memory, command.",
    deBeginner: "ps shows a list of running processes. Use ps aux or ps -ef to see a full list with user, PID, CPU, memory, and command. PID is the process ID.",
    deExpert: "ps: process snapshot. ps aux / ps -ef full listing. PID, user, CPU, mem, cmd."
  }),
  (_i: number) => ({
    q: "What does `top` do?",
    o: ["Interactive real-time process monitor", "Lists top processes only", "Process tree", "CPU top 10"],
    c: 0,
    e: "top shows live updating process list. q to quit.",
    de: "top updates continuously. Shows CPU, memory, load. h for help. k to kill, r to renice.",
    deBeginner: "top keeps updating and shows CPU, memory, and load. Press h for help, k to kill a process, r to change priority. Press q to quit.",
    deExpert: "top: live process list. h help, k kill, r renice. q quit."
  }),
  (_i: number) => ({
    q: "What does `kill PID` send by default?",
    o: ["SIGTERM (15)", "SIGKILL (9)", "SIGINT (2)", "SIGSTOP (19)"],
    c: 0,
    e: "kill sends SIGTERM by default. Process can catch and clean up.",
    de: "SIGTERM allows graceful shutdown. kill -9 or kill -KILL forces immediate termination.",
    deBeginner: "By default kill sends SIGTERM, which asks the process to shut down nicely. If it doesn't exit, use kill -9 (SIGKILL) to force it to stop immediately.",
    deExpert: "kill default: SIGTERM. kill -9 / -KILL: force. No catch."
  }),
  (_i: number) => ({
    q: "What does `kill -9 PID` do?",
    o: ["Force-kills process (SIGKILL)", "Sends signal 9 only", "Pauses process", "Sends SIGTERM"],
    c: 0,
    e: "kill -9 sends SIGKILL; process cannot catch it. Use when SIGTERM fails.",
    de: "SIGKILL cannot be caught. Process dies immediately. Last resort for stuck processes.",
    deBeginner: "kill -9 sends SIGKILL. The process cannot ignore it and stops right away. Use this only when a normal kill doesn't work.",
    deExpert: "kill -9: SIGKILL. Uncatchable. Last resort."
  }),
  (_i: number) => ({
    q: "What does `nice` set?",
    o: ["Process scheduling priority (nice value)", "Process name", "CPU affinity", "Memory limit"],
    c: 0,
    e: "nice sets priority. -20 (highest) to 19 (lowest). Lower nice = higher priority.",
    de: "nice -n 10 cmd runs with nice 10. renice changes existing process. Only root can lower nice.",
    deBeginner: "nice sets how \"nice\" a process is to others: -20 is highest priority, 19 is lowest. nice -n 10 command runs with nice 10. Only root can use negative nice.",
    deExpert: "nice: scheduling priority. -20..19. renice for running. Root for lower nice."
  }),
  (_i: number) => ({
    q: "What does `cron` do?",
    o: ["Schedules jobs at specified times", "Runs jobs once", "Manages cron daemon", "Lists cron jobs"],
    c: 0,
    e: "cron runs commands on a schedule (minute, hour, day, month, weekday).",
    de: "crontab -e to edit. Format: min hour day month weekday command. /etc/cron.d for system jobs.",
    deBeginner: "cron runs commands on a schedule (every minute, hour, day, etc.). Edit your schedule with crontab -e. The format is: minute, hour, day of month, month, day of week, then the command.",
    deExpert: "cron: scheduled jobs. crontab -e. Format: min hour dom month dow cmd."
  }),
  (_i: number) => ({
    q: "What is a daemon?",
    o: ["Background process that runs without a terminal", "A system service", "A cron job", "An init process"],
    c: 0,
    e: "Daemons run in background, typically started at boot or by systemd.",
    de: "Examples: sshd, nginx, cron. Often end in 'd'. Detached from controlling terminal.",
    deBeginner: "A daemon is a program that runs in the background without a terminal, like sshd or nginx. They often have names ending in 'd' and start at boot.",
    deExpert: "Daemon: background, no tty. sshd, nginx. Often -d suffix."
  }),
  (_i: number) => ({
    q: "What does `systemctl start service` do?",
    o: ["Starts a systemd service", "Starts a process", "Starts cron", "Starts init"],
    c: 0,
    e: "systemctl start service starts the named systemd service.",
    de: "systemctl start nginx. systemctl stop, restart, status, enable, disable for other operations.",
    deBeginner: "systemctl start starts a systemd service, e.g. systemctl start nginx. You can also use stop, restart, status, enable, and disable.",
    deExpert: "systemctl start/stop/restart/status/enable/disable. Service control."
  }),
  (_i: number) => ({
    q: "What does `uptime` show?",
    o: ["Uptime and load averages", "Process count", "CPU usage", "Memory usage"],
    c: 0,
    e: "uptime shows how long system has been up and load averages (1, 5, 15 min).",
    de: "Load average = runnable processes. 1.0 on 1 CPU = fully utilized. Also in top output.",
    deBeginner: "uptime shows how long the system has been on and three load averages (1, 5, and 15 minutes). Load is how busy the CPUs are; 1.0 on a single CPU means it's fully used.",
    deExpert: "uptime: system up time + load avg (1, 5, 15 min). Load = runnable."
  }),
  (_i: number) => ({
    q: "What does `free -h` show?",
    o: ["Memory and swap usage (human-readable)", "Free disk space", "Free processes", "Free CPU"],
    c: 0,
    e: "free shows total, used, free, and available memory and swap.",
    de: "free -h uses K, M, G. 'available' is more accurate than 'free' for usable memory.",
    deBeginner: "free -h shows memory and swap in human-readable units (K, M, G). It shows total, used, free, and available. The 'available' column is what you can really use.",
    deExpert: "free -h: RAM + swap. K/M/G. available > free for real usable."
  }),
  (_i: number) => ({
    q: "What is swap?",
    o: ["Disk space used as virtual memory", "Memory swap", "Process swap", "CPU swap"],
    c: 0,
    e: "Swap extends RAM by using disk. Used when RAM is full.",
    de: "Slower than RAM. swapon /swapfile. free -h shows swap. /proc/swaps lists swap devices.",
    deBeginner: "Swap is disk space used as extra memory when RAM is full. It's slower than RAM. free -h shows how much swap you have. swapon turns on a swap file.",
    deExpert: "Swap: disk as RAM. Slower. swapon/swapoff. free -h, /proc/swaps."
  }),
  (_i: number) => ({
    q: "What does `pgrep pattern` do?",
    o: ["Finds PIDs matching process name", "Prints process list", "Process grep", "Process group"],
    c: 0,
    e: "pgrep returns PIDs of processes whose name matches the pattern.",
    de: "pgrep nginx. Often used with kill: kill $(pgrep nginx). -f matches full command line.",
    deBeginner: "pgrep finds process IDs whose name matches the pattern. Example: pgrep nginx. You can then kill them with kill $(pgrep nginx). -f matches the full command line.",
    deExpert: "pgrep: PIDs by name. kill $(pgrep nginx). -f full cmdline."
  }),
  (_i: number) => ({
    q: "What does `pkill pattern` do?",
    o: ["Sends signal to processes matching name", "Prints matching processes", "Kills by PID", "Process kill list"],
    c: 0,
    e: "pkill sends signal (default SIGTERM) to processes matching the pattern.",
    de: "pkill -9 nginx. Like kill $(pgrep nginx). -f for full command line match.",
    deBeginner: "pkill sends a signal (default SIGTERM) to all processes whose name matches. pkill -9 nginx force-kills nginx. -f matches the full command line.",
    deExpert: "pkill: signal by name. Default SIGTERM. -9 SIGKILL. -f full cmdline."
  }),
  (_i: number) => ({
    q: "What does `jobs` show in shell?",
    o: ["Background and suspended jobs in current shell", "All system jobs", "Cron jobs", "Systemd jobs"],
    c: 0,
    e: "jobs lists background and suspended jobs of the current shell.",
    de: "fg %1 brings job 1 to foreground. bg %1 resumes in background. Ctrl+Z suspends.",
    deBeginner: "jobs lists the background and suspended jobs in your current shell. Use fg %1 to bring job 1 to the foreground, bg %1 to run it in the background again, and Ctrl+Z to suspend.",
    deExpert: "jobs: bg/suspended in shell. fg %n, bg %n. Ctrl+Z suspend."
  }),
  (_i: number) => ({
    q: "What does `bg` do?",
    o: ["Resumes suspended job in background", "Starts background job", "Lists background jobs", "Stops background job"],
    c: 0,
    e: "bg resumes a suspended job in the background.",
    de: "bg or bg %1. Job must be suspended first (Ctrl+Z). fg brings it back to foreground.",
    deBeginner: "bg resumes a suspended job in the background. First suspend with Ctrl+Z, then type bg or bg %1. Use fg to bring it back to the foreground.",
    deExpert: "bg: resume suspended job in background. Ctrl+Z first. fg to foreground."
  }),
  (_i: number) => ({
    q: "What does `fg` do?",
    o: ["Brings background/suspended job to foreground", "Forces job", "Finds job", "Finishes job"],
    c: 0,
    e: "fg brings the most recent background/suspended job to foreground.",
    de: "fg %1 for specific job. Takes over terminal until job completes or is suspended.",
    deBeginner: "fg brings the most recent background or suspended job to the foreground. fg %1 brings job 1. The job uses the terminal until it finishes or you press Ctrl+Z.",
    deExpert: "fg: bring job to foreground. fg %n. Takes over tty."
  }),
  (_i: number) => ({
    q: "What does `nohup cmd > out.log &` do?",
    o: ["Runs cmd immune to hangup, output to file, in background", "Runs in background only", "Ignores output", "Hangs up process"],
    c: 0,
    e: "nohup keeps process running after terminal closes. & runs in background.",
    de: "nohup ignores SIGHUP. Output goes to nohup.out or specified file. Common for long-running jobs.",
    deBeginner: "nohup keeps the command running after you close the terminal. > out.log sends output to that file. The & runs it in the background. Good for long-running scripts.",
    deExpert: "nohup: immune to SIGHUP. > out.log, & background. Long-running."
  }),
  (_i: number) => ({
    q: "What does `disown` do?",
    o: ["Removes job from shell's job table (no SIGHUP)", "Deletes job", "Disowns process", "Detaches job"],
    c: 0,
    e: "disown removes job from shell so it won't receive SIGHUP when shell exits.",
    de: "disown or disown %1. Job becomes orphaned to init. Alternative to nohup for already-running jobs.",
    deBeginner: "disown removes a job from the shell's list so it won't get SIGHUP when you exit. Use disown or disown %1. The job keeps running and is adopted by init. Use for jobs already in the background.",
    deExpert: "disown: remove from job table, no SIGHUP. disown %n. Orphan to init."
  }),
  (_i: number) => ({
    q: "What does `ps aux` show?",
    o: ["All processes with user-oriented format", "User processes only", "Auxiliary processes", "Process status"],
    c: 0,
    e: "ps aux shows all processes (BSD-style). USER, PID, %CPU, %MEM, VSZ, RSS, STAT, START, TIME, COMMAND.",
    de: "a = all users, u = user-oriented, x = include processes without terminal. Common for full listing.",
    deBeginner: "ps aux shows all processes in a user-friendly format: user, PID, CPU, memory, status, time, and command. The options mean: a=all users, u=user format, x=include processes without a terminal.",
    deExpert: "ps aux: all, user format, no-tty. USER PID %CPU %MEM STAT CMD."
  }),
  (_i: number) => ({
    q: "What does `ps -ef` show?",
    o: ["Full process listing (SysV style)", "Effective format", "Extended format", "Error format"],
    c: 0,
    e: "ps -ef shows full listing: UID, PID, PPID, C, STIME, TTY, TIME, CMD.",
    de: "SysV style. -e = all, -f = full format. PPID is parent PID. Equivalent to ps aux for different output.",
    deBeginner: "ps -ef shows a full process list in SysV style: UID, PID, PPID, and more. -e means all processes, -f means full format. PPID is the parent process ID.",
    deExpert: "ps -ef: SysV style. -e all, -f full. PPID parent."
  }),
  (_i: number) => ({
    q: "What is a PID?",
    o: ["Process ID (unique number per process)", "Parent ID", "Process index", "Program ID"],
    c: 0,
    e: "PID is the unique kernel-assigned process identifier.",
    de: "$$ in shell is current PID. PID 1 is init/systemd. PPID is parent PID.",
    deBeginner: "PID is the process ID: a unique number the kernel gives each process. In the shell, $$ is your current PID. Process 1 is always init or systemd.",
    deExpert: "PID: process ID. $$ in shell. PID 1 = init/systemd."
  }),
  (_i: number) => ({
    q: "What is a PPID?",
    o: ["Parent Process ID", "Primary PID", "Process PID", "Previous PID"],
    c: 0,
    e: "PPID is the PID of the process that created this process.",
    de: "ps -o ppid= -p PID. Child processes inherit from parent. init (PID 1) adopts orphans.",
    deBeginner: "PPID is the parent process ID: the PID of the process that started this one. Child processes have a PPID pointing to their parent. If a parent dies, init (PID 1) adopts orphans.",
    deExpert: "PPID: parent PID. init adopts orphans. ps -o ppid= -p PID."
  }),
  (_i: number) => ({
    q: "What does `htop` offer over `top`?",
    o: ["Better UI, scroll, search, tree view", "Faster", "More processes", "Different data"],
    c: 0,
    e: "htop has improved UI: colors, scroll, search, tree view, mouse support.",
    de: "F6 to sort, F4 to filter. Often not installed by default. top is more portable.",
    deBeginner: "htop has a nicer interface: colors, scrolling, search, tree view, and mouse support. F6 to sort, F4 to filter. It may not be installed by default; top works everywhere.",
    deExpert: "htop: UI, scroll, tree, F6 sort F4 filter. top more portable."
  }),
  (_i: number) => ({
    q: "What does `renice` do?",
    o: ["Changes nice value of running process", "Renames process", "Restarts process", "Removes process"],
    c: 0,
    e: "renice -n 10 -p PID changes priority of existing process. Root can lower nice.",
    de: "renice -n 5 -u user changes all of user's processes. Lower nice = higher priority.",
    deBeginner: "renice changes the nice value of a process that is already running. renice -n 10 -p PID sets that process to nice 10. Only root can lower nice (raise priority). renice -u user changes all of a user's processes.",
    deExpert: "renice: change nice of running process. -n -p PID. -u for user. Root for lower."
  }),
  (_i: number) => ({
    q: "What does `crontab -e` do?",
    o: ["Opens crontab for editing", "Executes crontab", "Exports crontab", "Exports to crontab"],
    c: 0,
    e: "crontab -e edits your user crontab. crontab -l lists it.",
    de: "Uses $EDITOR. crontab -r removes. crontab file for user. /etc/crontab for system.",
    deBeginner: "crontab -e opens your cron schedule in an editor (from $EDITOR). Edit and save to set when commands run. crontab -l shows your schedule; crontab -r removes it.",
    deExpert: "crontab -e: edit. -l list, -r remove. $EDITOR. Per-user."
  }),
  (_i: number) => ({
    q: "What does `systemctl status service` show?",
    o: ["Service status, logs, enabled/disabled", "Process list", "CPU usage", "Memory only"],
    c: 0,
    e: "systemctl status shows if running, enabled, and recent log lines.",
    de: "Active (running), inactive (dead), failed. journalctl -u service for full logs.",
    deBeginner: "systemctl status shows whether the service is running, enabled at boot, and recent log lines. States include active (running), inactive (dead), and failed. Use journalctl -u service for full logs.",
    deExpert: "systemctl status: running/enabled + logs. journalctl -u for logs."
  }),
  (_i: number) => ({
    q: "What does `systemctl enable service` do?",
    o: ["Enables service to start at boot", "Starts service now", "Enables now", "Enables user"],
    c: 0,
    e: "systemctl enable configures service to start automatically at boot.",
    de: "Creates symlink in /etc/systemd/system. enable --now starts immediately and enables.",
    deBeginner: "systemctl enable makes the service start automatically at boot. It does not start it now. systemctl enable --now both enables and starts it. The setting is stored as a symlink.",
    deExpert: "systemctl enable: start at boot. enable --now: enable + start."
  }),
  (_i: number) => ({
    q: "What does `systemctl disable service` do?",
    o: ["Prevents service from starting at boot", "Stops service", "Disables user", "Removes service"],
    c: 0,
    e: "systemctl disable stops the service from starting at boot.",
    de: "Removes enable symlink. Service can still be started manually with systemctl start.",
    deBeginner: "systemctl disable stops the service from starting at boot. It removes the enable setting. You can still start it manually with systemctl start.",
    deExpert: "systemctl disable: no boot start. Manual start still ok."
  }),
  (_i: number) => ({
    q: "What does `systemctl list-units` show?",
    o: ["List of loaded units", "All units", "Failed units", "Service units only"],
    c: 0,
    e: "systemctl list-units shows active units. --type=service for services only.",
    de: "systemctl list-units --failed for failed. list-unit-files for all installed units.",
    deBeginner: "systemctl list-units shows currently loaded units (services, etc.). Use --type=service for only services. list-units --failed shows failed ones; list-unit-files shows all installed.",
    deExpert: "list-units: loaded. --failed, --type=service. list-unit-files: all."
  }),
  (_i: number) => ({
    q: "What does `killall name` do?",
    o: ["Kills all processes with that name", "Kills one process", "Kills by PID", "Kills all users"],
    c: 0,
    e: "killall sends signal to all processes matching the given name.",
    de: "killall nginx. killall -9 name for SIGKILL. More dangerous than pkill for common names.",
    deBeginner: "killall sends a signal to every process whose name matches. killall nginx kills all nginx processes. killall -9 forces SIGKILL. Be careful with common names—it can kill more than you expect.",
    deExpert: "killall: signal all by name. -9 SIGKILL. Risk with common names."
  }),
  (_i: number) => ({
    q: "What does `vmstat 1` show?",
    o: ["Virtual memory stats every 1 second", "VM status", "Process stats", "Volume stats"],
    c: 0,
    e: "vmstat reports memory, swap, I/O, blocks, CPU. 1 = interval in seconds.",
    de: "Procs, memory, swap, io, system, cpu. Useful for spotting bottlenecks.",
    deBeginner: "vmstat 1 prints virtual memory and system stats every 1 second. It shows processes, memory, swap, I/O, and CPU. The number is the interval in seconds. Good for finding bottlenecks.",
    deExpert: "vmstat [interval]: procs, memory, swap, io, cpu. 1 = 1s."
  }),
  (_i: number) => ({
    q: "What does `lsof` list?",
    o: ["Open files by processes", "List of files", "Large files", "Locked files"],
    c: 0,
    e: "lsof lists open files (file descriptors). lsof -i for network. lsof -p PID for process.",
    de: "Shows which process has file open. lsof /path shows what's using a path. Useful before umount.",
    deBeginner: "lsof lists open files and which process has them open. lsof -i shows network connections. lsof -p PID shows files for one process. lsof /path shows what is using that path—handy before unmounting.",
    deExpert: "lsof: open files. lsof -i network, -p PID, /path for path."
  }),
  (_i: number) => ({
    q: "What does `fuser` do?",
    o: ["Identifies processes using file/socket", "Finds user", "File user", "File usage"],
    c: 0,
    e: "fuser /path shows PIDs using that file or directory. fuser -k kills them.",
    de: "fuser -km /mnt kills processes using /mnt. Useful for unmounting busy filesystems.",
    deBeginner: "fuser shows which processes are using a file or directory. fuser /path lists PIDs. fuser -k kills them. fuser -km /mnt is useful when a filesystem is busy and you need to unmount it.",
    deExpert: "fuser: PIDs using path. -k kill. -km for mount. Unmount helper."
  }),
  (_i: number) => ({
    q: "What does `screen` do?",
    o: ["Terminal multiplexer (detach/reattach sessions)", "Screenshots", "Screen size", "Display"],
    c: 0,
    e: "screen creates detachable sessions. Ctrl+A D detach. screen -r reattach.",
    de: "Persists across SSH disconnects. Alternative to tmux. Multiple windows in one session.",
    deBeginner: "screen is a terminal multiplexer: you can detach and reattach. Ctrl+A then D detaches; screen -r reattaches. Your session keeps running after SSH disconnect. You can have multiple windows.",
    deExpert: "screen: multiplexer. Ctrl+A D detach, -r reattach. Survives disconnect."
  }),
  (_i: number) => ({
    q: "What does `tmux` do?",
    o: ["Terminal multiplexer (sessions, windows, panes)", "Terminal mix", "Terminal max", "Terminal"],
    c: 0,
    e: "tmux creates persistent sessions with windows and panes. Ctrl+B d detach.",
    de: "tmux attach or tmux a to reattach. Split panes, multiple windows. Survives disconnect.",
    deBeginner: "tmux is a terminal multiplexer: sessions, windows, and panes. Ctrl+B d detaches. Use tmux attach or tmux a to reattach. You can split panes and have many windows. Session survives SSH disconnect.",
    deExpert: "tmux: sessions, windows, panes. Ctrl+B d detach. tmux a reattach."
  }),
  (_i: number) => ({
    q: "What does `&` at end of command do?",
    o: ["Runs command in background", "Runs in foreground", "And operator", "Appends output"],
    c: 0,
    e: "cmd & runs cmd in background. Shell returns immediately.",
    de: "cmd & gives you prompt back. Output goes to terminal. Use nohup or redirect for long jobs.",
    deBeginner: "Putting & at the end runs the command in the background. You get your prompt back right away. Output still goes to the terminal. For long jobs use nohup or redirect output to a file.",
    deExpert: "&: background. Prompt returns. nohup/redirect for long jobs."
  }),
  (_i: number) => ({
    q: "What does `Ctrl+C` in terminal do?",
    o: ["Sends SIGINT to foreground process", "Copies text", "Cancels command", "Stops shell"],
    c: 0,
    e: "Ctrl+C sends SIGINT. Process usually terminates (can catch it).",
    de: "SIGINT = interrupt. Most programs exit. Ctrl+Z sends SIGTSTP (suspend).",
    deBeginner: "Ctrl+C sends SIGINT (interrupt) to the foreground process. Most programs then exit. It does not copy text—that's a different shortcut in some terminals. Ctrl+Z suspends instead of killing.",
    deExpert: "Ctrl+C: SIGINT. Interrupt. Ctrl+Z: SIGTSTP suspend."
  }),
  (_i: number) => ({
    q: "What does `Ctrl+Z` do?",
    o: ["Suspends foreground process (SIGTSTP)", "Stops process", "Zeros process", "Pauses process"],
    c: 0,
    e: "Ctrl+Z suspends the process. Use fg or bg to resume.",
    de: "SIGTSTP. Process is stopped (not running). jobs shows it. fg brings it back.",
    deBeginner: "Ctrl+Z sends SIGTSTP and suspends (stops) the foreground process. It stays in the list shown by jobs. Use fg to bring it back to the foreground or bg to run it in the background.",
    deExpert: "Ctrl+Z: SIGTSTP, suspend. jobs, fg, bg."
  }),
  (_i: number) => ({
    q: "What does `at` do?",
    o: ["Schedules one-time job at specified time", "Runs at time", "At command", "Time job"],
    c: 0,
    e: "at 3pm tomorrow runs command once at that time. echo 'cmd' | at time.",
    de: "atq lists pending. atrm removes. at 10:00 < script. One-shot vs cron recurring.",
    deBeginner: "at runs a command once at a given time, e.g. at 3pm tomorrow. Use atq to list pending jobs and atrm to remove one. Unlike cron, it's one-time only.",
    deExpert: "at: one-shot at time. atq, atrm. vs cron recurring."
  }),
  (_i: number) => ({
    q: "What does `watch -n 2 cmd` do?",
    o: ["Runs cmd every 2 seconds", "Watches file", "Watches process", "2-second watch"],
    c: 0,
    e: "watch runs command repeatedly, updating display. -n 2 = every 2 seconds.",
    de: "watch -n 1 free -h. Ctrl+C to stop. Alternative to loop in shell.",
    deBeginner: "watch runs a command over and over and updates the screen. -n 2 means every 2 seconds. Example: watch -n 1 free -h to watch memory. Press Ctrl+C to stop.",
    deExpert: "watch -n N: run cmd every N sec. Ctrl+C stop."
  }),
  (_i: number) => ({
    q: "What does `time cmd` do?",
    o: ["Runs cmd and reports real, user, system time", "Times command", "Times execution", "Shows time"],
    c: 0,
    e: "time reports how long command took. real = wall clock, user = CPU user, system = CPU kernel.",
    de: "time ls. /usr/bin/time for more detail. Shell builtin time may differ.",
    deBeginner: "time runs the command and then prints how long it took: real (wall clock), user (CPU in user mode), and system (CPU in kernel). Try time ls. /usr/bin/time can show more.",
    deExpert: "time: real, user, system. /usr/bin/time for more."
  }),
  (_i: number) => ({
    q: "What does `pidof program` return?",
    o: ["PIDs of running instances of program", "PID of first", "Process ID only", "Program PID"],
    c: 0,
    e: "pidof nginx returns PIDs of nginx processes. Space-separated list.",
    de: "Simpler than pgrep for exact name. kill $(pidof nginx) to kill all.",
    deBeginner: "pidof returns the PIDs of all running processes with that name. pidof nginx gives a list. You can use it with kill: kill $(pidof nginx) to stop all nginx processes.",
    deExpert: "pidof: PIDs by name. kill $(pidof nginx)."
  }),
  (_i: number) => ({
    q: "What does `kill -0 PID` do?",
    o: ["Checks if process exists (no signal sent)", "Kills process", "Signal 0", "No-op"],
    c: 0,
    e: "kill -0 checks if process exists. Exit 0 if exists, non-zero if not. No signal sent.",
    de: "Useful in scripts: if kill -0 $PID 2>/dev/null; then echo 'running'; fi.",
    deBeginner: "kill -0 checks whether the process exists. It does not send a real signal. Exit 0 if the process is there, non-zero if not. Handy in scripts: if kill -0 $PID 2>/dev/null; then echo running; fi.",
    deExpert: "kill -0: check process exists. No signal. Script check."
  }),
  (_i: number) => ({
    q: "What does `ps -o pid,ppid,cmd` show?",
    o: ["Custom columns: PID, PPID, command", "Only PID", "Output format", "Process output"],
    c: 0,
    e: "ps -o allows custom columns. pid,ppid,cmd,%mem,%cpu,etc.",
    de: "ps -eo pid,ppid,cmd. -e for all. -o for user-defined output format.",
    deBeginner: "ps -o lets you choose which columns to show. pid,ppid,cmd shows process ID, parent PID, and command. Use -e for all processes. You can add %mem, %cpu, etc.",
    deExpert: "ps -o: custom columns. -e all. pid,ppid,cmd,%mem."
  }),
  (_i: number) => ({
    q: "What does `pstree` show?",
    o: ["Process tree (parent-child hierarchy)", "Process list", "Tree of PIDs", "Process structure"],
    c: 0,
    e: "pstree shows processes in tree form. pstree -p includes PIDs.",
    de: "Visual hierarchy. pstree -u shows user. pstree PID shows subtree of that process.",
    deBeginner: "pstree shows processes in a tree: parent and children. pstree -p includes PIDs. pstree -u shows usernames. pstree PID shows just the tree under that process.",
    deExpert: "pstree: parent-child tree. -p PIDs, -u user. pstree PID subtree."
  }),
  (_i: number) => ({
    q: "What does `nice -n -5 cmd` require?",
    o: ["Root privileges (lowering nice)", "User privilege", "No special privilege", "Nice privilege"],
    c: 0,
    e: "Only root can lower nice (increase priority). -20 is highest priority.",
    de: "Regular users can only raise nice (lower priority). nice -n 19 is lowest priority.",
    deBeginner: "Lowering nice (e.g. -5) means raising priority and requires root. Normal users can only raise nice (lower priority), e.g. nice -n 19. -20 is highest, 19 is lowest priority.",
    deExpert: "nice -n negative: root only. Users: raise nice only. -20..19."
  }),
  (_i: number) => ({
    q: "What does `crontab -l` do?",
    o: ["Lists current user's crontab", "Lists all crontabs", "Loads crontab", "Last crontab"],
    c: 0,
    e: "crontab -l displays your crontab. crontab -r removes it.",
    de: "Root: crontab -u user -l for another user's crontab.",
    deBeginner: "crontab -l prints your current cron schedule. crontab -r deletes it. As root you can use crontab -u username -l to see another user's crontab.",
    deExpert: "crontab -l: list. -r remove. Root: -u user -l."
  }),
  (_i: number) => ({
    q: "What does `systemctl restart service` do?",
    o: ["Stops and starts service", "Reloads config", "Restarts only if running", "Restarts dependencies"],
    c: 0,
    e: "systemctl restart stops then starts the service. Use reload if config-only change.",
    de: "restart = full stop/start. reload = reload config without full restart (if supported).",
    deBeginner: "systemctl restart stops the service and then starts it again. Use this when you need a full restart. If only config changed, use reload when the service supports it.",
    deExpert: "restart: stop+start. reload: config only if supported."
  }),
  (_i: number) => ({
    q: "What does `journalctl -u service` show?",
    o: ["Logs for the specified systemd service", "Journal for user", "Unit logs", "Service journal"],
    c: 0,
    e: "journalctl -u nginx shows logs for nginx service. -f to follow.",
    de: "journalctl -u nginx -f. -n 100 for last 100 lines. -b for current boot.",
    deBeginner: "journalctl -u shows logs for a systemd service, e.g. journalctl -u nginx. Add -f to follow new lines. -n 100 shows the last 100 lines. -b limits to the current boot.",
    deExpert: "journalctl -u: unit logs. -f follow, -n N lines, -b boot."
  }),
  (_i: number) => ({
    q: "What does `journalctl -f` do?",
    o: ["Follows log output (like tail -f)", "Shows full log", "Follows boot", "Filter logs"],
    c: 0,
    e: "journalctl -f streams new log entries. Ctrl+C to stop.",
    de: "Like tail -f for systemd journal. journalctl -u service -f for specific service.",
    deBeginner: "journalctl -f streams new log entries as they appear, like tail -f for the systemd journal. Press Ctrl+C to stop. Combine with -u service to follow one service.",
    deExpert: "journalctl -f: follow journal. -u service -f for unit."
  }),
  (_i: number) => ({
    q: "What does `swapon -s` show?",
    o: ["Swap usage summary", "Swap on", "Swap status", "Swap devices"],
    c: 0,
    e: "swapon -s or swapon --show lists swap devices and usage.",
    de: "Shows device, type, size, used, priority. swapoff to disable. swapon /swapfile to add.",
    deBeginner: "swapon -s (or --show) lists swap devices and how much is used. You see device, type, size, used, priority. Use swapoff to turn swap off and swapon /swapfile to add a swap file.",
    deExpert: "swapon -s: swap summary. swapoff disable. swapon /path add."
  }),
  (_i: number) => ({
    q: "What does `load average` represent?",
    o: ["Average number of runnable processes over time", "CPU load", "System load", "Process load"],
    c: 0,
    e: "Load = runnable processes. 1.0 on 1 CPU = fully utilized. Shown by uptime, top.",
    de: "1, 5, 15 minute averages. 4.0 on 4 CPUs = fully utilized. High load = system busy.",
    deBeginner: "Load average is the average number of processes that were runnable (waiting for CPU) over the last 1, 5, and 15 minutes. On a 4-CPU system, 4.0 means all CPUs were busy. Shown by uptime and top.",
    deExpert: "Load: runnable avg. 1/5/15 min. N CPUs, load N = full."
  }),
  (_i: number) => ({
    q: "What does `ps -e` show?",
    o: ["All processes", "Every process", "Environment", "Extended"],
    c: 0,
    e: "ps -e selects all processes. Same as -A.",
    de: "ps -ef or ps -e -f for full format. Combined with -o for custom columns.",
    deBeginner: "ps -e shows all processes (same as -A). Often used with other options: ps -ef for full format, or ps -e -o pid,cmd for custom columns.",
    deExpert: "ps -e: all processes. -ef full format. -o custom."
  }),
  (_i: number) => ({
    q: "What does `systemctl is-active service` return?",
    o: ["active, inactive, or failed", "Running status", "Active/inactive", "Service state"],
    c: 0,
    e: "Returns active if running, inactive if failed/stopped. Useful in scripts.",
    de: "systemctl is-enabled for boot status. is-active for current run state.",
    deBeginner: "systemctl is-active returns active if the service is running, inactive or failed otherwise. Handy in scripts. Use systemctl is-enabled to see if it is set to start at boot.",
    deExpert: "is-active: active/inactive/failed. is-enabled: boot."
  }),
  (_i: number) => ({
    q: "What does `systemctl daemon-reload` do?",
    o: ["Reloads systemd config (after unit file changes)", "Restarts daemon", "Reloads all services", "Reloads daemon config"],
    c: 0,
    e: "Run after editing unit files. Picks up new or changed service definitions.",
    de: "Required after editing /etc/systemd/system/*.service. Then systemctl start/restart.",
    deBeginner: "Run systemctl daemon-reload after you add or change unit files under /etc/systemd/system. That way systemd picks up the new config. Then you can systemctl start or restart the service.",
    deExpert: "daemon-reload: reload unit files. After edit .service."
  }),
  (_i: number) => ({
    q: "What does `setsid cmd` do?",
    o: ["Runs cmd in new session (detached from terminal)", "Sets session ID", "Session command", "New session"],
    c: 0,
    e: "setsid creates new session. Process won't receive SIGHUP when terminal closes.",
    de: "Alternative to nohup. setsid cmd & runs detached. Useful for daemon-like behavior.",
    deBeginner: "setsid starts the command in a new session with no controlling terminal. The process will not get SIGHUP when the terminal closes. Often used with &: setsid cmd &. Like nohup for daemon-style runs.",
    deExpert: "setsid: new session, no tty. SIGHUP immune. setsid cmd &."
  }),
  (_i: number) => ({
    q: "What does `sleep 10` do?",
    o: ["Pauses for 10 seconds", "Sleeps process", "Delays 10", "Waits 10"],
    c: 0,
    e: "sleep suspends execution for specified seconds. sleep 5m for minutes.",
    de: "sleep 10. Sleeps current process/shell. Useful in scripts: sleep 5 && retry.",
    deBeginner: "sleep 10 pauses for 10 seconds. You can use sleep 5m for minutes. The current process (or shell) just waits. Often used in scripts: sleep 5 && retry.",
    deExpert: "sleep N: pause N seconds. sleep 5m. Scripts: sleep && retry."
  }),
  (_i: number) => ({
    q: "What does `wait` do in shell?",
    o: ["Waits for background jobs to complete", "Waits for input", "Waits forever", "Waits for PID"],
    c: 0,
    e: "wait waits for all background jobs. wait %1 for specific job.",
    de: "wait returns exit status of job. Useful in scripts: cmd1 & cmd2 & wait.",
    deBeginner: "wait waits for background jobs to finish. wait with no args waits for all. wait %1 waits for job 1. It returns that job's exit status. Common in scripts: cmd1 & cmd2 & wait.",
    deExpert: "wait: for bg jobs. wait %n job n. Exit status. cmd1 & cmd2 & wait."
  }),
  (_i: number) => ({
    q: "What does `exec cmd` do in shell?",
    o: ["Replaces shell with cmd (no new process)", "Executes cmd", "Runs cmd", "Exec command"],
    c: 0,
    e: "exec replaces shell process with cmd. Shell exits when cmd exits. No return.",
    de: "exec ls replaces shell with ls. Common in scripts: exec myapp (no extra shell).",
    deBeginner: "exec replaces the shell with the command. The shell process becomes that command; when it exits, there is no shell to return to. Often used in scripts: exec myapp so there's no extra shell process.",
    deExpert: "exec: replace shell with cmd. No return. exec myapp in scripts."
  }),
  (_i: number) => ({
    q: "What does `$$` expand to in shell?",
    o: ["Current shell PID", "Parent PID", "Last PID", "Process ID"],
    c: 0,
    e: "$$ is the PID of the current shell.",
    de: "echo $$. $PPID is parent. Useful for temp files: /tmp/script.$$.",
    deBeginner: "$$ is the PID of the current shell. echo $$ to see it. $PPID is the parent's PID. People use $$ in temp file names so each run is unique: /tmp/script.$$.",
    deExpert: "$$: current shell PID. $PPID parent. /tmp/foo.$$."
  }),
  (_i: number) => ({
    q: "What does `$!` in shell contain?",
    o: ["PID of last background process", "Last PID", "Background PID", "Last job PID"],
    c: 0,
    e: "$! is PID of most recently started background job.",
    de: "cmd &; echo $!. Useful to wait or kill: kill $!.",
    deBeginner: "$! is the PID of the last process you started in the background. After cmd & you can echo $! to see it, or kill $! to kill that job, or wait $! to wait for it.",
    deExpert: "$!: PID of last bg process. kill $!, wait $!."
  }),
  (_i: number) => ({
    q: "What does `ionice` do?",
    o: ["Sets I/O scheduling class/priority", "Sets CPU nice", "I/O nice", "I/O priority"],
    c: 0,
    e: "ionice sets I/O priority. Idle class for backups. -c3 = idle.",
    de: "ionice -c3 backup.sh. Reduces disk impact. -c1 = realtime, -c2 = best-effort, -c3 = idle.",
    deBeginner: "ionice sets I/O priority (disk access). ionice -c3 backup.sh runs the backup in the idle class so it doesn't slow other programs. -c1 is realtime, -c2 best-effort, -c3 idle.",
    deExpert: "ionice: I/O priority. -c3 idle. -c1 rt, -c2 best-effort."
  }),
  (_i: number) => ({
    q: "What does `taskset` do?",
    o: ["Sets CPU affinity (which CPUs process can use)", "Sets task", "Task set", "CPU set"],
    c: 0,
    e: "taskset -c 0,1 cmd runs cmd only on CPUs 0 and 1.",
    de: "taskset -p PID shows affinity. Useful for isolating workloads to specific cores.",
    deBeginner: "taskset sets which CPUs a process may use (CPU affinity). taskset -c 0,1 command runs it only on CPUs 0 and 1. taskset -p PID shows the affinity of a running process.",
    deExpert: "taskset: CPU affinity. -c 0,1. -p PID show."
  }),
  (_i: number) => ({
    q: "What does `/proc/PID/` contain?",
    o: ["Process-specific info (virtual files)", "Process files", "PID directory", "Process data"],
    c: 0,
    e: "/proc/PID/ has process info: cmdline, environ, status, fd, etc.",
    de: "Virtual filesystem. cat /proc/PID/cmdline. /proc/self/ for current process.",
    deBeginner: "/proc/PID/ is a virtual directory with info about that process: cmdline, environ, status, fd, etc. cat /proc/PID/cmdline shows the command. /proc/self/ is the current process.",
    deExpert: "/proc/PID/: virtual fs. cmdline, environ, status, fd. /proc/self/."
  }),
  (_i: number) => ({
    q: "What does `OOM` mean?",
    o: ["Out Of Memory (kernel kills process)", "Out of memory", "Memory overflow", "Over memory"],
    c: 0,
    e: "OOM killer runs when system is out of memory. Kills process to free memory.",
    de: "dmesg | grep -i oom. /proc/PID/oom_score. Can tune with vm.oom_kill_allocating_task.",
    deBeginner: "OOM means Out Of Memory. When the system runs out of memory, the kernel OOM killer picks a process and kills it to free memory. Check dmesg | grep -i oom. /proc/PID/oom_score is used to choose which process.",
    deExpert: "OOM: out of memory killer. dmesg, oom_score. Kernel picks victim."
  }),
  (_i: number) => ({
    q: "What does `ulimit -n` show?",
    o: ["Max open file descriptors per process", "Max files", "File limit", "Numeric limit"],
    c: 0,
    e: "ulimit -n is max open files. ulimit -a shows all limits.",
    de: "ulimit -n 65535 to raise. Can hit limit with many connections. /etc/security/limits.conf.",
    deBeginner: "ulimit -n is the maximum number of open file descriptors (files, sockets) per process. ulimit -a shows all limits. ulimit -n 65535 raises it. Many connections can hit this limit.",
    deExpert: "ulimit -n: max open fds. ulimit -a. limits.conf."
  }),
  (_i: number) => ({
    q: "What does `strace cmd` do?",
    o: ["Traces system calls made by cmd", "Traces process", "Strace command", "System trace"],
    c: 0,
    e: "strace shows syscalls. Useful for debugging. strace -p PID to attach.",
    de: "strace ls. strace -e open,read. -f for children. -p PID attaches to running process.",
    deBeginner: "strace shows the system calls a program makes (open, read, write, etc.). Run strace ls to see what ls does. strace -p PID attaches to a running process. -f follows child processes.",
    deExpert: "strace: syscalls. -e filter, -f children, -p PID attach."
  }),
  (_i: number) => ({
    q: "What does `ltrace` do?",
    o: ["Traces library calls", "Library trace", "Link trace", "Trace libs"],
    c: 0,
    e: "ltrace shows library function calls (vs strace for syscalls).",
    de: "ltrace cmd. Less common than strace. Useful for seeing library behavior.",
    deBeginner: "ltrace shows library function calls (e.g. printf, malloc) instead of kernel system calls. Run ltrace command. Less common than strace but useful to see what libraries do.",
    deExpert: "ltrace: library calls. vs strace syscalls."
  }),
  (_i: number) => ({
    q: "What does `cgroups` control?",
    o: ["Resource limits for process groups", "CPU groups", "Control groups", "Process groups"],
    c: 0,
    e: "cgroups limit CPU, memory, I/O for groups of processes. Used by systemd, Docker.",
    de: "/sys/fs/cgroup/. systemd creates cgroups for services. Docker uses for containers.",
    deBeginner: "cgroups (control groups) limit and measure resources (CPU, memory, I/O) for groups of processes. systemd puts each service in a cgroup. Docker uses cgroups for containers. See /sys/fs/cgroup/.",
    deExpert: "cgroups: resource limits. CPU, memory, I/O. systemd, Docker."
  }),
  (_i: number) => ({
    q: "What does `systemctl mask service` do?",
    o: ["Prevents service from starting (even manually)", "Masks service", "Disables service", "Hides service"],
    c: 0,
    e: "mask links to /dev/null. Stronger than disable. Prevents accidental start.",
    de: "systemctl unmask to restore. Use for conflicting services.",
    deBeginner: "systemctl mask completely disables a service: it can't be started even by hand (unlike disable). It's done by linking to /dev/null. Use systemctl unmask to undo. Good for conflicting services.",
    deExpert: "mask: link to /dev/null, no start. unmask restore. vs disable."
  }),
  (_i: number) => ({
    q: "What does `systemctl list-dependencies service` show?",
    o: ["Service dependency tree", "Dependencies", "Requires", "Depends"],
    c: 0,
    e: "Shows what service requires and what requires it. --reverse for reverse deps.",
    de: "systemctl list-dependencies nginx. --reverse shows what depends on nginx.",
    deBeginner: "systemctl list-dependencies shows what a service needs (and optionally what needs it). list-dependencies nginx lists nginx's dependencies. Add --reverse to see what depends on nginx.",
    deExpert: "list-dependencies: deps tree. --reverse: what depends on unit."
  }),
  (_i: number) => ({
    q: "What does `crontab` format: '0 * * * *' mean?",
    o: ["Every hour at minute 0", "Every minute", "Every day", "At midnight"],
    c: 0,
    e: "min hour day month weekday. 0 * * * * = minute 0 of every hour.",
    de: "0 0 * * * = midnight daily. */5 * * * * = every 5 min. 0 0 * * 0 = Sunday midnight.",
    deBeginner: "Cron format is: minute hour day-of-month month day-of-week. 0 * * * * means minute 0 of every hour (every hour on the hour). 0 0 * * * is midnight daily. */5 * * * * is every 5 minutes.",
    deExpert: "0 * * * *: every hour. min hour dom month dow. 0 0 * * * midnight."
  }),
  (_i: number) => ({
    q: "What does `@reboot` in crontab mean?",
    o: ["Run once at system boot", "Reboot cron", "Reboot job", "At boot"],
    c: 0,
    e: "@reboot runs job once when system boots. Non-standard but common.",
    de: "@reboot /path/to/script. @daily, @hourly also exist. Check system cron support.",
    deBeginner: "@reboot is a cron keyword: run the job once when the system boots. Put @reboot /path/to/script in crontab. @daily and @hourly exist on some systems. Support varies.",
    deExpert: "@reboot: once at boot. @daily, @hourly. Non-standard."
  }),
  (_i: number) => ({
    q: "What does `systemctl isolate multi-user.target` do?",
    o: ["Switches to multi-user mode (no GUI)", "Isolates target", "Multi-user mode", "Text mode"],
    c: 0,
    e: "Stops graphical target, starts multi-user. Like runlevel 3.",
    de: "Similar to init 3. graphical.target for GUI. isolate stops other targets.",
    deBeginner: "systemctl isolate multi-user.target switches to multi-user mode (text mode, no GUI). It stops the graphical target and starts multi-user. Similar to the old init 3. Use graphical.target to get the GUI back.",
    deExpert: "isolate multi-user.target: no GUI. Like init 3. graphical.target."
  }),
  (_i: number) => ({
    q: "What does `runlevel` show?",
    o: ["Previous and current runlevel (SysV)", "Current runlevel", "Run level", "Init level"],
    c: 0,
    e: "runlevel shows N 5 for example. N=previous, 5=current. On systemd, may show legacy.",
    de: "SysV init: 0=halt, 1=single, 3=multi-user, 5=graphical. systemd has targets instead.",
    deBeginner: "runlevel shows the previous and current runlevel (e.g. N 5). It comes from SysV init. 0=halt, 1=single-user, 3=multi-user, 5=graphical. On systemd systems you use targets instead.",
    deExpert: "runlevel: prev current. 0 halt, 1 single, 3 multi, 5 graphical. systemd targets."
  }),
  (_i: number) => ({
    q: "What does `init` (PID 1) do?",
    o: ["First process; manages all other processes", "Initializes system", "Init process", "Parent of all"],
    c: 0,
    e: "init is PID 1. On systemd systems, it's systemd. Adopts orphans, reaps zombies.",
    de: "Cannot be killed. Starts all services. On modern Linux: systemd or init replacement.",
    deBeginner: "init is process 1 (PID 1): the first process and the parent of all others. It starts services and adopts orphan processes. You can't kill it. On most Linux systems it's systemd.",
    deExpert: "PID 1: init/systemd. Adopts orphans. Cannot kill."
  }),
  (_i: number) => ({
    q: "What is a zombie process?",
    o: ["Dead process whose exit status hasn't been reaped", "Stopped process", "Killed process", "Dead process"],
    c: 0,
    e: "Zombie (Z state) has exited but parent hasn't wait()ed. Harmless until parent reaps.",
    de: "Parent must reap. If parent dies, init adopts and reaps. Zombies accumulate if parent buggy.",
    deBeginner: "A zombie is a process that has exited but whose parent hasn't collected its exit status yet (hasn't called wait). It shows as Z. The parent must reap it. If the parent dies, init reaps. Too many zombies usually means a buggy parent.",
    deExpert: "Zombie: exited, not reaped. Z state. Parent wait(). init adopts."
  }),
  (_i: number) => ({
    q: "What does `kill -l` show?",
    o: ["List of signal names and numbers", "Kill list", "Signal list", "List signals"],
    c: 0,
    e: "kill -l lists available signals. SIGTERM=15, SIGKILL=9, SIGINT=2, etc.",
    de: "kill -l. kill -9 = kill -KILL = kill -SIGKILL. Same signal, different names.",
    deBeginner: "kill -l lists signal names and numbers. You see SIGTERM=15, SIGKILL=9, SIGINT=2, etc. kill -9 is the same as kill -KILL or kill -SIGKILL—different names for the same signal.",
    deExpert: "kill -l: signal list. -9 = -KILL = -SIGKILL."
  }),
  (_i: number) => ({
    q: "What does `trap` do in shell?",
    o: ["Catches signals and runs handler", "Traps signals", "Signal handler", "Catch signals"],
    c: 0,
    e: "trap 'cleanup' EXIT SIGINT. Runs handler on signal or exit.",
    de: "trap '' SIGINT ignores Ctrl+C. trap 'rm -f /tmp/foo' EXIT for cleanup on exit.",
    deBeginner: "trap runs a command when the shell gets a signal or on exit. trap 'cleanup' EXIT SIGINT runs cleanup on exit or Ctrl+C. trap '' SIGINT ignores Ctrl+C. trap 'rm -f /tmp/foo' EXIT cleans up on exit.",
    deExpert: "trap: signal/EXIT handler. trap '' SIGINT ignore. EXIT cleanup."
  }),
];

import { level4Intermediate } from './level4_intermediate_cli';
import { level4Expert } from './level4_expert_cli';

export const level4Patterns = beginner;
export const level4IntermediateA = level4Intermediate.slice(0, 50);
export const level4IntermediateB = level4Intermediate.slice(50, 100);
export const level4ExpertA = level4Expert.slice(0, 50);
export const level4ExpertB = level4Expert.slice(50, 121);
