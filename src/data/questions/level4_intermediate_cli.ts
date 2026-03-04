// LEVEL 4 INTERMEDIATE — Process Management (100 unique questions)
// Topics: ps, top, kill, nice, cron, daemons, systemd, load, memory, swap

export const level4Intermediate = [
  (_i: number) => ({
    q: "What does `ps -e -o pid,comm,%mem --sort=-%mem` show?",
    o: ["All processes sorted by memory usage descending", "Memory usage only", "Top memory processes", "Process memory list"],
    c: 0,
    e: "ps -e all, -o custom columns, --sort=-%mem sorts by memory high to low.",
    de: "ps -eo pid,comm,%mem --sort=-%mem. Head for top N. Useful for finding memory hogs.",
    deBeginner: "ps -e shows all processes; -o pid,comm,%mem picks those columns; --sort=-%mem sorts by memory high to low. Pipe to head for top N. Handy for finding what uses the most memory.",
    deExpert: "ps -eo pid,comm,%mem --sort=-%mem. head for top N. Memory hogs."
  }),
  (_i: number) => ({
    q: "What does `top -b -n 1` produce?",
    o: ["Single batch snapshot (scriptable output)", "Background mode", "One process", "Batch output"],
    c: 0,
    e: "top -b batch mode, -n 1 one iteration. No interactive. Good for scripts.",
    de: "top -b -n 1 | head -20. Captures one snapshot. Redirect to file or pipe.",
    deBeginner: "top -b runs in batch mode (no interactive), -n 1 does one update only. You get a single snapshot you can pipe or redirect. Good for scripts: top -b -n 1 | head -20.",
    deExpert: "top -b -n 1: one batch snapshot. Scriptable. Pipe/redirect."
  }),
  (_i: number) => ({
    q: "What does `kill -HUP PID` typically trigger?",
    o: ["Config reload without full restart", "Hang up process", "Restart process", "Stop process"],
    c: 0,
    e: "SIGHUP often means 'reload config'. Many daemons support it.",
    de: "kill -HUP $(cat /var/run/nginx.pid). Nginx, Apache reload config on HUP.",
    deBeginner: "SIGHUP (HUP) often tells a daemon to reload its config without restarting. kill -HUP PID does that. Nginx and Apache support it. Example: kill -HUP $(cat /var/run/nginx.pid).",
    deExpert: "kill -HUP: config reload. Nginx/Apache. No full restart."
  }),
  (_i: number) => ({
    q: "What does `renice -n 5 -u username` do?",
    o: ["Changes nice value for all of user's processes", "Renices one process", "Sets user nice", "Changes user priority"],
    c: 0,
    e: "renice -u affects all processes owned by that user. Root can lower nice.",
    de: "renice -n 5 -u jane. Bulk priority change. -p for specific PID.",
    deBeginner: "renice -n 5 -u username sets nice to 5 for every process owned by that user. One command changes them all. Use -p PID for a single process. Root can lower nice.",
    deExpert: "renice -n N -u user: bulk. -p PID single. Root for lower nice."
  }),
  (_i: number) => ({
    q: "What does crontab field '*/5' in minute position mean?",
    o: ["Every 5 minutes", "Every 5th minute", "Five times", "At minute 5"],
    c: 0,
    e: "*/5 = every 5 units. */5 * * * * = every 5 minutes.",
    de: "*/10 * * * * = every 10 min. */1 = every minute. 0 */2 = every 2 hours.",
    deBeginner: "*/5 in the minute field means every 5 minutes. So */5 * * * * runs every 5 minutes. */10 is every 10 min, */1 every minute. 0 */2 * * * is every 2 hours at minute 0.",
    deExpert: "*/5: every 5 units. */5 * * * * every 5 min. */1 every min."
  }),
  (_i: number) => ({
    q: "What does `systemctl reload service` do vs restart?",
    o: ["Reloads config without stopping process", "Restarts service", "Reloads config file", "Same as restart"],
    c: 0,
    e: "reload applies config changes. Process keeps running. restart does full stop/start.",
    de: "nginx -s reload. systemctl reload nginx. Not all services support reload.",
    deBeginner: "reload applies config changes without stopping the process; the service keeps running. restart does a full stop and start. Use reload when only config changed. Not every service supports reload.",
    deExpert: "reload: config only, process keeps running. restart: full stop/start."
  }),
  (_i: number) => ({
    q: "What does load average 2.5 mean on a 4-CPU system?",
    o: ["Some CPU headroom (2.5/4 utilized)", "Overloaded", "Exactly half", "2.5 processes waiting"],
    c: 0,
    e: "Load 2.5 on 4 CPUs = ~62% utilized. 4.0 = fully utilized.",
    de: "Load = runnable + uninterruptible. 1.0 per CPU = saturated. Context for capacity.",
    deBeginner: "Load 2.5 on 4 CPUs means on average 2.5 processes were runnable (waiting for CPU). So about 2.5/4 = 62% CPU used. Load 4.0 would mean all 4 CPUs fully utilized.",
    deExpert: "Load 2.5 on 4 CPUs ≈ 62% utilized. Load N on N CPUs = full."
  }),
  (_i: number) => ({
    q: "What does `free -m` show?",
    o: ["Memory in megabytes", "Free memory only", "Memory total", "Megabytes used"],
    c: 0,
    e: "free -m uses MB. -g for GB. -h for human-readable (K,M,G).",
    de: "free -m. Columns: total, used, free, shared, buff/cache, available.",
    deBeginner: "free -m shows memory in megabytes. You see total, used, free, shared, buff/cache, and available. Use -g for GB or -h for human-readable (K, M, G).",
    deExpert: "free -m: MB. -g GB, -h human. total, used, free, available."
  }),
  (_i: number) => ({
    q: "What does `swapon /swapfile` do?",
    o: ["Enables swap on the file", "Creates swap", "Swaps file", "Activates swapfile"],
    c: 0,
    e: "swapon activates swap. /swapfile must exist and be prepared (mkswap).",
    de: "fallocate -l 1G /swapfile; chmod 600; mkswap; swapon. swapoff to disable.",
    deBeginner: "swapon turns on swap on a file or device. The file must exist and be prepared with mkswap first. Example: fallocate -l 1G /swapfile; chmod 600; mkswap /swapfile; swapon /swapfile. swapoff to turn it off.",
    deExpert: "swapon /swapfile. mkswap first. swapoff disable."
  }),
  (_i: number) => ({
    q: "What does `pgrep -u root nginx` find?",
    o: ["PIDs of nginx processes owned by root", "Root nginx", "Nginx as root", "User root nginx PIDs"],
    c: 0,
    e: "pgrep -u user filters by owner. pgrep -u root nginx.",
    de: "pgrep -u jane. -f matches full command line. -l shows names (pgrep -l).",
    deBeginner: "pgrep -u root nginx finds PIDs of nginx processes that are owned by root. -u filters by user. You can combine: pgrep -u jane. -f matches the full command line; -l shows process names.",
    deExpert: "pgrep -u user: filter by owner. -f full cmdline. -l names."
  }),
  (_i: number) => ({
    q: "What does `pkill -9 -f 'python script.py'` do?",
    o: ["SIGKILLs processes matching full command line", "Kills Python", "Force kills script", "Kills matching processes"],
    c: 0,
    e: "pkill -f matches full command. -9 sends SIGKILL. Careful: can match multiple.",
    de: "pkill -9 -f pattern. -f is dangerous with short patterns. Prefer pgrep first to verify.",
    deBeginner: "pkill -9 -f sends SIGKILL to processes whose full command line matches the pattern. -f matches the whole command, not just the name. Always check with pgrep -f first; short patterns can match too much.",
    deExpert: "pkill -9 -f: SIGKILL by full cmdline. pgrep first to verify."
  }),
  (_i: number) => ({
    q: "What does `jobs -l` add over `jobs`?",
    o: ["PIDs of jobs", "Long format", "More detail", "Job PIDs"],
    c: 0,
    e: "jobs -l shows PID for each job. jobs shows [n] status command.",
    de: "jobs -l. [1]+ Running cmd & 12345. Useful to kill or monitor specific job.",
    deBeginner: "jobs -l adds the PID for each job. jobs alone shows [n] status command; jobs -l adds the process ID so you can kill or monitor that specific job.",
    deExpert: "jobs -l: adds PIDs. [1]+ Running cmd & 12345."
  }),
  (_i: number) => ({
    q: "What does `nohup` redirect by default if not specified?",
    o: ["stdout to nohup.out, stderr to same", "To /dev/null", "To terminal", "To nohup.log"],
    c: 0,
    e: "nohup appends to nohup.out. nohup cmd > out.log 2>&1 for custom.",
    de: "nohup cmd. nohup.out in current dir. Redirect both for clean logging.",
    deBeginner: "If you don't redirect, nohup sends both stdout and stderr to nohup.out in the current directory (appended). For cleaner logging use nohup cmd > out.log 2>&1.",
    deExpert: "nohup default: stdout+stderr to nohup.out. Redirect for logs."
  }),
  (_i: number) => ({
    q: "What does `disown -h %1` do?",
    o: ["Marks job 1 to not receive SIGHUP (keeps in table)", "Removes job 1", "Hides job", "Detaches job 1"],
    c: 0,
    e: "disown -h marks job; it stays in jobs list but won't get SIGHUP on shell exit.",
    de: "disown -h %1. Job survives shell exit. Without -h, disown removes from table entirely.",
    deBeginner: "disown -h %1 marks job 1 so it won't get SIGHUP when the shell exits; the job stays in the jobs list but is immune. Without -h, disown removes the job from the table completely.",
    deExpert: "disown -h %n: no SIGHUP, stays in table. disown without -h removes."
  }),
  (_i: number) => ({
    q: "What does `ps -p PID -o pid,ppid,stat` show?",
    o: ["PID, PPID, and state for that process", "Process stats", "Single process info", "Process state"],
    c: 0,
    e: "ps -p selects one PID. -o custom columns. stat = R/S/D/Z/T etc.",
    de: "R=running, S=sleeping, D=uninterruptible, Z=zombie, T=stopped. stat shows state.",
    deBeginner: "ps -p PID limits output to that process. -o pid,ppid,stat shows PID, parent PID, and state. stat is one letter: R running, S sleeping, D uninterruptible, Z zombie, T stopped.",
    deExpert: "ps -p PID -o pid,ppid,stat. R/S/D/Z/T state."
  }),
  (_i: number) => ({
    q: "What does `ps -o pid,state,wchan` show for wchan?",
    o: ["Kernel function process is waiting on", "Wait channel", "Sleep reason", "Kernel wait"],
    c: 0,
    e: "wchan = wait channel. Kernel function name where process is blocked.",
    de: "ps -o pid,state,wchan. poll_schedule_timeout, etc. For debugging hangs.",
    deBeginner: "wchan is the wait channel: the kernel function name where the process is blocked (e.g. poll_schedule_timeout). ps -o pid,state,wchan shows it. Useful when a process is stuck to see what it's waiting on.",
    deExpert: "wchan: kernel function where blocked. ps -o wchan. Debug hangs."
  }),
  (_i: number) => ({
    q: "What does `top -p PID1,PID2` do?",
    o: ["Monitors only those PIDs", "Shows top PIDs", "Filters by PID", "PID monitor mode"],
    c: 0,
    e: "top -p limits display to specified PIDs. Comma-separated list.",
    de: "top -p 1234,5678. Focus on specific processes. -p $(pgrep nginx) for dynamic.",
    deBeginner: "top -p PID1,PID2 limits the display to only those process IDs. Comma-separated list. Good to watch a few processes. You can use -p $(pgrep nginx) to follow nginx processes.",
    deExpert: "top -p pid1,pid2: only those PIDs. -p $(pgrep x) dynamic."
  }),
  (_i: number) => ({
    q: "What does `htop -p PID` do?",
    o: ["Shows only that process tree", "Filters by PID", "PID only view", "Process filter"],
    c: 0,
    e: "htop -p shows process and its children. Tree view focused.",
    de: "htop -p 1234. F4 to filter. F5 tree view. F6 to sort.",
    deBeginner: "htop -p PID shows that process and its children in a tree view. You focus on one process tree. F4 filters, F5 toggles tree view, F6 to sort.",
    deExpert: "htop -p PID: that process + children. F4 filter, F5 tree, F6 sort."
  }),
  (_i: number) => ({
    q: "What does `crontab -u user -e` require?",
    o: ["Root or same user to edit another's crontab", "User permission", "Root only", "Crontab access"],
    c: 0,
    e: "crontab -u edits another user's crontab. Requires root (or target user).",
    de: "sudo crontab -u www-data -e. For service accounts. crontab -l -u user to list.",
    deBeginner: "crontab -u user -e edits another user's crontab. You need to be root or that user. Example: sudo crontab -u www-data -e. Use crontab -l -u user to list their crontab.",
    deExpert: "crontab -u user -e: edit other user. Root or target user. -l -u list."
  }),
  (_i: number) => ({
    q: "What does `systemctl list-units --type=service --state=running` show?",
    o: ["Only running service units", "All services", "Active services", "Running units"],
    c: 0,
    e: "Filters by type=service and state=running. Focused list.",
    de: "systemctl list-units -t service -s running. --all for inactive too.",
    deBeginner: "This lists only units that are services and currently running. So you see a focused list of running services. Short form: -t service -s running. Add --all to include inactive.",
    deExpert: "list-units --type=service --state=running. -t -s. --all inactive."
  }),
  (_i: number) => ({
    q: "What does `vmstat 1 5` output?",
    o: ["5 samples at 1-second intervals", "5 seconds total", "First 5 lines", "5 iterations"],
    c: 0,
    e: "vmstat delay count. vmstat 1 5 = 5 reports, 1 second apart.",
    de: "First line is since boot. Subsequent lines are since previous. Good for spotting trends.",
    deBeginner: "vmstat 1 5 prints 5 reports, 1 second apart. The first line is averages since boot; the rest are since the previous line. Handy for seeing short-term trends.",
    deExpert: "vmstat delay count. First line since boot. Rest since previous."
  }),
  (_i: number) => ({
    q: "What does `lsof -i :80` list?",
    o: ["Processes using port 80", "Port 80 listeners", "Network port 80", "Port 80 users"],
    c: 0,
    e: "lsof -i :port shows processes with that port open. -i :80 or -i :ssh.",
    de: "lsof -i :443. See what's listening. netstat -tlnp alternative. Requires root for some.",
    deBeginner: "lsof -i :80 lists processes that have port 80 open (e.g. a web server). -i :port filters by port. Use -i :443 for HTTPS. Root may be needed to see all. netstat -tlnp is an alternative.",
    deExpert: "lsof -i :port. Listeners. netstat -tlnp. Root for all."
  }),
  (_i: number) => ({
    q: "What does `fuser -v /dev/sda1` show?",
    o: ["Processes using that device (verbose)", "Device users", "Verbose users", "SDA1 processes"],
    c: 0,
    e: "fuser -v verbose. Shows PID, user, access type (c=current dir, m=mmap, etc).",
    de: "fuser -v /mnt. Before umount. fuser -km to kill. -v for details.",
    deBeginner: "fuser -v shows which processes use that device or path, in verbose form: PID, user, and how they use it (c=current dir, m=mmap, etc). Use before umount. fuser -km kills them.",
    deExpert: "fuser -v: verbose, PID user access. -km kill. Before umount."
  }),
  (_i: number) => ({
    q: "What does `screen -S sessionname` do?",
    o: ["Creates named screen session", "Starts screen", "Session name", "Named session"],
    c: 0,
    e: "screen -S name creates session with that name. screen -r name to reattach.",
    de: "screen -S deploy. screen -ls lists. screen -r deploy. Easier to find sessions.",
    deBeginner: "screen -S name creates a screen session with that name. screen -ls lists sessions. screen -r name reattaches to the named session. Naming makes it easier to find the right one.",
    deExpert: "screen -S name. -ls list, -r name reattach. Named sessions."
  }),
  (_i: number) => ({
    q: "What does `tmux new -s mysession` do?",
    o: ["Creates new tmux session named mysession", "New session", "Named tmux", "Session create"],
    c: 0,
    e: "tmux new -s name. tmux attach -t name to attach. tmux ls to list.",
    de: "tmux new -s dev. Ctrl+B d detach. tmux attach -t dev. Persistent sessions.",
    deBeginner: "tmux new -s name creates a new tmux session with that name. Ctrl+B d detaches. tmux attach -t name reattaches. tmux ls lists sessions. Sessions survive disconnect.",
    deExpert: "tmux new -s name. attach -t name. tmux ls. Ctrl+B d detach."
  }),
  (_i: number) => ({
    q: "What does `(cmd &)` with parentheses do?",
    o: ["Runs cmd in subshell, background; parent continues", "Subshell background", "Background subshell", "Forked background"],
    c: 0,
    e: "Subshell isolates. (cmd &) runs in background, parent shell doesn't wait.",
    de: "(sleep 10 &) and exit. Child survives. Different from cmd & in job control.",
    deBeginner: "The parentheses run the command in a subshell. (cmd &) runs cmd in the background inside that subshell; the parent shell doesn't wait and doesn't track it as a job. So (sleep 10 &) and exit: the sleep keeps running.",
    deExpert: "(cmd &): subshell bg, no job in parent. Child survives exit."
  }),
  (_i: number) => ({
    q: "What does `kill -STOP PID` do?",
    o: ["Suspends process (SIGSTOP)", "Stops process", "Pauses process", "Freezes process"],
    c: 0,
    e: "SIGSTOP suspends. Process stops. kill -CONT PID to resume.",
    de: "kill -STOP = Ctrl+Z. kill -CONT resumes. Process in T state.",
    deBeginner: "kill -STOP sends SIGSTOP and suspends the process (same effect as Ctrl+Z). The process stops and shows state T. Use kill -CONT PID to resume it.",
    deExpert: "kill -STOP: SIGSTOP, suspend. -CONT resume. T state."
  }),
  (_i: number) => ({
    q: "What does `kill -CONT PID` do?",
    o: ["Resumes suspended process", "Continues process", "Resumes process", "Unpauses process"],
    c: 0,
    e: "SIGCONT resumes process stopped by SIGSTOP or Ctrl+Z.",
    de: "kill -CONT PID. Process goes from T to R/S. fg/bg also send CONT.",
    deBeginner: "kill -CONT sends SIGCONT and resumes a process that was stopped (e.g. by SIGSTOP or Ctrl+Z). The process goes from T (stopped) back to R or S. fg and bg also send CONT.",
    deExpert: "kill -CONT: resume. T → R/S. fg/bg send CONT."
  }),
  (_i: number) => ({
    q: "What does `at -f script.sh 3pm` do?",
    o: ["Schedules script.sh to run at 3pm", "Runs script at 3pm", "At job from file", "Schedules file"],
    c: 0,
    e: "at -f file time. Runs file contents at specified time. One-shot.",
    de: "at -f backup.sh 2am tomorrow. atq lists. atrm jobnum removes.",
    deBeginner: "at -f script.sh 3pm schedules the commands in script.sh to run at 3pm (one time). at -f file time. atq lists pending jobs; atrm jobnum removes one.",
    deExpert: "at -f file time. atq list, atrm n remove. One-shot."
  }),
  (_i: number) => ({
    q: "What does `watch -d cmd` add?",
    o: ["Highlights changes between runs", "Difference highlight", "Delta display", "Change highlight"],
    c: 0,
    e: "watch -d highlights what changed since last run. Easier to spot differences.",
    de: "watch -d -n 1 free -h. -d = diff. -d=cumulative for persistent highlight.",
    deBeginner: "watch -d highlights the parts of the output that changed since the last run. Easier to spot what's different. Example: watch -d -n 1 free -h. -d=cumulative keeps highlighting changes.",
    deExpert: "watch -d: highlight changes. -d=cumulative persistent."
  }),
  (_i: number) => ({
    q: "What does `time (cmd)` with parentheses show?",
    o: ["Time for entire pipeline/subshell", "Subshell time", "Total time", "Pipeline time"],
    c: 0,
    e: "time (cmd1; cmd2) times whole group. Without parens, only last command.",
    de: "time (make clean && make). /usr/bin/time -v for detailed stats.",
    deBeginner: "time (cmd) times the whole subshell. So time (cmd1; cmd2) times both. Without parentheses, the shell might only time the last command. Use /usr/bin/time -v for more detail.",
    deExpert: "time (cmd): time full subshell/pipeline. /usr/bin/time -v."
  }),
  (_i: number) => ({
    q: "What does `pidof -s program` return?",
    o: ["Single PID (one instance only)", "First PID", "One result", "Single process"],
    c: 0,
    e: "pidof -s returns only one PID. Default returns all matching.",
    de: "pidof -s nginx. When you need single PID. -x includes script name.",
    deBeginner: "pidof -s returns only one PID (one matching process). Default pidof returns all. Use -s when you need a single PID. -x can include the script name.",
    deExpert: "pidof -s: single PID. Default all. -x script name."
  }),
  (_i: number) => ({
    q: "What does `kill -0 $PID 2>/dev/null` test?",
    o: ["Whether process exists (exit 0/1)", "Process alive check", "Existence test", "PID valid check"],
    c: 0,
    e: "kill -0 checks existence. No signal sent. Exit 0 if exists, 1 if not.",
    de: "if kill -0 $PID 2>/dev/null; then echo running; fi. Common script pattern.",
    deBeginner: "kill -0 checks if the process exists; it doesn't send a real signal. Exit 0 if it exists, non-zero if not. 2>/dev/null hides the error. Common in scripts: if kill -0 $PID 2>/dev/null; then echo running; fi.",
    deExpert: "kill -0: existence check. 2>/dev/null. Script pattern."
  }),
  (_i: number) => ({
    q: "What does `ps -L -p PID` show?",
    o: ["Threads (LWP) of that process", "Process threads", "Lightweight processes", "Thread list"],
    c: 0,
    e: "ps -L shows threads (LWPs). -p limits to one process. SPID or LWP column.",
    de: "ps -eLf for all threads. -L with -o pid,lwp,comm. For multi-threaded debugging.",
    deBeginner: "ps -L shows threads (lightweight processes, LWPs). -p PID limits to one process. You see each thread; column may be SPID or LWP. Use -o pid,lwp,comm. Good for multi-threaded debugging.",
    deExpert: "ps -L: threads (LWP). -p PID. -o pid,lwp,comm. Multi-thread."
  }),
  (_i: number) => ({
    q: "What does `pstree -p -u` show?",
    o: ["Process tree with PIDs and usernames", "Tree with IDs", "User tree", "Full tree"],
    c: 0,
    e: "pstree -p PIDs, -u usernames. Shows who owns what in hierarchy.",
    de: "pstree -p -u. Users in brackets when different from parent. Clear ownership view.",
    deBeginner: "pstree -p adds PIDs to the tree, -u adds usernames. When a process runs as a different user than its parent, the user appears in brackets. Gives a clear view of who runs what.",
    deExpert: "pstree -p -u: PIDs + users. Brackets when user differs."
  }),
  (_i: number) => ({
    q: "What does `ionice -c 2 -n 7 cmd` set?",
    o: ["Best-effort class, nice 7 (lowest I/O priority)", "I/O nice 7", "Low I/O priority", "Best-effort low"],
    c: 0,
    e: "ionice -c 2 best-effort, -n 0-7. 7 = lowest priority. -c 3 = idle.",
    de: "ionice -c2 -n7 backup.sh. Doesn't compete for disk. Good for background tasks.",
    deBeginner: "ionice -c 2 sets best-effort I/O class, -n 7 sets the lowest priority (0-7). So the command runs with minimal I/O priority and doesn't compete much for disk. Good for background backups. -c 3 is idle class.",
    deExpert: "ionice -c2 -n7: best-effort, lowest I/O. -c3 idle. Background."
  }),
  (_i: number) => ({
    q: "What does `taskset -p 0x3 PID` set?",
    o: ["CPU affinity to CPUs 0 and 1", "CPU mask", "Affinity mask", "Two CPUs"],
    c: 0,
    e: "taskset -p mask. 0x3 = binary 11 = CPUs 0,1. Hex mask for affinity.",
    de: "0x3 = CPUs 0,1. 0xF = 0-3. taskset -cp 0,1 PID for list form.",
    deBeginner: "taskset -p 0x3 PID sets that process to run only on CPUs 0 and 1. 0x3 is binary 11 (bitmask). 0xF would be CPUs 0-3. taskset -cp 0,1 PID uses list form instead of mask.",
    deExpert: "taskset -p mask. 0x3 = CPUs 0,1. -cp 0,1 list form."
  }),
  (_i: number) => ({
    q: "What does `cat /proc/PID/status` show?",
    o: ["Process status summary (state, memory, etc)", "Process status", "Status info", "Proc status"],
    c: 0,
    e: "Human-readable process info. State, VmRSS, VmSize, threads, etc.",
    de: "VmRSS=resident, VmSize=virtual. State, voluntary/voluntary ctxt switches.",
    deBeginner: "cat /proc/PID/status shows a readable summary: state, VmRSS (resident memory), VmSize (virtual), thread count, voluntary and nonvoluntary context switches, and more.",
    deExpert: "/proc/PID/status: state, VmRSS, VmSize, threads, ctxt switches."
  }),
  (_i: number) => ({
    q: "What does `ulimit -u` show?",
    o: ["Max user processes", "Process limit", "User limit", "Max processes"],
    c: 0,
    e: "ulimit -u = max processes user can create. ulimit -a for all.",
    de: "ulimit -u. Hit with fork bombs. /etc/security/limits.conf for system-wide.",
    deBeginner: "ulimit -u is the maximum number of processes this user can have. ulimit -a shows all limits. You can hit it with fork bombs. Set system-wide in /etc/security/limits.conf.",
    deExpert: "ulimit -u: max processes per user. limits.conf. Fork bomb limit."
  }),
  (_i: number) => ({
    q: "What does `strace -e open,read -p PID` do?",
    o: ["Traces only open and read syscalls for that process", "Filters syscalls", "Trace specific", "Open/read trace"],
    c: 0,
    e: "strace -e limits to specified syscalls. -p attaches to running process.",
    de: "strace -e open,read -p 1234. -f for children. -t for timestamps.",
    deBeginner: "strace -e open,read only shows those syscalls. -p PID attaches to a running process. So you see only open and read calls for that process. Add -f for child processes, -t for timestamps.",
    deExpert: "strace -e open,read -p PID. Filter syscalls. -f children, -t time."
  }),
  (_i: number) => ({
    q: "What does `systemctl show service -p ActiveState` output?",
    o: ["Just the ActiveState value (scriptable)", "Service state", "Active state only", "Property value"],
    c: 0,
    e: "systemctl show -p property. Outputs single property. For scripts.",
    de: "systemctl show nginx -p ActiveState. active/inactive/failed. -p SubState too.",
    deBeginner: "systemctl show -p outputs one property. systemctl show nginx -p ActiveState prints just active, inactive, or failed. Good for scripts. You can use -p SubState for more detail.",
    deExpert: "systemctl show -p ActiveState. Scriptable. active/inactive/failed."
  }),
  (_i: number) => ({
    q: "What does `journalctl -b -1` show?",
    o: ["Logs from previous boot", "Last boot", "Boot -1", "Previous boot logs"],
    c: 0,
    e: "journalctl -b -1 = previous boot. -b = current. -b -2 = two boots ago.",
    de: "journalctl -b -1 -u nginx. Debugging previous boot issues.",
    deBeginner: "journalctl -b -1 shows logs from the previous boot. -b alone is current boot, -b -2 is two boots ago. Combine with -u nginx for one service. Useful to debug why the system didn't survive a reboot.",
    deExpert: "journalctl -b -1: previous boot. -b current. -u unit."
  }),
  (_i: number) => ({
    q: "What does `crontab` line '0 0 1 * *' mean?",
    o: ["Midnight on 1st of every month", "Monthly", "First of month", "1st at midnight"],
    c: 0,
    e: "min hour day month weekday. 0 0 1 * * = 00:00 on 1st, any month, any weekday.",
    de: "0 0 1 * * = monthly. 0 0 * * 0 = weekly Sunday midnight.",
    deBeginner: "0 0 1 * * means minute 0, hour 0, day 1, any month, any weekday: midnight on the 1st of every month. 0 0 * * 0 would be weekly (Sunday midnight).",
    deExpert: "0 0 1 * *: monthly midnight. 0 0 * * 0 weekly."
  }),
  (_i: number) => ({
    q: "What does `systemctl set-default multi-user.target` do?",
    o: ["Sets default boot target to multi-user (no GUI)", "Default target", "Boot to console", "No GUI default"],
    c: 0,
    e: "System will boot to multi-user instead of graphical by default.",
    de: "Creates /etc/systemd/system/default.target symlink. graphical.target for GUI.",
    deBeginner: "systemctl set-default multi-user.target makes the system boot to multi-user (text mode) by default instead of graphical. It sets the default.target symlink. Use graphical.target to boot to GUI by default.",
    deExpert: "set-default multi-user.target: boot to console. graphical.target GUI."
  }),
  (_i: number) => ({
    q: "What does `systemctl rescue` do?",
    o: ["Single-user rescue mode (minimal services)", "Rescue mode", "Emergency boot", "Single user"],
    c: 0,
    e: "Brings system to rescue.target. Minimal. For recovery. Similar to single-user.",
    de: "systemctl rescue. Fewer services than multi-user. systemctl emergency for more minimal.",
    deBeginner: "systemctl rescue switches to rescue.target: minimal services, single-user style, for recovery. Fewer services than multi-user. systemctl emergency is even more minimal.",
    deExpert: "rescue: rescue.target, minimal. emergency more minimal."
  }),
  (_i: number) => ({
    q: "What does `trap 'echo done' EXIT` do in a script?",
    o: ["Runs echo done when script exits (any reason)", "Exit handler", "Cleanup on exit", "EXIT trap"],
    c: 0,
    e: "trap runs on EXIT (normal or signal). Common for cleanup.",
    de: "trap 'rm -f /tmp/foo' EXIT. Runs on exit, Ctrl+C, etc. Cleanup guarantee.",
    deBeginner: "trap 'echo done' EXIT runs the command when the script exits for any reason: normal end, Ctrl+C, or another signal. Often used for cleanup: trap 'rm -f /tmp/foo' EXIT.",
    deExpert: "trap 'cmd' EXIT: on exit/signal. Cleanup. Runs always."
  }),
  (_i: number) => ({
    q: "What does `trap '' INT` do?",
    o: ["Ignores SIGINT (Ctrl+C)", "Disables Ctrl+C", "Ignore interrupt", "No SIGINT"],
    c: 0,
    e: "trap '' INT makes script ignore Ctrl+C. Empty string = ignore.",
    de: "trap '' INT. trap - INT to restore. For critical sections.",
    deBeginner: "trap '' INT makes the script ignore Ctrl+C (SIGINT). The empty string means ignore. Use trap - INT to restore normal behavior. Handy for critical sections you don't want interrupted.",
    deExpert: "trap '' INT: ignore Ctrl+C. trap - INT restore."
  }),
  (_i: number) => ({
    q: "What does `sleep infinity` do?",
    o: ["Sleeps forever (until killed)", "Infinite sleep", "Never wake", "Permanent sleep"],
    c: 0,
    e: "sleep infinity. Process sleeps until killed. Useful in containers.",
    de: "Containers: sleep infinity keeps container running. tail -f /dev/null alternative.",
    deBeginner: "sleep infinity makes the process sleep until it is killed. Often used in containers to keep the container running with a simple process. tail -f /dev/null is another way to do that.",
    deExpert: "sleep infinity: sleep until kill. Containers. tail -f /dev/null alt."
  }),
  (_i: number) => ({
    q: "What does `wait $!` wait for?",
    o: ["Last background process ($!)", "Background job", "Last job", "Most recent background"],
    c: 0,
    e: "wait $! waits for PID in $! (last background process).",
    de: "cmd &; wait $!; echo done. Get exit code: wait $!; echo $?",
    deBeginner: "wait $! waits for the last background process (the one whose PID is in $!). After cmd & you can wait $! then echo $? to get its exit code. Common pattern: cmd &; wait $!; echo done.",
    deExpert: "wait $!: wait last bg. Exit code in $?. cmd &; wait $!."
  }),
  (_i: number) => ({
    q: "What does `exec 3>&1` do?",
    o: ["Opens fd 3 as copy of stdout", "Duplicate stdout", "FD 3 to stdout", "Redirect fd 3"],
    c: 0,
    e: "exec 3>&1. fd 3 now points to same as 1. For saving/restoring stdout.",
    de: "exec 3>&1 1>log; echo to file; exec 1>&3 3>&- to restore. Sophisticated redirection.",
    deBeginner: "exec 3>&1 makes file descriptor 3 a copy of stdout (1). You can then redirect stdout to a file and later restore it with exec 1>&3 3>&-. Pattern: exec 3>&1 1>log; echo to file; exec 1>&3 3>&-.",
    deExpert: "exec 3>&1: fd3 = copy of stdout. Save/restore stdout."
  }),
  (_i: number) => ({
    q: "What does `$PPID` contain in shell?",
    o: ["Parent process ID", "Parent PID", "Shell's parent", "PPID variable"],
    c: 0,
    e: "$PPID is parent of current shell. echo $PPID.",
    de: "ps -p $PPID. $$ = self, $PPID = parent. init adopts when parent dies.",
    deBeginner: "$PPID is the parent process ID of the current shell. echo $PPID to see it. $$ is this shell's PID. If the parent dies, init (PID 1) adopts this process.",
    deExpert: "$PPID: parent PID. $$ self. init adopts orphans."
  }),
  (_i: number) => ({
    q: "What does `getconf _NPROCESSORS_ONLN` return?",
    o: ["Number of online CPUs", "CPU count", "Processor count", "Online CPUs"],
    c: 0,
    e: "getconf _NPROCESSORS_ONLN. Portable CPU count. nproc is simpler on Linux.",
    de: "nproc on Linux. getconf portable. For make -j$(nproc) or parallel jobs.",
    deBeginner: "getconf _NPROCESSORS_ONLN returns the number of online CPUs. Portable. On Linux, nproc is simpler. Use for parallel jobs: make -j$(nproc) or similar.",
    deExpert: "getconf _NPROCESSORS_ONLN: CPU count. nproc Linux. make -j."
  }),
  (_i: number) => ({
    q: "What does `systemctl cat service` show?",
    o: ["Unit file contents (including overrides)", "Service config", "Unit file", "Service file"],
    c: 0,
    e: "systemctl cat shows effective unit file. Includes drop-ins.",
    de: "systemctl cat nginx. See merged config. /etc/systemd/system/service.d/ overrides.",
    deBeginner: "systemctl cat shows the effective unit file: the main unit plus any drop-in overrides. So you see the merged config. Overrides live under /etc/systemd/system/service.d/.",
    deExpert: "systemctl cat: merged unit + drop-ins. service.d/ overrides."
  }),
  (_i: number) => ({
    q: "What does `systemctl edit service` do?",
    o: ["Creates override file for service", "Edits service", "Override editor", "Service override"],
    c: 0,
    e: "Opens editor for override. Creates /etc/systemd/system/service.d/override.conf.",
    de: "systemctl edit nginx. Override without editing main unit. daemon-reload after.",
    deBeginner: "systemctl edit opens an editor and creates an override file under /etc/systemd/system/service.d/override.conf. You change behavior without editing the main unit. Run daemon-reload after saving.",
    deExpert: "systemctl edit: override.conf in service.d/. daemon-reload after."
  }),
  (_i: number) => ({
    q: "What does `journalctl -n 50 --no-pager` do?",
    o: ["Last 50 lines, no pager (pipeable)", "50 lines no pager", "Tail 50", "Last 50 lines"],
    c: 0,
    e: "journalctl -n 50. --no-pager disables less. For scripts/pipes.",
    de: "journalctl -n 100 --no-pager | grep error. -n = --lines.",
    deBeginner: "journalctl -n 50 shows the last 50 lines. --no-pager turns off the pager (less) so output goes to stdout and you can pipe it. Good for scripts: journalctl -n 100 --no-pager | grep error.",
    deExpert: "journalctl -n N --no-pager: last N lines, pipeable. -n = --lines."
  }),
  (_i: number) => ({
    q: "What does `crontab -r` do?",
    o: ["Removes user's crontab entirely", "Remove crontab", "Delete crontab", "Clear crontab"],
    c: 0,
    e: "crontab -r deletes crontab. All jobs removed. No confirmation.",
    de: "crontab -r. Backup first: crontab -l > crontab.bak. -r is destructive.",
    deBeginner: "crontab -r removes your crontab completely. All scheduled jobs are gone. There is no confirmation. Always backup first: crontab -l > crontab.bak.",
    deExpert: "crontab -r: delete crontab. No confirm. Backup -l first."
  }),
  (_i: number) => ({
    q: "What does `atq` show?",
    o: ["Pending at jobs", "At queue", "Scheduled jobs", "At job list"],
    c: 0,
    e: "atq lists pending at jobs. Job number, user, run time.",
    de: "atq. atrm jobnum to remove. at -l is alias.",
    deBeginner: "atq lists pending at jobs: job number, user, and run time. Use atrm plus the job number to remove one. at -l is an alias for atq.",
    deExpert: "atq: pending at jobs. atrm n remove. at -l alias."
  }),
  (_i: number) => ({
    q: "What does `atrm 3` do?",
    o: ["Removes at job number 3", "Delete at job", "Remove job 3", "Cancel at job"],
    c: 0,
    e: "atrm jobnum removes scheduled job. atq shows numbers.",
    de: "atrm 3. Only own jobs (or root for all). at -d is alias.",
    deBeginner: "atrm 3 removes the at job with number 3. Get job numbers from atq. You can only remove your own jobs unless you're root. at -d is an alias for atrm.",
    deExpert: "atrm n: remove at job. atq for numbers. at -d alias."
  }),
  (_i: number) => ({
    q: "What does `swapoff -a && swapon -a` do?",
    o: ["Disables all swap then re-enables (clears swap)", "Reset swap", "Clear swap", "Swap refresh"],
    c: 0,
    e: "Clears swap. All swapped pages moved back to RAM. Needs free RAM.",
    de: "Dangerous if RAM full. OOM risk. For clearing swap after memory leak fix.",
    deBeginner: "swapoff -a turns off all swap; swapon -a turns it back on. That clears swap (pages move back to RAM). You need enough free RAM. If RAM is full, this can trigger OOM. Use after fixing a memory leak.",
    deExpert: "swapoff -a && swapon -a: clear swap. Needs free RAM. OOM risk."
  }),
  (_i: number) => ({
    q: "What does `sysctl vm.swappiness` show?",
    o: ["Kernel tendency to use swap (0-100)", "Swap tendency", "Swappiness value", "VM swap setting"],
    c: 0,
    e: "vm.swappiness 0-100. Higher = more swap use. 60 default. 10 for servers.",
    de: "sysctl vm.swappiness. sysctl -w vm.swappiness=10. /etc/sysctl.conf for persistent.",
    deBeginner: "vm.swappiness is 0-100: how much the kernel prefers to use swap. Higher = more swap. Default often 60. Many servers use 10. sysctl -w vm.swappiness=10 to set; /etc/sysctl.conf for persistent.",
    deExpert: "vm.swappiness 0-100. Default 60. 10 for servers. sysctl -w."
  }),
  (_i: number) => ({
    q: "What does `prlimit --pid=PID --nofile=65535` do?",
    o: ["Sets file descriptor limit for that process", "Process limit", "FD limit", "Nofile limit"],
    c: 0,
    e: "prlimit changes limits of running process. --nofile = max open files.",
    de: "prlimit --pid=1234 --nofile=65535. Without replacing process. Requires same user or root.",
    deBeginner: "prlimit changes resource limits of a running process. --pid=PID --nofile=65535 sets the max open file descriptors for that process. You don't need to restart it. Same user or root required.",
    deExpert: "prlimit --pid PID --nofile N: set limit on running process."
  }),
  (_i: number) => ({
    q: "What does `systemctl is-failed` show?",
    o: ["List of failed units", "Failed services", "Failed units", "Failure list"],
    c: 0,
    e: "systemctl is-failed. Exits 0 if any failed. Lists failed unit names.",
    de: "systemctl --failed. systemctl reset-failed to clear failed state.",
    deBeginner: "systemctl is-failed lists unit names that are in the failed state. Exit code 0 if any failed. systemctl --failed is similar. Use systemctl reset-failed to clear the failed state after fixing.",
    deExpert: "is-failed / --failed: list failed. reset-failed clear."
  }),
  (_i: number) => ({
    q: "What does `systemctl reset-failed` do?",
    o: ["Clears failed state of units", "Reset failed", "Clear failure", "Remove failed state"],
    c: 0,
    e: "Resets failed state. Units no longer show as failed. After fixing issue.",
    de: "systemctl reset-failed. Cleans up after fixing. Failed count goes to 0.",
    deBeginner: "systemctl reset-failed clears the failed state of units. After you fix the problem, run this so they no longer show as failed. The failed count goes back to 0.",
    deExpert: "reset-failed: clear failed state. After fix."
  }),
  (_i: number) => ({
    q: "What does `cgroups` v2 location differ from v1?",
    o: ["v2 uses unified /sys/fs/cgroup/ hierarchy", "Different path", "Unified hierarchy", "Cgroup v2 path"],
    c: 0,
    e: "cgroups v2: single hierarchy. v1: multiple (cpu, memory, etc). Modern systems use v2.",
    de: "/sys/fs/cgroup/ for v2. No cpu, memory subdirs. Unified. systemd uses v2.",
    deBeginner: "cgroups v2 has a single unified hierarchy under /sys/fs/cgroup/. v1 had separate hierarchies (cpu, memory, etc.). Modern systems use v2. systemd uses v2.",
    deExpert: "cgroups v2: unified /sys/fs/cgroup/. v1 had cpu, memory etc. systemd v2."
  }),
  (_i: number) => ({
    q: "What does `systemd-cgtop` show?",
    o: ["Real-time cgroup resource usage", "Cgroup top", "Control group usage", "Cgroup monitor"],
    c: 0,
    e: "Like top but for cgroups. CPU, memory per service/slice.",
    de: "systemd-cgtop. See which service uses resources. systemd hierarchy.",
    deBeginner: "systemd-cgtop is like top but for cgroups: it shows CPU and memory usage per service/slice in the systemd hierarchy. Lets you see which service is using resources.",
    deExpert: "systemd-cgtop: cgroup resource usage. Per service/slice."
  }),
  (_i: number) => ({
    q: "What does `systemctl kill service --signal=HUP` do?",
    o: ["Sends SIGHUP to main process of service", "Signal to service", "HUP service", "Kill with signal"],
    c: 0,
    e: "systemctl kill sends signal to service's main process. --signal=HUP.",
    de: "systemctl kill nginx --signal=HUP. Cleaner than finding PID. Reload without restart.",
    deBeginner: "systemctl kill sends a signal to the main process of the service. systemctl kill nginx --signal=HUP sends SIGHUP for config reload. Cleaner than looking up the PID. Reload without full restart.",
    deExpert: "systemctl kill --signal=SIG: send to main process. HUP reload."
  }),
  (_i: number) => ({
    q: "What does `M` in top's S column mean?",
    o: ["Multi-threaded", "Thread flag", "Multi-thread", "MT process"],
    c: 0,
    e: "S = state. M = multi-threaded (some versions). R=run, S=sleep, D=uninterruptible, Z=zombie.",
    de: "top state codes. Varies by version. ps -o state too.",
    deBeginner: "The S column in top is process state. M can mean multi-threaded in some versions. Common codes: R running, S sleeping, D uninterruptible, Z zombie, T stopped. Check your top and ps -o state.",
    deExpert: "S column: state. M multi-thread (version-dependent). R/S/D/Z/T."
  }),
  (_i: number) => ({
    q: "What does `ps -o etime= -p PID` output?",
    o: ["Elapsed time of process (no header)", "Process runtime", "Elapsed time", "Uptime of process"],
    c: 0,
    e: "ps -o etime elapsed time. = suppresses header. [[dd-]hh:]mm:ss format.",
    de: "ps -o etime= -p 1234. How long process has been running. For monitoring.",
    deBeginner: "ps -o etime= -p PID prints the elapsed time that process has been running. The = removes the column header. Format is [[dd-]hh:]mm:ss. Useful for monitoring how long something has been up.",
    deExpert: "ps -o etime= -p PID: elapsed time. = no header. [[dd-]hh:]mm:ss."
  }),
  (_i: number) => ({
    q: "What does `systemctl list-timers` show?",
    o: ["systemd timer units (like cron)", "Scheduled timers", "Timer list", "systemd timers"],
    c: 0,
    e: "systemd timers replace cron. list-timers shows next run. More flexible than cron.",
    de: "systemctl list-timers --all. .timer units. Persistent, calendar, monotonic.",
    deBeginner: "systemctl list-timers lists systemd timer units (like cron). It shows when each will run next. Add --all for inactive too. Timers can be calendar-based or monotonic. More flexible than cron.",
    deExpert: "list-timers: .timer units, next run. --all. Calendar/monotonic."
  }),
  (_i: number) => ({
    q: "What does `@daily` in crontab mean?",
    o: ["Once per day at midnight", "Daily job", "Every day", "Midnight daily"],
    c: 0,
    e: "@daily = 0 0 * * *. Midnight. @hourly, @weekly, @monthly, @yearly, @reboot.",
    de: "Shortcuts. @hourly = 0 * * * *. Check system support. GNU cron has these.",
    deBeginner: "@daily in crontab means once per day at midnight (same as 0 0 * * *). Other shortcuts: @hourly, @weekly, @monthly, @yearly, @reboot. Support varies; GNU cron has them.",
    deExpert: "@daily = 0 0 * * *. @hourly, @weekly etc. GNU cron."
  }),
  (_i: number) => ({
    q: "What does `nice -n 19 cmd` do?",
    o: ["Runs cmd with lowest priority (nice 19)", "Lowest priority", "Nice 19", "Background priority"],
    c: 0,
    e: "nice 19 = lowest CPU priority. Process yields to others. Good for batch jobs.",
    de: "nice -n 19 ./batch.sh. User can only raise nice. Root can lower (nice -n -20).",
    deBeginner: "nice -n 19 runs the command with the lowest CPU priority (nice 19). The process yields to others. Good for batch jobs. Normal users can only raise nice; root can use nice -n -20 for highest priority.",
    deExpert: "nice -n 19: lowest priority. User raise only. Root -20."
  }),
  (_i: number) => ({
    q: "What does `kill -l` output format?",
    o: ["Signal names (and numbers on some systems)", "Signal list", "Kill list", "Available signals"],
    c: 0,
    e: "kill -l lists signals. SIGTERM, SIGKILL, etc. Some show numbers too.",
    de: "kill -l. 1) SIGHUP 2) SIGINT ... 9) SIGKILL. kill -9 = kill -SIGKILL.",
    deBeginner: "kill -l lists signal names (and on some systems numbers too): SIGHUP, SIGINT, ..., SIGKILL. Format varies. kill -9 is the same as kill -SIGKILL.",
    deExpert: "kill -l: signal names/numbers. kill -9 = -SIGKILL."
  }),
  (_i: number) => ({
    q: "What does `ps --forest` show?",
    o: ["Process tree (parent-child)", "Forest tree", "Process hierarchy", "Tree structure"],
    c: 0,
    e: "ps --forest shows tree. Indentation for children. Like pstree in ps.",
    de: "ps -ejH or ps axjf for forest. --forest with -e. Visual hierarchy.",
    deBeginner: "ps --forest shows processes in a tree: parent and children with indentation. Like pstree but in ps. Use with -e for all. Variants: ps -ejH or ps axjf for forest view.",
    deExpert: "ps --forest: tree. -ejH, axjf. Visual hierarchy."
  }),
  (_i: number) => ({
    q: "What does `top -u username` do?",
    o: ["Shows only processes of that user", "Filter by user", "User filter", "User processes"],
    c: 0,
    e: "top -u filters display to one user's processes. -u root or -u www-data.",
    de: "top -u nginx. Focus on specific user. F4 or u in interactive top.",
    deBeginner: "top -u username shows only processes belonging to that user. top -u root or top -u www-data. In interactive top you can also use F4 or u to filter by user.",
    deExpert: "top -u user: filter by user. F4/u interactive."
  }),
  (_i: number) => ({
    q: "What does `lsof -p PID +r 1` do?",
    o: ["Lists files for PID, retry 1s if some in use", "Retry mode", "Lsof retry", "Files with retry"],
    c: 0,
    e: "lsof +r 1 retries every 1s for busy files. -p limits to process.",
    de: "lsof +r 1. For files that appear/disappear. +r 0 = retry until no change.",
    deBeginner: "lsof -p PID shows files for that process. +r 1 makes lsof retry every 1 second when some files are in use (busy). Good for files that appear and disappear. +r 0 retries until the list is stable.",
    deExpert: "lsof +r 1: retry 1s for busy. +r 0 until stable. -p PID."
  }),
  (_i: number) => ({
    q: "What does `fuser -k -SIGTERM /path` do?",
    o: ["Sends SIGTERM (not SIGKILL) to processes using path", "Terminate with TERM", "SIGTERM to users", "Kill with TERM"],
    c: 0,
    e: "fuser -k -SIGTERM. Default -k sends SIGKILL. -SIGTERM for graceful.",
    de: "fuser -k -15 /mnt. Graceful before SIGKILL. -9 for SIGKILL.",
    deBeginner: "fuser -k kills processes using the path. Default is SIGKILL. -SIGTERM (or -15) sends SIGTERM instead for graceful shutdown. fuser -k -15 /mnt. Use -9 for SIGKILL if needed.",
    deExpert: "fuser -k -SIGTERM: graceful. Default -k SIGKILL. -9 force."
  }),
  (_i: number) => ({
    q: "What does `tmux kill-session -t name` do?",
    o: ["Terminates named tmux session", "Kill session", "Close session", "Destroy session"],
    c: 0,
    e: "tmux kill-session -t name. Session and all windows gone.",
    de: "tmux kill-session -t dev. tmux ls to verify. kill-server kills all.",
    deBeginner: "tmux kill-session -t name ends that tmux session and all its windows. The session is gone. tmux ls to confirm. tmux kill-server kills the server and all sessions.",
    deExpert: "tmux kill-session -t name. kill-server all. tmux ls verify."
  }),
  (_i: number) => ({
    q: "What does `screen -X -S name quit` do?",
    o: ["Sends quit to named screen (detached)", "Quit screen", "Kill screen", "Close screen session"],
    c: 0,
    e: "screen -X sends command to session. -S name. quit terminates.",
    de: "screen -X -S deploy quit. No need to attach. For scripting.",
    deBeginner: "screen -X sends a command to a session. -S name picks the session. quit ends it. So screen -X -S deploy quit closes the named screen without attaching. Handy for scripts.",
    deExpert: "screen -X -S name quit: kill session detached. Scripting."
  }),
  (_i: number) => ({
    q: "What does `coproc cmd` do (bash)?",
    o: ["Creates coprocess (two-way pipe)", "Coprocess", "Background pipe", "Two-way pipe"],
    c: 0,
    e: "coproc runs cmd with stdin/stdout connected to shell. COPROC_PID, COPROC_FD.",
    de: "coproc { cmd; }; echo to >&${COPROC[1]}. Bidirectional. Less common than pipes.",
    deBeginner: "coproc (bash) runs the command as a coprocess: stdin and stdout are connected to the shell. You get COPROC_PID and COPROC_FD. You can write to and read from it. Two-way pipe. Less common than normal pipes.",
    deExpert: "coproc: two-way pipe. COPROC_PID, COPROC_FD. Bash."
  }),
  (_i: number) => ({
    q: "What does `wait` with no args do?",
    o: ["Waits for all background jobs of current shell", "Wait all", "All jobs", "All background"],
    c: 0,
    e: "wait with no args waits for every background job. Blocks until all done.",
    de: "cmd1 & cmd2 & wait. Script continues when both complete. wait returns last exit code.",
    deBeginner: "wait with no arguments waits for all background jobs of the current shell. Script blocks until they finish. Common: cmd1 & cmd2 & wait. wait returns the exit code of the last job.",
    deExpert: "wait: all bg jobs. cmd1 & cmd2 & wait. Returns last exit code."
  }),
  (_i: number) => ({
    q: "What does `ulimit -c unlimited` do?",
    o: ["Allows core dumps of any size", "Core dump", "Unlimited core", "Core file size"],
    c: 0,
    e: "ulimit -c = max core file size. unlimited = no limit. For debugging crashes.",
    de: "ulimit -c unlimited. Then run program, get core on crash. gdb program core.",
    deBeginner: "ulimit -c sets the max size of core dump files. unlimited means no limit, so when a program crashes it can write a full core file. Then debug with gdb program core.",
    deExpert: "ulimit -c unlimited: core dumps. gdb program core."
  }),
  (_i: number) => ({
    q: "What does `echo $$` output?",
    o: ["Current shell's PID", "Shell PID", "Process ID", "Current PID"],
    c: 0,
    e: "$$ = PID of current shell. echo $$. $BASHPID in bash for subshell.",
    de: "Useful for temp files: /tmp/script.$$. Unique per shell instance.",
    deBeginner: "echo $$ prints the PID of the current shell. $BASHPID in bash gives the PID of the current subshell. People use $$ in temp file names so each run is unique: /tmp/script.$$.",
    deExpert: "$$: shell PID. /tmp/foo.$$. $BASHPID subshell."
  }),
  (_i: number) => ({
    q: "What does `systemctl list-dependencies --reverse service` show?",
    o: ["What depends on this service (reverse tree)", "Reverse deps", "Dependents", "What needs this"],
    c: 0,
    e: "--reverse shows who requires this service. Forward shows what it requires.",
    de: "systemctl list-dependencies --reverse nginx. What breaks if nginx stops.",
    deBeginner: "list-dependencies shows what a unit needs. --reverse shows what needs this unit: what depends on nginx. So you see what would be affected if nginx stopped.",
    deExpert: "list-dependencies --reverse: what depends on this unit."
  }),
  (_i: number) => ({
    q: "What does `journalctl --since '1 hour ago'` show?",
    o: ["Logs from last hour", "Recent logs", "Last hour", "Hour of logs"],
    c: 0,
    e: "journalctl --since '1 hour ago'. --until too. Flexible time format.",
    de: "journalctl --since '2024-01-15' --until '2024-01-16'. -u for unit.",
    deBeginner: "journalctl --since '1 hour ago' shows logs from the last hour. You can use --until too. Time format is flexible. Add -u service for one unit.",
    deExpert: "journalctl --since/--until. Flexible time. -u unit."
  }),
  (_i: number) => ({
    q: "What does `crontab -l 2>/dev/null | crontab -` do?",
    o: ["Backs up crontab to temp and restores (no-op backup)", "Backup crontab", "Save crontab", "Crontab backup"],
    c: 0,
    e: "Lists to stdout, pipes to crontab -. Effectively backup. 2>/dev/null hides 'no crontab'.",
    de: "crontab -l > backup.txt is simpler. This is round-trip. Use for backup before edit.",
    deBeginner: "crontab -l lists to stdout; piping to crontab - reads from stdin and installs it. So it's a round-trip backup (no change if nothing else touches it). 2>/dev/null hides 'no crontab'. crontab -l > backup.txt is simpler for real backup.",
    deExpert: "crontab -l | crontab -: round-trip. 2>/dev/null. Backup pattern."
  }),
  (_i: number) => ({
    q: "What does `systemctl enable --now service` do?",
    o: ["Enables at boot and starts immediately", "Enable and start", "Now and boot", "Start and enable"],
    c: 0,
    e: "enable --now = enable + start. One command for both.",
    de: "systemctl enable --now nginx. Common after install. Replaces two commands.",
    deBeginner: "systemctl enable --now does both: enables the service to start at boot and starts it now. systemctl enable --now nginx. One command instead of enable then start. Common right after installing a service.",
    deExpert: "enable --now: enable + start. One command."
  }),
  (_i: number) => ({
    q: "What does `runuser -u user cmd` do?",
    o: ["Runs cmd as that user (no login shell)", "Run as user", "Switch user", "Execute as user"],
    c: 0,
    e: "runuser runs as user. No PAM, no login. Lighter than su. Requires root.",
    de: "runuser -u www-data -- ./script. For service scripts. runuser -l for login shell.",
    deBeginner: "runuser -u user cmd runs the command as that user. No full login (no PAM login, lighter than su). Requires root. runuser -u www-data -- ./script. runuser -l for login shell.",
    deExpert: "runuser -u user: run as user, no login. -l login. Root."
  }),
  (_i: number) => ({
    q: "What does `nsenter -t PID -m -p cmd` do?",
    o: ["Runs cmd in PID's mount and PID namespaces", "Enter namespace", "Namespace enter", "Join namespace"],
    c: 0,
    e: "nsenter enters namespaces of target process. -m mount, -p PID. For containers.",
    de: "nsenter -t 1234 -m -p /bin/bash. Debug container from host. Requires root.",
    deBeginner: "nsenter -t PID enters the namespaces of that process. -m = mount, -p = PID namespace. So you run a command (e.g. /bin/bash) in the same mount and PID view. Used to debug containers from the host. Root required.",
    deExpert: "nsenter -t PID -m -p: enter mount+PID ns. Container debug. Root."
  }),
  (_i: number) => ({
    q: "What does `pgrep -u user pattern` match?",
    o: ["Processes of user matching pattern", "User's processes", "Filter by user", "User and pattern"],
    c: 0,
    e: "pgrep -u user filters by owner. pgrep -u root nginx.",
    de: "pgrep -u www-data. -x for exact match. -f for full command.",
    deBeginner: "pgrep -u user pattern finds PIDs of processes that match the pattern and are owned by that user. pgrep -u www-data. Add -x for exact name match, -f for full command line.",
    deExpert: "pgrep -u user pattern. -x exact. -f full cmdline."
  }),
  (_i: number) => ({
    q: "What does `pkill -x exactname` do?",
    o: ["Matches process with exact name only", "Exact match", "Full name match", "No partial"],
    c: 0,
    e: "pkill -x matches exact name. pkill -x nginx not nginx-worker.",
    de: "pkill -x script.sh. -f for full command line match.",
    deBeginner: "pkill -x matches only the exact process name. pkill -x nginx won't match nginx-worker. pkill -x script.sh. Use -f to match the full command line instead.",
    deExpert: "pkill -x: exact name only. -f full cmdline."
  }),
  (_i: number) => ({
    q: "What does `renice +5 -p PID` do?",
    o: ["Lowers priority of running process (nicer)", "Lower priority", "Renice down", "Make nicer"],
    c: 0,
    e: "renice changes nice of running process. +5 = lower priority. Only own or root.",
    de: "renice -n 19 -p 1234. Negative for higher priority (root only).",
    deBeginner: "renice +5 -p PID raises the nice value by 5 (lowers priority) for that process. So the process becomes nicer to others. renice -n 19 -p 1234 sets absolute. Negative (higher priority) needs root.",
    deExpert: "renice +5 -p PID: lower priority. -n N absolute. Root for negative."
  }),
  (_i: number) => ({
    q: "What does `chrt -f 99 cmd` do?",
    o: ["Runs cmd as real-time FIFO priority 99", "Real-time FIFO", "RT priority", "FIFO scheduling"],
    c: 0,
    e: "chrt -f 99 = SCHED_FIFO priority 99. Highest real-time. Root only.",
    de: "chrt -f 1 ./realtime. -r for RR. Dangerous: can starve system.",
    deBeginner: "chrt -f 99 runs the command with SCHED_FIFO real-time priority 99 (highest). Root only. Real-time can starve normal processes. chrt -f 1 for lower RT. -r is round-robin. Use with care.",
    deExpert: "chrt -f 99: SCHED_FIFO RT 99. Root. Can starve. -r RR."
  }),
  (_i: number) => ({
    q: "What does `systemctl mask service` do?",
    o: ["Prevents service from being started (symlink to /dev/null)", "Disable permanently", "Mask service", "Block start"],
    c: 0,
    e: "mask prevents start. Stronger than disable. Symlink to /dev/null.",
    de: "systemctl mask nginx. systemctl unmask to restore. For conflicting services.",
    deBeginner: "systemctl mask prevents the service from being started (even manually). It does this by linking the unit to /dev/null. Stronger than disable. systemctl unmask to undo. Use for conflicting services.",
    deExpert: "mask: symlink to /dev/null. No start. unmask restore."
  }),
  (_i: number) => ({
    q: "What does `systemctl revert service` do?",
    o: ["Reverts masked unit to vendor version", "Unmask vendor", "Revert mask", "Restore vendor"],
    c: 0,
    e: "revert undoes mask. Restores to /lib or /usr. For package-managed units.",
    de: "systemctl revert nginx. After mask. Gets vendor unit back.",
    deBeginner: "systemctl revert undoes a mask and restores the unit to the vendor version (from /lib or /usr). Use after you had masked a package unit. Gets the original unit file back.",
    deExpert: "revert: undo mask, restore vendor unit. /lib /usr."
  }),
  (_i: number) => ({
    q: "What does `loadavg` in /proc/loadavg show?",
    o: ["1, 5, 15 min load averages and runnable info", "Load averages", "System load", "Load 1 5 15"],
    c: 0,
    e: "Load = runnable + uninterruptible. 3 numbers: 1m, 5m, 15m. Then runnable/total.",
    de: "cat /proc/loadavg. uptime shows same. Per-CPU: load/cores.",
    deBeginner: "/proc/loadavg has the 1, 5, and 15 minute load averages plus runnable/total process counts. Same numbers as uptime. Load per CPU = load/cores; 4.0 on 4 CPUs = full.",
    deExpert: "/proc/loadavg: 1 5 15 min + runnable/total. uptime same."
  }),
  (_i: number) => ({
    q: "What does `vmstat 1` output?",
    o: ["Virtual memory stats every 1 second", "VM stats", "Memory stats", "Virtual memory"],
    c: 0,
    e: "vmstat 1 prints every second. Procs, memory, swap, io, system, cpu.",
    de: "vmstat 1 5 for 5 samples. si/so = swap in/out. Good for memory pressure.",
    deBeginner: "vmstat 1 prints virtual memory and system stats every 1 second. Procs, memory, swap, io, system, cpu. vmstat 1 5 gives 5 samples. si/so are swap in/out. Good for memory pressure.",
    deExpert: "vmstat 1: procs mem swap io cpu. si/so swap. 1 5 = 5 samples."
  }),
  (_i: number) => ({
    q: "What does `mpstat -P ALL 1` show?",
    o: ["Per-CPU stats every second", "Per-CPU usage", "All CPUs", "CPU stats"],
    c: 0,
    e: "mpstat -P ALL per-CPU. 1 = 1s interval. %idle, %user, %sys. sysstat.",
    de: "mpstat -P 0 for CPU 0. Identify hot CPU. iostat for disk.",
    deBeginner: "mpstat -P ALL 1 shows per-CPU statistics every second. You see %idle, %user, %sys per CPU. Part of sysstat. mpstat -P 0 for just CPU 0. Helps find a hot CPU. iostat for disk.",
    deExpert: "mpstat -P ALL 1: per-CPU. %idle %user %sys. sysstat. iostat disk."
  }),
  (_i: number) => ({
    q: "What does `sar -u 1 5` show?",
    o: ["CPU utilization 5 times at 1s interval", "CPU sar", "CPU usage", "SAR CPU"],
    c: 0,
    e: "sar -u for CPU. 1 5 = 5 samples, 1s apart. %user, %nice, %system, %idle.",
    de: "sar from sysstat. Historical if sadc running. sar -r for memory.",
    deBeginner: "sar -u 1 5 reports CPU utilization 5 times, 1 second apart. Shows %user, %nice, %system, %idle. sar is from sysstat. If sadc is running you get historical data. sar -r for memory.",
    deExpert: "sar -u 1 5: CPU 5 samples. sysstat. sar -r memory."
  }),
  (_i: number) => ({
    q: "What does `systemctl show service -p MainPID` output?",
    o: ["Main process ID of the service", "Main PID", "Service PID", "Primary PID"],
    c: 0,
    e: "systemctl show -p MainPID gets PID. MainPID=1234 or MainPID=0 if not running.",
    de: "systemctl show nginx -p MainPID. For scripting. -p for specific property.",
    deBeginner: "systemctl show -p MainPID outputs the main process ID of the service. MainPID=1234 if running, MainPID=0 if not. Handy in scripts. -p lets you ask for any property.",
    deExpert: "systemctl show -p MainPID. MainPID=0 not running. Scripting."
  }),
  (_i: number) => ({
    q: "What does `systemctl is-active service` return?",
    o: ["active, inactive, or failed", "Service state", "Active status", "Running state"],
    c: 0,
    e: "systemctl is-active. Exits 0 if active. active, inactive, failed, etc.",
    de: "systemctl is-active nginx. For scripts. if systemctl is-active nginx; then",
    deBeginner: "systemctl is-active returns the current state: active, inactive, failed, etc. Exit 0 if active. Used in scripts: if systemctl is-active nginx; then ... fi.",
    deExpert: "is-active: active/inactive/failed. Exit 0 if active. Scripts."
  }),
];
