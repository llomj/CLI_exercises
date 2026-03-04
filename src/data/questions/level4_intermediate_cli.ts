// LEVEL 4 INTERMEDIATE — Process Management (100 unique questions)
// Topics: ps, top, kill, nice, cron, daemons, systemd, load, memory, swap

export const level4Intermediate = [
  (_i: number) => ({
    q: "What does `ps -e -o pid,comm,%mem --sort=-%mem` show?",
    o: ["All processes sorted by memory usage descending", "Memory usage only", "Top memory processes", "Process memory list"],
    c: 0,
    e: "ps -e all, -o custom columns, --sort=-%mem sorts by memory high to low.",
    de: "ps -eo pid,comm,%mem --sort=-%mem. Head for top N. Useful for finding memory hogs."
  }),
  (_i: number) => ({
    q: "What does `top -b -n 1` produce?",
    o: ["Single batch snapshot (scriptable output)", "Background mode", "One process", "Batch output"],
    c: 0,
    e: "top -b batch mode, -n 1 one iteration. No interactive. Good for scripts.",
    de: "top -b -n 1 | head -20. Captures one snapshot. Redirect to file or pipe."
  }),
  (_i: number) => ({
    q: "What does `kill -HUP PID` typically trigger?",
    o: ["Config reload without full restart", "Hang up process", "Restart process", "Stop process"],
    c: 0,
    e: "SIGHUP often means 'reload config'. Many daemons support it.",
    de: "kill -HUP $(cat /var/run/nginx.pid). Nginx, Apache reload config on HUP."
  }),
  (_i: number) => ({
    q: "What does `renice -n 5 -u username` do?",
    o: ["Changes nice value for all of user's processes", "Renices one process", "Sets user nice", "Changes user priority"],
    c: 0,
    e: "renice -u affects all processes owned by that user. Root can lower nice.",
    de: "renice -n 5 -u jane. Bulk priority change. -p for specific PID."
  }),
  (_i: number) => ({
    q: "What does crontab field '*/5' in minute position mean?",
    o: ["Every 5 minutes", "Every 5th minute", "Five times", "At minute 5"],
    c: 0,
    e: "*/5 = every 5 units. */5 * * * * = every 5 minutes.",
    de: "*/10 * * * * = every 10 min. */1 = every minute. 0 */2 = every 2 hours."
  }),
  (_i: number) => ({
    q: "What does `systemctl reload service` do vs restart?",
    o: ["Reloads config without stopping process", "Restarts service", "Reloads config file", "Same as restart"],
    c: 0,
    e: "reload applies config changes. Process keeps running. restart does full stop/start.",
    de: "nginx -s reload. systemctl reload nginx. Not all services support reload."
  }),
  (_i: number) => ({
    q: "What does load average 2.5 mean on a 4-CPU system?",
    o: ["Some CPU headroom (2.5/4 utilized)", "Overloaded", "Exactly half", "2.5 processes waiting"],
    c: 0,
    e: "Load 2.5 on 4 CPUs = ~62% utilized. 4.0 = fully utilized.",
    de: "Load = runnable + uninterruptible. 1.0 per CPU = saturated. Context for capacity."
  }),
  (_i: number) => ({
    q: "What does `free -m` show?",
    o: ["Memory in megabytes", "Free memory only", "Memory total", "Megabytes used"],
    c: 0,
    e: "free -m uses MB. -g for GB. -h for human-readable (K,M,G).",
    de: "free -m. Columns: total, used, free, shared, buff/cache, available."
  }),
  (_i: number) => ({
    q: "What does `swapon /swapfile` do?",
    o: ["Enables swap on the file", "Creates swap", "Swaps file", "Activates swapfile"],
    c: 0,
    e: "swapon activates swap. /swapfile must exist and be prepared (mkswap).",
    de: "fallocate -l 1G /swapfile; chmod 600; mkswap; swapon. swapoff to disable."
  }),
  (_i: number) => ({
    q: "What does `pgrep -u root nginx` find?",
    o: ["PIDs of nginx processes owned by root", "Root nginx", "Nginx as root", "User root nginx PIDs"],
    c: 0,
    e: "pgrep -u user filters by owner. pgrep -u root nginx.",
    de: "pgrep -u jane. -f matches full command line. -l shows names (pgrep -l)."
  }),
  (_i: number) => ({
    q: "What does `pkill -9 -f 'python script.py'` do?",
    o: ["SIGKILLs processes matching full command line", "Kills Python", "Force kills script", "Kills matching processes"],
    c: 0,
    e: "pkill -f matches full command. -9 sends SIGKILL. Careful: can match multiple.",
    de: "pkill -9 -f pattern. -f is dangerous with short patterns. Prefer pgrep first to verify."
  }),
  (_i: number) => ({
    q: "What does `jobs -l` add over `jobs`?",
    o: ["PIDs of jobs", "Long format", "More detail", "Job PIDs"],
    c: 0,
    e: "jobs -l shows PID for each job. jobs shows [n] status command.",
    de: "jobs -l. [1]+ Running cmd & 12345. Useful to kill or monitor specific job."
  }),
  (_i: number) => ({
    q: "What does `nohup` redirect by default if not specified?",
    o: ["stdout to nohup.out, stderr to same", "To /dev/null", "To terminal", "To nohup.log"],
    c: 0,
    e: "nohup appends to nohup.out. nohup cmd > out.log 2>&1 for custom.",
    de: "nohup cmd. nohup.out in current dir. Redirect both for clean logging."
  }),
  (_i: number) => ({
    q: "What does `disown -h %1` do?",
    o: ["Marks job 1 to not receive SIGHUP (keeps in table)", "Removes job 1", "Hides job", "Detaches job 1"],
    c: 0,
    e: "disown -h marks job; it stays in jobs list but won't get SIGHUP on shell exit.",
    de: "disown -h %1. Job survives shell exit. Without -h, disown removes from table entirely."
  }),
  (_i: number) => ({
    q: "What does `ps -p PID -o pid,ppid,stat` show?",
    o: ["PID, PPID, and state for that process", "Process stats", "Single process info", "Process state"],
    c: 0,
    e: "ps -p selects one PID. -o custom columns. stat = R/S/D/Z/T etc.",
    de: "R=running, S=sleeping, D=uninterruptible, Z=zombie, T=stopped. stat shows state."
  }),
  (_i: number) => ({
    q: "What does `ps -o pid,state,wchan` show for wchan?",
    o: ["Kernel function process is waiting on", "Wait channel", "Sleep reason", "Kernel wait"],
    c: 0,
    e: "wchan = wait channel. Kernel function name where process is blocked.",
    de: "ps -o pid,state,wchan. poll_schedule_timeout, etc. For debugging hangs."
  }),
  (_i: number) => ({
    q: "What does `top -p PID1,PID2` do?",
    o: ["Monitors only those PIDs", "Shows top PIDs", "Filters by PID", "PID monitor mode"],
    c: 0,
    e: "top -p limits display to specified PIDs. Comma-separated list.",
    de: "top -p 1234,5678. Focus on specific processes. -p $(pgrep nginx) for dynamic."
  }),
  (_i: number) => ({
    q: "What does `htop -p PID` do?",
    o: ["Shows only that process tree", "Filters by PID", "PID only view", "Process filter"],
    c: 0,
    e: "htop -p shows process and its children. Tree view focused.",
    de: "htop -p 1234. F4 to filter. F5 tree view. F6 to sort."
  }),
  (_i: number) => ({
    q: "What does `crontab -u user -e` require?",
    o: ["Root or same user to edit another's crontab", "User permission", "Root only", "Crontab access"],
    c: 0,
    e: "crontab -u edits another user's crontab. Requires root (or target user).",
    de: "sudo crontab -u www-data -e. For service accounts. crontab -l -u user to list."
  }),
  (_i: number) => ({
    q: "What does `systemctl list-units --type=service --state=running` show?",
    o: ["Only running service units", "All services", "Active services", "Running units"],
    c: 0,
    e: "Filters by type=service and state=running. Focused list.",
    de: "systemctl list-units -t service -s running. --all for inactive too."
  }),
  (_i: number) => ({
    q: "What does `vmstat 1 5` output?",
    o: ["5 samples at 1-second intervals", "5 seconds total", "First 5 lines", "5 iterations"],
    c: 0,
    e: "vmstat delay count. vmstat 1 5 = 5 reports, 1 second apart.",
    de: "First line is since boot. Subsequent lines are since previous. Good for spotting trends."
  }),
  (_i: number) => ({
    q: "What does `lsof -i :80` list?",
    o: ["Processes using port 80", "Port 80 listeners", "Network port 80", "Port 80 users"],
    c: 0,
    e: "lsof -i :port shows processes with that port open. -i :80 or -i :ssh.",
    de: "lsof -i :443. See what's listening. netstat -tlnp alternative. Requires root for some."
  }),
  (_i: number) => ({
    q: "What does `fuser -v /dev/sda1` show?",
    o: ["Processes using that device (verbose)", "Device users", "Verbose users", "SDA1 processes"],
    c: 0,
    e: "fuser -v verbose. Shows PID, user, access type (c=current dir, m=mmap, etc).",
    de: "fuser -v /mnt. Before umount. fuser -km to kill. -v for details."
  }),
  (_i: number) => ({
    q: "What does `screen -S sessionname` do?",
    o: ["Creates named screen session", "Starts screen", "Session name", "Named session"],
    c: 0,
    e: "screen -S name creates session with that name. screen -r name to reattach.",
    de: "screen -S deploy. screen -ls lists. screen -r deploy. Easier to find sessions."
  }),
  (_i: number) => ({
    q: "What does `tmux new -s mysession` do?",
    o: ["Creates new tmux session named mysession", "New session", "Named tmux", "Session create"],
    c: 0,
    e: "tmux new -s name. tmux attach -t name to attach. tmux ls to list.",
    de: "tmux new -s dev. Ctrl+B d detach. tmux attach -t dev. Persistent sessions."
  }),
  (_i: number) => ({
    q: "What does `(cmd &)` with parentheses do?",
    o: ["Runs cmd in subshell, background; parent continues", "Subshell background", "Background subshell", "Forked background"],
    c: 0,
    e: "Subshell isolates. (cmd &) runs in background, parent shell doesn't wait.",
    de: "(sleep 10 &) and exit. Child survives. Different from cmd & in job control."
  }),
  (_i: number) => ({
    q: "What does `kill -STOP PID` do?",
    o: ["Suspends process (SIGSTOP)", "Stops process", "Pauses process", "Freezes process"],
    c: 0,
    e: "SIGSTOP suspends. Process stops. kill -CONT PID to resume.",
    de: "kill -STOP = Ctrl+Z. kill -CONT resumes. Process in T state."
  }),
  (_i: number) => ({
    q: "What does `kill -CONT PID` do?",
    o: ["Resumes suspended process", "Continues process", "Resumes process", "Unpauses process"],
    c: 0,
    e: "SIGCONT resumes process stopped by SIGSTOP or Ctrl+Z.",
    de: "kill -CONT PID. Process goes from T to R/S. fg/bg also send CONT."
  }),
  (_i: number) => ({
    q: "What does `at -f script.sh 3pm` do?",
    o: ["Schedules script.sh to run at 3pm", "Runs script at 3pm", "At job from file", "Schedules file"],
    c: 0,
    e: "at -f file time. Runs file contents at specified time. One-shot.",
    de: "at -f backup.sh 2am tomorrow. atq lists. atrm jobnum removes."
  }),
  (_i: number) => ({
    q: "What does `watch -d cmd` add?",
    o: ["Highlights changes between runs", "Difference highlight", "Delta display", "Change highlight"],
    c: 0,
    e: "watch -d highlights what changed since last run. Easier to spot differences.",
    de: "watch -d -n 1 free -h. -d = diff. -d=cumulative for persistent highlight."
  }),
  (_i: number) => ({
    q: "What does `time (cmd)` with parentheses show?",
    o: ["Time for entire pipeline/subshell", "Subshell time", "Total time", "Pipeline time"],
    c: 0,
    e: "time (cmd1; cmd2) times whole group. Without parens, only last command.",
    de: "time (make clean && make). /usr/bin/time -v for detailed stats."
  }),
  (_i: number) => ({
    q: "What does `pidof -s program` return?",
    o: ["Single PID (one instance only)", "First PID", "One result", "Single process"],
    c: 0,
    e: "pidof -s returns only one PID. Default returns all matching.",
    de: "pidof -s nginx. When you need single PID. -x includes script name."
  }),
  (_i: number) => ({
    q: "What does `kill -0 $PID 2>/dev/null` test?",
    o: ["Whether process exists (exit 0/1)", "Process alive check", "Existence test", "PID valid check"],
    c: 0,
    e: "kill -0 checks existence. No signal sent. Exit 0 if exists, 1 if not.",
    de: "if kill -0 $PID 2>/dev/null; then echo running; fi. Common script pattern."
  }),
  (_i: number) => ({
    q: "What does `ps -L -p PID` show?",
    o: ["Threads (LWP) of that process", "Process threads", "Lightweight processes", "Thread list"],
    c: 0,
    e: "ps -L shows threads (LWPs). -p limits to one process. SPID or LWP column.",
    de: "ps -eLf for all threads. -L with -o pid,lwp,comm. For multi-threaded debugging."
  }),
  (_i: number) => ({
    q: "What does `pstree -p -u` show?",
    o: ["Process tree with PIDs and usernames", "Tree with IDs", "User tree", "Full tree"],
    c: 0,
    e: "pstree -p PIDs, -u usernames. Shows who owns what in hierarchy.",
    de: "pstree -p -u. Users in brackets when different from parent. Clear ownership view."
  }),
  (_i: number) => ({
    q: "What does `ionice -c 2 -n 7 cmd` set?",
    o: ["Best-effort class, nice 7 (lowest I/O priority)", "I/O nice 7", "Low I/O priority", "Best-effort low"],
    c: 0,
    e: "ionice -c 2 best-effort, -n 0-7. 7 = lowest priority. -c 3 = idle.",
    de: "ionice -c2 -n7 backup.sh. Doesn't compete for disk. Good for background tasks."
  }),
  (_i: number) => ({
    q: "What does `taskset -p 0x3 PID` set?",
    o: ["CPU affinity to CPUs 0 and 1", "CPU mask", "Affinity mask", "Two CPUs"],
    c: 0,
    e: "taskset -p mask. 0x3 = binary 11 = CPUs 0,1. Hex mask for affinity.",
    de: "0x3 = CPUs 0,1. 0xF = 0-3. taskset -cp 0,1 PID for list form."
  }),
  (_i: number) => ({
    q: "What does `cat /proc/PID/status` show?",
    o: ["Process status summary (state, memory, etc)", "Process status", "Status info", "Proc status"],
    c: 0,
    e: "Human-readable process info. State, VmRSS, VmSize, threads, etc.",
    de: "VmRSS=resident, VmSize=virtual. State, voluntary/voluntary ctxt switches."
  }),
  (_i: number) => ({
    q: "What does `ulimit -u` show?",
    o: ["Max user processes", "Process limit", "User limit", "Max processes"],
    c: 0,
    e: "ulimit -u = max processes user can create. ulimit -a for all.",
    de: "ulimit -u. Hit with fork bombs. /etc/security/limits.conf for system-wide."
  }),
  (_i: number) => ({
    q: "What does `strace -e open,read -p PID` do?",
    o: ["Traces only open and read syscalls for that process", "Filters syscalls", "Trace specific", "Open/read trace"],
    c: 0,
    e: "strace -e limits to specified syscalls. -p attaches to running process.",
    de: "strace -e open,read -p 1234. -f for children. -t for timestamps."
  }),
  (_i: number) => ({
    q: "What does `systemctl show service -p ActiveState` output?",
    o: ["Just the ActiveState value (scriptable)", "Service state", "Active state only", "Property value"],
    c: 0,
    e: "systemctl show -p property. Outputs single property. For scripts.",
    de: "systemctl show nginx -p ActiveState. active/inactive/failed. -p SubState too."
  }),
  (_i: number) => ({
    q: "What does `journalctl -b -1` show?",
    o: ["Logs from previous boot", "Last boot", "Boot -1", "Previous boot logs"],
    c: 0,
    e: "journalctl -b -1 = previous boot. -b = current. -b -2 = two boots ago.",
    de: "journalctl -b -1 -u nginx. Debugging previous boot issues."
  }),
  (_i: number) => ({
    q: "What does `crontab` line '0 0 1 * *' mean?",
    o: ["Midnight on 1st of every month", "Monthly", "First of month", "1st at midnight"],
    c: 0,
    e: "min hour day month weekday. 0 0 1 * * = 00:00 on 1st, any month, any weekday.",
    de: "0 0 1 * * = monthly. 0 0 * * 0 = weekly Sunday midnight."
  }),
  (_i: number) => ({
    q: "What does `systemctl set-default multi-user.target` do?",
    o: ["Sets default boot target to multi-user (no GUI)", "Default target", "Boot to console", "No GUI default"],
    c: 0,
    e: "System will boot to multi-user instead of graphical by default.",
    de: "Creates /etc/systemd/system/default.target symlink. graphical.target for GUI."
  }),
  (_i: number) => ({
    q: "What does `systemctl rescue` do?",
    o: ["Single-user rescue mode (minimal services)", "Rescue mode", "Emergency boot", "Single user"],
    c: 0,
    e: "Brings system to rescue.target. Minimal. For recovery. Similar to single-user.",
    de: "systemctl rescue. Fewer services than multi-user. systemctl emergency for more minimal."
  }),
  (_i: number) => ({
    q: "What does `trap 'echo done' EXIT` do in a script?",
    o: ["Runs echo done when script exits (any reason)", "Exit handler", "Cleanup on exit", "EXIT trap"],
    c: 0,
    e: "trap runs on EXIT (normal or signal). Common for cleanup.",
    de: "trap 'rm -f /tmp/foo' EXIT. Runs on exit, Ctrl+C, etc. Cleanup guarantee."
  }),
  (_i: number) => ({
    q: "What does `trap '' INT` do?",
    o: ["Ignores SIGINT (Ctrl+C)", "Disables Ctrl+C", "Ignore interrupt", "No SIGINT"],
    c: 0,
    e: "trap '' INT makes script ignore Ctrl+C. Empty string = ignore.",
    de: "trap '' INT. trap - INT to restore. For critical sections."
  }),
  (_i: number) => ({
    q: "What does `sleep infinity` do?",
    o: ["Sleeps forever (until killed)", "Infinite sleep", "Never wake", "Permanent sleep"],
    c: 0,
    e: "sleep infinity. Process sleeps until killed. Useful in containers.",
    de: "Containers: sleep infinity keeps container running. tail -f /dev/null alternative."
  }),
  (_i: number) => ({
    q: "What does `wait $!` wait for?",
    o: ["Last background process ($!)", "Background job", "Last job", "Most recent background"],
    c: 0,
    e: "wait $! waits for PID in $! (last background process).",
    de: "cmd &; wait $!; echo done. Get exit code: wait $!; echo $?"
  }),
  (_i: number) => ({
    q: "What does `exec 3>&1` do?",
    o: ["Opens fd 3 as copy of stdout", "Duplicate stdout", "FD 3 to stdout", "Redirect fd 3"],
    c: 0,
    e: "exec 3>&1. fd 3 now points to same as 1. For saving/restoring stdout.",
    de: "exec 3>&1 1>log; echo to file; exec 1>&3 3>&- to restore. Sophisticated redirection."
  }),
  (_i: number) => ({
    q: "What does `$PPID` contain in shell?",
    o: ["Parent process ID", "Parent PID", "Shell's parent", "PPID variable"],
    c: 0,
    e: "$PPID is parent of current shell. echo $PPID.",
    de: "ps -p $PPID. $$ = self, $PPID = parent. init adopts when parent dies."
  }),
  (_i: number) => ({
    q: "What does `getconf _NPROCESSORS_ONLN` return?",
    o: ["Number of online CPUs", "CPU count", "Processor count", "Online CPUs"],
    c: 0,
    e: "getconf _NPROCESSORS_ONLN. Portable CPU count. nproc is simpler on Linux.",
    de: "nproc on Linux. getconf portable. For make -j$(nproc) or parallel jobs."
  }),
  (_i: number) => ({
    q: "What does `systemctl cat service` show?",
    o: ["Unit file contents (including overrides)", "Service config", "Unit file", "Service file"],
    c: 0,
    e: "systemctl cat shows effective unit file. Includes drop-ins.",
    de: "systemctl cat nginx. See merged config. /etc/systemd/system/service.d/ overrides."
  }),
  (_i: number) => ({
    q: "What does `systemctl edit service` do?",
    o: ["Creates override file for service", "Edits service", "Override editor", "Service override"],
    c: 0,
    e: "Opens editor for override. Creates /etc/systemd/system/service.d/override.conf.",
    de: "systemctl edit nginx. Override without editing main unit. daemon-reload after."
  }),
  (_i: number) => ({
    q: "What does `journalctl -n 50 --no-pager` do?",
    o: ["Last 50 lines, no pager (pipeable)", "50 lines no pager", "Tail 50", "Last 50 lines"],
    c: 0,
    e: "journalctl -n 50. --no-pager disables less. For scripts/pipes.",
    de: "journalctl -n 100 --no-pager | grep error. -n = --lines."
  }),
  (_i: number) => ({
    q: "What does `crontab -r` do?",
    o: ["Removes user's crontab entirely", "Remove crontab", "Delete crontab", "Clear crontab"],
    c: 0,
    e: "crontab -r deletes crontab. All jobs removed. No confirmation.",
    de: "crontab -r. Backup first: crontab -l > crontab.bak. -r is destructive."
  }),
  (_i: number) => ({
    q: "What does `atq` show?",
    o: ["Pending at jobs", "At queue", "Scheduled jobs", "At job list"],
    c: 0,
    e: "atq lists pending at jobs. Job number, user, run time.",
    de: "atq. atrm jobnum to remove. at -l is alias."
  }),
  (_i: number) => ({
    q: "What does `atrm 3` do?",
    o: ["Removes at job number 3", "Delete at job", "Remove job 3", "Cancel at job"],
    c: 0,
    e: "atrm jobnum removes scheduled job. atq shows numbers.",
    de: "atrm 3. Only own jobs (or root for all). at -d is alias."
  }),
  (_i: number) => ({
    q: "What does `swapoff -a && swapon -a` do?",
    o: ["Disables all swap then re-enables (clears swap)", "Reset swap", "Clear swap", "Swap refresh"],
    c: 0,
    e: "Clears swap. All swapped pages moved back to RAM. Needs free RAM.",
    de: "Dangerous if RAM full. OOM risk. For clearing swap after memory leak fix."
  }),
  (_i: number) => ({
    q: "What does `sysctl vm.swappiness` show?",
    o: ["Kernel tendency to use swap (0-100)", "Swap tendency", "Swappiness value", "VM swap setting"],
    c: 0,
    e: "vm.swappiness 0-100. Higher = more swap use. 60 default. 10 for servers.",
    de: "sysctl vm.swappiness. sysctl -w vm.swappiness=10. /etc/sysctl.conf for persistent."
  }),
  (_i: number) => ({
    q: "What does `prlimit --pid=PID --nofile=65535` do?",
    o: ["Sets file descriptor limit for that process", "Process limit", "FD limit", "Nofile limit"],
    c: 0,
    e: "prlimit changes limits of running process. --nofile = max open files.",
    de: "prlimit --pid=1234 --nofile=65535. Without replacing process. Requires same user or root."
  }),
  (_i: number) => ({
    q: "What does `systemctl is-failed` show?",
    o: ["List of failed units", "Failed services", "Failed units", "Failure list"],
    c: 0,
    e: "systemctl is-failed. Exits 0 if any failed. Lists failed unit names.",
    de: "systemctl --failed. systemctl reset-failed to clear failed state."
  }),
  (_i: number) => ({
    q: "What does `systemctl reset-failed` do?",
    o: ["Clears failed state of units", "Reset failed", "Clear failure", "Remove failed state"],
    c: 0,
    e: "Resets failed state. Units no longer show as failed. After fixing issue.",
    de: "systemctl reset-failed. Cleans up after fixing. Failed count goes to 0."
  }),
  (_i: number) => ({
    q: "What does `cgroups` v2 location differ from v1?",
    o: ["v2 uses unified /sys/fs/cgroup/ hierarchy", "Different path", "Unified hierarchy", "Cgroup v2 path"],
    c: 0,
    e: "cgroups v2: single hierarchy. v1: multiple (cpu, memory, etc). Modern systems use v2.",
    de: "/sys/fs/cgroup/ for v2. No cpu, memory subdirs. Unified. systemd uses v2."
  }),
  (_i: number) => ({
    q: "What does `systemd-cgtop` show?",
    o: ["Real-time cgroup resource usage", "Cgroup top", "Control group usage", "Cgroup monitor"],
    c: 0,
    e: "Like top but for cgroups. CPU, memory per service/slice.",
    de: "systemd-cgtop. See which service uses resources. systemd hierarchy."
  }),
  (_i: number) => ({
    q: "What does `systemctl kill service --signal=HUP` do?",
    o: ["Sends SIGHUP to main process of service", "Signal to service", "HUP service", "Kill with signal"],
    c: 0,
    e: "systemctl kill sends signal to service's main process. --signal=HUP.",
    de: "systemctl kill nginx --signal=HUP. Cleaner than finding PID. Reload without restart."
  }),
  (_i: number) => ({
    q: "What does `M` in top's S column mean?",
    o: ["Multi-threaded", "Thread flag", "Multi-thread", "MT process"],
    c: 0,
    e: "S = state. M = multi-threaded (some versions). R=run, S=sleep, D=uninterruptible, Z=zombie.",
    de: "top state codes. Varies by version. ps -o state too."
  }),
  (_i: number) => ({
    q: "What does `ps -o etime= -p PID` output?",
    o: ["Elapsed time of process (no header)", "Process runtime", "Elapsed time", "Uptime of process"],
    c: 0,
    e: "ps -o etime elapsed time. = suppresses header. [[dd-]hh:]mm:ss format.",
    de: "ps -o etime= -p 1234. How long process has been running. For monitoring."
  }),
  (_i: number) => ({
    q: "What does `systemctl list-timers` show?",
    o: ["systemd timer units (like cron)", "Scheduled timers", "Timer list", "systemd timers"],
    c: 0,
    e: "systemd timers replace cron. list-timers shows next run. More flexible than cron.",
    de: "systemctl list-timers --all. .timer units. Persistent, calendar, monotonic."
  }),
  (_i: number) => ({
    q: "What does `@daily` in crontab mean?",
    o: ["Once per day at midnight", "Daily job", "Every day", "Midnight daily"],
    c: 0,
    e: "@daily = 0 0 * * *. Midnight. @hourly, @weekly, @monthly, @yearly, @reboot.",
    de: "Shortcuts. @hourly = 0 * * * *. Check system support. GNU cron has these."
  }),
  (_i: number) => ({
    q: "What does `nice -n 19 cmd` do?",
    o: ["Runs cmd with lowest priority (nice 19)", "Lowest priority", "Nice 19", "Background priority"],
    c: 0,
    e: "nice 19 = lowest CPU priority. Process yields to others. Good for batch jobs.",
    de: "nice -n 19 ./batch.sh. User can only raise nice. Root can lower (nice -n -20)."
  }),
  (_i: number) => ({
    q: "What does `kill -l` output format?",
    o: ["Signal names (and numbers on some systems)", "Signal list", "Kill list", "Available signals"],
    c: 0,
    e: "kill -l lists signals. SIGTERM, SIGKILL, etc. Some show numbers too.",
    de: "kill -l. 1) SIGHUP 2) SIGINT ... 9) SIGKILL. kill -9 = kill -SIGKILL."
  }),
  (_i: number) => ({
    q: "What does `ps --forest` show?",
    o: ["Process tree (parent-child)", "Forest tree", "Process hierarchy", "Tree structure"],
    c: 0,
    e: "ps --forest shows tree. Indentation for children. Like pstree in ps.",
    de: "ps -ejH or ps axjf for forest. --forest with -e. Visual hierarchy."
  }),
  (_i: number) => ({
    q: "What does `top -u username` do?",
    o: ["Shows only processes of that user", "Filter by user", "User filter", "User processes"],
    c: 0,
    e: "top -u filters display to one user's processes. -u root or -u www-data.",
    de: "top -u nginx. Focus on specific user. F4 or u in interactive top."
  }),
  (_i: number) => ({
    q: "What does `lsof -p PID +r 1` do?",
    o: ["Lists files for PID, retry 1s if some in use", "Retry mode", "Lsof retry", "Files with retry"],
    c: 0,
    e: "lsof +r 1 retries every 1s for busy files. -p limits to process.",
    de: "lsof +r 1. For files that appear/disappear. +r 0 = retry until no change."
  }),
  (_i: number) => ({
    q: "What does `fuser -k -SIGTERM /path` do?",
    o: ["Sends SIGTERM (not SIGKILL) to processes using path", "Terminate with TERM", "SIGTERM to users", "Kill with TERM"],
    c: 0,
    e: "fuser -k -SIGTERM. Default -k sends SIGKILL. -SIGTERM for graceful.",
    de: "fuser -k -15 /mnt. Graceful before SIGKILL. -9 for SIGKILL."
  }),
  (_i: number) => ({
    q: "What does `tmux kill-session -t name` do?",
    o: ["Terminates named tmux session", "Kill session", "Close session", "Destroy session"],
    c: 0,
    e: "tmux kill-session -t name. Session and all windows gone.",
    de: "tmux kill-session -t dev. tmux ls to verify. kill-server kills all."
  }),
  (_i: number) => ({
    q: "What does `screen -X -S name quit` do?",
    o: ["Sends quit to named screen (detached)", "Quit screen", "Kill screen", "Close screen session"],
    c: 0,
    e: "screen -X sends command to session. -S name. quit terminates.",
    de: "screen -X -S deploy quit. No need to attach. For scripting."
  }),
  (_i: number) => ({
    q: "What does `coproc cmd` do (bash)?",
    o: ["Creates coprocess (two-way pipe)", "Coprocess", "Background pipe", "Two-way pipe"],
    c: 0,
    e: "coproc runs cmd with stdin/stdout connected to shell. COPROC_PID, COPROC_FD.",
    de: "coproc { cmd; }; echo to >&${COPROC[1]}. Bidirectional. Less common than pipes."
  }),
  (_i: number) => ({
    q: "What does `wait` with no args do?",
    o: ["Waits for all background jobs of current shell", "Wait all", "All jobs", "All background"],
    c: 0,
    e: "wait with no args waits for every background job. Blocks until all done.",
    de: "cmd1 & cmd2 & wait. Script continues when both complete. wait returns last exit code."
  }),
  (_i: number) => ({
    q: "What does `ulimit -c unlimited` do?",
    o: ["Allows core dumps of any size", "Core dump", "Unlimited core", "Core file size"],
    c: 0,
    e: "ulimit -c = max core file size. unlimited = no limit. For debugging crashes.",
    de: "ulimit -c unlimited. Then run program, get core on crash. gdb program core."
  }),
  (_i: number) => ({
    q: "What does `echo $$` output?",
    o: ["Current shell's PID", "Shell PID", "Process ID", "Current PID"],
    c: 0,
    e: "$$ = PID of current shell. echo $$. $BASHPID in bash for subshell.",
    de: "Useful for temp files: /tmp/script.$$. Unique per shell instance."
  }),
  (_i: number) => ({
    q: "What does `systemctl list-dependencies --reverse service` show?",
    o: ["What depends on this service (reverse tree)", "Reverse deps", "Dependents", "What needs this"],
    c: 0,
    e: "--reverse shows who requires this service. Forward shows what it requires.",
    de: "systemctl list-dependencies --reverse nginx. What breaks if nginx stops."
  }),
  (_i: number) => ({
    q: "What does `journalctl --since '1 hour ago'` show?",
    o: ["Logs from last hour", "Recent logs", "Last hour", "Hour of logs"],
    c: 0,
    e: "journalctl --since '1 hour ago'. --until too. Flexible time format.",
    de: "journalctl --since '2024-01-15' --until '2024-01-16'. -u for unit."
  }),
  (_i: number) => ({
    q: "What does `crontab -l 2>/dev/null | crontab -` do?",
    o: ["Backs up crontab to temp and restores (no-op backup)", "Backup crontab", "Save crontab", "Crontab backup"],
    c: 0,
    e: "Lists to stdout, pipes to crontab -. Effectively backup. 2>/dev/null hides 'no crontab'.",
    de: "crontab -l > backup.txt is simpler. This is round-trip. Use for backup before edit."
  }),
  (_i: number) => ({
    q: "What does `systemctl enable --now service` do?",
    o: ["Enables at boot and starts immediately", "Enable and start", "Now and boot", "Start and enable"],
    c: 0,
    e: "enable --now = enable + start. One command for both.",
    de: "systemctl enable --now nginx. Common after install. Replaces two commands."
  }),
  (_i: number) => ({
    q: "What does `runuser -u user cmd` do?",
    o: ["Runs cmd as that user (no login shell)", "Run as user", "Switch user", "Execute as user"],
    c: 0,
    e: "runuser runs as user. No PAM, no login. Lighter than su. Requires root.",
    de: "runuser -u www-data -- ./script. For service scripts. runuser -l for login shell."
  }),
  (_i: number) => ({
    q: "What does `nsenter -t PID -m -p cmd` do?",
    o: ["Runs cmd in PID's mount and PID namespaces", "Enter namespace", "Namespace enter", "Join namespace"],
    c: 0,
    e: "nsenter enters namespaces of target process. -m mount, -p PID. For containers.",
    de: "nsenter -t 1234 -m -p /bin/bash. Debug container from host. Requires root."
  }),
  (_i: number) => ({
    q: "What does `pgrep -u user pattern` match?",
    o: ["Processes of user matching pattern", "User's processes", "Filter by user", "User and pattern"],
    c: 0,
    e: "pgrep -u user filters by owner. pgrep -u root nginx.",
    de: "pgrep -u www-data. -x for exact match. -f for full command."
  }),
  (_i: number) => ({
    q: "What does `pkill -x exactname` do?",
    o: ["Matches process with exact name only", "Exact match", "Full name match", "No partial"],
    c: 0,
    e: "pkill -x matches exact name. pkill -x nginx not nginx-worker.",
    de: "pkill -x script.sh. -f for full command line match."
  }),
  (_i: number) => ({
    q: "What does `renice +5 -p PID` do?",
    o: ["Lowers priority of running process (nicer)", "Lower priority", "Renice down", "Make nicer"],
    c: 0,
    e: "renice changes nice of running process. +5 = lower priority. Only own or root.",
    de: "renice -n 19 -p 1234. Negative for higher priority (root only)."
  }),
  (_i: number) => ({
    q: "What does `chrt -f 99 cmd` do?",
    o: ["Runs cmd as real-time FIFO priority 99", "Real-time FIFO", "RT priority", "FIFO scheduling"],
    c: 0,
    e: "chrt -f 99 = SCHED_FIFO priority 99. Highest real-time. Root only.",
    de: "chrt -f 1 ./realtime. -r for RR. Dangerous: can starve system."
  }),
  (_i: number) => ({
    q: "What does `systemctl mask service` do?",
    o: ["Prevents service from being started (symlink to /dev/null)", "Disable permanently", "Mask service", "Block start"],
    c: 0,
    e: "mask prevents start. Stronger than disable. Symlink to /dev/null.",
    de: "systemctl mask nginx. systemctl unmask to restore. For conflicting services."
  }),
  (_i: number) => ({
    q: "What does `systemctl revert service` do?",
    o: ["Reverts masked unit to vendor version", "Unmask vendor", "Revert mask", "Restore vendor"],
    c: 0,
    e: "revert undoes mask. Restores to /lib or /usr. For package-managed units.",
    de: "systemctl revert nginx. After mask. Gets vendor unit back."
  }),
  (_i: number) => ({
    q: "What does `loadavg` in /proc/loadavg show?",
    o: ["1, 5, 15 min load averages and runnable info", "Load averages", "System load", "Load 1 5 15"],
    c: 0,
    e: "Load = runnable + uninterruptible. 3 numbers: 1m, 5m, 15m. Then runnable/total.",
    de: "cat /proc/loadavg. uptime shows same. Per-CPU: load/cores."
  }),
  (_i: number) => ({
    q: "What does `vmstat 1` output?",
    o: ["Virtual memory stats every 1 second", "VM stats", "Memory stats", "Virtual memory"],
    c: 0,
    e: "vmstat 1 prints every second. Procs, memory, swap, io, system, cpu.",
    de: "vmstat 1 5 for 5 samples. si/so = swap in/out. Good for memory pressure."
  }),
  (_i: number) => ({
    q: "What does `mpstat -P ALL 1` show?",
    o: ["Per-CPU stats every second", "Per-CPU usage", "All CPUs", "CPU stats"],
    c: 0,
    e: "mpstat -P ALL per-CPU. 1 = 1s interval. %idle, %user, %sys. sysstat.",
    de: "mpstat -P 0 for CPU 0. Identify hot CPU. iostat for disk."
  }),
  (_i: number) => ({
    q: "What does `sar -u 1 5` show?",
    o: ["CPU utilization 5 times at 1s interval", "CPU sar", "CPU usage", "SAR CPU"],
    c: 0,
    e: "sar -u for CPU. 1 5 = 5 samples, 1s apart. %user, %nice, %system, %idle.",
    de: "sar from sysstat. Historical if sadc running. sar -r for memory."
  }),
  (_i: number) => ({
    q: "What does `systemctl show service -p MainPID` output?",
    o: ["Main process ID of the service", "Main PID", "Service PID", "Primary PID"],
    c: 0,
    e: "systemctl show -p MainPID gets PID. MainPID=1234 or MainPID=0 if not running.",
    de: "systemctl show nginx -p MainPID. For scripting. -p for specific property."
  }),
  (_i: number) => ({
    q: "What does `systemctl is-active service` return?",
    o: ["active, inactive, or failed", "Service state", "Active status", "Running state"],
    c: 0,
    e: "systemctl is-active. Exits 0 if active. active, inactive, failed, etc.",
    de: "systemctl is-active nginx. For scripts. if systemctl is-active nginx; then"
  }),
];
