// LEVEL 4: SMALL FISH — Process Management (CLI)
// 100 Beginner questions. Intermediate/Expert use placeholders.

const beginner = [
  (_i: number) => ({
    q: "What does `ps` display?",
    o: ["Snapshot of running processes", "Process status only", "CPU usage", "Memory usage"],
    c: 0,
    e: "ps shows a snapshot of current processes.",
    de: "ps lists processes. ps aux (BSD) or ps -ef (SysV) for full listing. PID, user, CPU, memory, command."
  }),
  (_i: number) => ({
    q: "What does `top` do?",
    o: ["Interactive real-time process monitor", "Lists top processes only", "Process tree", "CPU top 10"],
    c: 0,
    e: "top shows live updating process list. q to quit.",
    de: "top updates continuously. Shows CPU, memory, load. h for help. k to kill, r to renice."
  }),
  (_i: number) => ({
    q: "What does `kill PID` send by default?",
    o: ["SIGTERM (15)", "SIGKILL (9)", "SIGINT (2)", "SIGSTOP (19)"],
    c: 0,
    e: "kill sends SIGTERM by default. Process can catch and clean up.",
    de: "SIGTERM allows graceful shutdown. kill -9 or kill -KILL forces immediate termination."
  }),
  (_i: number) => ({
    q: "What does `kill -9 PID` do?",
    o: ["Force-kills process (SIGKILL)", "Sends signal 9 only", "Pauses process", "Sends SIGTERM"],
    c: 0,
    e: "kill -9 sends SIGKILL; process cannot catch it. Use when SIGTERM fails.",
    de: "SIGKILL cannot be caught. Process dies immediately. Last resort for stuck processes."
  }),
  (_i: number) => ({
    q: "What does `nice` set?",
    o: ["Process scheduling priority (nice value)", "Process name", "CPU affinity", "Memory limit"],
    c: 0,
    e: "nice sets priority. -20 (highest) to 19 (lowest). Lower nice = higher priority.",
    de: "nice -n 10 cmd runs with nice 10. renice changes existing process. Only root can lower nice."
  }),
  (_i: number) => ({
    q: "What does `cron` do?",
    o: ["Schedules jobs at specified times", "Runs jobs once", "Manages cron daemon", "Lists cron jobs"],
    c: 0,
    e: "cron runs commands on a schedule (minute, hour, day, month, weekday).",
    de: "crontab -e to edit. Format: min hour day month weekday command. /etc/cron.d for system jobs."
  }),
  (_i: number) => ({
    q: "What is a daemon?",
    o: ["Background process that runs without a terminal", "A system service", "A cron job", "An init process"],
    c: 0,
    e: "Daemons run in background, typically started at boot or by systemd.",
    de: "Examples: sshd, nginx, cron. Often end in 'd'. Detached from controlling terminal."
  }),
  (_i: number) => ({
    q: "What does `systemctl start service` do?",
    o: ["Starts a systemd service", "Starts a process", "Starts cron", "Starts init"],
    c: 0,
    e: "systemctl start service starts the named systemd service.",
    de: "systemctl start nginx. systemctl stop, restart, status, enable, disable for other operations."
  }),
  (_i: number) => ({
    q: "What does `uptime` show?",
    o: ["Uptime and load averages", "Process count", "CPU usage", "Memory usage"],
    c: 0,
    e: "uptime shows how long system has been up and load averages (1, 5, 15 min).",
    de: "Load average = runnable processes. 1.0 on 1 CPU = fully utilized. Also in top output."
  }),
  (_i: number) => ({
    q: "What does `free -h` show?",
    o: ["Memory and swap usage (human-readable)", "Free disk space", "Free processes", "Free CPU"],
    c: 0,
    e: "free shows total, used, free, and available memory and swap.",
    de: "free -h uses K, M, G. 'available' is more accurate than 'free' for usable memory."
  }),
  (_i: number) => ({
    q: "What is swap?",
    o: ["Disk space used as virtual memory", "Memory swap", "Process swap", "CPU swap"],
    c: 0,
    e: "Swap extends RAM by using disk. Used when RAM is full.",
    de: "Slower than RAM. swapon /swapfile. free -h shows swap. /proc/swaps lists swap devices."
  }),
  (_i: number) => ({
    q: "What does `pgrep pattern` do?",
    o: ["Finds PIDs matching process name", "Prints process list", "Process grep", "Process group"],
    c: 0,
    e: "pgrep returns PIDs of processes whose name matches the pattern.",
    de: "pgrep nginx. Often used with kill: kill $(pgrep nginx). -f matches full command line."
  }),
  (_i: number) => ({
    q: "What does `pkill pattern` do?",
    o: ["Sends signal to processes matching name", "Prints matching processes", "Kills by PID", "Process kill list"],
    c: 0,
    e: "pkill sends signal (default SIGTERM) to processes matching the pattern.",
    de: "pkill -9 nginx. Like kill $(pgrep nginx). -f for full command line match."
  }),
  (_i: number) => ({
    q: "What does `jobs` show in shell?",
    o: ["Background and suspended jobs in current shell", "All system jobs", "Cron jobs", "Systemd jobs"],
    c: 0,
    e: "jobs lists background and suspended jobs of the current shell.",
    de: "fg %1 brings job 1 to foreground. bg %1 resumes in background. Ctrl+Z suspends."
  }),
  (_i: number) => ({
    q: "What does `bg` do?",
    o: ["Resumes suspended job in background", "Starts background job", "Lists background jobs", "Stops background job"],
    c: 0,
    e: "bg resumes a suspended job in the background.",
    de: "bg or bg %1. Job must be suspended first (Ctrl+Z). fg brings it back to foreground."
  }),
  (_i: number) => ({
    q: "What does `fg` do?",
    o: ["Brings background/suspended job to foreground", "Forces job", "Finds job", "Finishes job"],
    c: 0,
    e: "fg brings the most recent background/suspended job to foreground.",
    de: "fg %1 for specific job. Takes over terminal until job completes or is suspended."
  }),
  (_i: number) => ({
    q: "What does `nohup cmd > out.log &` do?",
    o: ["Runs cmd immune to hangup, output to file, in background", "Runs in background only", "Ignores output", "Hangs up process"],
    c: 0,
    e: "nohup keeps process running after terminal closes. & runs in background.",
    de: "nohup ignores SIGHUP. Output goes to nohup.out or specified file. Common for long-running jobs."
  }),
  (_i: number) => ({
    q: "What does `disown` do?",
    o: ["Removes job from shell's job table (no SIGHUP)", "Deletes job", "Disowns process", "Detaches job"],
    c: 0,
    e: "disown removes job from shell so it won't receive SIGHUP when shell exits.",
    de: "disown or disown %1. Job becomes orphaned to init. Alternative to nohup for already-running jobs."
  }),
  (_i: number) => ({
    q: "What does `ps aux` show?",
    o: ["All processes with user-oriented format", "User processes only", "Auxiliary processes", "Process status"],
    c: 0,
    e: "ps aux shows all processes (BSD-style). USER, PID, %CPU, %MEM, VSZ, RSS, STAT, START, TIME, COMMAND.",
    de: "a = all users, u = user-oriented, x = include processes without terminal. Common for full listing."
  }),
  (_i: number) => ({
    q: "What does `ps -ef` show?",
    o: ["Full process listing (SysV style)", "Effective format", "Extended format", "Error format"],
    c: 0,
    e: "ps -ef shows full listing: UID, PID, PPID, C, STIME, TTY, TIME, CMD.",
    de: "SysV style. -e = all, -f = full format. PPID is parent PID. Equivalent to ps aux for different output."
  }),
  (_i: number) => ({
    q: "What is a PID?",
    o: ["Process ID (unique number per process)", "Parent ID", "Process index", "Program ID"],
    c: 0,
    e: "PID is the unique kernel-assigned process identifier.",
    de: "$$ in shell is current PID. PID 1 is init/systemd. PPID is parent PID."
  }),
  (_i: number) => ({
    q: "What is a PPID?",
    o: ["Parent Process ID", "Primary PID", "Process PID", "Previous PID"],
    c: 0,
    e: "PPID is the PID of the process that created this process.",
    de: "ps -o ppid= -p PID. Child processes inherit from parent. init (PID 1) adopts orphans."
  }),
  (_i: number) => ({
    q: "What does `htop` offer over `top`?",
    o: ["Better UI, scroll, search, tree view", "Faster", "More processes", "Different data"],
    c: 0,
    e: "htop has improved UI: colors, scroll, search, tree view, mouse support.",
    de: "F6 to sort, F4 to filter. Often not installed by default. top is more portable."
  }),
  (_i: number) => ({
    q: "What does `renice` do?",
    o: ["Changes nice value of running process", "Renames process", "Restarts process", "Removes process"],
    c: 0,
    e: "renice -n 10 -p PID changes priority of existing process. Root can lower nice.",
    de: "renice -n 5 -u user changes all of user's processes. Lower nice = higher priority."
  }),
  (_i: number) => ({
    q: "What does `crontab -e` do?",
    o: ["Opens crontab for editing", "Executes crontab", "Exports crontab", "Exports to crontab"],
    c: 0,
    e: "crontab -e edits your user crontab. crontab -l lists it.",
    de: "Uses $EDITOR. crontab -r removes. crontab file for user. /etc/crontab for system."
  }),
  (_i: number) => ({
    q: "What does `systemctl status service` show?",
    o: ["Service status, logs, enabled/disabled", "Process list", "CPU usage", "Memory only"],
    c: 0,
    e: "systemctl status shows if running, enabled, and recent log lines.",
    de: "Active (running), inactive (dead), failed. journalctl -u service for full logs."
  }),
  (_i: number) => ({
    q: "What does `systemctl enable service` do?",
    o: ["Enables service to start at boot", "Starts service now", "Enables now", "Enables user"],
    c: 0,
    e: "systemctl enable configures service to start automatically at boot.",
    de: "Creates symlink in /etc/systemd/system. enable --now starts immediately and enables."
  }),
  (_i: number) => ({
    q: "What does `systemctl disable service` do?",
    o: ["Prevents service from starting at boot", "Stops service", "Disables user", "Removes service"],
    c: 0,
    e: "systemctl disable stops the service from starting at boot.",
    de: "Removes enable symlink. Service can still be started manually with systemctl start."
  }),
  (_i: number) => ({
    q: "What does `systemctl list-units` show?",
    o: ["List of loaded units", "All units", "Failed units", "Service units only"],
    c: 0,
    e: "systemctl list-units shows active units. --type=service for services only.",
    de: "systemctl list-units --failed for failed. list-unit-files for all installed units."
  }),
  (_i: number) => ({
    q: "What does `killall name` do?",
    o: ["Kills all processes with that name", "Kills one process", "Kills by PID", "Kills all users"],
    c: 0,
    e: "killall sends signal to all processes matching the given name.",
    de: "killall nginx. killall -9 name for SIGKILL. More dangerous than pkill for common names."
  }),
  (_i: number) => ({
    q: "What does `vmstat 1` show?",
    o: ["Virtual memory stats every 1 second", "VM status", "Process stats", "Volume stats"],
    c: 0,
    e: "vmstat reports memory, swap, I/O, blocks, CPU. 1 = interval in seconds.",
    de: "Procs, memory, swap, io, system, cpu. Useful for spotting bottlenecks."
  }),
  (_i: number) => ({
    q: "What does `lsof` list?",
    o: ["Open files by processes", "List of files", "Large files", "Locked files"],
    c: 0,
    e: "lsof lists open files (file descriptors). lsof -i for network. lsof -p PID for process.",
    de: "Shows which process has file open. lsof /path shows what's using a path. Useful before umount."
  }),
  (_i: number) => ({
    q: "What does `fuser` do?",
    o: ["Identifies processes using file/socket", "Finds user", "File user", "File usage"],
    c: 0,
    e: "fuser /path shows PIDs using that file or directory. fuser -k kills them.",
    de: "fuser -km /mnt kills processes using /mnt. Useful for unmounting busy filesystems."
  }),
  (_i: number) => ({
    q: "What does `screen` do?",
    o: ["Terminal multiplexer (detach/reattach sessions)", "Screenshots", "Screen size", "Display"],
    c: 0,
    e: "screen creates detachable sessions. Ctrl+A D detach. screen -r reattach.",
    de: "Persists across SSH disconnects. Alternative to tmux. Multiple windows in one session."
  }),
  (_i: number) => ({
    q: "What does `tmux` do?",
    o: ["Terminal multiplexer (sessions, windows, panes)", "Terminal mix", "Terminal max", "Terminal"],
    c: 0,
    e: "tmux creates persistent sessions with windows and panes. Ctrl+B d detach.",
    de: "tmux attach or tmux a to reattach. Split panes, multiple windows. Survives disconnect."
  }),
  (_i: number) => ({
    q: "What does `&` at end of command do?",
    o: ["Runs command in background", "Runs in foreground", "And operator", "Appends output"],
    c: 0,
    e: "cmd & runs cmd in background. Shell returns immediately.",
    de: "cmd & gives you prompt back. Output goes to terminal. Use nohup or redirect for long jobs."
  }),
  (_i: number) => ({
    q: "What does `Ctrl+C` in terminal do?",
    o: ["Sends SIGINT to foreground process", "Copies text", "Cancels command", "Stops shell"],
    c: 0,
    e: "Ctrl+C sends SIGINT. Process usually terminates (can catch it).",
    de: "SIGINT = interrupt. Most programs exit. Ctrl+Z sends SIGTSTP (suspend)."
  }),
  (_i: number) => ({
    q: "What does `Ctrl+Z` do?",
    o: ["Suspends foreground process (SIGTSTP)", "Stops process", "Zeros process", "Pauses process"],
    c: 0,
    e: "Ctrl+Z suspends the process. Use fg or bg to resume.",
    de: "SIGTSTP. Process is stopped (not running). jobs shows it. fg brings it back."
  }),
  (_i: number) => ({
    q: "What does `at` do?",
    o: ["Schedules one-time job at specified time", "Runs at time", "At command", "Time job"],
    c: 0,
    e: "at 3pm tomorrow runs command once at that time. echo 'cmd' | at time.",
    de: "atq lists pending. atrm removes. at 10:00 < script. One-shot vs cron recurring."
  }),
  (_i: number) => ({
    q: "What does `watch -n 2 cmd` do?",
    o: ["Runs cmd every 2 seconds", "Watches file", "Watches process", "2-second watch"],
    c: 0,
    e: "watch runs command repeatedly, updating display. -n 2 = every 2 seconds.",
    de: "watch -n 1 free -h. Ctrl+C to stop. Alternative to loop in shell."
  }),
  (_i: number) => ({
    q: "What does `time cmd` do?",
    o: ["Runs cmd and reports real, user, system time", "Times command", "Times execution", "Shows time"],
    c: 0,
    e: "time reports how long command took. real = wall clock, user = CPU user, system = CPU kernel.",
    de: "time ls. /usr/bin/time for more detail. Shell builtin time may differ."
  }),
  (_i: number) => ({
    q: "What does `pidof program` return?",
    o: ["PIDs of running instances of program", "PID of first", "Process ID only", "Program PID"],
    c: 0,
    e: "pidof nginx returns PIDs of nginx processes. Space-separated list.",
    de: "Simpler than pgrep for exact name. kill $(pidof nginx) to kill all."
  }),
  (_i: number) => ({
    q: "What does `kill -0 PID` do?",
    o: ["Checks if process exists (no signal sent)", "Kills process", "Signal 0", "No-op"],
    c: 0,
    e: "kill -0 checks if process exists. Exit 0 if exists, non-zero if not. No signal sent.",
    de: "Useful in scripts: if kill -0 $PID 2>/dev/null; then echo 'running'; fi."
  }),
  (_i: number) => ({
    q: "What does `ps -o pid,ppid,cmd` show?",
    o: ["Custom columns: PID, PPID, command", "Only PID", "Output format", "Process output"],
    c: 0,
    e: "ps -o allows custom columns. pid,ppid,cmd,%mem,%cpu,etc.",
    de: "ps -eo pid,ppid,cmd. -e for all. -o for user-defined output format."
  }),
  (_i: number) => ({
    q: "What does `pstree` show?",
    o: ["Process tree (parent-child hierarchy)", "Process list", "Tree of PIDs", "Process structure"],
    c: 0,
    e: "pstree shows processes in tree form. pstree -p includes PIDs.",
    de: "Visual hierarchy. pstree -u shows user. pstree PID shows subtree of that process."
  }),
  (_i: number) => ({
    q: "What does `nice -n -5 cmd` require?",
    o: ["Root privileges (lowering nice)", "User privilege", "No special privilege", "Nice privilege"],
    c: 0,
    e: "Only root can lower nice (increase priority). -20 is highest priority.",
    de: "Regular users can only raise nice (lower priority). nice -n 19 is lowest priority."
  }),
  (_i: number) => ({
    q: "What does `crontab -l` do?",
    o: ["Lists current user's crontab", "Lists all crontabs", "Loads crontab", "Last crontab"],
    c: 0,
    e: "crontab -l displays your crontab. crontab -r removes it.",
    de: "Root: crontab -u user -l for another user's crontab."
  }),
  (_i: number) => ({
    q: "What does `systemctl restart service` do?",
    o: ["Stops and starts service", "Reloads config", "Restarts only if running", "Restarts dependencies"],
    c: 0,
    e: "systemctl restart stops then starts the service. Use reload if config-only change.",
    de: "restart = full stop/start. reload = reload config without full restart (if supported)."
  }),
  (_i: number) => ({
    q: "What does `journalctl -u service` show?",
    o: ["Logs for the specified systemd service", "Journal for user", "Unit logs", "Service journal"],
    c: 0,
    e: "journalctl -u nginx shows logs for nginx service. -f to follow.",
    de: "journalctl -u nginx -f. -n 100 for last 100 lines. -b for current boot."
  }),
  (_i: number) => ({
    q: "What does `journalctl -f` do?",
    o: ["Follows log output (like tail -f)", "Shows full log", "Follows boot", "Filter logs"],
    c: 0,
    e: "journalctl -f streams new log entries. Ctrl+C to stop.",
    de: "Like tail -f for systemd journal. journalctl -u service -f for specific service."
  }),
  (_i: number) => ({
    q: "What does `swapon -s` show?",
    o: ["Swap usage summary", "Swap on", "Swap status", "Swap devices"],
    c: 0,
    e: "swapon -s or swapon --show lists swap devices and usage.",
    de: "Shows device, type, size, used, priority. swapoff to disable. swapon /swapfile to add."
  }),
  (_i: number) => ({
    q: "What does `load average` represent?",
    o: ["Average number of runnable processes over time", "CPU load", "System load", "Process load"],
    c: 0,
    e: "Load = runnable processes. 1.0 on 1 CPU = fully utilized. Shown by uptime, top.",
    de: "1, 5, 15 minute averages. 4.0 on 4 CPUs = fully utilized. High load = system busy."
  }),
  (_i: number) => ({
    q: "What does `ps -e` show?",
    o: ["All processes", "Every process", "Environment", "Extended"],
    c: 0,
    e: "ps -e selects all processes. Same as -A.",
    de: "ps -ef or ps -e -f for full format. Combined with -o for custom columns."
  }),
  (_i: number) => ({
    q: "What does `systemctl is-active service` return?",
    o: ["active, inactive, or failed", "Running status", "Active/inactive", "Service state"],
    c: 0,
    e: "Returns active if running, inactive if failed/stopped. Useful in scripts.",
    de: "systemctl is-enabled for boot status. is-active for current run state."
  }),
  (_i: number) => ({
    q: "What does `systemctl daemon-reload` do?",
    o: ["Reloads systemd config (after unit file changes)", "Restarts daemon", "Reloads all services", "Reloads daemon config"],
    c: 0,
    e: "Run after editing unit files. Picks up new or changed service definitions.",
    de: "Required after editing /etc/systemd/system/*.service. Then systemctl start/restart."
  }),
  (_i: number) => ({
    q: "What does `setsid cmd` do?",
    o: ["Runs cmd in new session (detached from terminal)", "Sets session ID", "Session command", "New session"],
    c: 0,
    e: "setsid creates new session. Process won't receive SIGHUP when terminal closes.",
    de: "Alternative to nohup. setsid cmd & runs detached. Useful for daemon-like behavior."
  }),
  (_i: number) => ({
    q: "What does `sleep 10` do?",
    o: ["Pauses for 10 seconds", "Sleeps process", "Delays 10", "Waits 10"],
    c: 0,
    e: "sleep suspends execution for specified seconds. sleep 5m for minutes.",
    de: "sleep 10. Sleeps current process/shell. Useful in scripts: sleep 5 && retry."
  }),
  (_i: number) => ({
    q: "What does `wait` do in shell?",
    o: ["Waits for background jobs to complete", "Waits for input", "Waits forever", "Waits for PID"],
    c: 0,
    e: "wait waits for all background jobs. wait %1 for specific job.",
    de: "wait returns exit status of job. Useful in scripts: cmd1 & cmd2 & wait."
  }),
  (_i: number) => ({
    q: "What does `exec cmd` do in shell?",
    o: ["Replaces shell with cmd (no new process)", "Executes cmd", "Runs cmd", "Exec command"],
    c: 0,
    e: "exec replaces shell process with cmd. Shell exits when cmd exits. No return.",
    de: "exec ls replaces shell with ls. Common in scripts: exec myapp (no extra shell)."
  }),
  (_i: number) => ({
    q: "What does `$$` expand to in shell?",
    o: ["Current shell PID", "Parent PID", "Last PID", "Process ID"],
    c: 0,
    e: "$$ is the PID of the current shell.",
    de: "echo $$. $PPID is parent. Useful for temp files: /tmp/script.$$."
  }),
  (_i: number) => ({
    q: "What does `$!` in shell contain?",
    o: ["PID of last background process", "Last PID", "Background PID", "Last job PID"],
    c: 0,
    e: "$! is PID of most recently started background job.",
    de: "cmd &; echo $!. Useful to wait or kill: kill $!."
  }),
  (_i: number) => ({
    q: "What does `ionice` do?",
    o: ["Sets I/O scheduling class/priority", "Sets CPU nice", "I/O nice", "I/O priority"],
    c: 0,
    e: "ionice sets I/O priority. Idle class for backups. -c3 = idle.",
    de: "ionice -c3 backup.sh. Reduces disk impact. -c1 = realtime, -c2 = best-effort, -c3 = idle."
  }),
  (_i: number) => ({
    q: "What does `taskset` do?",
    o: ["Sets CPU affinity (which CPUs process can use)", "Sets task", "Task set", "CPU set"],
    c: 0,
    e: "taskset -c 0,1 cmd runs cmd only on CPUs 0 and 1.",
    de: "taskset -p PID shows affinity. Useful for isolating workloads to specific cores."
  }),
  (_i: number) => ({
    q: "What does `/proc/PID/` contain?",
    o: ["Process-specific info (virtual files)", "Process files", "PID directory", "Process data"],
    c: 0,
    e: "/proc/PID/ has process info: cmdline, environ, status, fd, etc.",
    de: "Virtual filesystem. cat /proc/PID/cmdline. /proc/self/ for current process."
  }),
  (_i: number) => ({
    q: "What does `OOM` mean?",
    o: ["Out Of Memory (kernel kills process)", "Out of memory", "Memory overflow", "Over memory"],
    c: 0,
    e: "OOM killer runs when system is out of memory. Kills process to free memory.",
    de: "dmesg | grep -i oom. /proc/PID/oom_score. Can tune with vm.oom_kill_allocating_task."
  }),
  (_i: number) => ({
    q: "What does `ulimit -n` show?",
    o: ["Max open file descriptors per process", "Max files", "File limit", "Numeric limit"],
    c: 0,
    e: "ulimit -n is max open files. ulimit -a shows all limits.",
    de: "ulimit -n 65535 to raise. Can hit limit with many connections. /etc/security/limits.conf."
  }),
  (_i: number) => ({
    q: "What does `strace cmd` do?",
    o: ["Traces system calls made by cmd", "Traces process", "Strace command", "System trace"],
    c: 0,
    e: "strace shows syscalls. Useful for debugging. strace -p PID to attach.",
    de: "strace ls. strace -e open,read. -f for children. -p PID attaches to running process."
  }),
  (_i: number) => ({
    q: "What does `ltrace` do?",
    o: ["Traces library calls", "Library trace", "Link trace", "Trace libs"],
    c: 0,
    e: "ltrace shows library function calls (vs strace for syscalls).",
    de: "ltrace cmd. Less common than strace. Useful for seeing library behavior."
  }),
  (_i: number) => ({
    q: "What does `cgroups` control?",
    o: ["Resource limits for process groups", "CPU groups", "Control groups", "Process groups"],
    c: 0,
    e: "cgroups limit CPU, memory, I/O for groups of processes. Used by systemd, Docker.",
    de: "/sys/fs/cgroup/. systemd creates cgroups for services. Docker uses for containers."
  }),
  (_i: number) => ({
    q: "What does `systemctl mask service` do?",
    o: ["Prevents service from starting (even manually)", "Masks service", "Disables service", "Hides service"],
    c: 0,
    e: "mask links to /dev/null. Stronger than disable. Prevents accidental start.",
    de: "systemctl unmask to restore. Use for conflicting services."
  }),
  (_i: number) => ({
    q: "What does `systemctl list-dependencies service` show?",
    o: ["Service dependency tree", "Dependencies", "Requires", "Depends"],
    c: 0,
    e: "Shows what service requires and what requires it. --reverse for reverse deps.",
    de: "systemctl list-dependencies nginx. --reverse shows what depends on nginx."
  }),
  (_i: number) => ({
    q: "What does `crontab` format: '0 * * * *' mean?",
    o: ["Every hour at minute 0", "Every minute", "Every day", "At midnight"],
    c: 0,
    e: "min hour day month weekday. 0 * * * * = minute 0 of every hour.",
    de: "0 0 * * * = midnight daily. */5 * * * * = every 5 min. 0 0 * * 0 = Sunday midnight."
  }),
  (_i: number) => ({
    q: "What does `@reboot` in crontab mean?",
    o: ["Run once at system boot", "Reboot cron", "Reboot job", "At boot"],
    c: 0,
    e: "@reboot runs job once when system boots. Non-standard but common.",
    de: "@reboot /path/to/script. @daily, @hourly also exist. Check system cron support."
  }),
  (_i: number) => ({
    q: "What does `systemctl isolate multi-user.target` do?",
    o: ["Switches to multi-user mode (no GUI)", "Isolates target", "Multi-user mode", "Text mode"],
    c: 0,
    e: "Stops graphical target, starts multi-user. Like runlevel 3.",
    de: "Similar to init 3. graphical.target for GUI. isolate stops other targets."
  }),
  (_i: number) => ({
    q: "What does `runlevel` show?",
    o: ["Previous and current runlevel (SysV)", "Current runlevel", "Run level", "Init level"],
    c: 0,
    e: "runlevel shows N 5 for example. N=previous, 5=current. On systemd, may show legacy.",
    de: "SysV init: 0=halt, 1=single, 3=multi-user, 5=graphical. systemd has targets instead."
  }),
  (_i: number) => ({
    q: "What does `init` (PID 1) do?",
    o: ["First process; manages all other processes", "Initializes system", "Init process", "Parent of all"],
    c: 0,
    e: "init is PID 1. On systemd systems, it's systemd. Adopts orphans, reaps zombies.",
    de: "Cannot be killed. Starts all services. On modern Linux: systemd or init replacement."
  }),
  (_i: number) => ({
    q: "What is a zombie process?",
    o: ["Dead process whose exit status hasn't been reaped", "Stopped process", "Killed process", "Dead process"],
    c: 0,
    e: "Zombie (Z state) has exited but parent hasn't wait()ed. Harmless until parent reaps.",
    de: "Parent must reap. If parent dies, init adopts and reaps. Zombies accumulate if parent buggy."
  }),
  (_i: number) => ({
    q: "What does `kill -l` show?",
    o: ["List of signal names and numbers", "Kill list", "Signal list", "List signals"],
    c: 0,
    e: "kill -l lists available signals. SIGTERM=15, SIGKILL=9, SIGINT=2, etc.",
    de: "kill -l. kill -9 = kill -KILL = kill -SIGKILL. Same signal, different names."
  }),
  (_i: number) => ({
    q: "What does `trap` do in shell?",
    o: ["Catches signals and runs handler", "Traps signals", "Signal handler", "Catch signals"],
    c: 0,
    e: "trap 'cleanup' EXIT SIGINT. Runs handler on signal or exit.",
    de: "trap '' SIGINT ignores Ctrl+C. trap 'rm -f /tmp/foo' EXIT for cleanup on exit."
  }),
];

import { level4Intermediate } from './level4_intermediate_cli';
import { level4Expert } from './level4_expert_cli';

export const level4Patterns = beginner;
export const level4IntermediateA = level4Intermediate.slice(0, 50);
export const level4IntermediateB = level4Intermediate.slice(50, 100);
export const level4ExpertA = level4Expert.slice(0, 50);
export const level4ExpertB = level4Expert.slice(50, 121);
